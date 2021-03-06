import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

import { Contract } from '@solid-explorer/types'

import { Application } from '../declarations'

interface ContractModel extends Model, Contract {}

type ContractModelStatic = typeof Model & (new (values?: object, options?: BuildOptions) => ContractModel)

export default function(app: Application) {
  const sequelize: Sequelize = app.get('sequelizeClient')
  const { connections } = sequelize.models

  const contracts = sequelize.define(
    'contracts',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      sourceCode: {
        type: new DataTypes.STRING(10000),
        allowNull: false
      },
      abi: {
        type: new DataTypes.STRING(10000),
        allowNull: false
      },
      bytecode: {
        type: new DataTypes.STRING(10000),
        allowNull: false
      },
      runtimeBycode: {
        type: new DataTypes.STRING(10000),
        allowNull: false
      },
      address: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      // TODO restore connectionId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: connections,
      //     key: 'id'
      //   }
      // },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      lastExecutionDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      transactionCount: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options: any) {
          options.raw = true
        }
      }
      // TODO: DO I need this index? It has to be combined with connectionId
      // indexes: [{
      //   unique: true,
      //   fields: ['address']
      // }]
    }
  ) as ContractModelStatic

  contracts.belongsTo(connections, { onDelete: 'cascade' })

  return contracts
}
