import "./nav-bar.css"

const ItemProps = {
    key: String,
    label: String,
    icon: Element
}

const ItemsNavbarProps = {
    type: 'unique' | 'noUnique',
    subItems: [ItemProps] | undefined,
    itemProps: ItemProps,
}

const NavbarProps = {
    navbarProps: [ItemsNavbarProps],
    onClickOptionEvent: () => {},
    defaultValue: String
}

// Navbar(props as NavbarProps)
export default function Navbar(props) {
    const { navbarItems, onClickOptionEvent, defaultValue } = props
    return (
        <div className="side-bar">
            <div style={{ width: '100%' }}>
                {navbarItems.map(({ itemProps, type, subItems, key }) => {
                    const { icon, label } = itemProps
                    return (
                        <>
                            <div
                                key={key}
                                className={ `item ${type === 'unique' ? 'unique-item': ''} ${ defaultValue === key ? 'item-active': '' }`}
                                onClick={() => type === 'unique' && onClickOptionEvent(key)}
                            >
                                { !!icon && icon }
                                <p>{ label }</p>
                            </div>
                            {
                                type === 'noUnique' && subItems?.map(({ label: subLabel, key: subKey }) => {
                                    const keyValue = `${key}-${subKey}`
                                    return (
                                        <div
                                            key={keyValue}
                                            className={ `sub-item ${defaultValue === keyValue ? 'sub-item-active': ''}` }
                                            onClick={() => onClickOptionEvent(keyValue)}
                                        >
                                            { subLabel }
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )      
}