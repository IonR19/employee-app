import { createSelector } from "reselect";
import { RootState } from "../store";

export const appSettings = (store: RootState) => store.settings;
export const appLanguage = (store: RootState) => store.settings.app_lng;
export const appLanguageDir = (store: RootState) => (store.settings.app_lng == "en" ? "ltr" : "rtl");
