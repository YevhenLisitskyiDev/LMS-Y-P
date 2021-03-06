import React from 'react'
import GetUsersbutton from '../../widgets/users/GetUsersbutton'
import CoursesCreaationTool from '../../widgets/admin/courses/CoursesCreaationTool'
import CoursesManagementTool from '../../widgets/admin/courses/CoursesManagementTool'

import { Helmet } from 'react-helmet'

import './admin.css'

const Admin = (props) => {
  return (
    <div className="admin-container">
      <Helmet>
        <title>Admin - LMS-V2</title>
        <meta property="og:title" content="Admin - LMS-V2" />
      </Helmet>
      <div className="admin-container1"></div>
      <h1>Admin Route</h1>
      <GetUsersbutton></GetUsersbutton>
      <div className="admin-container2">
        <div className="admin-container3">
          <h1 className="admin-add-new-course">
            <span>Resent courses</span>
          </h1>
          <CoursesCreaationTool></CoursesCreaationTool>
        </div>
        <CoursesManagementTool></CoursesManagementTool>
      </div>
    </div>
  )
}

export default Admin
