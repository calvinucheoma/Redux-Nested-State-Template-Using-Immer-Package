const redux = require('redux');
const createStore = redux.legacy_createStore;
const produce = require('immer').produce

//action type
const UPDATE_STREET = 'UPDATE_STREET';

//action creator
const updateStreet = (street) => {
    return{
        type: UPDATE_STREET,
        payload: street,
    }
};

//initial state
const initialState = {  
    name: 'Chukwuma',
    address:{
        street: '158 Johnbull street',
        city: 'aba',
        state: 'abia',
    }
};

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_STREET:
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     }
            // };
            return produce(state, (draft) => {
                draft.address.street = action.payload
            });

        default: {
            return state;
        };
    }
};

//store
const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())});
store.dispatch(updateStreet('194 aba road'));
unsubscribe();
