import request from './request'

export function getShoppingList() {
    return request.get('/shopping-items')
}

export function addShoppingItem(data) {
    return request.post('/shopping-items', data)
}

export function updateShoppingItem(id, data) {
    return request.put(`/shopping-items/${id}`, data)
}

export function deleteShoppingItem(id) {
    return request.delete(`/shopping-items/${id}`)
}