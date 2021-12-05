import React from 'react'
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes'
function Admin() {
    console.log(routes);
    return (
        <div className="wrapper" style={{display:"flex"}}>
            <Sidebar/>
            <div className="main-panel" style={{flex: 1}}>
                <Switch>
                    {routes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.layout + prop.path}
                                component={prop.component}
                                key={key}
                            />
                        );
                    })}
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
            </div>
        </div>
    )
}

export default Admin
