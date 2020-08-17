import React, { useState, useEffect, useCallback } from 'react';
import { PageHeader, Tag } from 'antd';
import { UserOutlined, HourglassOutlined } from '@ant-design/icons';
import logoImg from '../assets/images/logos/logo.jpg';
import moment from 'moment';

const Header = ({ name, player }) => {
    const countdownTime = moment().add(40, 'minutes');
    const countdownStartVal = {
        hours: 0,
        minutes: '40',
        seconds: 0,
    }

    const [countdown, setCountdown] = useState(countdownStartVal);



    const updateCountdown = useCallback(() => {
        if (countdownTime) {
            // Get the current time
            const currentTime = new Date().getTime();

            // Get the time remaining until the countdown date
            const distanceToDate = countdownTime - currentTime;

            if (distanceToDate > 0) {
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

            } else {
                setCountdown({ hours: 0, minutes: 0, seconds: Math.floor(distanceToDate / 1000) });
            }
        }
    }, [])

    useEffect(() => {
        const tick = setInterval(() => updateCountdown(), 1000);
        return () => clearInterval(tick)
    }, [updateCountdown]);

    return (
        <PageHeader
            title={name}
            subTitle={<SubtitleText player={player} countdown={countdown} />}
            avatar={{ style: { backgroundColor: '#2a3f5d' }, icon: <UserOutlined /> }}
        >
            <img src={logoImg} alt="logo Reforma't Scaperoom" style={{ width: '20%' }} />
        </PageHeader>
    )
}

const SubtitleText = ({ player, countdown }) => (
    <>
        <Tag><UserOutlined className="mr-1" />{player}</Tag>
        <span>
            {countdown.hours <= 0 && countdown.minutes <= 0 && countdown.seconds <= 0 ?
                <span style={{ color: 'red' }}>
                    <HourglassOutlined className="mr-1" />
                    {Math.abs(countdown.seconds)}
                </span>
                : <span>
                    <HourglassOutlined className="mr-1" />
                    {`${countdown.hours || '0'}:${countdown.minutes || '00'}:${countdown.seconds || '00'}`}
                </span>
            }
        </span>
    </>
)

export default Header;