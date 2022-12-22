<?php 
    if(!empty($_GET['cad'])){
        $cad = $_GET['cad'];
        saveProd($cad);
    }

    function saveProd($product){
        include_once('conection.php');
        $prodObj = json_decode($product);
        $name = $prodObj[0]->name;
        $price = $prodObj[0]->price;
        $unity = $prodObj[0] -> unity;
        $stock = $prodObj[0] -> stock;
        $description = $prodObj[0]->description;
        $status = $prodObj[0]->status;

        if($status == 1){
            $tatus = true;
        }else{
            $tatus = false;
        }

        $result = mysqli_query($mysqli, "INSERT INTO products (name, price, unity, stock, description, statusProd) VALUES ('$name','$price','$unity','$stock','$description','$status')");
        header('Location: ../src/index.html');
    };
   
?>