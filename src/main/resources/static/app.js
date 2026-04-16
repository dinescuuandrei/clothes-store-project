let cosCumparaturi = [];
let toateProdusele = [];

const imaginiProduse = {
    'Pollo-Tshirt': 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80',
    'Blue Jeans': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    'Belt': 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80'
};

const marimiProduse = {
    'Pollo-Tshirt': [{s: 'S', a: true}, {s: 'M', a: false}, {s: 'L', a: true}],
    'Blue Jeans': [{s: '30', a: true}, {s: '32', a: true}, {s: '34', a: false}],
    'Belt': [{s: 'S', a: true}, {s: 'M', a: true}, {s: 'L', a: true}]
};

async function incarcaProduse() {
    try {
        const raspuns = await fetch('/haine');
        toateProdusele = await raspuns.json();
        renderGrid();
    } catch (eroare) {
        console.error(eroare);
    }
}

function renderGrid() {
    let container = document.getElementById('lista-produse');
    container.innerHTML = toateProdusele.map((p, index) => `
        <div class="product-card slide-up" style="animation-delay: ${index * 0.15}s" onclick="deschideProdus(${p.id})">
            <div class="img-wrapper">
                <img src="${imaginiProduse[p.name]}" alt="${p.name}">
            </div>
            <span class="category-badge">${p.category}</span>
            <h3>${p.name}</h3>
            <div class="product-price">${p.price} RON</div>
        </div>
    `).join('');
}

function deschideProdus(id) {
    const p = toateProdusele.find(item => item.id === id);
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-detail-view').style.display = 'block';

    document.getElementById('detail-img').src = imaginiProduse[p.name];
    document.getElementById('detail-name').innerText = p.name;
    document.getElementById('detail-category').innerText = p.category;
    document.getElementById('detail-price').innerText = p.price + ' RON';
    document.getElementById('detail-stock').innerText = 'Stoc disponibil: ' + p.stock + ' bucăți';

    document.getElementById('detail-description').innerText = 'Acest produs din categoria ' + p.category + ' este confecționat cu o atenție deosebită la detalii, folosind cele mai bune materiale pentru a garanta confort și durabilitate. Designul modern se potrivește perfect stilului tău urban.';

    let marimiContainer = document.getElementById('size-options');
    marimiContainer.innerHTML = (marimiProduse[p.name] || []).map(m => `
        <button class="size-btn ${m.a ? '' : 'disabled'}" 
                onclick="${m.a ? `selecteazaMarime(this, '${m.s}')` : ''}">
            ${m.s}
        </button>
    `).join('');

    document.getElementById('add-to-cart-detail').onclick = () => {
        const hasSizes = (marimiProduse[p.name] || []).length > 0;
        const sizeSelected = document.querySelector('.size-btn.selected');

        if (hasSizes && !sizeSelected) {
            alert("Te rugăm să selectezi o mărime.");
            return;
        }

        const selectedSizeText = sizeSelected ? ` (Mărimea ${sizeSelected.innerText})` : '';
        adaugaInCos(p.name + selectedSizeText, p.price);
    };

    window.scrollTo(0,0);
}

function selecteazaMarime(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('product-detail-view').style.display = 'none';
    window.scrollTo(0,0);
}

function adaugaInCos(nume, pret) {
    cosCumparaturi.push({ nume, pret });
    const btnNav = document.getElementById('cart-btn-nav');
    btnNav.innerText = `Coș (${cosCumparaturi.length})`;

    btnNav.style.transform = 'scale(1.1)';
    btnNav.style.color = 'var(--secondary)';
    setTimeout(() => {
        btnNav.style.transform = 'scale(1)';
        btnNav.style.color = '';
    }, 300);
}

const modal = document.getElementById('cart-modal');
const btnCosNav = document.getElementById('cart-btn-nav');
const btnClose = document.querySelector('.close-btn');

btnCosNav.onclick = (e) => {
    e.preventDefault();
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total-price');
    let total = 0;

    if(cosCumparaturi.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem 0;">Coșul este momentan gol.</p>';
    } else {
        container.innerHTML = cosCumparaturi.map(item => {
            total += item.pret;
            return `<div class="cart-item">
                        <span class="cart-item-name">${item.nume}</span>
                        <span class="cart-item-price">${item.pret} RON</span>
                    </div>`;
        }).join('');
    }

    totalElement.innerText = total.toFixed(2);
    modal.classList.add('show');
};

btnClose.onclick = () => modal.classList.remove('show');

document.getElementById('checkout-btn').onclick = () => {
    if (cosCumparaturi.length === 0) return alert("Nu ai produse în coș!");
    document.querySelector('.modal-content').innerHTML = `
        <div style="text-align:center; padding:2rem;">
            <h2 style="color: var(--secondary); margin-bottom: 1rem; font-size: 2.5rem;">Succes!</h2>
            <p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem;">Comanda ta a fost procesată cu succes.</p>
            <button class="btn-primary" onclick="location.reload()">Înapoi la magazin</button>
        </div>`;
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
};

incarcaProduse();