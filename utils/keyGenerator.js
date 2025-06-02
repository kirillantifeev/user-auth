const keyGenerator = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const length = 32;
    let res = '';

    for (i=0; i<length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return res;
}

module.exports = keyGenerator;