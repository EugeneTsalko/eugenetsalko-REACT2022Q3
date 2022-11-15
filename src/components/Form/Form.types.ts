export type FormValues = {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  location?: string;
  dataAgree?: boolean;
  sex?: string;
  photo?: string;
};

export type FormProps = {
  onChange: (params: FormValues) => void;
};
