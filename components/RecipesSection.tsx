import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
import { ChefHat, Clock, Users, Star, Bookmark } from "lucide-react";
import { useState } from "react";
import { useApp } from "../App";
import { toast } from "sonner";

const recipes = [
  {
    id: 1,
    title: "Bowl de Quinoa Colorido",
    description: "Uma explosão de sabores e nutrientes em uma só tigela",
    image: "https://images.unsplash.com/photo-1614597330453-ecf2c06e1f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZnJ1aXRzfGVufDF8fHx8MTc1ODU4NzQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    prepTime: "20 min",
    servings: 2,
    difficulty: "Fácil",
    rating: 4.8,
    color: "#79CACC",
    ingredients: ["Quinoa", "Abacate", "Tomate cereja", "Rúcula", "Azeite"]
  },
  {
    id: 2,
    title: "Sopa Detox de Vegetais",
    description: "Perfeita para dias frios e para limpar o organismo",
    image: "https://images.unsplash.com/photo-1696527018080-07e02cab468d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwdmVnZXRhYmxlcyUyMGtpdGNoZW58ZW58MXx8fHwxNzU4NTg3NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    prepTime: "35 min",
    servings: 4,
    difficulty: "Médio",
    rating: 4.6,
    color: "#A479CC",
    ingredients: ["Brócolis", "Couve-flor", "Cenoura", "Gengibre", "Caldo vegetal"]
  },
  {
    id: 3,
    title: "Salada de Folhas Verdes",
    description: "Rica em vitaminas e minerais essenciais",
    image: "https://images.unsplash.com/photo-1717240740629-6b784929f768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWZ5JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTg1ODc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    prepTime: "15 min",
    servings: 3,
    difficulty: "Fácil",
    rating: 4.9,
    color: "#A1CC79",
    ingredients: ["Espinafre", "Rúcula", "Alface", "Nozes", "Vinagrete"]
  },
  {
    id: 4,
    title: "Wrap Vegetariano",
    description: "Uma opção prática e saudável para o almoço",
    image: "https://images.unsplash.com/photo-1757332334667-d2e75d5816ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTg1ODU2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    prepTime: "10 min",
    servings: 1,
    difficulty: "Fácil",
    rating: 4.7,
    color: "#CC7B79",
    ingredients: ["Tortilla integral", "Hummus", "Pepino", "Cenoura", "Alface"]
  }
];

export function RecipesSection() {
  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);
  const { addPoints, toggleFavorite } = useApp();

  const toggleSave = (recipeId: number) => {
    const isSaved = savedRecipes.includes(recipeId);
    setSavedRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
    
    toggleFavorite('recipes', recipeId);
    
    if (!isSaved) {
      addPoints(5);
      toast.success('Receita salva! +5 pontos');
    }
  };

  const toggleExpand = (recipeId: number) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  return (
    <section id="receitas" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-8 h-8" style={{ color: '#CC7B79' }} />
            <span className="text-lg" style={{ color: '#CC7B79' }}>Receitas Saudáveis</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Sabor & Nutrição
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra receitas deliciosas e nutritivas que transformam ingredientes 
            simples em refeições extraordinárias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => {
            const isExpanded = expandedRecipe === recipe.id;
            const isSaved = savedRecipes.includes(recipe.id);
            
            return (
              <Card 
                key={recipe.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 overflow-hidden ${
                  isExpanded ? 'lg:col-span-2 scale-105 shadow-2xl' : 'hover:scale-105'
                }`}
                onClick={() => toggleExpand(recipe.id)}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                      isExpanded ? 'h-64' : 'h-48'
                    }`}
                  />
                  
                  {/* Difficulty Badge */}
                  <Badge 
                    className="absolute top-3 left-3 border-0 text-white"
                    style={{ backgroundColor: recipe.color }}
                  >
                    {recipe.difficulty}
                  </Badge>

                  {/* Save Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(recipe.id);
                    }}
                    className="absolute top-3 right-3 p-2 h-auto bg-white/90 hover:bg-white"
                  >
                    <Bookmark 
                      className={`w-4 h-4 transition-colors ${
                        isSaved 
                          ? 'fill-yellow-500 text-yellow-500' 
                          : 'text-gray-600 hover:text-yellow-500'
                      }`}
                    />
                  </Button>

                  {/* Rating */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{recipe.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 group-hover:text-gray-900 transition-colors">
                    {recipe.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm mb-4">
                    {recipe.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} pessoas</span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium mb-2">Ingredientes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.ingredients.map((ingredient, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    className="w-full mt-4 text-white border-0 hover:opacity-90 transition-all duration-300"
                    style={{ backgroundColor: recipe.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addPoints(10);
                      toast.success(`Receita aberta! +10 pontos`, {
                        description: recipe.title
                      });
                    }}
                  >
                    Ver Receita Completa
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 text-lg px-8 py-4 hover:bg-gray-50"
            style={{ borderColor: '#CC7B79', color: '#CC7B79' }}
          >
            Explorar Mais Receitas
          </Button>
        </div>
      </div>
    </section>
  );
}