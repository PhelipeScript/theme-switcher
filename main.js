const container = document.querySelector('.container')
const toggleSwitch = document.querySelector('.toggle-box')

toggleSwitch.addEventListener('click', () => {
    container.classList.toggle('dark')

    if(container.classList.contains('dark')) {
        localStorage.setItem('bg-color', 'dark')
    } else {
        localStorage.setItem('bg-color', 'light')
    }
    
})

const keepDark = localStorage.getItem('bg-color') == 'dark'

if (keepDark) {
    container.classList.add('dark')
}