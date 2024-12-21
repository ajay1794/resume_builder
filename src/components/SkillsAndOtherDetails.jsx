import { useState } from "react"
import arrowDown from '../../src/assets/arrow-down.svg'
export default function Others({others, setOthers}){
    const addOthers = ()=>{
        setOthers((prevOthers)=>(
            [...prevOthers,{
                title:"",
                 details: ""
            }]
        ))
    }
    const handleChange = (index,e)=>{
        const updateOThers = others.map((item, idx)=>{
            if(index===idx){
                return{...item,[e.target.name]:e.target.value}
            }
                return item
        })
        setOthers(updateOThers)
    }
    const deleteOthers = (index)=>{
        setOthers((prevOthers)=>prevOthers.filter((_,idx)=>idx!==index))
    }

    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
    }

    return(
        <div className="others" onClick={toggle}>
            <div className="header">
                <h2 className="others-title head">Skills and Others</h2>
                <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown} alt="+/-" /></span>
            </div>
            <div className={`accordian ${select?"show":""}`}>
                {others.map((other,index)=>(
                    <div key={index}className="other-inputs">
                        <div className="other-title-container input">
                            <label htmlFor="otherTitle">Title</label>
                            <input type="text" 
                            name="title" 
                            value={other.title} 
                            className="form-input"
                            onChange={(e)=>handleChange(index,e)}/>
                        </div>
                        <div className="other-details-container input">
                            <label htmlFor="otherDetails">Details</label>
                            <input type="text" 
                            name="details" 
                            value={other.details} 
                            className="form-input"
                            onChange={(e)=>handleChange(index,e)}/>
                        </div>
                        <button className="btn del-btn" onClick={()=>deleteOthers(index)}>Delete</button>
                    </div>
                ))}
                <button className="btn add-btn" onClick={addOthers}>Add</button>
            </div>
        </div>
    )
}