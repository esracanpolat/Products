import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GetCategories, GetPro } from '../Redux/actions/action';

const HomePage = () => {
    const img = useSelector((state) => state.products).Todo;

    const categoryType = useSelector((state) => state.products).CategoryType;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(GetPro());
        dispatch(GetCategories());
    }, []);

    console.log(categoryType, "categoryType");
    return (
        <div className='HomePage'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" style={{ margin: 20 }} data-ride="carousel">
                <div className="carousel-inner">
                    {img && img.map((data) =>
                    (<div key={data && data.productId} className={data.productId == 1 ? "carousel-item active" : "carousel-item"}>
                        <a href={`/product/${data && data.productId}`}><img src={`http://localhost:3000/${data.image}`} className="d-block w-100" alt="..." /></a>
                    </div>)
                    )}
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <h1>KATEGORİLER</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div>{categoryType && categoryType.map((data) => (
                    <button className='HomePage-Button' onClick={() => navigate(`/Categories/${data.id}/${data.name}`)}>{data.name}</button>
                ))}
                </div>

            </div>

        </div>
    );
}

export default HomePage;
