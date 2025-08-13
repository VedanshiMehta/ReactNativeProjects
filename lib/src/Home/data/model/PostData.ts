export interface PostData {
    userId?: number;
    id?:     number;
    title?:  string;
    body?:   string;
    isOpened?: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPostData(json: string): PostData[] {
        return JSON.parse(json);
    }

    public static postDataToJson(value: PostData[]): string {
        return JSON.stringify(value);
    }
}