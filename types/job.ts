export type TEmplayment = "Full time" | "Temporary" | "Part time"

export type TJobList = IJobDetails[]

export interface ILocation {
  lat: Number
  long: Number
}

export interface IJobDetails {
        id: String
        name: String
        email: String
        phone: String
        title: String
        salary: String
        address: String
        benefits: [String]
        location: ILocation
        pictures: [String]
        createdAt: String
        updatedAt: String
        description: String
        employment_type: [TEmplayment]
}
