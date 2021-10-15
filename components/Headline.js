import styles from './Headline.module.css'

export function Headline(props) {
  return (
    <div>
        <h1 className={styles.title}>
          {props.page} Page
          <a href="http://localhost:3000/about">about page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing {props.children}
        </p>
    </div>
  )
}
