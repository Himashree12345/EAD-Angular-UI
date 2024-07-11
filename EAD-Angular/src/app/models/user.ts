export class User {
    id: number
    userName: string
    firstName: string
    lastName: string
    email: string
    accountId: number
    roles: Role[]
  }
  
  export class Role {
    id: number
    name: string
  }
  