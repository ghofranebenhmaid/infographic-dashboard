import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

import {  BiUser, BiCoinStack, BiLogOutCircle, BiLineChart, BiRefresh } from "react-icons/bi";
import useFetch from "../hooks/useFetch";


const Dashboard = () =>
{
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

    const {  refetch } = useFetch()

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
        <div className="dashboard__container">
            <div className="dashboard__sidebar ">
                <div className="dashboard__"> 
                    <div className="btns">

                        <button className="btn__sidebar">
                            <Link to="/update-profile" className="">
                                <span className="btn__icon">< BiCoinStack /></span>
                            </Link>
                        </button>
                        <div className="">
                            <button className="btn__sidebar" variant="link" >
                                <span className="btn__icon"  ><BiLineChart/></span>
                            </button>
                        </div>
                        <div className="">
                            <button className="btn__sidebar" variant="link" onClick={ refetch }>
                                <span className="btn__icon"><BiRefresh/></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="btns">

                    <button className="btn__sidebar">
                        <Link to="/update-profile" className="">
                            <span className="btn__icon"><BiUser /></span>
                        </Link>
                    </button>
                    <div className="">
                        <button className="btn__sidebar" variant="link" onClick={ handleLogout }>
                            <span className="btn__icon"><BiLogOutCircle/></span>
                        </button>
                    </div>
                </div>
            </div>

                
            <div className="dashboard__section-3">
            {/* <div>
            <h2>Dashboard</h2>
            </div> */}

                <div className="dashboard__section-3--linechart">
                     <LineChart /> 
                </div>
            </div>
            <div className="dashboard__section-2">
                <div className="dashboard__section-2--piechart">
                    <PieChart />
                </div>
            </div>
            <div className="dashboard__section-1">
                <div className="dashboard__section-1--barchart">
                    <BarChart />
                </div>
            </div>

        </div>
    );

};

export default Dashboard;
