const PANELS = document.querySelectorAll('.panel');

function active() {
    this.classList.add('active');
    const FIRST_CHILD = this.querySelector('*:first-child');
    FIRST_CHILD.classList.add('child-active');
    const LAST_CHILD = this.querySelector('*:last-child');
    LAST_CHILD.classList.add('child-active');
}

function unactive() {
    this.classList.remove('active');
    const FIRST_CHILD = this.querySelector('*:first-child');
    FIRST_CHILD.classList.remove('child-active');
    const LAST_CHILD = this.querySelector('*:last-child');
    LAST_CHILD.classList.remove('child-active');
}

PANELS.forEach((panel) => {
    panel.addEventListener('mouseover', active);
    panel.addEventListener('mouseout', unactive);
});