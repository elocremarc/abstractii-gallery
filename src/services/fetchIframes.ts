import type { GalleryItem } from '../types/GalleryType';
import collection from '../constants/collection';

export function fetchIframes(): Promise<GalleryItem[]> {
  return Promise.resolve(collection as GalleryItem[]);
}
