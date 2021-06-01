const { body} = require('express-validator');

exports.Validations=[
  
    body("Email").notEmpty().isEmail(),
    body("Password").notEmpty()

]