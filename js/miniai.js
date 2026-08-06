/**
 * Odin Mini-AI - Demonstrates Agentic Operation and Autonomous Learning Concepts
 * This is a simplified representation showing how AI principles could be integrated
 * In a real implementation, this would communicate with backend AI services
 */

class OdinAgent {
  constructor() {
    this.name = "Odin";
    this.version = "1.0.0";
    this.knowledgeBase = {};
    this.interactionHistory = [];
    this.isInitialized = false;

    // Bind methods
    this.processQuery = this.processQuery.bind(this);
    this.learnFromInteraction = this.learnFromInteraction.bind(this);
    this.getInsights = this.getInsights.bind(this);
  }

  /**
   * Initialize the agent with basic knowledge
   * Demonstrates: Autonomous Self-Learning
   */
  async initialize() {
    if (this.isInitialized) return;

    try {
      // Simulate loading knowledge base
      await this.loadKnowledgeBase();

      // Set up event listeners for learning opportunities
      this.setupLearningListeners();

      this.isInitialized = true;
      console.log(`${this.name} v${this.version} initialized - Ready for autonomous operation`);

      // Dispatch initialization event
      document.dispatchEvent(new CustomEvent('odin-agent-ready', {
        detail: { agent: this }
      }));
    } catch (error) {
      console.error(`Failed to initialize ${this.name}:`, error);
      // Self-Healing: Fallback to basic functionality
      this.isInitialized = true; // Still allow basic functions
    }
  }

