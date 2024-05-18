

export function setSearchTextAction(payload) {
    return {
        type: 'filter/searchText',
        payload: payload
    }
}
export function setRecommendedAction(payload) {
    return {
        type: 'filter/recommended',
        payload: payload
    }
}
export function setCategoryAction(payload) {
    return {
        type: 'filter/category',
        payload: payload
    }
}
export function setColorAction(payload) {
    return {
        type: 'filter/color',
        payload: payload
    }
}
export function setPriceAction(payload) {
    return {
        type: 'filter/price',
        payload: payload
    }
}

export function fetchProductListAction(payload) {
    return {
        type: 'products/fetchProductList',
        payload: payload
    } 
}