
console.log("hello");
function generateBill() {
    let name =  document.getElementById('name').value;
    let numberOfPin = parseInt(document.getElementById('numberOfPin').value);
    let deliveryMethod = document.getElementById('homeDelivery').value;
    let location = document.getElementById('location').value;
    let tip = parseInt(document.getElementById('tip').value);

    console.log(name + numberOfPin + deliveryMethod + location + tip); 
    const priceOfPine = 125;
    let costOfPine = parseFloat(priceOfPine * numberOfPin);
    if(numberOfPin < 10) {
        costOfPine = costOfPine + parseFloat(costOfPine*0.1);
    } else if(numberOfPin < 20) {
        costOfPine = costOfPine + parseFloat(costOfPine*0.15);
    } else if(numberOfPin >= 20) {
        costOfPine = costOfPine + parseFloat(costOfPine*0.2);
    }
    
}