#!/bin/bash

BACKEND_REPO="https://github.com/moxfest/moxfest"
BACKEND_DIR="backend"
BRANCH="main"  # или нужная ветка

if [ ! -d "$BACKEND_DIR" ]; then
  echo "🔄 Клонируем репозиторий бэкенда..."
  if git clone -b $BRANCH $BACKEND_REPO $BACKEND_DIR; then
    echo "✅ Бэкенд успешно склонирован"
    cd $BACKEND_DIR
    npm install
    cd ..
  else
    echo "❌ Ошибка при клонировании бэкенда" >&2
    exit 1
  fi
else
  echo "🔄 Обновляем существующий бэкенд..."
  cd $BACKEND_DIR

  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "❌ Директория $BACKEND_DIR не является git-репозиторием" >&2
    exit 1
  fi

  git stash save "Автосохранение перед обновлением"

  if git pull origin $BRANCH; then
    echo "✅ Бэкенд успешно обновлён"

    git stash pop

    if [ -f "package.json" ]; then
      echo "📦 Обновляем зависимости..."
      npm install
    fi
  else
    echo "❌ Ошибка при обновлении бэкенда" >&2
    git stash pop  # Восстанавливаем изменения даже при ошибке
    exit 1
  fi

  cd ..
fi

echo "✨ Операция с бэкендом завершена успешно!"