import "./card.css"

const actionProps = {
    icon: Element,
    onClickEvent: () => {}
}

const CardProps = {
    title: String,
    actions: [actionProps],
    children: Element
}

// Card(CardProps)
export default function Card({ title, actions, children }) {
    return(
        <div className="card">
            <div className="header">{ title }</div>
            <div className="content">
                <div className="content-actions">{ actions?.map(({ icon, onClickEvent }) => (<div onClick={(e) => onClickEvent(e)}>{ icon }</div>)) }</div>
                { children }
            </div>
        </div>
    )
}