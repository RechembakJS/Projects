var btSave = document.querySelector('#save');
var nameProd = document.getElementById('name');
var priceProd = document.getElementById('price');
var descriProd = document.getElementById('description');
var statusProd = document.getElementById('status');

btSave.addEventListener("click", function(){
    verify();
});

function verify(){
    if(nameProd.value == ""){
        alert("Please, type the name!")
        nameProd.style.borderColor = "#FF0000";
        document.getElementsByName('name')[0].placeholder='Please, type your name!';
    }else{
        if(priceProd.value == ""){
            alert("Please, type the price!")
                nameProd.style.borderColor = "#FF0000";
        }else{
            if(descriProd.value == ""){
                alert("Please, type the Description!")
                nameProd.style.borderColor = "#FF0000";
            }else{
                var product = [];
                product.push({name:nameProd.value,price:priceProd.value,description:descriProd.value,status:statusProd.value});
                console.log(statusProd.value);
                saveProduct(product)
            }
        }

        
    }
}

function saveProduct(product){
    const cadJson = JSON.stringify(product)
    console.log(cadJson);
    window.location.href = ('../php/saveProduct.php?cad='+ cadJson);
}