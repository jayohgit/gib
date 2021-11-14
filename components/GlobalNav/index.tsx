// import SearchOutlined from '@mui/icons-material/SearchOutlined'
import styles from './globalnav.module.css'
import { craftLinkHref } from '../../lib/utils'

const Navbar = ({ globalNavItems }) => {
  const items = Object.values(globalNavItems)
  // const SearchButton = <SearchOutlined />
  let additionalItems = [
    'English | QC',
    'SearchButton',
    'Log In / Sign Up',
  ]

  const listItems = items.concat(additionalItems)

  return (
    <nav style={{ border: '1px solid green' }}>
      <ul className={`${styles['nav-list']} flex`}>
        {listItems.map((listItem, index) => (
          <li className="mr-6" key={`${listItem}`}>
            <a href={craftLinkHref(listItem)}>
              {listItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export type NavBarProps = {
  navigationalItems: object;
};

export default Navbar
