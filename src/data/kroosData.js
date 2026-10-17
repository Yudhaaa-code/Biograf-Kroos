// ==========================================================================
// TONI KROOS: THE RETROSPECTIVE
// Modeled directly on the exact architecture of Eliud's Running World
// ==========================================================================

export const kroosData = {
  id: {
    nav: {
      story: "Kisah",
      precision: "Presisi Data",
      tour: "Tur Kejayaan",
      timeline: "Kronologi",
      trophies: "34 Trofi",
      gallery: "Galeri",
      quotes: "Kutipan Legenda",
      about: "Tentang Toni",
      boots: "Sepatu 11pro",
      masterclass: "Masterclass",
      podcast: "Podcast Luppen",
      foundation: "Yayasan",
      tribute: "Danke Toni",
      contact: "Kontak",
      actionBtn: "Jelajahi Karier"
    },
    hero: {
      num: "6",
      syllableFirst: "ucl",
      syllableMid: "tit",
      syllableEnd: "les",
      titleSecondFirst: "ton",
      titleSecondMid: "i kro",
      titleSecondEnd: "os",
      footerLabel: "Sepanjang 17 musim dan 1.075 pertandingan, Toni Kroos membuktikan bahwa sepak bola adalah permainan pikiran. 34 gelar juara di puncak tertinggi.",
      nextUpHeading: "Puncak Karier",
      nextUpLabel: "Wembley 2024 • Abadi Selamanya"
    },
    story: {
      kicker: "The Story",
      heading: "Toni Kroos World Legacy",
      lead: "Selama 17 tahun di panggung termegah sepak bola dunia, Toni Kroos memenangkan 34 gelar mayor dan 6 trofi Liga Champions. Dan ia mengakhirinya tepat di puncak tertinggi.",
      body: "Mimpi terbesar Toni selalu sederhana: memainkan sepak bola dengan presisi murni, tanpa kepanikan, dan mengendalikan jalannya laga dari kepalanya sebelum kakinya menyentuh bola. Dari lapangan pasir di Greifswald hingga malam bersejarah di Maracanã dan Santiago Bernabéu, Kroos meninggalkan jejak tak terhapuskan dalam sejarah sepak bola modern sebagai salah satu pengatur ritme permainan paling anggun dan mematikan di dunia."
    },
    stats: {
      uclCompleted: "6 dari 6",
      uclLabel: "Final Liga Champions Dimenangkan",
      matches: "1.075",
      matchesLabel: "Pertandingan Resmi Karier",
      accuracy: "94.6%",
      accuracyLabel: "Akurasi Umpan Sepanjang Karier",
      trophies: "34",
      trophiesLabel: "Trofi Bergengsi Dimenangkan"
    },
    precisionRadar: {
      kicker: "Metronom Sepak Bola",
      title: "Anatomi Data & Geometri Umpan",
      subtitle: "Mengapa para pelatih elite dan analis sepak bola modern menempatkan Kroos sebagai konduktor paling dingin di dunia.",
      accuracyBadge: "94.6% Sepanjang Karier",
      radarTitle: "Profil Radar Metronom Kroos vs Rata-rata Lini Tengah Elite Eropa",
      metrics: [
        { label: "Akurasi Umpan", value: 94.6, benchmark: 84.0, desc: "Rata-rata tertinggi di 5 liga top Eropa selama satu dekade penuh." },
        { label: "Umpan Diagonal Jauh", value: 91.2, benchmark: 68.5, desc: "Akurasi bola lambung lintas sisi tanpa merusak momentum lari rekan." },
        { label: "Ketahanan Tekanan Pressing", value: 96.8, benchmark: 76.2, desc: "Hampir mustahil kehilangan bola saat dikurung 2-3 pemain lawan." },
        { label: "Visi Spasial & Scanning", value: 99.0, benchmark: 80.5, desc: "Rata-rata 3,4 kali pemindaian area per 5 detik sebelum menerima bola." },
        { label: "Progresi Serangan", value: 93.5, benchmark: 72.0, desc: "Umpan membelah garis pertahanan vertikal menuju sepertiga akhir lawan." },
        { label: "Disiplin & Kontrol Emosi", value: 97.4, benchmark: 78.0, desc: "Hanya 1 kartu merah dalam 1.075 laga profesional sepanjang karier." }
      ],
      corridorsTitle: "Koridor Geometri Lapangan Favorit",
      corridorsHint: "Pilih koridor taktis untuk melihat bagaimana Toni Kroos memanipulasi tempo pertandingan:",
      corridors: [
        {
          id: "halfspace",
          name: "Koridor Half-Space Kiri (Zona 14)",
          metric: "62% Distribusi Bola",
          desc: "Kroos sengaja turun ke sisi kiri antara bek tengah dan bek sayap. Di sini ia bebas dari pressing nomor 9 lawan dan memiliki sudut pandang 180 derajat ke seluruh lapangan."
        },
        {
          id: "diagonal",
          name: "Diagonal Switch ke Sisi Kanan",
          metric: "91.2% Akurasi Jarak Jauh",
          desc: "Bola lambung menyilang setinggi dada langsung ke ruang kosong Dani Carvajal atau Rodrygo, memaksa blok pertahanan lawan bergeser mendadak."
        },
        {
          id: "setpiece",
          name: "Pengiriman Bola Mati Berujung Gol",
          metric: "Assist Final UCL 2024",
          desc: "Tendangan sudut melengkung berkecepatan terukur tepat ke tiang dekat, seperti assist penentu gol Carvajal pada menit ke-74 final Wembley."
        }
      ]
    },
    tour: {
      kicker: "Tur Kejayaan",
      titleMain1: "Glory",
      titleMain2: "World",
      slides: [
        {
          id: "munich",
          name: "München",
          location: "Allianz Arena",
          country: "Jerman",
          date: "2007 - 2014",
          color: "#2b4c7e",
          summary: "Treble Winners bersejarah 2013, 3x Bundesliga, 3x DFB-Pokal, dan lahirnya bakat maestro muda Jerman.",
          completed: true
        },
        {
          id: "leverkusen",
          name: "Leverkusen",
          location: "BayArena",
          country: "Jerman",
          date: "2009 - 2010",
          color: "#6b705c",
          summary: "Kawah candradimuka di bawah Jupp Heynckes: 10 gol, 12 assist, dan rekor 24 laga Bundesliga tanpa kekalahan.",
          completed: true
        },
        {
          id: "rio",
          name: "Maracanã",
          location: "Rio de Janeiro",
          country: "Brasil",
          date: "13 Juli 2014",
          color: "#2d6a4f",
          summary: "Juara Dunia FIFA 2014 di stadion legendaris Maracanã setelah menghancurkan tuan rumah Brasil 7-1 di semifinal.",
          completed: true
        },
        {
          id: "madrid",
          name: "Bernabéu",
          location: "Madrid",
          country: "Spanyol",
          date: "2014 - 2024",
          color: "#b0892e",
          summary: "Satu dekade dinasti emas Los Blancos: 5 gelar Liga Champions, 4 La Liga, dan trinitas legendaris KCM.",
          completed: true
        },
        {
          id: "wembley",
          name: "Wembley",
          location: "London",
          country: "Inggris",
          date: "1 Juni 2024",
          color: "#3a6b7e",
          summary: "Final ke-6 Liga Champions: assist penentu untuk Carvajal menit ke-74 dan perpisahan sempurna di puncak Eropa.",
          completed: true
        }
      ]
    },
    careerTimeline: {
      kicker: "Kronologi Karier",
      title: "Dari Pantai Baltik Menuju Puncak Dunia",
      subtitle: "Jejak langkah perjalanan 17 musim profesional seorang maestro yang tak pernah tergesa-gesa di lapangan.",
      filterAll: "Semua Babak",
      filters: [
        { id: "all", label: "Semua Era" },
        { id: "bayern", label: "Bayern München" },
        { id: "leverkusen", label: "Bayer Leverkusen" },
        { id: "madrid", label: "Real Madrid" },
        { id: "germany", label: "Timnas Jerman" }
      ],
      events: [
        {
          year: "1997 - 2006",
          category: "bayern",
          club: "Greifswalder SC & Hansa Rostock",
          title: "Fondasi Tanpa Sepatu di Pantai Baltik",
          desc: "Ayahnya, Roland, melatih Toni bermain tanpa sepatu di lapangan pasir rumput keras agar sentuhan pertama telapak kakinya peka terhadap gravitasi bola.",
          highlight: "Bakat Nomor 1 Jerman Usia Muda",
          stats: "U17 Golden Ball 2007"
        },
        {
          year: "2007",
          category: "bayern",
          club: "FC Bayern München",
          title: "Debut Bundesliga Termuda dalam Sejarah Klub",
          desc: "Pada 26 September 2007, usia 17 tahun 265 hari, Kroos melakoni debut melawan Energie Cottbus dan langsung memberi dua assist dalam 18 menit untuk Miroslav Klose.",
          highlight: "2 Assist dalam 18 Menit",
          stats: "Debut Usia 17 Tahun"
        },
        {
          year: "2009 - 2010",
          category: "leverkusen",
          club: "Bayer Leverkusen (Pinjaman)",
          title: "Transformasi Maestro di Bawah Jupp Heynckes",
          desc: "Peminjaman krusial selama 18 bulan di BayArena. Diberi kebebasan sebagai gelandang serang, membawa Leverkusen mencatatkan 24 laga tanpa kekalahan di Bundesliga.",
          highlight: "Pemain Terbaik Bulanan Kicker 3x Beruntun",
          stats: "10 Gol • 12 Assist"
        },
        {
          year: "2013",
          category: "bayern",
          club: "FC Bayern München",
          title: "Treble Winners Bersejarah Bersama Bayern",
          desc: "Menjadi jantung permainan Bayern asuhan Heynckes yang memenangkan Bundesliga, DFB-Pokal, dan Liga Champions di Wembley sebelum cedera di perempat final vs Juventus.",
          highlight: "Gelar Liga Champions Pertama",
          stats: "Treble Winner 2012/13"
        },
        {
          year: "2014",
          category: "germany",
          club: "Timnas Jerman (Die Mannschaft)",
          title: "Juara Piala Dunia 2014 & Malam Keajaiban Belo Horizonte",
          desc: "Menghancurkan Brasil 7-1 dengan mencetak 2 gol dalam 69 detik (rekor Piala Dunia), lalu mengangkat trofi emas Piala Dunia di Stadion Maracanã Rio de Janeiro.",
          highlight: "Man of the Match Semifinal vs Brasil",
          stats: "Rating Tertinggi Castrol Index 9.79"
        },
        {
          year: "2014",
          category: "madrid",
          club: "Real Madrid",
          title: "Pendaratan di Santiago Bernabéu Senilai €25 Juta",
          desc: "Disebut sebagai salah satu transfer paling menguntungkan dalam sejarah sepak bola. Kroos langsung mengambil alih komando lini tengah Los Blancos dengan seragam nomor 8.",
          highlight: "Akurasi Umpan 93% di Musim Perdana",
          stats: "Biaya Transfer €25M"
        },
        {
          year: "2016 - 2018",
          category: "madrid",
          club: "Real Madrid",
          title: "Three-Peat Bersejarah Liga Champions Bersama MCK",
          desc: "Bersama Luka Modrić dan Casemiro di bawah Zinedine Zidane, Kroos memimpin Madrid mencetak sejarah era modern: menjuarai Liga Champions 3 musim berturut-turut (Milano, Cardiff, Kyiv).",
          highlight: "3x Juara Eropa Beruntun",
          stats: "Trio Lini Tengah Terhebat Abad 21"
        },
        {
          year: "2018",
          category: "germany",
          club: "Timnas Jerman",
          title: "Tendangan Bebas Ajaib Menit 94:42 vs Swedia",
          desc: "Saat Jerman bermain 10 orang dan di ambang eliminasi, Kroos melepaskan tendangan bebas melengkung dari sudut sempit ke pojok atas gawang Swedia pada detik-detik akhir.",
          highlight: "Gol Paling Dramatis Piala Dunia 2018",
          stats: "Menit 94:42 • Sudut 17 Derajat"
        },
        {
          year: "2022",
          category: "madrid",
          club: "Real Madrid",
          title: "Gelar UCL Ke-5 di Stade de France Paris",
          desc: "Mengalahkan Liverpool di final setelah serangkaian comeback magis tak masuk akal di Bernabéu melawan PSG, Chelsea, dan Manchester City.",
          highlight: "Gelar Liga Champions Ke-5",
          stats: "95% Akurasi Umpan di Fase Gugur"
        },
        {
          year: "2024",
          category: "madrid",
          club: "Real Madrid & Timnas Jerman",
          title: "Perpisahan di Puncak Tertinggi: Final Wembley & Euro 2024",
          desc: "Mengumumkan pensiun saat masih berada di puncak performa. Memberikan assist penentu di final Liga Champions ke-6 nya di Wembley, lalu memimpin Jerman di Euro 2024 sebelum gantung sepatu selamanya.",
          highlight: "6 Gelar Liga Champions (Rekor Bersama)",
          stats: "1.075 Pertandingan • 34 Trofi"
        }
      ]
    },
    trophyCabinet: {
      kicker: "Kabinet 34 Gelar",
      title: "Lemari Trofi Sang Maestro",
      subtitle: "Koleksi medali emas, piala benua, dan mahkota dunia yang dimenangkan sepanjang 17 musim profesional.",
      allFilter: "Semua Trofi (34)",
      filterContinental: "Eropa & Dunia (17)",
      filterLeague: "Liga Domestik (7)",
      filterCup: "Piala & Supercopa (10)",
      celebrateHint: "Klik trofi mana saja untuk melihat detail laga final & data penentu kemenangan!",
      trophies: [
        {
          id: "ucl",
          name: "UEFA Champions League",
          count: 6,
          category: "continental",
          badge: "Rekor Juara Terbanyak Era Modern",
          club: "Bayern München (1x) • Real Madrid (5x)",
          years: "2013, 2016, 2017, 2018, 2022, 2024",
          icon: "Trophy",
          finals: [
            { year: "2013", opponent: "Borussia Dortmund (2-1)", venue: "Wembley Stadium, London", stat: "Cedera QF, Gelar Perdana Bersama Bayern" },
            { year: "2016", opponent: "Atlético Madrid (1-1, 5-3 pen)", venue: "San Siro, Milan", stat: "Akurasi umpan 92%, dominasi 72 menit" },
            { year: "2017", opponent: "Juventus (4-1)", venue: "Millennium Stadium, Cardiff", stat: "Masterclass orkestrasi 96% umpan sukses" },
            { year: "2018", opponent: "Liverpool (3-1)", venue: "NSC Olimpiyskiy, Kyiv", stat: "Menuntaskan hattrick gelar UCL Zidane" },
            { year: "2022", opponent: "Liverpool (1-0)", venue: "Stade de France, Paris", stat: "Gelar ke-5 bersama Los Blancos" },
            { year: "2024", opponent: "Borussia Dortmund (2-0)", venue: "Wembley Stadium, London", stat: "Assist penentu gol Carvajal menit 74 di laga terakhir klubnya" }
          ]
        },
        {
          id: "worldcup",
          name: "FIFA World Cup",
          count: 1,
          category: "continental",
          badge: "Puncak Tertinggi Sepak Bola Dunia",
          club: "Timnas Jerman (Die Mannschaft)",
          years: "2014",
          icon: "Globe",
          finals: [
            { year: "2014", opponent: "Argentina (1-0 aet)", venue: "Estádio do Maracanã, Rio de Janeiro", stat: "Distribusi umpan 109 kali, 4 peluang emas tercipta, Juara Dunia" }
          ]
        },
        {
          id: "clubworldcup",
          name: "FIFA Club World Cup",
          count: 6,
          category: "continental",
          badge: "Rekor Pemain Tersukses di Ajang Antarklub Dunia",
          club: "Bayern München (1x) • Real Madrid (5x)",
          years: "2013, 2014, 2016, 2017, 2018, 2022",
          icon: "ShieldAlert",
          finals: [
            { year: "2013-2022", opponent: "Raja Casablanca, San Lorenzo, Kashima Antlers, Grêmio, Al Ain, Al Hilal", venue: "Maroko, UEA, Jepang", stat: "Selalu bermain sebagai starter di 6 final antarklub dunia tanpa pernah kalah" }
          ]
        },
        {
          id: "supercup",
          name: "UEFA Super Cup",
          count: 5,
          category: "continental",
          badge: "Raja Piala Super Eropa",
          club: "Bayern München (1x) • Real Madrid (4x)",
          years: "2013, 2014, 2017, 2022, 2023",
          icon: "Award",
          finals: [
            { year: "2014", opponent: "Sevilla (2-0)", venue: "Cardiff City Stadium", stat: "Laga debut resmi bersama Real Madrid, langsung mengangkat trofi" }
          ]
        },
        {
          id: "laliga",
          name: "La Liga Santander",
          count: 4,
          category: "league",
          badge: "Penguasa Takhta Spanyol",
          club: "Real Madrid",
          years: "2016/17, 2019/20, 2021/22, 2023/24",
          icon: "Sparkles",
          finals: [
            { year: "4 Musim", opponent: "306 Penampilan La Liga", venue: "Santiago Bernabéu & Spanyol", stat: "Rata-rata 93.8% akurasi umpan per musim selama 10 tahun di Spanyol" }
          ]
        },
        {
          id: "bundesliga",
          name: "Bundesliga Jerman",
          count: 3,
          category: "league",
          badge: "Mahkota Tertinggi Jerman",
          club: "FC Bayern München",
          years: "2007/08, 2012/13, 2013/14",
          icon: "Shield",
          finals: [
            { year: "3 Musim", opponent: "173 Penampilan Bundesliga", venue: "Allianz Arena & BayArena", stat: "23 gol dan 42 assist di kompetisi tertinggi Jerman" }
          ]
        },
        {
          id: "dfbpokal",
          name: "DFB-Pokal",
          count: 3,
          category: "cup",
          badge: "Piala Domestik Jerman",
          club: "FC Bayern München",
          years: "2008, 2013, 2014",
          icon: "Medal",
          finals: [
            { year: "3 Gelar", opponent: "Borussia Dortmund, Stuttgart", venue: "Olympiastadion Berlin", stat: "Dua kali menjuarai Double Winners domestik bersama Bayern" }
          ]
        },
        {
          id: "copadelrey",
          name: "Copa del Rey",
          count: 1,
          category: "cup",
          badge: "Piala Raja Spanyol",
          club: "Real Madrid",
          years: "2023",
          icon: "Crown",
          finals: [
            { year: "2023", opponent: "Osasuna (2-1)", venue: "Estadio de La Cartuja, Sevilla", stat: "Menyempurnakan koleksi seluruh trofi yang mungkin dimenangkan di Spanyol" }
          ]
        },
        {
          id: "supercopa",
          name: "Supercopa de España & DFL-Supercup",
          count: 5,
          category: "cup",
          badge: "Piala Super Domestik",
          club: "Real Madrid (4x) • Bayern München (1x)",
          years: "2012 (DFL), 2017, 2020, 2022, 2024 (Spanyol)",
          icon: "Flame",
          finals: [
            { year: "5 Trofi", opponent: "Barcelona, Atlético Madrid, Athletic Club", venue: "Madrid, Jeddah, Riyadh", stat: "Mencetak gol langsung dari tendangan sudut vs Valencia di semifinal 2020" }
          ]
        }
      ]
    },
    quotesLegends: {
      kicker: "Suara Para Legenda",
      title: "Pengakuan Dari Mereka yang Menyaksikan",
      subtitle: "Bagaimana pelatih terhebat dunia, rekan setim, dan rival abadi memandang orkestra sang nomor 8.",
      quotes: [
        {
          name: "Zinedine Zidane",
          role: "Pelatih Real Madrid (Juara UCL 3x Beruntun)",
          text: "Menonton Toni Kroos berlatih adalah sebuah kenikmatan murni bagi siapa pun yang mencintai sepak bola. Saya tidak pernah melihatnya kehilangan bola. Permainannya begitu elegan, tenang, dan tanpa cacat.",
          tag: "The Manager"
        },
        {
          name: "Luka Modrić",
          role: "Mitra Lini Tengah Real Madrid (2014 - 2024)",
          text: "Sulit diungkapkan dengan kata-kata betapa saya menikmati bermain di sampingnya. Kami saling memahami gerakan satu sama lain hanya lewat pandangan mata sekilas, tanpa perlu berbicara satu kata pun.",
          tag: "The Partner"
        },
        {
          name: "Pep Guardiola",
          role: "Pelatih Bayern München (2013 - 2014)",
          text: "Toni adalah salah satu pemain paling berani yang pernah saya temui dalam hidup saya. Semakin tinggi tekanan dan kepanikan di lapangan, semakin tenang pikirannya mengambil keputusan.",
          tag: "The Tactician"
        },
        {
          name: "Carlo Ancelotti",
          role: "Pelatih Real Madrid",
          text: "Kroos adalah pemain yang unik di dunia, tidak ada profil yang menyerupai dirinya. Dia tidak pernah gugup, tidak pernah terburu-buru, dan keputusannya selalu 100% tepat untuk kebutuhan tim.",
          tag: "The Boss"
        },
        {
          name: "Casemiro",
          role: "Gelandang Jangkar Trinitas KCM",
          text: "Bermain dengan Kroos dan Modrić membuat pekerjaan saya terasa sangat mudah. Yang harus saya lakukan hanyalah merebut bola, mengopernya ke Toni, dan membiarkan dia mengatur seluruh konser.",
          tag: "The Anchor"
        },
        {
          name: "Cristiano Ronaldo",
          role: "Top Skor Sepanjang Masa Real Madrid",
          text: "Kroos adalah pengumpan paling presisi yang pernah bermain bersama saya. Ketika Toni memegang bola, Anda tahu bola akan tiba tepat di langkah terbaik Anda tanpa perlu memperlambat lari.",
          tag: "The Finisher"
        }
      ]
    },
    about: {
      kicker: "Tentang Toni",
      lead: "Toni Kroos (lahir 4 Januari 1990 di Greifswald, Jerman) diakui luas oleh para pelatih dan rekan sejawat sebagai salah satu gelandang terbaik dan paling berdarah dingin dalam sejarah sepak bola.",
      grid: [
        {
          id: 1,
          title: "Bermain Tanpa Sepatu di Pesisir Baltik",
          desc: "Ayahnya, Roland, menyuruh Toni berlatih di lapangan pasir tanpa sepatu agar melatih titik tumpu kaki merasakan langsung bola.",
          image: "/assets/kroos_philosophy_1.jpg"
        },
        {
          id: 2,
          title: "Peminjaman Krusial di Bayer Leverkusen",
          desc: "Di bawah arahan Jupp Heynckes, Toni ditempatkan sebagai 'Zehner' bebas dan membawa Leverkusen memuncaki klasemen liga.",
          image: "/assets/kroos_leverkusen.jpg"
        },
        {
          id: 3,
          title: "Pembantaian 7-1 dan Pesta Maracanã 2014",
          desc: "Kroos mencetak 2 gol dalam 69 detik vs Brasil dan menjadi pemain terbaik rating Castrol Index di Piala Dunia 2014.",
          image: "/assets/kroos_brazil_71.jpg"
        },
        {
          id: 4,
          title: "Trinitas Lini Tengah Legendaris MCK",
          desc: "Bersama Luka Modric dan Casemiro, Kroos membentuk orkestra lini tengah yang memenangkan 3 Liga Champions beruntun.",
          image: "/assets/kroos_kcm_trinity.jpg"
        },
        {
          id: 5,
          title: "The Last Dance di Final Wembley 2024",
          desc: "Kroos menepati janjinya untuk pensiun saat masih di puncak, mengangkat piala Liga Champions ke-6 sebelum gantung sepatu.",
          image: "/assets/hero_toni_kroos.jpg"
        }
      ]
    },
    boots: {
      kicker: "Artefak Koleksi",
      title: "Sepatu Putih Adidas Adipure 11pro",
      quote: "Staf kitman bahkan tidak diizinkan menyentuhnya. Saya selalu mencuci, menyikat, dan merawatnya sendiri di wastafel kamar ganti. Jika sepatu saya tidak bersih sempurna, pikiran saya tidak bisa tenang bermain bola.",
      upper: "Kulit Kanguru Taurus Asli",
      sole: "Custom Sol Traxion Adizero F50 (2010)",
      years: "11 Musim Tanpa Berganti Model (2013-2024)"
    },
    masterclass: {
      kicker: "Masterclass Umpan",
      title: "Anatomi Presisi & Visi Spasial",
      subtitle: "Bagaimana Toni Kroos mendikte tempo dan membongkar garis pertahanan terketat di dunia.",
      tacticalPrinciples: [
        {
          num: "01",
          heading: "Orientasi Tubuh Sebelum Menerima Bola",
          body: "Kroos selalu memindai lapangan 3 kali dalam 5 detik sebelum bola tiba, mengetahui opsi umpan sebelum sentuhan pertama."
        },
        {
          num: "02",
          heading: "Pergeseran Poros ke Half-Space Kiri",
          body: "Menjatuhkan diri di antara bek tengah kiri dan bek sayap untuk menarik garis pressing pertama dan membuka koridor diagonal."
        },
        {
          num: "03",
          heading: "Bobot & Putaran Umpan Sempurna",
          body: "Setiap umpan selalu mendarat lembut tepat di kaki terkuat rekan setim dalam kecepatan lari tanpa harus memperlambat langkah."
        }
      ],
      canvasPitchTitle: "Simulasi Umpan Interaktif",
      canvasPitchHint: "Klik di mana saja pada lapangan untuk menguji lintasan umpan Kroos"
    },
    podcastVault: {
      kicker: "Ruang Obrolan Eksklusif",
      title: "Einfach mal Luppen",
      subtitle: "Cerita jujur tanpa filter bersama saudaranya Felix Kroos tentang kehidupan di balik sorot lampu stadion.",
      badge: "Podcast Sepak Bola #1 Jerman",
      listenNote: "Simulasi klip suara & curahan hati sang maestro:",
      episodes: [
        {
          id: "boots_sink",
          title: "Misteri Wastafel & Sepatu Putih 11pro",
          season: "Episode #84 • Rahasia Kamar Ganti",
          quote: "Orang mengira saya takhayul. Faktanya, sepatu saya adalah instrumen pekerjaan saya. Seorang pianis tidak akan memainkan piano yang tutsnya kotor atau berguncang. Saya harus merasakan kulit sepatu itu menyatu dengan kaki saya.",
          tag: "Ritual Personal",
          duration: "4:12",
          timestamp: "12:45",
          timestampSec: 765,
          audioUrl: "https://audio.podigee-cdn.net/2615509-m-44cc2eed5be996c0ba4a6acf36d7e3fb.mp3?source=feed"
        },
        {
          id: "maracana_brazil",
          title: "Malam 7-1 di Belo Horizonte & Instruksi Jogi Löw",
          season: "Episode #112 • Kenangan Piala Dunia",
          quote: "Saat jeda babak pertama kami sudah unggul 5-0. Pelatih Joachim Löw berkata tegas di ruang ganti: 'Jangan sekali-kali mempermalukan Brasil dengan pamer trik murahan. Tetap hormati mereka dengan terus bermain serius.' Itu sikap terhormat.",
          tag: "Piala Dunia 2014",
          duration: "5:45",
          timestamp: "24:18",
          timestampSec: 1458,
          audioUrl: "https://audio.podigee-cdn.net/2486862-m-9252bae3cac3d47231dbc43ed46e1515.mp3?source=feed"
        },
        {
          id: "retire_at_34",
          title: "Mengapa Pensiun di Usia 34 Saat Masih Terbaik di Dunia?",
          season: "Episode #178 • Keputusan Terbesar",
          quote: "Mimpi saya bukan bermain sampai usia 38 tahun dan duduk di bangku cadangan atau pindah ke liga yang tidak kompetitif. Saya ingin orang mengingat Toni Kroos pada versi tertingginya: mengangkat trofi Liga Champions di Wembley.",
          tag: "Filosofi Hidup",
          duration: "6:20",
          timestamp: "31:05",
          timestampSec: 1865,
          audioUrl: "https://audio.podigee-cdn.net/2580955-m-22e58ba6ee857ce4b88f359fc22da2f6.mp3?source=feed"
        },
        {
          id: "kcm_brotherhood",
          title: "Trinitas KCM: Casemiro, Modrić & Saya",
          season: "Episode #145 • Orkestra Bernabéu",
          quote: "Kami bertiga adalah tiga elemen yang saling melengkapi sempurna. Case adalah benteng pertahanan, Luka adalah akselerasi magis, dan saya adalah tempo yang menyeimbangkan detak jantung permainan.",
          tag: "KCM Dynasty",
          duration: "3:58",
          timestamp: "18:50",
          timestampSec: 1130,
          audioUrl: "https://audio.podigee-cdn.net/2594719-m-d9399e986bd7884548bd5d1db2c37d06.mp3?source=feed"
        }
      ]
    },
    foundation: {
      kicker: "Yayasan",
      title: "The Toni Kroos Foundation",
      lead: "Semua anak berhak mendapatkan kesempatan hidup sehat, senyuman, dan masa depan yang penuh harapan.",
      body: "Didirikan pada tahun 2015, Toni Kroos Stiftung didedikasikan penuh untuk membiayai perawatan medis intensif, kursi roda khusus, dan terapi bagi anak-anak dengan penyakit kritis dan keluarga mereka di seluruh Jerman. Bagi Toni, kebahagiaan terbesar bukanlah medali emas, melainkan melihat senyum anak-anak yang mendapatkan harapan baru dalam hidupnya.",
      btnDonate: "Kunjungi Situs Yayasan",
      url: "https://www.tonikroos-stiftung.de/"
    },
    tributeWall: {
      kicker: "Dinding Penghormatan",
      title: "Danke, Toni",
      subtitle: "Tinggalkan pesan perpisahan, doa, dan kenangan terbaik Anda untuk sang jenderal lini tengah Jerman.",
      badge: "Buku Tamu Penggemar Sedunia",
      formTitle: "Tuliskan Pesan Anda untuk Toni Kroos",
      inputName: "Nama Anda",
      inputLocation: "Kota / Negara",
      inputMemory: "Momen Favorit Anda (contoh: Gol vs Swedia 2018 / Final Wembley 2024)",
      inputMessage: "Pesan untuk Toni...",
      btnSubmit: "Kirim Pesan ke Dinding",
      successMsg: "Terima kasih! Pesan apresiasi Anda telah tersimpan di dinding kehormatan.",
      filterAll: "Semua Pesan",
      preloaded: [
        {
          id: 1,
          name: "Alejandro Morales",
          location: "Madrid, Spanyol",
          flag: "🇪🇸",
          memory: "Final Wembley 2024",
          message: "Gracias por 10 años de pura magia en el Bernabéu, Toni. Nunca olvidaremos tu asistencia a Carvajal. El fútbol pierde a su mejor cirujano.",
          likes: 342,
          date: "Juni 2024"
        },
        {
          id: 2,
          name: "Maximilian Weber",
          location: "München, Jerman",
          flag: "🇩🇪",
          memory: "Piala Dunia 2014 & Maracanã",
          message: "Danke Toni! Dari Greifswald hingga Maracanã, kamu membuktikan bahwa ketenangan Jerman di atas lapangan adalah seni tertinggi. Legenda abadi!",
          likes: 289,
          date: "Juli 2024"
        },
        {
          id: 3,
          name: "Reza Pratama",
          location: "Jakarta, Indonesia",
          flag: "🇮🇩",
          memory: "Tendangan Bebas Menit 95 vs Swedia",
          message: "Terima kasih telah mengajarkan kami bahwa sepak bola dimainkan dengan otak dan ketenangan jiwa. Selamat menikmati masa pensiun yang megah, Maestro!",
          likes: 415,
          date: "Agustus 2024"
        },
        {
          id: 4,
          name: "Kenji Sato",
          location: "Tokyo, Jepang",
          flag: "🇯🇵",
          memory: "Sepatu Adidas Adipure 11pro",
          message: "Your dedication to the white 11pro boots and precision passing inspired an entire generation in Asia. Truly an irreplaceable football artist.",
          likes: 198,
          date: "September 2024"
        }
      ]
    },
    contact: {
      heading: "Tetap Terhubung dengan Warisan Toni Kroos",
      sub: "Ikuti akademi pelatihan resmi dan proyek sosial generasi berikutnya.",
      academyTitle: "Toni Kroos Academy",
      academyDesc: "Kurikulum teknik sepak bola digital gratis dan pelatihan langsung di Madrid.",
      academyBtn: "Unduh Aplikasi Akademi",
      socialLabel: "Media Sosial Resmi",
      copyright: "© Toni Kroos Tribute Archive 2026. Inspired by Eliud's Running World."
    }
  },

  en: {
    nav: {
      story: "The Story",
      precision: "Data Precision",
      tour: "Glory Tour",
      timeline: "Timeline",
      trophies: "34 Trophies",
      gallery: "Gallery",
      quotes: "Legends Quotes",
      about: "About Toni",
      boots: "11pro Boots",
      masterclass: "Masterclass",
      podcast: "Luppen Podcast",
      foundation: "Foundation",
      tribute: "Danke Toni",
      contact: "Contact",
      actionBtn: "Explore Career"
    },
    hero: {
      num: "6",
      syllableFirst: "ucl",
      syllableMid: "tit",
      syllableEnd: "les",
      titleSecondFirst: "ton",
      titleSecondMid: "i kro",
      titleSecondEnd: "os",
      footerLabel: "Across 17 seasons and 1,075 matches, Toni Kroos proved football is played in the mind. 34 major trophies won at the absolute peak.",
      nextUpHeading: "Pinnacle Legacy",
      nextUpLabel: "Wembley 2024 • Forever Immortal"
    },
    story: {
      kicker: "The Story",
      heading: "Toni Kroos World Legacy",
      lead: "Across 17 seasons on football's greatest stage, Toni Kroos won 34 major trophies and 6 UEFA Champions League titles. And he bowed out right at the summit.",
      body: "Toni's ambition was always pure: to conduct football with surgeon-like precision, zero panic, and total spatial awareness before the ball even touched his boot. From the sandy pitches of Baltic Greifswald to immortal nights in Rio de Janeiro and Madrid, Kroos established an indelible legacy as one of the most serene and lethal midfield conductors the game has ever seen."
    },
    stats: {
      uclCompleted: "6 of 6",
      uclLabel: "Champions League Finals Won",
      matches: "1,075",
      matchesLabel: "Official Matches Played",
      accuracy: "94.6%",
      accuracyLabel: "Career Passing Accuracy",
      trophies: "34",
      trophiesLabel: "Major Silverware Won"
    },
    precisionRadar: {
      kicker: "Football Metronome",
      title: "Data Analytics & Passing Geometry",
      subtitle: "Why elite tacticians and modern analytics departments rank Kroos as the calmest playmaker in history.",
      accuracyBadge: "94.6% Career Passing Rate",
      radarTitle: "Kroos Metronome Radar Profile vs European Midfield Elite Average",
      metrics: [
        { label: "Passing Accuracy", value: 94.6, benchmark: 84.0, desc: "Highest rolling average across Europe's top 5 leagues over a continuous decade." },
        { label: "Long Diagonal Balls", value: 91.2, benchmark: 68.5, desc: "Surgical cross-field aerial switches delivered without breaking runners' strides." },
        { label: "Press Resistance", value: 96.8, benchmark: 76.2, desc: "Virtually impossible to dispossess when trapped between 2-3 pressing opponents." },
        { label: "Spatial Scanning IQ", value: 99.0, benchmark: 80.5, desc: "Averaging 3.4 shoulder scans per 5 seconds prior to ball reception." },
        { label: "Progressive Passing", value: 93.5, benchmark: 72.0, desc: "Line-breaking vertical ground deliveries penetrating the defensive block." },
        { label: "Disciplinary Composure", value: 97.4, benchmark: 78.0, desc: "Only 1 single red card across 1,075 official matches in 17 professional seasons." }
      ],
      corridorsTitle: "Signature Pitch Geometric Corridors",
      corridorsHint: "Select a tactical corridor to explore how Toni Kroos manipulated continental match tempo:",
      corridors: [
        {
          id: "halfspace",
          name: "Left Half-Space Overload (Zone 14)",
          metric: "62% Ball Distribution",
          desc: "Dropping between the left center-back and full-back to completely eliminate the opponent's initial pressing line with a 180-degree view of the pitch."
        },
        {
          id: "diagonal",
          name: "Diagonal Switch to Right Wing",
          metric: "91.2% Long-Range Accuracy",
          desc: "Laser-guided chest-high diagonal balls into the path of Dani Carvajal or Rodrygo, violently shifting the opponent's defensive structure."
        },
        {
          id: "setpiece",
          name: "Clinical Set-Piece Delivery",
          metric: "UCL Final 2024 Assist",
          desc: "Whipping calculated corner deliveries to the near post at exact trajectory, as demonstrated in the 74th-minute winner at Wembley."
        }
      ]
    },
    tour: {
      kicker: "Glory Tour",
      titleMain1: "Glory",
      titleMain2: "World",
      slides: [
        {
          id: "munich",
          name: "Munich",
          location: "Allianz Arena",
          country: "Germany",
          date: "2007 - 2014",
          color: "#2b4c7e",
          summary: "Historic 2013 Treble, 3x Bundesliga, 3x DFB-Pokal, and the inception of Germany's young midfield metronome.",
          completed: true
        },
        {
          id: "leverkusen",
          name: "Leverkusen",
          location: "BayArena",
          country: "Germany",
          date: "2009 - 2010",
          color: "#6b705c",
          summary: "Masterclass loan under Jupp Heynckes: 10 goals, 12 assists, and a 24-game unbeaten Bundesliga streak.",
          completed: true
        },
        {
          id: "rio",
          name: "Maracanã",
          location: "Rio de Janeiro",
          country: "Brazil",
          date: "July 13, 2014",
          color: "#2d6a4f",
          summary: "2014 World Champion at the legendary Maracanã following the breathtaking 7-1 dismantling of hosts Brazil.",
          completed: true
        },
        {
          id: "madrid",
          name: "Bernabéu",
          location: "Madrid",
          country: "Spain",
          date: "2014 - 2024",
          color: "#b0892e",
          summary: "A decade of European sovereignty: 5 Champions League crowns, 4 La Liga titles, and the legendary KCM trio.",
          completed: true
        },
        {
          id: "wembley",
          name: "Wembley",
          location: "London",
          country: "United Kingdom",
          date: "June 1, 2024",
          color: "#3a6b7e",
          summary: "6th Champions League final: decisive corner assist to Carvajal in minute 74, retiring at the apex.",
          completed: true
        }
      ]
    },
    careerTimeline: {
      kicker: "Career Timeline",
      title: "From the Baltic Coast to the Roof of the World",
      subtitle: "The 17-season journey of a maestro who was never in a rush on a football pitch.",
      filterAll: "All Eras",
      filters: [
        { id: "all", label: "All Eras" },
        { id: "bayern", label: "Bayern Munich" },
        { id: "leverkusen", label: "Bayer Leverkusen" },
        { id: "madrid", label: "Real Madrid" },
        { id: "germany", label: "Germany" }
      ],
      events: [
        {
          year: "1997 - 2006",
          category: "bayern",
          club: "Greifswalder SC & Hansa Rostock",
          title: "Barefoot Foundations on the Baltic Coast",
          desc: "His father Roland insisted Toni train barefoot on sandy grass to hone tactile ball control and sensory center-of-gravity mastery.",
          highlight: "Germany's #1 Youth Prodigy",
          stats: "U17 Golden Ball 2007"
        },
        {
          year: "2007",
          category: "bayern",
          club: "FC Bayern Munich",
          title: "Youngest Bundesliga Debutant in Club History",
          desc: "On September 26, 2007, aged 17 years and 265 days, Kroos debuted against Energie Cottbus, providing two assists within 18 minutes for Miroslav Klose.",
          highlight: "2 Assists in 18 Debut Minutes",
          stats: "Debut at 17 Years Old"
        },
        {
          year: "2009 - 2010",
          category: "leverkusen",
          club: "Bayer Leverkusen (Loan)",
          title: "Maestro Transformation Under Jupp Heynckes",
          desc: "An 18-month breakthrough loan at the BayArena. Unleashed as a creative number 10, driving Leverkusen to a 24-game unbeaten streak in the Bundesliga.",
          highlight: "3x Consecutive Kicker Player of the Month",
          stats: "10 Goals • 12 Assists"
        },
        {
          year: "2013",
          category: "bayern",
          club: "FC Bayern Munich",
          title: "Historic Treble Triumph with Bayern",
          desc: "Pivotal heartbeat of Heynckes' treble-winning side claiming the Bundesliga, DFB-Pokal, and Champions League at Wembley before a quarter-final injury vs Juventus.",
          highlight: "First Champions League Crown",
          stats: "Treble Winner 2012/13"
        },
        {
          year: "2014",
          category: "germany",
          club: "Germany (Die Mannschaft)",
          title: "2014 World Champion & The 7-1 Miracle",
          desc: "Decimated Brazil 7-1 with two goals in 69 seconds (World Cup record), subsequently lifting the FIFA World Cup trophy at Rio's immortal Maracanã.",
          highlight: "Man of the Match in 7-1 Semifinal",
          stats: "Highest Castrol Index Rating 9.79"
        },
        {
          year: "2014",
          category: "madrid",
          club: "Real Madrid",
          title: "Arrival at the Santiago Bernabéu for €25m",
          desc: "Widely hailed as the greatest transfer bargain in football history. Kroos immediately seized ownership of Real Madrid's engine room donning the No. 8.",
          highlight: "93% Passing Rate in Debut Season",
          stats: "€25m Transfer Fee"
        },
        {
          year: "2016 - 2018",
          category: "madrid",
          club: "Real Madrid",
          title: "Historic Champions League Three-Peat with KCM",
          desc: "Alongside Luka Modrić and Casemiro under Zinedine Zidane, Kroos marshaled Madrid to an unprecedented modern three-peat (Milan, Cardiff, Kyiv).",
          highlight: "3 Consecutive European Crowns",
          stats: "Greatest Midfield Trio of the 21st Century"
        },
        {
          year: "2018",
          category: "germany",
          club: "Germany",
          title: "Minute 94:42 Curler vs Sweden",
          desc: "With 10-man Germany on the precipice of elimination, Kroos struck a magnificent curling free-kick into the top far corner with seconds left on the clock.",
          highlight: "Most Dramatic Goal of the 2018 World Cup",
          stats: "Minute 94:42 • 17° Angle"
        },
        {
          year: "2022",
          category: "madrid",
          club: "Real Madrid",
          title: "5th European Cup in Paris",
          desc: "Defeating Liverpool in the final following an iconic saga of miraculous comeback victories at the Bernabéu against PSG, Chelsea, and Manchester City.",
          highlight: "5th Champions League Title",
          stats: "95% Passing Accuracy in Knockouts"
        },
        {
          year: "2024",
          category: "madrid",
          club: "Real Madrid & Germany",
          title: "Retiring at the Summit: Wembley Final & Euro 2024",
          desc: "Retiring at the absolute peak of his powers. Provided the decisive corner assist in his 6th Champions League final at Wembley, capping an immortal 17-year career.",
          highlight: "6 Champions League Titles (Joint Record)",
          stats: "1,075 Matches • 34 Major Trophies"
        }
      ]
    },
    trophyCabinet: {
      kicker: "34 Silverware Cabinet",
      title: "The Maestro's Trophy Vault",
      subtitle: "Every gold medal, continental cup, and world crown lifted across 17 professional seasons.",
      allFilter: "All Trophies (34)",
      filterContinental: "Europe & World (17)",
      filterLeague: "Domestic Leagues (7)",
      filterCup: "Domestic Cups & Supercups (10)",
      celebrateHint: "Click any trophy card to inspect final match details & championship-winning stats!",
      trophies: [
        {
          id: "ucl",
          name: "UEFA Champions League",
          count: 6,
          category: "continental",
          badge: "Most Titles in Modern Champions League Era",
          club: "Bayern Munich (1x) • Real Madrid (5x)",
          years: "2013, 2016, 2017, 2018, 2022, 2024",
          icon: "Trophy",
          finals: [
            { year: "2013", opponent: "Borussia Dortmund (2-1)", venue: "Wembley Stadium, London", stat: "Injured QF, Maiden Title with Bayern" },
            { year: "2016", opponent: "Atlético Madrid (1-1, 5-3 pen)", venue: "San Siro, Milan", stat: "92% passing accuracy, governed 72 minutes" },
            { year: "2017", opponent: "Juventus (4-1)", venue: "Millennium Stadium, Cardiff", stat: "Masterclass tempo orchestrator with 96% accuracy" },
            { year: "2018", opponent: "Liverpool (3-1)", venue: "NSC Olimpiyskiy, Kyiv", stat: "Completed Zidane's historic UCL hattrick" },
            { year: "2022", opponent: "Liverpool (1-0)", venue: "Stade de France, Paris", stat: "5th European crown with Los Blancos" },
            { year: "2024", opponent: "Borussia Dortmund (2-0)", venue: "Wembley Stadium, London", stat: "Corner assist for Carvajal in 74th min in final club appearance" }
          ]
        },
        {
          id: "worldcup",
          name: "FIFA World Cup",
          count: 1,
          category: "continental",
          badge: "The Pinnacle of World Football",
          club: "Germany (Die Mannschaft)",
          years: "2014",
          icon: "Globe",
          finals: [
            { year: "2014", opponent: "Argentina (1-0 aet)", venue: "Estádio do Maracanã, Rio de Janeiro", stat: "109 passes distributed, 4 chances created, World Champion" }
          ]
        },
        {
          id: "clubworldcup",
          name: "FIFA Club World Cup",
          count: 6,
          category: "continental",
          badge: "Most Successful Player in Club World Cup History",
          club: "Bayern Munich (1x) • Real Madrid (5x)",
          years: "2013, 2014, 2016, 2017, 2018, 2022",
          icon: "ShieldAlert",
          finals: [
            { year: "2013-2022", opponent: "Raja Casablanca, San Lorenzo, Kashima Antlers, Grêmio, Al Ain, Al Hilal", venue: "Morocco, UAE, Japan", stat: "Started all 6 club world finals without suffering a single defeat" }
          ]
        },
        {
          id: "supercup",
          name: "UEFA Super Cup",
          count: 5,
          category: "continental",
          badge: "Continental Super Cup Hegemony",
          club: "Bayern Munich (1x) • Real Madrid (4x)",
          years: "2013, 2014, 2017, 2022, 2023",
          icon: "Award",
          finals: [
            { year: "2014", opponent: "Sevilla (2-0)", venue: "Cardiff City Stadium", stat: "Official debut with Real Madrid, instantly lifting silverware" }
          ]
        },
        {
          id: "laliga",
          name: "La Liga Santander",
          count: 4,
          category: "league",
          badge: "Spanish League Dominance",
          club: "Real Madrid",
          years: "2016/17, 2019/20, 2021/22, 2023/24",
          icon: "Sparkles",
          finals: [
            { year: "4 Seasons", opponent: "306 La Liga Appearances", venue: "Santiago Bernabéu & Spain", stat: "Rolling 93.8% pass accuracy across an entire decade in Spain" }
          ]
        },
        {
          id: "bundesliga",
          name: "German Bundesliga",
          count: 3,
          category: "league",
          badge: "German Championship Supremacy",
          club: "FC Bayern Munich",
          years: "2007/08, 2012/13, 2013/14",
          icon: "Shield",
          finals: [
            { year: "3 Seasons", opponent: "173 Bundesliga Appearances", venue: "Allianz Arena & BayArena", stat: "23 goals and 42 assists in German top-flight competition" }
          ]
        },
        {
          id: "dfbpokal",
          name: "DFB-Pokal",
          count: 3,
          category: "cup",
          badge: "German Domestic Cup",
          club: "FC Bayern Munich",
          years: "2008, 2013, 2014",
          icon: "Medal",
          finals: [
            { year: "3 Titles", opponent: "Borussia Dortmund, Stuttgart", venue: "Olympiastadion Berlin", stat: "Twice secured domestic German double triumphs" }
          ]
        },
        {
          id: "copadelrey",
          name: "Copa del Rey",
          count: 1,
          category: "cup",
          badge: "Spanish Cup",
          club: "Real Madrid",
          years: "2023",
          icon: "Crown",
          finals: [
            { year: "2023", opponent: "Osasuna (2-1)", venue: "Estadio de La Cartuja, Seville", stat: "Completed the clean sweep of every domestic club trophy in Spain" }
          ]
        },
        {
          id: "supercopa",
          name: "Supercopa de España & DFL-Supercup",
          count: 5,
          category: "cup",
          badge: "Domestic Supercups",
          club: "Real Madrid (4x) • Bayern Munich (1x)",
          years: "2012 (DFL), 2017, 2020, 2022, 2024 (Spain)",
          icon: "Flame",
          finals: [
            { year: "5 Trophies", opponent: "Barcelona, Atlético Madrid, Athletic Club", venue: "Madrid, Jeddah, Riyadh", stat: "Scored directly from a corner kick against Valencia in 2020 semifinal" }
          ]
        }
      ]
    },
    quotesLegends: {
      kicker: "In The Words of Legends",
      title: "Testimonials From Those Who Witnessed",
      subtitle: "How the game's greatest tacticians, midfield partners, and legendary peers viewed the No. 8 conductor.",
      quotes: [
        {
          name: "Zinedine Zidane",
          role: "Real Madrid Manager (3x Champions League Winner)",
          text: "Watching Toni Kroos train was pure luxury for anyone who loves football. I never saw him lose a single ball. His game was so serene, elegant, and technically spotless.",
          tag: "The Manager"
        },
        {
          name: "Luka Modrić",
          role: "Real Madrid Midfield Partner (2014 - 2024)",
          text: "Words can barely describe the privilege of sharing the midfield with him. We understood each other through a mere glance without uttering a single sentence.",
          tag: "The Partner"
        },
        {
          name: "Pep Guardiola",
          role: "Bayern Munich Manager (2013 - 2014)",
          text: "Toni is one of the bravest players I have ever coached. The higher the pressing chaos and panic around him, the calmer his decisions became.",
          tag: "The Tactician"
        },
        {
          name: "Carlo Ancelotti",
          role: "Real Madrid Manager",
          text: "Kroos is entirely unique in modern football; no other player possesses his profile. He is never rushed, never flustered, and his choices are always 100% correct.",
          tag: "The Boss"
        },
        {
          name: "Casemiro",
          role: "Anchor of the KCM Midfield Trinity",
          text: "Playing behind Kroos and Modrić made my job effortless. All I had to do was win the ball, pass it to Toni, and watch him conduct the entire orchestra.",
          tag: "The Anchor"
        },
        {
          name: "Cristiano Ronaldo",
          role: "Real Madrid All-Time Top Scorer",
          text: "Kroos is the most precise passer I ever played with. When Toni received the ball, you knew it would arrive on your stride without ever breaking momentum.",
          tag: "The Finisher"
        }
      ]
    },
    about: {
      kicker: "About Toni",
      lead: "Toni Kroos (born January 4, 1990 in Greifswald, Germany) is universally regarded by coaches and peers as one of the coolest and most technically gifted playmakers in history.",
      grid: [
        {
          id: 1,
          title: "Barefoot Beginnings on the Baltic Coast",
          desc: "His father, Roland, made him train barefoot on sandy grass to instinctively master the ball's center of gravity.",
          image: "/assets/kroos_philosophy_1.jpg"
        },
        {
          id: 2,
          title: "Pivotal Loan at Bayer Leverkusen",
          desc: "Under Jupp Heynckes, Toni blossomed into an all-phase playmaker leading Leverkusen to the top of the league.",
          image: "/assets/kroos_leverkusen.jpg"
        },
        {
          id: 3,
          title: "The 7-1 Demolition & 2014 Maracanã Triumph",
          desc: "Kroos scored twice in 69 seconds vs Brazil and earned the highest Castrol Index rating at the 2014 World Cup.",
          image: "/assets/kroos_brazil_71.jpg"
        },
        {
          id: 4,
          title: "The Legendary MCK Midfield Trinity",
          desc: "Alongside Luka Modric and Casemiro, Kroos governed Europe winning three consecutive Champions League crowns.",
          image: "/assets/kroos_kcm_trinity.jpg"
        },
        {
          id: 5,
          title: "The Last Dance at Wembley 2024",
          desc: "Fulfilling his promise to retire at the very peak, lifting his 6th Champions League trophy before hanging up his boots.",
          image: "/assets/hero_toni_kroos.jpg"
        }
      ]
    },
    boots: {
      kicker: "Collection Artifact",
      title: "Adidas Adipure 11pro White Boots",
      quote: "Madrid's kitmen were not even allowed to touch them. I washed, brushed, and dried them personally in the sink. If my boots are not immaculate, my mind cannot be at ease on the pitch.",
      upper: "Genuine Kangaroo Taurus Leather",
      sole: "Custom Adizero F50 Hybrid Outsole (2010)",
      years: "11 Consecutive Seasons in One Model (2013-2024)"
    },
    masterclass: {
      kicker: "Passing Masterclass",
      title: "Spatial Geometry & Metronome Precision",
      subtitle: "How Toni Kroos manipulated defensive lines and dictated continental tempo.",
      tacticalPrinciples: [
        {
          num: "01",
          heading: "Pre-Orientation Body Shape",
          body: "Scanning three times in five seconds before reception, deciding the release before his boot touches leather."
        },
        {
          num: "02",
          heading: "Left Half-Space Overload",
          body: "Dropping between the left center-back and full-back to bypass the initial pressing line and unlock diagonal switches."
        },
        {
          num: "03",
          heading: "Immaculate Weight & Trajectory",
          body: "Pacing the ball precisely into the receiver's front foot, preserving forward momentum without braking stride."
        }
      ],
      canvasPitchTitle: "Interactive Passing Pitch",
      canvasPitchHint: "Click anywhere on the pitch to simulate Kroos's laser delivery"
    },
    podcastVault: {
      kicker: "Exclusive Audio Vault",
      title: "Einfach mal Luppen",
      subtitle: "Unfiltered, intimate conversations with brother Felix Kroos on life behind the stadium spotlight.",
      badge: "Germany's #1 Sports Podcast",
      listenNote: "Simulated audio clips & candid revelations from the maestro:",
      episodes: [
        {
          id: "boots_sink",
          title: "The Sink Ritual & The White 11pro Boots",
          season: "Episode #84 • Dressing Room Secrets",
          quote: "People think it's superstition. In reality, my boots are my work tools. A concert pianist wouldn't play on sticky or rattling keys. I must feel the leather as a direct extension of my foot.",
          tag: "Personal Ritual",
          duration: "4:12",
          timestamp: "12:45",
          timestampSec: 765,
          audioUrl: "https://audio.podigee-cdn.net/2615509-m-44cc2eed5be996c0ba4a6acf36d7e3fb.mp3?source=feed"
        },
        {
          id: "maracana_brazil",
          title: "The 7-1 Night in Belo Horizonte & Jogi Löw's Order",
          season: "Episode #112 • World Cup Memories",
          quote: "At halftime we were up 5-0. Joachim Löw told us firmly: 'Do not showboat or humiliate Brazil. Honor them by continuing to play with 100% focus and seriousness.' That was true respect.",
          tag: "2014 World Cup",
          duration: "5:45",
          timestamp: "24:18",
          timestampSec: 1458,
          audioUrl: "https://audio.podigee-cdn.net/2486862-m-9252bae3cac3d47231dbc43ed46e1515.mp3?source=feed"
        },
        {
          id: "retire_at_34",
          title: "Why Retire at 34 at the Pinnacle of World Football?",
          season: "Episode #178 • The Ultimate Decision",
          quote: "My dream was never to play until 38 sitting on the bench or cashing out in an uncompetitive league. I wanted people to forever remember Toni Kroos at his peak: lifting the European Cup at Wembley.",
          tag: "Life Philosophy",
          duration: "6:20",
          timestamp: "31:05",
          timestampSec: 1865,
          audioUrl: "https://audio.podigee-cdn.net/2580955-m-22e58ba6ee857ce4b88f359fc22da2f6.mp3?source=feed"
        },
        {
          id: "kcm_brotherhood",
          title: "The KCM Trinity: Casemiro, Modrić & Myself",
          season: "Episode #145 • Bernabéu Orchestra",
          quote: "We were three complementary souls. Case was the fortress, Luka was the sudden spark of magic, and I was the heartbeat regulating the rhythm.",
          tag: "KCM Dynasty",
          duration: "3:58",
          timestamp: "18:50",
          timestampSec: 1130,
          audioUrl: "https://audio.podigee-cdn.net/2594719-m-d9399e986bd7884548bd5d1db2c37d06.mp3?source=feed"
        }
      ]
    },
    foundation: {
      kicker: "Foundation",
      title: "The Toni Kroos Foundation",
      lead: "All children deserve access to healthcare, hope, and the chance to experience childhood joy.",
      body: "Founded in 2015, the Toni Kroos Stiftung finances specialized medical care, custom wheelchairs, and emergency respite for children with severe and terminal illnesses throughout Germany. For Toni, true fulfillment was never just gold medals, but providing life-changing support for vulnerable children and their families.",
      btnDonate: "Visit Foundation Website",
      url: "https://www.tonikroos-stiftung.de/"
    },
    tributeWall: {
      kicker: "Global Tribute Wall",
      title: "Danke, Toni",
      subtitle: "Leave your farewell note, gratitude, and favorite memory for Germany's midfield maestro.",
      badge: "Worldwide Fan Guestbook",
      formTitle: "Leave Your Farewell Tribute for Toni Kroos",
      inputName: "Your Name",
      inputLocation: "City / Country",
      inputMemory: "Favorite Memory (e.g. Free Kick vs Sweden 2018 / Wembley 2024)",
      inputMessage: "Your message for Toni...",
      btnSubmit: "Post Tribute to Wall",
      successMsg: "Thank you! Your heartfelt tribute has been added to the Hall of Honor.",
      filterAll: "All Messages",
      preloaded: [
        {
          id: 1,
          name: "Alejandro Morales",
          location: "Madrid, Spain",
          flag: "🇪🇸",
          memory: "Wembley Final 2024",
          message: "Gracias por 10 años de pura magia en el Bernabéu, Toni. Nunca olvidaremos tu asistencia a Carvajal. El fútbol pierde a su mejor cirujano.",
          likes: 342,
          date: "June 2024"
        },
        {
          id: 2,
          name: "Maximilian Weber",
          location: "Munich, Germany",
          flag: "🇩🇪",
          memory: "2014 World Cup & Maracanã",
          message: "Danke Toni! From Greifswald to the Maracanã, you proved German composure on the pitch is the highest art form. An eternal legend!",
          likes: 289,
          date: "July 2024"
        },
        {
          id: 3,
          name: "Reza Pratama",
          location: "Jakarta, Indonesia",
          flag: "🇮🇩",
          memory: "95th-min Free Kick vs Sweden",
          message: "Thank you for showing us that football is governed by intellect and inner serenity. Enjoy your well-earned retirement, Maestro!",
          likes: 415,
          date: "August 2024"
        },
        {
          id: 4,
          name: "Kenji Sato",
          location: "Tokyo, Japan",
          flag: "🇯🇵",
          memory: "White Adidas Adipure 11pro",
          message: "Your dedication to the white 11pro boots and surgical passing inspired an entire generation in Asia. Truly an irreplaceable football artist.",
          likes: 198,
          date: "September 2024"
        }
      ]
    },
    contact: {
      heading: "Stay Connected with Toni Kroos's Legacy",
      sub: "Follow the official digital football academy and grassroots youth initiatives.",
      academyTitle: "Toni Kroos Academy",
      academyDesc: "Free global technical training app and live coaching camps in Madrid.",
      academyBtn: "Download Academy App",
      socialLabel: "Official Channels",
      copyright: "© Toni Kroos Tribute Archive 2026. Inspired by Eliud's Running World."
    }
  }
};
