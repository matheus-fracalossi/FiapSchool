import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreKeys} from './types';

export const removeData = async (key: StoreKeys) =>
  await await AsyncStorage.removeItem(key);
