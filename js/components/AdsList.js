import { fetchItems } from '../api.js';

export function AdsList() {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchItems({ premium: true })
      .then((data) => {
        // структура data зависит от ответа RestAPI. Смотрите документацию плагина.
        setItems(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  // рендер списка или сообщения об ошибке…
}