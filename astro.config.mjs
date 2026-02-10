// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site:'https://frank0o.github.io',
  base:'/gqcuts',
  integrations: [icon({
    include:{
      bi: ['tiktok','instagram','facebook']
    }
  }),
]
});