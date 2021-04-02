import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const AvoidSSRComponent = dynamic(() => import('../components/WeatherApp'), {
  ssr: false,
})

export const Home = (): JSX.Element => {
  return (
    <Layout title="Weather app">
      <AvoidSSRComponent />
    </Layout>
  )
}

export default Home
