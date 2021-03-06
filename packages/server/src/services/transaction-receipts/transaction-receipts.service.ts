import { ServiceAddons } from '@feathersjs/feathers'

import { Application } from '../../declarations'
import createModel from '../../models/transaction-receipts.model'

import { TransactionReceipts } from './transaction-receipts.class'
import hooks from './transaction-receipts.hooks'

declare module '../../declarations' {
  interface ServiceTypes {
    'transaction-receipts': TransactionReceipts & ServiceAddons<any>
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
  app.use('/transaction-receipts', new TransactionReceipts(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('transaction-receipts')

  service.hooks(hooks)
}
