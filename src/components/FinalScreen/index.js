import React from 'react';
import { Row } from 'antd';
import { PDFDownloadLink } from '@react-pdf/renderer'
import DiplomaDocument from './DiplomaDocument';
import imgFinal from '../../assets/images/diploma/missionCompleted.png';

const FinalScreen = ({ userName }) => (
    <Row className="d-flex flex-column align-content-center">
        <h1>Missió completada!</h1>
        <div style={{ height: 180 }}>
            <img src={imgFinal} className="h-100" />
        </div>
        <p className="w-50 text-justify mt-3" style={{ whiteSpace: 'pre-line' }}>
            {`Felicitats equip, aquesta expedició no era una tasca fàcil, només els equips que aconsegueixen 
            comunicar-se i escoltar-se de manera activa aconsegueixen arribar al final amb èxit i dins del temps límit!\r\n
            A continuació us podeu descarregar el vostre diploma més que merescut, en mostra d'agraïment pel vostre suport en aquesta missió.\r\n
            Us agraïm la vostra implicació, heu sigut un gran equip!\r\n
            Un cop tingueu descarregat el vostre diploma, us esperem al Zoom principal per retrobar-nos amb la resta d'equips que estan de missió.\r\n
            `}
        </p>
        <div className="mt-2">
            <PDFDownloadLink document={<DiplomaDocument userName={userName} />} fileName="Diploma Reformat Scaperoom.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Creant diploma...' : 'Descarrega el diploma!')}
            </PDFDownloadLink>
        </div>
    </Row>
)

export default FinalScreen;