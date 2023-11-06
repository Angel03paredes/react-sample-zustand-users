import {create} from "zustand";

export const useUserStore = create((set, get) => ({
  users: [],
  getUsers: async () => {
    
    const resp = await (
      await fetch("https://randomuser.me/api/?results=50")
    ).json();
    set( state=> ({...state,users:resp?.results}));
  },
  cleanStore: () => set([], true),
}));
