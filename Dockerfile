# Используем базовый образ с Node.js
FROM node:18-alpine3.18

# Установка рабочей директории внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Определяем команду для запуска приложения при старте контейнера
CMD ["npm", "run", "dev"]