
// hooks/useFetchData.ts
import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export function useFetchData(endpoint: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData(endpoint);
        setData(responseData);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };
    fetchDataFromApi();
  }, [endpoint]);

  return { data, error };
}
