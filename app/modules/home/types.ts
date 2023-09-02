import { AsyncStatus, StarWarsRSDT } from 'types';

export interface HomeTypes {
  searchText: string;
  data: StarWarsRSDT[];
  getHomeInfoReqStat: AsyncStatus;
}
