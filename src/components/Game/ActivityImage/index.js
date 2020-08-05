import React, { useState } from 'react';
import { Button, Input, Alert, Form } from 'antd';
import { solutions, images } from './data';
import './styles.scss'

const ActivityImage = ({ handleFinish, userNumber }) => {
    const [showError, setShowError] = useState(false);

    const handleFinalValidation = (responses) => {
        const resp = responses.response.toLowerCase().trim();

        if (solutions.includes(resp)) handleFinish();
        else setShowError(true);
    }
    return (
        <div className="d-flex flex-column align-items-center imageActivityContainer py-3">
            <div className="d-flex align-items-center justify-content-center flex-column" style={{ width: '70%' }}>
                <div style={{ flex: 1 }}>
                    <img src={images[userNumber - 1]} alt="graella amb paraules" className="mb-2 w-100" />
                </div>
                <div>
                    <div style={{ flex: 1 }} className="ml-2">
                        <Form
                            name="mathProblemActivity"
                            layout="inline"
                            style={{ display: 'flex', alignItems: 'baseline' }}
                            onFinish={handleFinalValidation}
                        >
                            <Form.Item
                                name="response"
                                label="Resposta"
                                rules={[{ required: true, message: 'Introdueix la teva resposta!' }]}
                                validateStatus={showError ? 'error' : 'success'}
                            >
                                <Input />
                            </Form.Item>
                            <Button className="mt-2 ml-3" htmlType="submit">RESOLDRE PROVA</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActivityImage;