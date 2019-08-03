import React, { Component } from 'react'
import { connect } from 'react-redux'

import StudiesListItem from './StudiesListItem'
import selectStudies from '../../selectors/studies'
import getStudies from '../../actions/studies'

class StudiesList extends Component {

    componentDidMount() { this.props.dispatch(getStudies) }  

    render() {
        return (
            <div>
                <h1>Studies</h1>
                {this.props.visibleStudies.map(study => {
                    return <StudiesListItem key={study.id} {...study} />
                })}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        visibleStudies: selectStudies(state.studies.studies, state.filters)
    }
}

export default connect(mapStateToProps)(StudiesList)
