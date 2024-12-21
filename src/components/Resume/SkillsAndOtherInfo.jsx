export default function Other({props}){
    return (
        <div className="other-infos">
            {props.length>0?
            <div className="others-title">
                <h2 className="heading">Skills & Other</h2>
                <hr className="line"/>
            </div>
            :""}
            {props.map((other, index) => (
                <div key={index} className="other-item">
                        <h2 className="other-title">{other.title}:</h2>
                        <h2 className="other-details">{other.details}</h2>    
                    </div>
            ))}
        </div>
    );
}