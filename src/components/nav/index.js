import React from "react";
import { Logo, Links } from "../../assets";

export default function Nav() {
    return (
        <nav className="conf-header navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="header-link nav-link active mx-lg-1" href="https://tyche-europe.com/collections/all" target='_blank'>Sets</a>
                        </li>
                        <li className="nav-item">
                            <a className="header-link nav-link active mx-lg-1" href="https://tyche-europe.com/collections" target='_blank'>Leaves</a>
                        </li>
                        <li className="nav-item">
                            <a className="header-link nav-link active mx-lg-1" href="https://tyche-europe.com/pages/about-tyche" target='_blank'>About us</a>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                <a href="https://tyche-europe.com" target='_blank' >
                    <img alt="" src={Logo} />
                </a>
                </div>
            </div>
        </nav>
    );

}
