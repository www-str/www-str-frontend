type LogoType = {
    className?: string
}

const Logo = ({ className }: LogoType) => {
    return (
        <div className="flex items-center">
            <img src="/logo.svg" className={`w-auto h-16 ${className}`} />
            <p className="text-red-500">WWW-STR</p>
        </div>
    )
}

export default Logo