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

export type FlickrResponse = {
  photos: {
    page?: number;
    pages?: number;
    perpage?: number;
    total?: number;
    photo: FlickrImage[];
  };
};
