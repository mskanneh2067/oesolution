import {assets }from "../assets/assets"
export const Menu = [
  {
    id:1,
    menuItem:'Home',
    menuLink:'/'
  },
  {
    id:2,
    menuItem:'All Doctors',
    menuLink:'/doctors'
  },
  {
    id:3,
    menuItem:'About',
    menuLink:'/about'
  },
  {
    id:4,
    menuItem:'Contact',
    menuLink:'/contact'
  },
]
export const AdminMenu = [
  {
    id:1,
    menuItem:'Dashboard',
    menuLink:'/admin-dashboard',
    image:assets.home_icon
  },
  {
    id:2,
    menuItem:'Appointments',
    menuLink:'/all-appointments',
    image:assets.appointment_icon
  },
  {
    id:3,
    menuItem:'Add Doctor',
    menuLink:'/add-doctor',
    image:assets.add_icon
  },
  {
    id:4,
    menuItem:'Doctor List',
    menuLink:'/doctor-list',
    image:assets.people_icon
  },
]
export const DoctorMenu = [
  {
    id:1,
    menuItem:'Dashboard',
    menuLink:'/doctor-dashboard',
    image:assets.home_icon
  },
  {
    id:2,
    menuItem:'Appointments',
    menuLink:'/doctor-appointments',
    image:assets.appointment_icon
  },

  {
    id:4,
    menuItem:'Profile',
    menuLink:'/doctor-profile',
    image:assets.people_icon
  },
]