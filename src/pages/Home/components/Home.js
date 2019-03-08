import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from './SideBar';
import TopBar from './TopBar';
import AccountSettings from '../../Accounts/components/settings/AccountsSettings';
import Categories from '../../Categories/components/CategoriesSetings';
import Dashboard from '../../Accounts/components/settings/AccountsSettings';
import { getAccounts } from '../../Accounts/actions/accountActions';

class Home extends React.Component {
  /**
   * After component is mounted get the account list from API
   */
  componentDidMount = () => {
    this.props.getAccounts();
  }

  render() {
    return (
      <div>
        <SideBar />
        <TopBar />
        <div>
          <div className="app-content">
            <div className="app-content-options">
              <Switch>
                <Route exact strict component={Dashboard} path="/app/home/dashboard" />
                <Route exact strict component={AccountSettings} path="/app/home/settings/accounts" />
                <Route exact strict component={Categories} path="/app/home/settings/categories" />
                <Redirect from="/app" to="/app/home/dashboard" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Get access to the action getAccounts defined in redux actions
 * @param {function} dispatch 
 */
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({getAccounts}, dispatch)
});

export default connect(null, mapDispatchToProps)(Home);
