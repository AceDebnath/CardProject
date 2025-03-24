import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}

//Default props 
Student.defaultProps = {
    name:"Guest",
    age:10,
    isStudent:false //For some reason the default prop is not working
    
}

// Define prop types for the component manual
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};




export default Student;