import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreKeys} from './types';

export const readData = async (key: StoreKeys) =>
  await AsyncStorage.getItem(key);
