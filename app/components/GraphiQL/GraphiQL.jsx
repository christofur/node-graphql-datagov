import React from 'react';
import GraphiQLComponent from 'graphiql';
import fetch from 'isomorphic-fetch';

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
      <GraphiQLComponent fetcher={this.graphQLFetcher} />
    );
  }
  
}

export default GraphiQL;