export default function about() {
    console.log('I am the About Page');

    const content = document.getElementById('content');

    //menu item
    const about = document.createElement('h2');
    const aboutText = document.createTextNode('I AM ABOUT ITEM');
    about.appendChild(aboutText);
    content.appendChild(about);
    about.setAttribute('class', 'about');
    about.style.textAlign = 'center';
}