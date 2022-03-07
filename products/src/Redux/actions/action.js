import axios from "axios";

const { LOCALHOST_API } = process.env;

export const AddFavorites = (data) => {
    return {
        type: "ADD_FAVORITES",
        payload: data,
    }
}

export const GetPro = () => {
    return async (dispatch, getState) => {
        try {
            let result = await fetch('http://localhost:3000/sliders').then(response => response.json());
            dispatch({
                type: "GET_SLIDER",
                payload: result
            });
        } catch (err) {
            console.log(err);
        }
    }
}
export const GetCategories = () => {
    return async (dispatch, getState) => {
        let result = await axios.get(`http://localhost:3000/categories`).then((result) =>
        (dispatch({
            type: "GET_CATEGORIES",
            payload: result.data
        }))
        );
    }
}
export const GetCategoryType = (id) => {
    return async (dispatch, getState) => {
        let result = await axios.get(`http://localhost:3000/categories/${id}`).then((result) =>
        (dispatch({
            type: "CategoryTypeDetail",
            payload: result.data
        }))
        );
    }
}
export const GetCategoriesID = (id) => {
    return async (dispatch, getState) => {
        let result = await axios.get(`http://localhost:3000/categories/${id}/products`).then((result) => {
            console.log(result, "result detail");
            dispatch({
                type: "GET_CATEGORIES_DETAIL",
                payload: result.data
            })
        }

        );
    }
}
export const GetProductID = (id) => {
    return async (dispatch, getState) => {
        let result = await axios.get(`http://localhost:3000/products/${id}`).then((result) => (
            dispatch({
                type: "GET_PRODUCT_DETAIL",
                payload: result.data
            })
        ));
    }
}

export const GetFavorites = () => {
    return async (dispatch, getState) => {
        let result = await axios.get(`http://localhost:3000/favorites`).then((result) => (
            dispatch({
                type: "GET_FAVORITES",
                payload: result.data
            })
        ));
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id,
    }
}



