const registerValidation = ({password , password2}) => {
    const errors = {};
    if(password !== password2) {
        errors.text = 'Пароли не совпадают';
    }
    return errors
}

module.exports = {
    registerValidation
}