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
