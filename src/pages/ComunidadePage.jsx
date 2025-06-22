"use client"

import { useState } from "react"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  Users,
  Calendar,
  TrendingUp,
  Plus,
  MapPin,
  Clock,
  Star,
  Send,
  ImageIcon,
  Video,
  Smile,
} from "lucide-react"

export default function ComunidadePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [newPost, setNewPost] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("todos")
  const [posts, setPosts] = useState([
    {
      id: 1,
      autor: "Ana Silva",
      username: "@ana_artesa",
      avatar: "/placeholder.svg?height=40&width=40",
      tempo: "2 horas atrás",
      conteudo:
        "Acabei de lançar minha nova coleção de bolsas artesanais! Muito feliz com o resultado 🎨✨ Cada peça foi feita com muito amor e dedicação. O que vocês acham?",
      imagem: "/placeholder.svg?height=300&width=500",
      likes: 24,
      comentarios: 8,
      compartilhamentos: 3,
      categoria: "Novidades",
      liked: false,
      tags: ["#artesanato", "#bolsas", "#handmade"],
    },
    {
      id: 2,
      autor: "Maria Santos",
      username: "@maria_empreende",
      avatar: "/placeholder.svg?height=40&width=40",
      tempo: "4 horas atrás",
      conteudo:
        "Dica para empreendedoras: sempre mantenham um bom relacionamento com seus clientes. A confiança é tudo! 💪 Respondam rapidamente, sejam transparentes e sempre entreguem mais do que prometem.",
      likes: 18,
      comentarios: 12,
      compartilhamentos: 7,
      categoria: "Dicas",
      liked: true,
      tags: ["#dicas", "#empreendedorismo", "#clientes"],
    },
    {
      id: 3,
      autor: "Carla Oliveira",
      username: "@carla_sustentavel",
      avatar: "/placeholder.svg?height=40&width=40",
      tempo: "6 horas atrás",
      conteudo:
        "Participei de uma feira de artesanato hoje e foi incrível! Conheci outras empreendedoras maravilhosas e aprendi muito sobre sustentabilidade nos negócios. 🌱",
      imagem: "/placeholder.svg?height=300&width=500",
      likes: 31,
      comentarios: 15,
      compartilhamentos: 5,
      categoria: "Eventos",
      liked: false,
      tags: ["#feira", "#sustentabilidade", "#networking"],
    },
    {
      id: 4,
      autor: "Juliana Costa",
      username: "@ju_cosmeticos",
      avatar: "/placeholder.svg?height=40&width=40",
      tempo: "8 horas atrás",
      conteudo:
        "Receita caseira de hidratante labial natural! 🌿 Ingredientes: cera de abelha, óleo de coco, vitamina E. Super fácil de fazer e vende muito bem!",
      likes: 42,
      comentarios: 23,
      compartilhamentos: 12,
      categoria: "Receitas",
      liked: true,
      tags: ["#cosmeticos", "#natural", "#receita"],
    },
  ])

  const grupos = [
    {
      id: 1,
      nome: "Artesãs Unidas",
      membros: 1234,
      descricao: "Grupo para artesãs compartilharem técnicas e experiências",
      categoria: "Artesanato",
      imagem: "/placeholder.svg?height=100&width=100",
      ativo: true,
      ultimaAtividade: "2 min atrás",
    },
    {
      id: 2,
      nome: "Empreendedoras Digitais",
      membros: 856,
      descricao: "Dicas e estratégias para vender online",
      categoria: "Marketing Digital",
      imagem: "/placeholder.svg?height=100&width=100",
      ativo: true,
      ultimaAtividade: "15 min atrás",
    },
    {
      id: 3,
      nome: "Sustentabilidade no Negócio",
      membros: 642,
      descricao: "Práticas sustentáveis para empreendedoras conscientes",
      categoria: "Sustentabilidade",
      imagem: "/placeholder.svg?height=100&width=100",
      ativo: false,
      ultimaAtividade: "1 hora atrás",
    },
    {
      id: 4,
      nome: "Mães Empreendedoras",
      membros: 923,
      descricao: "Equilibrando maternidade e empreendedorismo",
      categoria: "Lifestyle",
      imagem: "/placeholder.svg?height=100&width=100",
      ativo: true,
      ultimaAtividade: "30 min atrás",
    },
  ]

  const eventos = [
    {
      id: 1,
      nome: "Workshop de Marketing Digital",
      data: "2024-02-15",
      horario: "19:00",
      participantes: 45,
      maxParticipantes: 50,
      tipo: "Online",
      preco: "Gratuito",
      organizador: "Ana Silva",
      descricao: "Aprenda estratégias de marketing digital para impulsionar seu negócio",
      local: "Zoom",
      categoria: "Educação",
    },
    {
      id: 2,
      nome: "Feira de Empreendedoras",
      data: "2024-02-20",
      horario: "09:00",
      participantes: 120,
      maxParticipantes: 200,
      tipo: "Presencial",
      preco: "R$ 25,00",
      organizador: "Maria Santos",
      descricao: "Grande feira com produtos de empreendedoras locais",
      local: "Centro de Convenções - São Paulo",
      categoria: "Feira",
    },
    {
      id: 3,
      nome: "Networking Feminino",
      data: "2024-02-25",
      horario: "18:30",
      participantes: 78,
      maxParticipantes: 100,
      tipo: "Híbrido",
      preco: "R$ 15,00",
      organizador: "Carla Oliveira",
      descricao: "Encontro para networking entre mulheres empreendedoras",
      local: "Café Central + Online",
      categoria: "Networking",
    },
  ]

  const topicosEmAlta = [
    { nome: "#MarketingDigital", posts: 1234, crescimento: "+15%" },
    { nome: "#Sustentabilidade", posts: 856, crescimento: "+23%" },
    { nome: "#ArtesanatoModerno", posts: 642, crescimento: "+8%" },
    { nome: "#EmpreendedorismoFeminino", posts: 1567, crescimento: "+31%" },
    { nome: "#VendaOnline", posts: 923, crescimento: "+12%" },
    { nome: "#Networking", posts: 445, crescimento: "+19%" },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Buscar na comunidade:", searchTerm)
  }

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handleNewPost = () => {
    if (newPost.trim()) {
      const novoPost = {
        id: posts.length + 1,
        autor: "Você",
        username: "@voce",
        avatar: "/placeholder.svg?height=40&width=40",
        tempo: "agora",
        conteudo: newPost,
        likes: 0,
        comentarios: 0,
        compartilhamentos: 0,
        categoria: "Geral",
        liked: false,
        tags: [],
      }
      setPosts([novoPost, ...posts])
      setNewPost("")
    }
  }

  const filteredPosts = posts.filter((post) => {
    if (selectedFilter === "todos") return true
    return post.categoria.toLowerCase() === selectedFilter.toLowerCase()
  })

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-coral/20 via-sage/20 to-olive/20 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-coral to-olive bg-clip-text text-transparent">
                  Comunidade EmpowerUp
                </h1>
                <p className="max-w-[800px] text-gray-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Conecte-se, compartilhe, cresça. Uma comunidade vibrante de mulheres empreendedoras transformando
                  sonhos em realidade ✨
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                <form onSubmit={handleSearch} className="flex-1 flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar posts, grupos, pessoas..."
                      className="pl-10 h-12 text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button type="submit" size="lg" className="bg-coral hover:bg-coral/90 h-12 px-6">
                    Buscar
                  </Button>
                </form>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {["todos", "novidades", "dicas", "eventos", "receitas"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className={selectedFilter === filter ? "bg-coral hover:bg-coral/90" : ""}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 py-8">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="feed" className="text-base">
                <MessageCircle className="mr-2 h-4 w-4" />
                Feed
              </TabsTrigger>
              <TabsTrigger value="grupos" className="text-base">
                <Users className="mr-2 h-4 w-4" />
                Grupos
              </TabsTrigger>
              <TabsTrigger value="eventos" className="text-base">
                <Calendar className="mr-2 h-4 w-4" />
                Eventos
              </TabsTrigger>
              <TabsTrigger value="trending" className="text-base">
                <TrendingUp className="mr-2 h-4 w-4" />
                Em Alta
              </TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {/* Feed principal */}
                <div className="space-y-6 max-w-3xl mx-auto lg:max-w-none">
                  {/* Criar post */}
                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                            <AvatarFallback className="bg-coral text-white">EU</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Textarea
                              placeholder="Compartilhe algo inspirador com a comunidade..."
                              className="min-h-[100px] resize-none border-none bg-gray-50 text-base"
                              value={newPost}
                              onChange={(e) => setNewPost(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-coral hover:text-coral/80">
                              <ImageIcon className="h-4 w-4 mr-1" />
                              Foto
                            </Button>
                            <Button variant="ghost" size="sm" className="text-sage hover:text-sage/80">
                              <Video className="h-4 w-4 mr-1" />
                              Vídeo
                            </Button>
                            <Button variant="ghost" size="sm" className="text-olive hover:text-olive/80">
                              <Smile className="h-4 w-4 mr-1" />
                              Emoji
                            </Button>
                          </div>
                          <Button
                            onClick={handleNewPost}
                            disabled={!newPost.trim()}
                            className="bg-coral hover:bg-coral/90"
                          >
                            <Send className="h-4 w-4 mr-1" />
                            Publicar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Posts */}
                  <div className="space-y-6">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                        <CardContent className="p-4 sm:p-6">
                          <div className="space-y-4">
                            {/* Header do post */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={post.avatar || "/placeholder.svg"} />
                                  <AvatarFallback className="bg-coral text-white">
                                    {post.autor.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-lg">{post.autor}</h3>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <span>{post.username}</span>
                                    <span>•</span>
                                    <span>{post.tempo}</span>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-coral-light hover:bg-coral-light/80">{post.categoria}</Badge>
                            </div>

                            {/* Conteúdo do post */}
                            <div className="space-y-3">
                              <p className="text-gray-800 text-base leading-relaxed">{post.conteudo}</p>

                              {/* Tags */}
                              {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {post.tags.map((tag, index) => (
                                    <span
                                      key={index}
                                      className="text-coral hover:text-coral/80 cursor-pointer text-sm font-medium"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Imagem do post */}
                              {post.imagem && (
                                <div className="rounded-xl overflow-hidden -mx-4 sm:mx-0">
                                  <img
                                    src={post.imagem || "/placeholder.svg"}
                                    alt="Post"
                                    className="w-full h-48 sm:h-80 object-cover hover:scale-105 transition-transform cursor-pointer"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Ações do post */}
                            <div className="flex items-center justify-between pt-4 border-t">
                              <div className="flex items-center space-x-6">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleLike(post.id)}
                                  className={`${post.liked ? "text-red-500 hover:text-red-600" : "text-coral hover:text-coral/80"} transition-colors`}
                                >
                                  <Heart className={`mr-2 h-4 w-4 ${post.liked ? "fill-current" : ""}`} />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-olive hover:text-olive/80">
                                  <MessageCircle className="mr-2 h-4 w-4" />
                                  {post.comentarios}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-sage hover:text-sage/80">
                                  <Share2 className="mr-2 h-4 w-4" />
                                  {post.compartilhamentos}
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                Comentar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Sidebar - Vai para baixo em telas menores */}
                <div className="space-y-6 lg:sticky lg:top-20">
                  {/* Grupos sugeridos */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Users className="mr-2 h-5 w-5 text-coral" />
                        Grupos Sugeridos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {grupos.slice(0, 3).map((grupo) => (
                        <div
                          key={grupo.id}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={grupo.imagem || "/placeholder.svg"} />
                            <AvatarFallback className="bg-sage text-white">{grupo.nome.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{grupo.nome}</h4>
                            <p className="text-sm text-muted-foreground">{grupo.membros} membros</p>
                          </div>
                          <Button size="sm" variant="outline" className="shrink-0">
                            Participar
                          </Button>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full text-coral hover:text-coral/80">
                        Ver todos os grupos
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Próximos eventos */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-olive" />
                        Próximos Eventos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {eventos.slice(0, 2).map((evento) => (
                        <div key={evento.id} className="space-y-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div>
                            <h4 className="font-medium">{evento.nome}</h4>
                            <Badge variant="outline" className="mt-1">
                              {evento.tipo}
                            </Badge>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-3 w-3" />
                              {evento.data} às {evento.horario}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-3 w-3" />
                              {evento.participantes} participantes
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-3 w-3" />
                              {evento.local}
                            </div>
                          </div>
                          <Button size="sm" className="w-full bg-olive hover:bg-olive/90">
                            Participar
                          </Button>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full text-olive hover:text-olive/80">
                        Ver todos os eventos
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Estatísticas da comunidade */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Comunidade Ativa</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-coral">2.5k</div>
                          <div className="text-sm text-muted-foreground">Membros</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-olive">156</div>
                          <div className="text-sm text-muted-foreground">Online</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage">89</div>
                          <div className="text-sm text-muted-foreground">Posts hoje</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-coral-light">12</div>
                          <div className="text-sm text-muted-foreground">Eventos</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="grupos" className="mt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Grupos da Comunidade</h2>
                  <Button className="bg-coral hover:bg-coral/90">
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Grupo
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {grupos.map((grupo) => (
                    <Card key={grupo.id} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={grupo.imagem || "/placeholder.svg"} />
                              <AvatarFallback className="bg-sage text-white text-lg">
                                {grupo.nome.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{grupo.nome}</h3>
                              <Badge className="mt-1 bg-sage hover:bg-sage/80">{grupo.categoria}</Badge>
                            </div>
                            {grupo.ativo && <div className="h-3 w-3 bg-green-500 rounded-full"></div>}
                          </div>

                          <p className="text-gray-700">{grupo.descricao}</p>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              {grupo.membros} membros
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {grupo.ultimaAtividade}
                            </div>
                          </div>

                          <Button className="w-full bg-coral hover:bg-coral/90">Participar do Grupo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eventos" className="mt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Eventos da Comunidade</h2>
                  <Button className="bg-olive hover:bg-olive/90">
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Evento
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {eventos.map((evento) => (
                    <Card key={evento.id} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-semibold text-lg">{evento.nome}</h3>
                              <p className="text-sm text-muted-foreground">por {evento.organizador}</p>
                            </div>
                            <Badge className="bg-olive hover:bg-olive/80">{evento.tipo}</Badge>
                          </div>

                          <p className="text-gray-700 text-sm">{evento.descricao}</p>

                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4" />
                              {evento.data} às {evento.horario}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="mr-2 h-4 w-4" />
                              {evento.local}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="mr-2 h-4 w-4" />
                              {evento.participantes}/{evento.maxParticipantes} participantes
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold text-coral">{evento.preco}</div>
                            <Badge variant="outline">{evento.categoria}</Badge>
                          </div>

                          <Button className="w-full bg-olive hover:bg-olive/90">Participar do Evento</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">Tópicos em Alta</h2>
                  <p className="text-muted-foreground">Veja o que está movimentando nossa comunidade</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {topicosEmAlta.map((topico, index) => (
                    <Card key={topico.nome} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="text-2xl font-bold text-coral">#{index + 1}</div>
                              <TrendingUp className="h-5 w-5 text-green-500" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80">
                              {topico.crescimento}
                            </Badge>
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg text-coral hover:text-coral/80">{topico.nome}</h3>
                            <p className="text-sm text-muted-foreground">{topico.posts.toLocaleString()} posts</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="text-sm text-muted-foreground ml-2">Muito popular</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Seção de insights */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-coral" />
                      Insights da Comunidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Mais Engajamento</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Posts com imagens</span>
                            <span className="text-sm font-medium text-coral">+45%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Posts com perguntas</span>
                            <span className="text-sm font-medium text-olive">+32%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Posts com dicas</span>
                            <span className="text-sm font-medium text-sage">+28%</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Horários de Pico</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">19h - 21h</span>
                            <span className="text-sm font-medium text-coral">Pico</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">12h - 14h</span>
                            <span className="text-sm font-medium text-olive">Alto</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">09h - 11h</span>
                            <span className="text-sm font-medium text-sage">Médio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
