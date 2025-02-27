import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from './reducer/redux'
import {GetPosts} from './actios/posts'

const App1 = () => {
    console.log('App1')


  return (
    <div>App1 is this</div>
  )
}

export default App1