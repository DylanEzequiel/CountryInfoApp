import { create } from 'zustand'

const useStore = create((set) => ({
  country:{},
  countries:[],
  setCountries:(data) => set({countries:data}) ,
  setCountry: (data) => set({ country:data }),
}))




export const setCountry = (data)=>useStore.getState().setCountry(data)
export const setCountries = (data)=>useStore.getState().setCountries(data)

export default useStore