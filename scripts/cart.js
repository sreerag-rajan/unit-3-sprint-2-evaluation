let cart = JSON.parse(localStorage.getItem("mealCart"))

function displayCart(){
    document.querySelector("table").innerHTML="";
    cart.map(function(el,index){
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = el.meal.strMealThumb;
        td1.append(img);
        let td2 = document.createElement("td");
        let n = document.createElement("h3");
        n.textContent = el.meal.strMeal;
        td2.append(n);
        let td3 = document.createElement("td");
        let price = document.createElement("p");
        price.textContent = el.price;
        td3.append(price);

        let td4 = document.createElement("td");
        let rmv = document.createElement("button");
        rmv.textContent = "remove";
        rmv.onclick = function(){
            remove(index);            
        }
        td4.append(rmv)
        row.append(td1,td2,td3,td4);
        
        document.querySelector("table").append(row)

    })
       
}
displayCart()

function total(){
    let sum = 0;
    for(let i =0; i<cart.length; i++){
        sum+=cart[i].price;
    }
    return sum;
}

function remove(i){
    console.log(i)
    cart.splice(i,1);
    localStorage.setItem("mealCart",JSON.stringify(cart));
    displayCart();
    total();
}

document.querySelector("#tot").textContent =`Total: ${total()}`;