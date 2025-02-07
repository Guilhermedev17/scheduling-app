import { Sequelize } from 'sequelize';

// Primeiro conectamos ao banco postgres para poder criar nosso banco
const setupDatabase = async () => {
  const tempSequelize = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    logging: console.log, // Corrigido para usar uma função
    dialectOptions: {
      connectTimeout: 60000 // aumentando o timeout para 1 minuto
    }
  });

  try {
    // Criando o banco de dados se não existir
    await tempSequelize.query('CREATE DATABASE scheduling_app;');
    console.log('✅ Banco de dados criado com sucesso!');
  } catch (error: any) {
    if (error.original?.code !== '42P04') { // Ignora erro se o banco já existe
      console.error('❌ Erro ao criar banco:', error);
    }
  } finally {
    await tempSequelize.close();
  }
};

// Configuração principal do Sequelize
const sequelize = new Sequelize('scheduling_app', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433,
  logging: console.log, // Corrigido para usar uma função
  dialectOptions: {
    connectTimeout: 60000 // aumentando o timeout para 1 minuto
  }
});

// Exporta tanto o setupDatabase quanto o sequelize
export { setupDatabase };
export default sequelize;
