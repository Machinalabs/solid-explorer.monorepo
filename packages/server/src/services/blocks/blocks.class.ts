import { SequelizeServiceOptions, Service } from 'feathers-sequelize'

import { Block } from '@solid-explorer/types'

import { Application } from '../../declarations'

export class Blocks extends Service<Block> {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
  }
}
