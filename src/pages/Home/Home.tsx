import styles from './Home.module.scss'
import Button from '@/components/Button'

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Hello World.</h1>
      <Button text='test' />
    </>
  )
}

export default Home
