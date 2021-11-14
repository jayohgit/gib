import styles from './secondarynav.module.css'
import Image from 'next/image'

function SecondaryNav() {
  const myLoader = ({ src, width, quality }) => {
    // TODO: add environment variable
    return `http://localhost:3000${src}?w=${width}&q=${
      quality || 75
    }`
  }

  const makeLineItems = [
    {
      liClassName: '',
      innerHtml: 'Accounts',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Credit Cards',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Mortgages',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Loans',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Investments',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Insurance',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
    {
      liClassName: '',
      innerHtml: 'Tools & Advice ',
      anchorClassName: 'no-underline hover:underline text-lg',
    },
  ]
  return (
    <nav className={styles['secondary-list']}>
      <ul
        className="grid grid-cols-1 md:grid-cols-6  space-x-4"
        style={{ alignItems: 'center' }}
      >
        <li className="">
          <a
            className="no-underline hover:underline text-lg"
            href="#"
          >
            <Image
              src={'/logo.png'}
              alt="Picture of the author"
              loader={myLoader}
              width={200} // automatically provided
              height={75} // automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </a>
        </li>
        {makeLineItems.map((lineItem) => (
          <li className={lineItem.liClassName} key={lineItem.innerHtml}>
            <a className={lineItem.anchorClassName} href="#">
              {lineItem.innerHtml}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SecondaryNav

{
  /* <ul className="flex justify-between">
        <li className="flex-1 bg-gray-400 h-12">className="mr-3">
          < className="flex-1 bg-gray-400 h-12">
            className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            href="#"
          >
            Logo
          </a className="flex-1 bg-gray-400 h-12">
        </l className="flex-1 bg-gray-400 h-12">>
        <li className="flex-1 bg-gray-400 h-12">className="mr-3">
          < className="flex-1 bg-gray-400 h-12">
            className="inline-block py-2 px-4"
            href="#"
          >
            Accounts
          </a className="flex-1 bg-gray-400 h-12">
        </li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Credit Cards
          </a>
        </li> 
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
           Mortgages 
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Loans
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
           Investments 
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
           Insurance 
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
           Tools & Advice 
          </a>
        </li>
      </ul> */
}
