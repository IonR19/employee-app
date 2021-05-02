import { IChangeLanguage } from "./settings.actions";

export enum ActionTypes {
  SWITCH_LANGUAGE = "SWITCH_LANGUAGE",
}

export type IAppSettingsActions = IChangeLanguage;
