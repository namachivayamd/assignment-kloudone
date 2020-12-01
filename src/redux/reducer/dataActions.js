/* eslint-disable no-use-before-define */
import { dataConstants } from './dataConstants';
import { dataServices } from './dataServices';

export const dataActions = {
  getChartData,
};

function getChartData() {
  console.log('it is coming here');
  return dispatch => {
    dispatch(request());
    dataServices.getChartData().then(
      reports => dispatch(success(reports)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: dataConstants.GET_CHART_DATA_REQUEST };
  }
  function success(reports) {
    return { type: dataConstants.GET_CHART_DATA_SUCCESS, reports };
  }
  function failure(error) {
    return { type: dataConstants.GET_CHART_DATA_FAILURE, error };
  }
}
