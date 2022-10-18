import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import { useState } from 'react'

function App() {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
        </>
    )
}

export default App;
