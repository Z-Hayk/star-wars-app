// IMPORTANT Need to write a title ...RQDT (request data types)

import { StarWarsRSDT } from './responseData';

export interface StarWarsRQDT extends Omit<StarWarsRSDT, 'starships'> {
  url: string;
  starships: string[];
}
