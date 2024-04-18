export default function about() {
    console.log('I am the About Page');

    const content = document.getElementById('content');

    const about = document.createElement('h1');
    const aboutText = document.createTextNode('About');
    about.appendChild(aboutText);
    content.appendChild(about);
    about.setAttribute('class', 'about');
    about.style.textAlign = 'center';
    about.style.color = '#d19d58';

    const aboutInfo = document.createElement('p');
    const aboutInfoText = document.createTextNode(`Step into our cozy coffee haven where the aroma of freshly brewed coffee dances with the scent of freshly baked pastries, creating a warm and inviting atmosphere. At our coffee shop, we take pride in serving premium coffee blends sourced from around the world, expertly crafted by our passionate baristas. Whether you're seeking a quiet place to work or a friendly spot to catch up with friends, our cafe is the perfect destination for coffee lovers seeking a delightful experience.`);
    aboutInfo.appendChild(aboutInfoText);
    content.appendChild(aboutInfo);
    aboutInfo.setAttribute('class', 'about');
    aboutInfo.style.textAlign = 'center';
}