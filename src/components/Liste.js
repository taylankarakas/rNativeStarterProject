import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay';

export default class Liste extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
        this.getData = this.getData.bind(this);
    }

    componentWillMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ data: response.data }));
    }

    getData() {
        return this.state.data.map((item, id) => 
            <Detay key={id} data={item} />
        );
    }
    
    render() {
        return (
            <ScrollView>
                { this.getData() }
            </ScrollView>
        );
    }
}
