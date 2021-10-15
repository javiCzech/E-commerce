
import React from "react";
import "bootswatch/dist/minty/bootstrap.min.css";
import { AppRouter } from "./components/Routers/AppRouter";
import { CartProvider } from "./components/CardContext/CardContext";


function App() {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  );
}

export default App;
