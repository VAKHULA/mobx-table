import type { AppProps } from 'next/app'
import { createContext, useContext } from "react";
import { useStore } from "../store";

const MobxContext = createContext({});

export const useMobxStore = () => useContext(MobxContext)

export default function App (props: AppProps) {
  const { Component, pageProps} = props
  const { initialState, ...restProps } = pageProps
  const store = useStore(initialState);

  return (
    <MobxContext.Provider value={store}>
      <Component {...restProps} />
    </MobxContext.Provider>
  );
};
