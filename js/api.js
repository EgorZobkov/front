// js/api.js
const API_BASE_URL = 'https://my-fd.ru/oc-content/plugins/rest/api.php';

// передаём реальный API-ключ в переменную. Пока можно оставить пустым.
const API_KEY = 'LlEvOWzxnknz95wMSxuDLlr5wCjWnq';

/**
 * Универсальный вызов API. Параметры:
 * - type: read | insert | update | delete
 * - object: сущность (например, "search", "item", "user")
 * - action: действие (например, "items", "item", "categories")
 * - params: дополнительные параметры запроса (фильтры, данные формы)
 * - method: HTTP-метод (GET по умолчанию, можно использовать POST/PUT/DELETE для insert/update/delete)
 */
export async function callApi({ type = 'read', object, action, params = {}, method = 'GET' }) {
  // формируем строку параметров
  const query = new URLSearchParams({
    key: API_KEY,
    type,
    object,
    action,
    onlyResponse: 1,    // возвращаем только полезную часть ответа
    ...params
  }).toString();

  const url = `${API_BASE_URL}?${query}`;

  const options = { method: method.toUpperCase() };

  // если отправляем данные (insert/update/delete), добавляем тело запроса
  if (['POST', 'PUT', 'DELETE'].includes(options.method) && params.body) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(params.body);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status} ${response.statusText}`);
  }

  return response.json();
}