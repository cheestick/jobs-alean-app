export type TEmployment = "Full time" | "Temporary" | "Part time"

export interface ILocation {
  lat: number
  long: number
}

export interface IJobDetails {
        id: string
        name: string
        email: string
        phone: string
        title: string
        salary: string
        address: string
        benefits: string[]
        location: ILocation
        pictures: string[]
        createdAt: string
        updatedAt: string
        description: string
        employment_type: [TEmployment]
}

export type TJobList = IJobDetails[]