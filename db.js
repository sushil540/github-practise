const mongoose = require('mongoose');
const configDB = async () => {
    try {
        const res = awaitmongoose.connect()
        console.log('connect to db');
    } catch (error) {

    }

}
module.exports = configDB