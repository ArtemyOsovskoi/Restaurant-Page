export default function menu() {
    console.log('I am the Menu Page');

    const content = document.getElementById('content');

    //menu header
    const menuHeader = document.createElement('h1');
    const menuHeaderText = document.createTextNode('Menu');
    menuHeader.appendChild(menuHeaderText);
    content.appendChild(menuHeader);
    menuHeader.setAttribute('class', 'menuitem');
    menuHeader.style.textAlign = 'center';
    menuHeader.style.color = '#d19d58';    

    //menu coffee header
    const coffeeHeader = document.createElement('h2');
    const coffeeHeaderText = document.createTextNode('Coffee');
    coffeeHeader.appendChild(coffeeHeaderText);
    content.appendChild(coffeeHeader);
    coffeeHeader.setAttribute('class', 'coffeeHeader');
    coffeeHeader.style.textAlign = 'center';
    coffeeHeader.style.borderBottom = 'thick double #d19d58';

    //menu items coffee
    const espressoHeader = document.createElement('h3');
    const espressoHeaderText = document.createTextNode('☕ Espresso 1.5$');
    espressoHeader.appendChild(espressoHeaderText);
    content.appendChild(espressoHeader);
    const espresso = document.createElement('p');
    const espressoText = document.createTextNode('A single shot of strong, rich and damn good coffee.');
    espresso.appendChild(espressoText);
    content.appendChild(espresso);
    espresso.setAttribute('class', 'espresso');
    espresso.style.textAlign = 'center';

    const cappuccinoHeader = document.createElement('h3');
    const cappuccinoHeaderText = document.createTextNode('🍵 Cappuccino 2.5$');
    cappuccinoHeader.appendChild(cappuccinoHeaderText);
    content.appendChild(cappuccinoHeader);
    const cappuccino = document.createElement('p');
    const cappuccinoText = document.createTextNode('Equal parts espresso, steamed milk, and milk foam, topped with a sprinkle of cocoa powder.');
    cappuccino.appendChild(cappuccinoText);
    content.appendChild(cappuccino);
    cappuccino.setAttribute('class', 'cappuccino');
    cappuccino.style.textAlign = 'center';

    const latteHeader = document.createElement('h3');
    const latteHeaderText = document.createTextNode('🥃 Latte 3$');
    latteHeader.appendChild(latteHeaderText);
    content.appendChild(latteHeader);
    const latte = document.createElement('p');
    const latteText = document.createTextNode('Creamy espresso with steamed milk and a small layer of foam on top.');
    latte.appendChild(latteText);
    content.appendChild(latte);
    latte.setAttribute('class', 'latte');
    latte.style.textAlign = 'center';

    //menu pastries header
    const pastriesHeader = document.createElement('h2');
    const pastriesHeaderText = document.createTextNode('Pastries');
    pastriesHeader.appendChild(pastriesHeaderText);
    content.appendChild(pastriesHeader);
    pastriesHeader.setAttribute('class', 'pastriesHeader');
    pastriesHeader.style.textAlign = 'center';
    pastriesHeader.style.borderBottom = 'thick double #d19d58';

    //menu items pastries
    const croissantHeader = document.createElement('h3');
    const croissantHeaderText = document.createTextNode('🥐 Croissant 1$');
    croissantHeader.appendChild(croissantHeaderText);
    content.appendChild(croissantHeader);
    const croissant = document.createElement('p');
    const croissantText = document.createTextNode('A flaky, buttery pastry perfect for pairing with coffee.');
    croissant.appendChild(croissantText);
    content.appendChild(croissant);
    croissant.setAttribute('class', 'croissant');
    croissant.style.textAlign = 'center';

    const cherrypieHeader = document.createElement('h3');
    const cherryText = document.createTextNode('🥧 Cherry Pie 3.5$');
    cherrypieHeader.appendChild(cherryText);
    content.appendChild(cherrypieHeader);
    const cherryPie = document.createElement('p');
    const cherryPieText = document.createTextNode('Indulge in a slice of heavenly cherry pie.');
    cherryPie.appendChild(cherryPieText);
    content.appendChild(cherryPie);
    cherryPie.setAttribute('class', 'cherryPie');
    cherryPie.style.textAlign = 'center';

    const muffinHeader = document.createElement('h3');
    const muffinHeaderText = document.createTextNode('🥧 Muffin 1.5$');
    muffinHeader.appendChild(muffinHeaderText);
    content.appendChild(muffinHeader);
    const muffin = document.createElement('p');
    const muffinText = document.createTextNode('Moist and flavorful, available in options such as blueberry, chocolate chip, or bran.');
    muffin.appendChild(muffinText);
    content.appendChild(muffin);
    muffin.setAttribute('class', 'muffin');
    muffin.style.textAlign = 'center';
}
