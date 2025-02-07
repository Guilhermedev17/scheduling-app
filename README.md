# Sistema de Agendamento Profissional

Sistema web de agendamento profissional inspirado no Masters Pro, desenvolvido com React, Node.js e PostgreSQL.

## Tecnologias

### Backend
- Node.js com TypeScript
- Express.js
- PostgreSQL + Sequelize ORM
- JWT para autenticação
- Twilio para notificações SMS/WhatsApp
- Nodemailer para e-mails
- Winston para logging

### Frontend
- React.js com Vite
- Redux Toolkit para gerenciamento de estado
- Tailwind CSS para estilização
- FullCalendar.js para calendário
- Axios para comunicação com API

### Infraestrutura
- Docker para containerização
- GitHub Actions para CI/CD (em breve)

## Instalação

### Pré-requisitos
- Node.js 20.x
- Docker e Docker Compose
- PostgreSQL (opcional, pode usar Docker)

### Configuração do Ambiente

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd scheduling-app
```

2. Instale as dependências do backend:
```bash
cd api
npm install
```

3. Instale as dependências do frontend:
```bash
cd ../client
npm install
```

4. Configure as variáveis de ambiente:
```bash
# Na pasta /api
cp .env.example .env
# Na pasta /client
cp .env.example .env
```

5. Inicie o banco de dados com Docker:
```bash
cd ../docker
docker-compose up -d
```

6. Execute as migrações do banco:
```bash
cd ../api
npm run db:migrate
```

## Executando o Projeto

1. Inicie o backend:
```bash
cd api
npm run dev
```

2. Inicie o frontend:
```bash
cd client
npm run dev
```

O frontend estará disponível em `http://localhost:5173` e o backend em `http://localhost:3000`.

## Estrutura do Projeto

```
/project-root
├── /client             # Frontend React
│   ├── /public
│   ├── /src
│   │   ├── /components # Componentes reutilizáveis
│   │   ├── /pages      # Páginas da aplicação
│   │   ├── /services   # Chamadas à API
│   │   ├── /store      # Gerenciamento de estado
│   │   └── /utils      # Funções auxiliares
│   └── package.json
├── /api                # Backend Express
│   ├── /src
│   │   ├── /controllers
│   │   ├── /models
│   │   ├── /routes
│   │   ├── /middlewares
│   │   └── /utils
│   └── package.json
├── /docker             # Configurações Docker
└── README.md
```

## Funcionalidades

- Sistema de Agendamentos
  - Calendário interativo
  - Gestão de horários
  - Confirmações automáticas

- Gestão de Clientes
  - Cadastro completo
  - Histórico de agendamentos
  - Preferências e notas

- Lista de Espera
  - Sistema automático de notificação
  - Priorização de clientes
  - Gestão de disponibilidade

- Sistema de Notificações
  - SMS/WhatsApp via Twilio
  - E-mails via Nodemailer
  - Lembretes automáticos

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
