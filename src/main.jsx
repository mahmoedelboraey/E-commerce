import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite/dist/flowbite.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// lazem context يتقراء
import CounContextProvider from "./context/countContext.jsx";
// import { store } from "./store/store.js";
import TokenContextProvider from "./context/tokenContext.jsx";
import CartContextProvider from "./context/cartContext.jsx";
import WilshlistContextProveder from "./context/wishlist.jsx";

import OrderContextProvider from "./context/orderContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TokenContextProvider>
        <CartContextProvider>
          <WilshlistContextProveder>
            <OrderContextProvider>
              <CounContextProvider>
                <App />
              </CounContextProvider>
            </OrderContextProvider>
          </WilshlistContextProveder>
        </CartContextProvider>
      </TokenContextProvider>
    </Provider>
  </StrictMode>
  // <Provider store={store}>
  //    </Provider>
);
