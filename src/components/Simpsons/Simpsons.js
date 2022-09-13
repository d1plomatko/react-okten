import {simpsons} from "../../simpsons";
import Simpson from "../Simpson/Simpson";

export default function Simpsons(){
    return (
        <div className={'simpsons'}>
            {simpsons.map((simpson, index) => (<Simpson item = {simpson} key = {index}/> )) }
        </div>
    )
}