// function amountValue(){
//     if(food.value == "" || firstAmount.value == "" || secondAmount.value == "" || thirdAmount == "" || lastAmount == ""){
//         alert("spaces cannot be empty")
//     } else {
//         var confirmation = confirm("Are you sure you want to proceed")
//     }
// }
function amountValue() {
    var num = Number(firstAmount.value) + Number(secondAmount.value) + Number(thirdAmount.value) + Number(lastAmount.value)
    var confirmation = confirm ("Are you sure you want to proceed")
    if(confirmation == true && num >10000){
        errorDiv.style.display = "block"
    } else if (confirmation == true && firstAmount.value == "" || secondAmount.value == "" || thirdAmount.value == "" || lastAmount.value == ""){
        errorDiv2.style.display = "block"
    } else if(confirmation == true){
        var totalBudget = 1000000 - num
        var remainder =   num
        var dailyLimit = 10000 - num
        document.getElementById("totalBudget").innerHTML = totalBudget
        document.getElementById("remainder").innerHTML = remainder 
        document.getElementById("dailyLimit").innerHTML = dailyLimit
    }
    
}


document.getElementById("firstAmount").value =""
document.getElementById("secondAmount").value =""
document.getElementById("thirdAmount").value =""
document.getElementById("lastAmount").value =""