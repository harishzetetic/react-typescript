
type StatusProps = {
    status: 'loading' | 'error' | 'success'
}
export default function Status(props:StatusProps){
    if(props.status === 'loading'){
        return <>Loading</>
    } else if(props.status === 'error'){
        return <>Error</>
    } else if(props.status === 'success'){
        return <>Success</>
    }
   
}