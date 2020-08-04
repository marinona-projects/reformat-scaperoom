import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Form, InputNumber, Alert } from 'antd';
import coronavirusGraphicImg from '../../../assets/images/activity-math-problem/graphicScreenshot.png';
import { mathProblemText, solutions } from './data';
import './styles.scss';

const ActivityMathProblem = ({ handleFinish }) => {
    const [showError, setShowError] = useState(false);

    const handleFinalValidation = (responses) => {
        if (_.isEqual(responses, solutions)) handleFinish();
        else setShowError(true);
    }
    return (
        <div className="d-flex p-2 activityContainer">
            {/* <CoronavirusGraphic /> */}
            <div style={{ flex: 2 }}>
                <img src={coronavirusGraphicImg} alt="gràfica coronavirus" className="w-100" />
                <small>
                    {`Font de la gràfica i part del text: `}
                    <a href="https://www.capgros.com/mataro/salut/evolucio-coronavirus-hospital-mataro-600-casos-mes_723648_102.html" target="_blank">
                        Capgròs
                    </a>
                </small>
            </div>
            <div className="ml-2 d-flex flex-column" style={{ flex: 4 }}>
                <p className="text-justify" style={{ whiteSpace: 'pre-line' }}>{mathProblemText}</p>
                {showError &&
                    <Alert
                        className="mx-4 mt-3"
                        type={'error'}
                        showIcon
                        message="Resposta incorrecta!"
                        closable
                    />
                }

                <div className='d-flex'>
                    <Form
                        name="mathProblemActivity"
                        layout="inline"
                        style={{ display: 'flex', alignItems: 'baseline' }}
                        onFinish={handleFinalValidation}
                    >
                        <Form.Item
                            name="doubleBeds"
                            label="Habitacions dobles"
                            rules={[{ required: true, message: 'Introdueix la teva resposta!' }]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item
                            name="simpleBeds"
                            label="Habitacions simples"
                            rules={[{ required: true, message: 'Introdueix la teva resposta!' }]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Button className="mt-2 ml-3" htmlType="submit">RESOLDRE PROVA</Button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default ActivityMathProblem;


const CoronavirusGraphic = () => {
    return (
        <div>
            <iframe
                src="https://e.infogram.com/b2de28fd-e011-408b-ab4c-1022bc920cd0?src=embed"
                title="Coronavirus Mataro"
                width="742"
                height="688"
                scrolling="no"
                frameborder="0"
                style={{ border: 'none' }}
                allowfullscreen="allowfullscreen"
            >
            </iframe>
            <div style={{ padding: '8px 0', fontFamily: 'Arial!important', fontSize: '13px!important', lineHeight: '15px!important', textAlign: 'center', borderTop: '1px solid #dadada', margin: '0 30px', width: '682px' }}>
                <a href="https://infogram.com/b2de28fd-e011-408b-ab4c-1022bc920cd0" style={{ color: '#989898!important', textDecoration: 'none!important' }} target="_blank">
                    Coronavirus Mataro
                </a>
                <br />
                <a href="https://infogram.com" style={{ color: '#989898!important', textDecoration: 'none!important' }} target="_blank" rel="nofollow">
                    Infogram
                    </a>
            </div>
        </div>
    )
}

