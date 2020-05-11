function checkLastname() {

    let name = document.getElementById("idname");
    let name_regex = /^[a-zA-Z]+$/;

    if (name_regex.test(name.value)) {
        name.style.borderColor = "#5ae6a0";
        document.getElementById('errorname').textContent = "";
    } else {
        name.style.borderColor = "red";
        document.getElementById("errorname").textContent = "champ non valide";
    }
}

function checkLastfirstname() {

    let name = document.getElementById("idfirstname");
    let name_regex = /^[a-zA-Z]+$/;

    if (name_regex.test(name.value)) {
        name.style.borderColor = "#5ae6a0";
        document.getElementById('errorfirstname').textContent = "";
    } else {
        name.style.borderColor = "red";
        document.getElementById("errorfirstname").textContent = "champ non valide";
    }
}

new Cleave ('.name', {
   
    blocks:[10],
    uppercase:true,

});

new Cleave ('.firstname', {
   
    blocks:[10],
    uppercase:true
});

new Cleave('.phone', {
    phone: true,
    phoneRegionCode: '{country}'
});



new Cleave('.date', {
    date: true,
    delimiter: '/',
    datePattern: ['d', 'm', 'Y']
});

new Cleave ('.creditcard', {
   creditCard:true,
   delimiter:'-',
   onCreditCardTypeChanged:function(type){
     
       if(type == 'visa') {
           document.querySelector('.fa-cc-visa').classList.add('active');
       }else {
        document.querySelector('.fa-cc-visa').classList.remove('active')
       }
       
        if(type == 'mastercard') {
        document.querySelector('.fa-cc-mastercard').classList.add('active');
        }else {
        document.querySelector('.fa-cc-mastercard').classList.remove('active')
        }
   }

}) ;

