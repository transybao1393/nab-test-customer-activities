import bcrypt from 'bcryptjs';

//- encrypt password
let genPass = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
}

//- compare two password
let comparePass = (userInputPass, databasePass) => { //- return true/false
    return bcrypt.compareSync(userInputPass, databasePass); 
}

export {
    genPass,
    comparePass
}
