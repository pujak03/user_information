import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

import { GlobalContext } from '../../context/GlobalState';

const Home = () => {
    const { employees } = useContext(GlobalContext);
    const [users, setUsers] = useState([]);
    const [deletedIds, setDeletedIds] = useState([]);

    const { removeEmployee, id } = useContext(GlobalContext);

    const updatedUserList = users.filter((user) => !deletedIds.includes(user.id)); //Contains employs after deleted.
    const addedUserList = employees.filter((id) => id !== 0);

    const completeUserList = [...updatedUserList, ...addedUserList]

    useEffect(() => {
        loadusers();

    }, []);

    const loadusers = async () => {

        const apiData = await axios.get("https://reqres.in/api/users");
        setUsers(apiData.data.data.reverse());
    }

    const deleteUser = (userId) => {
        const deleteAction = prompt("Do you want to delete this?. Enter 'Yes' or 'No' ");
        if (deleteAction === "Yes") {
            const index = deletedIds.findIndex(id => id === userId)
            if (index === -1) {
                setDeletedIds([...deletedIds, userId]);
            }
            removeEmployee(userId);
        }
    }
    console.log("employ", employees)
    return (
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
                            completeUserList.map((users, index) => (
                                <tr>

                                    <th scope="row">{index + 1}</th>
                                    <td>{users.first_name}</td>
                                    <td>{users.last_name}</td>
                                    <td>{users.email}</td>
                                    <td>{<img src={users.avatar} />}</td>
                                    <td>
                                        <Link class="btn" to={`/users/edit/${users.id}`}>Edit</Link>
                                        <Link class="btn" onClick={() => deleteUser(users.id)}>Delete</Link>
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