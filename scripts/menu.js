let menu =[];
async function getMeal(){
    try{
        
        for(let i =0; i<10; i++){
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
            let data = await res.json();
            menu.push(data.meals);

        }
        console.log(menu)
        
    }
    catch(err){
        console.log(err)
    }    
}
getMeal()

function displayMenu(arr){
    arr.map(function(el){
        let img = document.createElement("img");
        img.src = el.strMealThumb

        let p = Math.floor((Math.random()*400))+100
        let price = document.createElement("p");
        price.textContent = p;

        let addcart = document.createElement("button")
        
    })

}
