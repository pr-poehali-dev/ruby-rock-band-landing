import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  return (
    <div className="min-h-screen relative overflow-hidden font-rubik">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/396fa848-07f9-403f-a4dc-f5c4abbf124e/files/b38096e5-5704-43cf-806a-08af8857bd27.jpg')`,
        }}
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

        <div className="space-y-8">
          <section className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Music" size={28} />
              Музыка
            </h2>
            <div className="grid gap-3">
              {links.music.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block"
                >
                  <Card className="p-4 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <Icon name={link.icon as any} size={24} className={`transition-colors ${link.color}`} />
                      <span className="font-medium text-lg">{link.name}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Share2" size={28} />
              Соцсети
            </h2>
            <div className="grid gap-3">
              {links.social.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block"
                >
                  <Card className="p-4 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <Icon name={link.icon as any} size={24} className={`transition-colors ${link.color}`} />
                      <span className="font-medium text-lg">{link.name}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Video" size={28} />
              Видео
            </h2>
            <div className="grid gap-3">
              {links.video.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block"
                >
                  <Card className="p-4 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <Icon name={link.icon as any} size={24} className={`transition-colors ${link.color}`} />
                      <span className="font-medium text-lg">{link.name}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Mic2" size={28} />
              Концерты
            </h2>
            <div className="grid gap-3">
              {links.concerts.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block"
                >
                  <Card className="p-4 bg-card/60 backdrop-blur-md border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <Icon name={link.icon as any} size={24} className={`transition-colors ${link.color}`} />
                      <span className="font-medium text-lg">{link.name}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <p className="text-sm">© 2024 RUBY • Рок-группа</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
