
type HorizentalPosition = 'left'| 'center' | 'right'
type VericalPosition = 'top' | 'center' | 'bottom'


type ToastProps  = {
    position: Exclude<`${HorizentalPosition}-${VericalPosition}`, 'center-center'> | 'center'
}


export default function Toast({position}: ToastProps){
    return <>Toast Notification = {position}</>
}