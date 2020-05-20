import React from 'react';
import { Input, Button, Form, Layout, InputNumber } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const InitialForm = ({ onSubmit }) => (
    <>
        <h1 className="my-4">Scape room Coronavirus</h1>

        <Form
            {...layout}
            name="initial"
            onFinish={onSubmit}
        >
            <Form.Item
                label="Nom complet"
                name="name"
                rules={[{ required: true, message: 'Introdueix el teu nom!' }]}
            // initialValue='Marina'
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Número de jugador"
                name="player"
                rules={[{ required: true, message: 'Es necessari que indiquis el teu número de jugador!' }]}
            // initialValue={2}
            >
                <InputNumber min={1} max={5} />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Juga!
                    </Button>
            </Form.Item>
        </Form>
    </>
)

export default InitialForm;