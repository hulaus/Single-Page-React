// console.log('Rick and Morty');  This was the initial test for the index.js
import ReactDOM from 'react-dom/client';
import List from './components/List';

function App() {
    return (
        <div>
            <h1>Rick & Morty</h1>
            <List />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />); //Mounts the App component to an element with the root ID selector in my document, which is the entry point of the application. 