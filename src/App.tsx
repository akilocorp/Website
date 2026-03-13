import { useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  GitBranch, 
  Scale, 
  Database, 
  TrendingDown, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  ShoppingCart,
  FileText,
  Users,
  Clock,
  ArrowRight,
  Mail,
  ExternalLink
} from 'lucide-react';
import './App.css';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-navy text-lg">MyUPlan</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#problem" className="text-gray-600 hover:text-navy transition-colors text-sm font-medium">The Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-navy transition-colors text-sm font-medium">The Solution</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-navy transition-colors text-sm font-medium">How It Works</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-sm font-medium rounded-full mb-6">
              The Future of Academic Planning
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Focus on learning,<br />
              <span className="text-gold">not logistics</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your AI reasoning partner that transforms university course planning from a 
              stressful maze into a clear four-year roadmap. We handle the complexity so 
              you can focus on what matters most — your education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1-rHJ-59nVRLWZT61dmnaRlVxH3CiFRCX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Watch Demo
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Stats */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-16 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">8.74/10</div>
                <div className="text-gray-500 text-sm">Student Recommendation Score</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">89.3%</div>
                <div className="text-gray-500 text-sm">Highly Likely to Adopt</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">83%</div>
                <div className="text-gray-500 text-sm">Demand Visual Roadmap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 lg:py-28 bg-gray-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Course Planning is Broken
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Students today face a nightmare of manual planning with fifteen browser tabs, 
              messy spreadsheets, and the constant risk of taking useless filler courses that damage their CGA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Problem Card 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-5">
                <GitBranch className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Complex Prerequisite Chains</h3>
              <p className="text-gray-600 leading-relaxed">
                Navigating intricate course dependencies is overwhelming. Students often miss 
                hidden prerequisites, forcing them into extra semesters or filler courses.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5">
                <Scale className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Unbalanced Semesters</h3>
              <p className="text-gray-600 leading-relaxed">
                Without proper guidance, students easily create schedules with too many hard 
                classes in one term, leading to burnout and lower grades.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-5">
                <Database className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Scattered Crucial Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Important information like waitlist history, grade distributions, and peer 
                reviews are fragmented across multiple portals and hard to find.
              </p>
            </div>

            {/* Problem Card 4 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5">
                <TrendingDown className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Student Burnout & Lower CGAs</h3>
              <p className="text-gray-600 leading-relaxed">
                The result: students get burned out, graduate late, and have lower grades 
                — all because of poor planning tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Everything You Need, In One Place
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our agentic AI acts as your personal academic advisor, understanding graduation 
              rules, checking prerequisites, and analyzing real-time data to build your perfect plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-white rounded-xl p-6 border-l-4 border-navy shadow-sm hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Visual Study Plans</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Long-term, 4-year drag-and-drop curriculum roadmaps that track every graduation requirement.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 bg-white rounded-xl p-6 border-l-4 border-gold shadow-sm hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Dynamic Scheduling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automatically generates weekly timetables based on real-time course availability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white rounded-xl p-6 border-l-4 border-navy shadow-sm hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Intelligent Conflict Resolution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proactively proposes smart replacement courses if a desired class has time conflicts or full waitlists.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-250 bg-white rounded-xl p-6 border-l-4 border-gold shadow-sm hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Data Dashboard</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instant access to AI-summarized peer reviews, waitlist chances, and grading statistics.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white rounded-xl p-6 border-l-4 border-navy shadow-sm hover:shadow-lg transition-all sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Auto-Cart Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                One-click seamless enrollment. Your optimized schedule is validated and pushed directly 
                to your university shopping cart — no more manual entry, no more errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              From Transcript to Timetable in 3 Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Say goodbye to the manual nightmare. From a five-minute chat to one-click enrollment, 
              we handle everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 relative">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <FileText className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Sync</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI securely reads your transcript and major requirements, understanding exactly 
                  where you stand and what you need to graduate.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-gold" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 relative">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <MessageSquare className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Converse</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chat naturally with the AI about your preferences — "light fall semesters, 
                  no 9 AM lectures, balanced workload." It understands and remembers.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-gold" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <ShoppingCart className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Execute</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI adapts a balanced schedule and the best plan, then pushes it directly 
                  to your SIS shopping cart with one click. You're enrolled.
                </p>
              </div>
            </div>
          </div>

          {/* User Journey Summary */}
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 mt-16 bg-navy rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The 10-Minute Transformation</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Meet Alex, a Year 2 Computer Science student. Previously, he battled 15+ open tabs 
                  and messy spreadsheets. A single prerequisite error once forced him into a filler 
                  course he hated — wasting tuition and risking his GPA.
                </p>
                <p className="text-white/80 leading-relaxed">
                  With MyUPlan, Alex now completes his semester planning in a 10-minute chat. 
                  The AI locks in a conflict-free 4-year roadmap, and every semester his optimized 
                  schedule is validated and ready with one click.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-5">
                  <Clock className="w-6 h-6 text-gold mb-3" />
                  <div className="text-2xl font-bold mb-1">10 min</div>
                  <div className="text-white/60 text-sm">Planning time</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <CheckCircle2 className="w-6 h-6 text-gold mb-3" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-white/60 text-sm">Conflict-free</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <Calendar className="w-6 h-6 text-gold mb-3" />
                  <div className="text-2xl font-bold mb-1">4 years</div>
                  <div className="text-white/60 text-sm">Visual roadmap</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <ShoppingCart className="w-6 h-6 text-gold mb-3" />
                  <div className="text-2xl font-bold mb-1">1 click</div>
                  <div className="text-white/60 text-sm">Enrollment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white text-lg">MyUPlan</span>
              </div>
              <p className="text-white/70 leading-relaxed max-w-md mb-6">
                Empowering students to focus on learning, not logistics. 
                The future of academic planning is here.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gold text-sm font-medium">Validated by HKUST Students</span>
                <span className="text-white/30">|</span>
                <span className="text-white/70 text-sm">8.74/10 Rating</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:iarnous@connect.ust.hk" className="hover:text-gold transition-colors">
                    iarnous@connect.ust.hk
                  </a>
                </div>
              </div>
            </div>

            {/* Team */}
            <div>
              <h4 className="text-white font-semibold mb-4">The Team</h4>
              <div className="space-y-3">
                <div className="text-white/70 text-sm">
                  <div className="text-white font-medium">Arnous Imrane</div>
                  <div>BEng Chemical Engineering</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2025 MyUPlan. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Built with ❤️ at HKUST
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
