import './style.css'

const navBar =  document.querySelector('.navbar')
const allLi =  document.querySelectorAll('li')

allLi.forEach((li, index) => {
    li.addEventListener("click", e => {
        navBar.querySelector(".active-list").classList.remove("active-list");
        li.classList.add("active-list");


        const indicator =  document.querySelector(".indicator");
        indicator.style.transform = `translateX(calc(${index * 90}px))`;
    });
    
});

async function fetchProducts(){
    const rawProducts = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/Product');
    const products = await rawProducts.json();
    return products;
}

async function fatchUsers() {
    const rawUsers = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/User');
    const users = await rawUsers.json();
    return  users
}

async function main(){
    const products = await fetchProducts();
    const users = await fatchUsers()
    console.log('### Products Users', products, users)
    const productsContainerEl = document.querySelector('.productsContainer')

    for ( const product of products) {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        const imageEl = document.createElement('img')
        imageEl.src = product.image;
        const productNameEl = document.createElement('div');
        productNameEl.innerHTML = product.name;
        productsContainerEl.appendChild(cardContainer)
        cardContainer.appendChild(imageEl)
        cardContainer.appendChild(productNameEl);

    }

}

main();
