import {
  Wrench,
  GraduationCap,
  Sparkles,
  Flower2,
  Paintbrush,
} from "lucide-react";

export const categoriesMock = [
  { id: 1, label: "Plumbing", icon: Wrench },
  { id: 2, label: "Tutoring", icon: GraduationCap },
  { id: 3, label: "Cleaning", icon: Sparkles },
  { id: 4, label: "Gardening", icon: Flower2 },
  { id: 5, label: "Painting", icon: Paintbrush },
];

export const featuredServiceMock = {
  id: 1,
  title: "Professional Kitchen Plumbing",
  provider_name: "Jane Doe",
  rating: 4.9,
  reviews_count: 128,
  price: 75,
  price_type: "hr",
  image:
    "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1200&q=80",
};

export const latestServicesMock = [
  {
    id: 1,
    title: "Professional Kitchen Plumbing",
    provider_name: "Jane Doe",
    rating: 4.9,
    reviews_count: 128,
    price: 75,
    price_type: "hr",
    image:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "High School Math Tutoring",
    provider_name: "John Smith",
    rating: 5.0,
    reviews_count: 72,
    price: 50,
    price_type: "hr",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Apartment Deep Cleaning",
    provider_name: "Laura Chen",
    rating: 4.8,
    reviews_count: 64,
    price: 120,
    price_type: "job",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
];