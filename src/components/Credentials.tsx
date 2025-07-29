import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Building2, Users, CheckCircle, Star } from "lucide-react";

const Credentials = () => {
  const certifications = [
    {
      icon: Award,
      title: "Star-Rated Nursery",
      organization: "National Horticulture Board (NHB), New Delhi",
      description: "Accredited for maintaining highest quality standards",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: Shield,
      title: "Big Model Nursery",
      organization: "National Horticulture Mission (NHM)",
      description: "Registered for large-scale horticultural projects",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: Building2,
      title: "Largest in Madhya Pradesh",
      organization: "Regional Recognition",
      description: "Among the largest nurseries in central India",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const partnerships = [
    {
      name: "JNKVV",
      fullName: "Jawaharlal Nehru Krishi Vishwa Vidyalaya",
      type: "Agricultural University"
    },
    {
      name: "SFRI",
      fullName: "State Forest Research Institute",
      type: "Research Institute"
    },
    {
      name: "TFRI",
      fullName: "Tropical Forest Research Institute",
      type: "Research Institute"
    },
    {
      name: "Rani Durgavati University",
      fullName: "Biotech Department",
      type: "University Partnership"
    }
  ];

  const achievements = [
    { icon: Users, text: "50+ Trained Professionals", number: "50+" },
    { icon: CheckCircle, text: "1000+ Plant Varieties Cultivated", number: "1000+" },
    { icon: Building2, text: "Multi-lakh Plant Inventory", number: "Multi-lakh" },
    { icon: Star, text: "18+ Years of Excellence", number: "18+" }
  ];

  return (
    <section id="credentials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Credentials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Recognized Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality and innovation has earned us prestigious recognitions 
            and partnerships with leading institutions across India.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Official Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <Badge className={cert.color}>{cert.organization}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Trusted Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-foreground">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{partner.fullName}</p>
                  <Badge variant="secondary" className="text-xs">{partner.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <p className="text-muted-foreground text-sm">{achievement.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Infrastructure Highlights */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Our Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Hi-Tech Systems</div>
                <p className="text-sm text-muted-foreground">Scientific polybag & root trainer systems</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Health Management</div>
                <p className="text-sm text-muted-foreground">Advanced plant health monitoring</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Disease Control</div>
                <p className="text-sm text-muted-foreground">Preventive & therapeutic measures</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Logistics</div>
                <p className="text-sm text-muted-foreground">Timely, safe, dense delivery systems</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Credentials;