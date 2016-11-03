import { SEARCH_FOCUS_CHANGE, SEARCH_QUERY } from '../../Store/actions';

export const searchQueryAction = (query) => {
  return {
    type: SEARCH_QUERY,
    query
  };
};

export const searchFocusChangeAction = (focused) => {
  return {
    type: SEARCH_FOCUS_CHANGE,
    focused
  };
};

export const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export const mapDispatchToProps = (dispatch) => ({
  onFocusChange: (focused) => {
    dispatch(searchFocusChangeAction(focused));
  },
  onSearch: (query) => {
    dispatch(searchQueryAction(query));
  }
});
