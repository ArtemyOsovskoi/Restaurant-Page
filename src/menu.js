export default function menu() {
    console.log('I am the Menu Page');

    const content = document.getElementById('content');

    //menu item
    const menuItem = document.createElement('h2');
    const menuItemOne = document.createTextNode('I AM MENU ITEM');
    menuItem.appendChild(menuItemOne);
    content.appendChild(menuItem);
    menuItem.setAttribute('class', 'menuitem');
    menuItem.style.textAlign = 'center';
}