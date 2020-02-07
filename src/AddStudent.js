import React from 'react';

function AddStudent( props ){

    let onAdd = ( event ) => {
        event.preventDefault();

        let newStudent = {
            name : event.target.studentName.value,
            id : event.target.studentID.value 
        }

        console.log( newStudent );

        props.addNewStudent( newStudent );
    }

    return(
        <form onSubmit={(e) => onAdd(e)}>
            <label>
                Name : <input type="text" name="studentName" />
            </label>
            <label>
                Id : <input type="text" name="studentID" />
            </label>

            <button type="submit">
                Add
            </button>
        </form>
    )
}

export default AddStudent;