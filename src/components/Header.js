import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logoImg from '../assets/images/logos/logo.jpg';
import moment from 'moment';

const Header = ({ name, player }) => {
    const countdownTime = moment().add(40, 'minutes');

    const [countdown, setCountdown] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const tick = setInterval(() => updateCountdown(), 1000);
        return () => clearInterval(tick)
    }, []);

    const updateCountdown = () => {
        if (countdownTime) {
            // Get the current time
            const currentTime = new Date().getTime();

            // Get the time remaining until the countdown date
            const distanceToDate = countdownTime - currentTime;

            // Calculate days, hours, minutes and seconds remaining
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            // For visual appeal, add a zero to each number that's only one digit
            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            // Set the state to each new time
            setCountdown({ hours: hours, minutes, seconds });
        }
    }

    const subTitleText = countdown.hours >= 0 ?
        <span>{`(Jugador número ${player}) ${countdown.hours || '0'}:${countdown.minutes || '00'}:${countdown.seconds || '00'}`}</span>
        : <span style={{ color: 'red' }}>{`(Jugador número ${player}) ${Math.abs(countdown.seconds)}`}</span>

    return (
        <PageHeader
            title={name}
            subTitle={subTitleText}
            avatar={{ style: { backgroundColor: '#2a3f5d' }, icon: <UserOutlined /> }}
        >
            <img src={logoImg} alt="logo Reforma't Scaperoom" style={{ width: '20%' }} />
        </PageHeader>
    )
}

export default Header;