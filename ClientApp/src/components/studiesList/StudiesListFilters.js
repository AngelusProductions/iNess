import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByName, sortBySponsor, sortByProtocol } from '../../actions/filters'

class StudiesListFilters extends Component {

    onFilterInputChange = e => { this.props.dispatch(setTextFilter(e.target.value)) }
    onDropDownChange = e => {
        switch (e.target.value) {
            case 'name':
            default:
                this.props.dispatch(sortByName())
                break
            case 'sponsor':
                this.props.dispatch(sortBySponsor())
                break
            case 'protocol':
                this.props.dispatch(sortByProtocol())
                break
        }
    }

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
                    <option value="sponsor">Sponsor</option>
                    <option value="protocol">Protocol</option>
                </select>
            </div>
        )
    }
}

export default connect(({ filters }) => filters)(StudiesListFilters)
