
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Customer: 'Customer',
    Contract: 'Contract',
    Transaction: 'Transaction',
    Maintenance: 'Maintenance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'vehicle' | 'customer' | 'contract' | 'transaction' | 'maintenance'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>,
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CustomerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CustomerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContractFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContractAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>,
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransactionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransactionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MaintenanceFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MaintenanceAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>,
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Vehicles: number
    Customers: number
    Contracts: number
    Maintenances: number
    Transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    Customers?: boolean | UserCountOutputTypeCountCustomersArgs
    Contracts?: boolean | UserCountOutputTypeCountContractsArgs
    Maintenances?: boolean | UserCountOutputTypeCountMaintenancesArgs
    Transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    Contracts: number
    Transactions: number
    Maintenances: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Contracts?: boolean | VehicleCountOutputTypeCountContractsArgs
    Transactions?: boolean | VehicleCountOutputTypeCountTransactionsArgs
    Maintenances?: boolean | VehicleCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Contracts: number
    Transactions: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Contracts?: boolean | CustomerCountOutputTypeCountContractsArgs
    Transactions?: boolean | CustomerCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    Transactions: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | ContractCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    username: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    username: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    username: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    username?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    username?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    username: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    username?: boolean
    email?: boolean
    Vehicles?: boolean | User$VehiclesArgs<ExtArgs>
    Customers?: boolean | User$CustomersArgs<ExtArgs>
    Contracts?: boolean | User$ContractsArgs<ExtArgs>
    Maintenances?: boolean | User$MaintenancesArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    username?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicles?: boolean | User$VehiclesArgs<ExtArgs>
    Customers?: boolean | User$CustomersArgs<ExtArgs>
    Contracts?: boolean | User$ContractsArgs<ExtArgs>
    Maintenances?: boolean | User$MaintenancesArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      Customers: Prisma.$CustomerPayload<ExtArgs>[]
      Contracts: Prisma.$ContractPayload<ExtArgs>[]
      Maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
      Transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      username: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Vehicles<T extends User$VehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$VehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    Customers<T extends User$CustomersArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

    Contracts<T extends User$ContractsArgs<ExtArgs> = {}>(args?: Subset<T, User$ContractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'> | Null>;

    Maintenances<T extends User$MaintenancesArgs<ExtArgs> = {}>(args?: Subset<T, User$MaintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findMany'> | Null>;

    Transactions<T extends User$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.Vehicles
   */
  export type User$VehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * User.Customers
   */
  export type User$CustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * User.Contracts
   */
  export type User$ContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * User.Maintenances
   */
  export type User$MaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }


  /**
   * User.Transactions
   */
  export type User$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    meter: number | null
    rentalCount: number | null
    manufactureYear: number | null
    extraHourPrice: number | null
    dailyRent: number | null
    weeklyRent: number | null
    monthlyRent: number | null
    extraKilometerPrice: number | null
    dailyKilometerLimit: number | null
  }

  export type VehicleSumAggregateOutputType = {
    meter: number | null
    rentalCount: number | null
    manufactureYear: number | null
    extraHourPrice: number | null
    dailyRent: number | null
    weeklyRent: number | null
    monthlyRent: number | null
    extraKilometerPrice: number | null
    dailyKilometerLimit: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    brand: string | null
    meter: number | null
    status: string | null
    rentalCount: number | null
    transmission: string | null
    manufactureYear: number | null
    color: string | null
    extraHourPrice: number | null
    dailyRent: number | null
    weeklyRent: number | null
    monthlyRent: number | null
    insuranceCompany: string | null
    registrationType: string | null
    fuelType: string | null
    extraKilometerPrice: number | null
    vehicleType: string | null
    dailyKilometerLimit: number | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    brand: string | null
    meter: number | null
    status: string | null
    rentalCount: number | null
    transmission: string | null
    manufactureYear: number | null
    color: string | null
    extraHourPrice: number | null
    dailyRent: number | null
    weeklyRent: number | null
    monthlyRent: number | null
    insuranceCompany: string | null
    registrationType: string | null
    fuelType: string | null
    extraKilometerPrice: number | null
    vehicleType: string | null
    dailyKilometerLimit: number | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    userId: number
    plateNumber: number
    brand: number
    meter: number
    status: number
    rentalCount: number
    transmission: number
    manufactureYear: number
    color: number
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany: number
    registrationType: number
    fuelType: number
    extraKilometerPrice: number
    vehicleType: number
    dailyKilometerLimit: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    meter?: true
    rentalCount?: true
    manufactureYear?: true
    extraHourPrice?: true
    dailyRent?: true
    weeklyRent?: true
    monthlyRent?: true
    extraKilometerPrice?: true
    dailyKilometerLimit?: true
  }

  export type VehicleSumAggregateInputType = {
    meter?: true
    rentalCount?: true
    manufactureYear?: true
    extraHourPrice?: true
    dailyRent?: true
    weeklyRent?: true
    monthlyRent?: true
    extraKilometerPrice?: true
    dailyKilometerLimit?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    brand?: true
    meter?: true
    status?: true
    rentalCount?: true
    transmission?: true
    manufactureYear?: true
    color?: true
    extraHourPrice?: true
    dailyRent?: true
    weeklyRent?: true
    monthlyRent?: true
    insuranceCompany?: true
    registrationType?: true
    fuelType?: true
    extraKilometerPrice?: true
    vehicleType?: true
    dailyKilometerLimit?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    brand?: true
    meter?: true
    status?: true
    rentalCount?: true
    transmission?: true
    manufactureYear?: true
    color?: true
    extraHourPrice?: true
    dailyRent?: true
    weeklyRent?: true
    monthlyRent?: true
    insuranceCompany?: true
    registrationType?: true
    fuelType?: true
    extraKilometerPrice?: true
    vehicleType?: true
    dailyKilometerLimit?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    brand?: true
    meter?: true
    status?: true
    rentalCount?: true
    transmission?: true
    manufactureYear?: true
    color?: true
    extraHourPrice?: true
    dailyRent?: true
    weeklyRent?: true
    monthlyRent?: true
    insuranceCompany?: true
    registrationType?: true
    fuelType?: true
    extraKilometerPrice?: true
    vehicleType?: true
    dailyKilometerLimit?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    userId: string | null
    plateNumber: string
    brand: string
    meter: number
    status: string
    rentalCount: number | null
    transmission: string
    manufactureYear: number | null
    color: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany: string | null
    registrationType: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType: string | null
    dailyKilometerLimit: number
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    brand?: boolean
    meter?: boolean
    status?: boolean
    rentalCount?: boolean
    transmission?: boolean
    manufactureYear?: boolean
    color?: boolean
    extraHourPrice?: boolean
    dailyRent?: boolean
    weeklyRent?: boolean
    monthlyRent?: boolean
    insuranceCompany?: boolean
    registrationType?: boolean
    fuelType?: boolean
    extraKilometerPrice?: boolean
    vehicleType?: boolean
    dailyKilometerLimit?: boolean
    user?: boolean | Vehicle$userArgs<ExtArgs>
    Contracts?: boolean | Vehicle$ContractsArgs<ExtArgs>
    Transactions?: boolean | Vehicle$TransactionsArgs<ExtArgs>
    Maintenances?: boolean | Vehicle$MaintenancesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    brand?: boolean
    meter?: boolean
    status?: boolean
    rentalCount?: boolean
    transmission?: boolean
    manufactureYear?: boolean
    color?: boolean
    extraHourPrice?: boolean
    dailyRent?: boolean
    weeklyRent?: boolean
    monthlyRent?: boolean
    insuranceCompany?: boolean
    registrationType?: boolean
    fuelType?: boolean
    extraKilometerPrice?: boolean
    vehicleType?: boolean
    dailyKilometerLimit?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Vehicle$userArgs<ExtArgs>
    Contracts?: boolean | Vehicle$ContractsArgs<ExtArgs>
    Transactions?: boolean | Vehicle$TransactionsArgs<ExtArgs>
    Maintenances?: boolean | Vehicle$MaintenancesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      Contracts: Prisma.$ContractPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionPayload<ExtArgs>[]
      Maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      plateNumber: string
      brand: string
      meter: number
      status: string
      rentalCount: number | null
      transmission: string
      manufactureYear: number | null
      color: string | null
      extraHourPrice: number
      dailyRent: number
      weeklyRent: number
      monthlyRent: number
      insuranceCompany: string | null
      registrationType: string | null
      fuelType: string
      extraKilometerPrice: number
      vehicleType: string | null
      dailyKilometerLimit: number
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }


  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
    **/
    create<T extends VehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vehicles.
     *     @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
    **/
    delete<T extends VehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * @param {VehicleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VehicleFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vehicle.
     * @param {VehicleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VehicleAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Vehicle$userArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Contracts<T extends Vehicle$ContractsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$ContractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'> | Null>;

    Transactions<T extends Vehicle$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Maintenances<T extends Vehicle$MaintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$MaintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly userId: FieldRef<"Vehicle", 'String'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly meter: FieldRef<"Vehicle", 'Float'>
    readonly status: FieldRef<"Vehicle", 'String'>
    readonly rentalCount: FieldRef<"Vehicle", 'Int'>
    readonly transmission: FieldRef<"Vehicle", 'String'>
    readonly manufactureYear: FieldRef<"Vehicle", 'Float'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly extraHourPrice: FieldRef<"Vehicle", 'Float'>
    readonly dailyRent: FieldRef<"Vehicle", 'Float'>
    readonly weeklyRent: FieldRef<"Vehicle", 'Float'>
    readonly monthlyRent: FieldRef<"Vehicle", 'Float'>
    readonly insuranceCompany: FieldRef<"Vehicle", 'String'>
    readonly registrationType: FieldRef<"Vehicle", 'String'>
    readonly fuelType: FieldRef<"Vehicle", 'String'>
    readonly extraKilometerPrice: FieldRef<"Vehicle", 'Float'>
    readonly vehicleType: FieldRef<"Vehicle", 'String'>
    readonly dailyKilometerLimit: FieldRef<"Vehicle", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }


  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }


  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }


  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle findRaw
   */
  export type VehicleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Vehicle aggregateRaw
   */
  export type VehicleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Vehicle.user
   */
  export type Vehicle$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Vehicle.Contracts
   */
  export type Vehicle$ContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Vehicle.Transactions
   */
  export type Vehicle$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Vehicle.Maintenances
   */
  export type Vehicle$MaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }


  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
  }



  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    debt: number | null
  }

  export type CustomerSumAggregateOutputType = {
    debt: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    customerName: string | null
    category: string | null
    nationality: string | null
    idNumber: string | null
    idExpirationDate: string | null
    mobile: string | null
    debt: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    customerName: string | null
    category: string | null
    nationality: string | null
    idNumber: string | null
    idExpirationDate: string | null
    mobile: string | null
    debt: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    customerName: number
    category: number
    nationality: number
    idNumber: number
    idExpirationDate: number
    mobile: number
    debt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    debt?: true
  }

  export type CustomerSumAggregateInputType = {
    debt?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    customerName?: true
    category?: true
    nationality?: true
    idNumber?: true
    idExpirationDate?: true
    mobile?: true
    debt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    customerName?: true
    category?: true
    nationality?: true
    idNumber?: true
    idExpirationDate?: true
    mobile?: true
    debt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    customerName?: true
    category?: true
    nationality?: true
    idNumber?: true
    idExpirationDate?: true
    mobile?: true
    debt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate: string | null
    mobile: string | null
    debt: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerName?: boolean
    category?: boolean
    nationality?: boolean
    idNumber?: boolean
    idExpirationDate?: boolean
    mobile?: boolean
    debt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Contracts?: boolean | Customer$ContractsArgs<ExtArgs>
    Transactions?: boolean | Customer$TransactionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    customerName?: boolean
    category?: boolean
    nationality?: boolean
    idNumber?: boolean
    idExpirationDate?: boolean
    mobile?: boolean
    debt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Contracts?: boolean | Customer$ContractsArgs<ExtArgs>
    Transactions?: boolean | Customer$TransactionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Contracts: Prisma.$ContractPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      customerName: string
      category: string
      nationality: string
      idNumber: string
      idExpirationDate: string | null
      mobile: string | null
      debt: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * @param {CustomerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customer = await prisma.customer.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CustomerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Customer.
     * @param {CustomerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customer = await prisma.customer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CustomerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Contracts<T extends Customer$ContractsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ContractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'> | Null>;

    Transactions<T extends Customer$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly category: FieldRef<"Customer", 'String'>
    readonly nationality: FieldRef<"Customer", 'String'>
    readonly idNumber: FieldRef<"Customer", 'String'>
    readonly idExpirationDate: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly debt: FieldRef<"Customer", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer findRaw
   */
  export type CustomerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Customer aggregateRaw
   */
  export type CustomerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Customer.Contracts
   */
  export type Customer$ContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Customer.Transactions
   */
  export type Customer$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    total: number | null
    paid: number | null
    remainingDues: number | null
    meterReadingOut: number | null
    meterReadingIn: number | null
    dailyRent: number | null
    days: number | null
  }

  export type ContractSumAggregateOutputType = {
    total: number | null
    paid: number | null
    remainingDues: number | null
    meterReadingOut: number | null
    meterReadingIn: number | null
    dailyRent: number | null
    days: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    total: number | null
    paid: number | null
    remainingDues: number | null
    meterReadingOut: number | null
    meterReadingIn: number | null
    timeOut: string | null
    dailyRent: number | null
    days: number | null
    timeIn: string | null
    dateOut: string | null
    returnedDate: string | null
    returnStatus: string | null
    earlyReturnFee: string | null
    lateReturnFee: string | null
    invoiceDetails: string | null
    customerId: string | null
    transacionId: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    total: number | null
    paid: number | null
    remainingDues: number | null
    meterReadingOut: number | null
    meterReadingIn: number | null
    timeOut: string | null
    dailyRent: number | null
    days: number | null
    timeIn: string | null
    dateOut: string | null
    returnedDate: string | null
    returnStatus: string | null
    earlyReturnFee: string | null
    lateReturnFee: string | null
    invoiceDetails: string | null
    customerId: string | null
    transacionId: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    userId: number
    plateNumber: number
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn: number
    timeOut: number
    dailyRent: number
    days: number
    timeIn: number
    dateOut: number
    returnedDate: number
    returnStatus: number
    earlyReturnFee: number
    lateReturnFee: number
    invoiceDetails: number
    customerId: number
    transacionId: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    total?: true
    paid?: true
    remainingDues?: true
    meterReadingOut?: true
    meterReadingIn?: true
    dailyRent?: true
    days?: true
  }

  export type ContractSumAggregateInputType = {
    total?: true
    paid?: true
    remainingDues?: true
    meterReadingOut?: true
    meterReadingIn?: true
    dailyRent?: true
    days?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    total?: true
    paid?: true
    remainingDues?: true
    meterReadingOut?: true
    meterReadingIn?: true
    timeOut?: true
    dailyRent?: true
    days?: true
    timeIn?: true
    dateOut?: true
    returnedDate?: true
    returnStatus?: true
    earlyReturnFee?: true
    lateReturnFee?: true
    invoiceDetails?: true
    customerId?: true
    transacionId?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    total?: true
    paid?: true
    remainingDues?: true
    meterReadingOut?: true
    meterReadingIn?: true
    timeOut?: true
    dailyRent?: true
    days?: true
    timeIn?: true
    dateOut?: true
    returnedDate?: true
    returnStatus?: true
    earlyReturnFee?: true
    lateReturnFee?: true
    invoiceDetails?: true
    customerId?: true
    transacionId?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    total?: true
    paid?: true
    remainingDues?: true
    meterReadingOut?: true
    meterReadingIn?: true
    timeOut?: true
    dailyRent?: true
    days?: true
    timeIn?: true
    dateOut?: true
    returnedDate?: true
    returnStatus?: true
    earlyReturnFee?: true
    lateReturnFee?: true
    invoiceDetails?: true
    customerId?: true
    transacionId?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus: string | null
    earlyReturnFee: string | null
    lateReturnFee: string | null
    invoiceDetails: string | null
    customerId: string
    transacionId: string | null
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    total?: boolean
    paid?: boolean
    remainingDues?: boolean
    meterReadingOut?: boolean
    meterReadingIn?: boolean
    timeOut?: boolean
    dailyRent?: boolean
    days?: boolean
    timeIn?: boolean
    dateOut?: boolean
    returnedDate?: boolean
    returnStatus?: boolean
    earlyReturnFee?: boolean
    lateReturnFee?: boolean
    invoiceDetails?: boolean
    customerId?: boolean
    transacionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Transactions?: boolean | Contract$TransactionsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    total?: boolean
    paid?: boolean
    remainingDues?: boolean
    meterReadingOut?: boolean
    meterReadingIn?: boolean
    timeOut?: boolean
    dailyRent?: boolean
    days?: boolean
    timeIn?: boolean
    dateOut?: boolean
    returnedDate?: boolean
    returnStatus?: boolean
    earlyReturnFee?: boolean
    lateReturnFee?: boolean
    invoiceDetails?: boolean
    customerId?: boolean
    transacionId?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Transactions?: boolean | Contract$TransactionsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      Transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plateNumber: string
      total: number
      paid: number
      remainingDues: number
      meterReadingOut: number
      meterReadingIn: number | null
      timeOut: string
      dailyRent: number
      days: number
      timeIn: string
      dateOut: string
      returnedDate: string
      returnStatus: string | null
      earlyReturnFee: string | null
      lateReturnFee: string | null
      invoiceDetails: string | null
      customerId: string
      transacionId: string | null
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }


  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
    **/
    create<T extends ContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractCreateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contracts.
     *     @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
    **/
    delete<T extends ContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
    **/
    upsert<T extends ContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * @param {ContractFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contract = await prisma.contract.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ContractFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contract.
     * @param {ContractAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contract = await prisma.contract.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ContractAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Transactions<T extends Contract$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly userId: FieldRef<"Contract", 'String'>
    readonly plateNumber: FieldRef<"Contract", 'String'>
    readonly total: FieldRef<"Contract", 'Float'>
    readonly paid: FieldRef<"Contract", 'Float'>
    readonly remainingDues: FieldRef<"Contract", 'Float'>
    readonly meterReadingOut: FieldRef<"Contract", 'Float'>
    readonly meterReadingIn: FieldRef<"Contract", 'Float'>
    readonly timeOut: FieldRef<"Contract", 'String'>
    readonly dailyRent: FieldRef<"Contract", 'Float'>
    readonly days: FieldRef<"Contract", 'Float'>
    readonly timeIn: FieldRef<"Contract", 'String'>
    readonly dateOut: FieldRef<"Contract", 'String'>
    readonly returnedDate: FieldRef<"Contract", 'String'>
    readonly returnStatus: FieldRef<"Contract", 'String'>
    readonly earlyReturnFee: FieldRef<"Contract", 'String'>
    readonly lateReturnFee: FieldRef<"Contract", 'String'>
    readonly invoiceDetails: FieldRef<"Contract", 'String'>
    readonly customerId: FieldRef<"Contract", 'String'>
    readonly transacionId: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }


  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
  }


  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }


  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }


  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }


  /**
   * Contract findRaw
   */
  export type ContractFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Contract aggregateRaw
   */
  export type ContractAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Contract.Transactions
   */
  export type Contract$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
  }



  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: string | null
    plateNumber: string | null
    createdAt: Date | null
    contractId: string | null
    customerId: string | null
    maintenanceId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: string | null
    plateNumber: string | null
    createdAt: Date | null
    contractId: string | null
    customerId: string | null
    maintenanceId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    plateNumber: number
    createdAt: number
    contractId: number
    customerId: number
    maintenanceId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    plateNumber?: true
    createdAt?: true
    contractId?: true
    customerId?: true
    maintenanceId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    plateNumber?: true
    createdAt?: true
    contractId?: true
    customerId?: true
    maintenanceId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    plateNumber?: true
    createdAt?: true
    contractId?: true
    customerId?: true
    maintenanceId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt: Date
    contractId: string | null
    customerId: string | null
    maintenanceId: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    plateNumber?: boolean
    createdAt?: boolean
    contractId?: boolean
    customerId?: boolean
    maintenanceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contract?: boolean | Transaction$contractArgs<ExtArgs>
    customer?: boolean | Transaction$customerArgs<ExtArgs>
    Maintenance?: boolean | Transaction$MaintenanceArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    plateNumber?: boolean
    createdAt?: boolean
    contractId?: boolean
    customerId?: boolean
    maintenanceId?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contract?: boolean | Transaction$contractArgs<ExtArgs>
    customer?: boolean | Transaction$customerArgs<ExtArgs>
    Maintenance?: boolean | Transaction$MaintenanceArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      Maintenance: Prisma.$MaintenancePayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      type: string
      plateNumber: string
      createdAt: Date
      contractId: string | null
      customerId: string | null
      maintenanceId: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * @param {TransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transaction = await prisma.transaction.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TransactionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transaction.
     * @param {TransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transaction = await prisma.transaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TransactionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    contract<T extends Transaction$contractArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    customer<T extends Transaction$customerArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Maintenance<T extends Transaction$MaintenanceArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$MaintenanceArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly plateNumber: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly contractId: FieldRef<"Transaction", 'String'>
    readonly customerId: FieldRef<"Transaction", 'String'>
    readonly maintenanceId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction findRaw
   */
  export type TransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Transaction aggregateRaw
   */
  export type TransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Transaction.contract
   */
  export type Transaction$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }


  /**
   * Transaction.customer
   */
  export type Transaction$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }


  /**
   * Transaction.Maintenance
   */
  export type Transaction$MaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    maintenanceType: string | null
    client: string | null
    date: string | null
    cost: number | null
    description: string | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    maintenanceType: string | null
    client: string | null
    date: string | null
    cost: number | null
    description: string | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    userId: number
    plateNumber: number
    maintenanceType: number
    client: number
    date: number
    cost: number
    description: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    cost?: true
  }

  export type MaintenanceSumAggregateInputType = {
    cost?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    maintenanceType?: true
    client?: true
    date?: true
    cost?: true
    description?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    maintenanceType?: true
    client?: true
    date?: true
    cost?: true
    description?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    maintenanceType?: true
    client?: true
    date?: true
    cost?: true
    description?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    userId: string
    plateNumber: string
    maintenanceType: string
    client: string | null
    date: string
    cost: number
    description: string | null
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    maintenanceType?: boolean
    client?: boolean
    date?: boolean
    cost?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    transaction?: boolean | Maintenance$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    maintenanceType?: boolean
    client?: boolean
    date?: boolean
    cost?: boolean
    description?: boolean
  }

  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    transaction?: boolean | Maintenance$transactionArgs<ExtArgs>
  }


  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plateNumber: string
      maintenanceType: string
      client: string | null
      date: string
      cost: number
      description: string | null
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }


  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MaintenanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Maintenance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MaintenanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MaintenanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
    **/
    create<T extends MaintenanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Maintenances.
     *     @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     *     @example
     *     // Create many Maintenances
     *     const maintenance = await prisma.maintenance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MaintenanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
    **/
    delete<T extends MaintenanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MaintenanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MaintenanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MaintenanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
    **/
    upsert<T extends MaintenanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>
    ): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Maintenances that matches the filter.
     * @param {MaintenanceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const maintenance = await prisma.maintenance.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MaintenanceFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Maintenance.
     * @param {MaintenanceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const maintenance = await prisma.maintenance.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MaintenanceAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaction<T extends Maintenance$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Maintenance model
   */ 
  interface MaintenanceFieldRefs {
    readonly id: FieldRef<"Maintenance", 'String'>
    readonly userId: FieldRef<"Maintenance", 'String'>
    readonly plateNumber: FieldRef<"Maintenance", 'String'>
    readonly maintenanceType: FieldRef<"Maintenance", 'String'>
    readonly client: FieldRef<"Maintenance", 'String'>
    readonly date: FieldRef<"Maintenance", 'String'>
    readonly cost: FieldRef<"Maintenance", 'Float'>
    readonly description: FieldRef<"Maintenance", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }


  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }


  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }


  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }


  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }


  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }


  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
  }


  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }


  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
  }


  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }


  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }


  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
  }


  /**
   * Maintenance findRaw
   */
  export type MaintenanceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Maintenance aggregateRaw
   */
  export type MaintenanceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Maintenance.transaction
   */
  export type Maintenance$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }


  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaintenanceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    username: 'username',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plateNumber: 'plateNumber',
    brand: 'brand',
    meter: 'meter',
    status: 'status',
    rentalCount: 'rentalCount',
    transmission: 'transmission',
    manufactureYear: 'manufactureYear',
    color: 'color',
    extraHourPrice: 'extraHourPrice',
    dailyRent: 'dailyRent',
    weeklyRent: 'weeklyRent',
    monthlyRent: 'monthlyRent',
    insuranceCompany: 'insuranceCompany',
    registrationType: 'registrationType',
    fuelType: 'fuelType',
    extraKilometerPrice: 'extraKilometerPrice',
    vehicleType: 'vehicleType',
    dailyKilometerLimit: 'dailyKilometerLimit'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerName: 'customerName',
    category: 'category',
    nationality: 'nationality',
    idNumber: 'idNumber',
    idExpirationDate: 'idExpirationDate',
    mobile: 'mobile',
    debt: 'debt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plateNumber: 'plateNumber',
    total: 'total',
    paid: 'paid',
    remainingDues: 'remainingDues',
    meterReadingOut: 'meterReadingOut',
    meterReadingIn: 'meterReadingIn',
    timeOut: 'timeOut',
    dailyRent: 'dailyRent',
    days: 'days',
    timeIn: 'timeIn',
    dateOut: 'dateOut',
    returnedDate: 'returnedDate',
    returnStatus: 'returnStatus',
    earlyReturnFee: 'earlyReturnFee',
    lateReturnFee: 'lateReturnFee',
    invoiceDetails: 'invoiceDetails',
    customerId: 'customerId',
    transacionId: 'transacionId'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    plateNumber: 'plateNumber',
    createdAt: 'createdAt',
    contractId: 'contractId',
    customerId: 'customerId',
    maintenanceId: 'maintenanceId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plateNumber: 'plateNumber',
    maintenanceType: 'maintenanceType',
    client: 'client',
    date: 'date',
    cost: 'cost',
    description: 'description'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    Vehicles?: VehicleListRelationFilter
    Customers?: CustomerListRelationFilter
    Contracts?: ContractListRelationFilter
    Maintenances?: MaintenanceListRelationFilter
    Transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    Vehicles?: VehicleOrderByRelationAggregateInput
    Customers?: CustomerOrderByRelationAggregateInput
    Contracts?: ContractOrderByRelationAggregateInput
    Maintenances?: MaintenanceOrderByRelationAggregateInput
    Transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    Vehicles?: VehicleListRelationFilter
    Customers?: CustomerListRelationFilter
    Contracts?: ContractListRelationFilter
    Maintenances?: MaintenanceListRelationFilter
    Transactions?: TransactionListRelationFilter
  }, "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringNullableFilter<"Vehicle"> | string | null
    plateNumber?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    meter?: FloatFilter<"Vehicle"> | number
    status?: StringFilter<"Vehicle"> | string
    rentalCount?: IntNullableFilter<"Vehicle"> | number | null
    transmission?: StringFilter<"Vehicle"> | string
    manufactureYear?: FloatNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    extraHourPrice?: FloatFilter<"Vehicle"> | number
    dailyRent?: FloatFilter<"Vehicle"> | number
    weeklyRent?: FloatFilter<"Vehicle"> | number
    monthlyRent?: FloatFilter<"Vehicle"> | number
    insuranceCompany?: StringNullableFilter<"Vehicle"> | string | null
    registrationType?: StringNullableFilter<"Vehicle"> | string | null
    fuelType?: StringFilter<"Vehicle"> | string
    extraKilometerPrice?: FloatFilter<"Vehicle"> | number
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    dailyKilometerLimit?: FloatFilter<"Vehicle"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Contracts?: ContractListRelationFilter
    Transactions?: TransactionListRelationFilter
    Maintenances?: MaintenanceListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    meter?: SortOrder
    status?: SortOrder
    rentalCount?: SortOrder
    transmission?: SortOrder
    manufactureYear?: SortOrder
    color?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    insuranceCompany?: SortOrder
    registrationType?: SortOrder
    fuelType?: SortOrder
    extraKilometerPrice?: SortOrder
    vehicleType?: SortOrder
    dailyKilometerLimit?: SortOrder
    user?: UserOrderByWithRelationInput
    Contracts?: ContractOrderByRelationAggregateInput
    Transactions?: TransactionOrderByRelationAggregateInput
    Maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    userId?: StringNullableFilter<"Vehicle"> | string | null
    brand?: StringFilter<"Vehicle"> | string
    meter?: FloatFilter<"Vehicle"> | number
    status?: StringFilter<"Vehicle"> | string
    rentalCount?: IntNullableFilter<"Vehicle"> | number | null
    transmission?: StringFilter<"Vehicle"> | string
    manufactureYear?: FloatNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    extraHourPrice?: FloatFilter<"Vehicle"> | number
    dailyRent?: FloatFilter<"Vehicle"> | number
    weeklyRent?: FloatFilter<"Vehicle"> | number
    monthlyRent?: FloatFilter<"Vehicle"> | number
    insuranceCompany?: StringNullableFilter<"Vehicle"> | string | null
    registrationType?: StringNullableFilter<"Vehicle"> | string | null
    fuelType?: StringFilter<"Vehicle"> | string
    extraKilometerPrice?: FloatFilter<"Vehicle"> | number
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    dailyKilometerLimit?: FloatFilter<"Vehicle"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Contracts?: ContractListRelationFilter
    Transactions?: TransactionListRelationFilter
    Maintenances?: MaintenanceListRelationFilter
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    meter?: SortOrder
    status?: SortOrder
    rentalCount?: SortOrder
    transmission?: SortOrder
    manufactureYear?: SortOrder
    color?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    insuranceCompany?: SortOrder
    registrationType?: SortOrder
    fuelType?: SortOrder
    extraKilometerPrice?: SortOrder
    vehicleType?: SortOrder
    dailyKilometerLimit?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    userId?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    meter?: FloatWithAggregatesFilter<"Vehicle"> | number
    status?: StringWithAggregatesFilter<"Vehicle"> | string
    rentalCount?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    transmission?: StringWithAggregatesFilter<"Vehicle"> | string
    manufactureYear?: FloatNullableWithAggregatesFilter<"Vehicle"> | number | null
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    extraHourPrice?: FloatWithAggregatesFilter<"Vehicle"> | number
    dailyRent?: FloatWithAggregatesFilter<"Vehicle"> | number
    weeklyRent?: FloatWithAggregatesFilter<"Vehicle"> | number
    monthlyRent?: FloatWithAggregatesFilter<"Vehicle"> | number
    insuranceCompany?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    registrationType?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    fuelType?: StringWithAggregatesFilter<"Vehicle"> | string
    extraKilometerPrice?: FloatWithAggregatesFilter<"Vehicle"> | number
    vehicleType?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    dailyKilometerLimit?: FloatWithAggregatesFilter<"Vehicle"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    category?: StringFilter<"Customer"> | string
    nationality?: StringFilter<"Customer"> | string
    idNumber?: StringFilter<"Customer"> | string
    idExpirationDate?: StringNullableFilter<"Customer"> | string | null
    mobile?: StringNullableFilter<"Customer"> | string | null
    debt?: FloatNullableFilter<"Customer"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    Contracts?: ContractListRelationFilter
    Transactions?: TransactionListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerName?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idNumber?: SortOrder
    idExpirationDate?: SortOrder
    mobile?: SortOrder
    debt?: SortOrder
    user?: UserOrderByWithRelationInput
    Contracts?: ContractOrderByRelationAggregateInput
    Transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    userId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    category?: StringFilter<"Customer"> | string
    nationality?: StringFilter<"Customer"> | string
    idNumber?: StringFilter<"Customer"> | string
    idExpirationDate?: StringNullableFilter<"Customer"> | string | null
    mobile?: StringNullableFilter<"Customer"> | string | null
    debt?: FloatNullableFilter<"Customer"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    Contracts?: ContractListRelationFilter
    Transactions?: TransactionListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerName?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idNumber?: SortOrder
    idExpirationDate?: SortOrder
    mobile?: SortOrder
    debt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringWithAggregatesFilter<"Customer"> | string
    customerName?: StringWithAggregatesFilter<"Customer"> | string
    category?: StringWithAggregatesFilter<"Customer"> | string
    nationality?: StringWithAggregatesFilter<"Customer"> | string
    idNumber?: StringWithAggregatesFilter<"Customer"> | string
    idExpirationDate?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    debt?: FloatNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    userId?: StringFilter<"Contract"> | string
    plateNumber?: StringFilter<"Contract"> | string
    total?: FloatFilter<"Contract"> | number
    paid?: FloatFilter<"Contract"> | number
    remainingDues?: FloatFilter<"Contract"> | number
    meterReadingOut?: FloatFilter<"Contract"> | number
    meterReadingIn?: FloatNullableFilter<"Contract"> | number | null
    timeOut?: StringFilter<"Contract"> | string
    dailyRent?: FloatFilter<"Contract"> | number
    days?: FloatFilter<"Contract"> | number
    timeIn?: StringFilter<"Contract"> | string
    dateOut?: StringFilter<"Contract"> | string
    returnedDate?: StringFilter<"Contract"> | string
    returnStatus?: StringNullableFilter<"Contract"> | string | null
    earlyReturnFee?: StringNullableFilter<"Contract"> | string | null
    lateReturnFee?: StringNullableFilter<"Contract"> | string | null
    invoiceDetails?: StringNullableFilter<"Contract"> | string | null
    customerId?: StringFilter<"Contract"> | string
    transacionId?: StringNullableFilter<"Contract"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    Transactions?: TransactionListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    timeOut?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
    timeIn?: SortOrder
    dateOut?: SortOrder
    returnedDate?: SortOrder
    returnStatus?: SortOrder
    earlyReturnFee?: SortOrder
    lateReturnFee?: SortOrder
    invoiceDetails?: SortOrder
    customerId?: SortOrder
    transacionId?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    Transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    userId?: StringFilter<"Contract"> | string
    total?: FloatFilter<"Contract"> | number
    paid?: FloatFilter<"Contract"> | number
    remainingDues?: FloatFilter<"Contract"> | number
    meterReadingOut?: FloatFilter<"Contract"> | number
    meterReadingIn?: FloatNullableFilter<"Contract"> | number | null
    timeOut?: StringFilter<"Contract"> | string
    dailyRent?: FloatFilter<"Contract"> | number
    days?: FloatFilter<"Contract"> | number
    timeIn?: StringFilter<"Contract"> | string
    dateOut?: StringFilter<"Contract"> | string
    returnedDate?: StringFilter<"Contract"> | string
    returnStatus?: StringNullableFilter<"Contract"> | string | null
    earlyReturnFee?: StringNullableFilter<"Contract"> | string | null
    lateReturnFee?: StringNullableFilter<"Contract"> | string | null
    invoiceDetails?: StringNullableFilter<"Contract"> | string | null
    customerId?: StringFilter<"Contract"> | string
    transacionId?: StringNullableFilter<"Contract"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    Transactions?: TransactionListRelationFilter
  }, "id" | "plateNumber">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    timeOut?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
    timeIn?: SortOrder
    dateOut?: SortOrder
    returnedDate?: SortOrder
    returnStatus?: SortOrder
    earlyReturnFee?: SortOrder
    lateReturnFee?: SortOrder
    invoiceDetails?: SortOrder
    customerId?: SortOrder
    transacionId?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    userId?: StringWithAggregatesFilter<"Contract"> | string
    plateNumber?: StringWithAggregatesFilter<"Contract"> | string
    total?: FloatWithAggregatesFilter<"Contract"> | number
    paid?: FloatWithAggregatesFilter<"Contract"> | number
    remainingDues?: FloatWithAggregatesFilter<"Contract"> | number
    meterReadingOut?: FloatWithAggregatesFilter<"Contract"> | number
    meterReadingIn?: FloatNullableWithAggregatesFilter<"Contract"> | number | null
    timeOut?: StringWithAggregatesFilter<"Contract"> | string
    dailyRent?: FloatWithAggregatesFilter<"Contract"> | number
    days?: FloatWithAggregatesFilter<"Contract"> | number
    timeIn?: StringWithAggregatesFilter<"Contract"> | string
    dateOut?: StringWithAggregatesFilter<"Contract"> | string
    returnedDate?: StringWithAggregatesFilter<"Contract"> | string
    returnStatus?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    earlyReturnFee?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    lateReturnFee?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    invoiceDetails?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    customerId?: StringWithAggregatesFilter<"Contract"> | string
    transacionId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    plateNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    contractId?: StringNullableFilter<"Transaction"> | string | null
    customerId?: StringNullableFilter<"Transaction"> | string | null
    maintenanceId?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    Maintenance?: XOR<MaintenanceNullableRelationFilter, MaintenanceWhereInput> | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    plateNumber?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    customerId?: SortOrder
    maintenanceId?: SortOrder
    user?: UserOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    Maintenance?: MaintenanceOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    maintenanceId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    plateNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    contractId?: StringNullableFilter<"Transaction"> | string | null
    customerId?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    Maintenance?: XOR<MaintenanceNullableRelationFilter, MaintenanceWhereInput> | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }, "id" | "maintenanceId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    plateNumber?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    customerId?: SortOrder
    maintenanceId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    type?: StringWithAggregatesFilter<"Transaction"> | string
    plateNumber?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    contractId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    maintenanceId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    userId?: StringFilter<"Maintenance"> | string
    plateNumber?: StringFilter<"Maintenance"> | string
    maintenanceType?: StringFilter<"Maintenance"> | string
    client?: StringNullableFilter<"Maintenance"> | string | null
    date?: StringFilter<"Maintenance"> | string
    cost?: FloatFilter<"Maintenance"> | number
    description?: StringNullableFilter<"Maintenance"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }

  export type MaintenanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    maintenanceType?: SortOrder
    client?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    description?: SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    userId?: StringFilter<"Maintenance"> | string
    plateNumber?: StringFilter<"Maintenance"> | string
    maintenanceType?: StringFilter<"Maintenance"> | string
    client?: StringNullableFilter<"Maintenance"> | string | null
    date?: StringFilter<"Maintenance"> | string
    cost?: FloatFilter<"Maintenance"> | number
    description?: StringNullableFilter<"Maintenance"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type MaintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    maintenanceType?: SortOrder
    client?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    description?: SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _avg?: MaintenanceAvgOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
    _sum?: MaintenanceSumOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Maintenance"> | string
    userId?: StringWithAggregatesFilter<"Maintenance"> | string
    plateNumber?: StringWithAggregatesFilter<"Maintenance"> | string
    maintenanceType?: StringWithAggregatesFilter<"Maintenance"> | string
    client?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    date?: StringWithAggregatesFilter<"Maintenance"> | string
    cost?: FloatWithAggregatesFilter<"Maintenance"> | number
    description?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Contracts?: ContractCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Contracts?: ContractUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    user?: UserCreateNestedOneWithoutVehiclesInput
    Contracts?: ContractCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    userId?: string | null
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Contracts?: ContractUncheckedCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutVehiclesNestedInput
    Contracts?: ContractUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Contracts?: ContractUncheckedUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    userId?: string | null
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
  }

  export type VehicleUpdateManyMutationInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
  }

  export type VehicleUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    user: UserCreateNestedOneWithoutCustomersInput
    Contracts?: ContractCreateNestedManyWithoutCustomerInput
    Transactions?: TransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    Contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    Contracts?: ContractUpdateManyWithoutCustomerNestedInput
    Transactions?: TransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    Contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContractCreateInput = {
    id?: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    user: UserCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    vehicle: VehicleCreateNestedOneWithoutContractsInput
    Transactions?: TransactionCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
    Transactions?: TransactionUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutContractsNestedInput
    Transactions?: TransactionUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
  }

  export type ContractUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    contract?: ContractCreateNestedOneWithoutTransactionsInput
    customer?: CustomerCreateNestedOneWithoutTransactionsInput
    Maintenance?: MaintenanceCreateNestedOneWithoutTransactionInput
    vehicle: VehicleCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    contract?: ContractUpdateOneWithoutTransactionsNestedInput
    customer?: CustomerUpdateOneWithoutTransactionsNestedInput
    Maintenance?: MaintenanceUpdateOneWithoutTransactionNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateInput = {
    id?: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    user: UserCreateNestedOneWithoutMaintenancesInput
    vehicle: VehicleCreateNestedOneWithoutMaintenancesInput
    transaction?: TransactionCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateInput = {
    id?: string
    userId: string
    plateNumber: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUpdateInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenancesNestedInput
    transaction?: TransactionUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction?: TransactionUncheckedUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceCreateManyInput = {
    id?: string
    userId: string
    plateNumber: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
  }

  export type MaintenanceUpdateManyMutationInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    meter?: SortOrder
    status?: SortOrder
    rentalCount?: SortOrder
    transmission?: SortOrder
    manufactureYear?: SortOrder
    color?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    insuranceCompany?: SortOrder
    registrationType?: SortOrder
    fuelType?: SortOrder
    extraKilometerPrice?: SortOrder
    vehicleType?: SortOrder
    dailyKilometerLimit?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    meter?: SortOrder
    rentalCount?: SortOrder
    manufactureYear?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    extraKilometerPrice?: SortOrder
    dailyKilometerLimit?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    meter?: SortOrder
    status?: SortOrder
    rentalCount?: SortOrder
    transmission?: SortOrder
    manufactureYear?: SortOrder
    color?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    insuranceCompany?: SortOrder
    registrationType?: SortOrder
    fuelType?: SortOrder
    extraKilometerPrice?: SortOrder
    vehicleType?: SortOrder
    dailyKilometerLimit?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    brand?: SortOrder
    meter?: SortOrder
    status?: SortOrder
    rentalCount?: SortOrder
    transmission?: SortOrder
    manufactureYear?: SortOrder
    color?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    insuranceCompany?: SortOrder
    registrationType?: SortOrder
    fuelType?: SortOrder
    extraKilometerPrice?: SortOrder
    vehicleType?: SortOrder
    dailyKilometerLimit?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    meter?: SortOrder
    rentalCount?: SortOrder
    manufactureYear?: SortOrder
    extraHourPrice?: SortOrder
    dailyRent?: SortOrder
    weeklyRent?: SortOrder
    monthlyRent?: SortOrder
    extraKilometerPrice?: SortOrder
    dailyKilometerLimit?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerName?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idNumber?: SortOrder
    idExpirationDate?: SortOrder
    mobile?: SortOrder
    debt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    debt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerName?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idNumber?: SortOrder
    idExpirationDate?: SortOrder
    mobile?: SortOrder
    debt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerName?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idNumber?: SortOrder
    idExpirationDate?: SortOrder
    mobile?: SortOrder
    debt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    debt?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    timeOut?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
    timeIn?: SortOrder
    dateOut?: SortOrder
    returnedDate?: SortOrder
    returnStatus?: SortOrder
    earlyReturnFee?: SortOrder
    lateReturnFee?: SortOrder
    invoiceDetails?: SortOrder
    customerId?: SortOrder
    transacionId?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    timeOut?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
    timeIn?: SortOrder
    dateOut?: SortOrder
    returnedDate?: SortOrder
    returnStatus?: SortOrder
    earlyReturnFee?: SortOrder
    lateReturnFee?: SortOrder
    invoiceDetails?: SortOrder
    customerId?: SortOrder
    transacionId?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    timeOut?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
    timeIn?: SortOrder
    dateOut?: SortOrder
    returnedDate?: SortOrder
    returnStatus?: SortOrder
    earlyReturnFee?: SortOrder
    lateReturnFee?: SortOrder
    invoiceDetails?: SortOrder
    customerId?: SortOrder
    transacionId?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    total?: SortOrder
    paid?: SortOrder
    remainingDues?: SortOrder
    meterReadingOut?: SortOrder
    meterReadingIn?: SortOrder
    dailyRent?: SortOrder
    days?: SortOrder
  }

  export type ContractNullableRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type MaintenanceNullableRelationFilter = {
    is?: MaintenanceWhereInput | null
    isNot?: MaintenanceWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    plateNumber?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    customerId?: SortOrder
    maintenanceId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    plateNumber?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    customerId?: SortOrder
    maintenanceId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    plateNumber?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    customerId?: SortOrder
    maintenanceId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionNullableRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type MaintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    maintenanceType?: SortOrder
    client?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    description?: SortOrder
  }

  export type MaintenanceAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    maintenanceType?: SortOrder
    client?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    description?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    maintenanceType?: SortOrder
    client?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    description?: SortOrder
  }

  export type MaintenanceSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutUserInput | MaintenanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutUserInput | MaintenanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutUserInput | MaintenanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput> | MaintenanceCreateWithoutUserInput[] | MaintenanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput | MaintenanceCreateOrConnectWithoutUserInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutUserInput | MaintenanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenanceCreateManyUserInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutUserInput | MaintenanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutUserInput | MaintenanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput> | ContractCreateWithoutVehicleInput[] | ContractUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutVehicleInput | ContractCreateOrConnectWithoutVehicleInput[]
    createMany?: ContractCreateManyVehicleInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput> | TransactionCreateWithoutVehicleInput[] | TransactionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVehicleInput | TransactionCreateOrConnectWithoutVehicleInput[]
    createMany?: TransactionCreateManyVehicleInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput> | ContractCreateWithoutVehicleInput[] | ContractUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutVehicleInput | ContractCreateOrConnectWithoutVehicleInput[]
    createMany?: ContractCreateManyVehicleInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput> | TransactionCreateWithoutVehicleInput[] | TransactionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVehicleInput | TransactionCreateOrConnectWithoutVehicleInput[]
    createMany?: TransactionCreateManyVehicleInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type ContractUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput> | ContractCreateWithoutVehicleInput[] | ContractUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutVehicleInput | ContractCreateOrConnectWithoutVehicleInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutVehicleInput | ContractUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ContractCreateManyVehicleInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutVehicleInput | ContractUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutVehicleInput | ContractUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput> | TransactionCreateWithoutVehicleInput[] | TransactionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVehicleInput | TransactionCreateOrConnectWithoutVehicleInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVehicleInput | TransactionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TransactionCreateManyVehicleInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVehicleInput | TransactionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVehicleInput | TransactionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutVehicleInput | MaintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput> | ContractCreateWithoutVehicleInput[] | ContractUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutVehicleInput | ContractCreateOrConnectWithoutVehicleInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutVehicleInput | ContractUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ContractCreateManyVehicleInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutVehicleInput | ContractUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutVehicleInput | ContractUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput> | TransactionCreateWithoutVehicleInput[] | TransactionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVehicleInput | TransactionCreateOrConnectWithoutVehicleInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVehicleInput | TransactionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TransactionCreateManyVehicleInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVehicleInput | TransactionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVehicleInput | TransactionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutVehicleInput | MaintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomersInput, UserUpdateWithoutCustomersInput>, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type ContractUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCustomerInput | TransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCustomerInput | TransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCustomerInput | TransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCustomerInput | TransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCustomerInput | TransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCustomerInput | TransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContractsInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutContractsInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    connect?: CustomerWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutContractsInput = {
    create?: XOR<VehicleCreateWithoutContractsInput, VehicleUncheckedCreateWithoutContractsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutContractsInput
    connect?: VehicleWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutContractInput = {
    create?: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput> | TransactionCreateWithoutContractInput[] | TransactionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContractInput | TransactionCreateOrConnectWithoutContractInput[]
    createMany?: TransactionCreateManyContractInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput> | TransactionCreateWithoutContractInput[] | TransactionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContractInput | TransactionCreateOrConnectWithoutContractInput[]
    createMany?: TransactionCreateManyContractInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    upsert?: UserUpsertWithoutContractsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractsInput, UserUpdateWithoutContractsInput>, UserUncheckedUpdateWithoutContractsInput>
  }

  export type CustomerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    upsert?: CustomerUpsertWithoutContractsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContractsInput, CustomerUpdateWithoutContractsInput>, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type VehicleUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<VehicleCreateWithoutContractsInput, VehicleUncheckedCreateWithoutContractsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutContractsInput
    upsert?: VehicleUpsertWithoutContractsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutContractsInput, VehicleUpdateWithoutContractsInput>, VehicleUncheckedUpdateWithoutContractsInput>
  }

  export type TransactionUpdateManyWithoutContractNestedInput = {
    create?: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput> | TransactionCreateWithoutContractInput[] | TransactionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContractInput | TransactionCreateOrConnectWithoutContractInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutContractInput | TransactionUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: TransactionCreateManyContractInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutContractInput | TransactionUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutContractInput | TransactionUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput> | TransactionCreateWithoutContractInput[] | TransactionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContractInput | TransactionCreateOrConnectWithoutContractInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutContractInput | TransactionUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: TransactionCreateManyContractInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutContractInput | TransactionUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutContractInput | TransactionUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ContractCreateWithoutTransactionsInput, ContractUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutTransactionsInput
    connect?: ContractWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MaintenanceCreateNestedOneWithoutTransactionInput = {
    create?: XOR<MaintenanceCreateWithoutTransactionInput, MaintenanceUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutTransactionInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<VehicleCreateWithoutTransactionsInput, VehicleUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTransactionsInput
    connect?: VehicleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type ContractUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ContractCreateWithoutTransactionsInput, ContractUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutTransactionsInput
    upsert?: ContractUpsertWithoutTransactionsInput
    disconnect?: boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutTransactionsInput, ContractUpdateWithoutTransactionsInput>, ContractUncheckedUpdateWithoutTransactionsInput>
  }

  export type CustomerUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionsInput
    upsert?: CustomerUpsertWithoutTransactionsInput
    disconnect?: boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTransactionsInput, CustomerUpdateWithoutTransactionsInput>, CustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type MaintenanceUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<MaintenanceCreateWithoutTransactionInput, MaintenanceUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutTransactionInput
    upsert?: MaintenanceUpsertWithoutTransactionInput
    disconnect?: boolean
    delete?: MaintenanceWhereInput | boolean
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutTransactionInput, MaintenanceUpdateWithoutTransactionInput>, MaintenanceUncheckedUpdateWithoutTransactionInput>
  }

  export type VehicleUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<VehicleCreateWithoutTransactionsInput, VehicleUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTransactionsInput
    upsert?: VehicleUpsertWithoutTransactionsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTransactionsInput, VehicleUpdateWithoutTransactionsInput>, VehicleUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenancesInput
    connect?: VehicleWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMaintenanceInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMaintenanceInput
    connect?: TransactionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    upsert?: UserUpsertWithoutMaintenancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenancesInput, UserUpdateWithoutMaintenancesInput>, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type VehicleUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenancesInput
    upsert?: VehicleUpsertWithoutMaintenancesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenancesInput, VehicleUpdateWithoutMaintenancesInput>, VehicleUncheckedUpdateWithoutMaintenancesInput>
  }

  export type TransactionUpdateOneWithoutMaintenanceNestedInput = {
    create?: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMaintenanceInput
    upsert?: TransactionUpsertWithoutMaintenanceInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutMaintenanceInput, TransactionUpdateWithoutMaintenanceInput>, TransactionUncheckedUpdateWithoutMaintenanceInput>
  }

  export type TransactionUncheckedUpdateOneWithoutMaintenanceNestedInput = {
    create?: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMaintenanceInput
    upsert?: TransactionUpsertWithoutMaintenanceInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutMaintenanceInput, TransactionUpdateWithoutMaintenanceInput>, TransactionUncheckedUpdateWithoutMaintenanceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type VehicleCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Contracts?: ContractCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Contracts?: ContractUncheckedCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    Contracts?: ContractCreateNestedManyWithoutCustomerInput
    Transactions?: TransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    Contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
  }

  export type ContractCreateWithoutUserInput = {
    id?: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    customer: CustomerCreateNestedOneWithoutContractsInput
    vehicle: VehicleCreateNestedOneWithoutContractsInput
    Transactions?: TransactionCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
    Transactions?: TransactionUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutUserInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateManyUserInputEnvelope = {
    data: ContractCreateManyUserInput | ContractCreateManyUserInput[]
  }

  export type MaintenanceCreateWithoutUserInput = {
    id?: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    vehicle: VehicleCreateNestedOneWithoutMaintenancesInput
    transaction?: TransactionCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceCreateOrConnectWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput>
  }

  export type MaintenanceCreateManyUserInputEnvelope = {
    data: MaintenanceCreateManyUserInput | MaintenanceCreateManyUserInput[]
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    contract?: ContractCreateNestedOneWithoutTransactionsInput
    customer?: CustomerCreateNestedOneWithoutTransactionsInput
    Maintenance?: MaintenanceCreateNestedOneWithoutTransactionInput
    vehicle: VehicleCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringNullableFilter<"Vehicle"> | string | null
    plateNumber?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    meter?: FloatFilter<"Vehicle"> | number
    status?: StringFilter<"Vehicle"> | string
    rentalCount?: IntNullableFilter<"Vehicle"> | number | null
    transmission?: StringFilter<"Vehicle"> | string
    manufactureYear?: FloatNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    extraHourPrice?: FloatFilter<"Vehicle"> | number
    dailyRent?: FloatFilter<"Vehicle"> | number
    weeklyRent?: FloatFilter<"Vehicle"> | number
    monthlyRent?: FloatFilter<"Vehicle"> | number
    insuranceCompany?: StringNullableFilter<"Vehicle"> | string | null
    registrationType?: StringNullableFilter<"Vehicle"> | string | null
    fuelType?: StringFilter<"Vehicle"> | string
    extraKilometerPrice?: FloatFilter<"Vehicle"> | number
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    dailyKilometerLimit?: FloatFilter<"Vehicle"> | number
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    category?: StringFilter<"Customer"> | string
    nationality?: StringFilter<"Customer"> | string
    idNumber?: StringFilter<"Customer"> | string
    idExpirationDate?: StringNullableFilter<"Customer"> | string | null
    mobile?: StringNullableFilter<"Customer"> | string | null
    debt?: FloatNullableFilter<"Customer"> | number | null
  }

  export type ContractUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithWhereWithoutUserInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutUserInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    userId?: StringFilter<"Contract"> | string
    plateNumber?: StringFilter<"Contract"> | string
    total?: FloatFilter<"Contract"> | number
    paid?: FloatFilter<"Contract"> | number
    remainingDues?: FloatFilter<"Contract"> | number
    meterReadingOut?: FloatFilter<"Contract"> | number
    meterReadingIn?: FloatNullableFilter<"Contract"> | number | null
    timeOut?: StringFilter<"Contract"> | string
    dailyRent?: FloatFilter<"Contract"> | number
    days?: FloatFilter<"Contract"> | number
    timeIn?: StringFilter<"Contract"> | string
    dateOut?: StringFilter<"Contract"> | string
    returnedDate?: StringFilter<"Contract"> | string
    returnStatus?: StringNullableFilter<"Contract"> | string | null
    earlyReturnFee?: StringNullableFilter<"Contract"> | string | null
    lateReturnFee?: StringNullableFilter<"Contract"> | string | null
    invoiceDetails?: StringNullableFilter<"Contract"> | string | null
    customerId?: StringFilter<"Contract"> | string
    transacionId?: StringNullableFilter<"Contract"> | string | null
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutUserInput, MaintenanceUncheckedUpdateWithoutUserInput>
    create: XOR<MaintenanceCreateWithoutUserInput, MaintenanceUncheckedCreateWithoutUserInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutUserInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutUserInput, MaintenanceUncheckedUpdateWithoutUserInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutUserInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutUserInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    userId?: StringFilter<"Maintenance"> | string
    plateNumber?: StringFilter<"Maintenance"> | string
    maintenanceType?: StringFilter<"Maintenance"> | string
    client?: StringNullableFilter<"Maintenance"> | string | null
    date?: StringFilter<"Maintenance"> | string
    cost?: FloatFilter<"Maintenance"> | number
    description?: StringNullableFilter<"Maintenance"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    plateNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    contractId?: StringNullableFilter<"Transaction"> | string | null
    customerId?: StringNullableFilter<"Transaction"> | string | null
    maintenanceId?: StringNullableFilter<"Transaction"> | string | null
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Contracts?: ContractCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type ContractCreateWithoutVehicleInput = {
    id?: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    user: UserCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    Transactions?: TransactionCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
    Transactions?: TransactionUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutVehicleInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput>
  }

  export type ContractCreateManyVehicleInputEnvelope = {
    data: ContractCreateManyVehicleInput | ContractCreateManyVehicleInput[]
  }

  export type TransactionCreateWithoutVehicleInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    contract?: ContractCreateNestedOneWithoutTransactionsInput
    customer?: CustomerCreateNestedOneWithoutTransactionsInput
    Maintenance?: MaintenanceCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    amount: number
    type: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionCreateOrConnectWithoutVehicleInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput>
  }

  export type TransactionCreateManyVehicleInputEnvelope = {
    data: TransactionCreateManyVehicleInput | TransactionCreateManyVehicleInput[]
  }

  export type MaintenanceCreateWithoutVehicleInput = {
    id?: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    user: UserCreateNestedOneWithoutMaintenancesInput
    transaction?: TransactionCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceCreateManyVehicleInputEnvelope = {
    data: MaintenanceCreateManyVehicleInput | MaintenanceCreateManyVehicleInput[]
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Contracts?: ContractUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutVehicleInput, ContractUncheckedUpdateWithoutVehicleInput>
    create: XOR<ContractCreateWithoutVehicleInput, ContractUncheckedCreateWithoutVehicleInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutVehicleInput, ContractUncheckedUpdateWithoutVehicleInput>
  }

  export type ContractUpdateManyWithWhereWithoutVehicleInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutVehicleInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVehicleInput, TransactionUncheckedUpdateWithoutVehicleInput>
    create: XOR<TransactionCreateWithoutVehicleInput, TransactionUncheckedCreateWithoutVehicleInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVehicleInput, TransactionUncheckedUpdateWithoutVehicleInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVehicleInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutVehicleInput, MaintenanceUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutVehicleInput, MaintenanceUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutVehicleInput>
  }

  export type UserCreateWithoutCustomersInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleCreateNestedManyWithoutUserInput
    Contracts?: ContractCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    Contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type ContractCreateWithoutCustomerInput = {
    id?: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    user: UserCreateNestedOneWithoutContractsInput
    vehicle: VehicleCreateNestedOneWithoutContractsInput
    Transactions?: TransactionCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    Transactions?: TransactionUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractCreateManyCustomerInputEnvelope = {
    data: ContractCreateManyCustomerInput | ContractCreateManyCustomerInput[]
  }

  export type TransactionCreateWithoutCustomerInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    contract?: ContractCreateNestedOneWithoutTransactionsInput
    Maintenance?: MaintenanceCreateNestedOneWithoutTransactionInput
    vehicle: VehicleCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionCreateOrConnectWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionCreateManyCustomerInputEnvelope = {
    data: TransactionCreateManyCustomerInput | TransactionCreateManyCustomerInput[]
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUpdateManyWithoutUserNestedInput
    Contracts?: ContractUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    Contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
  }

  export type ContractUpdateManyWithWhereWithoutCustomerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCustomerInput, TransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCustomerInput, TransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserCreateWithoutContractsInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractsInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
  }

  export type CustomerCreateWithoutContractsInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    user: UserCreateNestedOneWithoutCustomersInput
    Transactions?: TransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutContractsInput = {
    id?: string
    userId: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    Transactions?: TransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutContractsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
  }

  export type VehicleCreateWithoutContractsInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    user?: UserCreateNestedOneWithoutVehiclesInput
    Transactions?: TransactionCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutContractsInput = {
    id?: string
    userId?: string | null
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Transactions?: TransactionUncheckedCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutContractsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutContractsInput, VehicleUncheckedCreateWithoutContractsInput>
  }

  export type TransactionCreateWithoutContractInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    customer?: CustomerCreateNestedOneWithoutTransactionsInput
    Maintenance?: MaintenanceCreateNestedOneWithoutTransactionInput
    vehicle: VehicleCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutContractInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionCreateOrConnectWithoutContractInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput>
  }

  export type TransactionCreateManyContractInputEnvelope = {
    data: TransactionCreateManyContractInput | TransactionCreateManyContractInput[]
  }

  export type UserUpsertWithoutContractsInput = {
    update: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateWithoutContractsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutContractsInput = {
    update: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContractsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type CustomerUpdateWithoutContractsInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    Transactions?: TransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContractsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    Transactions?: TransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type VehicleUpsertWithoutContractsInput = {
    update: XOR<VehicleUpdateWithoutContractsInput, VehicleUncheckedUpdateWithoutContractsInput>
    create: XOR<VehicleCreateWithoutContractsInput, VehicleUncheckedCreateWithoutContractsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutContractsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutContractsInput, VehicleUncheckedUpdateWithoutContractsInput>
  }

  export type VehicleUpdateWithoutContractsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutVehiclesNestedInput
    Transactions?: TransactionUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutContractsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Transactions?: TransactionUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutContractInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutContractInput, TransactionUncheckedUpdateWithoutContractInput>
    create: XOR<TransactionCreateWithoutContractInput, TransactionUncheckedCreateWithoutContractInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutContractInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutContractInput, TransactionUncheckedUpdateWithoutContractInput>
  }

  export type TransactionUpdateManyWithWhereWithoutContractInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutContractInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Contracts?: ContractCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type ContractCreateWithoutTransactionsInput = {
    id?: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
    user: UserCreateNestedOneWithoutContractsInput
    customer: CustomerCreateNestedOneWithoutContractsInput
    vehicle: VehicleCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
  }

  export type ContractCreateOrConnectWithoutTransactionsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutTransactionsInput, ContractUncheckedCreateWithoutTransactionsInput>
  }

  export type CustomerCreateWithoutTransactionsInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    user: UserCreateNestedOneWithoutCustomersInput
    Contracts?: ContractCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
    Contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTransactionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
  }

  export type MaintenanceCreateWithoutTransactionInput = {
    id?: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
    user: UserCreateNestedOneWithoutMaintenancesInput
    vehicle: VehicleCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    plateNumber: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutTransactionInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutTransactionInput, MaintenanceUncheckedCreateWithoutTransactionInput>
  }

  export type VehicleCreateWithoutTransactionsInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    user?: UserCreateNestedOneWithoutVehiclesInput
    Contracts?: ContractCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId?: string | null
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Contracts?: ContractUncheckedCreateNestedManyWithoutVehicleInput
    Maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutTransactionsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTransactionsInput, VehicleUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Contracts?: ContractUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContractUpsertWithoutTransactionsInput = {
    update: XOR<ContractUpdateWithoutTransactionsInput, ContractUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ContractCreateWithoutTransactionsInput, ContractUncheckedCreateWithoutTransactionsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutTransactionsInput, ContractUncheckedUpdateWithoutTransactionsInput>
  }

  export type ContractUpdateWithoutTransactionsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUpsertWithoutTransactionsInput = {
    update: XOR<CustomerUpdateWithoutTransactionsInput, CustomerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTransactionsInput, CustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type CustomerUpdateWithoutTransactionsInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    Contracts?: ContractUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    Contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MaintenanceUpsertWithoutTransactionInput = {
    update: XOR<MaintenanceUpdateWithoutTransactionInput, MaintenanceUncheckedUpdateWithoutTransactionInput>
    create: XOR<MaintenanceCreateWithoutTransactionInput, MaintenanceUncheckedCreateWithoutTransactionInput>
    where?: MaintenanceWhereInput
  }

  export type MaintenanceUpdateToOneWithWhereWithoutTransactionInput = {
    where?: MaintenanceWhereInput
    data: XOR<MaintenanceUpdateWithoutTransactionInput, MaintenanceUncheckedUpdateWithoutTransactionInput>
  }

  export type MaintenanceUpdateWithoutTransactionInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutTransactionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUpsertWithoutTransactionsInput = {
    update: XOR<VehicleUpdateWithoutTransactionsInput, VehicleUncheckedUpdateWithoutTransactionsInput>
    create: XOR<VehicleCreateWithoutTransactionsInput, VehicleUncheckedCreateWithoutTransactionsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTransactionsInput, VehicleUncheckedUpdateWithoutTransactionsInput>
  }

  export type VehicleUpdateWithoutTransactionsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutVehiclesNestedInput
    Contracts?: ContractUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTransactionsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Contracts?: ContractUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserCreateWithoutMaintenancesInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Contracts?: ContractCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    username: string
    email: string
    Vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMaintenancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
  }

  export type VehicleCreateWithoutMaintenancesInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    user?: UserCreateNestedOneWithoutVehiclesInput
    Contracts?: ContractCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    userId?: string | null
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
    Contracts?: ContractUncheckedCreateNestedManyWithoutVehicleInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenancesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
  }

  export type TransactionCreateWithoutMaintenanceInput = {
    id?: string
    amount: number
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    contract?: ContractCreateNestedOneWithoutTransactionsInput
    customer?: CustomerCreateNestedOneWithoutTransactionsInput
    vehicle: VehicleCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
  }

  export type TransactionCreateOrConnectWithoutMaintenanceInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
  }

  export type UserUpsertWithoutMaintenancesInput = {
    update: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type UserUpdateWithoutMaintenancesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Contracts?: ContractUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenancesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleUpsertWithoutMaintenancesInput = {
    update: XOR<VehicleUpdateWithoutMaintenancesInput, VehicleUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenancesInput, VehicleUncheckedUpdateWithoutMaintenancesInput>
  }

  export type VehicleUpdateWithoutMaintenancesInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutVehiclesNestedInput
    Contracts?: ContractUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenancesInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Contracts?: ContractUncheckedUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TransactionUpsertWithoutMaintenanceInput = {
    update: XOR<TransactionUpdateWithoutMaintenanceInput, TransactionUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<TransactionCreateWithoutMaintenanceInput, TransactionUncheckedCreateWithoutMaintenanceInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutMaintenanceInput, TransactionUncheckedUpdateWithoutMaintenanceInput>
  }

  export type TransactionUpdateWithoutMaintenanceInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    contract?: ContractUpdateOneWithoutTransactionsNestedInput
    customer?: CustomerUpdateOneWithoutTransactionsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutMaintenanceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleCreateManyUserInput = {
    id?: string
    plateNumber: string
    brand: string
    meter: number
    status?: string
    rentalCount?: number | null
    transmission?: string
    manufactureYear?: number | null
    color?: string | null
    extraHourPrice: number
    dailyRent: number
    weeklyRent: number
    monthlyRent: number
    insuranceCompany?: string | null
    registrationType?: string | null
    fuelType: string
    extraKilometerPrice: number
    vehicleType?: string | null
    dailyKilometerLimit: number
  }

  export type CustomerCreateManyUserInput = {
    id?: string
    customerName: string
    category: string
    nationality: string
    idNumber: string
    idExpirationDate?: string | null
    mobile?: string | null
    debt?: number | null
  }

  export type ContractCreateManyUserInput = {
    id?: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
  }

  export type MaintenanceCreateManyUserInput = {
    id?: string
    plateNumber: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type VehicleUpdateWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Contracts?: ContractUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
    Contracts?: ContractUncheckedUpdateManyWithoutVehicleNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    meter?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rentalCount?: NullableIntFieldUpdateOperationsInput | number | null
    transmission?: StringFieldUpdateOperationsInput | string
    manufactureYear?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    extraHourPrice?: FloatFieldUpdateOperationsInput | number
    dailyRent?: FloatFieldUpdateOperationsInput | number
    weeklyRent?: FloatFieldUpdateOperationsInput | number
    monthlyRent?: FloatFieldUpdateOperationsInput | number
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    extraKilometerPrice?: FloatFieldUpdateOperationsInput | number
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    dailyKilometerLimit?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerUpdateWithoutUserInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    Contracts?: ContractUpdateManyWithoutCustomerNestedInput
    Transactions?: TransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    Contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idExpirationDate?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContractUpdateWithoutUserInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutContractsNestedInput
    Transactions?: TransactionUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUpdateWithoutUserInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenancesNestedInput
    transaction?: TransactionUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction?: TransactionUncheckedUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateManyWithoutUserInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneWithoutTransactionsNestedInput
    customer?: CustomerUpdateOneWithoutTransactionsNestedInput
    Maintenance?: MaintenanceUpdateOneWithoutTransactionNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractCreateManyVehicleInput = {
    id?: string
    userId: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    customerId: string
    transacionId?: string | null
  }

  export type TransactionCreateManyVehicleInput = {
    id?: string
    userId: string
    amount: number
    type: string
    createdAt?: Date | string
    contractId?: string | null
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type MaintenanceCreateManyVehicleInput = {
    id?: string
    userId: string
    maintenanceType: string
    client?: string | null
    date: string
    cost: number
    description?: string | null
  }

  export type ContractUpdateWithoutVehicleInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    Transactions?: TransactionUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutVehicleInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    contract?: ContractUpdateOneWithoutTransactionsNestedInput
    customer?: CustomerUpdateOneWithoutTransactionsNestedInput
    Maintenance?: MaintenanceUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUpdateWithoutVehicleInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    transaction?: TransactionUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction?: TransactionUncheckedUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateManyWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractCreateManyCustomerInput = {
    id?: string
    userId: string
    plateNumber: string
    total: number
    paid: number
    remainingDues: number
    meterReadingOut: number
    meterReadingIn?: number | null
    timeOut: string
    dailyRent: number
    days: number
    timeIn: string
    dateOut: string
    returnedDate: string
    returnStatus?: string | null
    earlyReturnFee?: string | null
    lateReturnFee?: string | null
    invoiceDetails?: string | null
    transacionId?: string | null
  }

  export type TransactionCreateManyCustomerInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    contractId?: string | null
    maintenanceId?: string | null
  }

  export type ContractUpdateWithoutCustomerInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutContractsNestedInput
    Transactions?: TransactionUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCustomerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCustomerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    paid?: FloatFieldUpdateOperationsInput | number
    remainingDues?: FloatFieldUpdateOperationsInput | number
    meterReadingOut?: FloatFieldUpdateOperationsInput | number
    meterReadingIn?: NullableFloatFieldUpdateOperationsInput | number | null
    timeOut?: StringFieldUpdateOperationsInput | string
    dailyRent?: FloatFieldUpdateOperationsInput | number
    days?: FloatFieldUpdateOperationsInput | number
    timeIn?: StringFieldUpdateOperationsInput | string
    dateOut?: StringFieldUpdateOperationsInput | string
    returnedDate?: StringFieldUpdateOperationsInput | string
    returnStatus?: NullableStringFieldUpdateOperationsInput | string | null
    earlyReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    lateReturnFee?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    transacionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutCustomerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    contract?: ContractUpdateOneWithoutTransactionsNestedInput
    Maintenance?: MaintenanceUpdateOneWithoutTransactionNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCustomerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutCustomerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyContractInput = {
    id?: string
    userId: string
    amount: number
    type: string
    plateNumber: string
    createdAt?: Date | string
    customerId?: string | null
    maintenanceId?: string | null
  }

  export type TransactionUpdateWithoutContractInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    customer?: CustomerUpdateOneWithoutTransactionsNestedInput
    Maintenance?: MaintenanceUpdateOneWithoutTransactionNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutContractInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutContractInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractCountOutputTypeDefaultArgs instead
     */
    export type ContractCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceDefaultArgs instead
     */
    export type MaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}