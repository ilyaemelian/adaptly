# Отчёт о старте MVP-разработки

## Что сделано

- Составлен roadmap первого investor MVP в `docs/MVP_ROADMAP.md`.
- Добавлен минимальный backend API в `apps/backend`.
- Добавлен frontend demo dashboard в `apps/frontend`.
- Обновлены `README.md`, `docs/SCOPE.md` и `docs/ARCHITECTURE.md` под новый runnable MVP-slice.

## Как запустить

1. Backend: `python3 apps/backend/server.py`.
2. Frontend: `cd apps/frontend && python3 -m http.server 5173`.
3. Открыть `http://127.0.0.1:5173`.

## Проверенный demo path

- Frontend получает данные из `GET /api/demo-state`.
- Кнопка завершения урока вызывает `POST /api/progress`.
- UI обновляет mastery с 78% до 82% и streak с 7 до 8 без перезагрузки.

## Следующий шаг

- Добавить onboarding route и demo-session, затем заменить in-memory progress на простое постоянное хранилище.
