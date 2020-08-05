
import kidImg from '../../../assets/images/activity-boat/kid.png';
import healthyImg from '../../../assets/images/activity-boat/healthy.png';
import sickImg from '../../../assets/images/activity-boat/sick.png';
import doctorImg from '../../../assets/images/activity-boat/doctor.png';
import boatSickImg from '../../../assets/images/activity-boat/boat/sick.png';
import boatKidImg from '../../../assets/images/activity-boat/boat/kid.png';
import boatHealthyImg from '../../../assets/images/activity-boat/boat/healthy.png';
import boatDoctorImg from '../../../assets/images/activity-boat/boat/doctor.png';


export const boatActivityText =
    `L'objectiu és aconseguir que tots els personatge creuin el riu, però el metge només pot
    transportar un pacient per viatge. A més, el malalt no pot quedar-se sol amb cap dels dos
    altres personatges sense el doctor present. Per tant, hauran de trobar la combinació
    correcte per aconseguir atravessar el riu tots.`

export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';


export const options = [{
    id: 'kid',
    name: 'Nen',
    img: kidImg,
    imgAlt: 'nen',
    boatImg: boatKidImg,
    boatImgAlt: 'nen dins de la barca',
}, {
    id: 'sick',
    name: 'Infectat',
    img: sickImg,
    imgAlt: 'home malalt',
    boatImg: boatSickImg,
    boatImgAlt: 'home malalt dins de la barca',
}, {
    id: 'healthy',
    name: 'Sa',
    img: healthyImg,
    imgAlt: 'dona sana',
    boatImg: boatHealthyImg,
    boatImgAlt: 'dona sana dins de la barca',
},
{
    id: 'doctor',
    name: 'Doctora',
    img: doctorImg,
    imgAlt: 'doctor',
    boatImg: boatDoctorImg,
    boatImgAlt: 'doctor dins de la barca',
}
];