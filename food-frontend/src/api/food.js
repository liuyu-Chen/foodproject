import request from './request'

export function getFoodList(params) {
    return request.get('/foods', { params })
}

export function addFood(data) {
    return request.post('/foods', data)
}

export function updateFood(id, data) {
    return request.put(`/foods/${id}`, data)
}

export function deleteFood(id) {
    return request.delete(`/foods/${id}`)
}

export function getFoodStatistics() {
    return request.get('/foods/statistics')
}