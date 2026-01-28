HelpHub Project Documentation
HelpHub: The Smart Logic Layer for On-Demand Labor

Group Members
• Ryan Ekiruu
• Kimberley Madoya
• Ted Githaiga
• Papa Sanau

1. Project Vision
   HelpHub is a digital platform designed to organize and simplify the highly fragmented market of informal labor. In the current informal economy, service discovery is often chaotic — characterized by bargaining, ghosting, and lack of transparency. HelpHub introduces structure by combining visual evidence with competitive bidding to create a more reliable service marketplace.
   • Streamlined connection between service seekers and providers
   • Transparent and efficient transactions
   • Reduced uncertainty and scope creep in informal labor
2. Technical Stack

a.)Frontend: React.js
The frontend is built using React.js to deliver a fast, interactive, and responsive user experience for a bidding-based marketplace.
• Reactive UI with real-time bid updates
• Component-based architecture for easy scaling • Efficient state management using React hooks

b.)Backend : JSON (Momentary Backend)
The backend currently uses a JSON-based mock backend for fast prototyping and testing. • Simulates real API responses
• Stores jobs, bids, and user data in JSON format • Enables rapid frontend development
c.)Styling — Tailwind CSS
The interface is styled using Tailwind CSS for fast and consistent UI development.
• Utility-first styling directly in components
• Fully responsive and mobile-friendly design
• Clean and modern interface 3. Core Standout Features
A. Photo-First Handshake
To prevent scope creep (workers requesting more money after arriving), every task must include a photo. Providers view the image before bidding, creating a visual contract that ensures bids reflect the actual work required.
B. Lowest-Cost-First (LCF) Engine
A reverse-auction logic automatically sorts bids by lowest price first, encouraging competitive pricing and reducing user costs.
C. Multi-Service Categories & Other Jobs
HelpHub covers standard services such as cleaning, plumbing, and security, while also including an "Other Jobs" category for diverse Kenyan informal tasks. This makes HelpHub a catch-all platform for manual labor services. 4. Simplified Workflow
• Upload: User posts a task with a photo
• Bid: Workers compete and bids are sorted by lowest price
• Match: User selects a worker based on price and rating
• Complete & Pay: Work is completed and payment is made directly to the worker 5. Technical Conclusion
By leveraging React's Virtual DOM and a lightweight JSON backend, HelpHub delivers a seamless real- time user experience, visual transparency, and competitive lowest-cost transactions. The result is a practical, scalable, and user-friendly solution for the Kenyan informal economy.
