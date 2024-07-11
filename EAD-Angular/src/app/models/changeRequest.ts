
  export class changeRequestDetail {
    changeNumber: string
    requests: ChangeRequest[]
    history: History[]
    projectId: number
    projectName: string
    state: any
    createdDate: string
  }
  
  export class ChangeRequest {
    area: string
    exceptionTitle: string
    categoryName: string
    platformServiceName: string
    platformResourceName: string
    platformLocation: string
    skuName: string
    environmentName: string
    requestedUserId: number
    requestedBy: string
    isDisabled: boolean
    createdBy: number
    createdDate: string
    modifiedBy: any
    modifiedDate: string
    projectId: number
    projectName: string
    changeNumber: string
    state: string
    changeRequestNumber: any
  }
  
  export interface History {
    title: string
    comments: any
  }
  