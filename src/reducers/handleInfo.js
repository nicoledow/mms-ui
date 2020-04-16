export default function handleInfo(state = { requesting: false }, action) {
    switch(action.type) {
        case 'ADD_LOCATION_DATA':
            return {...state, startingCity: action.data.startingCity, destinationCity: action.data.destinationCity, startingState: action.data.startingState, destinationState: action.data.destinationState};
        case 'ADD_BEDROOM_ELEVATOR_INFO':
            return {...state, numOfBedrooms: action.numOfBedrooms, numOfFloors: action.numOfFloors, elevator: action.elevator, requesting: false };
        case 'ADD_PARKING_INFO':
            return {...state, parkingDistance: action.parkingDistance, requesting: false };
        case 'ADD_CUSTOMER_CONTACT_INFO':
            return {...state, customerName: action.customerName, customerEmail: action.customerEmail, customerPhone: action.customerPhone, requesting: false };
        case 'START_POSTING_CUSTOMER_INFO':
            return {...state, requesting: true}
        case 'QUOTE_GENERATED':
            return {...state, requesting: false, quote: action.quote }
        default:
            return state;
    }
};