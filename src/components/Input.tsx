

type InputProps={
    value: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export default function Input(props: InputProps){
    return <input type="text" value={props.value} onChange={props.onChangeHandler}/>
}