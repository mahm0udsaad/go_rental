
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  username: 'username',
  email: 'email'
};

exports.Prisma.VehicleScalarFieldEnum = {
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

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.ContractScalarFieldEnum = {
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
  timeIn: 'timeIn',
  dateOut: 'dateOut',
  returnedDate: 'returnedDate',
  invoiceDetails: 'invoiceDetails',
  customerId: 'customerId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Vehicle: 'Vehicle',
  Customer: 'Customer',
  Contract: 'Contract'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\dell\\Desktop\\freelance\\CarRentalSystem\\system\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KbW9kZWwgVXNlciB7CiAgaWQgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVzZXJJZCAgICBTdHJpbmcgICAgQHVuaXF1ZQogIHVzZXJuYW1lICBTdHJpbmcKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBWZWhpY2xlcyAgVmVoaWNsZVtdCiAgQ3VzdG9tZXJzICBDdXN0b21lcltdCiAgQ29udHJhY3RzICBDb250cmFjdFtdCn0KCm1vZGVsIFZlaGljbGUgewogIGlkICAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICB1c2VyICAgICAgICAgICAgICAgIFVzZXI/ICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdKQogIHVzZXJJZCAgICAgICAgICAgICAgU3RyaW5nPwogIHBsYXRlTnVtYmVyICAgICAgICAgU3RyaW5nICBAdW5pcXVlCiAgYnJhbmQgICAgICAgICAgICAgICBTdHJpbmcKICBtZXRlciAgICAgICAgICAgICAgIEludAogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nIEBkZWZhdWx0KCJBdmFpbGFibGUiKQogIHJlbnRhbENvdW50ICAgICAgICAgSW50PyAgICBAZGVmYXVsdCgwKQogIHRyYW5zbWlzc2lvbiAgICAgICAgU3RyaW5nPwogIG1hbnVmYWN0dXJlWWVhciAgICAgSW50PwogIGNvbG9yICAgICAgICAgICAgICAgU3RyaW5nPwogIGV4dHJhSG91clByaWNlICAgICAgSW50CiAgZGFpbHlSZW50ICAgICAgICAgICBJbnQKICB3ZWVrbHlSZW50ICAgICAgICAgIEludAogIG1vbnRobHlSZW50ICAgICAgICAgSW50CiAgaW5zdXJhbmNlQ29tcGFueSAgICBTdHJpbmc/CiAgcmVnaXN0cmF0aW9uVHlwZSAgICBTdHJpbmc/CiAgZnVlbFR5cGUgICAgICAgICAgICBTdHJpbmcKICBleHRyYUtpbG9tZXRlclByaWNlIEludAogIHZlaGljbGVUeXBlICAgICAgICAgU3RyaW5nPwogIGRhaWx5S2lsb21ldGVyTGltaXQgSW50CiAgQ29udHJhY3RzICAgICAgICAgICBDb250cmFjdFtdCn0KbW9kZWwgQ3VzdG9tZXIgewogIGlkICAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICB1c2VyICAgICAgICAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSkKICB1c2VySWQgICAgICAgICAgICAgIFN0cmluZwogIGN1c3RvbWVyTmFtZSAgICAgICAgU3RyaW5nICAgICAgIAogIGNhdGVnb3J5ICAgICAgICAgICAgU3RyaW5nCiAgbmF0aW9uYWxpdHkgICAgICAgICBTdHJpbmcKICBpZE51bWJlciAgICAgICAgICAgIFN0cmluZwogIGlkRXhwaXJhdGlvbkRhdGUgICAgU3RyaW5nPwogIG1vYmlsZSAgICAgICAgICAgICAgU3RyaW5nPwogIGRlYnQgICAgICAgICAgICAgICAgSW50CiAgQ29udHJhY3RzICAgICAgICAgICBDb250cmFjdFtdCn0KbW9kZWwgQ29udHJhY3QgewogIGlkICAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICB1c2VyICAgICAgICAgICAgICAgIFVzZXIgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSkKICB1c2VySWQgICAgICAgICAgICAgIFN0cmluZwogIHBsYXRlTnVtYmVyICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZQogIHRvdGFsICAgICAgICAgICAgICAgSW50CiAgcGFpZCAgICAgICAgICAgICAgICBJbnQKICByZW1haW5pbmdEdWVzICAgICAgIEludAogIG1ldGVyUmVhZGluZ091dCAgICAgSW50CiAgbWV0ZXJSZWFkaW5nSW4gICAgICBJbnQ/CiAgdGltZU91dCAgICAgICAgICAgICBTdHJpbmcKICBkYWlseVJlbnQgICAgICAgICAgIEludAogIHRpbWVJbiAgICAgICAgICAgICAgU3RyaW5nCiAgZGF0ZU91dCAgICAgICAgICAgICBTdHJpbmcKICByZXR1cm5lZERhdGUgICAgICAgIFN0cmluZwogIGludm9pY2VEZXRhaWxzICAgICAgU3RyaW5nPwogIGN1c3RvbWVySWQgICAgICAgICAgU3RyaW5nICAgICAgICBAZGIuT2JqZWN0SWQKICBjdXN0b21lciAgICAgICAgICAgIEN1c3RvbWVyICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3VzdG9tZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdmVoaWNsZSAgICAgICAgICAgICBWZWhpY2xlICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3BsYXRlTnVtYmVyXSwgcmVmZXJlbmNlczogW3BsYXRlTnVtYmVyXSkKfQoKLy8gbW9kZWwgTWFpbnRlbmFuY2UgewovLyAgIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vICAgcGxhdGVOdW1iZXIgICAgICAgICBTdHJpbmcKLy8gICBtYWludGVuYW5jZVR5cGUgICAgIFN0cmluZwovLyAgIGNsaWVudCAgICAgICAgICAgICAgU3RyaW5nCi8vICAgZGF0ZSAgICAgICAgICAgICAgICBTdHJpbmcKLy8gICBjb3N0ICAgICAgICAgICAgICAgIEludAovLyAgIGRlc2NyaXB0aW9uICAgICAgICAgU3RyaW5nPwoKLy8gICB2ZWhpY2xlICAgICAgICAgICAgIFZlaGljbGUgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcGxhdGVOdW1iZXJdLCByZWZlcmVuY2VzOiBbcGxhdGVOdW1iZXJdKQovLyAgIHVzZXIgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgIEByZWxhdGlvbigidXNlcl9tYWludGVuYW5jZXMiLCBmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSkKLy8gICB1c2VySWQgICAgICAgICAgICAgIFN0cmluZz8KLy8gfQovLyBtb2RlbCBJbnZvaWNlIHsKLy8gICBpZCAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIHVzZXIgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgIHVzZXJJZCAgICAgICAgICAgICAgU3RyaW5nPwovLyAgIGN1c3RvbWVySWQgICAgICAgICAgU3RyaW5nICAgIAovLyAgIGN1c3RvbWVyICAgICAgICAgICAgQ3VzdG9tZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjdXN0b21lcklkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICBkYXRlICAgICAgICAgICAgICAgIFN0cmluZwovLyAgIHByaWNlICAgICAgICAgICAgICAgSW50Ci8vICAgZGVidCAgICAgICAgICAgICAgICBJbnQKLy8gICBwYWlkICAgICAgICAgICAgICAgIEludAovLyAgIHRvdGFsICAgICAgICAgICAgICAgSW50Ci8vICAgYW1vdW50ICAgICAgICAgICAgICBJbnQKLy8gICBkZXNjcmlwdGlvbiAgICAgICAgIFN0cmluZwovLyAgIGFkZFRheCAgICAgICAgICAgICAgQm9vbGVhbgovLyAgIGNvbnRyYWN0ICAgICAgICAgICAgQ29udHJhY3Q/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtjb250cmFjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICBjb250cmFjdElkICAgICAgICAgIFN0cmluZz8KLy8gfQovLyBtb2RlbCBUcmFuc2FjdGlvbiB7Ci8vICAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQG1hcCgiX2lkIikKLy8gICB0cmFuc2FjdGlvbklkICAgICAgIFN0cmluZwovLyAgIG9wZXJhdGlvbiAgICAgICAgICAgU3RyaW5nCi8vICAgcGF5bWVudCAgICAgICAgICAgICBTdHJpbmcKLy8gICBwYXltZW50RGF0ZSAgICAgICAgIFN0cmluZwovLyAgIGFtb3VudCAgICAgICAgICAgICAgSW50Ci8vICAgY29udHJhY3QgICAgICAgICAgICBDb250cmFjdFtdICAgIAovLyAgIGNvbnRyYWN0SWQgICAgICAgICAgU3RyaW5nPwovLyAgIGludm9pY2UgICAgICAgICAgICAgSW52b2ljZVtdICAgICAKLy8gICBpbnZvaWNlSWQgICAgICAgICAgIFN0cmluZz8KLy8gICBtYWludGVuYW5jZSAgICAgICAgIE1haW50ZW5hbmNlW10gCi8vICAgbWFpbnRlbmFuY2VJZCAgICAgICBTdHJpbmc/Ci8vICAgdXNlciAgICAgICAgICAgICAgICBVc2VyPyAgICAgICAgCi8vICAgdXNlcklkICAgICAgICAgICAgICBTdHJpbmc/Ci8vIH0K",
  "inlineSchemaHash": "4da40a22e71a126132d75264e849fcdb7cf4f5626720e3699a69420703b3f4d4",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vehicles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle\",\"relationName\":\"UserToVehicle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contracts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToVehicle\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plateNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Available\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentalCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufactureYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraHourPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyRent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyRent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monthlyRent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insuranceCompany\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registrationType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuelType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraKilometerPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicleType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyKilometerLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contracts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToVehicle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idExpirationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contracts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contract\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ContractToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plateNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainingDues\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meterReadingOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meterReadingIn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyRent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeIn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"returnedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiceDetails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"ContractToCustomer\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle\",\"relationName\":\"ContractToVehicle\",\"relationFromFields\":[\"plateNumber\"],\"relationToFields\":[\"plateNumber\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
