import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from 'axios';

export default class CountrySelector extends Component {
    constructor(props) {
        super(props)

        this.options = countryList().getData()

        this.state = {
            options: this.options,
            value: '',
        }
    }

    changeHandler = value => {
        let array = [];
        Object.keys(this.state.value).map((key, index) => {
            const myItem = this.state.value[key];
            array.push(myItem);
        })
        this.setState({ value: array[0] });


    };



    fetchCountryData = async () => {

        const url_daily1 = `https://covid19.mathdro.id/api/daily/${this.state.value}`;
        try {
            const data = await axios.get(url_daily1);
            console.log(data);


        } catch (error) {
            console.log(error);
        }
    }


    render() {

        return (

            < div >
                <Select
                    ref={(input) => this.menu = input}
                    options={this.state.options}
                    value={this.state.value}
                    onChange={this.changeHandler}

                />

            </div >

        )
    }
}