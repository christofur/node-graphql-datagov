import React from 'react';
import GraphiQLComponent from 'graphiql';
import fetch from 'isomorphic-fetch';
import { Grid } from 'react-bootstrap';

import './GraphiQL.scss';

class GraphiQL extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  componentDidMount() {}
  graphQLFetcher(graphQLParams) {
    return fetch(window.location.origin + '/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
  render() {
    return (
    <section>
      <Grid fluid className="bg-full bg-pic1">
        <div className="container container-md">
          <div className="card animated fadeInUp b0">
            <div className="card-item card-media bg-pic4">
              <div className="card-item-text bg-transparent">
                <h4>datagov-graphql</h4>
              </div>
            </div>
            <div className="card-offset">
              <div className="card-offset-item text-right">
                <button type="button" className="btn-raised btn btn-danger btn-circle btn-lg">
                  <em className="ion-ios-heart-outline"></em>
                </button>
              </div>
            </div>
            <div className="card-body pt0">
              <div className="container container-md reader-block">
                <GraphiQLComponent fetcher={ this.graphQLFetcher }/>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </section>
    );
  }
}

export default GraphiQL;