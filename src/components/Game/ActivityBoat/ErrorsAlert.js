import React from 'react';
import { Alert, Button } from 'antd';

const ErrorsAlert = ({ errors, handleGameReset }) => (
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
                    <Button className="mt-2" onClick={handleGameReset}>Torna-ho a provar!</Button>
                </div>
            }
            type="error"
            showIcon
        />
    </div>
)

export default ErrorsAlert
