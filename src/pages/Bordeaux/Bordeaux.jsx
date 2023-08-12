import React from 'react'
import Menu from '../../components/MenuHamburger/MenuHamburger'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import FooterMobile from '../../components/Footer/FooterMobile'
import SearchBarMobile from '../../components/Searching/SearchBarMobile'
import SelectionTypeFood from '../../components/SelectionTypeFood/SelectionTypeFood'
import SelectionTypeStore from '../../components/SelectionTypeStore/SelectionTypeStore'
import NavCity from '../../components/Nav/NavCity'

const Bordeaux = () => {
  return (
    <div>
      <Nav />
      <NavCity />
      <SearchBarMobile />
      <SelectionTypeFood />
      <SelectionTypeStore />
      <FooterMobile />
    </div>
  )
}

export default Bordeaux