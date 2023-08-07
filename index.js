const menu = [
    {
        home: 'Home'
    },
    {
        home: 'Clothes'
    },
    {
        home: 'Men Clothes'
    },
    {
        home: 'Women Clothes'
    },
    {
        home: 'Accessories'
    }

];
var getmenu = '';
for (let i in menu) {
    getmenu += `<li><a href="#">${menu[i]['home']}</a></li>`;
}
document.getElementsByClassName('nav')[0].innerHTML = `<ul>${getmenu}</ul>`;
const logo = [
    {
        logo: 'img/4918050.jpg'
    }
];
var getlogo = '';
for (let i in logo) {
    getlogo = `<img src="${logo[i]['logo']}"  class="float-end" alt="">`;
}
document.getElementsByClassName('box-logo')[0].innerHTML = getlogo;
document.getElementsByClassName('footer-logo')[0].innerHTML = getlogo;

// address
const add = [
    {
        addr: 'ETEC Cetner IT Professional Training Center, Phnom Penh, Cambodia ',
        loca: 'https://www.google.com/maps/@11.2305634,105.8290357,13z?entry=ttu'
    }
];
var getadd = '';
for (let i in add) {
    getadd = ` <a target="_blank" href="${add[i]['loca']}">
    <h5>${add[i]['addr']}</h5>
    </a>`;
}
document.getElementsByClassName('in-footer-add')[0].innerHTML = getadd;
// social
const social = [

    {
        imgg: 'img/facebook.png',


    },
    {
        imgg: 'img/instagram.png',
    }
    , {
        imgg: 'img/tik-tok.png',
    }
];
var geticon = '';
for (let i in social) {
    geticon += ` <li><img src="${social[i]['imgg']}" alt=""></li>`;
}
document.getElementsByClassName('contact-icon')[0].innerHTML = `<ul>${geticon}</ul>`;

// product
const url = "https://fakestoreapi.com/products?limit=20";
var getProduct = '';
const product = async () => {
    try {
        const respone = await fetch(url);
        const data = await respone.json();
        for (let item of data) {
            getProduct += `
                <div class="box-product">
                    <div class="box-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="box-title">
                        <h6>${item.title}</h6>
                        <h6>${item.price} $</h6>
                        <p>${item.rating['rate']}</p>
                    </div>
                    <div class="box-buy">
                        <button type="button">Buy Now !</button>
                    </div>
                </div>
            
            `;
        }
    }
    catch (error) {
        console.log(error);
    }
    document.getElementsByClassName('content')[0].innerHTML = getProduct;
    console.log(getProduct);
}
product();

// search 
const search = async () => {
    const respone = await fetch(url);
    const dataApi = await respone.json();
    const list = [...new Set(dataApi.map((item) => {
        return item;
    }))];
    document.getElementById('searchItem').addEventListener('keyup', (e) => {
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item) => {
            return item.title.toLowerCase().includes(searchData);
        });
        desplayItem(filterData);
    });
    const desplayItem = ((item) => {
        document.getElementById('root').innerHTML = item.map((item) => {
            const { image, title, price, rating } = item;
            return (`
                <div class="box-product">
                    <div class="box-img">
                        <img src="${image}" alt="">
                    </div>
                    <div class="box-title">
                        <h6>${title}</h6>
                        <h6>${price} $</h6>
                        <p>${rating['rate']}</p>
                    </div>
                    <div class="box-buy">
                        <button type="button">Buy Now !</button>
                    </div>
                </div>
        
        `);
        }).join('');
    });
}
search();