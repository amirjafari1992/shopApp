import React from 'react'
import Counter from '../common/counter'
import Modal from '../common/modal'

const MainItemModal = (props) => {
    const {
        isModalOpen,
        setIsModalOpen,
        item,
        basketItems,
        handleAddToBasket,
        handleRemoveBasketItem,
    } = props
    const [isItemAdded, setIsItemAdded] = React.useState(false)
    const [reservedItems, setReservedItems] = React.useState(1)

    const handleAddToCartBTN = (item) => {
        handleAddToBasket(item, 1)
        setIsItemAdded(true)
    }

    const handleRemoveItem = (id) => {
        setIsItemAdded(false)
        handleRemoveBasketItem(basketItems, id)
    }

    const itemInBasket =
        basketItems && basketItems.filter((i) => i.id === item.id)
    const itemCountInBasket = itemInBasket[0] && itemInBasket[0].amount

    return (
        <>
            {item ? (
                <Modal
                    status={isModalOpen}
                    handleClose={() => setIsModalOpen(false)}
                    title={item.name}
                >
                    <div className="c-itemModal row">
                        <div className="col-12">
                            <div className="wrap d-flex justify-content-between mb-3">
                                <span className="c-itemModal__price">
                                    ${item.price}
                                </span>
                                <span className="c-itemModal__prAmount badge badge-info">
                                    Number in stock: {item.amount}
                                </span>
                            </div>
                            <p className="c-itemModal__description text-left mb-3">
                                {item.description}
                            </p>
                            <div className="btn-box d-flex">
                                {itemInBasket.length > 0 ? (
                                    <>
                                        <Counter
                                            setReservedItems={setReservedItems}
                                            max={item.amount}
                                            value={itemCountInBasket}
                                            {...props}
                                        />
                                        <button
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            Remove from cart
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleAddToCartBTN(item)}
                                        className="btn btn-success mr-2"
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : (
                ''
            )}
        </>
    )
}

export default MainItemModal
