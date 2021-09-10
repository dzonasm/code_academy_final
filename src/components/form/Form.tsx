import React, {useRef} from 'react'
import {useDispatch } from 'react-redux'
import {reducerActions} from '../../redux/types/types'
import CustomButton from '../custom-button/custom-button.component'

import './form.styles.css'

const Form: React.FC = () => {

    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)
    const price = useRef<HTMLInputElement>(null)
    const imgUrl = useRef<HTMLInputElement>(null)
    const id = Math.random()
    
    const dispatch = useDispatch()
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
        dispatch({type: reducerActions.ADD_NEW_ITEM , payload: {
            id: id,
            title: title.current?.value,
            description: description.current?.value,
            price: price.current?.value,
            imgUrl: imgUrl.current?.value
        }})
    }
    
    return(

        <div className='form-container'>
            <form className= 'form'onSubmit={handleSubmit}>
                <label className='label'>Title</label>
                <div className='form-input'>
                <input type='text' ref={title} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <label className='label'>Description</label>
                <div className='form-input'>
                <input type='text' ref={description} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <br/>
                <label className='label'>Price $</label>
                <div className='form-input'>
                <input type='text' ref={price} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <label className='label'>Photo Url</label>
                <div className='form-input'>
                <input type='text' ref={imgUrl} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <CustomButton wide type='submit' buttonText='Pridėti skelbima'></CustomButton>
            </form>
        </div>
    )
}
export default Form;