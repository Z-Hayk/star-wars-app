import Api from './Api';
import { AxiosPromise } from 'axios';

export class Home {
  static getPeopleReq = (name: string): AxiosPromise => Api.get(`people?search=${name}`);
  static getStarshipReq = (name: string): AxiosPromise => Api.get(`starships?search=${name}`);
  static getPlanetReq = (name: string): AxiosPromise => Api.get(`planets?search=${name}`);
  static getFilmReq = (title: string): AxiosPromise => Api.get(`films?search=${title}`);
}
