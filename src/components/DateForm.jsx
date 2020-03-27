import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import InputForm from './InputForm'

const DateForm = ({sendDate, dates}) => {
    // State para el formulario de agendar cita
    const [form, handleForm] = useState({
        petname: '',
        ownername: '',
        email: '',
        date: '',
        time: '',
        symptoms: ''
    })
    const {petname, ownername, email, date, time, symptoms} = form
    
    //State para el error de validacion del formulario
    const [formError, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //validar el formulario
        if(petname.trim() === '' || ownername.trim() === '' || email.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        //Agregar ID al form
        form.id = uuidv4()

        //Enviar formulario
        sendDate([
            ...dates,
            form
        ])

        //Reiniciar formulario
        handleForm({
            petname: '',
            ownername: '',
            email: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }
    
    const handleChange = e => {
        handleForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
 

    return (
        <div className="dateForm-container">
            <h3>Agenda una nueva cita</h3>

            {formError
            ?
                <div className="warning">Todos los campos son requeridos</div>
            :
                null
            }

            <form onSubmit={handleSubmit} >
                <InputForm onChange={handleChange} type="text" value={petname} name="petname" placeholder="Nombre de tu mascota" labelContent="Nombre de la mascota:" />
                <InputForm onChange={handleChange} type="text" value={ownername} name="ownername" placeholder="Propietario de la mascota" labelContent="Nombre del dueño" />
                <InputForm onChange={handleChange} type="email" value={email} name="email" placeholder="Correo electronico" labelContent="Correo electronico" />
                <InputForm onChange={handleChange} type="date" value={date} name="date" labelContent="Fecha:"/>
                <InputForm onChange={handleChange} type="time" value={time} name="time" labelContent="Hora:" />
                <div className="inputForm-container">
                    <label>Sintomas</label>
                    <textarea onChange={handleChange} name="symptoms" value={symptoms} id="" cols="30" rows="5"></textarea>
                </div>
                
                <button type="submit">Agendar</button>
            </form>
        </div>
    )
}

export default DateForm