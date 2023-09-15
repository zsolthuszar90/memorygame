import React from 'react'
import { ConfirmModalType } from '../../types'
import './confirm-modal.css'

const ConfirmModal: React.FC<ConfirmModalType> = ({cancel, confirm, caption}) => {
    return (
        <div className='confirm-modal__container'>
            <div className='confirm-modal__body'>
                <p>{caption}</p>
                <div className='confirm-modal__buttons'>
                    <p onClick={cancel}>Cancel</p>
                    <p onClick={confirm}>Confirm</p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal