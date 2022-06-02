import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Header = () => {
    const { user, handlesignout } = useFirebase();
    return (

        <div className='p-5 text-white text-center '>
            <h1 className='text-4xl py-2 '>Welcome to 404!</h1>
            <Link className='hover:bg-indigo-500 p-3' to="/">Home </Link>
            {user?.uid ?
                <button className='bg-indigo-500 p-3' onClick={handlesignout}>Sign Out</button> :
                <Link className='hover:bg-indigo-500 p-3' to="/login">Login </Link>}
            <Link className='hover:bg-indigo-500 p-3' to="/registration">Registration </Link>
        </div>
    );
};

export default Header;