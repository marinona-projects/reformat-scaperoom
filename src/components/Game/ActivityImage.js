import React from 'react';
import { Button, Input } from 'antd';

const ActivityImage = ({ handleFinish }) => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <img src="https://www.wikihow.com/images/thumb/4/40/Capture-21.jpg/339px-Capture-21.jpg" className="mb-2" />
            <div className="ml-2">
                <Input placeholder="Reposta" />
                <Button onClick={handleFinish} className="mt-2">RESOLDRE PROVA 3</Button>
            </div>
        </div>

    )
}

export default ActivityImage;