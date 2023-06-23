const mongoose = require('mongoose');
const configDB = async () => {
    try {
        const res = await mongoose.connect()
        console.log('connect to db');
    } catch (error) {

    }

}
module.exports = configDB