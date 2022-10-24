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

export type ApiCard = {
  imgUrl: string;
  title: string;
  link: string;
};
