import { type SchemaTypeDefinition } from 'sanity'
import exhibition from './exhibition';
import slider from './slider';
import photoSection from './photoSection';
import news from './news';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [exhibition, slider, photoSection, news],
}
