const initState = {
    searchText: '',
    category: 'All',
    recommended: 'All',
    color: 'All',
    price: '0,0'
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "filter/searchText": {
            return {
                ...state,
                searchText: action.payload
            }
        }
        case "filter/recommended": {
            return {
                ...state,
                recommended: action.payload
            }
        }
        case "filter/category": {
            return {
                ...state,
                category: action.payload
            }
        }
        case "filter/color": {
            return {
                ...state,
                color: action.payload
            }
        }
        case "filter/price": {
            return {
                ...state,
                price: action.payload
            }
        }
        

    
        default:
            return state;
    }
}
export default filterReducer