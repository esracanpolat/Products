import React from 'react';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.products).Favorites;
    const categoryType = useSelector((state) => state.products).CategoryType;
    return (
        <div className='favoritesPage' >
            <div className='d-flex align-items-center'>
                <p style={{ marginLeft: 40, marginTop: 20 }}> Favorite</p>
            </div>
            <hr className='m-4' />
            <div className='container'>
                <div className='row' >
                    {favorites && favorites.map((data) => (
                        <div className='col d-flex justify-content-center' style={{ marginTop: 20 }}>
                            <div className='Card '>
                                <div className='d-flex justify-content-center'>
                                    <a href={`/product/${data.id}`}><img src={`http://localhost:3000${data.productImage}`} style={{ width: 240, height: 200 }} /></a>
                                </div>
                                <div style={{ margin: 20 }}>
                                    <p>Ürün Adı: {data.name}</p>
                                    <p>Kategori Adı: {categoryType && data.category && categoryType.filter(val => val.id == data.category)[0].name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FavoritesPage;
