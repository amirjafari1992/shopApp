import React from 'react'
import './styles/modal.scss'

const Modal = (props) => {
    const { status, handleClose, children, title } = props
    return (
        <>
            {status && (
                <div className="c-modal">
                    <div className="c-modal__bg" onClick={handleClose}></div>
                    <div className="c-modal__box box">
                        <div className="box__header d-flex justify-content-between">
                            <span className="box__title">{title}</span>
                        </div>
                        <div className="box__main">
                            {children}
                            <div className="btn-box d-flex">
                                <button
                                    onClick={handleClose}
                                    className="btn btn-secondary ml-auto mt-5"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
