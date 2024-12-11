import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { openModal } from '../modal/modalSlice';


const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  isInCart:false
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    addToCart:(state,action)=>{

        let index  = state.cartItems.findIndex(product => product.id === action.payload.id)
        if(index >=0){
            state.isInCart = true
            return

        } 
    

        
        
        state.cartItems = [...state.cartItems,action.payload]
        console.log(state.cartItems)
    
    

         }

      
  },
 
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals,addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;