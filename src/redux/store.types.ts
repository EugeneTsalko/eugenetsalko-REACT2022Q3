export type PhotoCard = {
  imgUrl: string;
  title: string;
  link: string;
  id: string;
};

export type FormCard = {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  location?: string;
  dataAgree?: boolean;
  sex?: string;
  photo?: string;
};

export type getDataParams = {
  searchWord: string;
  sort: 'relevance' | 'date-posted-desc' | 'date-posted-asc';
  currentPage: number;
};

export type InitialStateType = {
  currentPage: number;
  sort: 'relevance' | 'date-posted-desc' | 'date-posted-asc';
  searchWord: string;
  isLoaded: boolean;
  isFirstRun: boolean;
  cards: PhotoCard[];
  formCards: FormCard[];
};

export enum SortValues {
  relevance = 'relevance',
  datePostedDesc = 'date-posted-desc',
  datePostedAsc = 'date-posted-asc',
}
