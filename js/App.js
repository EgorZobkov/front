// js/App.js
import { AdsList } from './components/AdsList.js';

export function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Список объявлений'),
    React.createElement(AdsList)
  );
}

// монтируем приложение
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));