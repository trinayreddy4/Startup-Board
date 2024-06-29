const jwt = require('jsonwebtoken');

const generateToken =async (id,expires) => {
    return jwt.sign(
        {id},
        process.env.SECRET_TOKEN,
        {expiresIn:expires}
    );
}

module.exports = generateToken;