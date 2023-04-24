import React, { useEffect, useState } from 'react';

import styles from './Clock.module.scss';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setDate(new Date());
    }

    return (
        <p className={styles.clock}>{date.toLocaleTimeString()}</p>
    );
}

export default Clock;