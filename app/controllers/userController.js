'use strict'
const connection = require('../db/conexion');
let validateproduct = require('../clases/validateproduct');

class userController {

    constructor() {
        this.errors, this.isValid;
    }
 prueba(req, res) {

   return res.status(200).send({
            status: "Success",
            data:'Metodo de prueba'
  });
      

}

   register(req, res) {
        const { mail, pass} = req.body;
        let query =`insert into usuario
        (mail, pass) values('${mail}','${pass}')`;
       try {
        connection.query(query, (err, result) => {
            if (err) {
                return res.status(400).send({
                    status: "Error",
                    description: 'Error al consultar los usuarios Error: ' + err.message
                });
            } else {
        return res.status(200).send({
            status: "Success",
            data: 'Usuario insertado correctamente'
             });
            }

        });
       } catch (err) {
           res.status(400).send({
               status: "Error Catch",
               description: err
           });
       }

}

    getUser(req, res) {
        const { mail,pass} = req.body;
        let validate= validateproduct.user(mail,pass);
        if (validate === 'success'){
        let query = `select id from usuario where mail='${mail}' and pass='${pass}'`;
        try {
            connection.query(query, (err, result) => {
                if (err) {
                    return res.status(400).send({
                        status: "Error",
                        description: 'Error al consultar los productos Error: ' + err.message
                    });
                } else {
                    return res.status(200).send({
                        status: "Success",
                        data: result.rows
                    });
                }

            });
        } catch (err) {
            res.status(400).send({
                status: "Error Catch",
                description: err
            });
        }
    }else{
            res.status(200).send({
                status: 'Success',
                description: validate
            });

    }

    }

    addProduct(req, res) {
        const { nombre,sku,precio,cantidad,vendedor} = req.body;
        let validate = validateproduct.product(nombre, sku, precio, cantidad);
        if (validate =='success'){
        let query = `insert into producto
        (nombre,sku,precio,cantidad,vendedor) values('${nombre}','${sku}','${precio}','${cantidad}','${vendedor}')`;


        try {
            connection.query(query, (err, result) => {
                if (err) {
                    return res.status(400).send({
                        status: "Error",
                        description: 'Error al consultar los usuarios Error: ' + err.message
                    });
                } else {
                    return res.status(200).send({
                        status: "Success",
                        data: 'producto insertado correctamente'
                    });
                }

            });
        } catch (err) {
            res.status(400).send({
                status: "Error Catch",
                description: err
            });
        }
    }else{
            res.status(400).send({
                status: 'Error',
                description: validate
            });
    }

    }

    getProductSeller(req, res) {
        const { vendedor} = req.body;
       
        let query = `select id,nombre,sku,precio,cantidad,vendedor from producto where vendedor='${vendedor}'`;
            try {
                connection.query(query, (err, result) => {
                    if (err) {
                        return res.status(400).send({
                            status: "Error",
                            description: 'Error al consultar los productos Error: ' + err.message
                        });
                    } else {
                        return res.status(200).send({
                            status: "Success",
                            data: result.rows
                        });
                    }

                });
            } catch (err) {
                res.status(400).send({
                    status: "Error Catch",
                    description: err
                });
            }
        

    }

    getProduct(req, res) {
        const { } = req.body;

        let query = `select id,nombre,sku,precio,cantidad,vendedor from producto`;
        try {
            connection.query(query, (err, result) => {
                if (err) {
                    return res.status(400).send({
                        status: "Error",
                        description: 'Error al consultar los productos Error: ' + err.message
                    });
                } else {
                    return res.status(200).send({
                        status: "Success",
                        data: result.rows
                    });
                }

            });
        } catch (err) {
            res.status(400).send({
                status: "Error Catch",
                description: err
            });
        }


    }

    findProduct(req, res) {
        const {filtro} = req.body;

        let query = `select id,nombre,sku,precio,cantidad,vendedor from producto where nombre='${filtro}' or sku='${filtro}'`;
        try {
            connection.query(query, (err, result) => {
                if (err) {
                    return res.status(400).send({
                        status: "Error",
                        description: 'Error al consultar los productos Error: ' + err.message
                    });
                } else {
                    return res.status(200).send({
                        status: "Success",
                        data: result.rows
                    });
                }

            });
        } catch (err) {
            res.status(400).send({
                status: "Error Catch",
                description: err
            });
        }


    }

    findProductRange(req, res) {
        const { filtro } = req.body;

        let query = `select id,nombre,sku,precio,cantidad,vendedor from producto where precio<${filtro}`;
        try {
            connection.query(query, (err, result) => {
                if (err) {
                    return res.status(400).send({
                        status: "Error",
                        description: 'Error al consultar los productos Error: ' + err.message
                    });
                } else {
                    return res.status(200).send({
                        status: "Success",
                        data: result.rows
                    });
                }

            });
        } catch (err) {
            res.status(400).send({
                status: "Error Catch",
                description: err
            });
        }


    }
}

let register = new userController().register;
let getuser = new userController().getUser;
let addproduct = new userController().addProduct;
let getproductseller = new userController().getProductSeller;
let getproduct = new userController().getProduct;
let findproduct = new userController().findProduct;
let findproductrange = new userController().findProductRange;

module.exports = {
    register,
    addproduct,
    getproductseller,
    getproduct,
    findproduct,
    findproductrange,
    getuser

};

