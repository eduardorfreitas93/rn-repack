import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user, {UserProps} from './user';

export type MyState = UserProps;

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
            ...user(set),
        }),
        { name: "RepackDemo", storage: createJSONStorage(() => storage) },
    ),
);

export default useStore;
