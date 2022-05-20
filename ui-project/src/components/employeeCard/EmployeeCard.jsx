

import "./EmployeeCard.css"
const EmployeeCard = (props) => {
    const { employee } = props
    const { name, position } = employee
    return (
        <div className="employeeCard">
            <p>Name: {name}</p>
            <p>Position: {position}</p>
        </div>
    )
}

export default EmployeeCard