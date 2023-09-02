// IMPORTANT Need to write a title ...RSDT (response data types)

export interface ResponseErrorsRSDT {
  [key: string]: string;
}

export interface StarWarsRSDT {
  id: string;
  url: string;
  isCache: boolean;
  type: 'people' | 'starship' | 'planet' | 'film';
  name?: string;
  gender?: string;
  starships?: string;
  model?: string;
  manufacturer?: string;
  passengers?: string;
  diameter?: string;
  population?: string;
  title?: string;
  producer?: string;
  director?: string;
}
