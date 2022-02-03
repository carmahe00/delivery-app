import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import ProtectedRouter from './ProtectedRouter';
import PublicRoute from './PublicRoute';
import Home from '../pages/Home';
import { ROLES } from '../utils/roles.type';

const AppRouter = () => {
    const { userInfo } = useSelector(state => state.userLogin)
    return (
        <Routes>
            <Route element={<PublicRoute  user={userInfo} />} >
                <Route path="/" index element={<LoginPage />} />
            </Route>
            <Route path="admin" element={<ProtectedRouter isAuthenticated={!!userInfo} roles={[ROLES.admin]} />}  >
                <Route path="home" index element={<Home />} />
                <Route path="ciudades" element={<><h1>Ciudades</h1></>} />
                <Route path="usuarios" element={<><h1>Usuarios</h1></>} />

            </Route>

            <Route path="user" element={<ProtectedRouter isAuthenticated={!!userInfo} roles={[ROLES.admin]} />}  >
                <Route path="home" index element={<Home />} />

                <Route path="usuarios" element={<><h1>usuarios</h1></>} />
                <Route path="usuarios/proveedores" element={<><h1>Proveedores</h1></>} />
                <Route path="usuarios/domiciliarios" element={<><h1>Domiciliarios</h1></>} />
                
                <Route path="recargas" element={<><h1>recargas</h1></>} />
                <Route path="recargas/proveedores" element={<><h1>proveedores recargas</h1></>} />
                <Route path="recargas/domiciliarios" element={<><h1>domiciliarios recargas</h1></>} />
            </Route>
        </Routes>
    )
}

export default AppRouter