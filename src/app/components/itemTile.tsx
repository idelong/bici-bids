import Image from 'next/image';

interface ItemTileProps {
  title: string;
  lister: string;
  location: string | number; // could be number like zipcode?
  buyNowPrice: number;
  currentBid: number;
  timeLeft: number;
  watcherCount: number;
  imageUrl: string;
  // how to get images?

}

const ItemTile:React.FC<ItemTileProps> = ({
  title,
  lister,
  location,
  buyNowPrice,
  currentBid,
  timeLeft,
  watcherCount,
  imageUrl
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={imageUrl} alt={title} width={400} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Listed by: {lister}
        </p>
        <p className="text-gray-700 text-base">
          Location: {typeof location === 'string' ? location : `ZIP: ${location}`}
        </p>
        <p className="text-gray-700 text-base">
          Buy Now Price: ${buyNowPrice.toFixed(2)}
        </p>
        <p className="text-gray-700 text-base">
          Current Bid: ${currentBid.toFixed(2)}
        </p>
        <p className="text-gray-700 text-base">
          Time Left: {timeLeft} hours
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Watchers: {watcherCount}</span>
      </div>
    </div>
  );
}

export default ItemTile;