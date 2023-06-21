export const initialState={
    user:null,
    error:[],
    products:[],
    cart:[],
};
export const reducer=(state,action)=>{
    switch(action.type){
        case 'setUser':
            return{
                ...state,user:action.payload,
            }
        case 'delUser':
            return{
                ...state,user:action.payload,
            }
        case 'setError':
            return{
                ...state,error:[...state.error,action.payload]
            }
        case 'setProducts':
            return{
                ...state,products:action.payload
            }
        case 'getCart':
            return{
            ...state, cart:action.payload
        }
        case 'setCart':
            return{
                ...state,cart:[...state.cart,action.payload]
            }
        case 'removeCart':
            console.log(action.payload)
            return{
                ...state,cart:action.payload
            }
        case 'delCart':{
            return{
                ...state,cart:[]
            }
        }
        case 'delProduct':{
            return{
                ...state,products:[]
            }
        }
        default:
            return state;
    }


}