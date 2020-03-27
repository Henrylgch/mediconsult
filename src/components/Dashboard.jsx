import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard-title">
            <h3>Dashboard</h3>
        </div>

        <div className="dashboard-options">
            <ul className="dashboard-options-list">
                <li> <Link className="links" to="/" >Inicio</Link> </li>
                <li> <Link className="links" to="/" >Administrar citas</Link> </li>
            </ul>
        </div>
    </div>
)

export default Dashboard