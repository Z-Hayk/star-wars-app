import { Platform, Dimensions, Keyboard } from 'react-native';
import { Any, RootState, StarWarsRSDT, StarWarsRQDT } from 'types';
import lodashUniqueId from 'lodash/uniqueId';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const KeyboardDismiss: () => void = () => Keyboard.dismiss();

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = isIOS
  ? Dimensions.get('window').height
  : Dimensions.get('screen').height;

export const errorHandler = (error: Any): Any => error;
export const getStateHandler = (getState: Any): RootState => getState();

export const starWarsDataGenerator = (
  data: { data: { results: StarWarsRQDT[] } }[],
): StarWarsRSDT[] => {
  const newData: StarWarsRSDT[] = [];
  data.forEach((item: { data: { results: StarWarsRQDT[] } }) => {
    item.data.results.forEach((subItem: StarWarsRQDT) => {
      const newDataItem: StarWarsRSDT = {} as StarWarsRSDT;
      if (subItem.url.includes('people')) {
        newDataItem.id = lodashUniqueId();
        newDataItem.type = 'people';
        newDataItem.name = subItem.name;
        newDataItem.gender = subItem.gender;
        newDataItem.starships = String(subItem.starships.length);
      }
      if (subItem.url.includes('starships')) {
        newDataItem.id = lodashUniqueId();
        newDataItem.type = 'starship';
        newDataItem.name = subItem.name;
        newDataItem.model = subItem.model;
        newDataItem.manufacturer = subItem.manufacturer;
        newDataItem.passengers = subItem.passengers;
      }
      if (subItem.url.includes('planets')) {
        newDataItem.id = lodashUniqueId();
        newDataItem.type = 'planet';
        newDataItem.name = subItem.name;
        newDataItem.diameter = subItem.diameter;
        newDataItem.population = subItem.population;
      }
      if (subItem.url.includes('films')) {
        newDataItem.id = lodashUniqueId();
        newDataItem.type = 'film';
        newDataItem.title = subItem.title;
        newDataItem.producer = subItem.producer;
        newDataItem.director = subItem.director;
      }
      newDataItem.isCache = false;
      newDataItem.url = subItem.url;
      newData.push(newDataItem);
    });
  });
  return newData;
};
