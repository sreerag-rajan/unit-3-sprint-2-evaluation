async function getMeal(){
    try{
        let url = "www.themealdb.com/api/json/v1/1/random.php";
        let res = await fetch(url);
        // let data = await res.json();
        console.log(res);
    }
    catch(err){
        console.log(err)
    }    
}
getMeal()
