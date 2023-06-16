import { Link } from 'react-router-dom'

export default function DemoGallery() {
  const { origin } = document.location

  return (
    <>
      <div>
        <Link
          to={`${origin}/movies`}
          reloadDocument
        >
          Movies Scores
        </Link>
      </div>
      <div>
        <Link
          to={`${origin}/sample_landing`}
          reloadDocument
        >
          Sample Landing
        </Link>
      </div>
    </>
  )
}
