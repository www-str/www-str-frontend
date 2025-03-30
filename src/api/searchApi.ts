import axios from "axios";
import { searchRespType, searchType } from "../utils/types";

export async function getSearch({ search, isBloggerChecked }: searchType): Promise<searchRespType> {
    try {
        const baseURL = import.meta.env.VITE_API_URL;
        const googleKey = import.meta.env.VITE_GOOGLE_API_KEY;
        const searchKey = import.meta.env.VITE_SEARCH_KEY;

        const res = await axios.get(baseURL, {
            params: {
                key: googleKey,
                cx: searchKey,
                safe: "active",
                q: `${search}+${isBloggerChecked && "блогеры"}+краснодар`
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.data;

    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
}