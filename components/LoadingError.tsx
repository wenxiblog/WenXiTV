
// components/LoadingError.tsx
export default function LoadingError({ error, loading }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return null;
}
