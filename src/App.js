import React, { useState } from 'react';
import './App.css';
import './styles/bootstrap.min.css';
import 'antd/dist/antd.css';

import InitialForm from './components/InitialForm';
import { Row, Col, Steps } from 'antd';
import Header from './components/Header';
import Game from './components/Game/index';
import FinalScreen from './components/FinalScreen';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [currentGameNumber, setCurrentGameNumber] = useState(1);

  const handleGameFinish = () => {
    if (currentGameNumber < 4) setCurrentGameNumber(currentGameNumber + 1);
  }

  return (
    <div className="App">
      {userInfo &&
        <>
          <Header {...userInfo} />
          {currentGameNumber < 4 ?
            <>
              <Row>
                <Col span={18} offset={3}>
                  <Steps current={currentGameNumber - 1}>
                    <Steps.Step title="Prova 1" description="Descripció..." />
                    <Steps.Step title="Prova 2" subTitle="subtitol" description="This is a description." />
                    <Steps.Step title="Prova 3" description="This is a description." />
                    <Steps.Step title="Completat!" description="This is a description." />
                    {/* <Steps.Step title="Final!" description="This is a description." /> */}
                  </Steps>
                </Col>
              </Row>
              <Game numGame={currentGameNumber} handleFinish={handleGameFinish} />
            </>
            : <FinalScreen />
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
