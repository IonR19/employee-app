import produce from "immer";
import { ActionTypes, IAppSettingsActions } from "./settings.types";

export interface ISettingReducer {
  app_lng: string;
}

const initialState: ISettingReducer = {
  app_lng: "en",
};

const SettingsReducer = produce((state: ISettingReducer = initialState, action: IAppSettingsActions) => {
  switch (action.type) {
    case ActionTypes.SWITCH_LANGUAGE:
      state.app_lng = action.payload;
      return state;
    default:
      return state;
  }
});

export default SettingsReducer;
