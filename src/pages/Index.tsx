import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const landmarks = [
  {
    id: 1,
    name: 'Башня Сююмбике',
    nameEn: 'Söyembikä Tower',
    description: 'Падающая башня Казанского Кремля, символ города',
    location: 'Казанский Кремль, Казань',
    coordinates: '55.7987° N, 49.1053° E',
    image: 'https://cdn.poehali.dev/projects/a64c5d51-3df5-4e80-99e5-1b96ac198856/files/8771668d-7b40-40ea-83c9-4471a182b344.jpg',
  },
  {
    id: 2,
    name: 'Мечеть Кул-Шариф',
    nameEn: 'Qolşärif Mosque',
    description: 'Главная джума-мечеть Татарстана и Казани',
    location: 'Казанский Кремль, Казань',
    coordinates: '55.7984° N, 49.1050° E',
    image: 'https://cdn.poehali.dev/projects/a64c5d51-3df5-4e80-99e5-1b96ac198856/files/7ce27b59-2eba-4a34-9f74-26f2fc9d752d.jpg',
  },
  {
    id: 3,
    name: 'Центр семьи "Казан"',
    nameEn: 'Kazan Family Center',
    description: 'Современное здание в форме традиционного казана',
    location: 'набережная Казанки, Казань',
    coordinates: '55.7897° N, 49.1231° E',
    image: 'https://cdn.poehali.dev/projects/a64c5d51-3df5-4e80-99e5-1b96ac198856/files/ffb5a13d-7df0-4bc4-b66c-212c8333dab3.jpg',
  },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Татарстан
          </h1>
          <p className="text-xl text-muted-foreground">
            Культурное наследие и традиции
          </p>
        </header>

        <Tabs defaultValue="landmarks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto">
            <TabsTrigger value="landmarks" className="text-base py-3">
              <Icon name="MapPin" size={20} className="mr-2" />
              Достопримечательности
            </TabsTrigger>
            <TabsTrigger value="culture" className="text-base py-3">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Культура
            </TabsTrigger>
            <TabsTrigger value="music" className="text-base py-3">
              <Icon name="Music" size={20} className="mr-2" />
              Музыка
            </TabsTrigger>
          </TabsList>

          <TabsContent value="landmarks" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landmarks.map((landmark, index) => (
                <Card
                  key={landmark.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={landmark.image}
                      alt={landmark.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-semibold text-primary">
                        {landmark.name}
                      </h3>
                      <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                        #{landmark.id}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      {landmark.nameEn}
                    </p>
                    <p className="text-foreground mb-4">{landmark.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="MapPin"
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-muted-foreground">
                          {landmark.location}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon
                          name="Compass"
                          size={16}
                          className="text-secondary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-muted-foreground font-mono text-xs">
                          {landmark.coordinates}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-12 animate-fade-in">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square">
                    <img
                      src="https://cdn.poehali.dev/projects/a64c5d51-3df5-4e80-99e5-1b96ac198856/files/132b0fac-807d-4ca7-a3cd-317f566e1557.jpg"
                      alt="Татарский орнамент"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                    <h2 className="text-3xl font-bold mb-4 text-primary">
                      Татарский орнамент
                    </h2>
                    <p className="text-foreground leading-relaxed mb-6">
                      Традиционные татарские орнаменты отличаются сложностью и
                      изяществом. Они сочетают растительные мотивы с
                      геометрическими узорами, создавая уникальный стиль,
                      характерный для искусства тюркских народов.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        Растительные мотивы
                      </span>
                      <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        Геометрия
                      </span>
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        Тюльпаны
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-secondary/5 to-primary/5 order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-4 text-primary">
                      Национальная одежда
                    </h2>
                    <p className="text-foreground leading-relaxed mb-6">
                      Традиционный татарский костюм отличается яркостью и
                      богатством декора. Женский наряд включает расшитое платье,
                      жилет-камзол и тюбетейку, украшенную бисером, монетами и
                      вышивкой. Каждый элемент несёт глубокий символический
                      смысл.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        Вышивка
                      </span>
                      <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        Тюбетейка
                      </span>
                      <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                        Камзол
                      </span>
                    </div>
                  </div>
                  <div className="aspect-square order-1 md:order-2">
                    <img
                      src="https://cdn.poehali.dev/projects/a64c5d51-3df5-4e80-99e5-1b96ac198856/files/52d72e74-55c7-476b-8cdd-965185a2bef9.jpg"
                      alt="Национальная одежда"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2 text-primary">
                    Туган тел
                  </h2>
                  <p className="text-muted-foreground">Родной язык</p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 mb-8">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <Button
                      size="lg"
                      onClick={togglePlay}
                      className="rounded-full w-16 h-16 p-0"
                    >
                      {isPlaying ? (
                        <Icon name="Pause" size={28} />
                      ) : (
                        <Icon name="Play" size={28} className="ml-1" />
                      )}
                    </Button>
                  </div>
                  <audio
                    ref={audioRef}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>

                <div className="space-y-8">
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                      <Icon name="Languages" size={20} />
                      Текст на татарском
                    </h3>
                    <div className="text-foreground leading-relaxed space-y-3 text-lg">
                      <p>Туган тел – туган ана тели,</p>
                      <p>Туган ил – ил кебек изге тел.</p>
                      <p>Әни тел – бөтен телләр арасында</p>
                      <p>Булып тора иң матур, иң дәртле тел.</p>
                      <p className="mt-4">
                        Туган тел – җырлар җыру, сөю теле,
                      </p>
                      <p>Илһамнар бирде безгә ул тел белән.</p>
                      <p>Туган телсез кеше – иясез өе,</p>
                      <p>Туган телсез ил юк дөньяда бер тел.</p>
                    </div>
                  </div>

                  <div className="bg-secondary/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-secondary flex items-center gap-2">
                      <Icon name="BookOpen" size={20} />
                      Перевод на русский
                    </h3>
                    <div className="text-foreground leading-relaxed space-y-3">
                      <p>Родной язык – язык родной матери,</p>
                      <p>Родная земля – священный как народ язык.</p>
                      <p>Материнский язык – среди всех языков</p>
                      <p>Остаётся самым красивым, самым дорогим языком.</p>
                      <p className="mt-4">
                        Родной язык – язык песен и любви,
                      </p>
                      <p>Вдохновение дал нам он этим языком.</p>
                      <p>Человек без родного языка – дом без хозяина,</p>
                      <p>Нет в мире народа без родного языка.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-20 text-center text-muted-foreground">
          <p className="text-sm">
            Культурный портал Республики Татарстан
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
