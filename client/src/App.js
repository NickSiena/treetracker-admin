import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ThemeProvider}		from '@material-ui/styles';
import MainFrame		from './components/MainFrame';
import theme		from './components/common/theme';

class App extends Component {
  componentDidMount () {
    // in the future we want to maybe restore the users last filter set from the server
    // as well as deal with all the login state stuff.
    this.props.requestTreeCount()
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <MainFrame />
      </ThemeProvider>
    )
  }
}

const mapState = state => {
  return state
}

const mapDispatch = dispatch => ({
  requestTreeCount: id => dispatch.trees.requestTreeCount(),
  requestTrees: id => dispatch.trees.requestTrees()
})

export default connect(
  mapState,
  mapDispatch
)(App)
