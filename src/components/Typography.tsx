

type TypographyProps<E extends React.ElementType> = {
    size? :'sm' | 'md' |'lg'
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    as? : E
}

type TypographyExtendedProps<E extends React.ElementType> = TypographyProps<E> & Omit<React.ComponentProps<E>, keyof TypographyProps<E>> 

export function Typography<E extends React.ElementType = 'div'>({size, color, children, as}: TypographyExtendedProps<E>){
    const Component = as || 'div';
    return <Component className={`${size}-${color}`}>{children}</Component>
}