import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetFavorites } from '../Redux/actions/action'

export const Header = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(GetFavorites())
    }, [])
    return (
        <div className='Header'>
            <div className='w-100 ' style={{ height: 93 }}>
                <div className='m-2 d-flex justify-content-between align-items-center' style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40 }}>
                    <div className='d-inline-flex'>
                        <div>
                            Katalog App
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                            <Link to='/'> Anasayfa</Link>
                            <Link style={{ marginLeft: 40 }} to='/'> Ürünler</Link>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <Link to='/favorites'>Favoriler</Link>
                    </div>

                </div>
                <hr className='m-4' />
            </div>

        </div>
    )
}
