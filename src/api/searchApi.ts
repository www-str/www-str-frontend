import axios from "axios";

type searchType = {
    search: string;
    isBloggerChecked: boolean;
}

type resType = {
    items: any
}


export async function getSearch({ search, isBloggerChecked }: searchType): Promise<resType> {
    try {
        const baseURL = import.meta.env.VITE_API_URL;
        const googleKey = import.meta.env.VITE_GOOGLE_API_KEY;
        const searchKey = import.meta.env.VITE_SEARCH_KEY;

        const res = await axios.get(baseURL, {
            params: {
                key: googleKey,
                cx: searchKey,
                safe: "active",
                q: `${search}+${isBloggerChecked ? "блогеры" : ""}+краснодар`
            }
        });
        return res.data;
    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
}