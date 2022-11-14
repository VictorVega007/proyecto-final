const getStorage = require('../db/daos')
const mongoose = require('mongoose')

const { carts: storage } = getStorage()
const { users } = getStorage()

const getItemByUserId = async (userId) => {
    return await storage.getCartByUserId(userId)
}

const getItemByUserIdAndStatus = async (userId, status) => {
    return await storage.getCartByUserIdAndStatus(userId, status)
}

const addItem = async(newItem) => {
    newItem.timestamp = Date.now()
    return await storage.save(newItem)
}

const deleteItem = async (generalItemId, itemId) => {
    return await storage.deleteById(generalItemId, itemId)
}

const getAllItems = async() => {
    return await storage.getAll(null)
}

const editItem = async(itemId, newItem) => {
    return await storage.modifyById(itemId, newItem)
}

const getItemById = async(itemId) => {
    const cart = await storage.getById(itemId)

    // MODIFICAR CARRITO UNA VEZ REALIZADA LA COMPRA (STATUS CARRITO OPEN, DELETED, BOUGHT). ARMAR NUEVA FUNCION EN DAO CARRITO QUE MODIFIQUE EL STATUS.
    let cartProducts = ''
    cart.productos.forEach(element => {
        cartProducts = cartProducts + (`<li>Producto: ${element.nombre}, a un precio de $${element.precio}.</li>`)
    })

    const cartUser = await users.getById(mongoose.Types.ObjectId(cart.user))
    return { cartProducts, cartUser }
}

module.exports = { 
    getItemByUserId, 
    addItem, 
    deleteItem, 
    getAllItems, 
    editItem, 
    getItemById, 
    getItemByUserIdAndStatus 
}