document.addEventListener('DOMContentLoaded', function () {
    const expandableContents = document.querySelectorAll('.expandable-content');
    expandableContents.forEach(content => {
        const header = content;
        const hiddenContent = content.querySelector('.hidden-content');
        const expandIcon = content.querySelector('.expand-icon');
        header.addEventListener('click', function () {
            content.classList.toggle('expanded');
            if (content.classList.contains('expanded')) {
                hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
                if (expandIcon) expandIcon.textContent = 'expand_less';
            } else {
                hiddenContent.style.maxHeight = null;
                if (expandIcon) expandIcon.textContent = 'expand_more';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const expandableContents = document.querySelectorAll('.expandable-content-but-not-really');
    expandableContents.forEach(content => {
        const header = content;
        const hiddenContent = content.querySelector('.hidden-content');
        const expandIcon = content.querySelector('.expand-icon');
        content.classList.add('expanded');
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
        if (expandIcon) expandIcon.textContent = 'expand_less';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.querySelector('.theme-switcher-grid');
    const body = document.body;
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        themeSwitcher.classList.toggle('night-theme');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            console.log('Dark mode enabled');
        } else {
            localStorage.setItem('theme', 'light');
            console.log('Light mode enabled');
        }
    }
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleDarkMode);
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark') {
            themeSwitcher.classList.remove('night-theme');
        } else {
            themeSwitcher.classList.add('night-theme');
        }
    }
});
// set dark mode based on phone/browser settings
// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// if (darkModeMediaQuery.matches) {
//     document.body.classList.add('dark-mode');
// }
// disabled due to default design choice
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    function checkViewportWidth() {
        if (window.innerWidth < 320) {
            document.body.style.display = 'none';
            const userChoice = confirm('Screen width is too small for optimal viewing. Would you like to download the CV?');
            if (userChoice) {
                const link = document.createElement('a');
                link.href = 'resumes/Elshad_Sabziyev_Resume.pdf';
                link.download = 'Elshad_Sabziyev_Resume.pdf';
                document.body.appendChild(link); // Temporarily append to body to ensure it's in the DOM
                link.click(); // Trigger the download
                document.body.removeChild(link); // Clean up by removing the link from the DOM
            } else {
                document.body.style.display = '';
            }
        } else {
            document.body.style.display = '';
        }
    }
    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);
});