class validateproduct {

    product(nombre, sku, precio, cantidad) {
        if (nombre == "" || nombre == undefined) {
            return 'error: falta nombre de producto';
        } 
        if (sku == "" || sku == undefined) {
            return 'error: falta sku de producto';
        }
        if (precio == "" || precio == undefined) {
            return 'error: falta precio de producto';
        }
        if (cantidad == "" || cantidad == undefined) {
            return 'error: falta sku de producto';
        }
       

        return 'success'
            
        
    }

    user(mail,pass){
        if (mail == "" || mail == undefined || pass == "" || pass == undefined) {
            return 'error: usuario o contrasena no encontrado';
        }

        
        return 'success'
    }

  

}

let vproduct = new validateproduct();

module.exports = vproduct;