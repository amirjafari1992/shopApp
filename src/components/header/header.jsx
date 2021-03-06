import React from 'react'
import { connect } from 'react-redux'
import { handleRemoveBasketItem } from '../../actions/itemsActions'
import Basket from './basket'
import './styles/header.scss'

const Header = (props) => {
    const { basketItems, handleRemoveBasketItem } = props
    return (
        <div className="c-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed">
            <h5 className="my-0 mr-md-auto font-weight-normal">MalwareByte Test</h5>
            <Basket
                handleRemoveBasketItem={handleRemoveBasketItem}
                basketItems={basketItems}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    basketItems: state.app.basket,
})

export default connect(mapStateToProps, { handleRemoveBasketItem })(Header)
