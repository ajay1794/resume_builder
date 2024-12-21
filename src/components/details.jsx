import { useState } from 'react'
import arrowDown from '../../src/assets/arrow-down.svg'
export default function Details({details, setDetails}){
    
    function handleChange(event){
        const {name, value} = event.target
        setDetails((prevDetails)=>({
            ...prevDetails,
            [name]: value
        }))
    }

    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
  }
    return(
        <form>
            <div onClick={toggle} className='header'>
            <h2 className="personal-details-heading head">Personal Details</h2>
            <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown}alt="+/-" /></span>
            </div>

            <div className={` accordian personal-details grid ${select?"show":"hidden"}`}>
                    <div className="input">
                        <label htmlFor="firstName"> First Name</label>
                        <input type="text"
                        className="first-name-form form-input" 
                        name = "firstName"
                        value = {details.firstName}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="lastName"> Last Name</label>
                        <input type="text" className="last-name-form form-input"
                        name = "lastName"
                        value = {details.lastName}
                        onChange={handleChange} />
                    </div>
                    <div className="input">
                        <label htmlFor="email"> E-mail</label>
                        <input type="email" className="email-form form-input" 
                        name = "email"
                        value = {details.email}
                        onChange={handleChange} />
                    </div>
                    <div className="input">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" className="phone-number-form form-input"
                        name = "phoneNumber"
                        value = {details.phoneNumber}
                        onChange={handleChange} />
                    </div>
                <div className="input grid-1">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="address-form form-input"
                    name = "address"
                    value = {details.address}
                    onChange={handleChange} />
                </div>
                
            </div>
        </form>
    )
}