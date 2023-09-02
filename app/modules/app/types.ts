import { StarWarsRSDT } from 'types';

export interface AppTypes {
  initialScreen: 'Welcome' | 'Home';
  cacheData: StarWarsRSDT[];
}
