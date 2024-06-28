const LenValidation = (value, min, max) => {
    if (value.length < min || value.length > max) {
        return false;
    }
    return true;
}

module.exports = LenValidation;