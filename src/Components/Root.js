import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from './Nav';

export const QuizContext = createContext([])

const Root = () => {

    const quiztopic = useLoaderData();
    console.log(quiztopic)
    return (
       <QuizContext.Provider value={quiztopic}>
       
            <Nav></Nav>
            <Outlet></Outlet>
        
       </QuizContext.Provider>
    );
};

export default Root;