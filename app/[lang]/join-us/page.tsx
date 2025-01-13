import { getDictionary } from '@/lib/dictionary'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Briefcase, Upload } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function JoinUs({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {dict.joinUs.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {dict.joinUs.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.joinUs.currentOpenings}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.joinUs.jobs.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Briefcase className="mr-2 h-4 w-4" /> {dict.joinUs.applyNow}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{dict.joinUs.uploadCV}</h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
            {dict.joinUs.uploadCVDescription}
          </p>
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>{dict.joinUs.uploadYourCV}</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">{dict.joinUs.name}</Label>
                      <Input id="name" placeholder={dict.joinUs.namePlaceholder} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">{dict.joinUs.email}</Label>
                      <Input id="email" placeholder={dict.joinUs.emailPlaceholder} type="email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="cv">{dict.joinUs.cv}</Label>
                      <Input id="cv" type="file" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> {dict.joinUs.submit}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join iGourd */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.joinUs.whyJoinUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.joinUs.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

