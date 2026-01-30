import { clsx } from 'clsx';

interface GameProps {
  title: string;
  image: string;
  price: string;
  discount?: string;
  tags?: string[];
  className?: string;
}

export function GameCard({ title, image, price, discount, tags, className }: GameProps) {
  return (
    <div className={clsx('group relative bg-bg-tertiary rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl hover:shadow-accent-primary/10', className)}>
      <div className="aspect-[16/9] w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg leading-tight truncate group-hover:text-accent-primary transition-colors">{title}</h3>
        <div className="flex items-center gap-2 mt-2 text-xs text-text-dim">
            {tags?.map(tag => <span key={tag} className="bg-bg-secondary px-2 py-1 rounded">{tag}</span>)}
        </div>
        
        <div className="flex items-center justify-between mt-4">
            {discount && (
                <span className="bg-accent-green text-bg-main px-2 py-0.5 rounded font-bold text-xs">
                    {discount}
                </span>
            )}
            <span className={clsx('font-medium', discount ? 'text-text-dim line-through text-xs ml-auto mr-2' : 'text-text-main ml-auto')}>
                {discount ? price : price} 
            </span>
             {discount && <span className="text-accent-primary font-bold">{`$${(parseFloat(price.replace('$','')) * 0.8).toFixed(2)}`}</span>}
        </div>
      </div>
    </div>
  );
}