import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import Icon from '@/components/ui/icon';

const CAKE_IMG =
  'https://cdn.poehali.dev/projects/96ecb6e7-2d07-4bbf-a621-9bcfc55852f1/files/d3bfacb1-c63f-4527-9fd8-3f269049ed2b.jpg';

const LOGO_IMG =
  'https://cdn.poehali.dev/projects/96ecb6e7-2d07-4bbf-a621-9bcfc55852f1/bucket/1fac1799-3eb8-49d6-ad56-c9aebe85c36b.png';

const benefits = [
  { icon: 'Hand', title: 'Ручная', sub: 'работа' },
  { icon: 'Heart', title: 'С заботой', sub: 'о вас' },
  { icon: 'Mountain', title: 'Сделано', sub: 'на Алтае' },
];

const Index = () => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!labelRef.current) return;
    setLoading(true);
    try {
      const dataUrl = await toPng(labelRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement('a');
      link.download = 'etiketka-baluev-lavandovyy.png';
      link.href = dataUrl;
      link.click();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mist font-sans text-bgreen">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <p className="mb-6 text-center font-hand text-3xl text-grape">
          авторская этикетка · Балуевъ
        </p>

        {/* ЭТИКЕТКА — горизонтальная развёртка */}
        <div
          ref={labelRef}
          className="relative mx-auto aspect-[1080/495] w-full animate-fade-up overflow-hidden rounded-[1.75rem] bg-[#F6F1FA] shadow-[0_40px_100px_-30px_rgba(91,62,140,0.5)] ring-1 ring-plum/10"
        >
          {/* небрежные рукотворные волны СВЕРХУ */}
          <svg
            className="absolute left-0 top-0 w-full"
            viewBox="0 0 1080 180"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1080,0 L1080,95 C880,150 720,60 540,105 C360,150 180,55 0,115 Z" fill="#5B3E8C" />
            <path d="M0,0 L1080,0 L1080,70 C870,130 700,40 520,88 C340,135 170,40 0,92 Z" fill="#9B7BC4" />
            <path d="M0,0 L1080,0 L1080,46 C860,98 690,28 500,66 C320,102 160,22 0,62 Z" fill="#2E4031" />
            <path d="M0,0 L1080,0 L1080,26 C850,72 680,14 480,46 C300,76 150,8 0,38 Z" fill="#F3ECDD" />
          </svg>

          {/* небрежные рукотворные волны СНИЗУ */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1080 180"
            preserveAspectRatio="none"
          >
            <path d="M0,180 L1080,180 L1080,85 C880,30 720,120 540,75 C360,30 180,125 0,65 Z" fill="#5B3E8C" />
            <path d="M0,180 L1080,180 L1080,110 C870,50 700,140 520,92 C340,45 170,140 0,88 Z" fill="#9B7BC4" />
            <path d="M0,180 L1080,180 L1080,134 C860,82 690,152 500,114 C320,78 160,158 0,118 Z" fill="#2E4031" />
            <path d="M0,180 L1080,180 L1080,154 C850,108 680,166 480,134 C300,104 150,172 0,142 Z" fill="#F3ECDD" />
          </svg>

          {/* ЛОГОТИП «Балуево» — официальный брендовый файл */}
          <div className="absolute left-1/2 top-[5%] z-20 -translate-x-1/2">
            <img
              src={LOGO_IMG}
              alt="Балуево — Алтайский кондитерский дом"
              className="h-12 w-auto object-contain md:h-16"
            />
          </div>

          {/* СЕТКА: лево / центр / право */}
          <div className="absolute inset-0 grid grid-cols-[1.05fr_1.5fr_0.95fr] gap-2 px-7 pb-12 pt-[15%] md:px-10">
            {/* ЛЕВО — состав и инфо */}
            <div className="flex flex-col justify-center gap-1.5 text-[6.5px] leading-snug text-grape md:text-[9px]">
              <p>
                <span className="font-semibold text-bgreen">Состав:</span> мука пшеничная
                высшего сорта, сахар, масло сливочное, яйцо, молоко, экстракт лаванды
                натуральный, разрыхлитель, краситель пищевой (Е163), ванилин.
              </p>
              <p>
                <span className="font-semibold text-bgreen">Пищевая ценность</span> на 100
                г: белки 5,5 г, жиры 18 г, углеводы 40 г. Энерг. ценность 430 ккал.
              </p>
              <p>
                <span className="font-semibold text-bgreen">Срок годности:</span> 7 суток
                при +2…+6 °C.
              </p>
              <p>
                <span className="font-semibold text-bgreen">Изготовитель:</span> ИП Балуев,
                Алтайский край, г. Барнаул, ул. Кондитерская, 5.
              </p>

              {/* общепринятые значки сертификации */}
              <div className="mt-1 flex items-center gap-2">
                {/* ЕАС */}
                <span className="font-cond text-base font-bold tracking-tight text-bgreen md:text-xl">
                  EAC
                </span>
                {/* без ГМО */}
                <span className="flex items-center gap-1 rounded-full border border-bgreen px-1.5 py-0.5 text-[6px] font-semibold text-bgreen md:text-[7px]">
                  <Icon name="Leaf" size={9} /> БЕЗ ГМО
                </span>
                {/* РСТ */}
                <span className="rounded-full border border-bgreen px-1.5 py-0.5 text-[6px] font-bold text-bgreen md:text-[7px]">
                  РСТ
                </span>
              </div>
            </div>

            {/* ЦЕНТР — название + фото */}
            <div className="relative flex flex-col items-center justify-center text-center">
              {/* Побалуй-ка — фирменный рукописный шрифт */}
              <h1 className="font-brand text-4xl leading-[0.9] text-bgreen md:text-6xl">
                Побалуй-ка
              </h1>
              <p className="mt-1 font-hand text-xl text-grape md:text-2xl">мини-тортик</p>

              <div className="mt-1 flex items-end justify-center gap-3">
                <div className="text-left">
                  <p className="font-cond text-2xl font-semibold uppercase leading-none text-grape md:text-4xl">
                    Лаван-
                    <br />
                    довый
                  </p>
                </div>
                <img
                  src={CAKE_IMG}
                  alt="Лавандовый тортик"
                  className="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-bgreen/30 md:h-28 md:w-28"
                />
              </div>

              <div className="mt-2 flex items-center gap-3 text-grape">
                <span className="font-cond text-xl font-semibold text-bgreen md:text-2xl">
                  500 г
                </span>
                <span className="text-[6.5px] leading-tight md:text-[9px]">
                  Ø 125·145·165 мм
                  <br />
                  400×190 мм
                </span>
              </div>

              {/* СМАЙЛ с ручками-ножками — брендовый, заменить на файл клиента */}
              <div className="absolute -right-2 top-1 md:right-0" data-brand="mascot">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-grape shadow-md md:h-16 md:w-16">
                  <Icon name="Smile" size={30} className="text-[#F3ECDD]" />
                  {/* ручки */}
                  <span className="absolute -left-2 top-1/2 h-0.5 w-3 -rotate-45 rounded bg-grape" />
                  <span className="absolute -right-2 top-1/2 h-0.5 w-3 rotate-45 rounded bg-grape" />
                  {/* ножки */}
                  <span className="absolute -bottom-2 left-3 h-3 w-0.5 rotate-12 rounded bg-grape" />
                  <span className="absolute -bottom-2 right-3 h-3 w-0.5 -rotate-12 rounded bg-grape" />
                </div>
              </div>
            </div>

            {/* ПРАВО — преимущества + дата + штрихкод */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col justify-center gap-2.5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bgreen bg-[#F3ECDD] text-bgreen md:h-9 md:w-9">
                      <Icon name={b.icon} size={15} />
                    </span>
                    <span className="text-[6.5px] uppercase leading-tight tracking-wide text-grape md:text-[9px]">
                      {b.title}
                      <br />
                      {b.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* дата изготовления + штрихкод */}
              <div className="flex h-full items-center gap-1.5">
                {/* штрихкод */}
                <div className="flex h-[60%] flex-col items-center justify-center">
                  <div className="flex h-[80%] items-stretch gap-[1.5px]">
                    {[2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 2].map(
                      (w, i) => (
                        <span
                          key={i}
                          className="bg-bgreen"
                          style={{ width: `${w}px` }}
                        />
                      ),
                    )}
                  </div>
                  <span className="mt-0.5 text-[5px] tracking-widest text-bgreen md:text-[7px]">
                    4 600000 123456
                  </span>
                </div>

                {/* дата изготовления вертикально */}
                <div className="flex h-[68%] w-6 flex-col items-center justify-center rounded-md border border-bgreen bg-[#F3ECDD] md:w-8">
                  <span
                    className="whitespace-nowrap text-[6.5px] uppercase tracking-[0.18em] text-bgreen md:text-[9px]"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    Дата изготовления
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDownload}
            disabled={loading}
            className="group inline-flex items-center gap-3 rounded-full bg-bgreen px-8 py-4 font-cond text-lg font-semibold uppercase tracking-wide text-[#F3ECDD] shadow-[0_20px_40px_-15px_rgba(46,64,49,0.6)] ring-1 ring-bgreen/40 transition hover:scale-105 disabled:opacity-60"
          >
            <Icon
              name={loading ? 'Loader' : 'Download'}
              size={22}
              className={loading ? 'animate-spin' : 'transition group-hover:translate-y-0.5'}
            />
            {loading ? 'Готовим файл…' : 'Скачать этикетку'}
          </button>
        </div>

        <p className="mt-6 text-center font-hand text-2xl text-grape/60">
          фиолетовый · тёмно-зелёный · кремовый · ручная работа
        </p>
      </div>
    </div>
  );
};

export default Index;