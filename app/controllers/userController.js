'use strict'
const connection = require('../db/conexion');


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

}
}

let register = new userController().register;


module.exports = {
    register
};

