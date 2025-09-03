const pets = [
  {
    id: 1,
    name: "Rottweiler",
    location: "Ameerpet, Hyderabad",
    isReserved: true,
    price: "₹ 15,000/-",
    postDate: "22/04/2025",
    image: "https://petlisting-internship-1.onrender.com/images/rottweiler.jpg",
    age: "2 Yrs 8 Months",
    gender: "Female",
    color: "Tri Color",
    size: "Medium",
    breed: "Rottweiler",
    weight: "40 kg",
    healthStatus: "Healthy",
    microchipped: true,
    owner: {
      name: "Ranjith Soma",
      location: "Ameerpet, Hyderabad",
      phoneVerified: true,
      emailVerified: true,
      contactNumber: "+91-9876543210",
      email: "ranjith.soma@email.com"
    },
    vaccinated: true,
    transport: true,
    about: [
      "The Rottweiler Dog, also lovingly called Alsatians by the British, is a loyal, versatile and intelligent dog breed. They are originally from Germany and are called 'DEUTSCHER SCHÄFERHUND' in German.",
      "They are bred for sheep herding and to protect them from wolves. They are known to have high stamina and are used in military, police forces, in search and rescue operations or even as service dogs.",
      "They are excellent guard dogs and are equally patient with children and people of all ages. Early socialization helps them thrive in all kinds of families.",
      "They are excellent guard dogs and are equally patient with children and people of all ages. Early socialization helps them thrive in all kinds of families. They are excellent guard dogs and are equally patient with children.",
      "They became very famous in the United States in the early 1900s and are considered the ideal breed for the K9 dog squad. READ MORE"
    ],
    favoriteFood: ["Chicken", "Rice", "Dog Biscuits"],
    adoptionRequirements: [
      "Home visit required",
      "Fenced yard preferred",
      "Experience with large breeds"
    ]
  },
  {
    id: 2,
    name: "Labrador",
    location: "Madhapur, Hyderabad",
    isReserved: false,
    price: "₹ 12,000/-",
    postDate: "01/09/2025",
    image: "https://petlisting-internship-1.onrender.com/images/labrador.jpg",
    age: "1 Yr 3 Months",
    gender: "Male",
    color: "Golden",
    size: "Large",
    breed: "Labrador Retriever",
    weight: "32 kg",
    healthStatus: "Healthy",
    microchipped: false,
    owner: {
      name: "Suresh Kumar",
      location: "Madhapur, Hyderabad",
      phoneVerified: false,
      emailVerified: true,
      contactNumber: "+91-9123456780",
      email: "suresh.kumar@email.com"
    },
    vaccinated: true,
    transport: true,
    about: [
      "The Labrador Retriever is one of the most popular dog breeds in the world.",
      "They were originally bred for retrieving fishing nets and game.",
      "Labradors are playful, loyal, and thrive in active households."
    ],
    favoriteFood: ["Fish", "Chicken", "Carrots"],
    adoptionRequirements: [
      "Active family preferred",
      "Regular exercise commitment"
    ]
  },
  {
    id: 3,
    name: "German Shepherd",
    location: "Kukatpally, Hyderabad",
    isReserved: false,
    price: "₹ 18,000/-",
    postDate: "15/08/2025",
    image: "https://petlisting-internship-1.onrender.com/images/german-shepherd.jpg",
    age: "3 Yrs",
    gender: "Male",
    color: "Black & Tan",
    size: "Large",
    breed: "German Shepherd",
    weight: "38 kg",
    healthStatus: "Healthy",
    microchipped: true,
    owner: {
      name: "Anil Reddy",
      location: "Kukatpally, Hyderabad",
      phoneVerified: true,
      emailVerified: false,
      contactNumber: "+91-9988776655",
      email: "anil.reddy@email.com"
    },
    vaccinated: true,
    transport: true,
    about: [
      "The German Shepherd is a courageous and highly intelligent breed.",
      "They are commonly used in police, military, and search-and-rescue missions.",
      "They are protective yet affectionate, making them excellent family dogs."
    ],
    favoriteFood: ["Beef", "Eggs", "Dog Food"],
    adoptionRequirements: [
      "Experienced dog owner",
      "Secure outdoor space"
    ]
  },
  {
    id: 4,
    name: "Beagle",
    location: "Gachibowli, Hyderabad",
    isReserved: true,
    price: "₹ 10,000/-",
    postDate: "10/07/2025",
    image: "https://petlisting-internship-1.onrender.com/images/Beagle.jpg",
    age: "2 Yrs",
    gender: "Female",
    color: "White & Brown",
    size: "Small",
    breed: "Beagle",
    weight: "12 kg",
    healthStatus: "Healthy",
    microchipped: false,
    owner: {
      name: "Priya Sharma",
      location: "Gachibowli, Hyderabad",
      phoneVerified: true,
      emailVerified: true,
      contactNumber: "+91-9876501234",
      email: "priya.sharma@email.com"
    },
    vaccinated: true,
    transport: true,
    about: [
      "The Beagle is a small hound breed with an excellent sense of smell.",
      "They are friendly, curious, and great with children.",
      "Beagles are active and require regular exercise and playtime."
    ],
    favoriteFood: ["Chicken", "Pumpkin", "Dog Treats"],
    adoptionRequirements: [
      "Family with children preferred",
      "Daily walks required"
    ]
  },
  {
    id: 5,
    name: "Pomeranian",
    location: "Secunderabad, Hyderabad",
    isReserved: false,
    price: "₹ 8,000/-",
    postDate: "25/06/2025",
    image: "https://petlisting-internship-1.onrender.com/images/pomeranian.jpg",
    age: "1 Yr 6 Months",
    gender: "Male",
    color: "White",
    size: "Small",
    breed: "Pomeranian",
    weight: "4 kg",
    healthStatus: "Healthy",
    microchipped: false,
    owner: {
      name: "Kiran Kumar",
      location: "Secunderabad, Hyderabad",
      phoneVerified: false,
      emailVerified: true,
      contactNumber: "+91-9090909090",
      email: "kiran.kumar@email.com"
    },
    vaccinated: true,
    transport: true,
    about: [
      "The Pomeranian is a small, fluffy companion dog full of energy.",
      "They are very intelligent, playful, and affectionate.",
      "Despite their small size, they are confident and alert watchdogs."
    ],
    favoriteFood: ["Boiled Egg", "Chicken", "Dog Biscuits"],
    adoptionRequirements: [
      "Indoor home required",
      "Regular grooming"
    ]
  }
];

module.exports = pets;
