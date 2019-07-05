import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class Main extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            secondBoxGroupClass: "content-box ishidden"
        }
    }

    DisplayBox() {
        this.setState({
            secondBoxGroupClass: "content-box"
        });
    }

    render (){
        return(
            <div className="main-content">
                <div className="wrapper">
                    <h3>Section Title</h3>
                    <div className="content-box">
                        <div>Content Box 1</div>
                        <div>Content Box 2</div>
                        <div>Content Box 3</div>
                        <div>Content Box 4</div>
                    </div>
                    <input type="button" value="Call to Action" onClick={ this.DisplayBox.bind(this) } />
                    <div className={ this.state.secondBoxGroupClass }>
                        <div>Content Box 1</div>
                        <div>Content Box 2</div>
                        <div>Content Box 3</div>
                        <div>Content Box 4</div>
                    </div>
            </div>
    </div>
        );
    }
}

export default Main;