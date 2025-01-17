import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env'; // Ваши параметры из env

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Включите true для кэширования, если данные статичны
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
