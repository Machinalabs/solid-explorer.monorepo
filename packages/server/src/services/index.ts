import { Application } from '../declarations'
import blocks from './blocks/blocks.service'
import connections from './connections/connections.service'
import contractDefinitions from './contract-definitions/contract-definitions.service'
import contracts from './contracts/contracts.service'
import fileItems from './file-items/file-items.service'
import traces from './traces/traces.service'
import transactionReceipts from './transaction-receipts/transaction-receipts.service'
import transactions from './transactions/transactions.service'
// import compilerService from './compiler/compiler.service'
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
  app.configure(connections)
  app.configure(contractDefinitions)
  app.configure(contracts)
  app.configure(transactions)
  app.configure(blocks)
  app.configure(transactionReceipts)
  app.configure(traces)
  app.configure(fileItems)
  // app.configure(compilerService)
}
