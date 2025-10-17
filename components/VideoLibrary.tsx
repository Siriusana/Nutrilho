import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
import { Play, Clock, Eye, Heart } from "lucide-react";
import { useState } from "react";
import { useApp } from "../App";
import { toast } from "sonner";

const videos = [
  {
    id: 1,
    title: "Como Preparar Smoothies Nutritivos",
    description: "Aprenda receitas deliciosas e saudáveis para começar o dia",
    thumbnail: "https://images.unsplash.com/photo-1614597330453-ecf2c06e1f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZnJ1aXRzfGVufDF8fHx8MTc1ODU4NzQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:24",
    views: 15420,
    category: "Receitas",
    color: "#79CACC"
  },
  {
    id: 2,
    title: "Nutrição Infantil: Dicas Práticas",
    description: "Estratégias para uma alimentação saudável das crianças",
    thumbnail: "https://images.unsplash.com/photo-1696527018080-07e02cab468d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwdmVnZXRhYmxlcyUyMGtpdGNoZW58ZW58MXx8fHwxNzU4NTg3NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:15",
    views: 8930,
    category: "Educação",
    color: "#A479CC"
  },
  {
    id: 3,
    title: "Horta em Casa: Primeiros Passos",
    description: "Cultive seus próprios vegetais orgânicos",
    thumbnail: "https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTg1ODc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:32",
    views: 22105,
    category: "Jardinagem",
    color: "#A1CC79"
  },
  {
    id: 4,
    title: "Alimentação Plant-Based",
    description: "Benefícios e como fazer a transição",
    thumbnail: "https://images.unsplash.com/photo-1757332334667-d2e75d5816ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTg1ODU2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:07",
    views: 31287,
    category: "Lifestyle",
    color: "#CC7B79"
  }
];

const categories = ["Todos", "Receitas", "Educação", "Jardinagem", "Lifestyle"];

export function VideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [likedVideos, setLikedVideos] = useState<number[]>([]);

  const filteredVideos = selectedCategory === "Todos" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const { addPoints, toggleFavorite } = useApp();

  const toggleLike = (videoId: number) => {
    const isLiked = likedVideos.includes(videoId);
    setLikedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
    
    toggleFavorite('videos', videoId);
    
    if (!isLiked) {
      addPoints(5);
      toast.success('Vídeo adicionado aos favoritos! +5 pontos');
    }
  };

  const handlePlayVideo = (video: typeof videos[0]) => {
    addPoints(15);
    toast.success(`Assistindo: ${video.title}`, {
      description: '+15 pontos de experiência'
    });
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="w-8 h-8" style={{ color: '#A479CC' }} />
            <span className="text-lg" style={{ color: '#A479CC' }}>Biblioteca de Vídeos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Aprenda com Especialistas
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesse nossa coleção de vídeos educativos sobre nutrição, culinária saudável 
            e bem-estar, criados por profissionais da área.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category 
                  ? 'text-white border-0' 
                  : 'hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? '#A479CC' : 'transparent',
                borderColor: selectedCategory !== category ? '#A479CC' : 'transparent',
                color: selectedCategory !== category ? '#A479CC' : 'white'
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Card 
              key={video.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 hover:scale-105 overflow-hidden"
              onClick={() => handlePlayVideo(video)}
            >
              <div className="relative">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: video.color }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <Badge className="absolute bottom-2 right-2 bg-black/70 text-white border-0">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>

                {/* Category Badge */}
                <Badge 
                  className="absolute top-2 left-2 border-0 text-white"
                  style={{ backgroundColor: video.color }}
                >
                  {video.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-900 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{video.views.toLocaleString()}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(video.id);
                    }}
                    className="p-2 h-auto"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${
                        likedVideos.includes(video.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="text-white border-0 hover:opacity-90 text-lg px-8 py-4"
            style={{ backgroundColor: '#A479CC' }}
          >
            Ver Todos os Vídeos
          </Button>
        </div>
      </div>
    </section>
  );
}