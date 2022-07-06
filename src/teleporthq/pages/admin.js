import React from 'react'
import GetUsersbutton from '../../widgets/users/GetUsersbutton'
import CoursesCreator from '../../widgets/admin/courses/CoursesCreator'

import { Helmet } from 'react-helmet'

import './admin.css'

const Admin = (props) => {
  return (
    <div className="admin-container">
      <Helmet>
        <title>Admin - LMS-V2</title>
        <meta property="og:title" content="Admin - LMS-V2" />
      </Helmet>
      <h1>Admin Route</h1>
      <GetUsersbutton></GetUsersbutton>
      <div className="admin-container1">
        <div className="admin-container2">
          <h1 className="admin-add-new-course">Add new course</h1>
          <CoursesCreator></CoursesCreator>
        </div>
        <div className="admin-container3"></div>
      </div>
    </div>
  )
}

export default Admin
