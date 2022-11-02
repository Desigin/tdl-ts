import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
    Expect<NotAny<HelloWorld>>,  //断言`HelloWorld`不是一个any类型
    Expect<Equal<HelloWorld, string>>,//断言`HelloWorld`是一个string类型
]
