import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// LOAD STYLES
import './counter.css';

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <h1>Counter</h1>
            <Card className="counterWrap">
                <h3 className="counterText">{counter}</h3>
                <div className="counterButton">
                    <Button onClick={() => setCounter(counter + 1)} icon="pi pi-plus" />
                    <Button onClick={() => setCounter(0)} icon="pi pi-refresh" />
                </div>
            </Card>
        </div>
    )
}

export default CounterPage
