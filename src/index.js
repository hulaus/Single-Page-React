// console.log('Rick and Morty');  This was the initial test for the index.js
import ReactDOM from 'react-dom/client';

function App() {
    return <h1>Rick & Morty</h1>
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />); //Mounts the App component to an element with the root ID selector in my document, which is the entry point of the application. 