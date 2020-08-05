import React, { useState } from 'react';
import { Button } from 'antd';

import boatImg from '../../../assets/images/activity-boat/boat/boat.png';
import ErrorsAlert from './ErrorsAlert';

import './styles.scss'
import { boatActivityText, RIGHT, LEFT, options } from './data';

const ActivityBoat = ({ handleFinish }) => {
    const [firstColItems, setFirstColItems] = useState(options);
    const [secondColItems, setSecondColItems] = useState([]);
    const [itemsSelected, setItemsSelected] = useState([]);
    const [direction, setDirection] = useState(RIGHT);
    const [errors, setErrors] = useState(null)
    const [doneTrips, setDoneTrips] = useState([]);

    const resetGame = () => {
        setFirstColItems(options);
        setSecondColItems([]);
        setDoneTrips([]);
        setDirection(RIGHT);
        setErrors(null);
        setItemsSelected([]);
    }


    const onSubmitTrip = () => {
        const selectedOpts = itemsSelected.map(i => i.id);

        setDoneTrips([
            ...doneTrips,
            {
                firstColItems: [...firstColItems],
                secondColItems: [...secondColItems],
                boatItems: itemsSelected,
                direction: direction
            }
        ])

        if (itemsSelected) {
            if (direction === RIGHT) {
                setFirstColItems(firstColItems.filter(i => !selectedOpts.includes(i.id)))
                setSecondColItems([...secondColItems, ...itemsSelected])
            } else {
                setSecondColItems(secondColItems.filter(i => !selectedOpts.includes(i.id)))
                setFirstColItems([...firstColItems, ...itemsSelected])
            }
        }
        if (direction === RIGHT) setDirection(LEFT)
        else setDirection(RIGHT)

        setItemsSelected([]);
    }

    const handleFinalValidation = () => {
        const errors = [false, false, false];
        //Errors:
        //0 --> Que no hi hagi cap viatge amb més de 3 persones i que com a mínim hi hagi el doctor
        //1 --> Que l'infectat no estigui mai amb algun altre personatge si no hi ha el doctor
        //2 --> Que no hi hagi més viatges que la solució òptima

        doneTrips.forEach(trip => {
            let boatIds = trip.boatItems && trip.boatItems.map(i => i.id);
            let firstColIds = trip.firstColItems && trip.firstColItems.map(i => i.id);
            let secondColIds = trip.secondColItems && trip.secondColItems.map(i => i.id);
            if (boatIds && (boatIds.length > 2 || !boatIds.includes('doctor'))) errors[0] = true;
            if (firstColIds && firstColIds.includes('sick') && !firstColIds.includes('doctor') && firstColIds.length > 1) errors[1] = true;
            if (secondColIds && secondColIds.includes('sick') && !secondColIds.includes('doctor') && secondColIds.length > 1) errors[1] = true;
        })

        if (doneTrips.length > 7) errors[2] = true;

        if (!errors.includes(true)) handleFinish();
        else setErrors(errors)
    }


    const addSelectedItem = itemId => {

        if (itemsSelected.find(item => item.id === itemId)) {
            setItemsSelected(itemsSelected.filter(item => item.id !== itemId))
        } else {
            const item = options.find(o => o.id === itemId)
            setItemsSelected([...itemsSelected, item])
        }
    }

    const showError = errors && errors.includes(true);
    const showFinalButton = secondColItems.length === 4 && !showError;


    return (
        <div className="boatActivityContainer pb-3">

            <div className="p-2 d-flex align-items-center flex-column" >
                <p className="w-50 p-3 text-justify">{boatActivityText}</p>
            </div>

            <div className="mb-3">
                {doneTrips && doneTrips.map((trip, key) =>
                    <Trip {...trip} key={key} />
                )}

                <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center flex-grow-5" >
                        <Characters characters={firstColItems} clickable={direction === RIGHT} handleClick={addSelectedItem} showError={showError} />

                        <div className="d-flex align-items-center">
                            <BoatImage direction={direction} peopleOnBoat={itemsSelected} />
                        </div>
                        <Characters characters={secondColItems} clickable={direction === LEFT} handleClick={addSelectedItem} showError={showError} />
                    </div>
                    <div className="flex-grow-1">
                        {!showError &&
                            <Button onClick={onSubmitTrip} className="ml-2">Fer aquest viatge</Button>
                        }
                    </div>
                </div>
            </div>

            {!showError &&
                <div className="mt-3">
                    <Button onClick={() => resetGame()}>Reset</Button>
                    {showFinalButton &&
                        <Button onClick={handleFinalValidation} className="ml-2">
                            RESOLDRE PROVA
                        </Button>
                    }
                </div>
            }
            {showError && <ErrorsAlert errors={errors} handleGameReset={resetGame} />}
        </div>
    )
}

export default ActivityBoat;


const Trip = ({ firstColItems, secondColItems, boatItems, direction }) => {
    return (
        <div className="d-flex align-items-center justify-content-center my-2">
            <Characters characters={firstColItems} />
            <div className="ml-2">
                <BoatImage direction={direction} peopleOnBoat={boatItems} />
            </div>
            <Characters characters={secondColItems} />

        </div>
    )
}

const Characters = ({ characters, clickable = false, handleClick, showError }) => {
    return (
        <div className={`charactersContainer mx-3 ${clickable && !showError ? 'clickable' : ''}`}>
            {characters.map(i =>
                clickable ?
                    <Button onClick={() => handleClick(i.id)} className="m-2 p-1 characterImg characterButton">
                        <img key={i.id} src={i.img} alt={i.imgAlt} className="h-100" />
                    </Button>
                    : <img key={i.id} src={i.img} alt={i.imgAlt} className="m-2 characterImg" />
            )}
        </div>
    )
}


const BoatImage = ({ direction, style, peopleOnBoat }) => (
    <div style={{ ...style }} className="position-relative">
        <div className=" ">
            <img
                src={boatImg}
                alt='barca'
                style={{ height: 150, zIndex: 0 }}
                className={`${direction === RIGHT ? 'flipImage' : ''}`}
            />
        </div>
        {peopleOnBoat && peopleOnBoat.map(p =>
            <div className="position-absolute" style={{ top: 0 }}>
                <img
                    src={p.boatImg}
                    alt={p.boatImgAlt}
                    style={{ height: 150, zIndex: 1 }}
                    className={`${direction === RIGHT ? 'flipImage' : ''}`}
                />
            </div>
        )}
    </div>
)