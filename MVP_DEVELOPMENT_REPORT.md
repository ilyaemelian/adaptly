# Отчёт о публичном MVP-планировании

## Что сделано

- Публичная ветка оставлена в ограниченном disclosure-scope: без runnable backend/frontend кода.
- Добавлен `docs/MVP_ROADMAP.md` как investor-facing план, а не техническая спецификация.
- Обновлены `README.md`, `docs/SCOPE.md` и `docs/ARCHITECTURE.md`, чтобы явно отделить открытый UI-слой от private implementation.

## Важные ограничения

- В открытый GitHub не добавляются backend, агентные пайплайны, модели, prompts, ключи, схемы данных и сырые реализации.
- Статические HTML-экраны остаются прототипом: их ещё нужно разрезать на mobile-first frontend-компоненты в private ветке/репозитории.
- Презентация и SVG-схема архитектуры не найдены в текущем checkout; их нужно подключить как приватный источник требований.

## Публичный фокус roadmap

- Mobile-first learning flow для обучения в дороге.
- AI mentor / agent как управляемый product surface.
- Voice-assisted coding input как перспективный demo capability.

## Следующий шаг

- Перенести реализацию backend/frontend, агентной логики и voice pipeline в закрытую рабочую среду; в public ветке оставлять только безопасные UX-артефакты и краткие investor-facing материалы.
