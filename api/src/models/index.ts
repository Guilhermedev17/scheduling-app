import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'scheduling_app',
  logging: false,
});

// User Model
const User = sequelize.define('User', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  password: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
});

// Appointment Model
const Appointment = sequelize.define('Appointment', {
  date: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },
  time: { 
    type: DataTypes.TIME, 
    allowNull: false 
  },
  duration: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  location: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  serviceType: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  notes: { 
    type: DataTypes.TEXT 
  },
  status: {
    type: DataTypes.ENUM('scheduled', 'completed', 'cancelled', 'waiting_list'),
    defaultValue: 'scheduled'
  }
});

// Waiting List Model
const WaitingList = sequelize.define('WaitingList', {
  // Add WaitingList model properties here
});

// Relationships
User.hasMany(Appointment);
Appointment.belongsTo(User);

export {
  User,
  Appointment,
  WaitingList
};
