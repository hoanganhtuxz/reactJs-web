import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

const LayOutWebsite = (props) => {
    return (
        <>
            <Header {...props} />

            {props.children}


            <Footer />
        </>
    )
}

export default LayOutWebsite
