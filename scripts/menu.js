
async function getMeal(){
    try{
        let res = await fetch("www.themealdb.com/api/json/v1/1/random.php");
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
    
}
