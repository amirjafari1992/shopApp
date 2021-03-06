import React from 'react'

const Item = (props) => {
    const { item, handleOpenModal } = props
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{item.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        ${item.price}
                    </h1>
                    <p className="mb-3">{item.description}</p>
                    <button
                        type="button"
                        onClick={() => handleOpenModal(item)}
                        className="btn btn-lg btn-block btn-outline-primary"
                    >
                        More details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item
