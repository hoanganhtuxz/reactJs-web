
// import Header from './components/header';
// import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import Routes from './Routes';

function App() {
    const [token, setToken] = useState([])
    const onHandleSignIn = (data) => {
        setToken(data)
    }

    return (
        <>
            <Routes sigIn={onHandleSignIn} token={token}></Routes>
        </>


    );
}

export default App;