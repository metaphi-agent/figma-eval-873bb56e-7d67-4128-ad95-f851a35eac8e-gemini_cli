import { Layout } from '../components/Layout';
import { GameCard } from '../components/blocks/GameCard';
import { Button } from '../components/ui/Button';

export default function Store() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden shrink-0">
        <div className="absolute inset-0">
             <img src="https://picsum.photos/seed/steam-hero-main/1920/800" alt="Hero" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/70 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-8 relative h-full flex flex-col justify-center max-w-7xl">
           <div className="max-w-2xl animate-fade-in">
             <span className="text-accent-primary font-bold tracking-widest uppercase text-sm mb-2 block">Featured Update</span>
             <h1 className="text-6xl font-black mb-6 drop-shadow-2xl text-white leading-tight">
               EXPLORE NEW <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-green">WORLDS</span>
             </h1>
             <p className="text-xl text-text-dim mb-10 max-w-lg leading-relaxed drop-shadow-md">
               Discover the latest releases, top sellers, and upcoming titles from the world's greatest developers.
             </p>
             <div className="flex gap-4">
               <Button size="lg" variant="primary" className="shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40">Browse Store</Button>
               <Button size="lg" variant="secondary">Your Wishlist</Button>
             </div>
           </div>
        </div>
      </section>

      {/* Featured Games Grid */}
      <section className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                New & Trending
                <span className="text-accent-primary text-sm font-normal cursor-pointer hover:underline">See details</span>
            </h2>
            <div className="flex gap-2">
                 <Button variant="ghost" size="sm" className="bg-bg-tertiary/50">Prev</Button>
                 <Button variant="ghost" size="sm" className="bg-bg-tertiary/50">Next</Button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((i) => (
                <GameCard 
                    key={i}
                    title={`Epic Adventure ${i}`}
                    price={`$${(i * 15 + 19.99).toFixed(2)}`}
                    discount={i % 2 === 0 ? "-20%" : undefined}
                    image={`https://picsum.photos/seed/feature${i}/600/338`}
                    tags={['Action', 'RPG', 'Open World']}
                    className="h-full"
                />
            ))}
        </div>

        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Special Offers</h2>
             <Button variant="ghost" size="sm">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[5, 6, 7, 8, 9, 10].map((i) => (
                <GameCard 
                    key={i}
                    title={`Indie Gem ${i}`}
                    price={`$${(i * 5 + 4.99).toFixed(2)}`}
                    discount="-50%"
                    image={`https://picsum.photos/seed/indie${i}/600/338`}
                    tags={['Indie', 'Strategy']}
                    className="h-full"
                />
            ))}
        </div>
      </section>
    </Layout>
  );
}