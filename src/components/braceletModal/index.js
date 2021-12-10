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
                <Row
                    gutter={[0, 0]}
                    className="modal-bracelet"
                >
                    {
                        bracelet &&
                        <>
                            {
                                bracelet?.map((item, index) => (
                                    <Col
                                        lg={{
                                            offset: bracelet.length === 15 && index === 0 ? 4 : bracelet.length === 17 && index === 0 ? 4 : bracelet.length === 19 && index === 0 ? 3 : bracelet.length === 21 && index === 0 ? 2 : bracelet.length === 23 && index === 0 ? 1 : 0,
                                            span: 1
                                        }}
                                        key={index}
                                    >
                                    {
                                        item ?
                                        <img className='leaf' src={item?.img} alt='' /> :
                                        <img className='leaf' src={Leaf} alt='' />
                                    }
                                    </Col>
                                ))
                            }
                        </>
                    }
                </Row>
            </div>
        </Modal>
    )
}


