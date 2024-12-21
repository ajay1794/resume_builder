import { useState } from "react";
import arrowDown from '../../src/assets/arrow-down.svg'
export default function EducationDetails({eduDetails, setEdu}){
    const addEducation = ()=>{
        setEdu((prevEdu)=>(
            [...prevEdu, {school : "",
                degree : "",
                start : "",
                end : "",
                location: ""}]
        ))
    }

    const handleChange = (index, e) => {
        const updatedEducation = eduDetails.map((item, idx) => {
            if (index === idx) {
                return { ...item, [e.target.name]: e.target.value };
            }
            return item;
        });
        setEdu(updatedEducation);
    };
    const deleteEdu = (index)=>{
        setEdu((prevEdu) => prevEdu.filter((_, idx) => idx !== index));
    }

    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
    }

    
    return(
        <div>
            <div className="header" onClick={toggle}>
            <h2 className="head">Education</h2>
            <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown} alt="+/-" /></span>
            </div>
            <div className={`accordian ${select?"show": ""}`}>
                {eduDetails.map((edu, index)=>(
                    <div key={index} className="edu-inputs">
                        <div className="school-add flex">
                            <div className="input grid-2">
                                <label htmlFor="school">School</label>
                                <input type="text" 
                                    name="school"
                                    className="form-input"
                                    value ={edu.school} 
                                    onChange={(e)=>handleChange(index,e)} />
                            </div>
                            <div className="input grid-2">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" 
                                    name="degree" 
                                    value ={edu.degree} 
                                    className="form-input"
                                    onChange={(e)=>handleChange(index,e)}/>
                            </div>
                        </div>
                        <div className="school-year flex">

                            <div className="input grid-2">
                                <label htmlFor="year">Year</label>
                                <input type="text" 
                                    name="year" 
                                    value ={edu.year} 
                                    className="form-input"
                                    onChange={(e)=>handleChange(index,e)}/>
                            </div>
                            <div className="input grid-2">
                                <label htmlFor="location">Location</label>
                                <input type="text" 
                                    name="location" 
                                    value ={edu.location} 
                                    className="form-input"
                                    onChange={(e)=>handleChange(index,e)}/>
                            </div>
                        </div>
                        <button className="btn del-btn" onClick={() => deleteEdu(index)}>Delete</button>
                    </div>
                ))}
                
            <button className="btn add-btn"onClick={addEducation}>Add</button>
            </div>
        </div>
    )
}