import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColorAction } from "../../reducer/actions";
import { filterSelector } from "../../redux/selector";

const colors = [
    "All", "Black", "Blue", "Red", "Green", 'White'
]
function Colors() {
    const {color: currentColor} = useSelector(filterSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Colors</h5>
            <div className="form-group">
                {
                    colors.map((color,index) => (
                        <div key={color} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="color"
                                id={`color_${index}`}
                                value={color}
                                defaultChecked={color === 'All'}
                                style={color === 'All' ? { backgroundImage: 'linear-gradient(to right, red, green)' } : color !== 'White' ? { backgroundColor: color } : {}}
                                onChange={() => dispatch(setColorAction(color))}
                            />
                            <label 
                                role="button"
                                htmlFor={`color_${index}`}
                                className={`form-check-label ${color === currentColor ? 'text-decoration-underline fw-bolder' : ''}`}
                            >
                                {color}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colors;