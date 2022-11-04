type TupleToObject<T extends readonly (string | number)[]> = {
    [K in T[number]]:K
}

//typeof 输出的结果
const tuple = ['tesla', 'model 3', 'model X', 'model Y', 'a'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
const result1 = typeof tuple;       //const result1: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
const result2 = typeof tupleNumber; //const result2: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
const result3 = typeof tupleMix;    //const result3: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"


//结果校验  让key与value 互相对应
const result:TupleToObject<typeof tuple> = { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' ,'a' : 'a'};
