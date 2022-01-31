import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import instruction from "../../assets/images/instruction.png";
import './style.css'

export default function Overlay({ bracelet, visible, setVisible }) {
    if (visible) {
        return (
            <div className="overlay-container">
                <div className="modal-cross-icon" onClick={() => setVisible(false)}>
                    <CloseOutlined style={{ fontSize: "40px", color: 'white' }} />
                </div>
                <img src={instruction} alt="" />
            </div>
        );
    } else {
        return <></>;
    }
}
