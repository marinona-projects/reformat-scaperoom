import React from 'react';
import { Row, Col, Button, PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = ({ name, player }) => (
    <PageHeader
        title={name}
        subTitle={`(Jugador número ${player})`}
        avatar={{ style: { backgroundColor: '#87d068' }, icon: <UserOutlined /> }}
    />
)

export default Header;