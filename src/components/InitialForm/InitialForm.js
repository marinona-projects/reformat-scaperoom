import React from 'react';
import { Input, Button, Form, InputNumber, List } from 'antd';
import logoImg from '../../assets/images/logos/logo.jpg';
import { CameraOutlined, CommentOutlined, ClockCircleOutlined } from '@ant-design/icons'
import './styles.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const data = [
    { title: "Prohibit fer fotos a la pantalla i compartir-les", icon: <CameraOutlined /> },
    { title: "La informació s’ha de compartir verbalment", icon: <CommentOutlined /> },
    { title: "Teniu un temps màxim de 40min", icon: <ClockCircleOutlined /> },
];

const InitialForm = ({ onSubmit }) => (
    <div className="d-flex flex-column">
        <div>
            <img src={logoImg} alt="Logo Reforma't Scaperoom" className="w-100 mt-3 mb-4" />
        </div>
        <p className="text-justify" style={{ whiteSpace: 'pre-line' }}>
            {`
                Comença l’aventura…\r\n
                Ens trobem a les portes de la seu de gestió d’informació més secreta del moment. \r
                La primera pista que coneixem és que haureu de treballar en equip per aconseguir avançar de pis en pis.\r
                La segona és que hi ha un TeacherMaster que ens farà de guia en tot moment. Bé, de guia i de policia perquè hi ha coses que no es poden fer:\r\n
            `}
        </p>
        <List
            className="text-left"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item =>
                <List.Item>
                    <List.Item.Meta
                        title={<span className="d-flex align-items-center listItem">{item.icon}{item.title}</span>}
                    />
                </List.Item>
            }
        />

        <p className="text-justify" style={{ whiteSpace: 'pre-line' }}>{`
            La resta d’informació la tindreu un cop hagueu posat el vostre nom de jugador i el número.\r\n
            Així doncs, només ens queda desitjar-vos molt bona sort equip...Endavant amb l’aventura!
        `}</p>

        <Form
            {...layout}
            name="initial"
            onFinish={onSubmit}
            className="mt-4"
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
                rules={[{ required: true, message: 'Es necessari que indiquis el teu número de jugador!' },
                () => ({
                    validator(rule, value) {
                        if (value > 0 && value <= 5) return Promise.resolve();
                        else return Promise.reject('Ha de ser un número entre 1 i 5!');
                    },
                }),
                ]}
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
    </div>
)

export default InitialForm;