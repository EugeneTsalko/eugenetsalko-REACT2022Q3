import { FlickrImage, FlickrResponse } from './api.types';

const HOSTNAME = 'https://www.flickr.com';
const IMAGE_HOSTNAME = 'https://live.staticflickr.com';
const PATHNAME = '/services/rest';
const API_KEY = 'd0923ccb06a0c5a498f7c6bf3e464ac2';

export const fetchData = async (searchWord: string, sortMethod: string, pageNum: number) => {
  const SEARCH_METHOD = `/?method=flickr.photos.search&api_key=${API_KEY}&sort=${sortMethod}&per_page=21&page=${pageNum}&format=json&nojsoncallback=1`;

  try {
    const response = await fetch(`${HOSTNAME}${PATHNAME}${SEARCH_METHOD}&tags=${searchWord}`);
    const { photos }: FlickrResponse = await response.json();
    const photosArr = photos.photo.map(({ id, title, owner, secret, server }: FlickrImage) => {
      return {
        id: id,
        imgUrl: `${IMAGE_HOSTNAME}/${server}/${id}_${secret}_b.jpg`,
        title: title || 'No title',
        link: `${HOSTNAME}/photos/${owner}/${id}`,
      };
    });

    return photosArr;
  } catch (err) {
    console.log(err);
  }
};
