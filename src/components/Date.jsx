import React from 'react'

const Date = ({data, deleteDate}) => {
    const {petname, ownername, date, time, id} = data

    return (
        <div className="dateCalendar-container">
            <button onClick={() => {deleteDate(id)}} className="x-buttonClose">x</button>
            <p> <strong>Mascota:</strong> {petname}</p>
            <p> <strong>Propietario:</strong> {ownername}</p>
            <div>
                <p> <strong>Fecha:</strong> {date}</p>
                <p> <strong>Hora:</strong> {time}</p>
            </div>
        </div>
    )
}
export default Date