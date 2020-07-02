import React, { useState } from 'react';
import { Button, Input, Form, InputNumber, Alert } from 'antd';
import coronavirusGraphicImg from '../../assets/images/activity-math-problem/graphicScreenshot.png';

const ActivityMathProblem = ({ handleFinish }) => {
    const [showError, setShowError] = useState(false);

    const handleFinalValidation = (responses) => {
        if (responses.simpleBeds === 20 && responses.doubleBeds === 40) handleFinish();
        else setShowError(true);
    }
    return (
        // <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex p-2" style={{ marginRight: '4rem', marginLeft: '4rem', backgroundColor: '#f3f3f3' }}>
            {/* <CoronavirusGraphic /> */}
            <div style={{ flex: 2 }}>
                <img src={coronavirusGraphicImg} className="w-100" />
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

const mathProblemText = `En aquesta gràfica podem veure l'evolució de la pandèmia a l'hospital de Mataró fins a data de 9 d'abril de 2020.\r\n
Durant aquest temps, l'hospital de Mataró va registrar 49 defuncions vinculades al coronavirus. Al mes d'abril van arribar a haver 168 ingressats, 20 dels quals a l'UCI, i s'havien aconseguit 156 altes hospitalàries. El nombre de professionals sanitaris en aïllament domiciliari, per haver donat positiu o presentar símptomes, va ser de 204.

Les dades d'aquelles quatre setmanes de pandèmia van mostrar que la corba es va estabilitzar en els darrers dies, després d'una primera fase on no va parar de créixer. Tal i com es pot veure a la infografia creada per Capgros.com a través de les dades facilitades pel Consorci Sanitari del Maresme, el nombre d'ingressos hospitalaris per covid-19 es va estabilitzar i fins i tot frenar.

Després d'un creixement molt elevat, en especial entre el 20 i el 30 de març -de 18 a 166 ingressos- l'evolució de la darrera setmana va ser molt menys pronunciada. Fins al punt que al cap de 10 dies es va registrar un descens dels pacients ingressats.

És per aquest motiu, que l'hospital de Mataró vol reorganitzar totes les habitacions i llits de tota una planta.
En total disposen de 60 habitacions i 100 llits, a repartir entre habitacions individuals o dobles, segons les necessitats específiques de cada pacient.

La pregunta amb la que s'han trobat els responsables d'aquesta reorganització és saber quantes habitacions de cada tipus poden reestablir en aquesta planta de l'hospital de Mataró.


Sereu capaços de trobar la solució vosaltres?
`;