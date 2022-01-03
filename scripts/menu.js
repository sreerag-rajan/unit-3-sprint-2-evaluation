
async function getMeal(){
    try{
        let res = await fetch("www.themealdb.com/api/json/v1/1/search.php?f=a");
        let data = await res.json();
        console.log(res);
    }
    catch(err){
        console.log(err)
    }
    
}

getMeal()