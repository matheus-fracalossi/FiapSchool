import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreKeys} from './types';

export const storeData = async (value: string, key: StoreKeys) =>
  await AsyncStorage.setItem(key, value);
