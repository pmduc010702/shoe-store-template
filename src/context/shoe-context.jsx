import { createContext, useReducer } from "react"
import reducer, { initState } from "../reducer/reducer"


export const ShoeContext = createContext()
export default function ShoeProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ShoeContext.Provider value={{state, dispatch}}>
            {children}
        </ShoeContext.Provider>
    )
}