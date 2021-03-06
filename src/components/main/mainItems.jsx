import React from 'react'
import MainItem from './mainItem'

const MainItems = (props) => {
    const { items: stateItems } = props

    const items =
        stateItems &&
        stateItems.map((item) => (
            <MainItem key={item.id} item={item} {...props} />
        ))

    return (
        <div className="c-items card-deck mb-3 text-center align-items-stretch">
            {items}
        </div>
    )
}

export default MainItems
