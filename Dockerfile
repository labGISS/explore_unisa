# Usa un'immagine Ubuntu come base
FROM debian:latest


# Aggiorna il repository degli apt e installa Node.js e npm
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y nodejs npm

# Imposta il work directory del contenitore
WORKDIR /app

# Copia il file package.json nella directory di lavoro del contenitore
COPY package.json .

# Esegui npm install per installare le dipendenze del progetto
RUN npm cache clean --force
RUN npm install

# Copia tutti i file del tuo progetto nella directory di lavoro del contenitore
COPY . .

# Espone la porta 3000 del contenitore
EXPOSE 3000

# Avvia l'applicazione
CMD ["npm", "start"]
