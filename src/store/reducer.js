// paso2: preparara el 'reducer'

const intitialState = {
    persons: []
} // paso2.1: estructura del state

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'ADD': // los switches van en mayúscula
            const newPerson = {
                id: Math.random(),
                name: 'Mike',
                age: Math.floor( Math.random() * 40)
            }
            return {
                persons: state.persons.concat(newPerson)
            }

        case 'DELETE':
            return {
                persons: state.persons.filter(person => person.id !== action.personId)
            }

        default:
            return state;
    } //paso 2.2.1: estrucutra del switch
} // paso2.2: estuctura del reducer

export default reducer; // paso2.3: exportar el reducer