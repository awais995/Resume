document.addEventListener("DOMContentLoaded", function () {
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePicturePreview = document.getElementById('profilePicturePreview');
    profilePictureInput.addEventListener('change', function (event) {
        var _a;
        var target = event.target;
        var file = ((_a = target.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && typeof e.target.result === 'string') {
                    profilePicturePreview.src = e.target.result;
                    profilePicturePreview.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        }
    });
});
function generateResume() {
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        profilePicture: document.getElementById('profilePicturePreview').src,
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
        resumeOutput.innerHTML = "\n            <h2 contenteditable=\"true\" oninput=\"updateField('name', this.innerText)\">".concat(resumeData.personalInfo.name, "</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" oninput=\"updateField('email', this.innerText)\">").concat(resumeData.personalInfo.email, "</span></p>\n            <p><strong>Contact:</strong> <span contenteditable=\"true\" oninput=\"updateField('contact', this.innerText)\">").concat(resumeData.personalInfo.contact, "</span></p>\n            ").concat(resumeData.personalInfo.profilePicture ? "<img src=\"".concat(resumeData.personalInfo.profilePicture, "\" alt=\"Profile Picture\">") : '', "\n            \n            <h3>Education</h3>\n            <p><strong>Degree:</strong> <span contenteditable=\"true\" oninput=\"updateField('degree', this.innerText)\">").concat(resumeData.education[0].degree, "</span></p>\n            <p><strong>Institution:</strong> <span contenteditable=\"true\" oninput=\"updateField('institution', this.innerText)\">").concat(resumeData.education[0].institution, "</span></p>\n            <p><strong>Year of Graduation:</strong> <span contenteditable=\"true\" oninput=\"updateField('year', this.innerText)\">").concat(resumeData.education[0].year, "</span></p>\n\n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> <span contenteditable=\"true\" oninput=\"updateField('jobTitle', this.innerText)\">").concat(resumeData.workExperience[0].jobTitle, "</span></p>\n            <p><strong>Company:</strong> <span contenteditable=\"true\" oninput=\"updateField('company', this.innerText)\">").concat(resumeData.workExperience[0].company, "</span></p>\n            <p><strong>Duration:</strong> <span contenteditable=\"true\" oninput=\"updateField('duration', this.innerText)\">").concat(resumeData.workExperience[0].duration, "</span></p>\n            <p><strong>Description:</strong> <span contenteditable=\"true\" oninput=\"updateField('description', this.innerText)\">").concat(resumeData.workExperience[0].description, "</span></p>\n\n            <h3>Skills</h3>\n            <ul>").concat(resumeData.skills.map(function (skill) { return "<li contenteditable=\"true\" oninput=\"updateSkill(this, '".concat(skill, "')\">").concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        ");
    }
}
function updateField(field, value) {
    var element = document.getElementById(field);
    if (element) {
        element.value = value;
    }
}
function updateSkill(element, skill) {
    var skillsInput = document.getElementById('skills');
    if (skillsInput) {
        var skillsArray = skillsInput.value.split(',');
        var index = skillsArray.indexOf(skill);
        if (index !== -1) {
            skillsArray[index] = element.innerText.trim();
            skillsInput.value = skillsArray.join(',');
        }
    }
}
