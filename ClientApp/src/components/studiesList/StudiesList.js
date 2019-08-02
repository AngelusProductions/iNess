import React from 'react'
import { connect } from 'react-redux'

import StudiesListItem from './StudiesListItem'
import selectStudies from '../../selectors/studies'

const StudiesList = props => 
  <div>
    <h1>Studies</h1>
        {props.studies.map(study =>
            <StudiesListItem key={study.id} {...study} />
        )}
  </div>

export default connect(
    state => state.studies
)(StudiesList)
