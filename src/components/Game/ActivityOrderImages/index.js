import React, { useState, useEffect } from 'react';
import { imagesInfo, correctOrder, correctSolution } from './data';
import { Alert, Button, InputNumber, Form } from 'antd';
import { shuffleArray } from '../../../helpers/helpers';

const SELECT_IMAGES = "SELECT_IMAGES";
const OPERATION = "OPERATION";


const ActivityOrderImages = ({ handleFinish }) => {
    const [gameStep, setGameStep] = useState(SELECT_IMAGES);
    const [selectedImages, setSelectedImages] = useState([]);
    const [showError, setShowError] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [validationFinalError, setValidationFinalError] = useState(false);
    const [randomButtonsPos, setRandomButtonsPos] = useState([]);

    useEffect(() => {
        setRandomButtonsPos(shuffleArray(correctOrder))
    }, [])

    const handleSelected = id => {
        if (selectedImages.length === 5) {
            if (JSON.stringify(correctOrder) === JSON.stringify([...selectedImages, id])) {
                setGameStep(OPERATION);
                setShowError(false);
            } else setShowError(true);
        }
        setSelectedImages([...selectedImages, id]);
    }

    const resetGame = () => {
        setShowError(false);
        setSelectedImages([]);
        setGameStep(SELECT_IMAGES);
    }

    const handleFinalValidation = (responses) => {
        let someError = false;
        let validationErr = [];
        imagesInfo.forEach(img => {
            if (img.response !== responses[`number_${img.id}`]) {
                validationErr[img.id] = true;
                someError = true;
            } else validationErr[img.id] = false;
        });
        setValidationErrors(validationErr);
        setValidationFinalError(responses.finalSolution !== correctSolution);
        if (!someError && responses.finalSolution == correctSolution) handleFinish();
    }

    const highlightedItem = selectedImages.length;


    return (
        <>
            {gameStep === SELECT_IMAGES && (
                showError ?
                    <Alert
                        className="mx-4 mt-3"
                        type="error"
                        message="Imatges col·locades incorrectament!"
                        description={
                            <Button onClick={resetGame}>Torna-ho a provar!</Button>
                        }
                    />
                    : <Alert
                        className="mx-4 mt-3"
                        type="warning"
                        description={
                            <div>
                                {randomButtonsPos.map(imgId => <ImageButton key={imgId} imgId={imgId} handleClick={handleSelected} />)}
                            </div>
                        }
                    />
            )}

            <div className="d-flex align-items-center flex-row m-4">
                {imagesInfo.map(img =>
                    <>
                        <ImageDescription
                            img={img}
                            highlighted={highlightedItem === img.id}
                            selectedImages={selectedImages}
                            showSizes={gameStep === OPERATION}
                        />
                    </>
                )}
            </div>

            {gameStep === OPERATION &&
                <Form
                    name="operationActivity"
                    layout="vertical"
                    onFinish={handleFinalValidation}
                >
                    <Alert
                        className="mx-4 mt-3"
                        type={showError ? 'error' : 'success'}
                        description={
                            <>
                                <div className="d-flex align-items-center flex-row m-4">
                                    {imagesInfo.map(img =>
                                        <span key={img.id} className="d-flex" style={{ flex: 1 }} >
                                            <Form.Item
                                                style={{ flex: 1 }}
                                                className="m-0"
                                                name={`number_${img.id}`}
                                                rules={[{ required: true, message: 'Introdueix una resposta!' }]}
                                                validateStatus={
                                                    validationErrors[img.id]
                                                        ? 'error'
                                                        : 'success'
                                                }
                                                initialValue={img.initialValue}
                                            >
                                                <InputNumber decimalSeparator=',' step={0.0001} />
                                            </Form.Item>
                                            <Alert type="info" description={img.operation} className="p-2 font-weight-bold d-flex" />
                                        </span>
                                    )}
                                </div>

                                <div className="d-flex align-items-center flex-column">
                                    <div className="d-flex">
                                        <Form.Item
                                            name="finalSolution"
                                            rules={[{ required: true, message: 'Introdueix una resposta!' }]}
                                            validateStatus={validationFinalError ? 'error' : 'success'}
                                        >
                                            <InputNumber
                                                className="mx-2"
                                                disabled={showError}
                                                decimalSeparator=','
                                                step={0.0001}
                                            />
                                        </Form.Item>
                                        <span> µm</span>
                                    </div>
                                </div>
                                <Form.Item >
                                    <Button htmlType="submit" disabled={showError}>RESOLDRE PROVA</Button>
                                </Form.Item>
                            </>
                        }
                    />
                </Form>
            }
        </>
    )
}

export default ActivityOrderImages;


const ImageDescription = ({ img, highlighted, selectedImages, showSizes }) => (
    <div
        style={{
            padding: 7,
            border: "solid 1px blue",
            flex: 2,
            backgroundColor: highlighted ? '#f4f2ff' : 'white',
            minHeight: 150
        }}
        className={`mx-2 d-flex align-items-center ${!highlighted ? 'flex-column' : ''}`}
    >
        {img.id < selectedImages.length ?
            <img
                src={showSizes ?
                    imagesInfo.find(i => i.id === selectedImages[img.id]).srcWithNumber
                    : imagesInfo.find(i => i.id === selectedImages[img.id]).src
                }
                className="w-100"
            />
            : highlighted && <p>{img.desc}</p>
        }
    </div>
)

const ImageButton = ({ imgId, handleClick }) => {
    const imgInfo = imagesInfo.find(img => img.id === imgId);
    return (
        <Button onClick={() => handleClick(imgInfo.id)} className="m-2 p-1" style={{ height: 150 }}>
            <img src={imgInfo.src} className="h-100" />
        </Button>
    )
}