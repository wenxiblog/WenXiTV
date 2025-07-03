
// components/ExampleComponent.tsx
import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

export default function ExampleComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData('endpoint');
        setData(responseData);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };
    fetchDataFromApi();
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
}
