import React from 'react';
import { PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logoImg from '../assets/images/logos/logo.jpg';

const Header = ({ name, player }) => (
    <PageHeader
        title={name}
        subTitle={`(Jugador número ${player})`}
        avatar={{ style: { backgroundColor: '#87d068' }, icon: <UserOutlined /> }}
    >
        <img src={logoImg} alt="logo Reforma't Scaperoom" style={{ width: '20%' }} />
    </PageHeader>
)

export default Header;