import React, { createContext, useContext, useReducer } from 'react'
import { reducer,productReducer } from './Reducers'
const Info=createContext()
function Context({children}) {
    const products=[
        {
            id:1,
            image:"./images/1.jpg",
            name:"Haldiram's Sev Bhujiya",
            desc:"Snacks & Munchies",
            stock:10,
            price:18,
            qty:0
        },
        {
            id:2,
            image:"./images/2.jpg",
            name:"NutriChoice Digestive",
            desc:"Bakery & Buiscuits",
            stock:8,
            price:24,
            qty:0
        },
        {
            id:3,
            image:"./images/3.jpg",
            name:"Cadbury 5 Star",
            desc:"Bakery & Buiscuits",
            stock:9,
            price:32,
            qty:0
        },
        {
            id:4,
            image:"./images/4.jpg",
            name:"Onion Flavour Potato",
            desc:"Snacks & Munchies",
            stock:10,
            price:3,
            qty:0
        },
        {
            id:5,
            image:"./images/5.jpg",
            name:"Salted instant popcorn",
            desc:"Instant food",
            stock:5,
            price:13,
            qty:0
        },
        {
            id:6,
            image:"./images/6.jpg",
            name:"Blueberry Greek Yogurt",
            desc:"Dairy, Bread & Eggs",
            stock:6,
            price:18,
            qty:0
        },
        {
            id:7,
            image:"./images/7.jpg",
            name:"Britannia Cheese Slices",
            desc:"Dairy, Bread & Eggs",
            stock:7,
            price:24,
            qty:0
        },
        {
            id:8,
            image:"./images/8.jpg",
            name:"Kellog's original cereals",
            desc:"Instant Food",
            stock:8,
            price:32,
            qty:0
        },
        {
            id:9,
            image:"./images/9.jpg",
            name:"Slurrp Millet Chocolate",
            desc:"Snacks & Munchies",
            stock:9,
            price:3,
            qty:0
        },
        {
            id:10,
            image:"./images/10.jpg",
            name:"Amul Butter - 500g",
            desc:"Dairy, Bread & Eggs",
            stock:10,
            price:13,
            qty:0
        },
        {
            id:11,
            image:"./images/11.jpg",
            name:"Apple",
            desc:"Fruits & Vege",
            stock:10,
            price:18,
            qty:0
        },
        {
            id:12,
            image:"./images/12.jpg",
            name:"Banana",
            desc:"Fruits & Vege",
            stock:8,
            price:24,
            qty:0
        },
        {
            id:13,
            image:"./images/13.jpg",
            name:"Beet Root",
            desc:"Fruits & Vege",
            stock:9,
            price:32,
            qty:0
        },
        {
            id:14,
            image:"./images/14.jpg",
            name:"Chicken",
            desc:"Meat & Fish",
            stock:10,
            price:3,
            qty:0
        },
        {
            id:15,
            image:"./images/15.jpg",
            name:"Washing Powder",
            desc:"Cleaning Essentials",
            stock:5,
            price:13,
            qty:0
        },
        {
            id:16,
            image:"./images/16.jpg",
            name:"Milk & Bread",
            desc:"Dairy, Bread & Eggs",
            stock:6,
            price:18,
            qty:0
        },
        {
            id:17,
            image:"./images/17.jpg",
            name:"Maggie & kellog's",
            desc:"Instant Food",
            stock:7,
            price:24,
            qty:0
        },
        {
            id:18,
            image:"./images/18.jpg",
            name:"Dog's Food",
            desc:"Instant Food",
            stock:8,
            price:32,
            qty:0
        },
        {
            id:19,
            image:"./images/19.jpg",
            name:"Lay's Chips",
            desc:"Snacks & Munchies",
            stock:9,
            price:3,
            qty:0
        },
        {
            id:20,
            image:"./images/20.jpg",
            name:"Bournvita",
            desc:"Dairy, Bread & Eggs",
            stock:10,
            price:13,
            qty:0
        },
        {
            id:21,
            image:"./images/21.jpg",
            name:"Kiwi",
            desc:"Fruits & Vege",
            stock:10,
            price:18,
            qty:0
        },
        {
            id:22,
            image:"./images/22.jpg",
            name:"Pineapple",
            desc:"Fruits & Vege",
            stock:8,
            price:24,
            qty:0
        },
        {
            id:23,
            image:"./images/23.jpg",
            name:"French Roast",
            desc:"Dairy, Bread & Eggs",
            stock:9,
            price:32,
            qty:0
        },
        {
            id:24,
            image:"./images/24.jpg",
            name:"Crushed Tomato",
            desc:"Fruits & Vege",
            stock:0,
            price:3,
            qty:0
        }
    ]
    const [state,dispatch]=useReducer(reducer,{
        products:products,
        cart:[]
    })
    const[productstate,productDispatch]=useReducer(productReducer,{
        stock:false,
        searchQuery:"",
    })
  return (
   <Info.Provider value={{state,dispatch,productstate,productDispatch}}>
    {children}
   </Info.Provider>
  )
}

export default Context
export const Cartstate=()=>{
    return useContext(Info)
}
