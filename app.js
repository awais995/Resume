function generateResume() {
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        profilePicture: document.getElementById('profilePicture').value,
    };
    var education = {
        degree: document.getElementById('degree').value,
        institution: document.getElementById('institution').value,
        year: document.getElementById('year').value,
    };
    var workExperience = {
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        duration: document.getElementById('duration').value,
        description: document.getElementById('description').value,
    };
    var skills = document.getElementById('skills').value.split(',');
    var resumeData = {
        personalInfo: personalInfo,
        education: [education],
        workExperience: [workExperience],
        skills: skills,
    };
    displayResume(resumeData);
}
function displayResume(resumeData) {
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n            <h2>".concat(resumeData.personalInfo.name, "</h2>\n            <p><strong>Email:</strong> ").concat(resumeData.personalInfo.email, "</p>\n            <p><strong>Contact:</strong> ").concat(resumeData.personalInfo.contact, "</p>\n            ").concat(resumeData.personalInfo.profilePicture ? "<img src=\"".concat(resumeData.personalInfo.profilePicture, "\" alt=\"Profile Picture\">") : '', "\n            \n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(resumeData.education[0].degree, "</p>\n            <p><strong>Institution:</strong> ").concat(resumeData.education[0].institution, "</p>\n            <p><strong>Year of Graduation:</strong> ").concat(resumeData.education[0].year, "</p>\n\n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> ").concat(resumeData.workExperience[0].jobTitle, "</p>\n            <p><strong>Company:</strong> ").concat(resumeData.workExperience[0].company, "</p>\n            <p><strong>Duration:</strong> ").concat(resumeData.workExperience[0].duration, "</p>\n            <p><strong>Description:</strong> ").concat(resumeData.workExperience[0].description, "</p>\n\n            <h3>Skills</h3>\n            <ul>").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        ");
    }
}
