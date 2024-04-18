export default function contactUs() {
    console.log('I am the Contact Us Page');

    const content = document.getElementById('content');

    //menu item
    const contactUs = document.createElement('h2');
    const contactUsText = document.createTextNode('I AM CONTACT US TEXT');
    contactUs.appendChild(contactUsText);
    content.appendChild(contactUs);
    contactUs.setAttribute('class', 'contactUs');
    contactUs.style.textAlign = 'center';
}