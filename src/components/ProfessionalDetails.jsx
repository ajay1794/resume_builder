import { useState } from "react"
import arrowDown from '../../src/assets/arrow-down.svg'
export default function ProfessionalDetails({profDetails, setProfDetails}){
    const addProf = ()=>{
        setProfDetails((prevProfDetails)=>(
            [...prevProfDetails,{ companyName: "",
                positionTitle: "",
                start: "",
                end: "",
                location: "",
                Description: ""

            }]
        ))
    }
    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
  }

    const handleChange = (index, e)=>{
        const updateProf = profDetails.map((item, idx)=>{
            if(index===idx){
                return{...item,[e.target.name]:e.target.value};
            }
            return item
        });
        setProfDetails(updateProf);
    };
    const deleteProf = (index)=>{
        setProfDetails((prevProfDetails)=> prevProfDetails.filter((_,idx)=> idx !==index));
    }
    return(
        <div>
            <div className="header" onClick={toggle}>
            <h2 className="head">Professioal Details</h2>
            <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown} alt="+/-" /></span>
            </div>
            <div className={`accordian ${select?"show":""}`}>
                {
                    profDetails.map((prof, index)=>(
                        <div key={index} className="prof-info">
                            <div className="flex">
                                <div className="input grid-2">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input type="text"
                                        name = "companyName"
                                        className="form-input"
                                        value = {prof.companyName}
                                        onChange={(e)=>handleChange(index,e)}
                                        />
                                </div>
                                <div className="input grid-2">                                 
                                    <label htmlFor="positionTitle">Position Title</label>
                                    <input type="text"
                                    className="form-input"
                                    name = "positionTitle"
                                    value = {prof.positionTitle}
                                    onChange={(e)=>handleChange(index,e)}
                                    />
                                </div>
                            </div>
                            <div className="job-loc flex">
                                <div className="input date">
                                    <label htmlFor="start">Start</label>
                                    <input type="text"
                                    name = "start"
                                    className="form-input"
                                    value = {prof.start}
                                    onChange={(e)=>handleChange(index,e)}
                                    />
                                </div>
                                <div className="input date">
                                    <label htmlFor="end">End</label>
                                    <input type="text"
                                    name = "end"
                                    className="form-input"
                                    value = {prof.end}
                                    onChange={(e)=>handleChange(index,e)}
                                    />
                                </div>
                                <div className="input">
                                    <label htmlFor="location">Location</label>
                                    <input type="text"
                                    name = "location"
                                    className="form-input"
                                    value = {prof.location}
                                    onChange={(e)=>handleChange(index,e)}
                                    />
                                </div>
                            </div>
                            
                            <div className="input">
                                <label htmlFor="Description">Description</label>
                                <textarea
                                name = "Description"
                                value = {prof.Description}
                                rows={4}
                                cols={50}
                                className="form-input textarea"
                                onChange={(e)=>handleChange(index,e)}
                                 />
                            </div>
                            <button className="btn del-btn" onClick={() => deleteProf(index)}>Delete</button>
                        </div>
                    ))
                }
                    <button className="btn add-btn" onClick={addProf}>Add</button> 
            </div>
        </div>
    )
}