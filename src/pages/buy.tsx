import Header from '@/app/components/header';
import ItemTile from '@/app/components/itemTile';

export default function Buy() {
  return (
    <div>
      <Header page="Buy"/>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ItemTile
            title="Mountain Bike"
            lister="John Doe"
            location="New York"
            buyNowPrice={500}
            currentBid={300}
            timeLeft={48}
            watcherCount={15}
            imageUrl="/path/to/image1.jpg"
          />
          <ItemTile
            title="Road Bike"
            lister="Jane Smith"
            location="Seattle"
            buyNowPrice={750}
            currentBid={450}
            timeLeft={24}
            watcherCount={10}
            imageUrl="/path/to/image2.jpg"
          />
          <ItemTile
            title="Electric Bike"
            lister="Bob Johnson"
            location="San Francisco"
            buyNowPrice={1200}
            currentBid={950}
            timeLeft={72}
            watcherCount={25}
            imageUrl="/path/to/image3.jpg"
          />
          <ItemTile
            title="Hybrid Bike"
            lister="Alice Brown"
            location="New York"
            buyNowPrice={650}
            currentBid={500}
            timeLeft={36}
            watcherCount={20}
            imageUrl="/path/to/image4.jpg"
          />
        </div>
      </div>
    </div>
  );
}