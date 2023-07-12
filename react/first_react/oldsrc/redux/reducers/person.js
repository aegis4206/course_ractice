const initState = [{ id: '001', name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case 'add_person':
            console.log('加總')
            return [data, ...preState]
        default:
            return preState;
    }
}