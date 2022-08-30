const {Categories} = require('../models');

const getCategories = async () => {
    return new Promise(async resolve => {
        const categories = await Categories.findAll();
        resolve(categories)
    })
}
module.exports = {
    getCategories
}