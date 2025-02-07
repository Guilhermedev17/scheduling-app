import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class WaitingList extends Model {
  public id!: number;
  public userId!: number;
  public preferredDate?: Date;
  public preferredTime?: string;
  public serviceType!: string;
  public priority!: number;
  public status!: 'waiting' | 'notified' | 'scheduled' | 'expired';
  public notes?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

WaitingList.init(
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
    preferredDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    preferredTime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM('waiting', 'notified', 'scheduled', 'expired'),
      allowNull: false,
      defaultValue: 'waiting',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'WaitingList',
    indexes: [
      {
        fields: ['userId'],
        name: 'waiting_list_user_idx',
      },
      {
        fields: ['status', 'priority'],
        name: 'waiting_list_status_priority_idx',
      },
    ],
  }
);

// Definindo relacionamentos
WaitingList.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(WaitingList, { foreignKey: 'userId' });

export default WaitingList;
