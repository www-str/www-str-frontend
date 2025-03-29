import { Dispatch, SetStateAction, useState } from 'react'
import NarrowContainer from '../components/NarrowContainer'
import Button from '../components/ui/Button'
import axios from 'axios';
import { modalOpenType } from '../utils/types';

interface ISearchSection {
    modalOpen: modalOpenType;
    setModalOpen: Dispatch<SetStateAction<modalOpenType>>
}

const SearchSection = ({ modalOpen, setModalOpen }: ISearchSection) => {
    const [search, setSearch] = useState("");
    const [prevSearch, setPrevSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [error, setError] = useState(false);
    const [bloggerChecked, setBloggerChecked] = useState(false);

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handlClick = async () => {
        if (search == '' || prevSearch.trim().toLowerCase() === search.trim().toLowerCase()) return;

        try {
            setError(false);

            const url = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY
                }&cx=${import.meta.env.VITE_SEARCH_KEY}&q=${search}+${bloggerChecked ? "блогеры" : ""}+краснодар`;
            const data = await axios.get(url);

            setSearchResult(data.data.items);
            setModalOpen({ first: true, open: false });
            setPrevSearch(search);


            if (modalOpen.first) {
                setTimeout(() => {
                    setModalOpen({ first: false, open: true });
                }, 3000)
            }

        } catch (err: any) {
            setError(true);
            console.error(err);
        }
    }

    const toggleBloggerChecked = () => {
        setBloggerChecked(!bloggerChecked)
        setPrevSearch('');
    }

    return (
        <>
            <NarrowContainer classname='p-4 flex gap-2' >
                <>
                    <input
                        placeholder='Найти..'
                        className='bg-gray-200 font-medium text-black rounded-xl px-8 py-4 min-h-full w-full outline-none'
                        type="text" value={search} onChange={handleChangeSearch}
                        onKeyDown={(e) => { e.key === 'Enter' && handlClick() }}
                    />
                    <div className="bg-gray-200 rounded-xl px-8 min-h-full inline-flex items-center gap-2 cursor-pointer" onClick={toggleBloggerChecked}>
                        <input type='checkbox' checked={bloggerChecked} id='bloggerCheckbox' className='w-4 h-4' />
                        <label htmlFor="bloggerCheckbox">Блогеры</label>
                    </div>
                    <Button onclick={handlClick}>Найти</Button>
                </>
            </NarrowContainer>
            <NarrowContainer classname='h-full'>
                <ul className='flex flex-col px-5 lg:px-20 py-8 lg:py-16 gap-4'>
                    {searchResult.length > 0 ? searchResult.map((item: any, idx: number) => (
                        <li key={idx} title={item.snippet} className='cursor-pointer lg:list-disc'>
                            <a href={item.link} target='_blank' className=' transition hover:underline hover:text-[#ef1d27]'>
                                {item.title}
                            </a>
                            <p className='text-sm text-gray-500'>{item.snippet}</p>
                        </li>
                    )) : (
                        <div className="text-xl font-bold text-gray-700">
                            {error ? (
                                <span className='text-red-600'>Что-то пошло не так, попробуйте позже</span>
                            ) : "Пусто.."}
                        </div>
                    )}

                </ul>

            </NarrowContainer>
        </>
    )
}

export default SearchSection