import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoeContext } from './../../context/shoe-context';
import { fetchProductAction } from "../../reducer/actions";

function Products(){
    const {state, dispatch} = useContext(ShoeContext)
    useEffect(() => {
        async function fetchProductList() {
            let res = await fetch('https://jsonserver-vercel-api.vercel.app/products')
            let data = await res.json()
            dispatch(fetchProductAction(data))
        }
        fetchProductList()
    }, [])

    const {productList, filters: {searchText, recommended, category, color, price}} = state
    const queryProductList = () => {
        let remainProductList = [...productList]
        if(searchText) {
            remainProductList = remainProductList.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if(recommended !== 'All' ) {
            remainProductList = remainProductList.filter((item) => item.company === recommended)
        }
        if(category !== 'All') {
            remainProductList = remainProductList.filter((item) => item.category === category )
        }
        if(color !== 'All') {
            remainProductList = remainProductList.filter((item) => item.color === color )
        }
        if (price !== '0,0') {
            const [min, max] = price.split(',');
            if(min !== max) {
                remainProductList = remainProductList.filter((item) => {
                    return Number(item.newPrice) >= Number(min) && Number(item.newPrice) < Number(max);
                });
            }else {
                remainProductList = remainProductList.filter((item) => {
                    return Number(item.newPrice) >= Number(min)
                });
            }
        }
        
        return remainProductList
    }
    const remainProductList = queryProductList()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
            {
                remainProductList ?.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Products;