const CONTROLS = document.querySelectorAll('.controls input');

function handleUpdate() {
    const SUFFIX = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + SUFFIX);
    if (this.name == 'base') {
        document.querySelector('.hl').style.setProperty('color', this.value + SUFFIX);
    }
}

CONTROLS.forEach(control => {
    control.addEventListener('change', handleUpdate);
    control.addEventListener('mousemove', handleUpdate);
});