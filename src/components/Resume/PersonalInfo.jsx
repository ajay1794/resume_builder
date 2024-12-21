export default function PersonalInfo({props}){
    return(
        <div className="personal-info">
                <div className="full-name">
                    <h2 className="first-name">{props.firstName}</h2>
                    <h2 className="last-name">{props.lastName}</h2>
                </div>
                <div className="other-info">
                    <a className="phone-number" href={"tel:"+props.phoneNumber}>{props.phoneNumber}</a>
                    <a href={"mailto:"+props.email} className="email">{props.email}</a>
                    <a href={"https://"+props.address} target="_blank"className="address">{props.address}</a>
                </div>
            </div>
    )
}