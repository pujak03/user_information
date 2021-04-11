import axios from "axios";
import React,{useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";
const EditUser= () => {

    let history=useHistory();
    const {id}=useParams();
        const [user,setUser]=useState({
    first_name:"",
    last_name:"",
    email:"",
    img_address:""
    })
    const {first_name,last_name,email,img_address}=user;
    const onInputChange=e =>{
   setUser({...user,[e.target.name]:e.target.value})
    };
    useEffect(()=>{
       loadUser(); 
    },[]);
    const onSubmitForm= async e =>{
        e.preventDefault();
        await axios.put(`https://reqres.in/api/users/${id}`,user)
        history.push("/");

    }

    const loadUser = async () =>{
        const result=await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(result.data);
        
    }
  return(
    <div className="container">
    <div className="py-4">
        <h1>Edit user</h1>
    
        <form onSubmit={e => onSubmitForm(e)} >
<div className="form-group">
<label htmlFor="exampleInputName">First_Name</label><br></br>
<input type="text" className="form-control" id="exampleInputName"  placeholder="Enter your first_name" name="first_name" value={first_name} onChange={e => onInputChange(e)}/>

</div>

<div className="form-group">
<label htmlFor="exampleInputUserName">Last_Name</label><br></br>
<input type="text" className="form-control" id="exampleInputEmail1"  placeholder= "Enter your last_name" name="last_name" value={last_name} onChange={e => onInputChange(e)}/>
</div>
<div className="form-group">
<label htmlFor="exampleInputEmail1">Email</label><br></br>
<input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" name="email" value={email} onChange={e => onInputChange(e)}/>
</div>
<div className="form-group">
<label htmlFor="exampleInputPhone">Avatar</label><br></br>
<input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter address of image" name="img_address" value={img_address} onChange={e => onInputChange(e)} />
</div>  
<button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>

);
  
}

export default EditUser;