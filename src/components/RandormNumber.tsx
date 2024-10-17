
type RandomNumberType = {
    value: number
}
type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?:never,
    isZero?: never,
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isZero?: never,
    isPositive?: never,
}
type Zero = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?:never,
}
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
export default function RandomNumber({value, isPositive, isNegative, isZero}: RandomNumberProps){
    return <div>
        {value} is {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
    </div>

}