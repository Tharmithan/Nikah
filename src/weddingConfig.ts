export interface WeddingConfig {
  brideName: string;
  brideFullName: string;
  brideTitle: string;
  groomName: string;
  groomFullName: string;
  groomTitle: string;
  weddingDate: string; // YYYY-MM-DD
  weddingDisplayDate: string;
  weddingIslamicDate: string;
  weddingTime: string;
  weddingEndTime?: string;
  venueName: string;
  venueHall: string;
  address: string;
  cityCountry: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  weddingHashtag: string;
  
  // Quranic Verse
  quranVerse: {
    arabic: string;
    translation: string;
    surah: string;
  };

  // Couple Info
  coupleStory: {
    heading: string;
    quote: string;
    groomBio: string;
    brideBio: string;
    groomImage: string;
    brideImage: string;
    togetherImage: string;
  };

  // Family Info
  families: {
    heading: string;
    intro: string;
    groomFamilyTitle: string;
    groomParents: string;
    groomFamilyNote: string;
    brideFamilyTitle: string;
    brideParents: string;
    brideFamilyNote: string;
  };

  // Timeline
  timeline: Array<{
    time: string;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
  }>;

  // Dress Code
  dressCode: {
    title: string;
    code: string;
    description: string;
    colorsGuide: string[];
    note: string;
  };

  // Gallery
  gallery: Array<{
    id: number;
    url: string;
    title: string;
    category: string;
    width?: number;
    height?: number;
  }>;

  // Music
  music: {
    title: string;
    artist: string;
    audioUrl: string; // will support synthetic high-quality ambient synth fallback + customizable stream
  };

  // Contact / Host
  contact: {
    phoneGroom: string;
    phoneBride: string;
    email: string;
  };
}

export const weddingConfig: WeddingConfig = {
  brideName: "FATHIMA",
  brideFullName: "Fathima Zahra",
  brideTitle: "The Bride",
  groomName: "AKIL",
  groomFullName: "Mohamed Akil",
  groomTitle: "The Groom",
  weddingDate: "2026-10-24T10:30:00+05:30",
  weddingDisplayDate: "Saturday, 24 October 2026",
  weddingIslamicDate: "13 Rabi' al-Thani 1448 AH",
  weddingTime: "10:30 AM",
  weddingEndTime: "3:30 PM",
  venueName: "Grand Wedding Hall",
  venueHall: "The Emerald Grand Ballroom",
  address: "Galle Face Promenade, Colombo 03",
  cityCountry: "Colombo, Sri Lanka",
  googleMapsUrl: "https://maps.google.com/?q=Grand+Wedding+Hall+Colombo+Sri+Lanka",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467112028!2d79.84277737573926!3d6.914677493084803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594191316b2b%3A0x6b4ef84c0c4d2938!2sGalle%20Face%20Green!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",
  weddingHashtag: "#AkilWedsFathima",

  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation: "“And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy.”",
    surah: "Surah Ar-Rum 30:21"
  },

  coupleStory: {
    heading: "Two Souls, One Journey",
    quote: "Two hearts, two stories, and one beautiful journey written by Allah.",
    groomBio: "Son of Mr. & Mrs. Abdul Rahman. Known for his warmth, intellect, and steadfast devotion.",
    brideBio: "Daughter of Mr. & Mrs. Mohamed Farook. Radiant, graceful, and cherished by all who know her.",
    groomImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    brideImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    togetherImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
  },

  families: {
    heading: "With the Blessings of Our Families",
    intro: "Together with their beloved families, we invite you to share in the joy and sacred union of their Nikah.",
    groomFamilyTitle: "Groom's Family",
    groomParents: "Mr. Abdul Rahman & Mrs. Amina Rahman",
    groomFamilyNote: "Cordially seek your esteemed presence & pious prayers.",
    brideFamilyTitle: "Bride's Family",
    brideParents: "Mr. Mohamed Farook & Mrs. Khadija Farook",
    brideFamilyNote: "Joyfully welcome you to grace this auspicious celebration."
  },

  timeline: [
    {
      time: "10:00 AM",
      title: "Guest Arrival & Welcome",
      subtitle: "Traditional Rosewater & Dates Reception",
      icon: "UserCheck",
      description: "Guests are welcomed into the grand courtyard with fragrant refreshments and traditional hospitality."
    },
    {
      time: "10:30 AM",
      title: "The Nikah Ceremony",
      subtitle: "Solemnization & Exchange of Vows",
      icon: "HeartHandshake",
      description: "The sacred Islamic marriage contract is officiated with witnesses, sermon (Khutbah), and acceptance (Ijab & Qubool)."
    },
    {
      time: "11:30 AM",
      title: "Dua & Blessings",
      subtitle: "Congregational Supplication",
      icon: "Sparkles",
      description: "A collective prayer led by the Imam invoking peace, barakah, and enduring love upon the newlyweds."
    },
    {
      time: "12:00 PM",
      title: "Grand Royal Feast & Reception",
      subtitle: "Walima Lunch & Congratulations",
      icon: "UtensilsCrossed",
      description: "Join us for an exquisite feast celebrating the bride and groom, accompanied by greetings and photo memories."
    }
  ],

  dressCode: {
    title: "Dress Code",
    code: "Elegant & Traditional",
    description: "Modest, royal, and refined attire. Traditional formal wear such as sherwanis, thawbs, sarees, abayas, or elegant formal suits are warmly embraced.",
    colorsGuide: ["Emerald Green", "Champagne Gold", "Ivory Cream", "Muted Sage", "Midnight Navy"],
    note: "Guests are kindly requested to dress in modest formal festive elegance."
  },

  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
      title: "Elegance in Bloom",
      category: "Celebration"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop",
      title: "Golden Radiance",
      category: "Ceremony"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
      title: "Serenity & Grace",
      category: "Portraits"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900&auto=format&fit=crop",
      title: "The Sacred Rings",
      category: "Details"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=900&auto=format&fit=crop",
      title: "Joyous Moments",
      category: "Celebration"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=900&auto=format&fit=crop",
      title: "Timeless Architecture",
      category: "Ambiance"
    }
  ],

  music: {
    title: "Noor Al-Qulub (Light of the Hearts)",
    artist: "Acoustic Oud & Ambient Strings",
    audioUrl: "https://cdn.freesound.org/previews/518/518888_6142149-lq.mp3" // Elegant calming acoustic lute/strings ambient preview
  },

  contact: {
    phoneGroom: "+94 77 123 4567",
    phoneBride: "+94 77 987 6543",
    email: "rsvp@akilfathima.wedding"
  }
};
