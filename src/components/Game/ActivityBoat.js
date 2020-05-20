import React, { useState } from 'react';
import { Button, Select, Form, Alert } from 'antd';

import kidImg from '../../assets/images/activity-boat/kid.png';
import healthyImg from '../../assets/images/activity-boat/healthy.png';
import sickImg from '../../assets/images/activity-boat/sick.png';
import doctorImg from '../../assets/images/activity-boat/doctor.png';
import boatRightImg from '../../assets/images/activity-boat/boat-right.png';
import boatLeftImg from '../../assets/images/activity-boat/boat-left.png';

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const options = [{
    id: 'kid',
    name: 'Nen',
    img: kidImg
}, {
    id: 'sick',
    name: 'Infectat',
    img: sickImg,
}, {
    id: 'healthy',
    name: 'Sa',
    img: healthyImg
},
{
    id: 'doctor',
    name: 'Doctora',
    img: doctorImg
}
];

const ActivityBoat = ({ handleFinish }) => {
    const [firstColItems, setFirstColItems] = useState(options);
    const [secondColItems, setSecondColItems] = useState([]);
    const [form] = Form.useForm();
    const [direction, setDirection] = useState(RIGHT)
    const [errors, setErrors] = useState(null)

    const [doneTrips, setDoneTrips] = useState([]);

    const resetGame = () => {
        setFirstColItems(options);
        setSecondColItems([]);
        setDoneTrips([]);
        setDirection(RIGHT);
        setErrors(null);
        form.resetFields();
    }


    const onSubmitTrip = values => {
        const selectedOpts = values.peopleToTravel;
        const selectedItems = selectedOpts && values.peopleToTravel.map(opId => options.find(o => o.id == opId));

        setDoneTrips([
            ...doneTrips,
            {
                firstColItems: [...firstColItems],
                secondColItems: [...secondColItems],
                boatItems: selectedItems,
                direction: direction
            }
        ])

        //reset trip to modify
        if (selectedOpts) {
            if (direction == RIGHT) {
                setFirstColItems(firstColItems.filter(i => !selectedOpts.includes(i.id)))
                setSecondColItems([...secondColItems, ...selectedItems])
            } else {
                setSecondColItems(secondColItems.filter(i => !selectedOpts.includes(i.id)))
                setFirstColItems([...firstColItems, ...selectedItems])
            }
        }
        if (direction === RIGHT) setDirection(LEFT)
        else setDirection(RIGHT)

        form.resetFields();
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

    const showError = errors && errors.includes(true);
    const selectOpts = direction === RIGHT ? firstColItems : secondColItems;
    const showFinalButton = secondColItems.length === 4 && !showError;

    return (
        <>
            <div className="mb-3">
                {doneTrips && doneTrips.map((trip, key) =>
                    <Trip {...trip} key={key} />
                )}

                <Form
                    name="boatForm"
                    form={form}
                    onFinish={onSubmitTrip}
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <Characters characters={firstColItems} />



                        <div className="d-flex flex-column align-items-center">
                            <BoatImage direction={direction} />
                            <Form.Item
                                name="peopleToTravel"
                            >
                                <Select mode="tags" style={{ width: 120 }} tokenSeparators={[',']} disabled={showError}>
                                    {selectOpts.map(o => <Select.Option value={o.id} key={o.id}>{o.name}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </div>
                        <Characters characters={secondColItems} />

                        {!showError &&
                            <Button htmlType="submit" className="ml-2">Següent viatge</Button>
                        }
                    </div>
                </Form>
            </div>

            {showFinalButton &&
                <Button type="primary" onClick={handleFinalValidation} className="ml-2">
                    Comprova resposta
                </Button>
            }
            {showError &&
                <div className="p-5">
                    <Alert
                        message="Resposta incorrecta!"
                        description={
                            <div>
                                <ul>
                                    {errors[0] && <li>Només pot viatjar el doctor amb, com a molt, un altre personatge!</li>}
                                    {errors[1] && <li>L'infectat no pot estar mai amb un altre personatge si no hi ha el doctor!</li>}
                                    {errors[2] && <li>La solució òptima té menys viatges!</li>}
                                </ul>
                                <Button className="mt-2" onClick={resetGame}>Torna-ho a provar!</Button>
                            </div>
                        }
                        type="error"
                        showIcon
                    />
                </div>
            }

        </>
    )
}

export default ActivityBoat;


const Trip = ({ firstColItems, secondColItems, boatItems, direction }) => {
    return (
        <div className="d-flex align-items-center justify-content-center my-2">
            <Characters characters={firstColItems} />
            <div className="ml-2">
                <BoatImage direction={direction} style={{ border: 'solid 5px red' }} />
                {boatItems &&
                    boatItems.map(item => (
                        <img
                            key={item.id}
                            src={item.img}
                            style={{ height: 100, border: 'solid 5px red' }}
                            className="m-2"
                        />
                    )
                    )
                }
            </div>
            <Characters characters={secondColItems} />

        </div>
    )
}

const Characters = ({ characters }) => {
    return (
        <div style={{ width: 300, height: 120, border: 'solid 2px' }} className="mx-3">
            {characters.map(i => <img key={i.id} src={i.img} style={{ height: 100 }} className="m-2" />)}
        </div>
    )
}

const BoatImage = ({ direction, style }) => (
    <img
        src={direction === RIGHT ? boatRightImg : boatLeftImg}
        style={style ? { ...style, height: 100 } : { height: 100 }}
        className="m-2"
    />
)