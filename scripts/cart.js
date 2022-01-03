let cart = JSON.parse(localStorage.getItem("mealCart"))

function displayCart(){
    for(let i =0; i<cart.length; i++){
        console.log(cart[i]);
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = cart[i].meal.strMealThumb;
        td1.append(img);
        let td2 = document.createElement("td");
        let n = document.createElement("h3");
        n.textContent = cart[i].meal.strMeal;
        td2.append(n);
        let td3 = document.createElement("td");
        let price = document.createElement("p");
        price.textContent = cart[i].price;
        row.append(td1,td2,td3);
        
        document.querySelector("table").append(row)

    }
}
displayCart()