import React from 'react'
import Item from './item/item'
import MainItemModal from './mainItemModal'
import './styles/mainItem.scss'

const MainItem = (props) => {
    const { item, handleSetActiveItem } = props
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const handleOpenModal = (data) => {
        handleSetActiveItem(data)
        setIsModalOpen(true)
    }

    return (
        <>
            <Item item={item} handleOpenModal={handleOpenModal} />
            <MainItemModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                {...props}
            />
        </>
    )
}

export default MainItem
