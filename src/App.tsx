function App() {
  return (
    <article className="flex h-[610px] w-[344px] flex-col overflow-hidden rounded-lg bg-white lg:h-[450px] lg:w-[600px] lg:flex-row">
      <section className="lg:flex-1">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="./image-product-desktop.jpg"
          />
          <img
            src="image-product-mobile.jpg"
            alt="Product Image"
            className="w-full"
          />
        </picture>
      </section>
      <section className="lg:flex-1">
        <div className="p-6 lg:p-8">
          <header>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-dark-grayish-blue lg:tracking-[0.4em]">
              Perfume
            </p>
            <h1 className="py-3 font-Fraunces text-[32px] font-bold leading-8 text-very-dark-blue lg:py-6">
              Gabrielle Essence Eau De Parfum
            </h1>
          </header>
          <p className="py-1 font-medium leading-[1.65] text-dark-grayish-blue lg:py-0">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="flex items-center py-4 font-Fraunces text-3xl text-dark-cyan lg:py-6">
            $149.99
            <s className="px-5 font-Montserrat text-[13px] font-medium text-dark-grayish-blue">
              $169.99
            </s>
          </p>
          <button className="flex w-full flex-row items-center justify-center rounded-lg bg-dark-cyan py-3.5 font-medium text-white hover:bg-green-950">
            <img src="./icon-cart.svg" alt="cart image" className="px-2.5" />
            Add to Cart
          </button>
        </div>
      </section>
    </article>
  );
}

export default App;
