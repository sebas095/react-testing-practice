import PokemonInfo from "../pages/pokemon-info";
import PokemonList from "../pages/pokemon-list";
import NotFound from "../pages/not-found";

const ROUTES = [
  {
    path: ["/"],
    key: "HOME",
    exact: true,
    component: PokemonList,
  },
  {
    path: ["/pokemon/:id"],
    key: "DETAILS",
    exact: false,
    component: PokemonInfo,
  },
  {
    key: "NOT FOUND",
    component: NotFound,
  },
];

export default ROUTES;
