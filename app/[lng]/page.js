import HomePage from '@/components/home'

export default async function Page({ params : { lng }  }) {
  return (
    <>
      <HomePage lng={lng}/>
    </>
  )
}
