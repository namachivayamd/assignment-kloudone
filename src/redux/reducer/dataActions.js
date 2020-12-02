/* eslint-disable no-use-before-define */
import { dataConstants } from './dataConstants';
import { dataServices } from './dataServices';

export const dataActions = {
  getPieChartData,
  getBarChartData,
};

function getPieChartData() {
  return dispatch => {
    dispatch(request());
    dataServices.getPieChartData().then(
      reports => dispatch(success(reports)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: dataConstants.GET_PIE_CHART_DATA_REQUEST };
  }
  function success(reports) {
    return { type: dataConstants.GET_PIE_CHART_DATA_SUCCESS, reports };
  }
  function failure(error) {
    return { type: dataConstants.GET_PIE_CHART_DATA_FAILURE, error };
  }
}

function getBarChartData() {
  return dispatch => {
    dispatch(request());
    dataServices.getBarChartData().then(
      reports => dispatch(success(reports)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: dataConstants.GET_BAR_CHART_DATA_REQUEST };
  }
  function success(reports) {
    return { type: dataConstants.GET_BAR_CHART_DATA_SUCCESS, reports };
  }
  function failure(error) {
    return { type: dataConstants.GET_BAR_CHART_DATA_FAILURE, error };
  }
}
