import PersonalInfo from "./PersonalInfo"
import SummaryInfo from "./SummaryInfo"
import EducationalInfo from "./EducationalInfo"
import Profession from "./ProfessionalInfo"
import ProjectsInfo from "./ProjectsInfo"
import Other from "./SkillsAndOtherInfo"
export default function Resume({details, summary, education, experience, projects, others, declare}){
    return(
        <div className="resume" id="resume">
            <PersonalInfo props={details}/>
            <SummaryInfo prop={summary}/>
            <Profession props={experience}/>
            <ProjectsInfo props={projects}/>
            <EducationalInfo props={education}/>
            <Other props={others}/>
            {declare && <div className="declare">
                <h2 className="heading">Declaration</h2>
                <p className="declaration">I solemnly declare that the information in this resume is true to the best of my knowledge and belief</p>
                <span className="declare-name">{details.firstName} {details.lastName}</span>
                </div>
            }
        </div>
    )
}