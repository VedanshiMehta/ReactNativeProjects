
export interface User {
    readonly id?:       number;
    readonly name?:     string;
    readonly username?: string;
    readonly email?:    string;
    readonly address?:  Address;
    readonly phone?:    string;
    readonly website?:  string;
    readonly company?:  Company;
}

export interface Address {
    readonly street?:  string;
    readonly suite?:   string;
    readonly city?:    string;
    readonly zipcode?: string;
    readonly geo?:     Geo;
}

export interface Geo {
    readonly lat?: string;
    readonly lng?: string;
}

export interface Company {
    readonly name?:        string;
    readonly catchPhrase?: string;
    readonly bs?:          string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUser(json: string): User[] {
        return JSON.parse(json);
    }

    public static userToJson(value: User[]): string {
        return JSON.stringify(value);
    }
}
