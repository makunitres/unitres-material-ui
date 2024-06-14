import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import ScrollToTop from '../components/ScrollToTop.jsx'

export const AllRoutes = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
            </Routes>
        </ScrollToTop>
    )
}
