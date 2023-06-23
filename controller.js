const User = require("./User")

const userController = {}

userController.get = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.json(error)
    }   
}
module.exports = userController