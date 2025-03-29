import { useRef, useState } from 'react';
import WideContainer from './components/WideContainer';
import NarrowContainer from './components/NarrowContainer';
import AboutBlock from './components/AboutBlock';
import Logo from './components/ui/Logo';
import FormModal from './components/FormModal';
import Button from './components/ui/Button';
import axios from 'axios';

export type questionDataType = {
  id: number;
  title: string;
  text: string;
  answers: string[];
}

const questionData: questionDataType[] = [
  {
    id: 1,
    title: "Вопрос 1",
    text: "Вам нравится сайт?",
    answers: ["Да", "Нет"],
  },
  {
    id: 2,
    title: "Вопрос 2",
    text: "Оцените качество выданных ответов",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    id: 3,
    title: "Вопрос 3",
    text: "Эта выдача была полезна?",
    answers: ["Да", "Нет"],
  },
]

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [modalOpen, setModalOpen] = useState({ first: true, open: false });
  const [error, setError] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handlClick = async () => {

    if (search != '') {
      try {
        setError(false);
        const url = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_KEY}&q=${search}+краснодар`;
        const data = await axios.get(url);
        setSearchResult(data.data.items);
        setSearch('');
        setModalOpen({ first: true, open: false });

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
    if (modalOpen.first) {
      setTimeout(() => {
        setModalOpen({ first: false, open: true });
      }, 2000)
    }
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    ref.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="flex flex-col bg-gray-200">
      {modalOpen.open && <FormModal onClose={() => setModalOpen({ first: false, open: false })} data={questionData} />}

      <div className="flex flex-col gap-4">
        <WideContainer classname='flex items-center gap-2 max-h-20 py-6'>
          <>
            <Logo />
            <a className="ml-auto mr-0 cursor-pointer text-[#ef1d27] font-medium" onClick={handleScroll}>О нас</a>
          </>
        </WideContainer>

        <NarrowContainer classname='p-4 flex gap-2 items-start' >
          <>
            <input
              placeholder='Search smth..'
              className='bg-gray-200 font-medium text-black rounded-xl px-8 py-4 h-full w-full outline-none'
              type="text" value={search} onChange={handleChangeSearch}
              onKeyDown={(e) => { e.key === 'Enter' && handlClick() }}
            />
            <Button onclick={handlClick}>Найти</Button>
          </>
        </NarrowContainer>
        <NarrowContainer classname='h-full mb-3'>
          <ul className='flex flex-col px-5 lg:px-20 py-16 gap-4'>
            {searchResult.length > 0 ? searchResult.map((item: any, idx: number) => (
              <li key={idx} title={item.snippet} className='cursor-pointer list-disc'>
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
      </div>

      <div className='flex flex-col gap-4 pt-3' ref={ref}>
        <WideContainer classname='py-20 flex flex-col lg:flex-row gap-4'>
          <>
            <AboutBlock title='Мы помогаем бизнесу расти' />
            <div className="w-full lg:w-2/3 h-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
              <AboutBlock title='Безопасность' subtitle='Пригласите коллег, настройте доступ для них и улучшайте аккаунты в соцсетях вместе.' />
              <AboutBlock title='Понятные графики' subtitle='Для каждого графика и каждой цифры есть описание — вы легко поймете, что значат метрики.' />
              <AboutBlock title='Командная работа' subtitle='Пригласите коллег, настройте доступ для них и улучшайте аккаунты в соцсетях вместе.' />
              <AboutBlock title='Интеграции' subtitle='Наш API позволяет подтягивать статистику по всем соцсетям из LD в ваши внутренние системы.' />
            </div>
          </>
        </WideContainer>

        <WideContainer classname='py-20 lg:max-h-12 flex flex-col lg:flex-row items-center gap-6 justify-between'>
          <>
            <Logo />
            <div className="l-auto flex items-center justify-center lg:justify-start flex-wrap gap-6">
              <p className='text-lg font-bold'>Команда: STR</p>
              <span className='h-6 w-0.5 bg-gray-400'></span>
              <p className='text-lg font-medium'>Elizabeth</p>
              <p className='text-lg font-medium'>Nikka</p>
              <p className='text-lg font-medium'>Micha</p>
              <p className='text-lg font-medium'>Artyom</p>
              <p className='text-lg font-medium'>Mickhail</p>
            </div>
          </>
        </WideContainer>
      </div>
    </div>
  )
}

export default App
