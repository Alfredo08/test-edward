import React from 'react';
import './App.css';
import AddStudent from './AddStudent';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      students : [{
        name : "Alfredo",
        id : 12345
      },
      {
        name : "Edward",
        id : 54321
      }]
    }
  }

  addNewStudent = ( student ) => {
    let fullList = this.state.students;
    fullList.push( student );

    this.setState({
      students : fullList
    });

  }

  render(){
    return (
      <div className="App">
        <ul>
          {this.state.students.map( student => {
            return (
              <li>
                {student.name} {student.id}
              </li>
            )
          })}
        </ul>

        <AddStudent addNewStudent={this.addNewStudent} />
       
      </div>
  );
  }
}

export default App;
