import { dataConstants } from './dataConstants';

function barReducer(state = {}, action) {
  switch (action.type) {
    case dataConstants.GET_BAR_CHART_DATA_REQUEST:
      return {
        loading: true,
      };
    case dataConstants.GET_BAR_CHART_DATA_SUCCESS:
      return {
        items: action.reports,
      };
    case dataConstants.GET_BAR_CHART_DATA_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export default barReducer;
