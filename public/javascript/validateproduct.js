validate  = () =>{
    var productname = document.products.productname;
    var serialnumber = document.products.serialnumber;
    var price = document.products.price;
    var additionaldetails = document.products.additionaldetails;
    var category = document.products.category;
    var image = document.products.image;

    //validating the product name.
    if(productname.value.length == ""){
        productname.style.border = '1px solid red'
        alert("Product name must be filled")
    }
    if(productname.value.length <= 5){
        productname.style.border = '1px solid red'
        alert("Product name should be greater than 5 characters")
    }
    var letters = /^[A-Za-z]+$/;
        
    if(!productname.value.match(letters)){
        productname.style.border = '1px solid red'
        alert("Please enter a valid product name")
    }

    //Validating serial number
    if(serialnumber.value.length == ""){
        serialnumber.style.border = '1px solid red'
        alert("Serial number must be filled")
    }
    var letters = /^[0-9]+$/;

    if(serialnumber.value.match(letters)){
        serialnumber.style.border = '1px solid red'
        alert("Enter valid serial number !")
    }
    if(serialnumber.value.length < 10){
        serialnumber.style.border = '1px solid red'
        alert("Serial number characters should be more than 10!")
    }

    //Validating price
   if(price.value.length < 5){
        price.style.border = '1px solid red'
        alert("Price cannot be less the 6 characters")
    }

    var letters = /^[0-9]+$/;

    if(!price.value.match(letters)){
        price.style.border = '1px solid red'
        alert("Enter valid amount!")
    }

    //Validating Addiional details
    if(additionaldetails.value.length < 20){
        additionaldetails.style.border = '1px solid red'
        alert("Please provide more details on the product")
    }
}