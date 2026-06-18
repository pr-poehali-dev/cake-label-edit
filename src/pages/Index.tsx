import Icon from '@/components/ui/icon';

const CAKE_IMG =
  'https://cdn.poehali.dev/projects/96ecb6e7-2d07-4bbf-a621-9bcfc55852f1/files/80be0345-1a05-4302-b0de-54223e568b14.jpg';

const QR_SRC =
  'https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&color=4A2C2A&bgcolor=F7EFE2&data=https://poehali.dev';

const ingredients = [
  'мука пшеничная высшего сорта',
  'сливки 33%',
  'сахар тростниковый',
  'яйцо куриное',
  'масло сливочное 82,5%',
  'малина свежая',
  'ваниль бурбон',
  'соль морская',
];

const allergens = ['Глютен', 'Молоко', 'Яйцо'];

const storage = [
  { icon: 'Thermometer', label: 'Хранить при', value: '+2…+6 °C' },
  { icon: 'CalendarClock', label: 'Срок годности', value: '72 часа' },
  { icon: 'Snowflake', label: 'Не замораживать', value: 'после разморозки' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-sans text-cocoa overflow-x-hidden">
      {/* фоновая текстура */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(200,137,62,0.18), transparent 38%), radial-gradient(circle at 88% 78%, rgba(155,59,71,0.14), transparent 42%)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Ccircle cx=%221%22 cy=%221%22 r=%221%22 fill=%22%234A2C2A%22/%3E%3C/svg%3E")',
        }}
      />

      <main className="relative mx-auto max-w-5xl px-5 py-10 md:py-16">
        {/* Этикетка-карточка */}
        <article className="relative animate-fade-up rounded-[2rem] border-2 border-cocoa/15 bg-[#FFFCF6] shadow-[0_30px_80px_-30px_rgba(74,44,42,0.45)]">
          {/* декоративная пунктирная рамка */}
          <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-dashed border-caramel/40" />

          {/* HERO */}
          <header className="relative grid grid-cols-1 gap-6 px-7 pt-10 md:grid-cols-[1.4fr_1fr] md:px-12 md:pt-12">
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/15 px-3 py-1 text-xs font-medium tracking-wide text-sage">
                  <Icon name="Leaf" size={13} /> ручная работа
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-berry/10 px-3 py-1 text-xs font-medium tracking-wide text-berry">
                  <Icon name="Award" size={13} /> авторский рецепт
                </span>
              </div>

              <p className="font-hand text-2xl text-caramel">кондитерская мастерская</p>
              <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-cocoa md:text-7xl">
                Малиновый
                <br />
                <span className="italic text-berry">бархат</span>
              </h1>

              <p className="mt-5 max-w-md font-display text-xl italic leading-relaxed text-cocoa/70">
                Воздушные коржи на сливках, прослойка из свежей малины и крем-чиз с
                ванилью бурбон. Тает на языке, как первый снег.
              </p>

              {/* вкусовые ноты */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['нежный', 'ягодный', 'не приторный', 'сливочный'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cocoa/15 bg-cream px-4 py-1.5 text-sm font-medium text-cocoa/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* иллюстрация */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full bg-caramel/15 blur-2xl md:h-72 md:w-72" />
              <img
                src={CAKE_IMG}
                alt="Торт Малиновый бархат"
                className="relative z-10 w-56 animate-float drop-shadow-2xl md:w-72"
              />
            </div>
          </header>

          {/* разделитель */}
          <div className="my-8 flex items-center gap-4 px-7 md:px-12">
            <span className="h-px flex-1 bg-cocoa/15" />
            <Icon name="Cherry" size={20} className="text-berry" />
            <span className="h-px flex-1 bg-cocoa/15" />
          </div>

          {/* СЕТКА ИНФОРМАЦИИ */}
          <section className="grid grid-cols-1 gap-6 px-7 pb-2 md:grid-cols-3 md:px-12">
            {/* Состав */}
            <div className="rounded-2xl border border-cocoa/10 bg-cream/60 p-6 md:col-span-2">
              <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-cocoa">
                <Icon name="ChefHat" size={20} className="text-caramel" /> Состав
              </h2>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-[15px] text-cocoa/80 sm:grid-cols-2">
                {ingredients.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Dot" size={18} className="mt-0.5 shrink-0 text-caramel" />
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl bg-berry/10 p-4">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-berry">
                  <Icon name="TriangleAlert" size={16} /> Аллергены:
                </span>
                {allergens.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-berry/15 px-2.5 py-0.5 text-sm font-medium text-berry"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Выход и порции */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-cocoa/10 bg-cocoa p-6 text-cream">
                <Icon name="Scale" size={22} className="mb-2 text-caramel" />
                <p className="font-display text-5xl font-bold leading-none">1,2 кг</p>
                <p className="mt-1 text-sm text-cream/70">вес изделия</p>
              </div>
              <div className="rounded-2xl border border-cocoa/10 bg-caramel/15 p-6">
                <Icon name="Users" size={22} className="mb-2 text-caramel" />
                <p className="font-display text-4xl font-bold leading-none text-cocoa">
                  8–10
                </p>
                <p className="mt-1 text-sm text-cocoa/70">порций</p>
              </div>
            </div>
          </section>

          {/* ХРАНЕНИЕ */}
          <section className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-3 md:px-12">
            {storage.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-2xl border border-cocoa/10 bg-cream/60 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-cocoa/50">
                    {s.label}
                  </p>
                  <p className="font-display text-xl font-semibold text-cocoa">{s.value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* QR + КОНТАКТЫ */}
          <footer className="mt-2 grid grid-cols-1 items-center gap-8 rounded-b-[2rem] bg-cocoa px-7 py-9 text-cream md:grid-cols-[auto_1fr] md:px-12">
            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-cream p-3">
                <img src={QR_SRC} alt="QR-код на сайт и рецепты" className="h-28 w-28" />
              </div>
              <div className="max-w-[12rem]">
                <p className="font-hand text-2xl text-caramel">наведите камеру</p>
                <p className="text-sm leading-relaxed text-cream/75">
                  Рецепты, новинки и заказ торта на праздник
                </p>
              </div>
            </div>

            <div className="space-y-3 md:border-l md:border-cream/15 md:pl-8">
              <p className="font-display text-2xl font-semibold">Сладкая мастерская «Бархат»</p>
              <div className="grid grid-cols-1 gap-2 text-sm text-cream/80 sm:grid-cols-2">
                <span className="flex items-center gap-2">
                  <Icon name="Phone" size={15} className="text-caramel" /> +7 999 123-45-67
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Mail" size={15} className="text-caramel" /> hello@barhat.cake
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="MapPin" size={15} className="text-caramel" /> Москва, ул. Сахарная, 7
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Globe" size={15} className="text-caramel" /> barhat.cake
                </span>
              </div>
            </div>
          </footer>
        </article>

        <p className="mt-6 text-center font-hand text-2xl text-cocoa/40">
          с любовью испечено для вас ·
        </p>
      </main>
    </div>
  );
};

export default Index;