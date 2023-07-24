'use strict'
let connection = require('../db/connection');

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
        let query =`insert into user
        (id,mail, pass) values(null,'${mail}','${pass}')`;
        connection.conn().query(query, (err, result) => {
            if (err) {
                return res.status(400).send({
                    status: "Error",
                    description: 'Error al consultar la placas. Error: ' + err.message
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

