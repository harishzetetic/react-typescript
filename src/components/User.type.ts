
export type Address = {
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    pin: number
}

type User = {
    name: string,
    age: number,
    address: Address
}