import { useNavigate, useParams } from "react-router-dom"

const withParam = (Component)=>{
    return props => <Component {...props} match = {{param:useParams()}} navigate={useNavigate()}/>
}
export default withParam
