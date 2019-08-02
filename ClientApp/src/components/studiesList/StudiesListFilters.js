import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByName } from '../../actions/filters'

class StudiesListFilters extends Component {

    onFilterInputChange = e => { this.props.dispatch(setTextFilter(e.target.value)) }
    onDropDownChange = e => (
        e.target.value === 'name' ? this.props.dispatch(sortByName())
            : e.target.value === 'date' ? this.props.dispatch(sortByName()) : ''
    )

    render() {
        const { props: filters } = this
        return (
            <div>
            <input
                type="text"
                value={filters.text}
                onChange={this.onFilterInputChange.bind(this)}
            />
            <select
                value={filters.sortBy}
                onChange={this.onDropDownChange.bind(this)}
            >
                <option value="name">Name</option>
                <option value="name">Name</option>
            </select>
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => filters

export default connect(mapStateToProps)(StudiesListFilters)
