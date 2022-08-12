import React from "react";
import Select from 'react-select'
import "./Filter.scss"


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#fff',
        background: '#29313C',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 25,
        paddingRight: 25,
    }),
    control: () => ({
        background: '#29313C',
        borderRadius: '5px',
        paddingTop: 18,
        paddingBottom: 18,
        display: 'flex'
    }),
    indicatorSeparator: () => (
        {
            
        }
    )

}
const Filter = (props) => {
    let className = 'filter'
    if (props.classes) className += ` ${props.classes}`

    return ( <>
        <div className={className}>
            <input type="text" placeholder="search" className="filter__input" />
            <Select options={options} styles={customStyles} />
            <Select options={options} styles={customStyles} />
            <Select options={options} styles={customStyles} />
            <Select options={options} styles={customStyles} />
            <Select options={options} styles={customStyles} />
            <Select options={options} styles={customStyles} />
            <button className="filter__btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Cart
            </button>
         </div>
        </>
    )
}

export default Filter