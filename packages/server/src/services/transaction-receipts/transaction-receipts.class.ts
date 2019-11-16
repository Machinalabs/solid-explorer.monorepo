import { SequelizeServiceOptions, Service } from 'feathers-sequelize'

import { TransactionReceipt } from '@solid-explorer/types'

import { Application } from '../../declarations'

export class TransactionReceipts extends Service<TransactionReceipt> {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
  }
}
