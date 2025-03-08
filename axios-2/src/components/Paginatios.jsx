import React,{useState} from 'react'
import Edit from './Edit';
import {NavLink, useNavigate} from 'react-router-dom'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector} from 'react-redux'
import { setData } from '../reducer/redux'
import { GetPosts,GetDataFromBackend } from '../actios/posts'
import { useEffect } from 'react'
const Paginatios = () => {
    const navigate = useNavigate()
    const [modalOpen,setModalOpen] = useState(false)
    const mydata = useSelector((state)=>state.Reducer1.data)
    const dispatch = useDispatch()
    const GetMyData = async()=>{
        const res = await GetDataFromBackend()
        console.log("This is my Response :",res)
        dispatch(setData(res.data.data))
    }
useEffect(()=>{
    GetMyData()
},[])
  return (
    <>
       <table className="table">
            <thead>
                <tr>
                <th><abbr title="Id">ld</abbr></th>
                <th><abbr title="fname">Full name</abbr></th>
                <th><abbr title="age">Age</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="action">Action</abbr></th>
             
                </tr>
                
            </thead>
            <tbody>
                {mydata.length>0 && mydata.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item?.fullname}</td>
                            <td>{item?.age}</td>
                            <td>{item?.email}</td>
                            <td><button className="button is-link" onClick={()=>{setModalOpen(true)}}><BsThreeDotsVertical/></button></td>

                            <td></td>
                        </tr>
                    )
                }
                )}
            </tbody>
       </table>

       <p className="level-item has-text-centered">
       <button className="button is-success"><NavLink to="/add-data" style={{color:'black'}}>Add Data</NavLink></button>
  </p>
  <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
  <div className="modal-background"></div>
  <div className="modal-content">
  <button className="button is-link">Edit</button><br/><br/>
  <button className="button is-danger">Delete</button>
  </div>
  <button className="modal-close is-large" aria-label="close" onClick={()=>{setModalOpen(false)}}></button>
</div>
    </>
  )
}

export default Paginatios