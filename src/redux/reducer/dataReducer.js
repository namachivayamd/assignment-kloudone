import { dataConstants } from './dataConstants';

function dataReducer(state = {}, action) {
  switch (action.type) {
    case dataConstants.GET_CHART_DATA_REQUEST:
      return {
        loading: true,
      };
    case dataConstants.GET_CHART_DATA_SUCCESS:
      return {
        items: action.reports,
      };
    case dataConstants.GET_CHART_DATA_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export default dataReducer;
