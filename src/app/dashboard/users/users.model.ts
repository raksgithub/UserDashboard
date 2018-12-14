export class Users {
    constructor (
        public firstname: string, 
        public lastname: string, 
        public email: string, 
        public licenseType: string,
        public billabilityPeriod: string,
        public totalSpace: string,
        public usedSpace: string 
    ) {}
}

export const USERS = [
    new Users("Andrew", "Smith", "andrew.smith@example.com", "Basic", "Monthly", "20GB", "1GB"),
    new Users("John", "Doe", "john.doe@example.com", "Standard", "Yearly", "200GB", "20GB"),
    new Users("Jane", "clark", "jane.clark@example.com", "Basic", "Monthly", "10GB", "0.5GB")
]