export type FlickrImage = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

type ApiCard = {
  imgUrl: string;
  title: string;
  link: string;
};

export type SearchBarProps = {
  onChange: (data: ApiCard[]) => void;
};
