import React from 'react'
import Modal from '../common/modal'
import './styles/basket.scss'

const Basket = (props) => {
    const { basketItems, handleRemoveBasketItem } = props
    const count = basketItems.length
    const items =
        basketItems &&
        basketItems.map((item) => (
            <tr>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td className="text-right">
                    <button
                        onClick={() =>
                            handleRemoveBasketItem(basketItems, item.id)
                        }
                        className="btn btn-danger btn-sm"
                    >
                        Remove
                    </button>
                </td>
            </tr>
        ))
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="btn btn-primary"
            >
                <span className="badge badge-light mr-1">{count}</span> items
            </button>
            <Modal
                handleClose={() => setIsModalOpen(false)}
                status={isModalOpen}
                title="Your items"
            >
                <div className="c-basketModal">
                    {count > 0 ? (
                        <table>
                            <thead>
                                <th><b>Name</b></th>
                                <th><b>Amount</b></th>
                                <th></th>
                            </thead>
                            <tbody>{items}</tbody>
                        </table>
                    ) : (
                        'There is no item in your basket'
                    )}
                </div>
            </Modal>
        </>
    )
}

export default Basket
