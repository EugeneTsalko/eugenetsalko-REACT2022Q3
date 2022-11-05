interface IPerson {
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: string | undefined;
  location: string | undefined;
  dataAgree?: boolean | undefined;
  sex: string | undefined;
  photo?: string | undefined;
}

export type PersonCardProps = {
  data: IPerson;
};