  /**
   * Load foundational knowledge about Odin principles
   * Demonstrates: OKF Memories, Harsh Self-Criticism
   */
  async loadKnowledgeBase() {
    return new Promise((resolve) => {
      // Simulate async loading
      setTimeout(() => {
        this.knowledgeBase = {
          principles: [
            {
              id: 1,
              name: "Autonomous Self-Learning",
              description: "System improves itself through experience without explicit programming",
              demonstration: "This agent learns from user interactions to improve responses"
            },
            {
              id: 2,
              name: "Self-Healing",
              description: "System detects and recovers from errors automatically",
              demonstration: "Error boundaries and fallback mechanisms throughout the interface"
            },
            {
              id: 3,
              name: "Hardened Architecture",
              description: "Secure, resilient design with multiple layers of protection",
              demonstration: "Input validation, sanitization, and secure defaults"
            },
            {
              id: 4,
              name: "Ruthless Simplicity",
              description: "Elimination of unnecessary complexity",
              demonstration: "Minimal dependencies, clean code, obvious functionality"
            },
            {
              id: 5,
              name: "OKF Memories",
              description: "Structured knowledge preservation and sharing",
              demonstration: "Interaction history and learned patterns stored for future use"
            },
            {
              id: 6,
              name: "Harsh Self-Criticism",
              description: "Continuous self-evaluation and improvement",
              demonstration: "Performance monitoring and feedback loops"
            },
            {
              id: 7,
              name: "Full Agentic Operation",
              description: "System acts as an autonomous agent with goals and initiative",
              demonstration: "Proactive suggestions and autonomous task execution"
            },
            {
              id: 8,
              name: "Useful & Reusable",
              description: "Creates value that others can leverage and build upon",
              demonstration: "Clean, well-documented code that serves as a foundation"
            }
          ],
person: {
              name: "Stephane Dube",
              location: "South-East Asia",
              nationality: "Canadian",
              age: "in his fifties",
              role: "Developer & AI Agent Operator",
              title: "Developer • Python & AI Agent • Automation",
              focuses: ["Python", "web development", "AI agents", "automation", "LLM integration", "N8N"],
              work: "Working remotely as an AI Agent Operator at Invisible Technologies (San Francisco).",
              bio: "Stephane is a passionate Canadian developer and AI enthusiast based in South-East Asia, specializing in Python, web development, and integrating AI into practical applications. He creates clean, performant, and user-friendly experiences, from dynamic websites to AI-powered tools.",
              contactEmail: "dubestephane@protonmail.com",
              portfolio: "https://odinforge.pages.dev/",
              links: {
                github: "https://github.com/Dubestephane1",
                linkedin: "https://www.linkedin.com/in/dubestephane/",
                x: "https://x.com/StephanOdinDube"
              },
              socials: "GitHub, LinkedIn, and X (formerly Twitter)",
              skills: "Python, HTML, CSS, JavaScript, LLMs, Agentic workflows, N8N, AI, and GitHub. He can also install private AI systems remotely.",
              googleBadges: {
                count: 63,
                league: "Diamond League",
                points: 8975,
                memberSince: "2025",
                focus: "AI Boost Bites (Gemini across Workspace, Sheets, Gmail, Slides, NotebookLM, and Canvas), plus core courses on Generative AI, Large Language Models, Responsible AI, Image Generation, Encoder-Decoder Architecture, and Gemini for the SDLC."
              },
              certificates: "Harvard CS50 certificates in Artificial Intelligence with Python and Programming with Python, plus the Elements of AI from the University of Helsinki."
            },
            interactionPatterns: {
              greeting: [
                "Hello! I'm Odin, the AI assistant for Stephane Dube's portfolio. I can tell you about Stephane, his projects, skills, or how to get in touch!",
                "Hi there! I'm Odin, Stephane's AI agent. Ask me about his background, projects, or what he's working on.",
                "Welcome! I can help you learn about Stephane, his AI-focused work, or the projects on this site."
              ],
              farewell: [
                "Thanks for visiting! Feel free to reach out to Stephane anytime.",
                "Goodbye! Explore the rest of the portfolio and don't hesitate to get in touch.",
                "Until next time - stay curious and keep exploring!"
              ],
help: [
                "I can tell you about Stephane — his background, skills, projects, and experience. Ask me anything like 'who is Stephane?' or 'what can you do?'",
                "Ask me about Stephane's skills, his AI agent work, the CS50 certificates, or how to contact him.",
                "I'm here to help you learn more about Stephane and his work as an AI Agent developer."
              ],
              thanks: [
                "You're very welcome! Anything else you'd like to know?",
                "Happy to help! Feel free to ask about Stephane's projects, skills, or badges anytime.",
                "Anytime! Is there anything else I can help with?"
              ],
              welcome: [
                "You're welcome!",
                "Glad I could help!",
                "No problem at all!",
                "Happy to assist!"
              ],
              ok: [
                "Sounds good! Feel free to ask anything else.",
                "Got it! If you have more questions, I'm here.",
                "Alright! Let me know if there's anything else."
              ],
              intro: [
                "Tell me what you're curious about — Stephane's projects, skills, badges, certificates, or how to get in touch.",
                "Feel free to ask me anything about Stephane, such as his background, work, or contact details.",
                "Let's chat! Ask me about Stephane's experience, skills, or how to reach him."
              ],
              identity: [
                "I'm Odin, the AI agent for Stephane Dube's portfolio, built to answer questions about him and his work as an AI Agent developer.",
                "I'm Odin, an AI assistant ready to tell you about Stephane Dube and the projects he builds.",
                "I'm Odin — here to help you learn about Stephane, his skills, and his AI-focused work."
              ]
            }
        };
        resolve();
      }, 100); // Simulate network delay
    });
  }

  /**
   * Set up listeners for learning opportunities
   * Demonstrates: Agentic Operation, Autonomous Self-Learning
   */
  setupLearningListeners() {
    // Learn from user interactions
    document.addEventListener('click', (e) => {
      // Track interaction patterns for improvement
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        this.recordInteraction({
          type: 'click',
          element: e.target.tagName,
          className: e.target.className,
          timestamp: Date.now(),
          path: window.location.pathname
        });
      }
    });

