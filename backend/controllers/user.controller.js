const {User} = require('../models');
const getUserById = id => new Promise(async resolve => {
    const user = await User.findOne({
        where: {
            id
        }
    })
    resolve(user)
})
module.exports = {
    getUserById
}