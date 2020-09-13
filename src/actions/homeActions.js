import { FETCH_LARGE_DATA } from './types';

export const fetchLargeData = () => dispatch => {

    fetch('https://api.covid19india.org/data.json')
      .then(res => res.json())
      .then(laData => {
          console.log(laData);
          dispatch({
            type: FETCH_LARGE_DATA,
            payload: laData
          });
        }
      );

}