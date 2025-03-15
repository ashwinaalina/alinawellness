import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      title: "Personal Training",
      description: "One-on-one customized fitness programs tailored to your goals",
      price: "$75",
      period: "per session",
      features: [
        "Personalized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Flexible scheduling"
      ]
    },
    {
      title: "Wellness Consultation",
      description: "Comprehensive health and wellness assessment and planning",
      price: "$120",
      period: "per session",
      features: [
        "Health history review",
        "Lifestyle assessment",
        "Goal setting",
        "Action plan development"
      ]
    },
    {
      title: "Group Fitness Classes",
      description: "Energetic group sessions for all fitness levels",
      price: "$25",
      period: "per class",
      features: [
        "Various class types",
        "Expert instruction",
        "Community support",
        "Flexible scheduling"
      ]
    },
    {
      title: "Nutrition Planning",
      description: "Customized meal plans and nutritional guidance",
      price: "$90",
      period: "per month",
      features: [
        "Personalized meal plans",
        "Nutritional education",
        "Recipe suggestions",
        "Regular check-ins"
      ]
    }
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services & Products</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your life with our comprehensive wellness solutions. Each service is designed to help you achieve your health and fitness goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-muted-foreground">/{product.period}</span>
              </div>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Not sure which service is right for you?</h2>
        <p className="text-muted-foreground mb-8">
          Schedule a free consultation with our wellness experts to find the perfect solution for your needs.
        </p>
        <Button size="lg" variant="secondary">
          Book a Consultation
        </Button>
      </div>
    </main>
  )
}