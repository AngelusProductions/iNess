import React, { Component } from 'react'

import { capitalize } from '../constants.js.js'
import selectByText from '../../../selectors/selectByText'
import getListOf from '../../../actions/gets'
import ListItem from './ListItem'

class List extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() { this.props.dispatch(getListOf(this.props.type)) }  

    render() {
        const { list, type, filters } = this.props
        return (
            <div>
                <h1>{capitalize(type)}</h1>
                {selectByText(list, filters).map(item => {
                    return <ListItem key={item.id} {...item} />
                })}
            </div>
        )
    }
} 

export default List
