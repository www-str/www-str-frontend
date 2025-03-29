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
                    <AboutBlock title='Безопасность' subtitle='В работе с данными соблюдаются требований законодательства посредством шифрования данных и получения открытой информации о предприятиях' />
                    <AboutBlock title='Понятные графики' subtitle='Оставьте своё мнение о работе поиска после его использования в целях улучшения качества работы сервиса' />
                    <AboutBlock title='Новые возможности пиара' subtitle='Найдите инфлюэнсера, который лучше всего продвинет ваш проект.' />
                    <AboutBlock title='Интеграции' subtitle='Сервис позволяет подтягивать данные о ближайших предприятиях конкурентов' />
                </div>
            </>
        </WideContainer>
    )
}

export default AboutSection