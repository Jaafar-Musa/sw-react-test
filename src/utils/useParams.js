import { useParams } from "react-router-dom"

const withParam = (Component)=>{
    return props => <Component {...props} match = {{param:useParams()}}/>
}
export default withParam
