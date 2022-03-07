import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetCategoriesID, GetCategoryType } from '../Redux/actions/action';

const CategoryPage = (props) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products).Categories;
    const categoryTypeDetail = useSelector((state) => state.products).CategoryTypeDetail;

    console.log(categoryTypeDetail, categories, "categories");

    useEffect(() => {
        dispatch(GetCategoriesID(id));
        dispatch(GetCategoryType(id));

    }, []);
    return (
        <div className='Categories' >
            <div className='d-flex align-items-center'>
                <p style={{ marginLeft: 40, marginTop: 20 }}>{categoryTypeDetail.name}</p>
            </div>
            <hr className='m-4' />
            <div className='container'>
                <div className='row'>
                    {categories && categories.map((data) => (
                        <div className='col d-flex justify-content-center' style={{ marginTop: 20 }} >
                            <div className='Card'>
                                <div >
                                    <a href={`/product/${data.id}`}><img src={`http://localhost:3000${data.productImage}`} style={{ width: 240, height: 200 }} /></a>
                                </div>
                                <div style={{ padding: 10 }}>
                                    <p>Ürün Adı: {data.name}</p>
                                    <p>Kategori Adı: {categoryTypeDetail.name}</p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
