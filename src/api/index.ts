import { formType, gradeType, searchType } from "../utils/types";
import axios from "./axios";

export async function getSearch({ search, isBloggerChecked }: searchType): Promise<object> {
    try {
        const res = await axios.get(`/search/get`, {
            params: {
                q: `${search}${isBloggerChecked ? "+блогеры" : ""}`
            }
        })
        return res.data;
    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
}

export async function sendGrade({ link, rate }: gradeType): Promise<string> {
    try {
        const res = await axios.post(`/ratings/get`, {
            link,
            rate,
        })
        return res.data;
    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
}

export async function sendForm({ id, response }: formType): Promise<string> {
    try {
        const res = await axios.post(`/ratings/get`, {
            id,
            response,
        })
        return res.data;
    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
}