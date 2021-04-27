import { ActionTypes } from "./settings.types";

export interface IChangeLanguage {
  type: ActionTypes.SWITCH_LANGUAGE;
  payload: string;
}

export const ChangeLanguage = (language: string) => {
  return {
    type: ActionTypes.SWITCH_LANGUAGE,
    payload: language,
  };
};
