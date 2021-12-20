import React from 'react'
import { Spin } from 'antd';

export default function LoaderComp() {

    const loaderStyles = {
        container: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    return (
        <div style={loaderStyles.container}>
            <Spin size="large" />
        </div>
    )
}


