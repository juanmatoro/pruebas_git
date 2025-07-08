/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WORDPRESS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
