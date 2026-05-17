import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-service-learning-project", [
  tldr({
    heading: "How can schools use vending as a service-learning project for students?",
    paragraph:
      "School vending service-learning projects engage middle school + high school students in real-world business operations under supervision — combining academic learning (math, finance, marketing, nutrition, civics, computer science) with experiential skill development (decision-making, accountability, teamwork, presentation) and community contribution (funds support student council, athletic, arts, or charitable programs). Project scope options: (1) Planogram + merchandising team — analyze sales data, propose SKU changes, design merchandising; (2) Marketing + communication team — student newsletter promotion, social media, signage design, customer feedback collection; (3) Finance + accounting team — track revenue, expenses, profit margin, budget allocation, financial reporting; (4) Sustainability team — track recycling capture, energy consumption, packaging mix, ENERGY STAR / waste-reduction metrics; (5) Community impact team — propose + manage profit-share to charitable cause, athletic team, arts program, scholarship fund. Typical structure: 8-12 students per project team, weekly 45-90 minute working session, faculty advisor oversight, vending operator partnership (data access, restock observation, customer service exposure), semester or year-long duration, culminating presentation to student government / principal / district. Alignment with USDA Smart Snacks (school vending must comply); state-specific nutrition law (California SB 12 / SB 19; Texas TX-NS; varies by state); CACFP / NSLP standards at K-8. Outcome metrics: student skill development (pre / post self-assessment), academic credit (math, business, civics elective), community fund generated, vending program performance lift (typically 15-25% revenue improvement under engaged student-led operations vs operator-only). Engage operator at planning; modern operators welcome service-learning partnerships, legacy operators don't structure.",
    bullets: [
      { emphasis: "Service-learning combines academics + experiential skill + community impact:",
        text: "Math, finance, marketing, nutrition, civics, CS academic alignment. Decision-making, accountability, teamwork, presentation experiential skill." },
      { emphasis: "Five project team scopes — planogram + marketing + finance + sustainability + community impact:",
        text: "Each team handles distinct vending program dimension. 8-12 students per team. Faculty advisor + operator partnership." },
      { emphasis: "15-25% revenue lift under engaged student-led operations:",
        text: "Modern operator partnership enables data access + restock observation + customer service exposure. Legacy operators don't structure.", },
    ],
  }),
  timeline({
    heading: "How to structure a school vending service-learning project — six-step process",
    sub: "From faculty + administration planning to culminating presentation. Semester or year-long typical duration.",
    howToName: "Implement school vending service-learning project",
    totalTime: "Semester (16-18 weeks) or year-long (32-36 weeks)",
    steps: [
      { title: "Step 1: Faculty + administration planning", description: "Identify faculty advisor (math, business, civics, sustainability, or family + consumer science teacher). Confirm administration support. Align with academic credit pathway (elective course, club, capstone project). Identify operator partnership opportunity. Plan team structure + timeline + outcome metrics.", duration: "Pre-launch (2-4 weeks)" },
      { title: "Step 2: Operator partnership setup", description: "Meet with vending operator account manager. Confirm partnership scope — data access (monthly performance, planogram, sustainability), restock observation, customer service exposure, presentation opportunity. Build into operator service contract or partnership letter. Modern operators welcome; legacy operators may not structure.", duration: "Pre-launch (2-3 weeks)" },
      { title: "Step 3: Student recruitment + team formation", description: "Recruit 8-12 students per project team. Five team scopes — planogram + marketing + finance + sustainability + community impact. Application + interview process supports skill-building. Form teams with diverse skill mix; faculty advisor balances strong / developing students per team.", duration: "Week 1-2" },
      { title: "Step 4: Project kickoff + skill-building", description: "Initial training — vending operations overview (operator presentation), data analysis (faculty advisor), team coordination (school counselor or business teacher). Build foundational understanding before tactical project work. Connect to academic content — math (data analysis, finance), civics (community impact), CS (data visualization).", duration: "Week 2-4" },
      { title: "Step 5: Weekly project work + monthly review", description: "Weekly 45-90 minute working sessions per team. Faculty advisor oversight. Monthly progress review with administration + operator. Adjust scope as students develop capability. Capture deliverables (planogram proposals, marketing materials, financial reports, sustainability tracking, community impact proposals).", duration: "Week 4-14 (semester) or Week 4-30 (year-long)" },
      { title: "Step 6: Culminating presentation + outcome assessment", description: "Student presentation to administration + student government + operator (typically end-of-semester or year-end). Each team presents work, results, recommendations. Outcome assessment — student skill development pre / post, academic credit awarded, community fund generated, vending program performance lift. Continue or evolve project for next cohort.", duration: "Week 15-16 (semester) or Week 31-32 (year-long)" },
    ],
  }),
  specList({
    heading: "School vending service-learning project specifications",
    items: [
      { label: "Project team scopes", value: "Planogram + merchandising (analyze sales data, propose SKU changes, design merchandising). Marketing + communication (newsletter, social media, signage, customer feedback). Finance + accounting (track revenue, expenses, profit margin, budget allocation, financial reporting). Sustainability (recycling capture, energy consumption, packaging mix, waste reduction). Community impact (profit-share to charitable cause, athletic team, arts program, scholarship)." },
      { label: "Team size + structure", value: "8-12 students per project team, typically mixed grade levels for peer mentoring. Five teams handles full vending program dimensions. Smaller schools may consolidate into 2-3 teams. Faculty advisor oversight at 1 advisor per 1-2 teams typical. Student team leaders rotate quarterly for skill development." },
      { label: "Faculty advisor profile", value: "Math, business, civics, sustainability, family + consumer science, or computer science teacher. Real-world business application interest. Available 2-4 hours per week during project. Trained on vending operations basics (operator provides initial training). Coordinates with administration + operator account manager." },
      { label: "Operator partnership scope", value: "Data access (monthly performance reports, planogram detail, sustainability metrics) shared with student teams. Restock observation opportunities (1-2 per semester) under operator supervision. Customer service exposure (handling refunds, feedback, complaints) under operator + faculty oversight. Presentation opportunity at culminating event." },
      { label: "Academic credit pathway", value: "Elective course (Business + Entrepreneurship, Marketing, Personal Finance, Sustainability, Civics, Family + Consumer Science). Club / activity (Student Council, DECA, FBLA, Future Business Leaders). Capstone project (senior year culminating experience). Service-learning hours toward graduation requirement at districts with service-learning expectation." },
      { label: "USDA Smart Snacks alignment", value: "School vending complies with USDA Smart Snacks (calorie, fat, saturated fat, sodium, sugar limits). Student planogram team works within compliance constraints. Educational opportunity — students learn nutrition science + regulatory compliance. Faculty advisor + operator verify compliance at each planogram change." },
      { label: "State + district nutrition law", value: "California SB 12 / SB 19 (stricter than federal), Texas TX-NS (Texas Nutrition Standards), New York LSWP (Local Wellness Policy mandate), other state-specific. CACFP + NSLP at K-8 (Smart Snacks at all grades). Faculty advisor + operator verify state + district compliance; student teams learn regulatory framework." },
      { label: "Outcome metrics", value: "Student skill development (pre / post self-assessment + faculty assessment). Academic credit awarded (course credit, service-learning hours, capstone completion). Community fund generated (annual amount + cause allocation). Vending program performance lift (revenue + sustainability + customer satisfaction vs operator-only baseline). Typical 15-25% revenue lift under engaged student-led operations." },
      { label: "Risk + supervision considerations", value: "Student supervision — faculty advisor present at all working sessions, operator-supervised restock observation, no student-only cash handling. FERPA compliance for student data. Liability — district insurance review. Safety — service operations training (food handling at applicable items, electrical safety, machine operation). Modern operators support; legacy operators may not structure." },
    ],
  }),
  tipCards({
    heading: "Five school vending service-learning success patterns",
    sub: "Modern programs combine academic alignment + experiential skill + community impact under faculty + operator partnership.",
    items: [
      { title: "Anchor to academic content from day one", body: "Service-learning works best when explicitly aligned with academic content — math (data analysis, finance), civics (community impact, regulatory), business (operations, marketing), sustainability (environmental science). Students see real-world application of classroom learning. Faculty advisor connects daily work to content standards." },
      { title: "Operator partnership at planning, not afterthought", body: "Modern operators welcome service-learning partnerships (community engagement, future workforce development, customer relationship). Engage operator account manager at project planning. Build data access + restock observation + customer service exposure + presentation opportunity into operator service contract. Legacy operators don't structure; modern operators do." },
      { title: "Diverse team composition by skill + grade", body: "8-12 students per team, mixed grade levels for peer mentoring, mixed skill profile (analytic + creative + interpersonal). Faculty advisor balances strong / developing students per team. Diverse composition produces better outcomes + broader skill development across cohort." },
      { title: "Community fund allocation builds civic engagement", body: "Service-learning project profit-share to charitable cause, athletic team, arts program, scholarship fund. Students propose + vote on allocation. Builds civic engagement + financial accountability. Annual fund $2-15K typical at high school vending program; meaningful contribution to chosen cause." },
      { title: "Compliance + safety supervision is non-negotiable", body: "Faculty advisor present at all working sessions. Operator-supervised restock observation (no student-only). No student-only cash handling. FERPA compliance for student data. District insurance review. Safety training. Modern operators support; legacy operators may not structure. Don't skip supervision — liability + safety stakes." },
    ],
  }),
  inlineCta({
    text: "Want the school vending service-learning framework (academic alignment + operator partnership + team structure + outcomes)?",
    buttonLabel: "Get the service-learning framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support school vending service-learning project design at middle schools, high schools, and K-12 districts — including operator partnership setup, team structure, academic alignment, USDA Smart Snacks + state nutrition compliance, faculty supervision, and outcome assessment. The benchmarks reflect operator-side data on service-learning program performance lift and student outcome patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How can schools use vending as a service-learning project?", answer: "Five team scopes — planogram + merchandising, marketing + communication, finance + accounting, sustainability, community impact. 8-12 students per team. Weekly 45-90 minute working sessions. Faculty advisor + operator partnership. Semester or year-long duration. Academic credit pathway (elective, club, capstone). Culminating presentation.", audience: "School Administrators" },
      { question: "What academic content aligns with vending service-learning?", answer: "Math (data analysis, finance, statistics), business (operations, marketing, entrepreneurship), civics (community impact, regulatory framework), sustainability (environmental science), computer science (data visualization, dashboards), family + consumer science (nutrition, consumer decision-making), personal finance.", audience: "Faculty" },
      { question: "How does USDA Smart Snacks affect the project?", answer: "School vending complies with USDA Smart Snacks (calorie, fat, saturated fat, sodium, sugar limits). Student planogram team works within compliance constraints. Educational opportunity — students learn nutrition science + regulatory compliance. Faculty advisor + operator verify compliance at each planogram change.", audience: "Compliance" },
      { question: "What operator partnership is needed?", answer: "Modern operators welcome service-learning partnerships. Data access (monthly performance reports, planogram detail, sustainability metrics) shared with student teams. Restock observation (1-2 per semester) under operator supervision. Customer service exposure (refunds, feedback) under operator + faculty oversight. Presentation opportunity at culminating event.", audience: "Procurement" },
      { question: "What revenue impact can we expect?", answer: "Modern engaged student-led operations typically produce 15-25% revenue lift vs operator-only baseline. Student-driven planogram refinement, marketing initiatives, customer feedback handling, community engagement. Sustained engagement matters — semester projects produce smaller lift than year-long projects.", audience: "Finance" },
      { question: "What about student supervision and safety?", answer: "Faculty advisor present at all working sessions. Operator-supervised restock observation (no student-only). No student-only cash handling. FERPA compliance for student data. District insurance review. Safety training (food handling at applicable items, electrical, machine operation). Don't skip supervision; liability + safety stakes.", audience: "Risk Management" },
      { question: "How is the community fund allocated?", answer: "Students propose + vote on allocation. Common allocations — student council activities, athletic team support, arts program funding, scholarship fund, charitable causes. $2-15K annual fund typical at high school vending program. Builds civic engagement + financial accountability + community impact awareness.", audience: "Student Council" },
      { question: "What outcome metrics should we track?", answer: "Student skill development (pre / post self-assessment + faculty assessment). Academic credit awarded (course credit, service-learning hours, capstone completion). Community fund generated (annual amount + cause allocation). Vending program performance lift (revenue + sustainability + customer satisfaction). Document for program evolution.", audience: "School Administrators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "USDA Smart Snacks in School", url: "https://www.fns.usda.gov/cn/tools/smart-snacks-school", note: "Federal nutrition standards governing school vending compliance" },
      { label: "NACUFS — school food service standards", url: "https://www.nacufs.org/", note: "School food service trade association covering vending operations" },
      { label: "ASCD — service-learning instructional resources", url: "https://www.ascd.org/", note: "Educational leadership organization covering service-learning pedagogy" },
      { label: "DECA + FBLA — student business organizations", url: "https://www.deca.org/", note: "Student business organizations supporting service-learning + business education" },
      { label: "NAMA — school vending program standards", url: "https://www.namanow.org/", note: "Industry trade association covering school vending operator partnership and standards" },
    ],
  }),
  relatedGuides({
    heading: "Related school vending guides",
    items: [
      { eyebrow: "Sister guide", title: "School-compliant vending options", description: "USDA Smart Snacks compliance, state nutrition law, planogram and SKU selection.", href: "/vending-for-schools/school-compliant-vending-options" },
      { eyebrow: "Operations", title: "Parent and staff approval for school vending", description: "Stakeholder engagement, communication, and approval workflow.", href: "/vending-for-schools/parent-and-staff-approval-for-school-vending" },
      { eyebrow: "Hub", title: "All school vending guides", description: "Compliance, planogram, placement, operations, and program design.", href: "/vending-for-schools" },
    ],
  }),
]);
process.exit(0);
