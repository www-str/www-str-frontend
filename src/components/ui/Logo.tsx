type LogoType = {
    className?: string
}

const Logo = ({ className }: LogoType) => {
    return (
        <div className="flex items-center">
            <img src="/logo.svg" className={`w-auto h-10 ${className}`} />
            <span className="text-[#ef1d27] font-medium text-lg ml-2">WWW.STR</span>
        </div>
    )
}

export default Logo