let menu =[];
let cart = JSON.parse(localStorage.getItem("mealCart"))||[];
displayCartCount()
async function getMeal(){
    try{
        
        for(let i =0; i<10; i++){
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
            let data = await res.json();
            console.log(data.meals[0])
            menu.push(data.meals[0]);

        }
        displayMenu(menu);
        console.log(menu)
        
    }
    catch(err){
        console.log(err)
    }    
}
getMeal()

function displayMenu(arr){
    for(let i =0; i<arr.length; i++){
        el = arr[i];
        let img = document.createElement("img");
        img.src = el.strMealThumb

        let p = Math.floor((Math.random()*400))+100
        let price = document.createElement("p");
        price.textContent = `Price:${p}`;

        let addcart = document.createElement("button")
        addcart.textContent = "Add To Cart";
        addcart.onclick = function(){
            let obj = {
                meal: el,
                price: p,
            }
            cart.push(obj);
            localStorage.setItem("mealCart",JSON.stringify(cart));
            displayCartCount();
        }

        let div = document.createElement("div");
        div.append(img, price, addcart);
        document.querySelector("#displayMenu").append(div);
        
    }

}
function displayCartCount(){
    document.querySelector("#cartCount").textContent = `Number of Items in cart:${cart.length}`;
}
