import request from './request'

export function getUserList(params) {
    return request.get('/admin/users', { params })
}

export function enableUser(id) {
    return request.patch(`/admin/users/${id}/enable`)
}

export function disableUser(id) {
    return request.patch(`/admin/users/${id}/disable`)
}