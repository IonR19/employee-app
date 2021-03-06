import React from "react";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  data: string[];
  limit?: number;
  onSelect: Function;
}

interface State {
  activeIndex: number;
  matches: string[];
  query: string;
  selected: boolean;
}

class Autocomplete extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeIndex: 0,
      matches: [],
      query: "",
      selected: false,
    };
  }

  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { activeIndex, matches } = this.state;
    
    switch (event.key) {
      case 'Enter': // Enter key
        if (matches.length) {
          this.setState({
            activeIndex: 0,
            matches: [],
            query: matches[activeIndex],
            selected: true,
          }, () => {
            this.props.onSelect(this.state.query);
          });
        }
        break;
      case 'ArrowUp': // Up arrow
        this.setState({
          activeIndex: (activeIndex - 1 + matches.length) % matches.length,
        });
        break;
      case 'ArrowDown': // Down arrow
        this.setState({
          activeIndex: (activeIndex + 1) % matches.length,
        });
        break;
      case 'Escape':
        
      default:
        break;
    }
  };

  handleSelection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selection: string) => {
    event.preventDefault();
    
    this.setState({
      activeIndex: 0,
      query: selection,
      matches: [],
      selected: true,
    }, () => {
      this.props.onSelect(this.state.query);
    });
  };

  updateQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { data, onSelect, limit = 5 } = this.props;
    if (!this.state.selected) {
      const query = e.target.value;
      onSelect(query)
      this.setState({
        matches: data
          .filter((item) => item.toUpperCase().indexOf(query.toUpperCase()) >= 0)
          .slice(0, limit),
        query,
      });
    } else {
      //@ts-ignore
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        this.setState({
          matches: [],
          query: "",
          selected: false,
        });
      }
    }
  };

  render() {
    const { label, name, placeholder } = this.props;
    const { activeIndex, matches, query } = this.state;
    return (
      <div className="field">
        {label && (
          <label className="label" htmlFor={name}>
            {label}
          </label>
        )}
        <div className="control">
          <div className={`dropdown ${matches.length > 0 ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
              <input
                type="text"
                autoComplete="off"
                className="input"
                name={name}
                value={query}
                id={name}
                onChange={this.updateQuery}
                onKeyDown={this.handleKeyPress}
                placeholder={placeholder}
              />
            </div>
            <div className="dropdown-menu">
              {matches.length > 0 && (
                <div className="dropdown-content">
                  {matches.map((match, index) => (
                    <a
                      className={`dropdown-item ${index === activeIndex ? "is-active" : ""}`}
                      href="/"
                      key={match}
                      onClick={(event) => this.handleSelection(event, match)}
                    >
                      {match}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
