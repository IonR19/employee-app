import produce from "immer";
import i18n from "../../localization/i18n";
import { ActionTypes, IAppSettingsActions } from "./settings.types";

export interface ISettingReducer {
  app_lng: string;
}

const initialState: ISettingReducer = {
  app_lng: i18n.language,
};

const SettingsReducer = produce((state: ISettingReducer = initialState, action: IAppSettingsActions) => {
  switch (action.type) {
    case ActionTypes.SWITCH_LANGUAGE:
      state.app_lng = state.app_lng == "en" ? "ar" : "en";
      return state;
    default:
      return state;
  }
});

export default SettingsReducer;
