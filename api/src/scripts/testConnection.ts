import sequelize, { setupDatabase } from '../config/database';
import '../models';

async function testConnection() {
  try {
    console.log('Configurando banco de dados...');
    await setupDatabase();

    console.log('Tentando conectar ao banco de dados...');
    await sequelize.authenticate();
    console.log('✅ Conexão estabelecida com sucesso!');

    console.log('Sincronizando modelos...');
    await sequelize.sync({ force: true });
    console.log('✅ Todos os modelos foram sincronizados.');

    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:');
    console.error('Detalhes do erro:', error);
    process.exit(1);
  }
}

testConnection();
