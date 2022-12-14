import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';

import CreatePin from '../componants/CreatePin';
import PinDetails from '../componants/PinDetails';
import Feed from '../componants/Feed';
import Navbar from '../componants/Navbar';
import Search from '../componants/Search';

const Pins = ({user}) => {

    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='px-2 md:px-5'>
            <div className='bg-gray-50'>
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} />
            </div>
            <div className='h-full'>
                <Routes>
                    <Route path='/' element={<Feed />} />
                    <Route path='/category/:categoryId' element={<Feed />} />
                    <Route path='/pin-details/:pinId' element={<PinDetails user={user} />} />
                    <Route path='/create-pin' element={<CreatePin user={user} />} />
                    <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Pins;
