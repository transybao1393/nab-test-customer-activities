import jwt from 'jsonwebtoken';

let generate = (userInfo) => {
    return jwt.sign(
        userInfo,
        secret,
        {expiresIn: "7 days"} //- 7 days
    );
};
export {
    generate,
};
