import { useParams, useNavigate } from 'react-router-dom';

function Movie() {
  const { title } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <h1>{title}</h1>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  );
}

export { Movie };
