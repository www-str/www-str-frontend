import { RefObject } from 'react'
import WideContainer from "../components/WideContainer";
import Logo from "../components/ui/Logo";

interface IHeader {
    scrollRef: RefObject<HTMLDivElement | null>;
}

const Header = ({ scrollRef }: IHeader) => {
    const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        scrollRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <WideContainer classname='flex items-center gap-2 max-h-20 py-6'>
            <>
                <Logo />
                <a className="ml-auto mr-0 cursor-pointer text-[#ef1d27] font-medium" onClick={handleScroll}>О нас</a>
            </>
        </WideContainer>
    )
}

export default Header