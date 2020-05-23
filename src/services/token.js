import jwt from 'jsonwebtoken';
var secret = "<enter new secret string here>"; //- secret string here

let generate = (userInfo) => {
    return jwt.sign(
        userInfo,
        secret,
        {expiresIn: "7 days"} //- 7 days
    );
};

/**
 * Verify token
 */
let verify = (token) => {

    return jwt.verify(token, secret, function(err, decoded){
        //- if err
        if(err) {
            //- debugging
            if(err.name === 'TokenExpiredError') {
                console.log('Token had been exprired !');
            }
            if(err.name === 'JsonWebTokenError') {
                console.error(err);
            }
            return false;
        }
        //- if ok
        //- return an array
        return decoded;
    });

};

export {
    generate,
    verify,
};
