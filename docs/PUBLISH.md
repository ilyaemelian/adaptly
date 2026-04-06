# Publish to GitHub

The remote repository: **https://github.com/ilyaemelian/adaptly**

## Важно: не копируйте строку `PS D:\...>` из терминала

В **PowerShell** короткий псевдоним **`ps`** = **`Get-Process`**. Если вставить целиком строку вида:

```text
PS D:\путь> git init
```

то оболочка попытается выполнить команду **`PS`**, а не `git` — отсюда ошибки вроде *«Get-Process … не удаётся найти позиционный параметр …»* и каскад мусора, если дальше вставляется текст ошибки.

**Правильно:** копируйте **только** саму команду, без префикса `PS ...>`:

```powershell
git init
```

Или сначала перейдите в папку одной строкой:

```powershell
Set-Location D:\myapp\ilyaemelianov.com\github\adaptly
```

---

## Windows: `git` не распознан в PowerShell

Значит **Git не установлен** или **не добавлен в PATH**.

### Вариант A — установить Git for Windows (рекомендуется)

1. Скачайте установщик: [git-scm.com/download/win](https://git-scm.com/download/win)  
2. При установке выберите: **«Git from the command line and also from 3rd-party software»** (чтобы `git` был в PATH).  
3. Закройте **все** окна PowerShell / Cursor Terminal и откройте заново.  
4. Проверка:

```powershell
git --version
```

### Вариант B — Git уже стоит, но PATH не видит

Запустите `git.exe` по полному пути (если файл есть):

```powershell
& "C:\Program Files\Git\cmd\git.exe" --version
```

Если команда сработала, добавьте в PATH: **Параметры → Система → О системе → Доп. параметры → Переменные среды → Path** → строка  
`C:\Program Files\Git\cmd`  
(или запускайте Git из **«Git Bash»** из меню Пуск — там `git` уже в PATH).

### Вариант C — без консоли

Установите [GitHub Desktop](https://desktop.github.com/) → **File → Add local repository** → укажите папку `github\adaptly` → опубликуйте на GitHub.

---

## Не вставляйте разметку из Markdown

Строки вроде **\`\`\`powershell** или **\`\`\`** в конце — это оформление для сайтов, **не команды**. В PowerShell они дадут ошибку *«имя \`powershell не распознано»*.

---

## Один раз: кто делает коммиты (до первого `git commit`)

Если видите **Author identity unknown**, задайте имя и email (как на GitHub; email может быть скрыт в настройках GitHub):

```powershell
git config --global user.name "Ваше Имя"
git config --global user.email "ваш-email@example.com"
```

Подставьте свой email (лучше тот, что привязан к GitHub; в настройках GitHub можно скрыть его в публичных коммитах). **Не коммитьте** этот файл с реальным адресом, если не хотите светить почту в истории репозитория.

Только для этого репозитория (без `--global`): выполните те же `git config user.name "..."` и `user.email "..."` внутри папки `github\adaptly`.

---

From this folder (`github/adaptly` in the monorepo, or after you copy it).  
**Скопируйте по одной строке** (без `PS>`), после того как `git --version` уже работает:

```powershell
Set-Location D:\myapp\ilyaemelianov.com\github\adaptly
git init
git branch -M main
git remote add origin https://github.com/ilyaemelian/adaptly.git
git add -A
git status
git commit -m "chore: initial public UI lab (MIT, docs, web/mvp)"
git push -u origin main
```

Если Git в PATH нет, но установлен в стандартное место, можно так (одна сессия):

```powershell
$env:Path = "C:\Program Files\Git\cmd;" + $env:Path
Set-Location D:\myapp\ilyaemelianov.com\github\adaptly
git --version
```

If the remote already has a README (e.g. GitHub default), either force-with-lease after backup or:

```bash
git pull origin main --allow-unrelated-histories
# resolve if needed, then
git push -u origin main
```

**Cadence for investors:** merge or push **2–3 small commits per week** (copy tweaks, one new screen, a11y, performance). Prefer conventional prefixes: `feat(web):`, `fix(ui):`, `docs:`.
