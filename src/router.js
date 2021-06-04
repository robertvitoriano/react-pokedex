import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'

import Header from './components/Header'
import Footer from "./components/Footer";
import { userRoutes } from './routes'


export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>{
        userRoutes.map((route) =>
          <Route path="/" exact={route.path === '/' || false}
            component={route.component}
          />)
      }
      </Switch>
      <Footer />

    </BrowserRouter>
  );

}