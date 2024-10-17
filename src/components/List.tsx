

type ListProps<T> = {
    list: T[],
    onClick: (val:T)=>void
}
export default function List<T extends string | number>({list, onClick}: ListProps<T>){

    return <div>
        <h3>All Items here</h3>
        {list.map((item, index) => <div key={index} onClick={()=>onClick(item)}>
            {item}
        </div>)}
    </div>
}