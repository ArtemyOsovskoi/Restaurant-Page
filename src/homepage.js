export default function homepage() {
    console.log('homepage func tesing');

    const content = document.getElementById('content');

    //Header
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Bookhouse Cafe");
    header.appendChild(headerNode);
    content.appendChild(header);
    header.setAttribute('class', 'header');

    //Headline
    const headline = document.createElement('h2');
    const headlineNode = document.createTextNode('Serving freshly brewed coffee and pastries since 1918');
    headline.appendChild(headlineNode);
    content.appendChild(headline);
    headline.setAttribute('class', 'headline');

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
    const footerNode = document.createTextNode('Copyright © artemy.o');
    footer.appendChild(footerNode);
    content.appendChild(footer);
    footer.setAttribute('class', 'footer');
}