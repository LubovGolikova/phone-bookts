import {Link} from "react-router-dom";
import React from "react";
import {ROUTES} from "../../constants/routes";

const RouterLink = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <Link to={ROUTES.static.main} className="nav-link">
                                Phone Book
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTES.static.add} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-nav nav-log">
                        <li className="nav-item">
                            <Link to={ROUTES.static.login} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTES.static.register} className="nav-link">
                                Registration
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default RouterLink;