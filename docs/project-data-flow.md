# Project Data Flow

## Что это за проект

`cv-landing` — это одностраничный React-проект с портфолио/резюме, где:
- UI рендерится из статических TypeScript-данных (`src/data/*`);
- тексты интерфейса берутся из i18n-переводов (`src/locales/*/translation.json`);
- PDF-версии резюме генерируются отдельным скриптом (`scripts/generate-cv.ts`) и сохраняются в `public/cv-files/`.

## Главные источники данных

### 1) Данные контента (Single Source of Truth)

Основные сущности для лендинга и PDF лежат в `src/data/`:
- `src/data/experience.ts` — опыт работы;
- `src/data/skills.ts` — навыки;
- `src/data/projects.ts` — проекты;
- `src/data/contact.ts` — контакты.

Именно эти файлы считаются источником правды для контента.

### 2) Локализация текстов

Файлы переводов:
- `src/locales/en/translation.json`
- `src/locales/ru/translation.json`
- `src/locales/he/translation.json`

Здесь хранятся UI-строки и тексты достижений в опыте (`experience.achievements.*`), которые подставляются как в лендинге, так и при генерации PDF.

## Как данные попадают в лендинг

Секции лендинга напрямую импортируют данные из `src/data/*`:
- `src/components/Sections/Experience.tsx` <- `experienceData`
- `src/components/Sections/Skills.tsx` <- `skillsData`
- `src/components/Sections/Projects.tsx` <- `projectsData`
- `src/components/Sections/Contact.tsx` <- `contactData`

Компоненты рендерят массивы в том порядке, в котором элементы перечислены в соответствующих data-файлах.

## Как данные попадают в PDF

Генерация PDF выполняется скриптом `scripts/generate-cv.ts`, который:
1. Импортирует данные из `src/data/*`;
2. Загружает переводы из `src/locales/*/translation.json`;
3. Собирает HTML-шаблон;
4. Через Puppeteer сохраняет PDF в `public/cv-files/`.

Команда генерации:
- `npm run gen:cv`

Дополнительно:
- `prestart` в `package.json` вызывает `gen:cv`, поэтому PDF обновляются перед `npm start`.

## Что лежит в public/cv-files

Папка `public/cv-files/` хранит артефакты (сгенерированные PDF), которые отдаются как статические файлы.

Кнопка скачивания в Hero (`src/components/Sections/Hero.tsx`) открывает именно эти PDF:
- `/cv-files/Pavel Pulin Fullstack ru.pdf`
- `/cv-files/Pavel Pulin Fullstack en.pdf`

## Важно при изменениях контента

Если нужно обновить содержимое резюме:
1. Править `src/data/*` и/или `src/locales/*/translation.json`;
2. Перегенерировать PDF: `npm run gen:cv`;
3. Проверить отображение на лендинге.

Не использовать файлы в `public/cv-files/` как источник правды для контента — это только результат генерации.
