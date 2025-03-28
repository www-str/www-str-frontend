import { useRef, useState } from 'react';
import WideContainer from './components/WideContainer';
import NarrowContainer from './components/NarrowContainer';
import AboutBlock from './components/AboutBlock';
import Logo from './components/Logo';
import FormModal from './components/FormModal';
import Button from './components/ui/Button';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<any>();

  const [modalOpen, setModalOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handlClick = async () => {
    // setModalOpen(prev => !prev)
    if(search != '') {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_KEY}&q=${search} краснодар`);
      setSearchResult(data.data.items);
    }
    setSearch('');
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
      {modalOpen && <FormModal />}

      <div className="h-screen flex flex-col gap-4">
        <WideContainer classname='flex items-center gap-2 max-h-20'>
          <>
            <Logo />
            <a className="ml-auto mr-0 cursor-pointer text-[#ef1d27] font-medium" onClick={handleScroll}>About</a>
          </>
        </WideContainer>

        <NarrowContainer classname='p-4 flex gap-2 items-start'>
          <>
            <input
              placeholder='Search smth..'
              className='bg-gray-200 font-medium text-black rounded-xl px-8 h-full w-full outline-none'
              type="text" value={search} onChange={handleChangeSearch}
            />
            <Button onclick={handlClick}>Search</Button>
          </>
        </NarrowContainer>
        <NarrowContainer classname='h-full mb-3'>
          <ul className='flex flex-col items-center p-20 gap-2'>
            {searchResult && searchResult.map((item: any, idx: number) => (
              <li key={idx}>
                <a href={item.link} target='_blank' className='block underline cursor-pointer'>
                  {item.title}
                </a>
              </li>
            ))}
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

        <WideContainer classname='py-20 max-h-12 flex justify-between'>
          <>
            <Logo />
            <div className="l-auto flex items-center gap-6">
              <p className='text-lg font-bold'>Team: STR</p>
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
