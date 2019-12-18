import { StructLog, TransactionTrace } from './Trace'

const buildFakeLogs = (): StructLog[] => {
  return [
    {
      depth: 1,
      gas: 50087,
      gasCost: 3,
      memory: [],
      op: 'PUSH1',
      pc: 0,
      error: '',
      stack: [],
      storage: {}
    },
    {
      depth: 1,
      gas: 50084,
      gasCost: 3,
      memory: [],
      op: 'PUSH1',
      pc: 2,
      stack: ['0000000000000000000000000000000000000000000000000000000000000080'],
      storage: {}
    },
    {
      depth: 1,
      gas: 50081,
      gasCost: 12,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      op: 'MSTORE',
      pc: 4,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000080',
        '0000000000000000000000000000000000000000000000000000000000000040'
      ],
      storage: {}
    },
    {
      depth: 1,
      gas: 50069,
      gasCost: 2,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'CALLVALUE',
      pc: 5,
      stack: [],
      storage: {}
    },
    {
      depth: 1,
      gas: 50067,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'DUP1',
      pc: 6,
      stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
      storage: {}
    },
    {
      depth: 1,
      gas: 50064,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'ISZERO',
      pc: 7,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      storage: {}
    },
    {
      depth: 1,
      gas: 50061,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH1',
      pc: 8,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000001'
      ],
      storage: {}
    },
    {
      depth: 1,
      gas: 50058,
      gasCost: 10,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'JUMPI',
      pc: 10,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000001',
        '000000000000000000000000000000000000000000000000000000000000000f'
      ],
      storage: {}
    },
    {
      depth: 1,
      gas: 50048,
      gasCost: 1,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'JUMPDEST',
      pc: 15,
      stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
      storage: {}
    },
    {
      depth: 1,
      gas: 50047,
      gasCost: 2,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'POP',
      pc: 16,
      stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
      storage: {}
    },
    {
      depth: 1,
      gas: 50045,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH2',
      pc: 17,
      stack: [],
      storage: {}
    },
    {
      depth: 1,
      gas: 50042,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH1',
      pc: 20,
      stack: ['00000000000000000000000000000000000000000000000000000000000003e8'],
      storage: {}
    },
    {
      depth: 1,
      gas: 50039,
      gasCost: 20000,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'SSTORE',
      pc: 22,
      stack: [
        '00000000000000000000000000000000000000000000000000000000000003e8',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30039,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH1',
      pc: 23,
      stack: [],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30036,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'DUP1',
      pc: 25,
      stack: ['0000000000000000000000000000000000000000000000000000000000000096'],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30033,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH2',
      pc: 26,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000096'
      ],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30030,
      gasCost: 3,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080'
      ],
      op: 'PUSH1',
      pc: 29,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000024'
      ],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30027,
      gasCost: 24,
      memory: [
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000080',
        '0000000000000000000000000000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      op: 'CODECOPY',
      pc: 31,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000024',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30003,
      gasCost: 3,
      memory: [
        '6080604052348015600f57600080fd5b506004361060325760003560e01c8063',
        '1865c57d146037578063c19d93fb14604f575b600080fd5b603d6055565b6040',
        '8051918252519081900360200190f35b603d605b565b60005490565b60005481',
        '56fea265627a7a723058209fa44d2c74885e60715e4d845d6f360f80cbef23b8',
        '4d3804408903f946b90bbf64736f6c634300050a003200000000000000000000'
      ],
      op: 'PUSH1',
      pc: 32,
      stack: ['0000000000000000000000000000000000000000000000000000000000000096'],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    },
    {
      depth: 1,
      gas: 30000,
      gasCost: 0,
      memory: [
        '6080604052348015600f57600080fd5b506004361060325760003560e01c8063',
        '1865c57d146037578063c19d93fb14604f575b600080fd5b603d6055565b6040',
        '8051918252519081900360200190f35b603d605b565b60005490565b60005481',
        '56fea265627a7a723058209fa44d2c74885e60715e4d845d6f360f80cbef23b8',
        '4d3804408903f946b90bbf64736f6c634300050a003200000000000000000000'
      ],
      op: 'RETURN',
      pc: 34,
      stack: [
        '0000000000000000000000000000000000000000000000000000000000000096',
        '0000000000000000000000000000000000000000000000000000000000000000'
      ],
      storage: {
        '0000000000000000000000000000000000000000000000000000000000000000':
          '00000000000000000000000000000000000000000000000000000000000003e8'
      }
    }
  ]
}

export const buildFakeTrace = ({
  id = 1,
  transactionHash = '0xdf7f4433c421ab496a15066c14188b3e1973591cf539a9bd55009f108fddb668',
  connectionId = 1,
  gas = 114967,
  returnValue = '6080604052348015600f57600080fd5b506004361060325760003560e01c80631865c57d146037578063c19d93fb14604f575b600080fd5b603d6055565b60408051918252519081900360200190f35b603d605b565b60005490565b6000548156fea265627a7a723058209fa44d2c74885e60715e4d845d6f360f80cbef23b84d3804408903f946b90bbf64736f6c634300050a0032',
  structLogs = buildFakeLogs()
} = {}): TransactionTrace => ({
  id,
  transactionHash,
  connectionId,
  gas,
  returnValue,
  structLogs
})

