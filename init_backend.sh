#!/bin/bash

BACKEND_REPO="https://github.com/moxfest/moxfest"
BACKEND_DIR="backend"
BRANCH="main"

get_commit_info() {
    local target_dir=${1:-$BACKEND_DIR}
    if [ ! -d "$target_dir" ] || [ ! -d "$target_dir/.git" ]; then
        echo "❌ Директория $target_dir не существует или не является git-репозиторием" >&2
        return 1
    fi

    commit_hash=$(git -C "$target_dir" rev-parse --short HEAD 2>/dev/null)
    if [ $? -ne 0 ]; then
        echo "❌ Не удалось получить информацию о коммите" >&2
        return 1
    fi

    commit_date=$(git -C "$target_dir" log -1 --format="%cd" --date=short 2>/dev/null)
    commit_author=$(git -C "$target_dir" log -1 --format="%an" 2>/dev/null)
    commit_message=$(git -C "$target_dir" log -1 --format="%s" 2>/dev/null)

    echo "Текущий коммит: $commit_hash"
    echo "Дата: $commit_date"
    echo "Автор: $commit_author"
    echo "Сообщение: $commit_message"
}

if [ ! -d "$BACKEND_DIR" ]; then
  echo "🔄 Клонируем репозиторий бэкенда..."
  if git clone -b $BRANCH $BACKEND_REPO $BACKEND_DIR; then
    echo "✅ Бэкенд успешно склонирован"

    echo "📦 Устанавливаем зависимости..."
    (cd $BACKEND_DIR && npm install)

    echo ""
    get_commit_info "$BACKEND_DIR"
  else
    echo "❌ Ошибка при клонировании бэкенда" >&2
    exit 1
  fi
else
  echo "🔄 Обновляем существующий бэкенд..."

  echo "Текущее состояние до обновления:"
  get_commit_info "$BACKEND_DIR"
  echo ""

  if ! git -C "$BACKEND_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "❌ Директория $BACKEND_DIR не является git-репозиторием" >&2
    exit 1
  fi

  echo "💾 Сохраняем локальные изменения в stash..."
  git -C "$BACKEND_DIR" stash save "Автосохранение перед обновлением"

  echo "🔄 Получаем изменения из удалённого репозитория..."
  if git -C "$BACKEND_DIR" pull origin $BRANCH; then
    echo "✅ Бэкенд успешно обновлён"

    echo "↩️ Восстанавливаем изменения из stash..."
    git -C "$BACKEND_DIR" stash pop

    if [ -f "$BACKEND_DIR/package.json" ]; then
      if [ "$BACKEND_DIR/package.json" -nt "$BACKEND_DIR/node_modules" ]; then
        echo "📦 Обновляем зависимости..."
        (cd $BACKEND_DIR && npm install)
      else
        echo "🔒 Зависимости в актуальном состоянии"
      fi
    fi

    echo ""
    echo "Состояние после обновления:"
    get_commit_info "$BACKEND_DIR"
  else
    echo "❌ Ошибка при обновлении бэкенда" >&2
    echo "↩️ Восстанавливаем изменения из stash..."
    git -C "$BACKEND_DIR" stash pop

    echo ""
    echo "Текущее состояние:"
    get_commit_info "$BACKEND_DIR"
    echo "⚠️ Бэкенд не был обновлен, сохранена предыдущая версия"

    exit 1
  fi
fi

echo ""
echo "Даем права на бэк..."
sudo chmod -R 777 './backend'

echo ""
echo "✨ Операция с бэкендом завершена успешно!"