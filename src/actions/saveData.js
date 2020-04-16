export default function saveData(data) {
    return (dispatch) => {
        switch(data.infoType) {
            case 'customer location':
                dispatch({ type: 'ADD_LOCATION_DATA', data })
            case 'bedroom and elevator info':
                dispatch({ type: 'ADD_BEDROOM_ELEVATOR_INFO', numOfBedrooms: data.numOfBedrooms, numOfFloors: data.numOfFloors, elevator: data.elevator})
            case 'parking':
                dispatch({ type: 'ADD_PARKING_INFO', parkingDistance: data.parkingDistance })
            case 'customer contact':
                dispatch({ type: 'ADD_CUSTOMER_CONTACT_INFO', customerName: data.customerName, customerEmail: data.customerEmail, customerPhone: data.customerPhone})
            default:
                dispatch({ type: 'UNKNOWN' })
        }
    }
}