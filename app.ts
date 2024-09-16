const toggleSkills = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleSkills?.addEventListener('click', () => {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
});

const toggleeducation = document.getElementById('toggle-education');
const educationSection = document.getElementById('education');

toggleeducation?.addEventListener('click', () => {
    if (educationSection) {
        if (educationSection.style.display === 'none') {
            educationSection.style.display = 'block';
        } else {
            educationSection.style.display = 'none';
        }
    }
});

const toggleexperience = document.getElementById('toggle-experience');
const experienceSection = document.getElementById('work-experience');

toggleexperience?.addEventListener('click', () => {
    if (experienceSection) {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
        } else {
            experienceSection.style.display = 'none';
        }
    }
});
