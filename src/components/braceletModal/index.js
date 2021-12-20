import React from 'react'
import {
    Modal,
    Row,
    Col
} from 'antd';
import { Leaf } from '../../assets'
import './braceletModal.css'

export default function BraceletModal({ bracelet, visible, setVisible }) {

    console.log(setVisible);

    function handleCancel() {
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            title="Your Customized Bracelet"
            onCancel={handleCancel}
            footer={[]}
            style={{ height: '100vh', width: '100vw' }}
        >
            <div className="modal-container">
                <div className="modal-bracelet">
                    {
                        bracelet &&
                        <>
                            {
                                bracelet?.map((item, index) => (
                                    <div className='bracelet-leaf-body'>
                                                {
                                                    item ?
                                                        <img className='leaf' src={item?.img} alt='' /> :
                                                        <img className='leaf' src={Leaf} alt='' />
                                                }
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
        </Modal>
    )
}


