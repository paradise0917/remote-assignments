import React from "react";
import ReactDOM from "react-dom";

import './style.css';

import Header from "./header/index.js";
import Main from "./main/index.js";

class Root extends React.Component { 
    render(){
        return(
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);