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
        peopleArr: state.persons
    }
} // paso 3.2.1 (suscripciones --> state alterando componentes)

const mapDispatchToProps = (dispatch) =>{
    return {
        createPerson: () => {
            return dispatch({
                type:'ADD'
            })
        },
        deletePerson: (id) => {
            return dispatch({
                type:'DELETE',
                personId: id
            })
        }
    }
} // paso 3.2.2 (acciones --> componentes alterando el state)

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
// paso 3.2