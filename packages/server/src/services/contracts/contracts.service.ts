import { ServiceAddons } from '@feathersjs/feathers'

import { Application } from '../../declarations'
import createModel from '../../models/contracts.model'

import { Contracts } from './contracts.class'
import hooks from './contracts.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    contracts: Contracts & ServiceAddons<any>
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
  app.use('/contracts', new Contracts(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('contracts')

  service.hooks(hooks)
}
