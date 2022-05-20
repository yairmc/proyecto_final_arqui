import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import EmployeeCard from "../../components/employeeCard/EmployeeCard"
const url = "http://localhost:3004/employees"

import "./AdminHabitante.css"
const AdminHabitante = () => {
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()
  const queryApiEmployees = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      setEmployees(data)
    } catch (error) {
      setEmployees([])
    }
  }
  const backToLogin = () => {
    navigate("/")
  }
  useEffect(() => {
    queryApiEmployees()
  }, [])


  return (
    <>
      <header className="header">
        <h1>Administracion habitantes</h1>
        <button onClick={backToLogin}>Cerrar sesion</button>
      </header>
      <div className="adminHabitante">
        <section className="employeesList">
          <h2>Lista de empleados</h2>
          {
            employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                employee={employee}
              />
            ))
          }
        </section>
      </div>
    </>
  )
}

export default AdminHabitante