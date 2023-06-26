module.exports = (phoneNumber) => {
    const kyivstarRegex = /^\+38(067|068|096|097|098)\d{7}$/
    const vodafoneRegex = /^\+38(050|066|095|099)\d{7}$/
    const lifecellRegex = /^\+38(063|073|093)\d{7}$/
    const utelRegex = /^\+38091\d{7}$/
    const peoplenetRegex = /^\+38092\d{7}$/
    const intertelecomRegex = /^\+38094\d{7}$/
    const beelineRegex = /^\+38068\d{7}$/
    const goldenTelecomRegex = /^\+38039\d{7}$/
    const stationaryRegex =
        /^\+38(0(3[1-9]|4[1-9]|5[1-5|6-9]|6[1-5|9]|7[1-9]|8[1-9])\d{7})$/

    if (kyivstarRegex.test(phoneNumber)) {
        return 'Kyivstar'
    } else if (vodafoneRegex.test(phoneNumber)) {
        return 'Vodafone'
    } else if (lifecellRegex.test(phoneNumber)) {
        return 'Lifecell'
    } else if (utelRegex.test(phoneNumber)) {
        return 'Utel'
    } else if (peoplenetRegex.test(phoneNumber)) {
        return 'PEOPLEnet'
    } else if (intertelecomRegex.test(phoneNumber)) {
        return 'Интертелеком'
    } else if (beelineRegex.test(phoneNumber)) {
        return 'Киевстар (Beeline)'
    } else if (goldenTelecomRegex.test(phoneNumber)) {
        return 'Киевстар (Golden Telecom)'
    } else if (stationaryRegex.test(phoneNumber)) {
        return 'Стационарный телефон'
    } else {
        return 'Неизвестный оператор'
    }
}
