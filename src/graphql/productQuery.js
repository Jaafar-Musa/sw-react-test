import {gql} from "@apollo/client"

export const GET_PRODUCT = gql`
query($id:String!){
    product(id:$id){
        attributes{
            items{
                displayValue,
                value,
                id
            },
            name,
            type,
            id
        },
        brand,
        category,
        description,
        gallery,
        inStock,
        name,
        prices{
            currency{
                label
            }
            amount
        }
    }
}
`