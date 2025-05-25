
fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
    const allTypes = ['drum', 'guitar', 'piano'];
    const productByType = {};

    allTypes.forEach(type => {
    const container = document.getElementById(`${type}-container`);
        if (container) {
            container.innerHTML = '';
        }
        });
    data.forEach(product => {
        const img = document.createElement('img');
        img.src = '/assets/' + product.image;
        img.alt = product.name;
        img.className = 'product-image';

        const card = document.createElement('div');
        card.className = 'card';

        const details = document.createElement('div');
        details.className = 'details';

        const h4 = document.createElement('h4');
        h4.textContent = product.name;

        const p = document.createElement('p');
        p.textContent = '$ ' + product.price;

        const button = document.createElement('button');
        button.textContent = 'Details';
        button.onclick = () => openPopup(product);

        details.appendChild(h4);
        details.appendChild(p);
        details.appendChild(button);

        card.appendChild(img);
        card.appendChild(details);

        const type = product.type.toLowerCase().trim();
        const typeContainer = document.getElementById(`${type}-container`);

        if (typeContainer) {
            typeContainer.appendChild(card);
        } else {
            console.warn(`Container not found for type: ${product.type}`);
        }
        });
    });


    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
        const allTypes = ['acousticguitar', 'electricguitar', 'acousticdrum', 'electricdrum', 'keyboard', 'pianocr'];
        const productByType = {};

        allTypes.forEach(type => {
        const container = document.getElementById(`${type}-container`);
        if (container) {
            container.innerHTML = '';
        }
        });
        data.forEach(product => {
        const img = document.createElement('img');
        img.src = '/assets/' + product.image;
        img.style.maxWidth = '250px';  
        img.style.maxHeight = '300px'; 
        img.style.objectFit = 'contain';

        const card = document.createElement('div');
        card.className = 'card';

        const details = document.createElement('div');
        details.className = 'details';

        const h4 = document.createElement('h4');
        h4.textContent = product.name;

        const p = document.createElement('p');
        p.textContent = '$ ' + product.price;

        const button = document.createElement('button');
        button.textContent = 'Details';
        button.onclick = () => openPopup(product);

        details.appendChild(h4);
        details.appendChild(p);
        details.appendChild(button);

        card.appendChild(img);
        card.appendChild(details);

        const category = product.category.toLowerCase().trim();
        const categoryContainer = document.getElementById(`${category}-container`);

        if (categoryContainer) {
            categoryContainer.appendChild(card);
        } else {
            console.warn(`Container not found for type: ${product.category}`);
        }
        });
    });


    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
        const allTypes = ['newproduct', 'bestseller', 'promo'];
        const productByType = {};

        allTypes.forEach(type => {
        const container = document.getElementById(`${type}-container`);
        if (container) {
            container.innerHTML = '';
        }
        });

        data.forEach(product => {
        const img = document.createElement('img');
        img.src = '/assets/' + product.image;
        img.style.maxWidth = '250px';  
        img.style.maxHeight = '300px'; 
        img.style.objectFit = 'contain';

        const card = document.createElement('div');
        card.className = 'card';

        const details = document.createElement('div');
        details.className = 'details';

        const h4 = document.createElement('h4');
        h4.textContent = product.name;

        const p = document.createElement('p');
        p.textContent = '$ ' + product.price;

        const button = document.createElement('button');
        button.textContent = 'Details';
        button.onclick = () => openPopup(product);

        details.appendChild(h4);
        details.appendChild(p);
        details.appendChild(button);

        card.appendChild(img);
        card.appendChild(details);

        const selling_type = product.selling_type.toLowerCase().trim();
        const selling_typeContainer = document.getElementById(`${selling_type}-container`);

        if (selling_typeContainer) {
            selling_typeContainer.appendChild(card);
        } else {
            console.warn(`Container not found for type: ${product.selling_type}`);
        }
        });
    });


    function openPopup(product) {
  document.getElementById('popup-image').src = '/assets/' + product.image;
  document.getElementById('popup-title').textContent = product.name;
  document.getElementById('popup-price').textContent = '$ ' + product.price.toLocaleString();
  document.getElementById('popup-description').textContent = product.description;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

