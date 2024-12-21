import { useState } from "react";
import arrowDown from '../../src/assets/arrow-down.svg'
export default function ProjectDetails({projects, setProjects}){
    const addProject = ()=>{
        setProjects((prevProject)=>(
            [...prevProject,{
                projectTitle:"",
                projectDescription:""
            }]
        ))
    }
    const handleChange = (index,e)=>{
        const updateProjects = projects.map((item,idx)=>{
            if(index===idx){
                return{...item,[e.target.name]:e.target.value}
            }
            return item
        });
        setProjects(updateProjects);
    }
    const deleteProjects =(index)=>{
        setProjects((prevProject)=> prevProject.filter((_,idx)=>idx!==index))
    }
    const [select, setSelect] = useState(false)
    const toggle = ()=>{
        setSelect(!select)
    }
    return(
        <div className="projects">
            <div className="header" onClick={toggle}>
            <h2 className="projects-heading head">Projects</h2>
            <span className={`arrow ${select?"rotated":""}`}><img className='arrow' src={arrowDown} alt="+/-" /></span>
            </div>
            <div className={`accordian ${select?"show":""}`}>
                {projects.map((proj,index)=>(
                    <div key={index}className="projects-inputs">
                        <div className="input">
                            <label htmlFor="projectTitle">Title</label>
                            <input type="text" 
                            name="projectTitle" 
                            className="project-title-input form-input" 
                            value={proj.projectTitle}
                            onChange={(e)=>handleChange(index,e)}/>
                        </div>
                        
                        <div className="project-description input">
                            <label htmlFor="projectDescription">Description</label>
                            <textarea 
                            name="projectDescription"
                            className="project-description-input form-input textarea"
                            value={proj.projectDescription}
                            onChange={(e)=>handleChange(index,e)}
                            />
                        </div>
                        
                        <button className="btn del-btn" onClick={()=>deleteProjects(index)}>Delete</button>
                    </div>
                ))}
            <button className="btn add-btn" onClick={addProject}>Add</button>
            </div>
           
        </div>
     )
}