
class Header extends React.Component {

    state = {
        title: "Welcome Message",
        menuClass: "nav-menu",
        closeBtnClass: "nav-close-img ishidden"
    }

    changeHeaderText = () => {
        this.setState({
            title: "Have a Good Time!"
        })
    }

    OpenMenu = () => {
        this.setState({
            menuClass: "nav-menu isInitial",
            closeBtnClass: "nav-close-img isInitial"
        });
    }

    CloseMenu = () => {
        this.setState({
            menuClass: "nav-menu",
            closeBtnClass: "nav-close-img"
        });
    }


    render(){

        return(
            <header>
                <nav className="nav-style">
                    <div className="nav-title">
                        <span>Website Title / Logo</span>
                    </div>
                <div className="nav-img" onClick={ this.OpenMenu }>
                    <svg viewBox="0 0 20 20">
                        <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </div>
                <div id="collapse_clos_icon" className={ this.state.closeBtnClass } onClick={ this.CloseMenu }>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
                <div id="nav_menu" className={ this.state.menuClass }>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
            </nav>
            <div className="header-msg">
                <span onClick={ this.changeHeaderText }>{ this.state.title }</span>
            </div>
          </header>
        );
    }
}


class Main extends React.Component {

    state = {
        secondBoxGroupClass: "content-box ishidden"
    }

    DisplayBox = () => {
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
                    <input type="button" value="Call to Action" onClick={ this.DisplayBox } />
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

class App extends React.Component { 
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
    <App />,
    document.getElementById('root')
);
