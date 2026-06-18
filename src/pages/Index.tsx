import Icon from '@/components/ui/icon';

const CAKE_IMG =
  'https://cdn.poehali.dev/projects/96ecb6e7-2d07-4bbf-a621-9bcfc55852f1/files/d3bfacb1-c63f-4527-9fd8-3f269049ed2b.jpg';

const benefits = [
  { icon: 'Hand', title: 'Ручная', sub: 'работа' },
  { icon: 'Heart', title: 'С заботой', sub: 'о вас' },
  { icon: 'Mountain', title: 'Сделано', sub: 'на Алтае' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-mist font-sans text-plum">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <p className="mb-6 text-center font-hand text-3xl text-lavender">
          премиальная этикетка · Балуевъ
        </p>

        {/* ЭТИКЕТКА — горизонтальная развёртка */}
        <div className="relative mx-auto aspect-[1080/495] w-full animate-fade-up overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(59,33,84,0.6)] ring-1 ring-plum/10">
          {/* основной фон-градиент */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A1640] via-[#3B2154] to-[#4A2A66]" />

          {/* волны сверху */}
          <svg
            className="absolute left-0 top-0 w-full"
            viewBox="0 0 1080 160"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1080,0 L1080,70 Q810,140 540,75 Q270,15 0,90 Z" fill="#6E4D9E" opacity="0.55" />
            <path d="M0,0 L1080,0 L1080,45 Q800,115 520,55 Q260,5 0,65 Z" fill="#9B7BC4" opacity="0.5" />
            <path d="M0,0 L1080,0 L1080,28 Q780,90 500,38 Q250,-5 0,42 Z" fill="#C8B3E0" opacity="0.45" />
          </svg>

          {/* волны снизу */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1080 160"
            preserveAspectRatio="none"
          >
            <path d="M0,160 L1080,160 L1080,90 Q810,20 540,85 Q270,145 0,70 Z" fill="#6E4D9E" opacity="0.55" />
            <path d="M0,160 L1080,160 L1080,115 Q800,45 520,105 Q260,155 0,95 Z" fill="#9B7BC4" opacity="0.5" />
            <path d="M0,160 L1080,160 L1080,132 Q780,70 500,122 Q250,165 0,118 Z" fill="#C8B3E0" opacity="0.4" />
          </svg>

          {/* золотая рамка */}
          <div className="pointer-events-none absolute inset-4 rounded-2xl border border-gold/40" />

          {/* ЛОГОТИП по центру сверху */}
          <div className="absolute left-1/2 top-[7%] z-20 -translate-x-1/2">
            <div className="flex h-[16%] min-h-[54px] flex-col items-center justify-center rounded-full border-2 border-gold bg-gradient-to-b from-[#4A2A66] to-[#2A1640] px-7 py-2 shadow-lg">
              <span className="font-display text-2xl font-bold italic leading-none text-goldlight md:text-3xl">
                Балуевъ
              </span>
              <span className="mt-0.5 text-[7px] uppercase tracking-[0.35em] text-gold md:text-[8px]">
                кондитерская
              </span>
            </div>
          </div>

          {/* СЕТКА: лево / центр / право */}
          <div className="absolute inset-0 grid grid-cols-[1.05fr_1.5fr_0.95fr] gap-2 px-7 pb-10 pt-[14%] md:px-10">
            {/* ЛЕВО — состав и инфо */}
            <div className="flex flex-col justify-center gap-2 text-[7px] leading-snug text-lilac md:text-[9px]">
              <p>
                <span className="font-semibold text-goldlight">Состав:</span> мука
                пшеничная высшего сорта, сахар, масло сливочное, яйцо, молоко, экстракт
                лаванды натуральный, разрыхлитель, краситель пищевой (Е163), ванилин.
              </p>
              <p>
                <span className="font-semibold text-goldlight">Пищевая ценность</span> на
                100 г: белки 5,5 г, жиры 18 г, углеводы 40 г. Энергетическая ценность 430
                ккал.
              </p>
              <p>
                <span className="font-semibold text-goldlight">Срок годности:</span> 7
                суток при +2…+6 °C.
              </p>
              <p>
                <span className="font-semibold text-goldlight">Изготовитель:</span> ИП
                Балуев, Алтайский край, г. Барнаул, ул. Кондитерская, 5.
              </p>

              {/* значки сертификации */}
              <div className="mt-1 flex items-center gap-2 text-lilac/90">
                <span className="rounded border border-gold/50 px-1.5 py-0.5 text-[6px] font-semibold md:text-[7px]">
                  ЕАС
                </span>
                <span className="rounded border border-gold/50 px-1.5 py-0.5 text-[6px] font-semibold md:text-[7px]">
                  БЕЗ ГМО
                </span>
                <span className="rounded-full border border-gold/50 px-1.5 py-0.5 text-[6px] font-semibold md:text-[7px]">
                  РСТ
                </span>
              </div>
            </div>

            {/* ЦЕНТР — название + фото */}
            <div className="relative flex flex-col items-center justify-center text-center">
              <h1 className="font-cond text-5xl font-bold uppercase leading-[0.85] tracking-tight text-goldlight drop-shadow md:text-7xl">
                Побалуй
                <span className="text-gold">-</span>ка
              </h1>
              <p className="mt-1 font-hand text-xl text-lilac md:text-2xl">мини-тортик</p>

              <div className="mt-1 flex items-end justify-center gap-3">
                <div className="text-left">
                  <p className="font-cond text-2xl font-semibold uppercase leading-none text-white md:text-4xl">
                    Лаван-
                    <br />
                    довый
                  </p>
                </div>
                <img
                  src={CAKE_IMG}
                  alt="Лавандовый тортик"
                  className="h-20 w-20 rounded-full object-cover shadow-lg ring-2 ring-gold/60 md:h-28 md:w-28"
                />
              </div>

              <div className="mt-2 flex items-center gap-3 text-lilac/90">
                <span className="font-cond text-xl font-semibold text-goldlight md:text-2xl">
                  500 г
                </span>
                <span className="text-[7px] leading-tight md:text-[9px]">
                  Ø 125·145·165 мм
                  <br />
                  400×190 мм
                </span>
              </div>

              {/* маскот */}
              <div className="absolute -right-1 top-0 hidden md:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-plum shadow-lg ring-2 ring-gold/40">
                  <Icon name="Smile" size={28} className="text-goldlight" />
                </div>
              </div>
            </div>

            {/* ПРАВО — преимущества + дата */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col justify-center gap-3">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white/5 text-goldlight md:h-10 md:w-10">
                      <Icon name={b.icon} size={16} />
                    </span>
                    <span className="text-[7px] uppercase leading-tight tracking-wide text-lilac md:text-[9px]">
                      {b.title}
                      <br />
                      {b.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* вертикальная дата изготовления */}
              <div className="flex h-full items-center">
                <div className="flex h-[70%] w-7 flex-col items-center justify-center rounded-md border border-gold/40 bg-white/5 md:w-9">
                  <span
                    className="whitespace-nowrap text-[7px] uppercase tracking-[0.2em] text-lilac md:text-[9px]"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    Дата изготовления
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-hand text-2xl text-lavender/60">
          благородная лаванда · золото · ручная работа
        </p>
      </div>
    </div>
  );
};

export default Index;