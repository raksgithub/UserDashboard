export class License {
    constructor(
        public type: string,
        public pricing: string,
        public capacity: string,
        public billabilityPeriod: string
    ) {}
}

export const LICENSES = [
    new License('basic', '$10', "100GB", "Monthly"),
    new License('basic', '$11', "102GB", "6 Months"),
    new License('standard', '$20', "500GB", "Monthly"),
    new License('advanced', '$100', "1TB", "Yearly")
]