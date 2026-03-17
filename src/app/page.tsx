"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, CheckCircle, Handshake, HelpCircle, Home, Phone, Shield, Star, Users, Wrench } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Mission Hills Roofing"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "Why Us", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Call Now", href: "tel:(818)405-0292" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Trusted Roofing Experts in Mission Hills, CA"
          description="Professional roof repair, installation, and maintenance for Mission Hills homeowners. 4.8★ rated with 20+ years of local expertise. Free estimates, insurance work accepted."
          tag="Local Roofing Contractor"
          tagIcon={Home}
          tagAnimation="slide-up"
          background={{ variant: "gradient-bars" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-grey-concrete-building-front-building-with-glass-facade_181624-6795.jpg?_wi=1",              imageAlt: "Professional roofers installing new roof on residential home"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beautiful-wooden-house-with-new-roof_23-2149343703.jpg",              imageAlt: "Mission Hills homeowner satisfied with completed roof repair"
            }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="4.8★ - 67 verified reviews"
          buttons={[
            { text: "Call Now: (818) 405-0292", href: "tel:(818)405-0292" },
            { text: "Request Free Estimate", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Why Mission Hills Homeowners Trust Us"
          metrics={[
            { icon: Award, label: "Years Experience", value: "20+" },
            { icon: Users, label: "Happy Customers", value: "1,200+" },
            { icon: CheckCircle, label: "Projects Completed", value: "3,500+" },
            { icon: Shield, label: "Insurance Certified", value: "Yes" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive roofing solutions for Mission Hills homes. From emergency repairs to complete installations, we handle it all with precision and care."
          tag="Professional Services"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            {
              id: "repair",              title: "Roof Repair",              description: "Quick response to leaks, damaged shingles, and storm damage. We inspect, assess, and repair with expert precision.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wearing-protection-helmet_23-2149343634.jpg?_wi=1",              imageAlt: "Professional roof repair on residential home"
            },
            {
              id: "skylight",              title: "Skylight Repair & Installation",              description: "Beautiful natural light for your home. Expert installation, replacement, and leak repair for all skylight types.",              imageSrc: "http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821288.jpg",              imageAlt: "Modern skylight installation in residential home"
            },
            {
              id: "metal",              title: "Metal Roof Installation",              description: "Durable, long-lasting metal roofing with superior weather protection. Perfect for Mission Hills homes.",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-modern-house-roof-clouds_23-2149343646.jpg",              imageAlt: "Professional metal roof installation"
            },
            {
              id: "gutter",              title: "Gutter Installation",              description: "Proper drainage prevents costly water damage. We install, repair, and maintain gutters for complete protection.",              imageSrc: "http://img.b2bpic.net/free-photo/learning-map_1098-14838.jpg",              imageAlt: "Quality gutter installation on residential home"
            },
            {
              id: "insurance",              title: "Insurance Roofing Work",              description: "Direct insurance billing available. We handle the paperwork and work with your insurance for damage claims.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wearing-protection-helmet_23-2149343634.jpg?_wi=2",              imageAlt: "Insurance approved roofing repair"
            },
            {
              id: "maintenance",              title: "Roof Maintenance",              description: "Regular inspection and maintenance extend roof life. Preventive care saves money and prevents emergencies.",              imageSrc: "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-grey-concrete-building-front-building-with-glass-facade_181624-6795.jpg?_wi=2",              imageAlt: "Professional roof maintenance and inspection"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Get Free Inspection", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Customer Testimonials"
          description="Hear what Mission Hills homeowners say about our roofing services. Real reviews from satisfied customers."
          tag="Verified Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Terrene Prince ",              handle: "Mission Hills Homeowner",              testimonial: "Mission Hills Roofing fixed our leak within 48 hours. Professional, courteous, and fair pricing. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-as-real-estate-agent_23-2151064992.jpg",              imageAlt: "Terrene Prince "
            },
            {
              id: "2",              name: "Duane McCarthy",              handle: "Local Business Owner",              testimonial: "Replaced entire roof in 3 days. Clean work site, attention to detail, and warranty on all work. Best roofer in the area.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-senior-woman-showing-thumbs-up_1262-5331.jpg",              imageAlt: "Duane McCarthy"
            },
            {
              id: "4",              name: "Valerie Moreno ",              handle: "Homeowner",              testimonial: "Storm damaged our roof and these guys got us back in shape fast. Honest, reliable, and they stand behind their work.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-pretty-young-lady-waving-hand-you-park_1262-20562.jpg",              imageAlt: "Valerie Moreno "
            },
            {
              id: "5",              name: "Zoey Short",              handle: "Long-time Customer",              testimonial: "Used them for roof repair, gutter installation, and skylight replacement. Consistently excellent service every time.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-satisfied-bearded-guy-white-shirt-showing-thumbs-up-approval-like-agree-positive-answer_1258-26715.jpg",              imageAlt: "Zoey Short"
            },
            {
              id: "6",              name: "Jane Oneil ",              handle: "Mission Hills Homeowner",              testimonial: "Called for emergency leak during rain. Arrived quickly, fixed it permanently, and prevented water damage. Lifesavers!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/professional-woman-standing-with-coffee-busy-street-smiling-camera_1258-123421.jpg",              imageAlt: "Jane Oneil "
            }
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "See All Reviews", href: "https://www.google.com/search?q=Mission+Hills+Roofing" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={[
            "GAF Certified",            "Insurance Approved",            "BBB A+ Rated",            "Local Chamber Member",            "Manufacturer Certified",            "Warranty Backed",            "Eco-Friendly Certified"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/vintage-new-year-2019-badge-collection_23-2147998150.jpg",            "http://img.b2bpic.net/free-vector/usa-labor-day-badge-collection-with-flat-design_23-2147861257.jpg",            "http://img.b2bpic.net/free-vector/home-health-care-logo-design-template_23-2150877423.jpg",            "http://img.b2bpic.net/free-vector/4th-july-badge-collection_23-2148167675.jpg",            "http://img.b2bpic.net/free-vector/hexagonal-quality-labels_460-23.jpg",            "http://img.b2bpic.net/free-vector/labor-day-labels-collection-flat-style_23-2147864783.jpg",            "http://img.b2bpic.net/free-vector/great-collection-hand-drawn-labour-day-labels_23-2147617014.jpg"
          ]}
          title="Trusted By"
          description="Mission Hills Roofing is certified, insured, and trusted by leading industry partners."
          tag="Industry Partnerships"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about roofing repair, installation, warranties, and insurance."
          tag="Quick Answers"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How quickly can you respond to roof emergencies?",              content: "We offer same-day response for emergency roof repairs, including leaks and storm damage. Call (818) 405-0292 anytime and we'll prioritize your situation."
            },
            {
              id: "2",              title: "Do you work with insurance companies?",              content: "Yes! We handle insurance claims directly. We'll coordinate with your insurance company, provide estimates, and manage the entire process. Most customers pay little to nothing out of pocket."
            },
            {
              id: "3",              title: "How long does a roof repair or installation take?",              content: "Simple repairs can be completed in hours. Full roof installations typically take 2-4 days depending on size and complexity. We'll provide a timeline during your free estimate."
            },
            {
              id: "4",              title: "What warranty do you offer?",              content: "We guarantee workmanship for 10 years and materials for 20+ years depending on the product. All warranties are transferable if you sell your home."
            },
            {
              id: "5",              title: "What's the average cost of roof repair?",              content: "Roof repairs range from $300-$2,000 depending on damage. We provide free estimates so you know the cost before we start work. Many are covered by insurance."
            },
            {
              id: "6",              title: "Are you licensed and insured?",              content: "Absolutely. We're fully licensed, insured, and bonded. All team members are background checked and properly trained for safety and quality work."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Started"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Ready to Protect Your Home?"
          description="Get a free roof inspection and estimate from Mission Hills Roofing. Same-day scheduling available."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Call Now: (818) 405-0292", href: "tel:(818)405-0292" },
            { text: "Schedule Free Estimate", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Roof Repair", href: "#services" },
                { label: "Roof Installation", href: "#services" },
                { label: "Skylight Repair", href: "#services" },
                { label: "Gutter Installation", href: "#services" },
                { label: "Insurance Work", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: (818) 405-0292", href: "tel:(818)405-0292" },
                { label: "Email: info@mhroof.com", href: "mailto:info@mhroof.com" },
                { label: "10117 Sepulveda Blvd Unit 201", href: "#" },
                { label: "Mission Hills, CA 91345", href: "#" },
                { label: "Available 24/7 for Emergencies", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Google Reviews", href: "https://www.google.com/search?q=Mission+Hills+Roofing" },
                { label: "Yelp", href: "#" },
                { label: "BBB", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Mission Hills Roofing. All rights reserved. Licensed • Insured • Bonded"
        />
      </div>
    </ThemeProvider>
  );
}