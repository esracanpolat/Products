import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddFavorites, GetFavorites, GetProductID } from '../Redux/actions/action';

const ProductDetailsPage = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.products).ProductDetail;
    const favorites = useSelector((state) => state.products).Favorites;
    const [includes, setIncludes] = useState(true);
    useEffect(() => {
        dispatch(GetProductID(Number(id)));
    }, [])
    function addFunction() {
        favorites.map((x) => (x.id != productDetail.id && setIncludes(false)));
        if (includes == false) { dispatch(AddFavorites(productDetail)); setIncludes(true); }

    }
    console.log(productDetail.id, includes, productDetail.name, "favorites", favorites, "id");
    return (
        <div className="ProductDetails">
            <div className='d-flex justify-content-center align-items-center'>
                <div className='Card row'>
                    <div className='CardLeft col-sm-12 col-md-4 col-lg-4'>
                        <img src={`http://localhost:3000/${productDetail.productImage}`} height={"80%"} width="80%" />
                    </div>
                    <div className='CardRight  col-sm-12 col-md-8 col-lg-8'>
                        <div style={{ padding: 15 }}>
                            <p>Ürün Adı: {productDetail.name}</p>
                            <p>Kategori Adı: {productDetail.productImage}</p>
                            <p>Kategori Adı: {productDetail.description}</p>
                            <p>Fiyat: {productDetail.price} tl</p>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className="favorite-button" disable={includes == false ? false : true} onClick={() => addFunction()} >Add To Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
