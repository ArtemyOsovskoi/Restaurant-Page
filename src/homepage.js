export default function homepage() {
    console.log('homepage func TTTESTING');
    
    const content = document.getElementById('content');
    
    /* //Header
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("☕ 📖 Bookhouse Cafe");
    header.appendChild(headerNode);
    content.appendChild(header);
    header.setAttribute('class', 'header'); */

    //Headline
    const headline = document.createElement('h2');
    const headlineNode = document.createTextNode('Serving freshly brewed coffee and pastries since 1918');
    headline.appendChild(headlineNode);
    content.appendChild(headline);
    headline.setAttribute('class', 'headline');
    headline.style.textAlign = 'center';

    //Description
    const description = document.createElement('p');
    const descriptionNode = document.createTextNode(
    `Bookhouse Cafe is a haven for book and coffee lovers alike, 
    offering a cozy retreat where the aroma of freshly brewed coffee blends harmoniously with 
    the allure of literary treasures. Indulge in the delightful fusion of caffeine and creativity at 
    Bookhouse Cafe, where every sip and page invites you to savor moments of tranquility and inspiration.`
    );
    description.appendChild(descriptionNode);
    content.appendChild(description);
    description.setAttribute('class', 'description');

    //Invitation
    const invitation = document.createElement('p');
    const invitationNode = document.createTextNode(
    'Visit us at your leisure to experience the perfect blend of books, pastries and coffee.'
    );
    invitation.appendChild(invitationNode);
    content.appendChild(invitation);
    invitation.setAttribute('class', 'invitation');

    //Footer
    const footer = document.createElement('footer');
    const footerNode = document.createTextNode('Copyright © ');
    footer.appendChild(footerNode);
    document.body.appendChild(footer);
    footer.setAttribute('class', 'footer');
/*     footer.setAttribute('href', 'https://github.com/ArtemyOsovskoi');
 */    footer.style.color = 'ivory';
    footer.style.background = 'rgba(52, 45, 45, 0.26)';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.textAlign = 'center';
    footer.style.width = '100%';
    footer.style.padding = '0.6rem';

    const footerLink = document.createElement('a');
    const linkNode = document.createTextNode('artemy.o');
    footerLink.setAttribute('href', 'https://github.com/ArtemyOsovskoi');
    footerLink.style.color = 'ivory';
    footerLink.appendChild(linkNode);
    footer.appendChild(footerLink);
}