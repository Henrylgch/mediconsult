import React, {Fragment} from 'react'

const InputForm = ({type, placeholder, name, labelContent, value, onChange}) => (
    <div className="inputForm-container">
        <label className="inputForm-label">{labelContent}</label>
        <input 
            className="inputForm-input" 
            value={value} 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={onChange}    
        />
    </div>
)

export default InputForm