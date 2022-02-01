import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function BraceletModal({ bracelet, visible, setVisible }) {

  if (visible) {
    return (
      <div className="modal-container">
        <div className="modal-cross-icon" onClick={() => setVisible(false)}>
          <CloseOutlined style={{ fontSize: "40px" }} />
        </div>
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <div>
              {bracelet && (
                <TransformComponent contentClass="modal-bracelet">
                  {/* <div className="modal-bracelet"> */}
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
                  {/* </div> */}
                </TransformComponent>
              )}
            </div>
          )}
        </TransformWrapper>
      </div>
    );
  } else {
    return <></>;
  }
}
