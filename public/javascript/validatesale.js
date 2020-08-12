validate = () => {
    var firstname = document.salesentry.firstname;
    var secondname = document.salesentry.secondname;
    var othername = document.salesentry.othername;
    var nationalid = document.salesentry.nationalid;
    var address = document.salesentry.address;
    var telephone = document.salesentry.telephone;
    var itemdescription = document.salesentry.itemdescription;
    var count = document.salesentry.count;
    var email =document.salesentry.email;
    var initialpay = document.salesentry.initialpay;
    

    //Validating the first name
    if(firstname.value.length <= 2){
        firstname.style.border = '1px solid red'
        alert("First name must be more than two characters")
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!firstname.value.match(letters)){
        firstname.style.border = '1px solid red'
        alert("Please enter valid first name")
        return false;
    }

    //Validating the second name
    if(secondname.value.length <= 2){
        secondname.style.border = '1px solid red'
        alert("Second name must be more than two characters")
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!secondname.value.match(letters)){
        secondname.style.border = '1px solid red'
        alert("Please enter valid second name")
        return false;
    }

    //Validating the other name
    // if(othername.value.length <= 2){
    //     othername.style.border = '1px solid red'
    //     alert("other name must be more than two characters")
    //     return false;
    // }
    // var letters = /^[A-Za-z]+$/;
    // if(!othername.value.match(letters)){
    //     othername.style.border = '1px solid red'
    //     alert("Please enter valid name")
    //     return false;
    // }

    //Validating national ID
    if(nationalid.value.length < 12){
        nationalid.style.border = '1px solid red'
        alert("Please enter valid national ID number")
        return false;
    }
    var letters = /^[0-9]+$/;
    if(nationalid.value.match(letters)){
        nationalid.style.border = '1px solid red'
        alert("Please enter valid national ID number!")
        return false;
    }

    //Validating address
    if(address.value.length <= 3){
        address.style.border = '1px solid red'
        alert("Address must be more than three characters")
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!address.value.match(letters)){
        address.style.border = '1px solid red'
        alert("Please enter valid address")
        return false;
    }

    //Validating telephone
    if(telephone.value.length < 12){
        telephone.style.border = '1px solid red'
        alert("Telephone number should be 12 digits!")
        return false;
    }
    var letters = /^[0-9]+$/;
    if(!telephone.value.match(letters)){
        telephone.style.border = '1px solid red'
        alert("Telephone number should contain only numbers!")
        return false;
    }

    //Validating item description
    if(itemdescription.value.length < 20){
        itemdescription.style.border = '1px solid red'
        alert("Please enter proper item description")
        return false;
    }
    var letters = /^[0-9]+$/;
    if(itemdescription.value.match(letters)){
        itemdescription.style.border = '1px solid red'
        alert("Please enter valid item description!")
        return false;
    }

    //Validating count
    if(count.value.length ==""){
        count.style.border = '1px solid red'
        alert("Please include count")
        return false;
    }

    //Validating email
    if(email.value.length ==""){
        email.style.border = '1px solid red'
        alert("Please include email")
        return false;
    }


    //Validating initial payment 
    var letters = /^[0-9]+$/;
    if(!initialpay.value.match(letters)){
        initialpay.style.border = '1px solid red'
        alert("Please enter valid initial pay!")
        return false;
    }
    if(initialpay.value.length ==""){
        initialpay.style.border = '1px solid red'
        alert("Please include initial pay")
        return false;
    }


}