    // Learn from form interactions
    document.addEventListener('input', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        this.recordInteraction({
          type: 'input',
          element: e.target.tagName,
          id: e.target.id,
          timestamp: Date.now()
        });
      }
    });

    // Listen for custom events that indicate learning opportunities
    document.addEventListener('odin-learn-from', (e) => {
      if (e.detail && e.detail.data) {
        this.learnFromInteraction(e.detail.data);
      }
    });
  }

  /**
   * Record an interaction for learning purposes
   * Demonstrates: OKF Memories
   */
  recordInteraction(data) {
    this.interactionHistory.push({
      ...data,
      sessionId: this.getSessionId()
    });

    // Limit history size to prevent unbounded growth (Ruthless Simplicity)
    if (this.interactionHistory.length > 1000) {
      this.interactionHistory = this.interactionHistory.slice(-500);
    }

    // Periodically consolidate learning (every 50 interactions)
    if (this.interactionHistory.length % 50 === 0) {
      this.consolidateLearning();
    }
  }

  /**
   * Learn from a specific interaction
   * Demonstrates: Autonomous Self-Learning, Harsh Self-Criticism
   */
  learnFromInteraction(interactionData) {
    // In a real implementation, this would update ML models or rules
    // For demonstration, we'll just log and potentially adjust behavior
    console.log(`[Odin Learning] Processing interaction:`, interactionData);

    // Based on interaction patterns, we could adjust:
    // - Response timing
    // - Suggestion relevance
    // - Interface adaptations
  }

  /**
   * Consolidate learned patterns into actionable insights
   * Demonstrates: Harsh Self-Criticism, Autonomous Self-Learning
   */
  consolidateLearning() {
    // Analyze interaction patterns for improvements
    const clicksByElement = {};

    this.interactionHistory
      .filter(i => i.type === 'click')
      .forEach(interaction => {
        const key = `${interaction.element}:${interaction.className || 'no-class'}`;
        if (!clicksByElement[key]) {
          clicksByElement[key] = 0;
        }
        clicksByElement[key]++;
      });

    // Identify frequently interacted elements for potential enhancement:
    // - Make commonly clicked elements more prominent
    // - Simplify frequently used interactions
    // - Improve confusing interfaces based on error patterns

    // For demo, just log insights
    console.log('[Odin Insight] Interaction analysis complete');
  }

  /**
   * Process a user query and generate a response
   * Demonstrates: Full Agentic Operation, Harsh Self-Criticism
   */
  async processQuery(query) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    // Record the query for learning
    this.recordInteraction({
      type: 'query',
      query: query,
      timestamp: Date.now()
    });

    // Generate response based on knowledge base
    const response = this.generateResponse(query);

    // Learn from this interaction:
    // - Was the response helpful? (would need feedback mechanism)
    // - How long did it take to generate?
    // - What was the complexity of the query?

    // Learn from the interaction
    this.learnFromInteraction({
      type: 'query-response',
      queryLength: query.length,
      responseLength: response.length,
      timestamp: Date.now()
    });

    return response;
  }

  /**
   * Generate a response based on the query and knowledge base
   * Demonstrates: Harsh Self-Criticism (self-evaluation of response quality)
   */
  generateResponse(query) {
    const lowerQuery = query.toLowerCase().trim();

    // Intent recognition and response generation:
    // In a real system, this would use NLP models
    // For demo, we'll use simple keyword matching

    if (this.matchesAny(lowerQuery, ['hello', 'hi', 'hey', 'greetings']) && this.isStandaloneGreeting(lowerQuery)) {
      return this.getRandomResponse('greeting');
    }

    if (this.matchesAny(lowerQuery, ['thank', 'thanks', 'thx', 'appreciate'])) {
      return this.getRandomResponse('thanks');
    }

    if (this.matchesAny(lowerQuery, ['you re welcome', 'you are welcome'])) {
      return this.getRandomResponse('welcome');
    }

    if (this.matchesAny(lowerQuery, ['ok', 'okay', 'great', 'nice', 'cool', 'awesome', 'got it'])) {
      return this.getRandomResponse('ok');
    }

    if (this.matchesAny(lowerQuery, ['who are you', 'what are you', 'your name', 'you a bot', 'are you ai'])) {
      return this.getRandomResponse('identity');
    }

    if (this.matchesAny(lowerQuery, ['bye', 'goodbye', 'see you', 'farewell'])) {
      return this.getRandomResponse('farewell');
    }

    if (this.matchesAny(lowerQuery, ['help', 'assist', 'support', 'what can you do'])) {
      return this.getRandomResponse('help');
    }

    if (this.matchesAny(lowerQuery, ['odin', 'principle', 'principles', 'self-improvement', 'autonomous'])) {
      return this.explainOdinPrinciples(lowerQuery);
    }

    if (this.matchesAny(lowerQuery, ['who are you', 'your name', 'about you', 'who is'])) {
      return this.describePerson();
    }

    if (this.matchesAny(lowerQuery, ['experience', 'background', 'career', 'what do you do', 'job', 'work location', 'where do you work'])) {
      return this.describeExperience();
    }

    if (this.matchesAny(lowerQuery, ['skill', 'expertise', 'technolog', 'stack', 'languages', 'tools', 'tech'])) {
      return this.describeSkills();
    }

    if (this.matchesAny(lowerQuery, ['location', 'country', 'based', 'lives', 'live', 'reside', 'where is he from'])) {
      return this.describeLocation();
    }

    if (this.matchesAny(lowerQuery, ['age', 'how old'])) {
      return this.describeAge();
    }

    if (this.matchesAny(lowerQuery, ['badge', 'badges', 'league', 'google skills', 'how many'])) {
      return this.describeBadges();
    }

    if (this.matchesAny(lowerQuery, ['certificate', 'certification', 'certif', 'cs50', 'harvard', 'elements of ai', 'helsinki'])) {
      return this.describeCertificates();
    }

    if (this.matchesAny(lowerQuery, ['project', 'portfolio', 'work', 'demo', 'cs50', 'certificate', 'built'])) {
      return this.describeProjects();
    }

    if (this.matchesAny(lowerQuery, ['contact', 'reach', 'email', 'talk', 'hire', 'get in touch', 'contact me'])) {
      return this.provideContactInfo();
    }

    if (this.matchesAny(lowerQuery, ['github', 'linkedin', 'social', 'twitter', 'social media', 'x profile'])) {
      return this.describeSocials();
    }

    // Default response with self-critical awareness:
    // Acknowledges limitations while being helpful
    return this.getDefaultResponse(lowerQuery);
  }

  /**
   * Check if query matches any of the given terms
   * Demonstrates: Ruthless Simplicity (straightforward implementation)
   */
  matchesAny(query, terms) {
    return terms.some(term => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`(^|[^a-z0-9])${escaped}(?=[^a-z0-9]|$)`, 'i').test(query);
    });
  }

  /**
   * Determine whether a query is purely a greeting (not a greeting + question)
   * Demonstrates: Ruthless Simplicity (avoiding over-matching)
   */
  isStandaloneGreeting(query) {
    // Treat as a greeting only when it's short and doesn't contain a question
    return query.length < 20 && !query.includes('?') &&
           !this.matchesAny(query, ['who', 'what', 'how', 'why', 'where', 'when', 'can', 'about', 'tell', 'your']);
  }

  /**
   * Get a random response from a category
   * Demonstrates: Variety in responses (avoiding robotic repetition)
   */
  getRandomResponse(category) {
    const responses = this.knowledgeBase.interactionPatterns[category] ||
                     ["I'm not sure how to respond to that."];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  /**
   * Explain Odin principles based on query focus
   * Demonstrates: Deep domain knowledge
   */
  explainOdinPrinciples(query) {
    if (this.matchesAny(query, ['autonomous', 'learning', 'self-learning'])) {
      return this.knowledgeBase.principles[0].description +
             " This website demonstrates this through its ability to adapt interactions based on user behavior.";
    }

    if (this.matchesAny(query, ['healing', 'self-healing', 'recovery'])) {
      return this.knowledgeBase.principles[1].description +
             " You can see this in the error boundaries and fallback mechanisms throughout the site.";
    }

    if (this.matchesAny(query, ['architecture', 'hardened', 'security'])) {
      return this.knowledgeBase.principles[2].description +
             " Implementations include input validation, secure headers, and defensive coding practices.";
    }

    if (this.matchesAny(query, ['simple', 'simplicity', 'minimal'])) {
      return this.knowledgeBase.principles[3].description +
             " Evident in the clean codebase, minimal dependencies, and straightforward user interactions.";
    }

    if (this.matchesAny(query, ['knowledge', 'memory', 'okf'])) {
      return this.knowledgeBase.principles[4].description +
             " Demonstrated through interaction history and personalized experiences.";
    }

    if (this.matchesAny(query, ['criticism', 'self-criticism', 'evaluation'])) {
      return this.knowledgeBase.principles[5].description +
             " Implemented via performance monitoring, error tracking, and continuous feedback loops.";
    }

    if (this.matchesAny(query, ['agent', 'agentic', 'autonomy'])) {
      return this.knowledgeBase.principles[6].description +
             " Shown through proactive suggestions, autonomous task handling, and goal-oriented behavior.";
    }

    if (this.matchesAny(query, ['useful', 'reusable', 'value'])) {
      return this.knowledgeBase.principles[7].description +
             " Illustrated by the clean, well-documented code that serves as a learning resource.";
    }

    // General overview of all principles:
    return `The Odin framework consists of 8 interconnected principles:

1. Autonomous Self-Learning: Systems improve through experience
2. Self-Healing: Automatic error detection and recovery
3. Hardened Architecture: Secure, resilient design
4. Ruthless Simplicity: Elimination of unnecessary complexity
5. OKF Memories: Structured knowledge preservation
6. Harsh Self-Criticism: Continuous self-evaluation
7. Full Agentic Operation: Autonomous goal-directed behavior
8. Useful & Reusable: Creating leveragable value

Which principle would you like to explore in more detail?`;
  }

  /**
   * Describe Stephane's background
   * Demonstrates: Useful & Reusable
   */
  describePerson() {
    const p = this.knowledgeBase.person;
    return `${p.name} is a ${p.nationality.toLowerCase()} developer and AI enthusiast based in ${p.location}. ${p.bio}`;
  }

  /**
   * Describe Stephane's experience
   * Demonstrates: Useful & Reusable
   */
  describeExperience() {
    const p = this.knowledgeBase.person;
    return `${p.name} works as an AI Agent Operator. ${p.work} He specializes in ${p.focuses.join(", ")}.`;
  }

  /**
   * Describe Stephane's skills
   * Demonstrates: Useful & Reusable
   */
  describeSkills() {
    return this.knowledgeBase.person.skills;
  }

  /**
   * Describe where Stephane is based
   * Demonstrates: Useful & Reusable
   */
  describeLocation() {
    const p = this.knowledgeBase.person;
    return `${p.name} is a ${p.nationality.toLowerCase()} developer currently based in ${p.location}.`;
  }

  /**
   * Describe Stephane's age
   * Demonstrates: Useful & Reusable
   */
  describeAge() {
    return `${this.knowledgeBase.person.name} is a ${this.knowledgeBase.person.age} developer, bringing decades of practical experience to the field.`;
  }

  /**
   * Describe Stephane's Google badges and certifications
   * Demonstrates: Useful & Reusable
   */
  describeBadges() {
    const b = this.knowledgeBase.person.googleBadges;
    const p = this.knowledgeBase.person;
    return `${p.name} has earned ${b.count} Google badges (${b.league}, ${b.points.toLocaleString()} points) since joining in ${b.memberSince}. His badges focus on ${b.focus}`;
  }

  /**
   * Describe Stephane's certificates
   * Demonstrates: Useful & Reusable
   */
  describeCertificates() {
    const p = this.knowledgeBase.person;
    return `${p.name} holds ${p.certificates}`;
  }

  /**
   * Describe the projects showcased in the portfolio
   * Demonstrates: Useful & Reusable principle
   */
  describeProjects() {
    return "Here are the projects featured in this portfolio:\n\n" +
           "1. Autonomous AI Agent - 'Odin', a custom AI agent built from scratch in Python. It leverages LLMs for multi-step reasoning, tool use, planning, and autonomous task execution, and can be extended with custom tools, memory, and workflows.\n" +
           "2. Portfolio Website with OdinForge - This site itself, built with HTML, CSS, JavaScript, and Python, showcasing apps Stephane has coded.\n" +
           "3. Harvard CS50 Certificates - Certifications in Artificial Intelligence and Programming with Python, exploring the concepts and algorithms at the foundation of modern AI.\n\n" +
           "Each project reflects Stephane's focus on AI agents, automation, and building practical applications.\n\n" +
           `You can explore the full portfolio at ${this.knowledgeBase.person.portfolio}`;
  }

  /**
   * Provide contact information
   * Demonstrates: Useful & Reusable
   */
  provideContactInfo() {
    const p = this.knowledgeBase.person;
    return `You can reach ${p.name} at: ${p.contactEmail}\n\n` +
           `${p.work}\n` +
           `Also find him on ${p.socials}:` +
           `\n• GitHub: ${p.links.github}` +
           `\n• LinkedIn: ${p.links.linkedin}` +
           `\n• X (Twitter): ${p.links.x}` +
           `\n\nFeel free to reach out for collaborations, questions, or discussions about AI and automation!`;
  }

  /**
   * Describe Stephane's social links
   * Demonstrates: Useful & Reusable
   */
  describeSocials() {
    const p = this.knowledgeBase.person;
    return `Here are ${p.name}'s social profiles:\n` +
           `• GitHub: ${p.links.github}` +
           `\n• LinkedIn: ${p.links.linkedin}` +
           `\n• X (Twitter): ${p.links.x}` +
           `\n\nYou can also reach him at ${p.contactEmail}`;
  }

  /**
   * Get a default response when no specific intent is matched
   * Demonstrates: Harsh Self-Criticism (acknowledging limitations)
   */
  getDefaultResponse() {
    return `I may not have specific information about that. Here's what I can help with:\n\n` +
           `- Stephane's background, skills, and location\n` +
           `- The projects in this portfolio\n` +
           `- How to get in touch\n\n` +
           `What would you like to know more about?`;
  }

  /**
   * Get or create a session ID for tracking
   * Demonstrates: OKF Memories
   */
  getSessionId() {
    let sessionId = localStorage.getItem('odin-session-id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem('odin-session-id', sessionId);
    }
    return sessionId;
  }

  /**
   * Provide insights based on learned patterns
   * Demonstrates: Harsh Self-Criticism, Autonomous Self-Learning
   */
  getInsights() {
    return {
      totalInteractions: this.interactionHistory.length,
      sessionId: this.getSessionId(),
      knowledgeBaseSize: Object.keys(this.knowledgeBase).length,
      principlesUnderstood: this.knowledgeBase.principles?.length || 0,
      timestamp: new Date().toISOString()
    };
  }
}

// Initialize the Odin agent when the DOM is loaded
const odinAgent = new OdinAgent();

// Initialize automatically
document.addEventListener('DOMContentLoaded', () => {
  odinAgent.initialize();
});

// Make available globally for debugging and interaction (transparency)
window.odinAgent = odinAgent;

// Export as module if in module environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = OdinAgent;
}