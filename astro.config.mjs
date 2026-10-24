import { defineConfig } from "astro/config";

// Sitio 100 % estático: no necesita servidor ni adaptador, Vercel lo publica tal cual.
export default defineConfig({
  output: "static",
  build: {
    // Evita un archivo CSS/JS extra por componente (menos peticiones en móviles lentos)
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      // Compila para navegadores más antiguos (iOS 12+, Android con Chrome 64+)
      target: ["chrome64", "safari12", "firefox67"],
      cssTarget: ["chrome64", "safari12", "firefox67"],
    },
  },
});
