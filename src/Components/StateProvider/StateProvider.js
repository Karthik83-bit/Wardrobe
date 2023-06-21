import { useContext,useReducer } from "react"
import React from "react"

export const stateContext=React.createContext();


export const StateProvider =({reducer,initialState,children})=>(
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
    
)
export const useStateValue=()=>useContext(stateContext);
