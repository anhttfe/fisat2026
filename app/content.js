window.CONTENT = {
  // 26 Nov program. Resolutions applied (25 Nov): registration 07:30–08:30, opening speech 09:00–09:15,
  // Manavalan in Hall A, Block 1 starts 10:45.
  program: [
    { s: "07:30", e: "08:30", t: "Registration / Check-in", v: "Lobby Area", room: "REG", k: "logistics" },
    { s: "08:45", e: "09:00", t: "Opening Musical Performance", v: "Hall A", room: "HALLA", k: "ceremony" },
    { s: "09:00", e: "09:15", t: "Opening Speech", who: "Dr. Tran Ngoc Tuan, Vice Rector, FPT University", sp: "tuan", v: "Hall A", room: "HALLA", k: "ceremony" },
    { s: "09:15", e: "09:25", t: "Message from the President of EAI", who: "Prof. Imrich Chlamtac, European Alliance for Innovation", sp: "chlamtac", v: "Hall A", room: "HALLA", k: "ceremony" },
    { s: "09:25", e: "09:45", t: "Welcome Remarks by the Ambassador of India to Viet Nam", who: "H.E. Mr. Tshering W. Sherpa", sp: "sherpa", v: "Hall A", room: "HALLA", k: "ceremony" },
    { s: "09:45", e: "10:00", t: "Remarks from the Director General, Intellectual Property Office of Viet Nam", who: "Mr. Luu Hoang Long", sp: "long", v: "Hall A", room: "HALLA", k: "ceremony" },
    { s: "10:00", e: "10:15", t: "Coffee Break", v: "Networking Area, 5th floor", room: "COFFEE", k: "break" },
    { s: "10:15", e: "10:45", t: "Keynote 1: Why LLM Inference Is a Networking Problem", who: "Assoc. Prof. Dr. Tran Hoang Nguyen, The University of Sydney", sp: "nguyen", v: "Hall A", room: "HALLA", k: "keynote" },
    { s: "10:45", e: "12:00", t: "Technical Sessions, Block 1", who: "SS01–SS17 in 17 parallel rooms", block: 1, v: "3rd floor rooms", room: "F3", k: "sessions" },
    { s: "12:00", e: "13:30", t: "Lunch", v: "Lobby, 5th floor", room: "LUNCH", k: "break" },
    { s: "13:30", e: "14:00", t: "Keynote 2: Wireless AI at the Edge", who: "Prof. Dr. Hiroshi Ochi, Kurume Institute of Technology", sp: "ochi", v: "Hall A", room: "HALLA", k: "keynote" },
    { s: "14:00", e: "14:30", t: "Invited Talk: From Virtual Worlds to Real Impact", who: "Assoc. Prof. Dr. Noreen Izza Arshad, Universiti Teknologi PETRONAS", sp: "noreen", v: "Hall A", room: "HALLA", k: "keynote" },
    { s: "14:30", e: "15:00", t: "Invited Talk: Transforming Biological Sciences with AI-based Frameworks", who: "Assoc. Prof. Dr. Balachandran Manavalan, Sungkyunkwan University", sp: "manavalan", v: "Hall A", room: "HALLA", k: "keynote" },
    { s: "15:00", e: "15:15", t: "Coffee Break", v: "Networking Area, 5th floor", room: "COFFEE", k: "break" },
    { s: "15:15", e: "17:15", t: "Technical Sessions, Block 2", who: "SS18–SS33 in 16 parallel rooms", block: 2, v: "3rd floor rooms", room: "F3", k: "sessions" },
    { s: "18:00", e: "20:30", t: "Gala Dinner, Closing Ceremony & Group Photo", v: "Sesan Restaurant, 14 Einstein, Thủ Đức", href: "https://maps.app.goo.gl/Qg7ZKxcSqYVLc81L7", k: "social" }
  ],

  speakers: [
    { id: "nguyen", role: "Keynote 1", name: "Assoc. Prof. Dr. Tran Hoang Nguyen", aff: "The University of Sydney, Australia", img: "img/nguyen.jpg",
      talk: "Why LLM Inference Is a Networking Problem", when: "26 Nov · 10:15–10:45 · Hall A",
      bio: "Assoc. Prof. Dr. Tran Hoang Nguyen is an Associate Professor of Computer Science at the University of Sydney, Australia. His research covers distributed computing, optimization and machine learning. He received his PhD in Electrical and Computer Engineering from Kyung Hee University in 2011, where his dissertation received a best doctoral dissertation award. His research has received support from the National Research Foundation of Korea and the Australian Research Council. He has held editorial responsibilities for journals covering green communications and machine learning for networking." },
    { id: "ochi", role: "Keynote 2", name: "Prof. Dr. Hiroshi Ochi", aff: "Kurume Institute of Technology, Japan", img: "img/ochi.jpg",
      talk: "Wireless AI at the Edge: From Civil Well-Being to Electronic Warfare through Intelligent Spectrum Sensing", when: "26 Nov · 13:30–14:00 · Hall A",
      bio: "Prof. Dr. Hiroshi Ochi is a Distinguished Professor in the Department of Electronic Information Systems, Faculty of Engineering, Kurume Institute of Technology, Japan. He received a PhD in Engineering from Tokyo Metropolitan University in 1991 and an MBA from Kyushu University in 2007. His academic career includes the University of the Ryukyus and Kyushu Institute of Technology. He founded RAIDRIX Inc. in 2005 and has served as Chief Advisor to the JICA EJ-KOSEN Project since 2024. He has contributed to technical education in Viet Nam and chaired international conferences including ISPACS 2018 and SISA 2020." },
    { id: "noreen", role: "Invited talk", name: "Assoc. Prof. Dr. Noreen Izza Arshad", aff: "Universiti Teknologi PETRONAS, Malaysia", img: "img/noreen.jpg",
      talk: "From Virtual Worlds to Real Impact: Human-Centred AI, Extended Reality and Industry Innovation", when: "26 Nov · 14:00–14:30 · Hall A",
      bio: "Assoc. Prof. Dr. Noreen Izza Arshad is affiliated with the Department of Computing at Universiti Teknologi PETRONAS, Malaysia. She earned her bachelor's degree in Information Technology in 2001, a master's degree in Information Management from the University of Strathclyde in 2004, and a PhD in Information Systems from the University of Melbourne in 2014. Her research interests include information systems, knowledge management, digital transformation, AI, educational technology, virtual reality and augmented reality.",
      abs: ["Extended Reality (XR) and Artificial Intelligence (AI) are now mature enough to change how industries train, inspect and make decisions. Yet many immersive and intelligent systems do not get past the demonstration stage. This keynote argues that the cause is seldom the technology itself. More often, the system was designed around the technology rather than the people who must use it. Drawing on industry-funded research and consultancy projects from 2022 to 2026, the talk presents human-centredness as a requirement, not an optional add-on.",
        "Case studies include: augmented reality for gas turbine training, co-designed with trainers at a technical training institute and accepted in full at user acceptance testing; PETRONAS PresentPro 2.0, an AI-driven virtual reality tool for leadership communication built with the PETRONAS Leadership Centre, using AI avatars, real-time feedback and audience simulation (validation showed 100% task completion and 80% trust in AI-generated feedback, alongside honest limits in comfort and realism); and a VR quay crane operator training simulator built with Bintulu Port, with experienced crane operators as co-designers.",
        "The talk also looks at emerging frontiers, including an onshore pipeline digital twin and AI-based corrosion detection for subsea inspection that reports its own reliability. It closes with lessons from the field and a Virtual-to-Real Impact Loop: understand, immerse, make intelligent, validate, and deploy and transfer."] },
    { id: "manavalan", role: "Invited talk", name: "Assoc. Prof. Dr. Balachandran Manavalan", aff: "Sungkyunkwan University, South Korea", img: "img/manavalan.jpg",
      talk: "Transforming Biological Sciences with AI-based Frameworks", when: "26 Nov · 14:30–15:00 · Hall A",
      bio: "Assoc. Prof. Dr. Balachandran Manavalan works in the Department of Integrative Biotechnology at Sungkyunkwan University, South Korea, where he leads the Computational Biology and Bioinformatics Laboratory. He earned his PhD in Computational Biology from Ajou University in 2011 and joined Sungkyunkwan University in 2022. His research applies AI and machine learning to peptide and protein function prediction, RNA modifications, immunoinformatics, multi-omics and biomedical imaging. The official conference letter notes recognition in Stanford's citation-based top 2% scientists listing, ScholarGPS's 2026 bioinformatics ranking, and an SKKU RISING Fellowship in 2026.",
      abs: ["Artificial intelligence is transforming biological sciences by enabling scalable, interpretable, and experimentally actionable prediction frameworks that address foundational bottlenecks in molecular biology and immunoinformatics.",
        "First, a hierarchical multimer Transformer framework for the universal, cross-species prediction of RNA modification sites across mammals. By integrating multi-mer sequence representations with masked self-supervised pretraining on RNAcentral and fine-tuning across 16 human RNA modification types, the model overcomes the modification-specific limitations of conventional tools and generalizes robustly to independent non-human mammalian test sets.",
        "Second, DinoMHC, a sequence-geometric reasoning framework for MHC-I antigen presentation prediction and CD8+ T-cell epitope discovery. Trained on over 698,000 eluted ligand positives and 4.3 million negatives across 130 MHC alleles, DinoMHC achieves state-of-the-art predictive performance, high sensitivity to single-residue mutations, and improved alignment with functional T-cell activity, supported by deep mutational scanning and in-house SARS-CoV-2 validation assays.",
        "Together, these deep learning innovations show how interpretable AI can decode complex sequence-to-function relationships, accelerating RNA biology, rational vaccine design, and translational biomedical discovery."] },
    { id: "tuan", role: "Opening speech", name: "Dr. Tran Ngoc Tuan", aff: "Vice Rector, FPT University · Chairman, EAI FISAT 2026", img: "img/tuan.jpg", when: "26 Nov · 09:00–09:15 · Hall A" },
    { id: "chlamtac", role: "Message from the President of EAI", name: "Prof. Imrich Chlamtac", aff: "European Alliance for Innovation · Honorary Chair", when: "26 Nov · 09:15–09:25 · Hall A" },
    { id: "sherpa", role: "Welcome remarks", name: "H.E. Mr. Tshering W. Sherpa", aff: "Ambassador of India to Viet Nam", when: "26 Nov · 09:25–09:45 · Hall A" },
    { id: "long", role: "Remarks", name: "Mr. Luu Hoang Long", aff: "Director General, Intellectual Property Office of Viet Nam (IPVN), Ministry of Science and Technology", img: "img/long.jpg", when: "26 Nov · 09:45–10:00 · Hall A" }
  ],

  committees: [
    { h: "Honorary Chairs", p: [["Prof. Choong Seon Hong", "Kyung Hee University, South Korea"], ["Prof. Imrich Chlamtac", "European Alliance for Innovation"]] },
    { h: "Chairman", p: [["Dr. Tran Ngoc Tuan", "FPT University, Viet Nam"]] },
    { h: "Vice Chairmen", p: [["Dr. Nguyen Kim Anh", "FPT University, Viet Nam"], ["Assoc. Prof. Dr. Dang Ngoc Minh Duc", "FPT University, Viet Nam"], ["Assoc. Prof. Dr. Ngo Ha Quang Thinh", "FPT University, Viet Nam"], ["Dr. Le Bich Loan", "FPT University, Viet Nam"]] },
    { h: "Local Arrangement Chairs", p: [["Mr. Tran Tuan Anh", "FPT University, Viet Nam"], ["Mrs. Nguyen Thi Ut", "FPT University, Viet Nam"], ["Ms. Nguyen Hoang Thanh Thao", "FPT University, Viet Nam"]] },
    { h: "Technical Program Committee Chairs", p: [["Assoc. Prof. Dr. Tran Hoang Nguyen", "The University of Sydney, Australia"], ["Assoc. Prof. Dr. Balachandran Manavalan", "Sungkyunkwan University, South Korea"], ["Dr. Nguyen Van Dung", "Hung Vuong University of HCM City, Viet Nam"], ["Dr. Nguyen Tuan Cuong", "Vietnamese-German University, Viet Nam"], ["Dr. Phan Thi Dieu Ha", "FPT University, Viet Nam"]] },
    { h: "Technical Program Committee Members", p: [["Dr. Nguyen Thi Cam Huong", "FPT University, Viet Nam"], ["Dr. Huynh Cong Viet Ngu", "FPT University, Viet Nam"], ["Assoc. Prof. Dr. Phan Thi Thu Hong", "FPT University, Viet Nam"], ["Assoc. Prof. Dr. Luu Phuong Vo", "International University, VNU-HCMC, Viet Nam"], ["Assoc. Prof. Dr. Tran Thanh Phuong", "Ton Duc Thang University, Viet Nam"], ["Dr. Do Duc Hao", "Posts and Telecommunications Institute of Technology, HCMC Campus, Viet Nam"], ["Dr. Nguyen Luong Vuong", "FPT University, Viet Nam"], ["Dr. Nguyen Gia Tri", "FPT University, Viet Nam"], ["Dr. Le Thi The Buu", "FPT University, Viet Nam"], ["Dr. Chau Thi Khanh Van", "FPT University, Viet Nam"], ["Dr. Le Thi Xoan", "FPT University, Viet Nam"]] }
  ],

  // Topic grouping for browsing (app-side grouping, not an official track list)
  topics: [
    { k: "biz", n: "Business & economy", ss: [1, 2, 3, 16, 17, 30, 33] },
    { k: "hw", n: "Hardware & chips", ss: [4, 18, 19] },
    { k: "mob", n: "Mobility & robotics", ss: [5, 6, 7, 20] },
    { k: "ml", n: "Core ML & vision", ss: [8, 9, 23, 24, 25] },
    { k: "llm", n: "LLMs & NLP", ss: [10, 11, 12] },
    { k: "se", n: "Software engineering", ss: [13, 27, 28] },
    { k: "sec", n: "Security & comms", ss: [14, 15, 29] },
    { k: "app", n: "Applied AI", ss: [21, 22, 26] },
    { k: "gov", n: "Governance & education", ss: [31, 32] }
  ],

  // Pins on the brochure floor plans (% of image width/height)
  floors: [
    { k: "g", n: "Ground", img: "img/floor-g.jpg", ratio: "2650/1500" },
    { k: "3", n: "3rd", img: "img/floor-3.jpg", ratio: "2650/1550" },
    { k: "4", n: "4th", img: "img/floor-4.jpg", ratio: "2670/1620" },
    { k: "5", n: "5th", img: "img/floor-5.jpg", ratio: "2670/1620" }
  ],
  places: {
    REG: { n: "Registration desk", f: "g", x: 73.0, y: 73.4, note: "Ground floor, next to the conference entrance (Gate 1 side)." },
    HALLA: { n: "Hall A", f: "4", x: 18.0, y: 47.5, also: { f: "5", x: 19.4, y: 46.6 }, note: "Hall A appears on both the 4th and 5th floor plans. Use the lift beside it." },
    COFFEE: { n: "Coffee break · Networking Area", f: "5", x: 13.5, y: 45.7, note: "5th floor, outside Hall A." },
    LUNCH: { n: "Conference lunch", f: "5", x: 34.3, y: 75.3, note: "5th floor lobby." },
    HALLB: { n: "Hall B", f: "3", x: 86.0, y: 80.7, note: "3rd floor, end of the 301–305 corridor (also shown on the 4th floor plan)." },
    "301": { f: "3", x: 55.2, y: 80.7 }, "316": { f: "3", x: 76.8, y: 23.6 }, "317": { f: "3", x: 71.5, y: 23.6 },
    "320": { f: "3", x: 53.0, y: 23.6 }, "321": { f: "3", x: 47.8, y: 23.6 }, "322": { f: "3", x: 42.7, y: 23.6 },
    "323": { f: "3", x: 37.5, y: 23.6 }, "324": { f: "3", x: 32.2, y: 23.6 }, "325": { f: "3", x: 11.9, y: 23.6 },
    "327": { f: "3", x: 11.9, y: 37.9 }, "329": { f: "3", x: 11.9, y: 50.9 }, "331": { f: "3", x: 11.9, y: 63.9 },
    "333": { f: "3", x: 11.9, y: 80.7 }, "335": { f: "3", x: 28.9, y: 80.7 }, "336": { f: "3", x: 34.4, y: 80.7 },
    "337": { f: "3", x: 39.8, y: 80.7 }, "338": { f: "3", x: 45.5, y: 80.7 }
  },

  city: [
    { h: "Historic landmarks", items: [
      ["Notre-Dame Cathedral Basilica", "A prominent city-centre landmark, known for its distinctive architecture and place in Saigon's urban history. Check current access and renovation conditions before visiting."],
      ["Central Post Office", "An architectural landmark near the cathedral, admired for its historic interior and enduring role in the city's civic life."],
      ["Ben Thanh Market", "One of the city's best-known markets for local food, souvenirs and textiles. Confirm prices before purchasing."],
      ["Cho Lon (Chinatown)", "The historic Chinese-Vietnamese commercial district, with traditional shops, temples and a distinctive food culture."]] },
    { h: "Museums & performing arts", items: [
      ["War Remnants Museum", "Historical materials and perspectives on the Viet Nam War and its lasting consequences. Some exhibitions may be emotionally challenging."],
      ["HCMC Museum of Fine Arts", "Vietnamese painting, sculpture and visual culture, housed in a notable historic building."],
      ["CHÀO Show: The Sound of Viet Nam", "Traditional instruments with contemporary staging. 6 Nguyen Sieu Street · cticket.vn/event/chaoshow-in-hcm · published schedule Tuesday–Sunday; confirm date and time."],
      ["Golden Dragon Water Puppet Theatre", "Colourful puppets, folk stories and live traditional music. 55B Nguyen Thi Minh Khai Street · goldendragonwaterpuppet.vn · published showtime 6:30 PM daily; confirm before visiting."]] },
    { h: "Modern city & beyond", items: [
      ["Nguyen Hue Walking Street", "A lively pedestrian boulevard with landmark buildings and cafés, especially popular in the evening."],
      ["Landmark 81 & the Saigon River", "The modern skyline, riverside areas and contemporary commercial spaces."],
      ["Bui Vien Walking Street", "A busy nightlife district of bars and restaurants with an international atmosphere."],
      ["Cu Chi Tunnels", "A historical site outside the city centre showing wartime underground networks. Allow substantial travel time and arrange tours in advance."]] },
    { h: "Taste the city", items: [
      ["Phở", "Fragrant broth, rice noodles, fresh herbs and carefully prepared meat; every region makes it a little differently."],
      ["Bánh mì", "A crisp Vietnamese baguette with savoury fillings, pickled vegetables, herbs and sauces."],
      ["Cơm tấm", "Broken rice with grilled pork, pickled vegetables and traditional sides: a Saigon speciality."],
      ["Vietnamese coffee", "Try cà phê sữa đá (iced, with condensed milk) or cà phê đen đá (black, iced). For traditional cloth-filter cà phê vợt, visit Cheo Leo Café or Cà Phê Vợt Ba Lù in Cho Lon; check opening details first."]] },
    { h: "Restaurants", items: [
      ["Bistro Sông Vie", "Riverside dining in Villa Sông Saigon; Vietnamese, Asian and international influences. 197/2 Nguyen Van Huong Street, An Khanh Ward."],
      ["Cục Gạch Quán", "Home-style Vietnamese dishes in a nostalgic setting, built around sharing. 10 Dang Tat Street."],
      ["Ănăn Saigon", "Street-food traditions reimagined with tasting menus, in the Chợ Cũ market area. 89 Ton That Dam Street."],
      ["CoCo Dining", "Contemporary cuisine from Vietnamese recipes and seasonal ingredients. 143 Nam Ky Khoi Nghia Street."],
      ["The Deck Saigon", "Asian fusion and seafood on the Saigon River, good for sunset meals. 38 Nguyen U Di Street, An Khanh Ward."],
      ["Mặn Mòi", "Vietnamese home cooking in a green, welcoming setting. Suggested location: 32 Street 11, An Khanh Ward."]] }
  ],
  walk: ["Ben Thanh Market", "HCMC Museum of Fine Arts", "Independence Palace", "Notre-Dame Cathedral area", "Saigon Central Post Office"],
  tips: [
    ["Getting around", "Ride-hailing services and taxis are widely used. Allow extra time for traffic, especially at peak hours."],
    ["Weather", "Tropical climate: carry water, dress comfortably and consider rain protection."],
    ["Payments", "Cash is useful for small purchases; many established restaurants and hotels accept cards or e-payments."],
    ["Reservations", "Book ahead for larger groups, formal dinners and popular restaurants."],
    ["Respectful travel", "Follow local guidance at museums, religious and historical sites; ask before photographing people in sensitive settings."],
    ["Planning ahead", "Check opening hours, tickets, transport times and venue details before you go."]
  ]
};
