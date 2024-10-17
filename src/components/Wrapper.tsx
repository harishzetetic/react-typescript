
type WrapperProps = {
    children: React.ReactNode
}

export default function Wrapper(props: WrapperProps){
    return <>{props.children}</>
}