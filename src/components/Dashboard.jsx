import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = () =>
{
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

    async function handleLogout ()
    {
        setError("")

        try {
            await logout()
            navigate("/signin", { replace: true })
        } catch {
            setError("Failed to log out")
        }
    }

    return (

        <div className="dashboard ">
            <div className="container ">
                <h2 >dashboard</h2>
                { error && <div >{ error }</div> }
                <strong>Email:</strong> { currentUser.email }
                <div className="">
                    <Link to="/update-profile" className="">
                        Update Profile
                    </Link>
                    <button className="btn" variant="link" onClick={ handleLogout }>
                        Log Out
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
