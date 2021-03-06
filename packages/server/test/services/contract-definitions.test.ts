import { Paginated } from '@feathersjs/feathers';

import { buildFakeContractDefinition, ContractDefinition } from '@solid-explorer/types';

import { app } from '../../src';

describe('ContractDefinitions service', () => {

  beforeAll(async () => {
    const sequelise = app.get('sequelizeClient')

    await sequelise.sync({ force: true })
  })

  it('registered the service', () => {
    const service = app.service('contract-definitions');

    expect(service).toBeTruthy();
  });

  it('creates a contract definition', async () => {
    const sampleContractDefinition = buildFakeContractDefinition()

    const service = app.service('contract-definitions')

    const contractDefinition: ContractDefinition = await service.create(sampleContractDefinition) as ContractDefinition;

    expect(contractDefinition).toBeTruthy()

    const contractDefinitionFoundResult = await service.find({
      id: sampleContractDefinition.id
    }) as Paginated<ContractDefinition>

    expect(contractDefinitionFoundResult).toBeTruthy()

    const contractDefinitionFound: ContractDefinition = contractDefinitionFoundResult.data[0];

    expect(contractDefinitionFound.id).toBeGreaterThan(0)
    expect(contractDefinitionFound.id).toBeTruthy()
    expect(contractDefinitionFound.name).toEqual(sampleContractDefinition.name)
    expect(contractDefinitionFound.sourceCode).toEqual(sampleContractDefinition.sourceCode)
    expect(contractDefinitionFound.abi).toEqual(sampleContractDefinition.abi)
    expect(contractDefinitionFound.bytecode).toEqual(sampleContractDefinition.bytecode)
    expect(contractDefinitionFound.runtimeBycode).toEqual(sampleContractDefinition.runtimeBycode)
  });
});
