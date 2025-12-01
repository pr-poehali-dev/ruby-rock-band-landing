import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { platform: "Spotify", plays: "1 234 567", icon: "Music", color: "text-green-400" },
    { platform: "Яндекс.Музыка", plays: "892 341", icon: "Music2", color: "text-yellow-400" },
    { platform: "VK Музыка", plays: "567 890", icon: "Music4", color: "text-blue-400" },
  ];

  const links = {
    music: [
      { name: "Spotify", icon: "Music", url: "#", color: "hover:text-green-400" },
      { name: "Apple Music", icon: "Music2", url: "#", color: "hover:text-pink-400" },
      { name: "YouTube Music", icon: "Youtube", url: "#", color: "hover:text-red-400" },
    ],
    social: [
      { name: "Instagram", icon: "Instagram", url: "#", color: "hover:text-pink-500" },
      { name: "VK", icon: "Share2", url: "#", color: "hover:text-blue-400" },
      { name: "Telegram", icon: "Send", url: "#", color: "hover:text-sky-400" },
    ],
    video: [
      { name: "YouTube", icon: "Youtube", url: "#", color: "hover:text-red-500" },
    ],
    concerts: [
      { name: "Расписание концертов", icon: "Calendar", url: "#", color: "hover:text-primary" },
      { name: "Купить билеты", icon: "Ticket", url: "#", color: "hover:text-secondary" },
    ],
  };

  const sections = [
    {
      id: "hero",
      bgImage: "https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/b38096e5-5704-43cf-806a-08af8857bd27.jpg",
    },
    {
      id: "music",
      bgImage: "https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/a27d436d-54d7-4dd4-88c7-88e3cc046a53.jpg",
    },
    {
      id: "social",
      bgImage: "https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/53db2a1f-65c0-4b30-9784-fb5b0120e72a.jpg",
    },
    {
      id: "video",
      bgImage: "https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/0ae46d4c-ecd4-4b47-8d43-8c26f3d5e188.jpg",
    },
    {
      id: "concerts",
      bgImage: "https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/a58322ed-19a2-414f-b7fc-92b1f369528b.jpg",
    },
  ];

  return (
    <div className="font-rubik snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="min-h-screen relative snap-start flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sections[0].bgImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-montserrat font-black mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-scale-in">
              RUBY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Рок-группа • Все наши ссылки
            </p>
          </div>

          <section className="animate-fade-in" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
            <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-2 justify-center">
              <Icon name="TrendingUp" size={28} />
              Статистика прослушиваний
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="text-center space-y-2">
                    <Icon name={stat.icon as any} size={32} className={`mx-auto ${stat.color}`} />
                    <p className="text-sm text-muted-foreground font-medium">{stat.platform}</p>
                    <p className="text-3xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.plays}
                    </p>
                    <p className="text-xs text-muted-foreground">прослушиваний</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <div className="mt-8 text-center animate-bounce">
            <Icon name="ChevronDown" size={32} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="min-h-screen relative snap-start flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sections[1].bgImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-4xl font-montserrat font-bold mb-8 flex items-center gap-3 justify-center">
            <Icon name="Music" size={36} />
            Музыка
          </h2>
          <div className="grid gap-4">
            {links.music.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <Icon name={link.icon as any} size={32} className={`transition-colors ${link.color}`} />
                    <span className="font-medium text-xl">{link.name}</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen relative snap-start flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sections[2].bgImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-4xl font-montserrat font-bold mb-8 flex items-center gap-3 justify-center">
            <Icon name="Share2" size={36} />
            Соцсети
          </h2>
          <div className="grid gap-4">
            {links.social.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <Icon name={link.icon as any} size={32} className={`transition-colors ${link.color}`} />
                    <span className="font-medium text-xl">{link.name}</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen relative snap-start flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sections[3].bgImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-4xl font-montserrat font-bold mb-8 flex items-center gap-3 justify-center">
            <Icon name="Video" size={36} />
            Видео
          </h2>
          <div className="grid gap-4">
            {links.video.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <Icon name={link.icon as any} size={32} className={`transition-colors ${link.color}`} />
                    <span className="font-medium text-xl">{link.name}</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen relative snap-start flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sections[4].bgImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-4xl font-montserrat font-bold mb-8 flex items-center gap-3 justify-center">
            <Icon name="Mic2" size={36} />
            Концерты
          </h2>
          <div className="grid gap-4">
            {links.concerts.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <Icon name={link.icon as any} size={32} className={`transition-colors ${link.color}`} />
                    <span className="font-medium text-xl">{link.name}</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <footer className="mt-16 text-center text-muted-foreground">
            <p className="text-sm">© 2024 RUBY • Рок-группа</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Index;