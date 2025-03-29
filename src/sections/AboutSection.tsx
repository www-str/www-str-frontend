import WideContainer from '../components/WideContainer'
import AboutBlock from '../components/AboutBlock'
import { RefObject } from 'react';

interface IAboutSection {
    ref: RefObject<HTMLDivElement | null>;
}

const AboutSection = ({ ref }: IAboutSection) => {
    return (
        <WideContainer classname='py-20 flex flex-col lg:flex-row gap-4'>
            <>
                <AboutBlock title='Мы помогаем бизнесу расти' />
                <div ref={ref} className="w-full lg:w-2/3 h-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
                    <AboutBlock title='Безопасность' subtitle='Пригласите коллег, настройте доступ для них и улучшайте аккаунты в соцсетях вместе.' />
                    <AboutBlock title='Понятные графики' subtitle='Для каждого графика и каждой цифры есть описание — вы легко поймете, что значат метрики.' />
                    <AboutBlock title='Командная работа' subtitle='Пригласите коллег, настройте доступ для них и улучшайте аккаунты в соцсетях вместе.' />
                    <AboutBlock title='Интеграции' subtitle='Наш API позволяет подтягивать статистику по всем соцсетям из LD в ваши внутренние системы.' />
                </div>
            </>
        </WideContainer>
    )
}

export default AboutSection