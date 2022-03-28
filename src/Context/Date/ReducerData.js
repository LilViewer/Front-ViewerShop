const ReducerData = (state,action)=>{
    switch (action.type){
        case "FETCH_TOVARS":
            console.log(action)
            return {
                ...state,
                tovars: action.payload
            }
        case "FETCH_GENRE":
            console.log(action)
            return {
                ...state,
                genres: action.payload
            }
        case "FETCH_PUBLISHER":
            console.log(action)
            return {
                ...state,
                publishers: action.payload
            }
        case "FETCH_DEVELOPER":
            console.log(action)
            return {
                ...state,
                developers: action.payload
            }
        case "FETCH_GENRE_TOVARS":
            console.log(action)
            return {
                ...state,
                genre_tovars: action.payload
            }
        case "FETCH_TOVAR":
            console.log(action)
            return {
                ...state,
                tovar: action.payload
            }
        case "FETCH_REGION":
            console.log(action)
            return {
                ...state,
                region: action.payload
            }
        case "FETCH_ACTIVATION":
            console.log(action)
            return {
                ...state,
                activation: action.payload
            }
        case "FETCH_ALLTOVARINFO":
            console.log(action)
            return {
                ...state,
                allTovarsInfo: action.payload
            }
        case "FETCH_TOKEN":
            console.log(action)
            return {
                ...state,
                token: action.payload
            }
        case "FETCH_NUMBASKET":
            console.log(action)
            return {
                ...state,
                numBasket: action.payload
            }
        case "FETCH_CUPONS":
            console.log(action)
            return {
                ...state,
                cupon: action.payload
            }
        case "FETCH_USERS":
            console.log(action)
            return {
                ...state,
                users: action.payload
            }
            default:
            return state
    }
}

export default ReducerData