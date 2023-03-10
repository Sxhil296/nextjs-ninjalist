import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect} from 'react'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 4000)
  }, [])


  return (
    <div className='not-fount'>
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound