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

document.addEventListener("DOMContentLoaded", () => {
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePicturePreview = document.getElementById('profilePicturePreview') as HTMLImageElement;

    profilePictureInput.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file: File | null = target.files?.[0] || null;

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e: ProgressEvent<FileReader>) {
                if (e.target?.result && typeof e.target.result === 'string') {
                    profilePicturePreview.src = e.target.result;
                    profilePicturePreview.style.display = 'block';
                }
            };

            reader.readAsDataURL(file);
        }
    });
});

function generateResume(): void {
    const personalInfo: PersonalInfo = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        contact: (document.getElementById('contact') as HTMLInputElement).value,
        profilePicture: (document.getElementById('profilePicturePreview') as HTMLImageElement).src,
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
        description: (document.getElementById('description') as HTMLInputElement).value,
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

function displayResume(resumeData: ResumeData): void {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h2 contenteditable="true" oninput="updateField('name', this.innerText)">${resumeData.personalInfo.name}</h2>
            <p><strong>Email:</strong> <span contenteditable="true" oninput="updateField('email', this.innerText)">${resumeData.personalInfo.email}</span></p>
            <p><strong>Contact:</strong> <span contenteditable="true" oninput="updateField('contact', this.innerText)">${resumeData.personalInfo.contact}</span></p>
            ${resumeData.personalInfo.profilePicture ? `<img src="${resumeData.personalInfo.profilePicture}" alt="Profile Picture">` : ''}
            
            <h3>Education</h3>
            <p><strong>Degree:</strong> <span contenteditable="true" oninput="updateField('degree', this.innerText)">${resumeData.education[0].degree}</span></p>
            <p><strong>Institution:</strong> <span contenteditable="true" oninput="updateField('institution', this.innerText)">${resumeData.education[0].institution}</span></p>
            <p><strong>Year of Graduation:</strong> <span contenteditable="true" oninput="updateField('year', this.innerText)">${resumeData.education[0].year}</span></p>

            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> <span contenteditable="true" oninput="updateField('jobTitle', this.innerText)">${resumeData.workExperience[0].jobTitle}</span></p>
            <p><strong>Company:</strong> <span contenteditable="true" oninput="updateField('company', this.innerText)">${resumeData.workExperience[0].company}</span></p>
            <p><strong>Duration:</strong> <span contenteditable="true" oninput="updateField('duration', this.innerText)">${resumeData.workExperience[0].duration}</span></p>
            <p><strong>Description:</strong> <span contenteditable="true" oninput="updateField('description', this.innerText)">${resumeData.workExperience[0].description}</span></p>

            <h3>Skills</h3>
            <ul>${resumeData.skills.map(skill => `<li contenteditable="true" oninput="updateSkill(this, '${skill}')">${skill.trim()}</li>`).join('')}</ul>
        `;
    }
}

function updateField(field: string, value: string): void {
    const element = document.getElementById(field) as HTMLInputElement;
    if (element) {
        element.value = value;
    }
}

function updateSkill(element: HTMLElement, skill: string): void {
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    if (skillsInput) {
        const skillsArray = skillsInput.value.split(',');
        const index = skillsArray.indexOf(skill);
        if (index !== -1) {
            skillsArray[index] = element.innerText.trim();
            skillsInput.value = skillsArray.join(',');
        }
    }
}
