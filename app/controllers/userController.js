'use strict'

class userController {

    constructor() {
        this.errors, this.isValid;
    }
 login(req, res) {

   return res.status(200).send({
            status: "Success",
            data:'Metodo de prueba'
  });
      

}

}

let login = new userController().login;


module.exports = {
    login
};

