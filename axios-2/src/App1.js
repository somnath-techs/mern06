import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from './reducer/redux'
import {GetPosts} from './actios/posts'

const App1 = () => {
    const data = useSelector(state => state.Reducer)
    const dispatch = useDispatch()

    const GetMyData = async () => {
      try {
        const res = await GetPosts()
        dispatch(setData(res.data))
      } catch (error) {
        console.log(error)
      }
    }
    
useEffect(()=>{
  GetMyData()
},[])

    console.log(data)
  return (
    <div>App1</div>
  )
}

export default App1