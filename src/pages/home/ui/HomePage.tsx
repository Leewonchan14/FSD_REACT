import { useSearchParams } from 'react-router-dom';
import { useQueryStrings } from '../../../shared/libs';
export default function HomePage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const { query, setQuery } = useQueryStrings(searchParam, setSearchParam);

  const count = Number(query.count ?? 0);

  return (
    <div>
      HomePage
      <br />
      {count}
      <br />
      <button
        onClick={() => setQuery({ ...query, count: `${count + 1}` })}
      >
        click
      </button>
    </div>
  );
}
