

const checkbox = 
document.getElementById('checkbox');

checkbox.oddEventListener('change', () => {
    // change the theme of the website
    document.body.classList.toggle('dark');
});
