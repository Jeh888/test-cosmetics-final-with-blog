// reviews.js - Customer testimonials for aesthetic treatments

export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Clapham',
    treatment: 'Botox',
    rating: 5,
    text: 'Found an amazing practitioner through this site. The whole process was so easy - filled in the form and had three quotes within 24 hours. My forehead lines are gone and I look so refreshed!',
    date: '2024-11-15'
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Canary Wharf',
    treatment: 'Jawline Fillers',
    rating: 5,
    text: 'Being able to compare providers saved me over £400. The clinic I chose was professional, and my jawline looks so much more defined now. Really pleased with the results.',
    date: '2024-11-10'
  },
  {
    id: 3,
    name: 'Priya K.',
    location: 'Wembley',
    treatment: 'Lip Fillers',
    rating: 5,
    text: 'I was nervous about getting lip fillers but the provider I found through this service made me feel completely at ease. Natural results and half the price of other quotes.',
    date: '2024-11-08'
  },
  {
    id: 4,
    name: 'Michael R.',
    location: 'Brixton',
    treatment: 'Cheek Fillers',
    rating: 5,
    text: 'Wanted to restore some volume to my face. Compared quotes from five clinics and found one with payment plans. The lift is incredible - took years off my face!',
    date: '2024-10-28'
  },
  {
    id: 5,
    name: 'Emma L.',
    location: 'Putney',
    treatment: 'Dermal Fillers',
    rating: 5,
    text: 'Used this site to find a reputable filler provider after a bad experience elsewhere. The practitioner was highly qualified and my nasolabial folds are so much softer now.',
    date: '2024-10-25'
  },
  {
    id: 6,
    name: 'David H.',
    location: 'Stratford',
    treatment: 'Chemical Peel',
    rating: 5,
    text: 'Had issues with pigmentation for years. The quotes I received varied massively. This site helped me find a great clinic who did a course of peels - my skin has never looked better.',
    date: '2024-10-20'
  },
  {
    id: 7,
    name: 'Sophie W.',
    location: 'Bromley',
    treatment: 'Profhilo',
    rating: 5,
    text: 'Everyone kept asking if I\'d been on holiday - that\'s how good my skin looks after Profhilo! The clinic I found through this service was brilliant and very fairly priced.',
    date: '2024-10-15'
  },
  {
    id: 8,
    name: 'Amir N.',
    location: 'Finchley',
    treatment: 'Tear Trough Fillers',
    rating: 5,
    text: 'Wanted to reduce my under-eye hollows and wasn\'t sure where to start. Got connected with an excellent aesthetic practitioner who delivered exactly what I wanted.',
    date: '2024-10-12'
  },
  {
    id: 9,
    name: 'Rebecca T.',
    location: 'Lewisham',
    treatment: 'Microneedling',
    rating: 5,
    text: 'Had acne scarring that really affected my confidence. Found a clinic who did a course of microneedling - my skin texture has improved dramatically!',
    date: '2024-10-08'
  },
  {
    id: 10,
    name: 'Chris P.',
    location: 'Uxbridge',
    treatment: 'Fat Dissolving',
    rating: 5,
    text: 'Quick and easy to get quotes for my double chin treatment. The clinic was convenient for me and did an incredible job. Highly recommend this comparison service.',
    date: '2024-10-05'
  },
  {
    id: 11,
    name: 'Nina S.',
    location: 'Battersea',
    treatment: 'Laser Hair Removal',
    rating: 5,
    text: 'As a first-timer, I really appreciated being able to compare practitioners. Found someone highly experienced with great equipment. No more shaving for me!',
    date: '2024-10-01'
  },
  {
    id: 12,
    name: 'Tom B.',
    location: 'Croydon',
    treatment: 'PRP Facial',
    rating: 5,
    text: 'The comparison saved me hours of research. All the providers who contacted me were legitimate and professional. My skin looks younger and more radiant!',
    date: '2024-09-28'
  }
];

export function getAllReviews() {
  return reviews;
}

export function getReviewsByTreatment(treatment) {
  return reviews.filter(review => review.treatment === treatment);
}

export function getReviewsByLocation(location) {
  return reviews.filter(review => review.location.toLowerCase().includes(location.toLowerCase()));
}

export function getFeaturedReviews(count = 6) {
  return reviews.slice(0, count);
}

export function getAverageRating() {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);
}

export default reviews;
