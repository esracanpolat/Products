import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFavorites } from '../Redux/actions/action';

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.products).Favorites;

    return (
        <div className='categories' >
            <div className='d-flex align-items-center'>
                <p style={{ marginLeft: 40, marginTop: 20 }}> Favorite</p>
            </div>
            <hr className='m-4' />
            <div className='container'>
                <div className='row' >
                    {favorites && favorites.map((data) => (
                        <div className='col d-flex justify-content-center' style={{ marginTop: 20 }}>
                            <div className='Card'>
                                <div>
                                    <a href={`/product/${data.id}`}><img src={`http://localhost:3000${data.productImage}`} style={{ width: 240, height: 200 }} /></a>
                                </div>
                                <div>
                                    <p>Ürün Adı: {data.name}</p>
                                    <p>Kategori Adı:</p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default FavoritesPage;
