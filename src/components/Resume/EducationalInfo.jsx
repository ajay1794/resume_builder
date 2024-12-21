export default function Education({ props }) {
    return (
        <div className="edu-infos">
            {props.length>0?
            <div className="education-title">
                <h2 className="heading">Education</h2>
                <hr className="line"/>
            </div>
            :""}
            {props.map((edu, index) => (
                <div key={index} className="edu-item">
                    <div className="school-address">
                        <h2 className="school">{edu.school}{edu.location !=""?",":""}</h2>
                        <h2 className="location-edu">{edu.location}</h2>
                        <h2 className="year">{edu.year}</h2>    
                    </div>
                    <h2 className="degree">{edu.degree}</h2>
                </div>
            ))}
        </div>
    );
}
