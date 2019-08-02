import React, { Component } from 'react';
import { connect } from 'react-redux'

import StudiesList from '../components/studiesList/StudiesList';
import StudiesListFilters from '../components/studiesList/StudiesListFilters';

import getStudies from '../actions/studies'

 class Dashboard extends Component {

    componentDidMount() { this.props.dispatch(getStudies) }

     render() {
        return(
            <div>
                <StudiesListFilters />
                <StudiesList />
            </div>
        )
    }
}

const mapStateToProps = ({ studies }) => studies

export default connect(mapStateToProps)(Dashboard)