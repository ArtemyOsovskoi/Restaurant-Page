import _ from 'lodash';
import './styles.css';
import homepage from './homepage.js';
import menu from './menu.js';
import about from './about.js';
import contactUs from './contactus.js';

homepage();

console.log('index js is working as intended!');

(function tabSwitch () {
    let homeButton = document.getElementById('home');
    let menuButton = document.getElementById('menu');
    let aboutButton = document.getElementById('about');
    let contactUsButton = document.getElementById('contactus');

    homeButton.addEventListener("click", () => {
        //logic to wipe out #content div
        //...
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
        homepage();
    });

    menuButton.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
        menu();
    });

    aboutButton.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
        about();
    });

    contactUsButton.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
        contactUs();
    });
}) ();