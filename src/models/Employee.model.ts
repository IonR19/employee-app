export type iEmployee = {
  name: string;
  civil_id: string;
  file_no: string;
  phone: string;
  section: string;
  [key: string]: string;
} & { id?: string };
