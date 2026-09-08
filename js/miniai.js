/**
 * Odin Assistant — client-side AI demo for Stephane Dube's portfolio.
 * Fast, dependency-free, keyword-routed answers about Stephane, his work,
 * certifications, and how to hire him. In a production version this would
 * call a backend LLM API; here it runs entirely in the browser.
 */

class OdinAgent {
  constructor() {
    this.name = "Odin";
    this.version = "2.0.0";
    this.knowledgeBase = {};
    this.interactionHistory = [];
    this.isInitialized = false;

    this.processQuery = this.processQuery.bind(this);
  }

  async initialize() {
    if (this.isInitialized) return;
    try {
      await this.loadKnowledgeBase();
      this.isInitialized = true;
      console.log(`${this.name} v${this.version} initialized`);
    } catch (error) {
      console.error(`Failed to initialize ${this.name}:`, error);
      this.isInitialized = true;
    }
  }

  async loadKnowledgeBase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.knowledgeBase = {
          person: {
            name: "Stephane Dube",
            role: "AI Engineer & Full-Stack Developer",
            tagline: "AI Engineer • Full-Stack Developer • Automation",
            nationality: "Canadian",
            location: "Thailand (Southeast Asia)",
            remote: true,
            languages: ["English (fluent)", "French (fluent)"],
            experience: "10+ years building software and automating workflows",
            focus: "AI agents, LLM fine-tuning (SFT/RLHF), web applications, and automation",
            work: "AI Agent Operator at Invisible Technologies (San Francisco, remote).",
            workDetail: "Creates instruction-aligned training data (SFT), ranks/preferences model outputs (RLHF), and evaluates LLM responses to strict specs — with a 100% accuracy record on time-sensitive workflows.",
            skills: {
              ai: "SFT, RLHF, prompt engineering, AI agent orchestration, local LLM deployment (Ollama, Open WebUI), Gemini agents & CLI",
              programming: "Python, JavaScript, PHP, SQL/MySQL, HTML5, CSS3, PineScript",
              tools: "Git/GitHub, Cloudflare Pages, n8n, WordPress, Bootstrap, Tailwind, Google Workspace AI, Docker/K8s (studying)",
              data: "Web scraping, API integration, data pipelines, analytics reporting (Google Analytics)"
            },
            projects: [
              { name: "Odin", desc: "A custom autonomous AI agent built from scratch in Python — multi-step reasoning, tool use, planning, and memory." },
              { name: "OdinForge", desc: "A collection of working apps built from scratch (Pomodoro, Tic Tac Toe, Abacus, Tetris, Notion-style app)." },
              { name: "MapleMind", desc: "A private local AI document intelligence platform for real estate and professional firms." },
              { name: "Agent Evidence", desc: "An AI agent safety & governance review service delivering structured risk reports with file:line evidence." }
            ],
            certificates: [
              "CS50 Introduction to AI — Harvard (2023)",
              "CS50 Programming with Python — Harvard (2022)",
              "Google IT Support Professional Certificate — Coursera (2026)",
              "Google IT Automation with Python Professional Certificate — Coursera (2026)",
              "Microsoft IT Support Specialist Professional Certificate — Microsoft (2026)",
              "IBM DevOps & Software Engineering — IBM/Coursera (all 9 courses complete)",
              "60+ Google skill badges (Gemini, LLMs, Generative AI, Responsible AI)"
            ],
            certSummary: "Harvard CS50 (AI + Python), Google IT Support, Google IT Automation with Python, Microsoft IT Support, and an IBM DevOps & Software Engineering certificate (all courses complete) — plus 60+ Google skill badges and 29 course-level certificates inside those programs.",
            googleBadges: {
              count: 60,
              platform: "Google Skills",
              focus: "Gemini across Workspace, Generative AI, LLMs, Responsible AI, and the SDLC",
              url: "https://www.skills.google/public_profiles/04a83f8f-3acf-40f5-9893-2fe1a235a5d3"
            },
            credly: "https://www.credly.com/users/stephanedube",
            contactEmail: "dubestephane@protonmail.com",
            links: {
              github: "https://github.com/Dubestephane1",
              linkedin: "https://www.linkedin.com/in/dubestephane/",
              credly: "https://www.credly.com/users/stephanedube"
            },
            resume: "Stephane_Dube.html",
            availability: "Open to new opportunities and collaborations — full-time, freelance, or contract, remote-first.",
            hiring: "For hiring, the fastest path is email: dubestephane@protonmail.com. His résumé is one click away (the Resume button in the menu), and all verified badges are on Credly."
          },
          interactionPatterns: {
            greeting: [
              "Hello! I'm Odin, Stephane's AI assistant. Ask me about his skills, experience, certifications, or how to hire him!",
              "Hi there! I can tell you about Stephane, his AI work, or his projects. What would you like to know?",
              "Hey! Stephane's assistant here. Try asking about his experience, certifications, or résumé."
            ],
            thanks: [
              "You're very welcome! Anything else you'd like to know?",
              "Happy to help! Ask me about his projects or certifications anytime.",
              "Anytime! Is there anything else I can tell you?"
            ],
            ok: [
              "Sounds good! Feel free to ask anything else.",
              "Got it! I'm here if you have more questions.",
              "Alright! Let me know if there's anything else."
            ],
            identity: [
              "I'm Odin, a lightweight AI assistant running in this page's JavaScript — a small demo of the agentic work Stephane does. Ask me about his skills, experience, certifications, or résumé!",
              "I'm Odin — Stephane's portfolio assistant. I answer questions about his background and work, entirely in the browser."
            ],
            farewell: [
              "Thanks for visiting! Feel free to reach out to Stephane anytime.",
              "Goodbye! Explore the portfolio and don't hesitate to get in touch."
            ],
            help: [
              "I can tell you about Stephane — his skills, experience, certifications, projects, and how to hire him. Try: 'What are his skills?', 'Tell me about his certifications', or 'How can I hire him?'",
              "Ask me about Stephane's background, his IBM/Coursera certifications, projects, or contact details!"
            ]
          }
        };
        resolve();
      }, 80);
    });
  }

  /* ------------------------------------------------------------
     Query processing
     ------------------------------------------------------------ */
  async processQuery(query) {
    if (!this.isInitialized) await this.initialize();

    this.recordInteraction({ type: 'query', query, timestamp: Date.now() });

    const response = this.generateResponse(query);
    return response;
  }

  /** Intent routing — most specific intents are checked first. */
  generateResponse(query) {
    const q = query.toLowerCase().trim();

    // Simple conversation
    if (this.matchesAny(q, ['hello', 'hi', 'hey', 'greetings']) && this.isStandaloneGreeting(q)) {
      return this.getRandomResponse('greeting');
    }
    if (this.matchesAny(q, ['thanks', 'thank you', 'thx', 'appreciate'])) return this.getRandomResponse('thanks');
    if (this.matchesAny(q, ['ok', 'okay', 'great', 'nice', 'cool', 'awesome', 'got it'])) return this.getRandomResponse('ok');
    if (this.matchesAny(q, ['bye', 'goodbye', 'see you', 'farewell', 'later'])) return this.getRandomResponse('farewell');
    if (this.matchesAny(q, ['who are you', 'what are you', 'are you ai', 'are you a bot', 'your name', 'who is odin', 'about odin'])) {
      return this.getRandomResponse('identity');
    }

    // Who is Stephane
    if (this.matchesAny(q, ['who is stephane', 'who is he', 'about him', 'about stephane', 'tell me about stephane', 'about the developer', 'about the owner'])) {
      return this.describePerson();
    }

    // Résumé
    if (this.matchesAny(q, ['resume', 'resumé', 'cv', 'curriculum', 'download resume', 'printable'])) {
      return this.describeResume();
    }

    // Hiring / availability
    if (this.matchesAny(q, ['hire', 'hiring', 'rate', 'rates', 'cost', 'price', 'pricing', 'freelance', 'consult', 'consulting', 'contract', 'recruit', 'opportunit', 'available', 'open to work', 'work with him', 'work with stephane'])) {
      return this.describeHiring();
    }

    // Certifications (specific before experience/projects)
    if (this.matchesAny(q, ['certif', 'certificate', 'certification', 'credly', 'badge', 'harvard', 'cs50', 'ibm', 'coursera', 'google skills', 'training', 'education', 'studied', 'course'])) {
      return this.describeCertificates();
    }

    // Employer / company
    if (this.matchesAny(q, ['invisible', 'who does he work for', 'what company', 'company', 'employer', 'where does he work', 'current job', 'current role', 'what does he do for work'])) {
      return this.describeCompany();
    }

    // Experience
    if (this.matchesAny(q, ['experience', 'career', 'background', 'timeline', 'jobs', 'job', 'worked', 'work history', 'history'])) {
      return this.describeExperience();
    }

    // Skills
    if (this.matchesAny(q, ['skill', 'expertise', 'technolog', 'stack', 'languages', 'language', 'tools', 'knows', 'what does he know', 'capable'])) {
      return this.describeSkills();
    }

    // Projects
    if (this.matchesAny(q, ['project', 'portfolio', 'built', 'made', 'odinforge', 'maplemind', 'agent evidence', 'what has he built', 'work he has done'])) {
      return this.describeProjects();
    }

    // Odin the agent
    if (this.matchesAny(q, ['what is odin', 'odin agent', 'the agent', 'ai agent'])) {
      return this.describeProjects(); // Odin is project #1 — reuse with context
    }

    // Location / timezone
    if (this.matchesAny(q, ['location', 'where is he', 'where is stephane', 'based', 'live', 'lives', 'country', 'timezone', 'remote'])) {
      return this.describeLocation();
    }

    // Age
    if (this.matchesAny(q, ['age', 'how old'])) {
      return this.describeAge();
    }

    // Contact
    if (this.matchesAny(q, ['contact', 'email', 'reach', 'get in touch', 'message', 'talk to', 'connect', 'mail'])) {
      return this.provideContactInfo();
    }

    // Socials
    if (this.matchesAny(q, ['github', 'linkedin', 'twitter', 'social', 'x profile', 'x.com'])) {
      return this.describeSocials();
    }

    // Help
    if (this.matchesAny(q, ['help', 'assist', 'what can you do', 'capabilities'])) {
      return this.getRandomResponse('help');
    }

    return this.getDefaultResponse();
  }

  /* ------------------------------------------------------------
     Helpers
     ------------------------------------------------------------ */
  matchesAny(query, terms) {
    return terms.some(term => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`(^|[^a-z0-9])${escaped}(?=[^a-z0-9]|$)`, 'i').test(query);
    });
  }

  isStandaloneGreeting(query) {
    return query.length < 20 && !query.includes('?') &&
           !this.matchesAny(query, ['who', 'what', 'how', 'why', 'where', 'when', 'can', 'about', 'tell', 'your', 'do']);
  }

  getRandomResponse(category) {
    const responses = this.knowledgeBase.interactionPatterns[category] ||
                     ["I'm not sure how to respond to that."];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  recordInteraction(data) {
    this.interactionHistory.push({ ...data, sessionId: this.getSessionId() });
    if (this.interactionHistory.length > 500) {
      this.interactionHistory = this.interactionHistory.slice(-250);
    }
  }

  getSessionId() {
    let sessionId = localStorage.getItem('odin-session-id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem('odin-session-id', sessionId);
    }
    return sessionId;
  }

  /* ------------------------------------------------------------
     Describers
     ------------------------------------------------------------ */
  describePerson() {
    const p = this.knowledgeBase.person;
    return `${p.name} is a ${p.nationality.toLowerCase()} ${p.role.toLowerCase()} based in ${p.location}. ${p.work} He has ${p.experience}, and his focus is ${p.focus}. ${p.tagline}.`;
  }

  describeExperience() {
    const p = this.knowledgeBase.person;
    return `Here's ${p.name}'s career timeline:\n\n` +
      `• AI Agent Operator — Invisible Technologies (San Francisco, remote), May 2025–present\n` +
      `• AI Developer & Full-Stack Engineer — OdinForge (founder), Jan 2015–present\n` +
      `• Python & ESL Tutor — OMG Language Center (Thailand), Feb 2021–present\n` +
      `• Digital Marketing & Dive Instructor — Dolphin Divers (Thailand), 2018–2020\n` +
      `• Automobile Sales — Mercedes-Benz, Ford, Audi (Canada), 2004–2014 (top 10% performer)\n\n` +
      `The through-line: 20 years of client-facing work, now focused on AI agents and automation. ${p.workDetail}`;
  }

  describeCompany() {
    const p = this.knowledgeBase.person;
    return `${p.work} ${p.workDetail} He's evaluated and refined LLM responses against strict technical specifications for a leading AI provider.`;
  }

  describeSkills() {
    const s = this.knowledgeBase.person.skills;
    return `Stephane's core skills:\n\n` +
      `• AI & LLM: ${s.ai}\n` +
      `• Programming: ${s.programming}\n` +
      `• Tools & Platforms: ${s.tools}\n` +
      `• Automation & Data: ${s.data}\n\n` +
      `He works in ${this.knowledgeBase.person.languages.join(" and ")}.`;
  }

  describeCertificates() {
    const p = this.knowledgeBase.person;
    return `${p.name} holds:\n\n` +
      p.certificates.map(c => `• ${c}`).join('\n') +
      `\n\nAll verified badges are on Credly: ${p.credly}`;
  }

  describeProjects() {
    const p = this.knowledgeBase.person;
    let out = `Here's what ${p.name} has built:\n\n`;
    p.projects.forEach((pr, i) => {
      out += `${i + 1}. ${pr.name} — ${pr.desc}\n`;
    });
    out += `\nYou can browse his full app collection at https://odinforge.pages.dev`;
    return out;
  }

  describeResume() {
    const p = this.knowledgeBase.person;
    return `You can grab ${p.name}'s résumé right here on the site:\n\n` +
      `• ${p.resume} (open in a new tab)\n\n` +
      `Or reach him directly at ${p.contactEmail}`;
  }

  describeHiring() {
    const p = this.knowledgeBase.person;
    return `${p.hiring}`;
  }

  describeLocation() {
    const p = this.knowledgeBase.person;
    return `${p.name} is a ${p.nationality.toLowerCase()} ${p.role.toLowerCase()} based in ${p.location}. He works remotely and is comfortable across time zones.`;
  }

  describeAge() {
    return `${this.knowledgeBase.person.name} is an experienced developer bringing decades of practical, client-facing work to the field.`;
  }

  provideContactInfo() {
    const p = this.knowledgeBase.person;
    return `You can reach ${p.name} at:\n\n` +
      `Email: ${p.contactEmail}\n` +
      `LinkedIn: ${p.links.linkedin}\n` +
      `GitHub: ${p.links.github}\n` +
      `Credly: ${p.links.credly}\n\n` +
      `${p.availability}`;
  }

  describeSocials() {
    const p = this.knowledgeBase.person;
    return `Here are ${p.name}'s profiles:\n` +
      `• GitHub: ${p.links.github}\n` +
      `• LinkedIn: ${p.links.linkedin}\n` +
      `• Credly: ${p.links.credly}\n\n` +
      `Or email him at ${p.contactEmail}`;
  }

  getDefaultResponse() {
    return `I don't have a specific answer for that, but I can help with:\n\n` +
      `- Stephane's background, experience, and skills\n` +
      `- His certifications and Credly badges\n` +
      `- His projects and portfolio\n` +
      `- How to hire him or download his résumé\n\n` +
      `What would you like to know?`;
  }
}

// Boot the assistant
const odinAgent = new OdinAgent();
document.addEventListener('DOMContentLoaded', () => {
  odinAgent.initialize();
});

window.odinAgent = odinAgent;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = OdinAgent;
}