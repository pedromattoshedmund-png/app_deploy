# Build simples e leve
FROM node:20-alpine

WORKDIR /app

# Instala dependências primeiro (melhor cache)
COPY package*.json ./
RUN npm ci --omit=dev

# Copia o resto
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
