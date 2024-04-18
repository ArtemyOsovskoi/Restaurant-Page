export default function contactUs() {
    console.log('I am the Contact Us Page');

    const content = document.getElementById('content');

    const contactUs = document.createElement('h2');
    const contactUsText = document.createTextNode('Contact Us');
    contactUs.appendChild(contactUsText);
    content.appendChild(contactUs);
    contactUs.setAttribute('class', 'contactUs');
    contactUs.style.textAlign = 'center';
    contactUs.style.color = '#d19d58';

    const aboutInfo = document.createElement('p');
    const aboutInfoText = document.createTextNode(`Feel free to reach out to us at any time. You can visit us at our charming location in the heart of town at:
123 Main Street, Twin Peaks, WA.`);
    aboutInfo.appendChild(aboutInfoText);
    content.appendChild(aboutInfo);
    aboutInfo.setAttribute('class', 'about');
    aboutInfo.style.textAlign = 'center';

    const numberInfo = document.createElement('p');
    const numberText = document.createTextNode('For any inquiries or reservations, you can call us at (232) 123-4567 or email us at info@bookhousecoffee.com.');
    numberInfo.appendChild(numberText);
    content.appendChild(numberInfo);
    numberInfo.style.textAlign = 'center';
    const aboutFin = document.createElement('p');
    const aboutFinText = document.createTextNode('We look forward to hearing from you and welcoming you into our coffee-and-books-loving community!');
    aboutFin.appendChild(aboutFinText);
    content.appendChild(aboutFin);
    aboutFin .style.textAlign = 'center';
}