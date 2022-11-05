export type FormValues = {
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: string | undefined;
  location: string | undefined;
  dataAgree?: boolean | undefined;
  sex: string | undefined;
  photo?: string | undefined;
};

export type FormProps = {
  onChange: (params: FormValues) => void;
};
