var toggleSkills = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleSkills === null || toggleSkills === void 0 ? void 0 : toggleSkills.addEventListener('click', function () {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
});
