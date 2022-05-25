import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';
import './index.css'



const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<CounterApp value={10} />);