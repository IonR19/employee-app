import { ActionTypes } from "./settings.types";

export interface IChangeLanguage {
  type: ActionTypes.SWITCH_LANGUAGE;
}

export const ChangeLanguage = (): IChangeLanguage => {
  return {
    type: ActionTypes.SWITCH_LANGUAGE,
  };
};
