import BASE_URL from '../index';

const getEstimate = data => {
    return (dispatch) => {
        dispatch({ type: 'START_POSTING_CUSTOMER_INFO' })

        fetch(`${BASE_URL}/estimates`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response =>{
            return response.json();
        })
        .then(data => {
            dispatch({ type: 'QUOTE_GENERATED', quote: data.quote })
        })
        .catch(err => console.log('error in getEstimate', err));
    }
}
export default getEstimate;
