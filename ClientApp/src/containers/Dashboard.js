import React, { Component } from 'react'
import { connect } from 'react-redux'

import StudiesList from '../components/studiesList/StudiesList'
import StudiesListFilters from '../components/studiesList/StudiesListFilters'

 class Dashboard extends Component {

     render() {
        return(
            <div>
                <StudiesListFilters />
                <StudiesList />
            </div>
        )
    }
}

export default connect(({ studies }) => studies)(Dashboard)