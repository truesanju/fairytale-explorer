import React, { Component } from 'react'
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

const options = [{
        label: 'Primary Colors',
        options: [
            { label: 'Yellow', value: 'yellow' },
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' }
        ]
    },
    {
        label: 'Secondary Colors',
        options: [
            { label: 'Orange', value: 'orange' },
            {
                label: 'Purple',
                options: [
                    { label: 'Light Purple', value: 'light_purple' },
                    { label: 'Medium Purple', value: 'medium_purple' },
                    { label: 'Dark Purple', value: 'dark_purple' }
                ]
            },
            { label: 'Green', value: 'green' }
        ]
    },
    {
        label: 'White',
        value: 'white',
    }
];

const SearchFilter = () => ( <
    Select options = { options } multi = { true }
    />
)

export default SearchFilter;