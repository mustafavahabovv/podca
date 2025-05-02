import {createRoot} from 'react-dom/client'
import Router from "./router/Router.jsx";
import {StrictMode} from "react";
import "./styles/custom.css"
import "./styles/custom.js"
import store from './store/store.js';
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </StrictMode>
);
