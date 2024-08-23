import React from 'react'
import styles from './page.module.css'

const layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.heading}>Our Works</h1>
      {children}
    </div>
  )
}

export default layout