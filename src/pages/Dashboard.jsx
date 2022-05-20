import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"
import { db } from "../firebase/firebaseConfig";


export const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const {user, logOut} = useAuthContext();

    const getUsers = () => {
        onValue(ref(db, 'users'), (snapshot) => {
            const data = snapshot.val();
            let arr = [];
            Object.keys(data).map((key) => {
                arr.push({
                    id: key,
                    ...data[key]
                });
            });
            setUsers(arr)
        })
    };

    useEffect(() => {
        getUsers()
    }, []);

    return user ? (
    <div className="dashboard-container">
        <div className="user-side">
            <h2 className="user-title">Members</h2>
            <ol>
                {
                    users?.map((user) => (
                        <li key={user?.id}>{user?.name ?? user?.email}</li>
                    ))
                }
            </ol>
        </div>
        <div className="main-container">
            <div className="messages">
                <div className="message">
                    <p className="message-user">Admin
                    <span className="message-time"> 5:20pm</span>
                    </p>
                    <p className="message-text">Welcome to the chat app</p>
                </div>
            </div>
            <div className="send-messages">
                <input type="text" className="message-input" placeholder="Send messages"/>
                <button className="send-btn">Send</button>
                <button className="location-btn">Send Location</button>
            </div>
        </div>
    </div> ) : (
        <Navigate to={'/signin'}/>)
    }
    
    
    
    //<button onClick={logOut}>Log Out</button>