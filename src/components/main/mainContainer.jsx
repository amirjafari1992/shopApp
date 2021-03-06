import React, { useEffect } from 'react'
import MainDescription from './mainDescription'
import MainItems from './mainItems'
import { connect } from 'react-redux'
import {
    handleGetItems,
    handleSetActiveItem,
	handleAddToBasket,
    handleUpdateBasketItem,
    handleUpdateStorageItemAmount,
	handleRemoveBasketItem,
} from '../../actions/itemsActions'

const MainContainer = (props) => {
    const {
        handleGetItems,
        items,
        handleSetActiveItem,
        activeItem,
		handleAddToBasket,
		handleUpdateBasketItem,
		basketItems,
        handleRemoveBasketItem,
        handleUpdateStorageItemAmount,
    } = props

    useEffect(() => {
        handleGetItems()
    }, [handleGetItems])

    return (
        <div className="container main-padding">
            <MainDescription />
            <MainItems
                activeItem={activeItem}
                handleSetActiveItem={handleSetActiveItem}
				handleAddToBasket={handleAddToBasket}
				handleUpdateBasketItem={handleUpdateBasketItem}
				items={items}
				basketItems={basketItems}
                handleRemoveBasketItem={handleRemoveBasketItem}
                handleUpdateStorageItemAmount={handleUpdateStorageItemAmount}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    items: state.app.items,
	activeItem: state.app.activeItem,
	basketItems: state.app.basket,
})

export default connect(mapStateToProps, {
    handleGetItems,
    handleSetActiveItem,
	handleAddToBasket,
	handleUpdateBasketItem,
    handleRemoveBasketItem,
    handleUpdateStorageItemAmount,
})(MainContainer)
