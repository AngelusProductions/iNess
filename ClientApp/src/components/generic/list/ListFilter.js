import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTextFilter, setSoryBy } from '../../../actions/filters'

class ListFilter extends Component {
    constructor(props) {
        super(props)
    }

    onTextChange = e => { 
        this.props.dispatch(setTextFilter(e.target.value)) 
    }
    onDropDownChange = e => {
        this.props.dispatch(setSortBy(e.target.value))
    }

    render() {
        const { listItem, filters } = this.props
        return (
            <div>
                <input
                    type="text"
                    value={filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={filters.sortBy}
                    onChange={this.onDropDownChange}
                >
                    {Object.keys(listItem).map(key => {
                        return <option value={`${key}`}>{key}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default connect((
    { filters }) => filters
)(ListFilter)
