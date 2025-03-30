export type questionDataType = {
    id: number;
    title: string;
    text: string;
    answers: string[];
}

export type modalOpenType = {
    first: boolean;
    open: boolean;
}

export type searchType = {
    search: string;
    isBloggerChecked: boolean;
}

export type gradeType = {
    link: string;
    rate: number
}

export type formType = {
    id: number;
    response: string;
}