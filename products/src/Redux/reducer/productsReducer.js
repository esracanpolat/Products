
const initialState = {
    Todo: [],
    CategoryType: [],
    Categories: [],
    Favorites: [],
    ProductDetail: [],
    CategoryTypeDetail: {}
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITES":
            return {
                ...state,
                Favorites: [action.payload, ...state.Favorites]
            }
        case "GET_SLIDER":
            return {
                ...state,
                Todo: action.payload
            }
        case "GET_CATEGORIES":
            return {
                ...state,
                CategoryType: action.payload
            }
        case "CategoryTypeDetail":
            return {
                ...state,
                CategoryTypeDetail: action.payload
            }
        case "GET_CATEGORIES_ID":
            return {
                ...state,
                CategoryTypeID: action.payload
            }
        case "GET_CATEGORIES_DETAIL":
            return {
                ...state,
                Categories: action.payload
            }
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                ProductDetail: action.payload
            }
        case "GET_FAVORITES":
            return {
                ...state,
                Favorites: action.payload
            }
        default:
            return state;
    }
};
