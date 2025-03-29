import WideContainer from "../components/WideContainer";
import Logo from "../components/ui/Logo";
import { team } from "../utils/mocdata";

const Footer = () => {
    return (
        <WideContainer classname='py-20 lg:max-h-12 flex flex-col lg:flex-row items-center gap-6 justify-between'>
            <>
                <Logo />
                <div className="l-auto flex items-center justify-center lg:justify-start flex-wrap gap-6">
                    <p className='text-lg font-bold border-r-2 border-gray-400 pr-6'>
                        Команда: STR
                    </p>

                    {team.map((item, index) => (
                        <p key={index} className='text-lg font-medium'>
                            {item}
                        </p>
                    ))}
                </div>
            </>
        </WideContainer>
    )
}

export default Footer