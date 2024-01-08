'use client';

export default function Home() {
  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const addToCart = () => {
    event({
      action: 'add_to_cart',
      category: 'ecommerce',
      label: 'Item added to cart',
      value: 'Tesla',
    });
  };

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1>Testing google analytics</h1>
      <button onClick={addToCart}>Add to cart</button>
    </main>
  );
}
