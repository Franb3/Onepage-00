// ========================================================================
// site.ts — Datos del sitio en un solo lugar
// ------------------------------------------------------------------------
// * Aquí se editan textos, ubicación del mapa, redes sociales y comidas
// * sin tocar los componentes.
// ========================================================================

// * Datos generales (se usan en el título, el pie de página y el correo del formulario)
export const site = {
  name: "Paraíso Nevado",
  description:
    "Paraíso Nevado: refugio de montaña para esquí, snowboard, paseos en trineo, cabañas y gastronomía. Escríbenos y planifica tus vacaciones en la nieve.",
  footerText: "¡Ven a visitarnos y vive la magia del invierno! ❄️🏔️",
};

// * Enlaces del menú. "href" debe coincidir con el id de cada sección en index.astro
// ! Si agregas o quitas una sección, actualiza también este listado
export const nav = [
  { label: "Inicio", href: "#header" },
  { label: "Galería", href: "#gallery" },
  { label: "Nosotros", href: "#about" },
  { label: "Gastronomía", href: "#meals" },
  { label: "Contacto", href: "#contact" },
];

// * Ubicación del mapa de la sección de contacto
// TODO: Reemplazar estas coordenadas de ejemplo por las del negocio real
// ? En Google Maps: clic derecho sobre el lugar > copiar coordenadas (latitud, longitud)
export const location = {
  name: "Paraíso Nevado",
  lat: -33.3573,
  lng: -70.2507,
  // ? Tamaño del área visible en grados: más pequeño = más zoom
  area: 0.01,
};

// * Sección de gastronomía
export const mealsSection = {
  title: "Gastronomía",
  intro:
    "Cada día preparamos platos calientes con sabores de montaña para que recuperes energías entre pista y pista.",
};

// * Comidas del día. Cada una se muestra como una tarjeta con su ícono
// ? "icon" puede ser: coffee, utensils, cookie, wine (otros íconos disponibles en components/Icon.astro)
// TODO: Los horarios y descripciones son de ejemplo
export const meals = [
  {
    icon: "coffee",
    title: "Desayuno",
    time: "07:30 – 10:30",
    description:
      "Café de grano, pan recién horneado, huevos, frutas y chocolate caliente para empezar el día.",
  },
  {
    icon: "utensils",
    title: "Almuerzo",
    time: "12:30 – 15:30",
    description:
      "Sopas, carnes y platos vegetarianos servidos junto a la chimenea después de la mañana en la nieve.",
  },
  {
    icon: "cookie",
    title: "Merienda",
    time: "16:30 – 18:30",
    description:
      "Tortas, galletas y bebidas calientes para recargar energías al volver de las pistas.",
  },
  {
    icon: "wine",
    title: "Cena",
    time: "20:00 – 22:30",
    description:
      "Menú de tres tiempos con ingredientes de temporada y una buena copa de vino.",
  },
];

// * Redes sociales del pie de página
// TODO: Reemplazar los enlaces de ejemplo por perfiles reales
// ? Para ocultar una red basta con borrar su línea. Los nombres de ícono disponibles están en config/icons.ts
export const social = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "X (Twitter)", href: "https://x.com/", icon: "x" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { name: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { name: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
] as const;
