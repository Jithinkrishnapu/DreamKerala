import React from 'react'

export default function DatePicker({name,placeholder,required,type}) {

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Ensure 2 digits
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure 2 digits
    return `${hours}:${minutes}`; // Format as HH:MM
  };


  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };


  const getDefaultValue = () =>{
    if(type == 'date'){
      return getCurrentDate()
    }else {
      return getCurrentTime()
    }
  }

  return (
    <>
    <label htmlFor="">{placeholder}</label>
    <div className="date-field" >
    <input
       name={name}
       id={name}
       required={required}
       type={type}
       className="date-input"
       defaultValue={getDefaultValue()}
       placeholder={placeholder}
     />
    </div>
    </>
    
  )
}
