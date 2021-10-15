import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Footer } from "../Footer/Footer";
import { FormBuyer } from "../FormBuyer/FormBuyer";

import ItemPresentation from "../ItemDetail/ItemDetail";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { NavBar } from "../NavBar/NavBar";
import { Buzos } from "../Views/Buzos";
import { Remeras } from "../Views/Remeras";
import { Zapatillas } from "../Views/Zapatillas";

import ScrollToTop from "./ScrollToTop";

const AppLayout = ({ children }) => (
  <ScrollToTop>
    <NavBar />
    {children}
    <Footer />
  </ScrollToTop>
)

const withLayout = (Layout, View) => <Layout><View /></Layout>;
const withDefaultLayout = (View) => () => withLayout(AppLayout, View);

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={withDefaultLayout(ItemListContainer)} />
        <Route exact path="/Buzos" render={withDefaultLayout(Buzos)} />
        <Route exact path="/Remeras" render={withDefaultLayout(Remeras)} />
        <Route exact path="/Zapatillas" render={withDefaultLayout(Zapatillas)} />
        <Route path="/ItemDetail/:id" render={withDefaultLayout(ItemPresentation)} />
        <Route exact path="/Cart" render={withDefaultLayout(Cart)} />
        <Route exact path="/Formulario" render={withDefaultLayout(FormBuyer)} />
      </Switch>
    </Router>
  )
}
