import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App/App";
import filteredGamesReducer from "./reducers/filteredGamesReducer";



//store
const store = createStore(filteredGamesReducer);

//kunnen we store schrijven en lezen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);