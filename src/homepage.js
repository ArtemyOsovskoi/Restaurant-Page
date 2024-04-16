export default function homepage() {
    const content = document.getElementById('#content');

    const header = document.createElement('h1');
    header.innerText = 'Bookhouse Cafe';
    header.setAttribute('class', 'header');

    const headline = document.createElement('h2');
    headline.innerText = 'Serving freshly brewed coffee since 1918';
    headline.setAttribute('class', 'headline');

    const description = document.createElement('p');
    description.innerText = `Bookhouse Cafe is a haven for book and coffee lovers alike, 
    offering a cozy retreat where the aroma of freshly brewed coffee blends harmoniously with 
    the allure of literary treasures. Indulge in the delightful fusion of caffeine and creativity at 
    Bookhouse Cafe, where every sip and page invites you to savor moments of tranquility and inspiration.`;
    description.setAttribute('class', 'description');


    const invitation = document.createElement('p');
    invitation.innerText = 'Visit us at your leisure to experience the perfect blend of books and coffee.';
    invitation.setAttribute('class', 'invitation');


    const footer = document.createElement('footer');
    footer.innerText = 'Copyright © artemy.o';
    footer.setAttribute('class', 'footer');

    content.appendChild(header);
    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(invitation);
    content.appendChild(footer);

    return header, headline, description, invitation, footer
}

export function consoleText() {
    console.log("Homepage Module Works!");
};