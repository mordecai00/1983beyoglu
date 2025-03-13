const menuData = {
    'soguk-icecekler': [
        { name: 'İce Americano', price: '90 ₺' },
        { name: 'Ice Latte', price: '100 ₺' },
        { name: 'İced Caramel Latte', price: '110 ₺'},
        { name: 'İced Mocha', price: '130 ₺' },
        { name: 'White Chocolate Mocha', price: '130 ₺' }
    ],
    'sicak-icecekler': [
        { name: 'Türk Kahvesi', price: '50 ₺' },
        { name: 'Americano', price: '80 ₺' },
        { name: 'Latte', price: '90 ₺' },
        { name: 'Espresso', price: '70 ₺' },
        { name: 'Macchiato', price: '70 ₺' },
        { name: 'Cortado', price: '80 ₺' },
        { name: 'Cappucino', price: '90 ₺' },
        { name: 'Flat White', price: '90 ₺' },
        { name: 'Filtre Kahve', price: '75 ₺' },
        { name: 'Sütlü Sıcak Çikolata', price: '110 ₺' },
        { name: 'Mocha', price: '120 ₺' },
        { name: 'White Chocolate Mocha', price: '120 ₺' },
        { name: 'Caramel Latte', price: '120 ₺' },
        { name: 'Crem Brule Latte', price: '120 ₺' },
        { name: 'Blackberry Mocha', price: '120 ₺' },
        { name: 'Bardak Çay', price: '20 ₺' },
        { name: 'Fincan Çay', price: '30 ₺' },
        { name: 'Bitki Çayları', price: '30 ₺' }
    ],
    'tatlilar': [
        { name: 'Cheesecake Çeşitleri', price: '150 ₺' },
        { name: 'Puding Çeşitleri', price: '130 ₺' },
        { name: 'Gronola Çeşitleri', price: '130 ₺' },
        { name: 'Cookie', price: '70 ₺' }
    ],
    'atistirmaliklar': [
        { name: 'Züber Çikolata', price: '50 ₺' },
        { name: 'Züber Gronola', price: '35 ₺' },
        { name: 'Dubai Çikolatası', price: '175 ₺' },
        { name: 'Lifalif', price: '40 ₺' },
        { name: 'Çikolata Çeşitleri ', price: '35 ₺' },
        { name: 'Bisküvi Çeşitleri', price: '35 ₺' },
        { name: 'Popkek Çeşitleri', price: '25 ₺' },
        { name: 'Çubuk Kraker', price: '15 ₺' },
        { name: 'Kruvasan', price: '30 ₺' },
        { name: 'Tahıl Cipsi', price: '25 ₺' }
    ],
    'soft-icecekler': [
        { name: 'Coco cola', price: '50 ₺' },
        { name: 'Fanta', price: '50 ₺' },
        { name: 'Sprite', price: '50 ₺' },
        { name: 'Sarıyer Cola', price: '40 ₺' },
        { name: 'Exotic', price: '70 ₺' },
        { name: 'Tamek Çeşitleri', price: '40 ₺' },
        { name: 'Redbull', price: '60 ₺' },
        { name: 'Limonata Uludağ', price: '40 ₺' },
        { name: 'Ayran', price: '30 ₺' },
        { name: 'Sade Soda', price: '20 ₺' },
        { name: 'Meyveli Soda', price: '25 ₺' },
        { name: 'Lipton Çeşitleri', price: '40 ₺' },
        { name: 'Su', price: '15 ₺' },
        { name: 'Caprisun', price: '30 ₺' } 
    ],
    'sandvicler': [
        { name: 'Soğuk Sandviçler', price: '100 ₺' },
        { name: '4 Peynirli Sandviç', price: '150 ₺' },
        { name: 'Hindi Füme Sandviç', price: '150 ₺' },
        { name: 'Fırında Tavuk kaşar Sandviç', price: '150 ₺' },
        { name: 'Dana Cheddar Sandviç', price: '150 ₺' },
        { name: 'Kumru', price: '90 ₺' },
        { name: 'Tost Çeşitleri', price: '90 ₺' },
        { name: 'Pizza+İçecek', price: '175 ₺' }
    ]
};

function showCategory(category) {
    const contentDiv = document.getElementById('menu-content');
    const items = menuData[category];
    
    let html = '';
    items.forEach(item => {
        html += `
            <div class="menu-item">
                <span>${item.name}</span>
                <span>${item.price}</span>
            </div>
        `;
    });
    
    contentDiv.innerHTML = html;
} 