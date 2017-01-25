/* Defines the product entity */
export interface IProfile {
    userId: string;
    birthDate: Date;
    description: string;
    gender: string;
    hometown: number;
    firstName: string;
    lastName: string;
    photoUri: string;
    phoneNumber: string;
    languages: string[];
}
