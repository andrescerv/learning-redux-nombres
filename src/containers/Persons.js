// paso 3
import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux'; // paso 3.1

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.createPerson} />
                {this.props.peopleArr.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        peopleArr: state.persons // como yo lo entiendo: peopleArr ahora es un "prop" de Persons.js
    }
} // paso 3.2.1 (suscripciones --> state alterando componentes)

const mapDispatchToProps = (dispatch) =>{
    return {
        createPerson: () => { // como yo lo entiendo: createPersons ahora es un "prop" de Persons.js
            return dispatch({
                type:'ADD'
            })
        },
        deletePerson: (id) => { // como yo lo entiendo: deletePerson ahora es un "prop" de Persons.js
            return dispatch({
                type:'DELETE',
                personId: id
            })
        }
    }
} // paso 3.2.2 (acciones --> componentes alterando el state)

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
// paso 3.2