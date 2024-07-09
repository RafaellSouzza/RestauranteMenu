# Restaurante React App

Este é um projeto de aplicação de restaurante desenvolvido com React e configurado para rodar dentro de contêineres Docker.

## Funcionalidades

- Visualização de pratos categorizados
- Adicionar pratos ao pedido
- Personalizar pratos
- Finalizar pedidos

## Estrutura do Projeto

- `src/`: Contém todo o código fonte do projeto.
  - `components/`: Componentes React utilizados na aplicação.
  - `App.js`: Componente principal da aplicação.
  - `mockData.js`: Dados mockados para categorias e pratos.
- `Dockerfile`: Definição do ambiente Docker para a aplicação.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para orquestração do contêiner.
- `iniciarApp.bat`: Script para construir e iniciar o projeto usando Docker Compose.
- `.dockerignore`: Arquivo para ignorar arquivos e diretórios durante o build da imagem Docker.

## Pré-requisitos

- Docker instalado na máquina
- Docker Compose instalado na máquina

## Como Iniciar o Projeto

### Clonar o Repositório

```sh
git clone https://github.com/seu-usuario/restaurante-react-app.git
cd restaurante-react-app
