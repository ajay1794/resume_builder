export default function Profession({ props }) {
    return (
        <div className="prof-infos">
            {props.length>0?
            <div className="experience-title">
                <h2 className="heading">Experience</h2>
                <hr className="line"/>
            </div>
            :""}
            {props.map((prof, index) => (
                <div key={index} className="prof-item">
                    <div className="company-loc">
                        <h2 className="company-name">{prof.companyName}</h2>
                        <h2 className="location">{prof.location}</h2>
                    </div>
                    <div className="job-info">
                        <h2 className="position-title">{prof.positionTitle}</h2>
                        <h2 className="time-period">{prof.start}-{prof.end}</h2>
                    </div>
                    <ul className="job-description">{prof.Description.split('\n').map((line,index)=>(
                        <li key={index}>{line}</li>
                    ))}</ul>
                </div>
            ))}
        </div>
    );
}
