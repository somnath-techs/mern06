import api from "../axios-setup/api";

export const GetPosts = () =>{
    return api.get("/posts")
}
export const UpdatePosts = (data) =>{
    return api.put("/posts/2",data)
}
export const AddData = (data) =>{
    return api.post("/posts",data)
}
export const DeletePosts = () =>{
    return api.delete("/posts/1")
}
export const GetDataFromBackend = () =>{
    return api.get("/get-data")
}