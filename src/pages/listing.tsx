import { useRouter } from 'next/router';

interface ListingProps {
  id: string
}

const Listing:React.FC<ListingProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id ? (
        <p>Listing ID: {id}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Listing;