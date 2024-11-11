// sanity.config.js

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Leonardo Murillo E-commerce CMS',

  projectId: 'tg8f7skg',  // Reemplaza con tu Project ID de Sanity
  dataset: 'production',               // Usa el dataset configurado (usualmente 'production')

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,                // Importamos los esquemas desde schemaTypes
  },
});
