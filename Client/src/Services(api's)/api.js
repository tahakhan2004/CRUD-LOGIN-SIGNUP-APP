import axios from "axios";
import { useNavigate } from "react-router-dom";

export const addUser = async (data) =>{
    try{
      return await axios.post("http://localhost:5000/api/add", data)  
    }catch(err){
        console.log("Error in calling addUser api" , err);
    }
}



export const Editorr = async (id) =>{
  try{
    return await axios.get(`http://localhost:5000/api/${id}`)
  }catch(err){
    console.log("Error in calling editUser api" , err);
  }
}

export const Editoring = async (edits, id) =>{
  try{
    return await axios.put(`http://localhost:5000/api/${id}`, edits)
  }catch(err){
    console.log("Error in calling editUser api" , err);
  }
}


export const Deletor = async (id) =>{
  try{
    return await axios.delete(`http://localhost:5000/api/${id}`)
  }catch(err){
    console.log("Error in calling editUser api" , err);
  }
}







