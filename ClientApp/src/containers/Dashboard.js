import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../components/generic/list/List'
import ListFilter from '../components/generic/list/ListFilter'

 class Dashboard extends Component {

     render() {
        return(
            <div>
                <ListFilter items={this.props.studies} />
                <List items={this.props.studies} />
            </div>
        )
    }
}

export default connect(
    ({ studies }) => studies
)(Dashboard)