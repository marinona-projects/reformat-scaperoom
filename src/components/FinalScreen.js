import React from 'react';
import { Button, Row } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const FinalScreen = () => (
    <Row className="d-flex flex-column align-content-center">
        <h1>Felicitats!</h1>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W1Lq3rjg8R4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <div>
            <Button type="primary" icon={<DownloadOutlined />} className="mt-2">
                Descarrega diploma
            </Button>
        </div>
    </Row>
)

export default FinalScreen;