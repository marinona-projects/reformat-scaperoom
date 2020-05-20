import React from 'react';
import { Button } from 'antd';
import ActivityDnd from './ActivityDnD';
import ActivityImage from './ActivityImage';
import ActivityBoat from './ActivityBoat';

const activities = [
    {
        desc: "L'objectiu és aconseguir que tots els personatge creuin el riu, però el doctor només pot transportar un pacient per viatge. A més, el malalt no pot quedar-se sol amb cap dels dos altres personatges sense el doctor present. Per tant, hauran de trobar la combinació correcta per aconseguir atravessar el riu tots.",

    },
    {
        desc: "drag and drop description",

    },
    {
        desc: "descripcio prov imatge",
    }
]

const Game = ({ numGame, handleFinish }) => {
    switch (numGame) {
        case 1:
            return (
                <>
                    <Description val={activities[0].desc} />
                    < ActivityBoat handleFinish={handleFinish} />
                </>
            )
            break;
        case 2:
            return (
                <>
                    <Description val={activities[1].desc} />
                    < ActivityDnd handleFinish={handleFinish} />
                </>
            )
            break;
        case 3:
            return (
                <>
                    <Description val={activities[2].desc} />
                    < ActivityImage handleFinish={handleFinish} />
                </>
            )
            break;
    }
}

export default Game;

const Description = ({ val }) => (
    <div className="d-flex flex-column align-items-center mt-4">
        <p className="w-50">{val}</p>
    </div>
)