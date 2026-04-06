import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/f5f94b30-f7d8-4907-a701-0b633f13dc2c.jpg";

const GALLERY = [
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/b5978cb5-df2d-4703-be6f-adc0309ebde5.jpg", label: "Эвакуатор на дежурстве" },
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/55bf0b97-f6a1-41fd-a566-33c28452173a.jpg", label: "Погрузка автомобиля" },
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/f5f94b30-f7d8-4907-a701-0b633f13dc2c.jpg", label: "Работа на трассе" },
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/9eb1c578-106c-445e-b82c-38bb80ebcd34.jpg", label: "Эвакуация в городе" },
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/6d2d3401-b0be-42c2-b296-9681d5526a1b.jpg", label: "Перевозка кроссовера" },
  { url: "https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/b5978cb5-df2d-4703-be6f-adc0309ebde5.jpg", label: "Ночная смена" },
];

const SERVICES = [
  { icon: "Truck", title: "Эвакуация легковых авто", desc: "Быстрый выезд в любую точку города. Погрузка без повреждений кузова.", price: "от 1 500 ₽" },
  { icon: "Construction", title: "Эвакуация грузовых авто", desc: "Специализированные платформы для грузовиков и коммерческой техники.", price: "от 4 000 ₽" },
  { icon: "Zap", title: "Экстренная помощь", desc: "Подзарядка аккумулятора, подвоз топлива, вскрытие замков.", price: "от 800 ₽" },
  { icon: "MapPin", title: "Межгород", desc: "Перегон и эвакуация автомобилей в любой регион России.", price: "договорная" },
  { icon: "Clock", title: "Хранение автомобиля", desc: "Охраняемая стоянка на 100 машиномест. Видеонаблюдение 24/7.", price: "от 300 ₽/сут" },
  { icon: "CircleDot", title: "Стационарный шиномонтаж", desc: "Профессиональная замена и балансировка колёс на собственном оборудовании.", price: "" },
];

