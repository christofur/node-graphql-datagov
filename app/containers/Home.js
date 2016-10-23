import { connect } from 'react-redux';
import GraphiQL from '../components/GraphiQL/GraphiQL';


const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(GraphiQL);

export default Home;



