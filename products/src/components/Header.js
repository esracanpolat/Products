import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetFavorites } from '../Redux/actions/action'

export const Header = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        dispatch(GetFavorites())
    }, [])
    return (
        <div className='Header'>
            <div className='w-100 ' style={{ height: 93 }}>
                <div className='menu'>
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
                            <Link to='/favorites' onClick={() => setShowMenu(false)}>Favoriler</Link>
                        </div>

                    </div>
                </div>
                <div className='mobile-menu'>
                    <a className='menu-icon' onClick={() => setShowMenu(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>
                    <div className='logo'>
                        Katalog App
                    </div>
                    {showMenu == true &&
                        <div className='mobile-sub-menu'>
                            <button onClick={() => setShowMenu(false)} className='close-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                            <div style={{ padding: 40 }}>
                                <div className='logo'>
                                    Katalog App
                                </div>
                                <hr />
                                <div style={{ display: "block" }}>
                                    <div>
                                        <Link to='/'> Anasayfa</Link>
                                    </div>
                                    <div className='mt-4'>
                                        <Link to='/'> Ürünler</Link>
                                    </div>
                                    <div className='mt-4'>
                                        <Link to='/favorites'>Favoriler</Link>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <hr className='m-4' />
            </div>

        </div>
    )
}