const REVIEWS = [
  { name: "Алексей Морозов", text: "Позвонил в 2 ночи — приехали через 20 минут. Погрузили аккуратно, без царапин. Спасибо за оперативность!", rating: 5, date: "март 2024" },
  { name: "Елена Соколова", text: "Попала в ДТП на трассе, страховая направила именно эту компанию. Профессионалы — всё чётко и без лишних слов.", rating: 5, date: "февраль 2024" },
  { name: "Дмитрий Козлов", text: "Хорошая цена по сравнению с конкурентами. Водитель вежливый, объяснил всё про доставку. Рекомендую.", rating: 5, date: "январь 2024" },
  { name: "Марина Петрова", text: "Не завёлся двигатель в мороз. Приехали быстро, помогли с прикуркой. Приятно, что не пришлось долго ждать.", rating: 5, date: "декабрь 2023" },
];

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "gallery", label: "Галерея" },
  { id: "about", label: "О нас" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const [messenger, setMessenger] = useState<"whatsapp" | "max">("whatsapp");

  const handleSubmit = () => {
    if (!name && !phone) return;
    const text = `Новая заявка с сайта!\nИмя: ${name}\nТелефон: ${phone}\nОписание: ${desc}`;
    const url = messenger === "whatsapp"
      ? `https://wa.me/79188591862?text=${encodeURIComponent(text)}`
      : `https://max.ru/im?sel=+79162345492&msg=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-card border border-border p-8">
      <h3 className="font-oswald text-2xl font-bold uppercase mb-6">Оставить заявку</h3>
      <div className="space-y-4">
        <div>
          <label className="font-ibm text-xs uppercase tracking-wide text-muted-foreground block mb-2">Способ связи</label>
          <div className="flex gap-2">
            <button
              onClick={() => setMessenger("whatsapp")}
              className={`flex-1 py-2 text-sm font-oswald uppercase tracking-wide border transition-colors ${messenger === "whatsapp" ? "bg-accent-yellow text-primary-foreground border-accent-yellow" : "border-border text-muted-foreground hover:border-accent-yellow hover:text-accent-yellow"}`}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setMessenger("max")}
              className={`flex-1 py-2 text-sm font-oswald uppercase tracking-wide border transition-colors ${messenger === "max" ? "bg-accent-yellow text-primary-foreground border-accent-yellow" : "border-border text-muted-foreground hover:border-accent-yellow hover:text-accent-yellow"}`}
            >
              MAX
            </button>
          </div>
        </div>
        <div>
          <label className="font-ibm text-xs uppercase tracking-wide text-muted-foreground block mb-2">Ваше имя</label>
          <input
            type="text"
            placeholder="Иван Иванов"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-secondary border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-yellow transition-colors"
          />
        </div>
        <div>
          <label className="font-ibm text-xs uppercase tracking-wide text-muted-foreground block mb-2">Телефон</label>
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-secondary border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-yellow transition-colors"
          />
        </div>
        <div>
          <label className="font-ibm text-xs uppercase tracking-wide text-muted-foreground block mb-2">Адрес или описание ситуации</label>
          <textarea
            rows={4}
            placeholder="Укажите адрес или опишите проблему..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full bg-secondary border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-yellow transition-colors resize-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-accent-yellow text-primary-foreground font-oswald font-bold py-4 uppercase tracking-wide hover:brightness-110 transition-all"
        >
          Отправить заявку
        </button>
      </div>
    </div>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-ibm">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/9a01cc72-915c-4910-998f-47fdcfef6b01.jpg"
              alt="Логотип"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-ibm text-sm font-medium text-muted-foreground hover:text-accent-yellow transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href="tel:+79188591862"
            className="hidden md:flex items-center gap-2 bg-accent-yellow text-primary-foreground font-oswald font-semibold px-5 py-2 text-sm uppercase tracking-wide hover:brightness-110 transition-all"
          >
            <Icon name="Phone" size={14} />
            8-918-859-18-62
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                className="text-left font-ibm text-sm uppercase tracking-wide text-muted-foreground hover:text-accent-yellow transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+79188591862"
              className="flex items-center gap-2 bg-accent-yellow text-primary-foreground font-oswald font-semibold px-4 py-2 text-sm uppercase w-fit"
            >
              <Icon name="Phone" size={14} />
              8-918-859-18-62
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="Эвакуатор" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="absolute inset-0 diagonal-stripe z-0 opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="w-12 h-0.5 bg-accent-yellow"></span>
              <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">
                Служба эвакуации
              </span>
            </div>

            <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase leading-none tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Эвакуация<br />
              <span className="text-accent-yellow">авто</span><br />
              24/7
            </h1>

            <p className="font-ibm text-lg text-muted-foreground mb-10 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Профессиональная служба эвакуации. Выезд за 15 минут.
              Работаем без выходных и праздников.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="tel:+79188591862"
                className="flex items-center justify-center gap-3 bg-accent-yellow text-primary-foreground font-oswald font-bold px-8 py-4 text-lg uppercase tracking-wide hover:brightness-110 transition-all"
              >
                <Icon name="Phone" size={20} />
                Вызвать эвакуатор
              </a>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center justify-center gap-3 border border-border text-foreground font-oswald font-semibold px-8 py-4 text-lg uppercase tracking-wide hover:border-accent-yellow hover:text-accent-yellow transition-all"
              >
                Наши услуги
                <Icon name="ArrowRight" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-card/80 backdrop-blur border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "15 мин", label: "среднее время выезда" },
              { num: "10+", label: "эвакуаторов в парке" },
              { num: "5 000+", label: "выполненных заказов" },
              { num: "24/7", label: "без выходных" },
            ].map((stat) => (
              <div key={stat.num} className="text-center">
                <div className="font-oswald text-2xl font-bold text-accent-yellow">{stat.num}</div>
                <div className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-accent-yellow"></span>
            <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">Что мы делаем</span>
          </div>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-16">Наши услуги</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-card p-8 group hover:bg-secondary transition-colors">
                <div className="w-12 h-12 bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center mb-6 group-hover:bg-accent-yellow/20 transition-colors">
                  <Icon name={s.icon} size={22} className="text-accent-yellow" />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase mb-3 group-hover:text-accent-yellow transition-colors">{s.title}</h3>
                <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-accent-yellow"></span>
            <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">Автопарк и работы</span>
          </div>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-16">Фотогалерея</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden aspect-video bg-card"
                onClick={() => setGalleryOpen(i)}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-oswald text-sm uppercase tracking-wide text-foreground">{img.label}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-accent-yellow/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ZoomIn" size={14} className="text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {galleryOpen !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6" onClick={() => setGalleryOpen(null)}>
            <button
              className="absolute top-6 right-6 w-10 h-10 border border-border flex items-center justify-center text-foreground hover:border-accent-yellow hover:text-accent-yellow transition-colors"
              onClick={() => setGalleryOpen(null)}
            >
              <Icon name="X" size={20} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={GALLERY[galleryOpen].url} alt={GALLERY[galleryOpen].label} className="w-full max-h-[80vh] object-contain" />
              <p className="font-oswald text-center mt-4 uppercase tracking-wide text-muted-foreground">{GALLERY[galleryOpen].label}</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="border border-border px-4 py-2 text-sm font-oswald uppercase tracking-wide hover:border-accent-yellow hover:text-accent-yellow transition-colors"
                  onClick={() => setGalleryOpen((galleryOpen - 1 + GALLERY.length) % GALLERY.length)}
                >
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <button
                  className="border border-border px-4 py-2 text-sm font-oswald uppercase tracking-wide hover:border-accent-yellow hover:text-accent-yellow transition-colors"
                  onClick={() => setGalleryOpen((galleryOpen + 1) % GALLERY.length)}
                >
                  <Icon name="ChevronRight" size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-0.5 bg-accent-yellow"></span>
              <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">О компании</span>
            </div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-8">О нас</h2>
            <p className="font-ibm text-muted-foreground leading-relaxed mb-6">
              Мы работаем на рынке эвакуации с 2012 года. За это время выполнили более 5 000 успешных заказов и завоевали репутацию надёжного партнёра для частных и корпоративных клиентов.
            </p>
            <p className="font-ibm text-muted-foreground leading-relaxed mb-10">
              Наш автопарк регулярно обновляется. Все водители имеют профессиональную подготовку и опыт работы с автомобилями любых классов — от компакт-каров до спортивных суперкаров.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "BadgeCheck", text: "Лицензированная компания" },
                { icon: "Clock", text: "Работаем круглосуточно" },
                { icon: "Headphones", text: "Диспетчер на связи 24/7" },
                { icon: "Star", text: "Рейтинг 4.9 из 5" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-accent-yellow" />
                  </div>
                  <span className="font-ibm text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent-yellow/20"></div>
            <img src={HERO_IMAGE} alt="О компании" className="w-full h-[480px] object-cover relative z-10" />
            <div className="absolute bottom-0 right-0 z-20 bg-accent-yellow text-primary-foreground p-6 font-oswald">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-xs uppercase tracking-wide">лет на рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-accent-yellow"></span>
            <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">Мнения клиентов</span>
          </div>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-16">Отзывы</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-card border border-border p-8 relative">
                <div className="absolute top-6 right-8 font-oswald text-7xl font-bold text-accent-yellow/10 leading-none select-none">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-accent-yellow" />
                  ))}
                </div>
                <p className="font-ibm text-muted-foreground leading-relaxed mb-6 relative z-10">{r.text}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="font-oswald font-semibold uppercase tracking-wide text-sm">{r.name}</div>
                  <div className="font-ibm text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-accent-yellow"></span>
            <span className="font-ibm text-xs uppercase tracking-widest text-accent-yellow font-semibold">Свяжитесь с нами</span>
          </div>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-16">Контакты</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-6 mb-10">
                {[
                  { icon: "Phone", label: "Телефон диспетчера", value: "8-918-859-18-62", link: "tel:+79188591862" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (916) 234-54-92", link: "https://wa.me/79162345492" },
                  { icon: "MessageSquare", label: "MAX", value: "+7 (916) 234-54-92", link: "https://max.ru/im?sel=+79162345492" },
                  { icon: "MapPin", label: "Адрес стоянки", value: "Деревня Леоново, ул. Шоссейная, д. 12", link: "#" },
                  { icon: "Clock", label: "Режим работы", value: "Круглосуточно, без выходных", link: null },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={c.icon} size={16} className="text-accent-yellow" />
                    </div>
                    <div>
                      <div className="font-ibm text-xs text-muted-foreground uppercase tracking-wide mb-1">{c.label}</div>
                      {c.link ? (
                        <a href={c.link} className="font-oswald text-lg font-semibold hover:text-accent-yellow transition-colors">{c.value}</a>
                      ) : (
                        <span className="font-oswald text-lg font-semibold">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="tel:+79188591862" className="inline-flex items-center gap-3 bg-accent-yellow text-primary-foreground font-oswald font-bold px-8 py-4 text-lg uppercase tracking-wide hover:brightness-110 transition-all">
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/97328675-4f60-40fd-acc8-666527e51b05/bucket/9a01cc72-915c-4910-998f-47fdcfef6b01.jpg"
              alt="Логотип"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="font-ibm text-xs text-muted-foreground text-center">
            © 2024 АвтоЭвак. Профессиональная служба эвакуации автомобилей
          </div>
          <a href="tel:+79188591862" className="flex items-center gap-2 text-accent-yellow font-oswald font-semibold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
            <Icon name="Phone" size={14} />
            8-918-859-18-62
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;