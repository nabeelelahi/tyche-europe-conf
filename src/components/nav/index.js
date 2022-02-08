import React from "react";
import { Logo, Links } from "../../assets";
import { ShoppingCartOutlined } from '@ant-design/icons';


export default function Nav({ setOverlay, braceletPrice }) {
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
                            <a className="header-link nav-link active mx-lg-1" href="https://tyche-europe.com/pages/about-tyche" target='_blank'>über uns</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="header-link nav-link active mx-lg-1"
                                onClick={() => setOverlay(true)}
                            >Größenhilfe</a>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <a href="https://tyche-europe.com" target='_blank' >
                        <img alt="" src={Logo} />
                    </a>
                    <p className="size-text header-link nav-link active mx-lg-1 d-flex align-items-center">
                        {
                            braceletPrice &&
                            <>
                                {/* <ShoppingCartOutlined style={{ color: 'white' }} /> */}
                                <span className="mx-1">€{braceletPrice}</span>
                                </>
                        }
                            </p>
                </div>
            </div>
        </nav>
    );

}
