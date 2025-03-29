type LogoType = {
    className?: string
}

const Logo = ({ className }: LogoType) => {
    return (
        <div className="flex items-center">
            <img src="/logo.svg" className={`w-auto h-10 ${className}`} />
            <span className="text-[#ef1d27] font-bold text-base ml-4">www_str</span>
        </div>
    )
}

export default Logo