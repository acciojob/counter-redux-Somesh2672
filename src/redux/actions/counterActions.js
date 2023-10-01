import { INCREASE,DECREASE } from "./actionType.js"

export const increase = () => {
    return(
        {
            type: INCREASE
        }
    )
}


export const decrease =() => {
    return(
        {type : DECREASE  }
        )
}