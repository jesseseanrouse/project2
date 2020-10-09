export default function handleClick() {
    let menu = document.getElementById('links')
    if (menu.style.display === "flex") {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
    return
}