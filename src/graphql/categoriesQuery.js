import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
query ($input:CategoryInput){
    category(input:$input){
        name,
        products{
            gallery,
            prices{
                amount
                currency{
                    label
                }
            },
            brand,
            inStock,
            name,
            attributes{
                items{
                    displayValue,
                    value
                },
                name,
                type,
            }
            id,
        }
    }
}
`;