export const buildFakeTraces = () => {
  return [
    buildFakeTrace(),
    buildFakeTrace({
      connectionId: 1,
      transactionHash: '0xffff4433c421ab496a15066c14188b3e1973591cf539a9bd55009f108fddb668',
      gas: 85293,
      returnValue: '',
      structLogs: [
        {
          depth: 0,
          error: '',
          gas: 56293,
          gasCost: 3,
          memory: [],
          op: 'PUSH1',
          pc: 0,
          stack: [],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56290,
          gasCost: 3,
          memory: [],
          op: 'PUSH1',
          pc: 2,
          stack: ['0000000000000000000000000000000000000000000000000000000000000080'],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56287,
          gasCost: 3,
          memory: [],
          op: 'MSTORE',
          pc: 4,
          stack: [
            '0000000000000000000000000000000000000000000000000000000000000080',
            '0000000000000000000000000000000000000000000000000000000000000040'
          ],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56275,
          gasCost: 12,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'CALLVALUE',
          pc: 5,
          stack: [],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56273,
          gasCost: 2,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'DUP1',
          pc: 6,
          stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56270,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'ISZERO',
          pc: 7,
          stack: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000'
          ],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56267,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH2',
          pc: 8,
          stack: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000001'
          ],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56264,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'JUMPI',
          pc: 11,
          stack: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000001',
            '0000000000000000000000000000000000000000000000000000000000000010'
          ],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56254,
          gasCost: 10,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'JUMPDEST',
          pc: 16,
          stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56253,
          gasCost: 1,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'POP',
          pc: 17,
          stack: ['0000000000000000000000000000000000000000000000000000000000000000'],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56251,
          gasCost: 2,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH2',
          pc: 18,
          stack: [],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56248,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH1',
          pc: 21,
          stack: ['00000000000000000000000000000000000000000000000000000000000003e8'],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 56245,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'SSTORE',
          pc: 23,
          stack: [
            '00000000000000000000000000000000000000000000000000000000000003e8',
            '0000000000000000000000000000000000000000000000000000000000000000'
          ],
          storage: {}
        },
        {
          depth: 0,
          error: '',
          gas: 36245,
          gasCost: 20000,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH1',
          pc: 24,
          stack: [],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36242,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'DUP1',
          pc: 26,
          stack: ['00000000000000000000000000000000000000000000000000000000000000b5'],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36239,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH2',
          pc: 27,
          stack: [
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '00000000000000000000000000000000000000000000000000000000000000b5'
          ],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36236,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'PUSH1',
          pc: 30,
          stack: [
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '0000000000000000000000000000000000000000000000000000000000000025'
          ],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36233,
          gasCost: 3,
          memory: [
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000080'
          ],
          op: 'CODECOPY',
          pc: 32,
          stack: [
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '0000000000000000000000000000000000000000000000000000000000000025',
            '0000000000000000000000000000000000000000000000000000000000000000'
          ],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36203,
          gasCost: 30,
          memory: [
            '6080604052600436106042577c01000000000000000000000000000000000000',
            '0000000000000000000060003504631865c57d81146047578063c19d93fb1460',
            '6b575b600080fd5b348015605257600080fd5b506059607d565b604080519182',
            '52519081900360200190f35b348015607657600080fd5b5060596083565b6000',
            '5490565b6000548156fea165627a7a72305820f8bf58cf08daf8dfbd0f2a9591',
            'f326c22da85eb03a62295163a88a9c4f1726d100290000000000000000000000'
          ],
          op: 'PUSH1',
          pc: 33,
          stack: ['00000000000000000000000000000000000000000000000000000000000000b5'],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        },
        {
          depth: 0,
          error: '',
          gas: 36200,
          gasCost: 3,
          memory: [
            '6080604052600436106042577c01000000000000000000000000000000000000',
            '0000000000000000000060003504631865c57d81146047578063c19d93fb1460',
            '6b575b600080fd5b348015605257600080fd5b506059607d565b604080519182',
            '52519081900360200190f35b348015607657600080fd5b5060596083565b6000',
            '5490565b6000548156fea165627a7a72305820f8bf58cf08daf8dfbd0f2a9591',
            'f326c22da85eb03a62295163a88a9c4f1726d100290000000000000000000000'
          ],
          op: 'RETURN',
          pc: 35,
          stack: [
            '00000000000000000000000000000000000000000000000000000000000000b5',
            '0000000000000000000000000000000000000000000000000000000000000000'
          ],
          storage: {
            '0000000000000000000000000000000000000000000000000000000000000000':
              '00000000000000000000000000000000000000000000000000000000000003e8'
          }
        }
      ]
    })
  ]
}
