import { useState, useEffect } from "react";
import { GetPosts,AddData,DeletePosts, UpdatePosts, } from "./actios/posts";
import Paginatios from "./components/Paginatios";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import AddDataTOForm  from "./components/AddData";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
function App() {
  
  // const [posts, setPosts] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalOpenUpdate, setModalOpenUpdate] = useState(false);
  // const [data,setData]=useState({})
  // const [Id,setId]=useState(0)

  // const handleChange = (e) =>{
  //  const name = e.target.name;
  //  const value = e.target.value;
  //  setData(prev=>({...prev,[name]:value}))
  // }
 
  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   const responce = await AddData(data);
  //   console.log(responce);
  // }
  // const handleUpdate = async(e) =>{
  //   e.preventDefault();
  //   const responce = await UpdatePosts(data,Id);
  //   console.log(responce);
  // }

  // const GetData = async () => {
  //   const response = await GetPosts();
  //   console.log(response);
  //   setPosts(response.data);
  // };
  // const DeleteMyData = async () => {
  //    const response = await DeletePosts();
  //    console.log(response);
  // }

  // useEffect(() => {
  //   GetData();
  // }, []);

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-data" element={<AddDataTOForm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
     </BrowserRouter>
      {/* <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position id">id</abbr>
            </th>
            <th>
              <abbr title="Position">UserId</abbr>
            </th>
            <th>
              <abbr title="Position">Title</abbr>
            </th>
            <th>
              <abbr title="Position">Body</abbr>
            </th>
            <th>
              <abbr title="Position">Edit</abbr>
            </th>
            <th>
              <abbr title="Position">Delete</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.userId}</td>
              <td>{item?.title}</td>
              <td>{item?.body}</td>
              <td>
                <button className="button is-warning" onClick={()=>{
                  setModalOpenUpdate(true)
                  setId(item?.id)
                }
                  
                  }>Update</button>
              </td>
              <td>
                <button className="button is-danger" onClick={DeleteMyData}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button class="button is-success" onClick={() => setModalOpen(true)}>
        Add Data
      </button>

      {/* This My Modal */}
      {/* <div className={`modal ${modalOpen ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
        <h1 className="title">Add Data</h1>
          <form className="box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input 
                className="input" 
                  type="text"
                  name="title"
                  onChange={handleChange}
                placeholder="e.g Alex Smith" />
              </div>
            </div>

            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Wite Somethings"
                  type="text"
                  name="body"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">userId</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="userId"
                  onChange={handleChange}
                  placeholder="e.g. alexsmith@gmail.com"

                />
              </div>
              <button className="button is-success m-1" type="submit" onClick={() => setModalOpen(false)}>Submit</button>
            </div>
            
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalOpen(false)}
        ></button>
      </div>
      {/* This is my Update Modal */}
     {/* <div className={`modal ${modalOpenUpdate ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
         <h1 className="title">Update</h1>
          <form className="box" onSubmit={handleUpdate}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input 
                className="input" 
                  type="text"
                  name="title"
                  onChange={handleChange}
                placeholder="e.g Alex Smith" />
              </div>
            </div>

            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Wite Somethings"
                  type="text"
                  name="body"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">userId</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="userId"
                  onChange={handleChange}
                  placeholder="e.g. alexsmith@gmail.com"

                />
              </div>
              <button className="button is-success m-1" type="submit" onClick={() => setModalOpenUpdate(false)}>Submit</button>
            </div>
            
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalOpenUpdate(false)}
        ></button>
      </div>  */} 
      {/* <h1>Pagination</h1> */}
      {/* <Paginatios/> */}
    </>
  );
}

export default App;
