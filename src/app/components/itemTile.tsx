import Image from 'next/image';
import Link from 'next/link';

interface ItemTileProps {
  id: string;
  model: string;
  brand: string;
  year: number;
  location: string | number; // could be number like zipcode?
  currentBid: number;
  timeLeft: number;
  watcherCount: number;
  imageUrl: string;
}

const ItemTile: React.FC<ItemTileProps> = ({
  id,
  model,
  brand,
  year,
  location,
  currentBid,
  timeLeft,
  watcherCount,
  imageUrl
}) => {
  return (
    <Link href={{ pathname: '/listing', query: { id } }}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col">
        <div className="relative w-full h-48">
          <Image className="object-cover" src={imageUrl} alt={`${year} ${brand} ${model}`} layout="fill" />
        </div>
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2 h-16 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {year + " " + brand + " " + model}
          </div>
          <div className="">
            <p className="text-gray-700 text-base">
              📍 {typeof location === 'string' ? location : `ZIP: ${location}`}
            </p>
            <p className="text-gray-700 text-base">
              Current Bid: ${currentBid.toFixed(2)}
            </p>
            <p className="text-gray-700 text-base">
              Time Left: {timeLeft} hours
            </p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Watchers: {watcherCount}</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemTile;
