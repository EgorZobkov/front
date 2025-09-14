export function AdCard({ ad }) {
  // ad: { id, title, description, price, ... }
  return React.createElement(
    'div',
    { className: 'ad-card' },
    React.createElement('div', { className: 'photo' }, 'Фото'),
    React.createElement('h3', null, ad.title),
    React.createElement('p', null, ad.description),
    React.createElement('strong', null, `${ad.price} ₽`)
  );
}