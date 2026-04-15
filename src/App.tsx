import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articles, Article } from './data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, Share2, Bookmark, Flame, TrendingUp, Clock, ArrowRight, Search, Settings, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

interface ArticleTileProps {
  article: Article;
  isActive?: boolean;
  onClick: () => void;
  key?: React.Key;
}

const ArticleTile = ({ article, isActive, onClick }: ArticleTileProps) => (
  <motion.div
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={cn(
      "cursor-pointer group border-b border-border transition-colors",
      isActive ? "bg-white shadow-[10px_0_0_var(--primary)]" : "bg-background hover:bg-white/50"
    )}
  >
    <div className="flex flex-col p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-sans font-bold text-primary uppercase tracking-widest">
          {article.area}
        </span>
      </div>
      <h3 className="font-sans font-bold text-base leading-tight mb-2 group-hover:text-primary transition-colors">
        {article.punchyTitle}
      </h3>
      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
        {article.summary}
      </p>
    </div>
  </motion.div>
);

interface InshortPageProps {
  article: Article;
  onBack: () => void;
  isBookmarked: boolean;
  onBookmark: (id: string) => void;
  key?: React.Key;
}

const InshortPage = ({ article, onBack, isBookmarked, onBookmark }: InshortPageProps) => (
  <div className="snap-child relative bg-white flex flex-col h-screen overflow-hidden border-r border-border shadow-[0_0_50px_rgba(0,0,0,0.1)] shadow-phase">
    {/* Header Overlay */}
    <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onBack} 
        className="rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md border border-border/50"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <div className="flex gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onBookmark(article.id)}
          className={cn(
            "rounded-full backdrop-blur-md border border-border/50 transition-colors",
            isBookmarked ? "bg-primary text-primary-foreground" : "bg-background/20 hover:bg-background/40"
          )}
        >
          <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-current")} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md border border-border/50">
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </div>

    {/* Content Section (Editorial Detail View) */}
    <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-24 overflow-y-auto relative z-10">
      <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-6 block">
        {article.area}
      </span>
      
      <h1 className="font-serif font-black text-5xl md:text-6xl leading-[1.1] mb-2 tracking-tighter text-foreground py-2">
        {article.punchyTitle}
      </h1>

      <h2 className="font-sans font-bold text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-8 leading-relaxed border-b border-border pb-4">
        {article.title}
      </h2>

      {/* Teaser Figure */}
      <div className="w-full max-w-md aspect-video mb-8 rounded-lg overflow-hidden border border-border shadow-sm flex-shrink-0">
        <img 
          src={article.imageUrl} 
          alt="Teaser Figure" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="p-2 bg-muted/30 text-[9px] font-mono uppercase tracking-widest text-center text-muted-foreground">
          Fig 1: Teaser visualization from the research paper
        </div>
      </div>
      
      <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
        {article.summary}
      </p>
      
      <div className="flex flex-col gap-6 max-w-xl">
        <p className="text-foreground/80 leading-relaxed text-lg font-sans">
          {article.fullContent}
        </p>
        
        <Button 
          onClick={() => window.open(`https://scholar.google.com/scholar?q=${encodeURIComponent(article.title)}`, '_blank')}
          className="w-fit h-auto py-4 px-8 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-widest rounded-none hover:bg-foreground/90 transition-colors mt-4"
        >
          Open Full Research
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-4 border-t border-border pt-8">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold border border-border">
          {article.author.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold font-sans uppercase tracking-wider">{article.author}</span>
          <span className="text-[10px] font-sans text-muted-foreground uppercase tracking-widest">
            {article.date} &bull; PUBLISHED IN LAB.
          </span>
        </div>
      </div>
    </div>

    {/* Swipe Indicator */}
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent pointer-events-none flex flex-col items-center z-20">
      <motion.div 
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="w-10 h-[1px] bg-primary/40" />
        <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-muted-foreground font-bold">
          Swipe Left
        </span>
      </motion.div>
    </div>
  </div>
);

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [showPreferences, setShowPreferences] = useState(false);
  const itemsPerPage = 5;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Load bookmarks and preferences from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('tunein_bookmarks');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));

    const savedAreas = localStorage.getItem('tunein_areas');
    if (savedAreas) {
      setSelectedAreas(JSON.parse(savedAreas));
    } else {
      // First time user
      setShowPreferences(true);
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('tunein_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Save areas to localStorage
  useEffect(() => {
    localStorage.setItem('tunein_areas', JSON.stringify(selectedAreas));
  }, [selectedAreas]);

  const allAreas = useMemo(() => {
    const areas = new Set(articles.map(a => a.area));
    return Array.from(areas);
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedAreas.length === 0) return articles;
    return articles.filter(a => selectedAreas.includes(a.area));
  }, [selectedAreas]);

  const paginatedArticles = useMemo(() => {
    const start = page * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [page, filteredArticles]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  useEffect(() => {
    if (selectedArticleId && scrollContainerRef.current) {
      const index = filteredArticles.findIndex(a => a.id === selectedArticleId);
      if (index !== -1) {
        scrollContainerRef.current.scrollLeft = index * window.innerWidth;
      }
    }
  }, [selectedArticleId, filteredArticles]);

  const handleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {!selectedArticleId ? (
          <motion.div
            key="feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col max-w-5xl mx-auto w-full border-x border-border"
          >
            {/* Header */}
            <header className="px-10 py-8 flex justify-between items-center border-b border-border bg-background z-10">
              <div className="font-serif font-black text-3xl tracking-tighter">LAB.</div>
              
              <div className="text-[11px] font-sans font-bold uppercase tracking-widest flex items-center gap-4">
                <span>APR 2026 ISSUE</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowPreferences(true)}
                  className="w-8 h-8 rounded-full hover:bg-secondary"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Left: Ranking Sidebar */}
              <section className="flex-1 md:flex-[0.4] bg-border flex flex-col overflow-y-auto border-r border-border">
                <div className="flex-1 flex flex-col gap-[1px]">
                  {paginatedArticles.length > 0 ? (
                    paginatedArticles.map((article) => (
                      <ArticleTile
                        key={article.id}
                        article={article}
                        isActive={false}
                        onClick={() => setSelectedArticleId(article.id)}
                      />
                    ))
                  ) : (
                    <div className="p-10 text-center bg-background h-full flex flex-col items-center justify-center">
                      <p className="text-muted-foreground font-serif italic text-lg mb-4">No articles match your preferences.</p>
                      <Button variant="outline" onClick={() => setSelectedAreas([])}>Reset Filters</Button>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="p-6 bg-background flex items-center justify-between border-t border-border mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={page === 0}
                      onClick={() => setPage(p => p - 1)}
                      className="text-[10px] font-sans font-bold uppercase tracking-widest h-8 px-4"
                    >
                      PREV
                    </Button>
                    <div className="flex gap-1.5">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all duration-300",
                            page === i ? "bg-primary w-4" : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={page === totalPages - 1}
                      onClick={() => setPage(p => p + 1)}
                      className="text-[10px] font-sans font-bold uppercase tracking-widest h-8 px-4"
                    >
                      NEXT
                    </Button>
                  </div>
                )}
              </section>

              {/* Right: Featured / Detail Preview */}
              <section className="hidden md:flex flex-[0.6] bg-white flex-col justify-center p-20">
                {paginatedArticles.length > 0 ? (
                  <>
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-6 block">
                      {paginatedArticles[0].area}
                    </span>
                    <h1 className="font-serif font-black text-6xl leading-tight mb-8 tracking-tighter">
                      {paginatedArticles[0].punchyTitle}
                    </h1>
                    <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
                      {paginatedArticles[0].summary}
                    </p>
                    <Button 
                      onClick={() => setSelectedArticleId(paginatedArticles[0].id)}
                      className="w-fit h-auto py-4 px-8 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-widest rounded-none hover:bg-foreground/90 transition-colors"
                    >
                      Open Full Research
                    </Button>
                  </>
                ) : (
                  <div className="text-center">
                    <h2 className="font-serif text-3xl mb-4">Curate Your Feed</h2>
                    <p className="text-muted-foreground">Select areas of interest to see featured research.</p>
                  </div>
                )}
              </section>
            </main>

            {/* Footer */}
            <footer className="px-10 h-16 border-t border-border flex justify-between items-center bg-background text-[11px] font-sans font-bold text-muted-foreground uppercase tracking-widest">
              <div>{filteredArticles.length} ARTICLES FILTERED</div>
              <div className="flex gap-8">
                <span className="hidden sm:inline">SWIPE FOR NEXT PAGE</span>
                <button onClick={() => setShowPreferences(true)} className="hover:text-primary transition-colors">SET PREFERENCES</button>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div 
              ref={scrollContainerRef}
              className="snap-x-container h-screen w-full"
            >
              {filteredArticles.map((article) => (
                <InshortPage
                  key={article.id}
                  article={article}
                  isBookmarked={bookmarks.includes(article.id)}
                  onBookmark={handleBookmark}
                  onBack={() => setSelectedArticleId(null)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md p-10 border border-border shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPreferences(false)}
                className="absolute top-6 right-6 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-serif font-black text-4xl tracking-tighter mb-2">Preferences</h2>
              <p className="font-serif text-muted-foreground mb-8 italic">Curate your research feed by selecting areas of interest.</p>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {allAreas.map(area => (
                    <button
                      key={area}
                      onClick={() => toggleArea(area)}
                      className={cn(
                        "px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-widest border transition-all flex items-center gap-2",
                        selectedAreas.includes(area) 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-background text-foreground border-border hover:border-primary"
                      )}
                    >
                      {area}
                      {selectedAreas.includes(area) && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <Button 
                    onClick={() => setShowPreferences(false)}
                    className="w-full h-auto py-4 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-widest rounded-none hover:bg-foreground/90 transition-colors"
                  >
                    Save & Continue
                  </Button>
                  <button 
                    onClick={() => setSelectedAreas([])}
                    className="w-full text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground mt-4 hover:text-foreground transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

