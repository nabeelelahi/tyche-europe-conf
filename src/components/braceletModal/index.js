import React from "react";
import { Modal } from "antd";
import { Leaf } from "../../assets";
import { CloseOutlined } from "@ant-design/icons";

export default function BraceletModal({ bracelet, visible, setVisible }) {
  console.log(setVisible);

  function handleCancel() {
    setVisible(false);
  }

  if (visible) {
    return (
      <div className="modal-container">
        <div className="modal-cross-icon" onClick={() => setVisible(false)}>
          <CloseOutlined style={{ fontSize: "40px" }} />
        </div>
        <div className="modal-bracelet">
          {bracelet && (
            <>
              {bracelet?.map((item, index) => (
                <div className="bracelet-leaf-body">
                  {item ? (
                    <img className="leaf" src={item?.img} alt="" />
                  ) : (
                    <img
                      className="leaf"
                      src="https://cdn.shopify.com/s/files/1/0620/5358/1019/products/DSC_5293-1_9a0bc38c-836c-48f9-a6d9-c00a2211b0d9.png?v=1640993777"
                      alt=""
                    />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
