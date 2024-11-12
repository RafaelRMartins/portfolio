import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string): Response<T>{
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if(storageValue){
      return JSON.parse(storageValue)
    } else{
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      return mediaQuery.matches ? dark : light
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState;