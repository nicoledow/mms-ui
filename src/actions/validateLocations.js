import BASE_URL from '../index';

const validateLocations = data => {
    const startingString = `${data['startingCity']}+${data['startingState']}`;
        const destinationString = `${data['destinationCity']}+${data['destinationState']}`;

        fetch(`${BASE_URL}distance`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ 'start': startingString, 'destination': destinationString })
        })
        .then(resp => resp.json())
        .then(obj => {
            if (obj['result'] === 'VALID'){
                return true;
            } else {
                return false;
            }
        });
}

export default validateLocations;