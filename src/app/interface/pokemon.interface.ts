export interface PokemonListResponse{
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon{
  name: string;
  url: string;
}

export interface PokemonDetail {
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}
