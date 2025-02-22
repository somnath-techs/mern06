import { createSlice } from '@reduxjs/toolkit'

const dataSclice = createSlice({
   name:"dataset",
   initialState:[],
  reducers:{
    setData(state,action){
      return{
        ...state,
        data:action.payload
      }
    }
  }
})
export const {setData} = dataSclice.actions
export default dataSclice.reducer