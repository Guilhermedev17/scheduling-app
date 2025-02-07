import express from 'express';
import { sequelize } from './models';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Scheduling API is running!' });
});

// Start server and sync database
async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();
