import { LoopIcon } from "../assets/icons"
import Card from "./common/card"
export default function While({ onClickOptionEvent }) {

    const actions=[
        {
            icon:<LoopIcon></LoopIcon>,
            onClickEvent: () => {
                alert("al fin entendi XD")
            }
        }
    ]

    return(
        <div className="center-content">
            <Card {...{title: "Ciclo While", actions}}>
                <LoopIcon></LoopIcon>
            </Card>
            
        </div>
    )
}