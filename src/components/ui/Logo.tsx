type LogoType = {
    className?: string
}

const Logo = ({ className }: LogoType) => {
    return (
        <img src="/logo.svg" className={`w-auto h-16 ${className}`} />
    )
}

export default Logo