"use client";
import * as React from 'react';
import Image from 'next/image';

export function ConsultifyLanding() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px] py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/d0980da23f34d29f6a384ab68cbb861159393269?width=89"
              alt="Consultify Logo"
              width={44}
              height={36}
              className="w-11 h-9"
            />

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <div className="flex items-center gap-12">
                <div className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-mulish font-bold text-base">
                  Home
                </div>
                <div className="text-[#00276E] font-mulish font-light text-base">
                  Stats
                </div>
                <div className="text-[#00276E] font-mulish font-light text-base">
                  Features
                </div>
                <div className="text-[#00276E] font-mulish font-light text-base">
                  Why Choose Us
                </div>
                <div className="text-[#00276E] font-mulish font-light text-base">
                  Testimonials
                </div>
              </div>
            </nav>

            {/* Get Started Button */}
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded border border-[#6ECDC5] bg-gradient-to-r from-[#2064B7] to-[#08AFE6]">
              <span className="text-white font-mulish text-sm">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px]">
                Empowering Enterprises. Elevating Talent. Enabling Tomorrow.
              </h1>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {/* Success stories badge */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-white"></div>
                </div>
                <div className="text-[#00276E] font-mulish text-lg underline">
                  100+ Success Stories
                </div>
              </div>

              <p className="text-[#00276E] font-mulish font-light text-lg leading-[150%]">
                Get game-changing ERP consultants who deliver results from Day 1 - not just resumes
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border border-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6]">
                  <span className="text-white font-mulish text-sm">
                    Get Expert Consultants Now
                  </span>
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-[#2064B7] to-[#08AFE6]">
                  <span className="text-white font-mulish text-sm">
                    View Services
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/458c79167732d425c2e9ab7edfe043e482841314?width=2405"
              alt="Consultify Team"
              width={1202}
              height={666}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="text-center space-y-8">
            <h2 className="text-[#0A0505] font-mulish font-light text-lg">
              Trusted by the world's best companies
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {[
                "https://api.builder.io/api/v1/image/assets/TEMP/fbc91cbbd673b7a1500250aabe983c25b3202f94?width=244",
                "https://api.builder.io/api/v1/image/assets/TEMP/4d588a4e418c430d7e713739ee753d37b6cb5b07?width=398",
                "https://api.builder.io/api/v1/image/assets/TEMP/33c2340918178c0a95a972b66b9ff89a8a584592?width=247",
                "https://api.builder.io/api/v1/image/assets/TEMP/893c47247708bd69630096ad783220e3b8228608?width=247",
                "https://api.builder.io/api/v1/image/assets/TEMP/e84069b60450d92e32d463f27e20e6f7f0da666e?width=247",
                "https://api.builder.io/api/v1/image/assets/TEMP/1e34f1d85ff36d45eea38009e57bf12309608f2e?width=247",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="space-y-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-[#00276E] font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px]">
                  See Why The Top Enterprises Choose Us
                </h2>
              </div>
              <div>
                <p className="text-[#00276E] font-mulish text-base leading-[150%]">
                  We believe that credibility is earned by serving the best—and delivering exceptional results every time. Backed by data and client satisfaction, we utilise a thorough 2-level evaluation process, and maintain a global talent network.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "5K+", label: "Happy customers" },
                { number: "80%", label: "ATS job matching accuracy" },
                { number: "2 Level", label: "Execution process" },
                { number: "Global", label: "Talent network" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col gap-2 pl-6 border-l-[12px] border-l-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] [border-image:linear-gradient(316deg,#2064B7_10.93%,#08AFE6_87.31%)_1]">
                  <div className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-5xl lg:text-6xl xl:text-[72px] leading-[120%]">
                    {stat.number}
                  </div>
                  <div className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-lg lg:text-xl xl:text-[22px] leading-[140%] tracking-[-0.22px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP Services Section */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="space-y-20">
            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 space-y-6">
              <h2 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px]">
                ERP Core to Emerging Tech: We Power Your Entire Digital Transformation
              </h2>
              <p className="text-[#0A0505] font-mulish text-lg leading-[150%]">
                We deliver robust solutions for every stage of your digital journey—from foundational ERP to advanced emerging technologies.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Core ERP Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7143abb75e289cfe29a8c869654131254a6a2f7d?width=1203"
                  alt="Core ERP"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <h3 className="text-[#00276E] font-jost text-3xl lg:text-4xl leading-[130%] tracking-[-0.36px]">
                      Core ERP Expertise
                    </h3>
                    <p className="text-[#00276E] font-mulish text-base leading-[150%]">
                      We deliver proven expertise across leading platforms:{" "}
                      <span className="font-bold">SAP, Oracle, Microsoft Dynamics, Infor, and Salesforce.</span>{" "}
                      Our team ensures seamless integration, operational excellence, and scalable growth tailored to your enterprise's needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Innovation Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/48c3cad502b7cfb6433b66900b6de1c7e6c990c3?width=578"
                      alt="Innovation"
                      width={300}
                      height={200}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <div className="space-y-4">
                      <h3 className="text-[#00276E] font-jost text-2xl lg:text-3xl leading-[130%] tracking-[-0.36px]">
                        Innovation with Allied Services
                      </h3>
                      <p className="text-[#00276E] font-mulish text-base leading-[150%]">
                        Optimize your workflows with ServiceNow and unlock modern possibilities through{" "}
                        <span className="font-bold">AI and Machine Learning</span>. We bring the latest automation and intelligence to empower your business operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Frontiers Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <Image
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9d565946459ca4498409dbdd0791b9db6fb281a2?width=578"
                      alt="Tech Frontiers"
                      width={300}
                      height={200}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <div className="space-y-4">
                      <h3 className="text-[#00276E] font-jost text-2xl lg:text-3xl leading-[130%] tracking-[-0.36px]">
                        Expanding Into Tech Frontiers
                      </h3>
                      <p className="text-[#00276E] font-mulish text-base leading-[150%]">
                        Secure your business and embrace rapid development with services spanning{" "}
                        <span className="font-bold">Cybersecurity, Full Stack Development, Cloud, and DevOps.</span>{" "}
                        Future-proof your enterprise with our advanced technology solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/e2ed4cacc364faa5e802509d17d5fbfc0fd5f412?width=2886"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white font-jost text-3xl lg:text-4xl xl:text-[44px] leading-[130%] tracking-[-0.44px]">
                Join the Ranks of Industry Leaders Delivering Projects On Time.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white font-mulish font-light text-lg leading-[150%]">
                Our consultants are driving results for Fortune 500 teams—your success story could be next.
              </p>
              <button className="bg-white text-[#2064B7] font-mulish text-sm px-6 py-2.5 rounded">
                Schedule Your Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="space-y-16">
            <h2 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px] max-w-3xl">
              The Challenge: Finding ERP Experts When Every Project is Critical
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Tabs */}
              <div className="space-y-6">
                {[
                  "You're spending weeks screening candidates who look good on paper but can't deliver",
                  "Critical ERP implementations are stalling while you search for the right expertise",
                  "Your team is overwhelmed managing both the project and the recruitment process",
                ].map((text, index) => (
                  <div key={index} className="bg-[#F7F8FA] border-l-[12px] border-l-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] [border-image:linear-gradient(316deg,#2064B7_10.93%,#08AFE6_87.31%)_1] p-6">
                    <p className="text-[#1F2225] font-jost text-xl lg:text-[22px] leading-[140%] tracking-[-0.22px]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Tab Image */}
              <div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2d606a09c3bcd5d2ba0ed400135d9cc4ebd93301?width=1103"
                  alt="ERP Challenge"
                  width={552}
                  height={503}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultify Difference Section */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="space-y-16">
            <h2 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px] max-w-3xl">
              The Consultify Difference: Strategic Talent Curation, Not Just Staffing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/6c34f39ca043b19b834be716c39b80cfa5e508b7?width=735",
                  title: "Strategic Talent Curation",
                  description: "80% ATS Job Matching Accuracy 2-Level Psychometric + Technical Evaluation AI-Generated Scorecard for quick decisions"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/a0d8d877f2e8fc22537f0b3f19b52920b6e22de8?width=735",
                  title: "Impact-Focused Consultants",
                  description: "Pre-qualified experts Project partners, not freelancers-for-hire Deal-makers in crisis projects"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/e7fef9df662923d48c77bd43f8e7fdde5354f6e7?width=735",
                  title: "Domain-Specialized Recruiters",
                  description: "Technical understanding of ERP modules Industry-trained recruitment specialists Strategic function, not just sales"
                }
              ].map((item, index) => (
                <div key={index} className="space-y-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <div className="space-y-6">
                    <h3 className="text-[#00276E] font-jost text-3xl lg:text-4xl leading-[130%] tracking-[-0.36px]">
                      {item.title}
                    </h3>
                    <p className="text-[#00276E] font-mulish text-base leading-[150%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/fcea6a1b4f5e9e625337d681accfa9e5413414dc?width=2886"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white font-jost text-3xl lg:text-4xl xl:text-[44px] leading-[130%] tracking-[-0.44px]">
                We are the Consultants Who Partner & Not Just Participate
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white font-mulish font-light text-lg leading-[150%]">
                Experience the difference that committed, impact-focused consultants make for your teams and timelines
              </p>
              <button className="bg-white text-[#2064B7] font-mulish text-sm px-6 py-2.5 rounded">
                Schedule Your Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px]">
                  Your Path to Expert ERP Talent in 3 Simple Steps
                </h2>
                <p className="text-[#00276E] font-mulish text-base leading-[150%] max-w-xl">
                  Our transparent, client-focused approach is designed to simplify and accelerate the journey from talent search to project success. We combine human insight with advanced technology to ensure you get the right experts quickly and confidently.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#2064B7] to-[#08AFE6] text-white font-mulish text-sm px-6 py-2.5 rounded border border-transparent">
                  Get Expert Consultants Now
                </button>
                <button className="bg-[#6ECDC5] text-[#00276E] font-mulish text-sm px-6 py-2.5 rounded">
                  View Services
                </button>
              </div>
            </div>

            {/* Right Process Steps */}
            <div className="space-y-16">
              {[
                {
                  title: "Discovery Call",
                  description: "We begin with a detailed conversation to fully understand your project goals, technical requirements, and organizational context. This ensures we capture the nuances that matter most for delivering the perfect ERP consultant match.",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/ea46d707d8244569ce413b0206b8de151d1175b9?width=916"
                },
                {
                  title: "Expert Matching",
                  description: "Using advanced AI algorithms combined with our proprietary evaluation framework, we identify a shortlist of highly qualified consultants who meet your specific job criteria and culture fit. This dramatically reduces time-to-hire while maximizing alignment with your needs.",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/8491876ba1b3d89a8d8e819eb2140c781f8c1dad?width=916"
                },
                {
                  title: "Project Success",
                  description: "Once matched, consultants are ready to contribute from day one, equipped with the expertise and mindset to accelerate your project outcomes. We continue to support you throughout the engagement to ensure measurable, lasting results.",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/891cf4f35f137ab39802ce150be597cb019876e5?width=916"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6ECDC5] to-[#08AFE6] flex-shrink-0"></div>
                    {index < 2 && <div className="w-px h-24 bg-gradient-to-r from-[#2064B7] to-[#08AFE6] mt-2"></div>}
                  </div>
                  <div className="space-y-6 pb-8">
                    <div className="space-y-4">
                      <h3 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-3xl lg:text-4xl leading-[130%] tracking-[-0.36px]">
                        {step.title}
                      </h3>
                      <p className="text-[#00276E] font-mulish text-lg leading-[150%]">
                        {step.description}
                      </p>
                    </div>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-4xl lg:text-5xl xl:text-[52px] leading-[120%] tracking-[-0.52px]">
                  Why Clients Choose Consultify Solutions
                </h2>
              </div>
              <div>
                <p className="text-[#00276E] font-mulish text-lg leading-[150%]">
                  Unlike traditional staffing firms, we don't just scan and forward resumes. We engineer talent matching. Every consultant is thoroughly vetted before they ever reach your inbox:
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white"></div>

            {/* Timeline Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "We ensure project success, not just position filling",
                "We deliver the specialists, not just resources",
                "We solve, consult & enable not just recruit",
                "We build ecosystems, not push volume"
              ].map((text, index) => (
                <div key={index} className="space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2064B7] to-[#08AFE6] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 className="text-[#00276E] font-mulish font-bold text-lg leading-[150%]">
                    {text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="text-center space-y-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.88838 1.08109C10.2321 0.264635 11.4029 0.264636 11.7466 1.0811L13.7754 5.89998C13.9204 6.24418 14.2481 6.47936 14.6242 6.50915L19.8902 6.92623C20.7824 6.99689 21.1442 8.09688 20.4644 8.67215L16.4523 12.0674C16.1657 12.31 16.0405 12.6905 16.1281 13.0531L17.3538 18.1298C17.5615 18.9899 16.6144 19.6698 15.8505 19.2089L11.342 16.4883C11.02 16.294 10.615 16.294 10.293 16.4883L5.78449 19.2089C5.02062 19.6698 4.07346 18.9899 4.28114 18.1298L5.50693 13.0531C5.59448 12.6905 5.46933 12.31 5.18276 12.0674L1.17057 8.67215C0.490787 8.09688 0.852573 6.99689 1.7448 6.92623L7.01086 6.50915C7.387 6.47936 7.71466 6.24418 7.85957 5.89998L9.88838 1.08109Z" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="0.817505" y1="0.46875" x2="9.93426" y2="19.7747" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6ECDC5" />
                        <stop offset="1" stopColor="#08AFE6" />
                      </linearGradient>
                    </defs>
                  </svg>
                ))}
              </div>

              <blockquote className="text-transparent bg-gradient-to-r from-[#2064B7] to-[#08AFE6] bg-clip-text font-jost text-3xl lg:text-4xl leading-[130%] tracking-[-0.36px]">
                "Their consultants aren't just skilled—they're proactive partners who own outcomes. Our migration went smoother than expected."
              </blockquote>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                <div className="text-center lg:text-left">
                  <div className="text-[#00276E] font-mulish font-semibold text-base">
                    Alexander Nolan
                  </div>
                  <div className="text-[#00276E] font-mulish text-base">
                    Senior Director, Sales
                  </div>
                </div>
                <div className="hidden lg:block w-px h-16 bg-gradient-to-r from-[#2064B7] to-[#08AFE6]"></div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01d31ecfa9e12362be2869a1c4b8b69ec15915ac?width=247"
                  alt="Company Logo"
                  width={124}
                  height={38}
                  className="w-31 h-auto"
                />
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0A0505]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0A0505] opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-[#0A0505] opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-[#0A0505] opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-[#0A0505] opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/01fff65afaacf351ef40f2d60ba02889d0da0c3f?width=4484"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ae1bdcc9870632140179ed9b9015238ae5ebb00c?width=89"
                  alt="Consultify Logo"
                  width={44}
                  height={36}
                  className="w-11 h-9"
                />
                <div className="space-y-6">
                  <h2 className="text-white font-jost text-4xl lg:text-5xl xl:text-[72px] leading-[120%]">
                    Trusted by Industry Leaders, Chosen by Innovators
                  </h2>
                  <p className="text-white font-mulish text-base leading-[150%] max-w-lg">
                    Consultify connects you with proven ERP talent for immediate value and impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-white text-white font-mulish font-bold text-base px-6 py-2.5 rounded">
                  Get Expert Consultants Now
                </button>
                <button className="bg-white text-[#00276E] font-mulish font-extrabold text-sm px-6 py-2.5 rounded">
                  View Services
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col justify-between h-full max-w-sm">
              <div className="space-y-2">
                {['Home', 'Stats', 'Features', 'Why Choose Us', 'Testimonials'].map((link) => (
                  <div key={link} className="py-2">
                    <div className="text-white font-mulish font-medium text-lg">
                      {link}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                <div className="w-6 h-6 bg-white rounded"></div>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[119px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="text-[#CDEEEB] font-mulish text-sm">
              © 2024 Relume. All rights reserved.
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="text-[#CDEEEB] font-mulish text-sm underline">
                Privacy Policy
              </div>
              <div className="text-[#CDEEEB] font-mulish text-sm underline">
                Terms of Service
              </div>
              <div className="text-[#CDEEEB] font-mulish text-sm underline">
                Cookies Settings
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
