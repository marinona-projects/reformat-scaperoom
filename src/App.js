import React, { useState } from 'react';
import './App.css';
import './styles/bootstrap.min.css';
import 'antd/dist/antd.css';
import './styles/generalStyles.scss';

import { Row, Col, Steps, Modal } from 'antd';
import Header from './components/Header';
import Game from './components/Game/index';
import FinalScreen from './components/FinalScreen/index';
import InitialForm from './components/InitialForm/InitialForm';


function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [currentGameNumber, setCurrentGameNumber] = useState(1);

  const handleGameFinish = () => {
    if (currentGameNumber < 5) {
      Modal.success({
        content: 'Prova superada!',
        okText: "Segueix",
        onOk() {
          setCurrentGameNumber(currentGameNumber + 1);
        },
      });
    }
  }

  return (
    <div className="App">
      {userInfo &&
        <>
          <Header {...userInfo} gameStep={currentGameNumber} />
          {currentGameNumber < 5 ?
            <>
              <Row>
                <Col span={18} offset={3}>
                  <Steps current={currentGameNumber - 1}>
                    <Steps.Step
                      title="Pis 1"
                    // subTitle="subtitol"
                    // description="Descripció..." 
                    />
                    <Steps.Step title="Pis 2" />
                    <Steps.Step title="Pis 3" />
                    <Steps.Step title="Pis 4" />
                    <Steps.Step title="Completat!" />
                    {/* <Steps.Step title="Final!" description="This is a description." /> */}
                  </Steps>
                </Col>
              </Row>
              <Game numGame={currentGameNumber} handleFinish={handleGameFinish} userNumber={userInfo && userInfo.player} />
            </>
            : <FinalScreen userName={userInfo && userInfo.name} />
          }
        </>
      }
      <Row className='mt-3'>
        <Col span={12} offset={6} >
          {!userInfo &&
            <InitialForm onSubmit={setUserInfo} />
          }
        </Col>
      </Row>
    </div>
  );
}

export default App;
