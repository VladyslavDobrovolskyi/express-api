module.exports = (phoneNumber) => {
    if (/^0\d{9}$/.test(phoneNumber)) {
        phoneNumber = '+38' + phoneNumber
    } else if (/^\380\d{9}$/.test(phoneNumber)) {
        phoneNumber = '+' + phoneNumber
    } else if (/^\+38\d{9}$/.test(phoneNumber)) {
        return phoneNumber
    } else return false

    return phoneNumber
}
