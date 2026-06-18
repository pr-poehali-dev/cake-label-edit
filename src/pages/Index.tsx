const LABEL_IMG =
  'https://cdn.poehali.dev/projects/96ecb6e7-2d07-4bbf-a621-9bcfc55852f1/bucket/8e6c1acf-03e3-4ac0-8bda-914860785833.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-mist font-sans text-bgreen">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <p className="mb-6 text-center font-hand text-3xl text-grape">
          оригинальная этикетка · Балуево
        </p>

        <div className="mx-auto w-full animate-fade-up overflow-hidden rounded-[1.75rem] shadow-[0_40px_100px_-30px_rgba(91,62,140,0.5)] ring-1 ring-plum/10">
          <img
            src={LABEL_IMG}
            alt="Оригинальная этикетка тортика Побалуй-ка Лавандовый"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
