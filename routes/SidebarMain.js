const SidebarMainRoutes = [
  {
    isTarget: (path) => path.startsWith("/pokemon"),
    path: "/pokemons",
    fontawesome: "fas fa-paw",
    label: "Pokemons",
  },
  {
    isTarget: (path) => path.startsWith("/video"),
    path: "/videos",
    fontawesome: "fab fa-youtube",
    label: "Videos",
  },
  {
    isTarget: (path) => path.startsWith("/friend-area"),
    path: "/friend-areas",
    fontawesome: "fas fa-map-marked",
    label: "Friend Areas",
  },
  {
    isTarget: (path) => path.startsWith("/analysis"),
    path: "/analysis",
    fontawesome: "fas fa-chart-bar",
    label: "Analysis",
  },
];

export default SidebarMainRoutes;
