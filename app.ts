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
