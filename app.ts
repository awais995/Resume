interface PersonalInfo {
    name: string;
    email: string;
    contact: string;
    profilePicture: string;
}

interface Education {
    degree: string;
    institution: string;
    year: string;
}

interface WorkExperience {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    workExperience: WorkExperience[];
    skills: string[];
}

function generateResume() {
    const personalInfo: PersonalInfo = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        contact: (document.getElementById('contact') as HTMLInputElement).value,
        profilePicture: (document.getElementById('profilePicture') as HTMLInputElement).value,
    };

    const education: Education = {
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        institution: (document.getElementById('institution') as HTMLInputElement).value,
        year: (document.getElementById('year') as HTMLInputElement).value,
    };

    const workExperience: WorkExperience = {
        jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value,
        duration: (document.getElementById('duration') as HTMLInputElement).value,
        description: (document.getElementById('description') as HTMLTextAreaElement).value,
    };

    const skills: string[] = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const resumeData: ResumeData = {
        personalInfo,
        education: [education],
        workExperience: [workExperience],
        skills,
    };

    displayResume(resumeData);

}

function displayResume(resumeData: ResumeData) {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h2>${resumeData.personalInfo.name}</h2>
            <p><strong>Email:</strong> ${resumeData.personalInfo.email}</p>
            <p><strong>Contact:</strong> ${resumeData.personalInfo.contact}</p>
            ${resumeData.personalInfo.profilePicture ? `<img src="${resumeData.personalInfo.profilePicture}" alt="Profile Picture">` : ''}
            
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${resumeData.education[0].degree}</p>
            <p><strong>Institution:</strong> ${resumeData.education[0].institution}</p>
            <p><strong>Year of Graduation:</strong> ${resumeData.education[0].year}</p>

            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${resumeData.workExperience[0].jobTitle}</p>
            <p><strong>Company:</strong> ${resumeData.workExperience[0].company}</p>
            <p><strong>Duration:</strong> ${resumeData.workExperience[0].duration}</p>
            <p><strong>Description:</strong> ${resumeData.workExperience[0].description}</p>

            <h3>Skills</h3>
            <ul>${resumeData.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        `;
    }
}
