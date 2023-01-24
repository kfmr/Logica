function phoneFormatter(phone) {
    const phoneLen = phone.length
    if (phoneLen === 10) {
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

}