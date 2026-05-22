export const categories = [
  "Top rated",
  "Under $50",
  "Near me",
  "Home services",
  "Online",
];

export const services = [
  {
    id: 1,
    title: "Professional Garden Landscaping",
    description: "Complete garden design, trimming, and seasonal maintenance.",
    description_2:
      "We provide eco-friendly landscaping and custom outdoor care plans tailored to each property and season.",
    rating: 4.9,
    reviews_count: 120,
    price: 50,
    price_type: "hr",
    duration: "2-4 hours",
    service_type: "Full service",
    category: "Home Services",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    tag: "Home services",
    provider: {
      name: "Jane Doe",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 3,
    },
    included: [
      "Full garden trimming and shaping.",
      "Seasonal maintenance and cleanup.",
      "Weed removal and soil treatment.",
      "Plant care and outdoor area refresh.",
    ],
    info: [
      { id: 1, label: "Duration", value: "2-4 hours per visit" },
      { id: 2, label: "Availability", value: "Mon - Sat, 9am-6pm" },
      { id: 3, label: "Payment", value: "Cash or online transfer" },
    ],
  },
  {
    id: 2,
    title: "Residential House Cleaning",
    description: "Weekly and deep cleaning plans for apartments and houses.",
    description_2:
      "Our professional home cleaning service provides a reliable solution to keep your living space spotless, fresh, and comfortable.",
    rating: 4.8,
    reviews_count: 89,
    price: 30,
    price_type: "hr",
    duration: "3-4 hours",
    service_type: "Deep clean",
    category: "Home Services",
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1200&q=80",
    tag: "Home services",
    provider: {
      name: "Jane Doe",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 3,
    },
    included: [
      "Kitchen and bathroom deep cleaning.",
      "Dusting all reachable furniture and surfaces.",
      "Vacuuming and mopping all major rooms.",
      "Customized cleaning based on home needs.",
    ],
    info: [
      { id: 1, label: "Duration", value: "3-4 hours per visit" },
      { id: 2, label: "Availability", value: "Mon - Sat, 9am-6pm" },
      { id: 3, label: "Payment", value: "Cash or online transfer" },
    ],
  },
  {
    id: 3,
    title: "Daily Dog Walking Service",
    description: "Reliable daily walks, playtime, and pet updates.",
    description_2:
      "A flexible and safe pet care service that keeps your dog active, happy, and supervised while you focus on your day.",
    rating: 5.0,
    reviews_count: 54,
    price: 20,
    price_type: "walk",
    duration: "30-60 min",
    service_type: "Pet care",
    category: "Near Me",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    tag: "Near me",
    provider: {
      name: "Michael Hart",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 2,
    },
    included: [
      "Daily dog walking sessions.",
      "Playtime and basic pet care.",
      "Regular owner updates.",
      "Flexible scheduling options.",
    ],
    info: [
      { id: 1, label: "Duration", value: "30-60 min per walk" },
      { id: 2, label: "Availability", value: "Daily, 8am-8pm" },
      { id: 3, label: "Payment", value: "Cash, card, or transfer" },
    ],
  },
  {
    id: 4,
    title: "Personal Math Tutoring",
    description: "Exam preparation and homework support for all grade levels.",
    description_2:
      "Personalized tutoring sessions focused on understanding concepts, improving grades, and building confidence.",
    rating: 4.9,
    reviews_count: 102,
    price: 45,
    price_type: "hr",
    duration: "1-2 hours",
    service_type: "Online sessions",
    category: "Online",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    tag: "Online",
    provider: {
      name: "Sarah Kim",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 4,
    },
    included: [
      "Homework support.",
      "Exam preparation.",
      "One-on-one live sessions.",
      "Study plans and progress tracking.",
    ],
    info: [
      { id: 1, label: "Duration", value: "1-2 hours per session" },
      { id: 2, label: "Availability", value: "Mon - Fri, 3pm-9pm" },
      { id: 3, label: "Payment", value: "Online payment only" },
    ],
  },
  {
    id: 5,
    title: "Remote Web Development",
    description: "Landing pages, dashboards, and full-stack web apps.",
    description_2:
      "Professional web development service for startups, businesses, and personal brands with scalable and clean solutions.",
    rating: 4.7,
    reviews_count: 77,
    price: 60,
    price_type: "hr",
    duration: "Project-based",
    service_type: "Development",
    category: "Online",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    tag: "Online",
    provider: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 5,
    },
    included: [
      "Frontend and backend solutions.",
      "Responsive UI implementation.",
      "API integration.",
      "Maintenance and bug fixes.",
    ],
    info: [
      { id: 1, label: "Duration", value: "Depends on project scope" },
      { id: 2, label: "Availability", value: "Mon - Fri, remote" },
      { id: 3, label: "Payment", value: "Milestone-based" },
    ],
  },
  {
    id: 6,
    title: "Home Painting & Refresh",
    description: "Interior and exterior painting, color consultation included.",
    description_2:
      "A complete painting service that refreshes your home with careful preparation, clean execution, and quality finishes.",
    rating: 4.8,
    reviews_count: 58,
    price: 200,
    price_type: "project",
    duration: "1-3 days",
    service_type: "Home refresh",
    category: "Home Services",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tag: "Home services",
    provider: {
      name: "Daniel Ross",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 4,
    },
    included: [
      "Interior and exterior painting.",
      "Color consultation.",
      "Surface preparation.",
      "Final cleanup.",
    ],
    info: [
      { id: 1, label: "Duration", value: "1-3 days depending on area" },
      { id: 2, label: "Availability", value: "Mon - Sat" },
      { id: 3, label: "Payment", value: "Deposit + final payment" },
    ],
  },
  {
    id: 7,
    title: "Logo & Brand Design",
    description: "Professional branding, logos and social media kits.",
    description_2:
      "A creative design service for brands that want a memorable and polished visual identity.",
    rating: 5.0,
    reviews_count: 41,
    price: 150,
    price_type: "project",
    duration: "3-7 days",
    service_type: "Branding",
    category: "Online",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tag: "Online",
    provider: {
      name: "Emma Blake",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 6,
    },
    included: [
      "Logo design concepts.",
      "Brand color palette.",
      "Typography suggestions.",
      "Social media design kit.",
    ],
    info: [
      { id: 1, label: "Duration", value: "3-7 business days" },
      { id: 2, label: "Availability", value: "Remote only" },
      { id: 3, label: "Payment", value: "50% upfront" },
    ],
  },
  {
    id: 8,
    title: "Event Photography Package",
    description: "Professional coverage for events, parties, and weddings.",
    description_2:
      "Capture memorable moments with professional photography tailored for private and public events.",
    rating: 4.9,
    reviews_count: 73,
    price: 300,
    price_type: "event",
    duration: "3-6 hours",
    service_type: "Photography",
    category: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    tag: "Top rated",
    provider: {
      name: "Chris Parker",
      avatar:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
      verified: true,
      years_on_platform: 5,
    },
    included: [
      "Professional event coverage.",
      "Edited high-resolution photos.",
      "Private download gallery.",
      "Optional printed album add-on.",
    ],
    info: [
      { id: 1, label: "Duration", value: "3-6 hours per event" },
      { id: 2, label: "Availability", value: "Weekdays and weekends" },
      { id: 3, label: "Payment", value: "Booking deposit required" },
    ],
  },
];