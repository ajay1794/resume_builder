import { useState } from "react"
import arrowDown from '../../src/assets/arrow-down.svg'
export default function Summary({summary, setSummary}){
    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
  }
    return(
        <div className="summary-form head">
            <div className="header" onClick={toggle}>
            <h2>Summary</h2>
            <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown} alt="+/-" /></span>
            </div>
            <div className={`summary-input input accordian ${select?"show":"hidden"}`}>

            <label htmlFor="summary">Summary</label>
            <textarea type="text" 
            className="summary-input form-input textarea"
            name="summary" 
            value={summary}
            onChange={(e)=>(setSummary(e.target.value))}/>
            </div>
        </div>
    )
}