"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can sign up using your email address or through Google or LinkedIn authentication.",
        },
        {
          question: "How do I set up my profile?",
          answer:
            "After creating an account, you'll be guided through the profile setup process. You can add your work experience, education, skills, and upload your resume. The more complete your profile, the better job matches you'll receive.",
        },
        {
          question: "Is JobMatch Pro free to use?",
          answer:
            "JobMatch Pro offers both free and premium plans. The free plan includes basic job matching and application tracking features. Premium plans offer advanced features like skills gap analysis, priority support, and unlimited profile versions.",
        },
      ],
    },
    {
      title: "Job Matching",
      questions: [
        {
          question: "How does the job matching algorithm work?",
          answer:
            "Our job matching algorithm analyzes your skills, experience, education, and preferences against job requirements. It uses machine learning to identify the best matches and provides a percentage score indicating how well your profile matches each job.",
        },
        {
          question: "Why am I not seeing any job matches?",
          answer:
            "If you're not seeing job matches, ensure your profile is complete with relevant skills and experience. Also check your job preferences (location, salary, job type) to make sure they're not too restrictive.",
        },
        {
          question: "How can I improve my match scores?",
          answer:
            "To improve match scores, follow the profile improvement suggestions provided in the Job Matching section. These suggestions are personalized based on the gaps between your profile and the jobs you're interested in.",
        },
      ],
    },
    {
      title: "Application Tracking",
      questions: [
        {
          question: "How do I add a new job application?",
          answer:
            "To add a new application, go to the Application Tracking page and click the 'Add Application' button. Fill in the job details, company information, and application status. You can also set reminders for follow-ups.",
        },
        {
          question: "Can I import my existing applications?",
          answer:
            "Yes, you can import applications from CSV files or connect your email account to automatically detect and import job applications. Go to Settings > Import Data to access these options.",
        },
        {
          question: "How do I schedule interview reminders?",
          answer:
            "When adding or editing an application, you can add events like interviews in the Events section. Set the date, time, and event type, and enable reminders to receive notifications via email or in-app alerts.",
        },
      ],
    },
    {
      title: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade to a premium plan?",
          answer:
            "To upgrade, go to Settings > Subscription and select the premium plan that best fits your needs. You can pay monthly or annually using credit card, PayPal, or other supported payment methods.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your premium subscription at any time. Go to Settings > Subscription > Cancel Subscription. You'll continue to have access to premium features until the end of your billing period.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to Settings > Account > Delete Account. Please note that this action is permanent and will delete all your data, including profile information and application history.",
        },
      ],
    },
  ]

  const filteredFAQs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  return (
    <div className="space-y-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about JobMatch Pro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              <Button variant="link" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFAQs.map((category, index) => (
                <div key={index}>
                  <h3 className="font-medium text-lg mb-3">{category.title}</h3>
                  <Accordion type="single" collapsible className="border rounded-md">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                        <AccordionTrigger className="px-4 hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Need more help? Contact our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Browse Help Center</p>
                  <p className="text-xs text-muted-foreground">Search our knowledge base</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email Support</p>
                  <p className="text-xs text-muted-foreground">support@jobmatchpro.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Live Chat</p>
                  <p className="text-xs text-muted-foreground">Available 24/7</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
            <CardDescription>Most frequently viewed help articles</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-primary justify-start">
                  How to optimize your profile for better matches
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary justify-start">
                  Understanding the job matching algorithm
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary justify-start">
                  Tips for tracking applications effectively
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary justify-start">
                  How to prepare for technical interviews
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary justify-start">
                  Troubleshooting common account issues
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting Wizard</CardTitle>
            <CardDescription>Solve common issues step by step</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Profile not updating
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Job matches not showing
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Application tracking issues
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Account login problems
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Billing and subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

