# Projeto Restaurante React

Este projeto é uma aplicação web de um restaurante construída com React e Docker.

## Estrutura do Projeto

- `src/`: Diretório contendo o código-fonte da aplicação React.
- `public/`: Diretório contendo arquivos públicos.
- `Dockerfile`: Arquivo de configuração do Docker para criar a imagem da aplicação.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para orquestrar os serviços.
- `compose.yml`: Arquivo alternativo de configuração do Docker Compose.
- `.dockerignore`: Arquivo para excluir diretórios e arquivos desnecessários na imagem Docker.
- `iniciarApp.bat`: Script para verificar a instalação do Docker, instalar se necessário, e iniciar a aplicação.

## Pré-requisitos

- Docker
- Docker Compose

## Iniciando o Projeto

### Usando o Script iniciarApp.bat

1. **Verifique se o Docker está instalado:**
   O script `iniciarApp.bat` verifica automaticamente se o Docker está instalado. Se não estiver, ele fará o download e instalará o Docker.

2. **Para iniciar o projeto, siga os passos:**

   - Dê um duplo clique no arquivo `iniciarApp.bat` ou execute-o via linha de comando:
     ```batch
     iniciarApp.bat
     ```

   - O script irá:
     1. Verificar se o Docker está instalado.
     2. Instalar o Docker, se necessário.
     3. Verificar se o Docker Compose está instalado.
     4. Instalar o Docker Compose, se necessário.
     5. Construir e iniciar a aplicação usando o Docker Compose.

3. **Acesse a aplicação:**
   - A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Docker

### Dockerfile

O `Dockerfile` é usado para criar a imagem Docker da aplicação React. Ele contém as seguintes instruções:

```Dockerfile
# Use the official image as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "start"]
