import React from 'react'

const Counter = (props) => {
    const {
        max: maxItem,
        handleUpdateBasketItem,
        item,
        basketItems,
        value,
    } = props
    
    const [count, setCount] = React.useState(value ? value : 1)

    const handleLessCount = () => {
        if (count > 1) {
            const newCount = count - 1
            setCount(newCount)
        }
    }

    const handleAddCount = () => {
        if (count <= maxItem - 1) {
            const newCount = count + 1
            setCount(newCount)
            handleUpdateBasketItem(basketItems, item.id, newCount)
        }
    }

    return (
        <div className="c-itemCounter mr-2">
            <button
                onClick={() => handleLessCount()}
                type="button"
                class="btn btn-primary"
            >
                -
            </button>
            <span className="ml-2 mr-2">{count}</span>
            <button
                onClick={() => handleAddCount()}
                type="button"
                class="btn btn-primary"
            >
                +
            </button>
        </div>
    )
}

export default Counter
