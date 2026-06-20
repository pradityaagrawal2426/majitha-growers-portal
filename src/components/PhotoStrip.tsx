import { Badge } from "@/components/ui/badge";

interface PhotoStripProps {
  title?: string;
  subtitle?: string;
  images: { src: string; alt: string; caption?: string }[];
  bgClassName?: string;
}

const PhotoStrip = ({ title, subtitle, images, bgClassName = "bg-muted/30" }: PhotoStripProps) => {
  return (
    <section className={`py-16 ${bgClassName}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {subtitle && (
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                {subtitle}
              </Badge>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {img.caption && (
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-primary">{img.caption}</Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoStrip;