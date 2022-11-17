import Container from 'components/Container'
import JobCard from 'components/JobCard'
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
  console.log(data);
  
  return (
    <Container>
      <h1 className='text-4xl'>Jobs List</h1>
      {data.map(
        (job) => <JobCard key={job.id} jobDetails={job} />)
      }
    </Container>
  )
}

export default Jobs