import request from './request'

export function recommendRecipes(data) {
    return request.post('/recipes/recommend', data)
}