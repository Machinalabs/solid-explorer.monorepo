import { SequelizeServiceOptions, Service } from 'feathers-sequelize'

import { Application } from '../../declarations'

export class Traces extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
  }
}
