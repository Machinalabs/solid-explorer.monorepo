import { SequelizeServiceOptions, Service } from 'feathers-sequelize'

import { Transaction } from '@solid-explorer/types'

import { Application } from '../../declarations'

export class Transactions extends Service<Transaction> {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
  }
}
