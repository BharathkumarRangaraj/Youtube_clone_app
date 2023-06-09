import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:'app',
    initialState:{
        ismenuopen:true,
    },
    reducers:{
       toggleMenu:(state)=>{
        state.ismenuopen=!state.ismenuopen;
       },
       closeMenu:(state)=>{
        state.ismenuopen=false;
       }
    }
})

export const {toggleMenu,closeMenu}=AppSlice.actions;
export default AppSlice.reducer;