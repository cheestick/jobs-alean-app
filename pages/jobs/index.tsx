import Container from 'components/Container'
import JobBar from 'components/JobBar'
import { TJobList } from 'types'

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_PATH}`,
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

type TJobListProps = {
  data: TJobList
}

const JobList = ({ data }: TJobListProps) => {  
  return (
    <main className='pt-[9px] pb-[17px] bg-main-backdrop'>
      <Container>
        <h1 className='visually-hidden text-4xl' aria-hidden>Job List</h1>
        <div className='flex flex-col flex-1 gap-2'>
          {data.map(
            (job) => <JobBar key={job.id} jobDetails={job} />)
          }
        </div>
      </Container>
    </main>
  )
}

export default JobList