export function setSearchTextAction(payload) {
    return {
            type: 'filters/searchText',
            payload
    }
}
export function setRecommendedAction(payload) {
    return {
        type: 'filters/recommended',
        payload
    }
}
export function setCategoryAction(payload) {
    return {
        type: 'filters/category',
        payload
    }
}
export function setColorsAction(payload) {
    return {
        type: 'filters/colors',
        payload
    }
}
export function setPriceAction(payload) {
    return {
        type: 'filters/price',
        payload
    }
}