import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  Cart: localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : [],
  wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
  subtotal : 0
};

export const ProductSlice = createSlice({
  name: "value",
  initialState,
   

  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload;
    },

     CartReducer: (state,action)=>{
      state.Cart=[...state.Cart, action.payload]
      localStorage.setItem('Cart',JSON.stringify([...state.Cart]))
     },
     wishlistReducer: (state,action)=>{
      state.wishlist=[...state.wishlist, action.payload]
      localStorage.setItem('wishlist',JSON.stringify([...state.wishlist]))
     },
     removeReducer: (state,action)=>{
      state.Cart=[...state.Cart.filter((item)=> item.id !== action.payload)]
      localStorage.setItem('Cart',JSON.stringify(state.Cart))
     },
     IncrementReducer:(state, action)=>{
      state.Cart= state.Cart.map((item)=>{
        return item.id == action.payload ? {...item, quantity: quantity+1 } : item
      })
    },
     DecrementReducer:(state, action)=>{
      state.Cart= state.Cart.map((item)=>{
        return item.id == action.payload ? {...item, quantity: quantity+1 } : item
      })
     },
     SubtotalReducer:(state)=>{
       
       state.subtotal= state.Cart.reduce((currentValue, item)=>(currentValue * item.price),0)
     
     
    }
  }
})


export const { ProductReducer, CategoryReducer, CartReducer , removeReducer, IncrementReducer, DecrementReducer, SubtotalReducer,wishlistReducer } =
  ProductSlice.actions;

export default ProductSlice.reducer;
