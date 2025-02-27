import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setData } from '../reducer/redux'
import { GetPosts,GetDataFromBackend } from '../actios/posts'
import { useEffect } from 'react'
const Paginatios = () => {
    const mydata = useSelector((state)=>state.Reducer1.data)
    const dispatch = useDispatch()
    const GetMyData = async()=>{
        const res = await GetDataFromBackend()
        console.log("This is my Response :",res)
        dispatch(setData(res.data))
    }
useEffect(()=>{
    GetMyData()
},[])
  return (
    <>
       <table>
            <thead>
                <tr>
                <th>id</th>
                </tr>
                
            </thead>
            <tbody>
                {mydata.length>0 && mydata.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item?.id}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
       </table>
    </>
  )
}

export default Paginatios