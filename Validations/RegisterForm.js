const { body} = require('express-validator');

exports.Validations=[
    body("Name").notEmpty(),
    body("Email").notEmpty().isEmail(),
    body("Password").notEmpty().isStrongPassword().withMessage("Password should be Complex"),
    body("ConfirmPassword").notEmpty().custom((value,{req})=>{
        if (value !== req.body.Password) {
            throw new Error('Password confirmation does not match password');
          }
      
          // Indicates the success of this synchronous custom validator
          return true;
    })

]
