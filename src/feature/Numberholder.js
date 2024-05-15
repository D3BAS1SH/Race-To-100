import { createSlice } from "@reduxjs/toolkit";

const initialState={
    User1:[],
    User2:[],
    AllTotal:[],
    TotalSum:0,
    isTrue:true
}

export const NumberHolderSlice = createSlice({
    initialState:initialState,
    name:"NumberHolder",
    reducers:{
        AddValue1:(state,action)=>{
            console.log(action);
            state.User1.push(parseInt(action.payload))
            state.AllTotal.push(parseInt(action.payload))
            state.TotalSum=state.TotalSum+parseInt(action.payload)
        },
        AddValue2:(state,action)=>{
            state.User2.push(parseInt(action.payload))
            state.AllTotal.push(parseInt(action.payload))
            state.TotalSum=state.TotalSum+parseInt(action.payload)
        },
        Reset:(state,action)=>{
            state.User1=[]
            state.User2=[]
            state.AllTotal=[]
            state.TotalSum=0
        },
        ToggleTrue:(state,action)=>{
            state.isTrue= !state.isTrue
        }
    }
})

export const {AddValue1,AddValue2,Reset,ToggleTrue} = NumberHolderSlice.actions
export default NumberHolderSlice.reducer