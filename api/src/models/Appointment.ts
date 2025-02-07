import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Appointment extends Model {
  public id!: number;
  public userId!: number;
  public date!: Date;
  public startTime!: string;
  public duration!: number;
  public serviceType!: string;
  public status!: 'scheduled' | 'confirmed' | 'cancelled' | 'completed';
  public notes?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER, // duração em minutos
      allowNull: false,
      defaultValue: 60,
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'confirmed', 'cancelled', 'completed'),
      allowNull: false,
      defaultValue: 'scheduled',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Appointment',
    indexes: [
      {
        fields: ['date', 'startTime'],
        name: 'appointment_date_time_idx',
      },
      {
        fields: ['userId'],
        name: 'appointment_user_idx',
      },
    ],
  }
);

// Definindo relacionamentos
Appointment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Appointment, { foreignKey: 'userId' });

export default Appointment;
