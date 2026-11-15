interface EntryList {
    name: string;
    email: string;
    course: string;
}

// interface ErrorList {
//     // [eType: string]: string;
//     name: string;
//     email: string;
//     course: string;
// }

type ErrorList = EntryList

export type { EntryList, ErrorList }