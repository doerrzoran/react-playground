import * as ReactDOM from 'react-dom';
export default function Tick() {
        const element = (
            <div>
            <h1>Hello World !</h1>
            <h2>Il est {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }
    // Chaque seconde, nous appellons ReactDOM.render() depuis un callback passé à setInterval().
    setInterval(Tick, 1000);    