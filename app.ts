const toggleSkills = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

if (toggleSkills && skillsSection) {
    toggleSkills.textContent = skillsSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}


toggleSkills?.addEventListener('click', () => {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkills.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkills.textContent = 'Show Skills';
        }
    }
});


const toggleeducation = document.getElementById('toggle-education');
const educationSection = document.getElementById('education');

if (toggleeducation && educationSection) {
    toggleeducation.textContent = educationSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}

toggleeducation?.addEventListener('click', () => {
    if (educationSection) {
        if (educationSection.style.display === 'none') {
            educationSection.style.display = 'block';
            toggleeducation.textContent = 'Hide Education'
        } else {
            educationSection.style.display = 'none';
            toggleeducation.textContent = 'Show Education'
        }
    }
});

const toggleexperience = document.getElementById('toggle-experience');
const experienceSection = document.getElementById('work-experience');

if (toggleexperience && experienceSection) {
    toggleexperience.textContent = experienceSection.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
}

toggleexperience?.addEventListener('click', () => {
    if (experienceSection) {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
            toggleexperience.textContent = 'Hide Experience'
        } else {
            experienceSection.style.display = 'none';
            toggleexperience.textContent = 'Show Experience'
        }
    }
});
