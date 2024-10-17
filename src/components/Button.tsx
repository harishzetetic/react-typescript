

type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string,
} & Omit<React.ComponentProps<'button'>, 'children'>

export default function Button({variant, children}: ButtonProps){
    return <button className={variant}>{children}</button>
}
