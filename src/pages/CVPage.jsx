import { useState } from "react";
import html2pdf from "html2pdf.js";

function CVPage() {
    const [isPreview, setIsPreview] = useState(false);
    const handleDownloadPDF = () => {
        const element = document.getElementById("preview");
        const opt = {
            margin: 0,
            filename: "cv.pdf",
            jsPDF: { format: "a4", orientation: "portrait" },
        };
        html2pdf().from(element).save("cv.pdf");
    };
    const [cv, setCv] = useState({
        info: {
            name: "John Doe",
            email: "johndoe@gmail.com",
            phone: "123-456-7890",
            address: "123 Main St, Anytown, USA",
        },
        education: [
            {
                degree: "Bachelor of Science",
                field: "Computer Science",
                institution: "University of Anytown",
                graduationYear: "2020",
            },
        ],
        experience: [
            {
                jobTitle: "Software Engineer",
                company: "Tech Company",
                responsibilities:
                    "Developed and maintained web applications using React and Node.js.",
                startDate: "2020",
                endDate: "Present",
            },
        ],
    });

    return (
        <div className="container">
            <button
                className="toggle-btn"
                onClick={() => setIsPreview(!isPreview)}
            >
                {isPreview ? "Edit CV" : "Preview CV"}
            </button>
            
                    <button onClick={handleDownloadPDF}>Download PDF</button>
{!isPreview && 
  (<div className="form">
                    <div className="info-form">
                        <h1> General Info </h1>
                        <input
                            type="text"
                            value={cv.info.name}
                            onChange={(e) => setCv({
                                ...cv,
                                info: {
                                    ...cv.info,
                                    name: e.target.value,
                                },
                            })} />
                        <input
                            type="email"
                            value={cv.info.email}
                            onChange={(e) => setCv({
                                ...cv,
                                info: {
                                    ...cv.info,
                                    email: e.target.value,
                                },
                            })} />
                        <input
                            type="number"
                            value={cv.info.phone}
                            onChange={(e) => setCv({
                                ...cv,
                                info: {
                                    ...cv.info,
                                    phone: e.target.value,
                                },
                            })} />
                        <input
                            type="text"
                            value={cv.info.address}
                            onChange={(e) => setCv({
                                ...cv,
                                info: {
                                    ...cv.info,
                                    address: e.target.value,
                                },
                            })} />
                        <div className="education-form">
                            <h1> Education </h1>
                            <input
                                type="text"
                                value={cv.education[0].degree}
                                onChange={(e) => setCv({
                                    ...cv,
                                    education: [
                                        {
                                            ...cv.education[0],
                                            degree: e.target.value,
                                        },
                                        ...cv.education.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.education[0].field}
                                onChange={(e) => setCv({
                                    ...cv,
                                    education: [
                                        {
                                            ...cv.education[0],
                                            field: e.target.value,
                                        },
                                        ...cv.education.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.education[0].institution}
                                onChange={(e) => setCv({
                                    ...cv,
                                    education: [
                                        {
                                            ...cv.education[0],
                                            institution: e.target.value,
                                        },
                                        ...cv.education.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.education[0].graduationYear}
                                onChange={(e) => setCv({
                                    ...cv,
                                    education: [
                                        {
                                            ...cv.education[0],
                                            graduationYear: e.target.value,
                                        },
                                        ...cv.education.slice(1),
                                    ],
                                })} />
                        </div>
                        <div className="experience-form">
                            <h1> Experience </h1>
                            <input
                                type="text"
                                value={cv.experience[0].jobTitle}
                                onChange={(e) => setCv({
                                    ...cv,
                                    experience: [
                                        {
                                            ...cv.experience[0],
                                            jobTitle: e.target.value,
                                        },
                                        ...cv.experience.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.experience[0].company}
                                onChange={(e) => setCv({
                                    ...cv,
                                    experience: [
                                        {
                                            ...cv.experience[0],
                                            company: e.target.value,
                                        },
                                        ...cv.experience.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.experience[0].responsibilities}
                                onChange={(e) => setCv({
                                    ...cv,
                                    experience: [
                                        {
                                            ...cv.experience[0],
                                            responsibilities: e.target.value,
                                        },
                                        ...cv.experience.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.experience[0].startDate}
                                onChange={(e) => setCv({
                                    ...cv,
                                    experience: [
                                        {
                                            ...cv.experience[0],
                                            startDate: e.target.value,
                                        },
                                        ...cv.experience.slice(1),
                                    ],
                                })} />
                            <input
                                type="text"
                                value={cv.experience[0].endDate}
                                onChange={(e) => setCv({
                                    ...cv,
                                    experience: [
                                        {
                                            ...cv.experience[0],
                                            endDate: e.target.value,
                                        },
                                        ...cv.experience.slice(1),
                                    ],
                                })} />
                        </div> 
                    </div>
                </div>)}
                {isPreview && (
  <div className="preview" id="preview">
                        <h1>{cv.info.name}</h1>
                        <p>Email: {cv.info.email}</p>
                        <p>Phone: {cv.info.phone}</p>
                        <p>Address: {cv.info.address}</p>
                        <h2>Education</h2>
                        <p>{cv.education[0].degree}</p>
                        <p>{cv.education[0].field}</p>
                        <p>{cv.education[0].institution}</p>
                        <p>{cv.education[0].graduationYear}</p>
                        <h2>Experience</h2>
                        <p>{cv.experience[0].jobTitle}</p>
                        <p>{cv.experience[0].company}</p>
                        <p>{cv.experience[0].responsibilities}</p>
                        <p>
                            {cv.experience[0].startDate} - {cv.experience[0].endDate}
                        </p>
                    </div> )}
        </div>
    );
}

export default CVPage;
