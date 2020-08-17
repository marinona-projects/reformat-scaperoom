import React, { useState, useEffect } from 'react';
import './styles.scss';
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
        if (!someError && responses.finalSolution === correctSolution) handleFinish();
    }

    const highlightedItem = selectedImages.length;


    return (
        <div className={`py-4 ${gameStep === OPERATION ? 'activityContainerOperation' : ''}`}>
            {gameStep === SELECT_IMAGES && (
                showError ?
                    <Alert
                        className="mx-4 mt-3"
                        type="warning"
                        message="Imatges col·locades incorrectament!"
                        description={
                            <Button onClick={resetGame}>Torna-ho a provar!</Button>
                        }
                    />
                    : <div className="mt-3 py-2 buttonsContainer">
                        {randomButtonsPos.map(imgId => <ImageButton key={imgId} imgId={imgId} handleClick={handleSelected} />)}
                    </div>
            )}

            <div className="d-flex align-items-center flex-row m-4">
                {imagesInfo.map((img, key) =>
                    <ImageDescription
                        key={key}
                        img={img}
                        highlighted={highlightedItem === img.id}
                        selectedImages={selectedImages}
                        showSizes={gameStep === OPERATION}
                    />
                )}
            </div>

            {gameStep === OPERATION &&
                <Form
                    name="operationActivity"
                    layout="vertical"
                    onFinish={handleFinalValidation}
                >
                    <div className="mx-4 mt-3">
                        <div className="d-flex align-items-center flex-row mb-4">
                            {imagesInfo.map(img =>
                                <span key={img.id} className="d-flex align-items-center" style={{ flex: 1 }} >
                                    <div className="d-flex flex-column align-items-center" style={{ flex: 4 }}>
                                        <Form.Item
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
                                        <span className="ml-2">µm</span>
                                    </div>
                                    <div className="p-2 font-weight-bold d-flex" style={{ fontSize: '36px' }}>{img.operation}</div>
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
                    </div>
                </Form>
            }
        </div>
    )
}

export default ActivityOrderImages;


const ImageDescription = ({ img, highlighted, selectedImages, showSizes }) => {
    const showImage = img.id < selectedImages.length;
    const actImage = imagesInfo.find(i => i.id === selectedImages[img.id]);

    return (
        <div
            style={{ backgroundColor: highlighted ? '#FFF8ED' : 'white' }}
            className={`descriptionContainer ${showImage && 'withImg'} mx-2 d-flex align-items-center ${!highlighted ? 'flex-column' : ''} ${showImage && showSizes && 'imgWithSize'}`}
        >
            {showImage ?
                (showSizes ?
                    <>
                        <img
                            src={actImage.src}
                            alt={actImage.name}
                            className="w-100"
                        />
                        <div className="overlay round d-flex align-items-center">
                            <div className="text w-100 text-center">
                                <p>{actImage.name}</p>
                                <p>{actImage.value}</p>
                            </div>
                        </div>
                    </>
                    : <img
                        src={actImage.src}
                        alt={actImage.name}
                        className="w-100 round"
                    />
                )
                : highlighted && <p className="w-100 text-center">{img.desc}</p>
            }
        </div>
    )
}

const ImageButton = ({ imgId, handleClick }) => {
    const imgInfo = imagesInfo.find(img => img.id === imgId);
    return (
        <Button onClick={() => handleClick(imgInfo.id)} className="m-2 p-0 cellButton" style={{ height: 150 }}>
            <img src={imgInfo.src} alt={imgInfo.name} className="h-100" />
            <div className="overlay">
                <div className="text">{imgInfo.name}</div>
            </div>
        </Button>
    )
}