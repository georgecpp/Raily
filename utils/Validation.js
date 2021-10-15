const Joi = require('react-native-joi');
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    });

    return schema.validate(data);
};
const registerValidation=(data)=>{
    const schema=Joi.object({
        email: Joi.string().required().email(), 
        password:Joi.string().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
        confirmPassword:Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
    });
    return schema.validate(data);
}
module.exports.loginValidation = loginValidation;
module.exports.registerValidation=registerValidation;