import React from "react";

function Header(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-warning py-3">
            <a className="navbar-brand" href="/">
                <h1>Clicky Game</h1>
            </a>
            <span className="navbar-text text-dark">
                <h3 className="align-baseline">
                    Score <span className="badge badge-primary mx-1 align-top">{props.score}</span>  |  Top Score <span className="badge badge-primary mx-1 align-top">{props.topScore}</span>
                </h3>
            </span>
        </nav>
    );
}

export default Header