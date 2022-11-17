import { TJobList } from 'types'

export async function getServerSideProps() {
  const response = await fetch(
    process.env.API_PATH as string,
    {
      headers:
      {
        'Authorization': `Bearer ${process.env.API_BEARER_TOKEN}`,
      }
    })
 
  const data: TJobList = await response.json()
  
  if (!data) return { notFound: true }
  
  return {
    props: { data }
  }
}

type TJobsProps = {
  data: TJobList
}

const Jobs = ({ data }: TJobsProps) => {
  
  return (
    <>
      <h1>Jobs List</h1>
      {data.map((job) => <div key={job.id}>{ job.name}</div>)}
    </>
  )
}

export default Jobs