import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [item, setDashboard] = useState([])


  const viewAllData = () => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data)
      setDashboard(response.data)
    })

  }

  React.useEffect(() => { viewAllData() }, [])


  return (<div> <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          {
            item.map((value, index) => {

              return <div><br></br><div className="card">
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Id : {value.id}</h6>
                  <p className="card-text">Email : <Link to="#" className="card-link">{value.email}</Link></p>
                </div>
              </div></div>
            })
          }




        </div>
      </div>
    </div>
  </div>


  )
}

export default Dashboard