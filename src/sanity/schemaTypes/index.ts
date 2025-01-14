import { type SchemaTypeDefinition } from 'sanity'
import exhibition from './exhibition';
import slider from './slider';
import photoSection from './photoSection';
import news from './news';
import contactInfo from "@/sanity/schemaTypes/contactInfo";
import partnersSlider from "@/sanity/schemaTypes/partnersSlider";
import visitorsInfo from "@/sanity/schemaTypes/visitorsInfo";
import aboutPage from "@/sanity/schemaTypes/aboutPage";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [exhibition, slider, photoSection, news, contactInfo, partnersSlider, visitorsInfo, aboutPage],
}
