export default function ProjectsInfo({props}){
    return (
        <div className="project-infos">
            {props.length>0?
            <div className="project-title">
                <h2 className="heading">Projects</h2>
                <hr className="line"/>
            </div>
            :""}
            {props.map((prof, index) => (
                <div key={index} className="projects-item">
                    <h2 className="project-name">{prof.projectTitle}</h2>
                    <ul className="project-description">{prof.projectDescription.split('\n').map((line,index)=>(
                        <li key={index}>{line}</li>
                    ))}</ul>
                </div>
            ))}
        </div>
    );
}
