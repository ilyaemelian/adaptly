# Экраны MVP Adaptly

Статические HTML-прототипы (Tailwind CDN). Общая тема: **`../tailwind-adaptly.config.js`** + локальный знак **`../assets/logo_trans.png`** в круглой обводке в шапках.

## Карта файлов

| Файл | Назначение |
|------|------------|
| **Ядро (mobile-first)** | |
| `dashboard_adaptly.html` | Главная / прогресс |
| `lessons_adaptly.html` | Каталог уроков |
| `coding_lesson_adaptly.html` | Урок с кодом |
| `community_adaptly.html` | Лента сообщества |
| `mentor_adaptly.html` | AI-ментор (мобильный) |
| **Онбординг** | |
| `onboarding_path_selection_mobile_1.html` | Шаг 1 (моб.) |
| `onboarding_path_selection_mobile_2.html` | Шаг 2 (моб.) |
| `onboarding_path_selection_desktop_1.html` | Шаг 1 (десктоп) |
| `onboarding_path_selection_desktop_2.html` | Шаг 2 (десктоп) |
| **Расширенные десктоп-макеты** | |
| `dashboard_adaptly_desktop.html` | Dashboard + сайдбар |
| `coding_lesson_adaptly_desktop.html` | Урок + редактор |
| `mentor_adaptly_desktop.html` | Ментор + граф знаний |
| `learning_analytics_desktop.html` | Аналитика (десктоп) |
| `learning_analytics_mobile.html` | Аналитика (моб.) |

Дубликаты по смыслу (mobile vs `*_desktop`) оставлены намеренно: разная вёрстка одних и тех же сценариев.

## Зависимости

- Шрифты и иконки — Google Fonts / Material Symbols (как в каждом файле).
- Растр: положите **`logo_trans.png`** и при необходимости **`adaptly-logo.png`** в `mvp/assets/` (пути от экранов: `../assets/…`).
