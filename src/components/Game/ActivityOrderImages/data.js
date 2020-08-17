
import React from 'react';

import img0 from '../../../assets/images/activity-order-images/0.jpg';
import img0_wn from '../../../assets/images/activity-order-images/0wn.jpg';

import img1 from '../../../assets/images/activity-order-images/1.jpg';
import img1_wn from '../../../assets/images/activity-order-images/1wn.jpg';

import img2 from '../../../assets/images/activity-order-images/2.jpg';
import img2_wn from '../../../assets/images/activity-order-images/2wn.jpg';

import img3 from '../../../assets/images/activity-order-images/3.jpg';
import img3_wn from '../../../assets/images/activity-order-images/3wn.jpg';

import img4 from '../../../assets/images/activity-order-images/4.jpg';
import img4_wn from '../../../assets/images/activity-order-images/4wn.jpg';

import img5 from '../../../assets/images/activity-order-images/5.jpg';
import img5_wn from '../../../assets/images/activity-order-images/5wn.jpg';

export const correctSolution = 162.84;
export const correctOrder = [0, 1, 2, 3, 4, 5];

export const imagesInfo = [
    {
        id: 0,
        name: "Cèl·lules dentrítiques",
        desc: "Enllaç entre 1a i 2na línia de batalla",
        operation: "·",
        src: img0,
        srcWithNumber: img0_wn,
        value: "0,012 mm",
        response: 12,
        initialValue: undefined
    },
    {
        id: 1,
        name: "Coronavirus",
        desc: "Activa al S. Inmune",
        operation: "-",
        src: img1,
        srcWithNumber: img1_wn,
        value: "0,07µm",
        response: 0.07,
        initialValue: 0.07
    },
    {
        id: 2,
        name: "Natural killers",
        desc: "Es troben a la 1a línia de batalla del S.Inmune",
        operation: "+",
        src: img2,
        srcWithNumber: img2_wn,
        value: <span>6x10<sup>6</sup> pm</span>,
        response: 6,
        initialValue: undefined
    },
    {
        id: 3,
        name: "Macròfags",
        desc: "Devoradors de patògens i deixalles",
        operation: "·",
        src: img3,
        srcWithNumber: img3_wn,
        value: "0,0021 cm",
        response: 210000,
        initialValue: undefined
    },
    {
        id: 4,
        name: "Inmunoglobulina",
        desc: "L'únic que no és una cèl·lula",
        operation: "/",
        src: img4,
        srcWithNumber: img4_wn,
        value: "6,4nm",
        response: 0.0064,
        initialValue: undefined
    },
    {
        id: 5,
        name: "Limfòcits",
        desc: "Es troben a la 2na línia de batalla del S.Inmune",
        operation: "=",
        src: img5,
        srcWithNumber: img5_wn,
        value: "0,00008 dm",
        response: 8,
        initialValue: undefined
    },
]

