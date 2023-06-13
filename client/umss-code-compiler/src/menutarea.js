
import React from 'react';
import { useState } from 'react';
import Tarea from './task_1/ciclo_for'

function MenuTarea() {

    const [isRefresh, setIsRefresh] = useState(true);

    const setRefresh = (status) => {
        setIsRefresh(status);
    }

    return (
        <div>
            <Tarea setRefresh={setRefresh} isRefresh={isRefresh} />
        </div>
    );
}

export default MenuTarea;