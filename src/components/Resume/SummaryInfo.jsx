export default function SummaryInfo(prop){
    return(
        <div className="summary">
            <h2 className="summary-title heading">Summary</h2>
            <hr className="line"/>
            <p className="summary-info">{prop.prop}</p>
            {/* <h3 className="summary-info"></h3> */}
        </div>
    )
}