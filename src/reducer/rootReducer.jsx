// const initState = {
// 	productList: [
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
// 		// 	"title": "Nike Air Monarch IV",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "White",
// 		// 	"category": "Sneakers",
// 		// 	"id": 1
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
// 		// 	"title": "Nike Air Vapormax Plus",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "Red",
// 		// 	"category": "Sneakers",
// 		// 	"id": 2
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
// 		// 	"title": "Nike Waffle One Sneaker",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "Green",
// 		// 	"category": "Sneakers",
// 		// 	"id": 3
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
// 		// 	"title": "Nike Running Shoe",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Adidas",
// 		// 	"color": "Black",
// 		// 	"category": "Sneakers",
// 		// 	"id": 4
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
// 		// 	"title": "Flat Slip On Pumps",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Vans",
// 		// 	"color": "Green",
// 		// 	"category": "Flats",
// 		// 	"id": 5
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
// 		// 	"title": "Knit Ballet Flat",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Adidas",
// 		// 	"color": "Black",
// 		// 	"category": "Flats",
// 		// 	"id": 6
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
// 		// 	"title": "Loafer Flats",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Vans",
// 		// 	"color": "White",
// 		// 	"category": "Flats",
// 		// 	"id": 7
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
// 		// 	"title": "Nike Zoom Freak",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "Green",
// 		// 	"category": "Sneakers",
// 		// 	"id": 8
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
// 		// 	"title": "Nike Men's Sneaker",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Adidas",
// 		// 	"color": "Blue",
// 		// 	"category": "Sneakers",
// 		// 	"id": 9
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
// 		// 	"title": "PUMA BLACK-OCE",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Puma",
// 		// 	"color": "Green",
// 		// 	"category": "Sneakers",
// 		// 	"id": 10
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
// 		// 	"title": "Pacer Future Sneaker",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Puma",
// 		// 	"color": "Red",
// 		// 	"category": "Sneakers",
// 		// 	"id": 11
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
// 		// 	"title": "Unisex-Adult Super",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Puma",
// 		// 	"color": "Black",
// 		// 	"category": "Sneakers",
// 		// 	"id": 12
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
// 		// 	"title": "Roma Basic Sneaker",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Puma",
// 		// 	"color": "White",
// 		// 	"category": "Sneakers",
// 		// 	"id": 13
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
// 		// 	"title": "Pacer Future Doubleknit",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Puma",
// 		// 	"color": "Black",
// 		// 	"category": "Sneakers",
// 		// 	"id": 14
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
// 		// 	"title": "Fusion Evo Golf Shoe",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "100",
// 		// 	"company": "Puma",
// 		// 	"color": "Green",
// 		// 	"category": "Sneakers",
// 		// 	"id": 15
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
// 		// 	"title": "Rainbow Chex Skate",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "100",
// 		// 	"company": "Vans",
// 		// 	"color": "Red",
// 		// 	"category": "Flats",
// 		// 	"id": 16
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
// 		// 	"title": "Low-Top Trainers",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "100",
// 		// 	"company": "Vans",
// 		// 	"color": "White",
// 		// 	"category": "Sandals",
// 		// 	"id": 17
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
// 		// 	"title": "Vans Unisex Low-Top",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "100",
// 		// 	"company": "Vans",
// 		// 	"color": "Blue",
// 		// 	"category": "Sandals",
// 		// 	"id": 18
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
// 		// 	"title": "Classic Bandana Sneakers",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Nike",
// 		// 	"color": "Black",
// 		// 	"category": "Sandals",
// 		// 	"id": 19
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
// 		// 	"title": "Chunky High Heel",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "40",
// 		// 	"newPrice": "50",
// 		// 	"company": "Vans",
// 		// 	"color": "Black",
// 		// 	"category": "Heels",
// 		// 	"id": 20
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
// 		// 	"title": "Slip On Stiletto High Heel",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "100",
// 		// 	"company": "puma",
// 		// 	"color": "Black",
// 		// 	"category": "Heels",
// 		// 	"id": 21
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
// 		// 	"title": "DREAM PAIRS Court Shoes",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Nike",
// 		// 	"color": "Red",
// 		// 	"category": "Heels",
// 		// 	"id": 22
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
// 		// 	"title": "Nike Air Vapormax Plus",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "Red",
// 		// 	"category": "Sneakers",
// 		// 	"id": 23
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
// 		// 	"title": "Low Mid Block Heels",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "200",
// 		// 	"company": "Nike",
// 		// 	"color": "Black",
// 		// 	"category": "Heels",
// 		// 	"id": 24
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
// 		// 	"title": "Chunky High Heel",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "40",
// 		// 	"newPrice": "50",
// 		// 	"company": "Adidas",
// 		// 	"color": "Black",
// 		// 	"category": "Heels",
// 		// 	"id": 25
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
// 		// 	"title": "Amore Fashion Stilettos",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Adidas",
// 		// 	"color": "White",
// 		// 	"category": "Heels",
// 		// 	"id": 26
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
// 		// 	"title": "Bridal Sandals Glitter",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Adidas",
// 		// 	"color": "Black",
// 		// 	"category": "Heels",
// 		// 	"id": 27
// 		// },
// 		// {
// 		// 	"img": "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
// 		// 	"title": "Wedding Prom Bridal",
// 		// 	"star": 4,
// 		// 	"reviews": 123,
// 		// 	"prevPrice": "140",
// 		// 	"newPrice": "150",
// 		// 	"company": "Adidas",
// 		// 	"color": "Black",
// 		// 	"category": "Flats",
// 		// 	"id": 28
// 		// }
// 	],
// 	filters: {
// 		searchText: '',
// 		category: 'All',
// 		recommended: 'All',
// 		color: 'All',
// 		price: '0,0'
// 	}
// }

// const rootReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "filter/searchText":
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					searchText: action.payload
// 				}
// 			}
// 		case "filter/recommended":
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					recommended: action.payload
// 				}
// 			}
// 		case "filter/category":
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					category: action.payload
// 				}
// 			}
// 		case "filter/color":
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					color: action.payload
// 				}
// 			}
// 		case "filter/price":
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					price: action.payload
// 				}
// 			}


// 		default:
// 			return state
// 	}
// }
import { combineReducers } from "redux"
import productsReducer from "./products-reducer"
import filterReducer from "./filters-reducer"


const rootReducer = combineReducers({
	productList: productsReducer,
	filters: filterReducer
})

export default rootReducer