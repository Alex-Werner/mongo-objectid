const validate = require('./ops/validate');
module.exports = function isValid(){
    let isValid = false;
    try {
        return validate(this.toHex())
    } catch (e) {
        console.error(e);
        return isValid;
    }
}
