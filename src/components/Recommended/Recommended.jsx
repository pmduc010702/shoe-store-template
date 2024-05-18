import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecommendedAction } from "../../reducer/actions";

const recommended = [
    {
        value: 'All',
        name: 'All Products'
    },
    {
        value: 'Nike',
        name: 'Nike'
    },
    {
        value: 'Adidas',
        name: 'Adidas'
    },
    {
        value: 'Puma',
        name: 'Puma'
    },
    {
        value: 'Vans',
        name: 'Vans'
    }
]
function Recommended() {
    const currentRecommended = useSelector((state) => state.filters.recommended)
    const dispatch = useDispatch()

    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommended.map(recmd => (
                        <button key={recmd.value}
                            className={
                                `btn btn-sm btn-outline-secondary me-1
                                    ${recmd.value === currentRecommended ? 'active' : ''}
                                `
                            }
                            type="button"
                            onClick={() => dispatch(setRecommendedAction(recmd.value))}
                        >
                            {recmd.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Recommended;