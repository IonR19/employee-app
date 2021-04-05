import React from "react";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  data: string[];
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

    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleSelection = this.handleSelection.bind(this);
    // this.updateQuery = this.updateQuery.bind(this);
  }

  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { activeIndex, matches } = this.state;

    switch (event.which) {
      case 13: // Enter key
        if (matches.length) {
          this.setState({
            activeIndex: 0,
            matches: [],
            query: matches[activeIndex],
            selected: true,
          });
        }
        break;
      case 38: // Up arrow
        this.setState({
          activeIndex: activeIndex >= 1 ? activeIndex - 1 : 0,
        });
        break;
      case 40: // Down arrow
        this.setState({
          activeIndex: activeIndex < matches.length - 1 ? activeIndex + 1 : matches.length - 1,
        });
        break;
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
    });
  };

  updateQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { data } = this.props;

    if (!this.state.selected) {
      const query = e.target.value;
      this.setState({
        matches:
          query.length >= 2
            ? data.filter((item) => item.toUpperCase().indexOf(query.toUpperCase()) >= 0)
            : [],
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
        {label && <label className="label">{label}</label>}
        <div className="control">
          <div className={`dropdown ${matches.length > 0 ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
              <input
                type="text"
                className="input"
                name={name}
                value={query}
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
