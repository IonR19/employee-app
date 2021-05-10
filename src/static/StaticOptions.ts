export interface OptionInputProps {
  value: string;
  title?: string;
}

export const NationalityOption: OptionInputProps[] = [
  { value: "Afghan" },
  { value: "Albanian" },
  { value: "Algerian" },
  { value: "Argentine" },
  { value: "Argentinian" },
  { value: "Australian" },
  { value: "Austrian" },
  { value: "Bangladeshi" },
  { value: "Belgian" },
  { value: "Bolivian" },
  { value: "Batswana" },
  { value: "Brazilian" },
  { value: "Bulgarian" },
  { value: "Cambodian" },
  { value: "Cameroonian" },
  { value: "Canadian" },
  { value: "Chilean" },
  { value: "Chinese" },
  { value: "Colombian" },
  { value: "Costa Rican" },
  { value: "Croatian" },
  { value: "Cuban" },
  { value: "Czech" },
  { value: "Danish" },
  { value: "Dominican" },
  { value: "Ecuadorian" },
  { value: "Egyptian" },
  { value: "Salvadorian" },
  { value: "English" },
  { value: "Estonian" },
  { value: "Ethiopian" },
  { value: "Fijian" },
  { value: "Finnish" },
  { value: "French" },
  { value: "German" },
  { value: "Ghanaian" },
  { value: "Greek" },
  { value: "Guatemalan" },
  { value: "Haitian" },
  { value: "Honduran" },
  { value: "Hungarian" },
  { value: "Icelandic" },
  { value: "Indian" },
  { value: "Indonesian" },
  { value: "Iranian" },
  { value: "Iraqi" },
  { value: "Irish" },
  { value: "Israeli" },
  { value: "Italian" },
  { value: "Jamaican" },
  { value: "Japanese" },
  { value: "Jordanian" },
  { value: "Kenyan" },
  { value: "Kuwaiti" },
  { value: "Lao" },
  { value: "Latvian" },
  { value: "Lebanese" },
  { value: "Libyan" },
  { value: "Lithuanian" },
  { value: "Malagasy" },
  { value: "Malaysian" },
  { value: "Malian" },
  { value: "Maltese" },
  { value: "Mexican" },
  { value: "Mongolian" },
  { value: "Moroccan" },
  { value: "Mozambican" },
  { value: "Namibian" },
  { value: "Nepalese" },
  { value: "Dutch" },
  { value: "New Zealand" },
  { value: "Nicaraguan" },
  { value: "Nigerian" },
  { value: "Norwegian" },
  { value: "Pakistani" },
  { value: "Panamanian" },
  { value: "Paraguayan" },
  { value: "Peruvian" },
  { value: "Philippine" },
  { value: "Polish" },
  { value: "Portuguese" },
  { value: "Romanian" },
  { value: "Russian" },
  { value: "Saudi" },
  { value: "Scottish" },
  { value: "Senegalese" },
  { value: "Serbian" },
  { value: "Singaporean" },
  { value: "Slovak" },
  { value: "South African" },
  { value: "Korean" },
  { value: "Spanish" },
  { value: "Sri Lankan" },
  { value: "Sudanese" },
  { value: "Swedish" },
  { value: "Swiss" },
  { value: "Syrian" },
  { value: "Taiwanese" },
  { value: "Tajikistani" },
  { value: "Thai" },
  { value: "Tongan" },
  { value: "Tunisian" },
  { value: "Turkish" },
  { value: "Ukrainian" },
  { value: "Emirati" },
  { value: "British" },
  { value: "American" },
  { value: "Uruguayan" },
  { value: "Venezuelan" },
  { value: "Vietnamese" },
  { value: "Welsh" },
  { value: "Zambian" },
  { value: "Zimbabwean" },
];

export const GenderOptions: OptionInputProps[] = [
  { title: "Male", value: "M" },
  { title: "Female", value: "F" },
];

export const MartialOptions: OptionInputProps[] = [
  { value: "Single" },
  { value: "Married" },
  { value: "Divorced" },
  { value: "Widow" },
];

export const SectionOptions: OptionInputProps[] = [
  { value: "AH", title: "Ahmadi" },
  { value: "JH", title: "Jahra" },
  { value: "FR", title: "Farwaniya" },
  { value: "AS", title: "Asima" },
  { value: "HW", title: "Hawally" },
  { value: "MB", title: "Mubarak Al Kabeer" },
  { value: "REPAIR", title: "Maintenance & Protection" },
  { value: "SECURITY", title: "Saftey & Security" },
  { value: "CIVIL", title: "Civil Work" },
];

export const WorkSector: OptionInputProps[] = [
  { value: "emergency", title: "emergency" },
  { value: "operation", title: "operation" },
];

export const vacationOptions = [];

export const transferOptions = {
  internal: SectionOptions,
  external: [],
};

export const leaveOptions: OptionInputProps[] = [
  { value: "start", title: "mid-shift" },
  { value: "end", title: "end-shift" },
];
