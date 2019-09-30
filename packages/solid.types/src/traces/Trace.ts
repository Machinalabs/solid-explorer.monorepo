export interface TransactionTrace {
    gas: number;
    returnValue: any;
    structLogs: StructLog[];
}

export interface StructLog {
    depth: number;
    error: string;
    gas: number;
    gasCost: number;
    memory: string[];
    op: OpCode;
    pc: number;
    stack: string[];
    storage: {
        [location: string]: string;
    };
}

export declare enum OpCode {
    Stop = "STOP",
    Add = "ADD",
    Mul = "MUL",
    Sub = "SUB",
    Div = "DIV",
    SDiv = "SDIV",
    Mod = "MOD",
    SMod = "SMOD",
    AddMod = "ADDMOD",
    MulMod = "MULMOD",
    Exp = "EXP",
    SignExtend = "SIGNEXTEND",
    Lt = "LT",
    Gt = "GT",
    SLt = "SLT",
    SGt = "SGT",
    Eq = "EQ",
    IsZero = "ISZERO",
    And = "AND",
    Or = "OR",
    Xor = "XOR",
    Not = "NOT",
    Byte = "BYTE",
    Sha3 = "SHA3",
    Address = "ADDRESS",
    Balance = "BALANCE",
    Origin = "ORIGIN",
    Caller = "CALLER",
    CallValue = "CALLVALUE",
    CallDataLoad = "CALLDATALOAD",
    CallDataSize = "CALLDATASIZE",
    CallDataCopy = "CALLDATACOPY",
    CodeSize = "CODESIZE",
    CodeCopy = "CODECOPY",
    GasPrice = "GASPRICE",
    ExtCodeSize = "EXTCODESIZE",
    ExtCodeCopy = "EXTCODECOPY",
    ReturnDataSize = "RETURNDATASIZE",
    ReturnDataCopy = "RETURNDATACOPY",
    BlockHash = "BLOCKHASH",
    Coinbase = "COINBASE",
    TimeStamp = "TimeStamp",
    Number = "NUMBER",
    Difficulty = "DIFFICULTY",
    Gaslimit = "GASLIMIT",
    Pop = "POP",
    MLoad = "MLOAD",
    MStore = "MSTORE",
    MStore8 = "MSTORE8",
    SLoad = "SLOAD",
    SStore = "SSTORE",
    Jump = "JUMP",
    Jumpi = "JUMPI",
    Pc = "PC",
    MSize = "MSIZE",
    Gas = "GAS",
    JumpDest = "JUMPDEST",
    Push1 = "PUSH1",
    Push2 = "PUSH2",
    Push3 = "PUSH3",
    Push4 = "PUSH4",
    Push5 = "PUSH5",
    Push6 = "PUSH6",
    Push7 = "PUSH7",
    Push8 = "PUSH8",
    Push9 = "PUSH9",
    Push10 = "PUSH10",
    Push11 = "PUSH11",
    Push12 = "PUSH12",
    Push13 = "PUSH13",
    Push14 = "PUSH14",
    Push15 = "PUSH15",
    Push16 = "PUSH16",
    Push17 = "PUSH17",
    Push18 = "PUSH18",
    Push19 = "PUSH19",
    Push20 = "PUSH20",
    Push21 = "PUSH21",
    Push22 = "PUSH22",
    Push23 = "PUSH23",
    Push24 = "PUSH24",
    Push25 = "PUSH25",
    Push26 = "PUSH26",
    Push27 = "PUSH27",
    Push28 = "PUSH28",
    Push29 = "PUSH29",
    Push30 = "PUSH30",
    Push31 = "PUSH31",
    Push32 = "PUSH32",
    Dup1 = "DUP1",
    Dup2 = "DUP2",
    Dup3 = "DUP3",
    Dup4 = "DUP4",
    Dup5 = "DUP5",
    Dup6 = "DUP6",
    Dup7 = "DUP7",
    Dup8 = "DUP8",
    Dup9 = "DUP9",
    Dup10 = "DUP10",
    Dup11 = "DUP11",
    Dup12 = "DUP12",
    Dup13 = "DUP13",
    Dup14 = "DUP14",
    Dup15 = "DUP15",
    Dup16 = "DUP16",
    Swap1 = "SWAP1",
    Swap2 = "SWAP2",
    Swap3 = "SWAP3",
    Swap4 = "SWAP4",
    Swap5 = "SWAP5",
    Swap6 = "SWAP6",
    Swap7 = "SWAP7",
    Swap8 = "SWAP8",
    Swap9 = "SWAP9",
    Swap10 = "SWAP10",
    Swap11 = "SWAP11",
    Swap12 = "SWAP12",
    Swap13 = "SWAP13",
    Swap14 = "SWAP14",
    Swap15 = "SWAP15",
    Swap16 = "SWAP16",
    Log1 = "LOG1",
    Log2 = "LOG2",
    Log3 = "LOG3",
    Log4 = "LOG4",
    Create = "CREATE",
    Call = "CALL",
    CallCode = "CALLCODE",
    Return = "RETURN",
    DelegateCall = "DELEGATECALL",
    StaticCall = "STATICCALL",
    Revert = "REVERT",
    Invalid = "INVALID",
    SelfDestruct = "SELFDESTRUCT"
}