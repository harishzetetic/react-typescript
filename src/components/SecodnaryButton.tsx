
import Button from "./Button"

export default function SecondaryButton({variant, children}: React.ComponentProps<typeof Button>){
    return <button className={variant}>{children}</button>
}
