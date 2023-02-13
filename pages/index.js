import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde corrupti mollitia adipisci reprehenderit nesciunt pariatur porro aperiam autem tempore voluptatibus ad nam quidem, praesentium, deleniti illum velit laudantium enim?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus aut voluptates quas consequuntur minima, reiciendis temporibus soluta quo dolorem veniam iure quisquam earum praesentium nesciunt ipsam vel voluptatibus vitae.</p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
     
    </div>
  )
}
