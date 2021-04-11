import  React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
const Home=() =>{
    const [users,setUsers]=useState([]);
    const [deletedIds, setDeletedIds] = useState([]);
    useEffect(() =>{
   loadusers();
    },[]);
    
    const loadusers= async () =>{
        // const result= await axios.get("http://localhost:3003/data");
        const apiData = await axios.get("https://reqres.in/api/users");
        console.log("Heelooo", apiData);
        
        setUsers(apiData.data.data.reverse());
    }
    const deleteUser=async id =>{
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(res => {
            const users = res.data;
            console.log("deleted USers ", res);
            // this.setState({ users });
            // setUsers(users.data);
        })
        // await axios.delete(`https://reqres.in/api/users/${id}`);
        // .then((res) =>
        // )
        // setDeletedIds([...deletedIds,id]);
        // console.log("rs", result);
        //   loadusers();
    }
    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_name</th>
      <th scope="col">Email</th>
      <th scope="col">Avatar</th>   
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
       users.map((users,index) => (
         <tr>
             
                 <th scope="row">{index+1}</th>
                 <td>{users.first_name}</td>
                 <td>{users.last_name}</td>
                 <td>{users.email}</td>
                 <td>{<img src={users.avatar} />}</td>
                <td>
                    <Link class="btn" to={`/users/edit/${users.id}`}>Edit</Link>
                    <Link class="btn" onClick={() =>deleteUser(users.id)}>Delete</Link>
                </td>
                
         </tr>
       ))
    }
  </tbody>
</table>


            </div>
        </div>
    );
};
export default Home;