export default function LoadExample({setDetails,setSummary, setEducation, setExperience, setProjects, setOthers, setDeclare}){
    const handleToggle=()=>{
        setDetails({

            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            phoneNumber: "(123) 456-7890",
            address: " linkedin.com/in/johndoe"})
            
            setSummary("Dedicated and results-driven professional with a strong background in software development, specializing in full-stack web applications. Skilled in problem-solving, teamwork, and delivering projects on time. Looking to leverage my technical and analytical skills to contribute to impactful projects and further grow in the field of technology.")
            
            setEducation([{
                school : "University of California",
                degree : "Bachelor of Science in Computer Science",
                year : "2015 - 2019",
                location: "Berkeley, CA"
            },{
                school : "Mountain View High School",
                degree : "High School Diploma",
                year : "2011 - 2015",
                location: "Mountain View, CA"
            }])

            setExperience([{
                companyName : "GreenTech Innovations",
                positionTitle: "Environmental Analyst",
                start : "June 2021",
                end : "Present",
                location  : "San Francisco, CA",
                Description : `Conducted comprehensive environmental impact assessments for various projects, ensuring compliance with local and federal regulations.
                Collaborated with cross-functional teams to develop sustainable practices and strategies that reduced waste by 30%.
                Implemented RESTful APIs to streamline communication between front-end and back-end services.
                Participated in Agile development methodologies, contributing to bi-weekly sprint planning and retrospectives.
                Mentored junior developers, providing guidance on best coding practices and project management techniques.`
            },{
                companyName : "Tech Innovators Inc.",
                positionTitle: "Software Engineer",
                start : "Jan 2020",
                end : "June 2021",
                location  : "San Francisco, CA",
                Description : `Developed and maintained web applications using JavaScript, Python, and React.
                                Collaborated with a team to enhance application performance, reducing load times by 30%.
                                Led a project to migrate legacy systems, achieving a 20% improvement in system reliability.`
            }])

            setProjects([{
                projectTitle:"Inventory Management System",
                projectDescription:`Developed a system to track and manage product inventory for a retail client. Features included real-time stock updates, low-stock alerts, and integration with sales platforms. Technologies used: JavaScript, Node.js, MongoDB.`
            },{
                projectTitle:"Personal Portfolio Website",
                projectDescription:`Built a responsive personal website to showcase projects, skills, and resume. Focused on optimizing user experience, ensuring fast load times, and implementing modern UI/UX design principles.` 
            }])

            setOthers([{
                title:"Skills",
                details: "JavaScript, Python, SQL, HTML, CSS,  React, Node.js, Express,  Git, Visual Studio Code, Figma"
            },{
                title: "Hobbies",
                details: "Hiking, Reading science fiction novels, Photography, Cooking, Playing guitar"
            }])
    }
    const toggleClear = ()=>{
        setDetails({

            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: ""})
            
            setSummary("")            
            setEducation([{
                school : "",
                degree : "",
                year : "",
                location: ""
            }])

            setExperience([{
                companyName : "",
                positionTitle: "",
                start : "",
                end : "",
                location  : "",
                Description : ``
            }])

            setProjects([{
                projectTitle:"",
                projectDescription:``            
            }])

            setOthers([{
                title:"",
                details: ""
            }])
    }
    return(
        <div className="load-example">
            <button className="btn example load-btn" onClick={handleToggle}>Load Exmple</button>
            <button className="btn clear load-btn"onClick={toggleClear}>Clear</button>
        </div>
    )
}