import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { GlobalContext } from '../../context/GlobalState'


const AddUser = () => {
    let history = useHistory();

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        img_address: ""
    });

    const { addEmployee, employees } = useContext(GlobalContext);

    const { first_name, last_name, email, img_address } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    // const onSubmitForm = async e => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:3003/data", user)
    //     history.push("/");

    // }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 100,
            first_name: first_name,
            last_name: last_name,
            email: email,
            avatar: img_address,
        };

        addEmployee(newEmployee);
        history.push("/");
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Add user</h1>

                <form onSubmit={e => onSubmitForm(e)} >
                    <div className="form-group">
                        <label htmlFor="exampleInputName">First_Name</label><br></br>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your first_name" name="first_name" value={first_name} onChange={e => onInputChange(e)} />

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputUserName">Last_Name</label><br></br>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your last_name" name="last_name" value={last_name} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label><br></br>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" value={email} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">Avatar</label><br></br>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter address of image" name="img_address" value={img_address} onChange={e => onInputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    );

}
export default AddUser;