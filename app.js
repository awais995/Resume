var toggleSkills = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
if (toggleSkills && skillsSection) {
    toggleSkills.textContent = skillsSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}
toggleSkills === null || toggleSkills === void 0 ? void 0 : toggleSkills.addEventListener('click', function () {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkills.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkills.textContent = 'Show Skills';
        }
    }
});
var toggleeducation = document.getElementById('toggle-education');
var educationSection = document.getElementById('education');
if (toggleeducation && educationSection) {
    toggleeducation.textContent = educationSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}
toggleeducation === null || toggleeducation === void 0 ? void 0 : toggleeducation.addEventListener('click', function () {
    if (educationSection) {
        if (educationSection.style.display === 'none') {
            educationSection.style.display = 'block';
            toggleeducation.textContent = 'Hide Skills';
        }
        else {
            educationSection.style.display = 'none';
            toggleeducation.textContent = 'Show Skills';
        }
    }
});
var toggleexperience = document.getElementById('toggle-experience');
var experienceSection = document.getElementById('work-experience');
if (toggleexperience && experienceSection) {
    toggleexperience.textContent = experienceSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}
toggleexperience === null || toggleexperience === void 0 ? void 0 : toggleexperience.addEventListener('click', function () {
    if (experienceSection) {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
            toggleexperience.textContent = 'Hide Skills';
        }
        else {
            experienceSection.style.display = 'none';
            toggleexperience.textContent = 'Show Skills';
        }
    }
});
