import React from 'react'
export default function Clock(props) {
    React.useEffect(() => {
        tick();        
    }, []);
    
    const [date, setDate] = React.useState(new Date());

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    

    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
        </div>
        );
}