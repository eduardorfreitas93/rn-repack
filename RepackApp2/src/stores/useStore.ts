import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import testeApp1, {TesteApp1Props} from './testeApp1';

export type MyState = TesteApp1Props;

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return AsyncStorage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(name, value);
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItem: () => {},
};

const useStore = create<MyState>()(
  persist(
    (set, get) => ({
      ...testeApp1(set),
    }),
    { name: "RepackDemo", storage: createJSONStorage(() => storage) },
  ),
);

export default useStore;
