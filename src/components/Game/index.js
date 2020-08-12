import React from 'react';
import ActivityOrderImages from './ActivityOrderImages/index';
import ActivityBoat from './ActivityBoat/index';
import ActivityMathProblem from './ActivityMathProblem/index';
import ActivityImage from './ActivityImage/index';

const activities = [
    {
        desc: `Benvinguts i benvingudes al primer pis de l'expedició. En aquest espai veiem uns espais en blanc i un seguit d'imatges... Bé, tots els espais estan en blanc? Que haurem de fer?\r\n 
        Potser trobar la seqüència correcta ens faria avançar al següent nivell.. Si us trobeu molt perduts i perdudes, podeu demanar ajuda al vostre TeacherMaster però atenció... El TeacherMaster estarà observant en tot moment i ell decidirá fins a quin punt us ajudarà... Molta sort! `,
    },
    {
        desc: `Heu aconseguit passar al segon pis de la missió.\r\n
        Quin text més llarg, l'haurem de llegir per saber que hem de fer? ... Pinta que si... Potser compartir la informació que ens proporcionen ens ajuda a trobar la solució adient. Recordeu que es tracta de treballar en equip, no que part de l'equip ho solucioni i l'altra part copiï... el TeacherMaster us observa...`,
    },
    {
        desc: `Enhorabona equip, heu aconseguit arribar al tercer pis d'aquesta aventura. \r\n
        Una barca? Un riu? 4 personatges? Crec que el millor per començar aquesta prova serà llegir les instruccions...\r\n 
        Haureu de provar totes les opcions que us passin pel cap, però.. Necessitem eficàcia i rapidesa! Recordeu, el TeacherMaster està per ajudar-vos... Sempre que ho cregui necessari!`,
    },
    {
        desc: `Màxima atenció! Equip, heu arribat al quart pis de l'expedició.\r\n 
        En aquesta sala ens trobem un panell ple de colors, de paraules i números... Que vol dir tot això? Quina connexió hem de trobar? Us aconsellem, una vegada més, que us comuniqueu com equip i busqueu una solució conjuntament...\r\n  
        Aquí el TeacherMaster us pot ajudar, però si veu que aneu molt bé de temps, pot ser que faci tot el contrari... Ànims equip, ja gairebé ho teniu, força!`,
    }
]

const Game = ({ numGame, handleFinish, userNumber }) => {
    switch (numGame) {
        case 1:
            return (
                <>
                    <Description val={activities[0].desc} />
                    <ActivityOrderImages handleFinish={handleFinish} />
                </>
            )
            break;
        case 2:
            return (
                <>
                    <Description val={activities[1].desc} />
                    <ActivityMathProblem handleFinish={handleFinish} />
                </>
            )
            break;
        case 3:
            return (
                <>
                    <Description val={activities[2].desc} />
                    <ActivityBoat handleFinish={handleFinish} />
                </>
            )
            break;
        case 4:
            return (
                <>
                    <Description val={activities[3].desc} />
                    <ActivityImage handleFinish={handleFinish} userNumber={userNumber} />
                </>
            )
            break;
    }
}

export default Game;

const Description = ({ val }) => (
    <div className="d-flex flex-column align-items-center mt-4">
        <p className="w-50 text-justify" style={{ whiteSpace: 'pre-line' }}>{val}</p>
    </div>
)