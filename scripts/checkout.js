document.querySelector("#addressForm").addEventListener("submit", finalprocess);

function finalprocess(event){
    event.preventDefault();
    alert("Your ORder is accepted");

    setTimeout(function(){
        alert("Your Order is being cooked")
    },3000)
    setTimeout(function(){
        alert("YOur order is ready")
    },8000)
    setTimeout(function(){
        alert("Order out for delivery");
    },10000)
    setTimeout(function(){
        alert("Order Delivered")
    },12000)

}