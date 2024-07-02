import Header from '@/app/components/header';
import ItemTile from '@/app/components/itemTile';

export default function Buy() {
  return (
    <div>
      <Header page="Buy"/>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ItemTile
            id="1"
            model="Gan Disc"
            brand="Pinarello"
            year={2022}
            location="New York, NY"
            currentBid={300}
            timeLeft={48}
            watcherCount={15}
            imageUrl="/2022-pinarello-gan.jpg"
          />
          <ItemTile
            id="2"
            model="Ultimate"
            brand="Canyon"
            year={2024}
            location="Seattle, WA"
            currentBid={450}
            timeLeft={24}
            watcherCount={10}
            imageUrl="/2024-Canyon-Endurace-CF-SLX-8-eTap-1.jpg"
          />
          <ItemTile
            id="3"
            model="Endurace SLX SL"
            brand="Canyon"
            year={2023}
            location="San Francisco, CA"
            currentBid={950}
            timeLeft={72}
            watcherCount={25}
            imageUrl="/BiciLogo700.svg"
          />
          <ItemTile
            id="4"
            model="Dogma"
            brand="Pinarello"
            year={2022}
            location="Austin, TX"
            currentBid={500}
            timeLeft={36}
            watcherCount={20}
            imageUrl="/BiciLogo700.svg"
          />
        </div>
      </div>
    </div>
  );
}