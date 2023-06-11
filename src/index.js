// console.log('Rick and Morty');  This was the initial test for the index.js
import ReactDOM from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className='container'>
            <h1>Rick & Morty</h1>
            <nav className='navbar sticky-top nabar-light bg-dark'>
                <h1 className='navbar-brand text-light'>Rick and Morty</h1>
            </nav>
            <List />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />); //Mounts the App component to an element with the root ID selector in my document, which is the entry point of the application. 