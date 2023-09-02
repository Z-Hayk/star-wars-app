import { AppTypes } from 'modules/app/types';
import { HomeTypes } from 'modules/home/types';

export interface RootState {
  app: AppTypes;
  home: HomeTypes;
}
