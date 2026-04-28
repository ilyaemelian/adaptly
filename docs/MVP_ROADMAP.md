# MVP roadmap

## Цель инвесторского MVP

Показать один рабочий пользовательский путь: выбор трека, персональный dashboard, рекомендованный урок и mentor-подсказка. MVP должен быть демонстрационным, но данные должны приходить из backend API, а прогресс должен изменяться после действия пользователя.

## Первый vertical slice

1. Backend отдаёт профиль demo-пользователя, curriculum, рекомендации и принимает событие прогресса.
2. Frontend показывает dashboard из API и позволяет завершить следующий урок.
3. После завершения урока frontend обновляет прогресс без перезагрузки страницы.

## Backend backlog

- Auth stub для demo-user без секретов.
- `GET /api/health` для проверки окружения.
- `GET /api/demo-state` для агрегированного состояния MVP.
- `POST /api/progress` для фиксации завершения урока.
- Позже: постоянное хранилище, реальные пользователи, curriculum admin.

## Frontend backlog

- Одностраничный demo path поверх текущего визуального языка Adaptly.
- API client с состояниями loading/error.
- Dashboard, next lesson, mentor insight.
- Позже: onboarding, lessons router, analytics, production auth.

## Что пока не делаем

- Реальные ML-модели и proprietary scoring.
- Платежи, роли, community moderation.
- Полноценную базу данных и миграции.
