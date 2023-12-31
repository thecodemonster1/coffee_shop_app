import { create } from "zustand";
import { produce } from "immer";
import {persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavouriteList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) => 
      set(
        produce(state => {
          let found = false;
          for (let i = 0; i < state.CartList.length; i++){
            if (state.CartList[i].id == cartItem.id){
              found = true
              let size  = false
              for (let j = 0; j < state.CartList[i].prices.length; j++){
                if (state.CartList[i].prices[j].size == cartItem.prices[0].size){
                  size = true
                  state.CartList[i].prices[j].quanity++
                  break;
                }
              }
              
            }
          }
        }),
      )
    }),
    {
      name: 'coffee-app', 
      storage: createJSONStorage(() => AsyncStorage),
    },
  )
)