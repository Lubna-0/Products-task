const myUrl = 'https://dummyjson.com/products';


const myData =async()=>{
    let response = await fetch(myUrl);
    let data = await response.json();
    let products = data.products;
    return products;
}

showProducts = async()=>{
    products = await myData();
    products.map((i)=>{
        let priceAfterDis = i.price - (i.discountPercentage/100);
        let ans = priceAfterDis.toFixed(2);
        document.querySelector("#all").innerHTML+=`
            <div class="card">
                <img src="${i.thumbnail}" alt="">
                <div class = "content">
                    <h3>${i.title}</h3>
                    <p class="des"> Description : ${i.description} </p>
                    <p class = "price">
                        <span> <strong>${ans}</strong>$</span>
                        <span class="price-before">${i.price}</span>
                        <span class="dis">${i.discountPercentage} % OFF </span>
                    </p>
                </div>
            </div>
        `
    })
}
showProducts();