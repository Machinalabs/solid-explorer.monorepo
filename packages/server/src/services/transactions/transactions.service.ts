import { ServiceAddons } from '@feathersjs/feathers'

import { Application } from '../../declarations'
import createModel from '../../models/transactions.model'

import { Transactions } from './transactions.class'
import hooks from './transactions.hooks'

declare module '../../declarations' {
  interface ServiceTypes {
    transactions: Transactions & ServiceAddons<any>
  }
}

export default function(app: Application) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    Model,
    paginate,
    multi: true
  }

  // Initialize our service with any options it requires
  app.use('/transactions', new Transactions(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('transactions')

  service.hooks(hooks)
}
