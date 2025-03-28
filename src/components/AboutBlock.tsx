interface IAboutBlock {
    title: string;
    subtitle?: string;
    icon?: string;
}

const AboutBlock = ({ title, subtitle }: IAboutBlock) => {
    return (
        <div className={subtitle ? 'w-full h-full bg-gray-200 rounded-xl p-8' : "w-full lg:w-1/3 bg-gray-200 rounded-xl p-8"}>
            <h4 className={subtitle ? 'text-xl font-bold text-gray-700' : 'text-3xl font-bold text-gray-700'}>{title}</h4>
            <p className='text-lg mt-2'>{subtitle}</p>
        </div>
    )
}

export default AboutBlock