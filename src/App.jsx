import { useState } from 'react'
import './App.css'
import Details from './components/details'
import Summary from './components/Summary'
import EducationDetails from './components/EducationDetails'
import Resume from './components/Resume/resume'
import ProfessionalDetails from './components/ProfessionalDetails'
import ProjectDetails from './components/ProjectsDetails'
import Others from './components/SkillsAndOtherDetails'
import SaveResume from './components/SaveResume'
import LoadExample from './components/loadExample'

function App() {
    const [details, setDetails] = useState({

                                firstName: "",
                                lastName: "",
                                email: "",
                                phoneNumber: "",
                                address: ""}
                                )
    const [summary, setSummary] = useState("")
    
    const [education, setEducation] = useState([{
                                      school : "",
                                      degree : "",
                                      year : "",
                                      location: ""
    }])
    const [experience, setExperience] = useState([{
                                      companyName : "",
                                      positionTitle: "",
                                      start : "",
                                      end : "",
                                      location  : "",
                                      Description : ``
    }])

    const [projects, setProjects] = useState([{
                                      projectTitle:"",
                                      projectDescription:``
    }])

    const [others, setOthers] = useState([{
                                      title:"",
                                      details: ""
    }])
    const [declare, setDeclare]=useState(false)
    const handleSwitch =()=>{
      setDeclare(!declare)
    }

    return (
    <>
    <div className='wrapper'>
      <div className="content">
        <div className="btns">
          <SaveResume/>
          <LoadExample 
              setDetails={setDetails} 
              setSummary={setSummary}
              setEducation={setEducation}
              setExperience={setExperience}
              setProjects={setProjects}
              setOthers={setOthers}
              setDeclare={setDeclare}/>
        </div>

        <Details 
            details={details} 
            setDetails={setDetails}/>

        <Summary 
            summary={summary} 
            setSummary={setSummary}/>

        <ProfessionalDetails 
            profDetails={experience} 
            setProfDetails={setExperience}/>

        <ProjectDetails 
            projects={projects} 
            setProjects={setProjects}/>

        <EducationDetails 
            eduDetails={education} 
            setEdu={setEducation}/>
        <Others 
            others={others} 
            setOthers={setOthers}/>

        <label className="toggle-btn"> 
          <input type="checkbox" onChange={handleSwitch}/>
          <span className="circle left-circle"></span>
          <span className="circle right-circle"></span>
          <p className="declaration-text">Add Declaration</p>
      </label>
      </div>

      <Resume 
        details={details} 
        summary={summary} 
        education={education} 
        experience={experience} 
        projects={projects}
        others={others}
        declare={declare}/>
    </div>
   
    </>
    )
    }

export default App
