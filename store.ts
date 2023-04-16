import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

// enable static rendering ONLY on server
// @ts-ignore
enableStaticRendering(typeof window === "untdefined")

class DataStore {
  list: any;
  params: any;

  constructor() {
    this.list = [];
    this.params = "";
    makeAutoObservable(this);
  }

  setParam = (param: any) => {
    this.params = param;
  };

  setList = (newList: any) => (this.list = newList);

  get size() {
    return this.list.length
  }

  hydrate = (data: any) => {
    if (!data) return;
    this.setList(data.list);
  };
}

// init a client store that we will send to client (one store for client)
let clientStore: any

const initStore = (initData: any) => {
// check if we already declare store (client Store), otherwise create one
  const store = clientStore ?? new DataStore();
// hydrate to store if receive initial data
  if (initData) store.hydrate(initData)

// Create a store on every server request
  if (typeof window === "undefined") return store
// Otherwise it's client, remember this store and return
if (!clientStore) clientStore = store;
  return store
}

// Hoook for using store
export function useStore(initData: any) {
  return initStore(initData)
}
