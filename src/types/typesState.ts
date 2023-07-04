import store from "components/store"

export type Product =  {
    nameOfProduct: string,
    nameOfPrice: number,
    image: string,
    count: number,
    id: Date
}

export interface IProducts {
    products: Product[] | [],
}

export interface ICount {
    count:number,
}

export type RootState = ReturnType<typeof store.getState>



