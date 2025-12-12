import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqData = [
    {
      category: "BNPL",
      questions: [
        {
          question: "What is Buy Now Pay Later (BNPL)?",
          answer: "BNPL allows you to purchase items immediately and pay for them in easy installments over time. You can split your payment into 3-12 monthly installments with competitive interest rates."
        },
        {
          question: "How quickly can I get BNPL approval?",
          answer: "Our AI-powered system provides instant pre-approval within 2 minutes. Final approval is typically completed within the same day after document verification."
        },
        {
          question: "What is the maximum BNPL limit I can get?",
          answer: "Based on your creditworthiness and income, you can get a BNPL limit of up to ₹5 lakhs. The limit is determined through our automated assessment process."
        }
      ]
    },
    {
      category: "Vehicle Loans",
      questions: [
        {
          question: "What types of vehicles can I finance?",
          answer: "We finance cars, motorcycles, commercial vehicles, and electric vehicles. Both new and used vehicles are eligible for financing with competitive interest rates."
        },
        {
          question: "What documents are required for a vehicle loan?",
          answer: "Basic documents include PAN card, NID, income proof (salary slips/ITR), bank statements, and vehicle-related documents. Our digital process makes document submission quick and easy."
        },
        {
          question: "Can I prepay my vehicle loan without penalties?",
          answer: "Yes, we offer flexible prepayment options. You can make partial or full prepayments after completing 6 EMIs without any prepayment penalties."
        }
      ]
    },
    {
      category: "General",
      questions: [
        {
          question: "Is Batas Hire and Purchase RBI regulated?",
          answer: "Yes, Batas Hire and Purchase is a licensed Non-Banking Financial Company (NBFC) regulated by the NRB. We maintain strict compliance with all regulatory requirements."
        },
        {
          question: "How is my personal data protected?",
          answer: "We use bank-grade encryption and security measures to protect your data. We are ISO 27001 certified and PCI DSS compliant, ensuring the highest standards of data security."
        },
        {
          question: "What if I face issues with my loan?",
          answer: "Our customer support team is available 24/7 to assist you. You can also use our grievance redressal mechanism for any complaints or concerns."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services. Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold text-sm">
                  {category.category.slice(0, 1)}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across categories
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <Card key={faqIndex} className="border-0 shadow-medium overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-card-elevated transition-colors"
                      >
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to assist you with any questions
              or concerns. Get in touch with us through your preferred channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Support
              </Button>
              <Button variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call 1800-123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;