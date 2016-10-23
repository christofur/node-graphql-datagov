
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history'

import Core from './components/Core/Core';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dataApp from './reducers';

import Utils from './components/Utils/Utils';

let store = createStore(dataApp, window.devToolsExtension && window.devToolsExtension())

$(() => { // prevent page reload when using dummy anchors
    $(document).on('click', '[href=""],[href="#"]', () => {
        return false;
    })
})

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })

// Declare routes
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="*" component={Core}>

                {/* Default route*/}
                <IndexRoute component={Home} />

            </Route>

        </Router>
    </Provider>,
    document.getElementById('app')
);
