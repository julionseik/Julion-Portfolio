export interface CertificateItem {
  id: string;
  number: string;
  titleId: string;
  titleEn: string;
  date: string;
  issueDateFormatted: string;
  category: 'programming' | 'networking' | 'systems';
  issuer: string;
  signatory: string;
  frontImage: string;
  backImage: string;
  syllabus: { id: string; en: string }[];
  highlightTags: string[];
  summaryId: string;
  summaryEn: string;
}

export interface ProjectItem {
  id: string;
  titleId: string;
  titleEn: string;
  category: string;
  role: string;
  techStack: string[];
  descriptionId: string;
  descriptionEn: string;
  highlightsId: string[];
  highlightsEn: string[];
  featured: boolean;
  linkText?: string;
}

export interface SkillCategory {
  titleId: string;
  titleEn: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    descriptionId: string;
    descriptionEn: string;
  }[];
}

export const getAsset = (path: string): string => {
  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
};

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Soleman Julion Seik",
    shortName: "Julion",
    degree: "S.Kom",
    titleId: "Lulusan Sistem Informasi (S.Kom) - Fakultas FIKTI Universitas Gunadarma",
    titleEn: "Information Systems Graduate (B.Comp) - FIKTI Gunadarma University",
    statusBadgeId: "Terbuka untuk Peluang Kerja (Fresh Graduate)",
    statusBadgeEn: "Open to Work (Fresh Graduate)",
    faculty: "Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI)",
    major: "Sistem Informasi",
    university: "Universitas Gunadarma",
    graduationPeriod: "2021 – 2026",
    gpa: "3.4",
    email: "julionseik@gmail.com",
    phone: "+62 821-2407-5799",
    whatsappClean: "6282124075799",
    location: "Bekasi Barat, Jawa Barat, Indonesia (17412)",
    linkedin: "https://www.linkedin.com/in/soleman-julion-seik-26325a222/",
    photoUrl: getAsset('/assets/aistudio/profile_graduation_hd.jpeg'),
    photoOriginalUrl: getAsset('/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.07.23_AM_85edee10.jpeg'),
    cvPdfUrl: getAsset('/assets/aistudio/CV_cc5ce228.pdf'),
    cvPreviewUrl: getAsset('/assets/cv_preview.png'),
    allCertificatesPdfUrl: getAsset('/assets/aistudio/Semua_Sertif_Kursus_2bc59717.pdf'),
    bioId:
      "Lulusan Jurusan Sistem Informasi, Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI) Universitas Gunadarma dengan IPK 3.4. Memiliki pondasi analitis dan teknis yang kokoh dalam rekayasa perangkat lunak, arsitektur basis data, serta perancangan sistem informasi yang selaras dengan proses bisnis industri. Berpengalaman membangun aplikasi web berbasis TypeScript, React.js, dan SQLite, serta antusias dalam implementasi agen Artificial Intelligence (AI).",
    bioEn:
      "Fresh Graduate in Information Systems from the Faculty of Computer Science and Information Technology (FIKTI), Gunadarma University (GPA 3.4). Possesses a strong analytical and technical foundation in software engineering, database architecture, and translating complex business requirements into robust digital solutions. Experienced in modern web development with TypeScript, React.js, and SQLite, and passionate about exploring AI agents.",
  },

  stats: [
    { labelId: "IPK / GPA", labelEn: "Cumulative GPA", value: "3.4", sub: "FIKTI Gunadarma" },
    { labelId: "Sertifikasi Resmi", labelEn: "Official Certifications", value: "7", sub: "Universitas Gunadarma" },
    { labelId: "Spesialisasi", labelEn: "Core Specialization", value: "IS & Dev", sub: "Web & Basis Data" },
  ],

  education: [
    {
      period: "2021 – 2026",
      degreeId: "Sarjana Komputer (S.Kom) - Sistem Informasi",
      degreeEn: "Bachelor of Computer Science (S.Kom) - Information Systems",
      institution: "Universitas Gunadarma",
      facultyId: "Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI)",
      facultyEn: "Faculty of Computer Science and Information Technology (FIKTI)",
      gpa: "3.4",
      descriptionId:
        "Menyelesaikan studi kesarjanaan dengan fokus komprehensif pada Analisis & Desain Sistem Berorientasi Objek (UML), Rekayasa Perangkat Lunak Web, Manajemen Basis Data Relasional, Pemrograman Jaringan Komputer Cisco, serta Perencanaan Sumberdaya Perusahaan (ERP).",
      descriptionEn:
        "Completed undergraduate studies focusing on Object-Oriented System Analysis & Design (UML), Web Software Engineering, Relational Database Management, Cisco Computer Networking, and Enterprise Resource Planning (ERP).",
      thesisTitleId: "Proyek Akademik: Sistem E-Commerce Suku Cadang Alat Berat Berbasis TypeScript & SQLite",
      thesisTitleEn: "Academic Project: Heavy Equipment Spare Parts E-Commerce System using TypeScript & SQLite",
    },
  ],

  workExperience: [
    {
      period: "2020",
      roleId: "Intern (Magang Operasional & Administrasi)",
      roleEn: "Intern (Operational & Administrative)",
      company: "Bank Indonesia",
      location: "Jakarta, Indonesia",
      tasksId: [
        "Membantu penataan dan digitalisasi dokumen operasional perbankan guna menjamin keteraturan, keterlacakan, dan kepatuhan arsip lembaga.",
        "Menjalankan tugas-tugas administratif dengan cermat dan tepat waktu sesuai arahan supervisor dan SOP Bank Indonesia.",
        "Mendukung tim divisi dalam berbagai aktivitas operasional harian dan koordinasi arus dokumen kerja.",
      ],
      tasksEn: [
        "Assisted in organizing and managing critical banking documentation ensuring systematic archiving and strict compliance.",
        "Executed daily administrative and operational duties strictly adhering to supervisor instructions and formal SOPs.",
        "Supported the division team with various operational tasks, record verification, and daily administrative workflows.",
      ],
      badge: "Institutional Internship",
    },
  ],

  certificates: [
    {
      id: "cert-app-dev-design",
      number: "NO. 468916",
      titleId: "Desain Pengembangan Aplikasi",
      titleEn: "Application Development Design",
      date: "23 September - 28 September 2024",
      issueDateFormatted: "28 September 2024",
      category: "systems",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_09.png'),
      backImage: getAsset('/assets/certificates/cert_page_10.png'),
      highlightTags: ["System Development", "Clean Code Best Practices", "OOP", "Database Design"],
      summaryId: "Pelatihan komprehensif metodologi perancangan perangkat lunak enterprise, prinsip efisiensi penulisan kode, pemrograman berorientasi objek, serta arsitektur basis data relasional.",
      summaryEn: "Comprehensive training in enterprise software design methodologies, clean code efficiency guidelines, object-oriented concepts, and robust database architecture.",
      syllabus: [
        { id: "Pengenalan Metode Pengembangan Sistem", en: "Introduction of System Development Method" },
        { id: "Pengenalan Best Practice dan Guidelines Efisiensi Dalam Menulis Kode Program", en: "Introduction to Best Practice and Efficiency Guidelines in Writing Program Code" },
        { id: "Konsep Pemrograman Terstruktur", en: "Structural Programming Concepts" },
        { id: "Konsep Pemrograman Berorientasi Objek", en: "Object Oriented Programming Concept" },
        { id: "Merancang Database dalam Aplikasi", en: "Designing Databases in Applications" },
        { id: "Studi Kasus Perancangan Pengembangan Aplikasi", en: "Case Study of Application Development Design" },
      ],
    },
    {
      id: "cert-wan-cisco",
      number: "NO. 337141",
      titleId: "Pemrograman Jaringan Untuk Wide Area Menggunakan Cisco Router Untuk Tingkat Menengah",
      titleEn: "Wide Area Network Using Cisco Router for Intermediate",
      date: "Agustus 2024",
      issueDateFormatted: "19 Agustus 2024",
      category: "networking",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_03.png'),
      backImage: getAsset('/assets/certificates/cert_page_04.png'),
      highlightTags: ["Cisco WAN", "OSPF & EIGRP", "NAT & DHCP", "Network Security ACL"],
      summaryId: "Konfigurasi tingkat menengah infrastruktur jaringan WAN pada Cisco Router, routing dinamis multi-area, keamanan berbasis Access Control List, dan translasi alamat jaringan.",
      summaryEn: "Intermediate WAN infrastructure configuration on Cisco Routers, dynamic multi-protocol routing, network security via Access Control Lists, and NAT/DHCP services.",
      syllabus: [
        { id: "Arsitektur Wide Area Network (WAN)", en: "Architecture of Wide Area Network (WAN) Using Cisco" },
        { id: "Pengenalan Subnetting & VLSM", en: "Introduction of Subnetting & VLSM" },
        { id: "Konfigurasi Protokol EIGRP", en: "Configuration of Protocol EIGRP" },
        { id: "Konfigurasi Protokol OSPF", en: "Configuration of Protocol OSPF" },
        { id: "Konfigurasi NAT dan DHCP", en: "Configuration of NAT and DHCP" },
        { id: "Konfigurasi Protokol PPP", en: "Configuration of Protocol PPP" },
        { id: "Konfigurasi Protokol Frame Relay", en: "Configuration of Protocol Frame Relay" },
        { id: "Keamanan Menggunakan ACL (Access Control List)", en: "Security Using ACL" },
      ],
    },
    {
      id: "cert-java-intermediate",
      number: "NO. 552200",
      titleId: "Pemrograman Java (J2SE) Untuk Tingkat Menengah",
      titleEn: "Java for Intermediate (J2SE)",
      date: "Februari 2024",
      issueDateFormatted: "19 Februari 2024",
      category: "programming",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_07.png'),
      backImage: getAsset('/assets/certificates/cert_page_08.png'),
      highlightTags: ["Java Swing GUI", "MySQL Database", "Socket Programming", "Network Programming"],
      summaryId: "Pengembangan aplikasi desktop Java tingkat lanjut dengan GUI interaktif, konektivitas database MySQL, pemrograman socket TCP/IP, serta manipulasi data transaksi.",
      summaryEn: "Advanced Java desktop engineering with interactive GUI, relational MySQL database integration, network socket programming, and data transaction manipulation.",
      syllabus: [
        { id: "Graphical User Interface Menggunakan Bahasa Pemrograman Java", en: "Graphical User Interface Using Java Programming" },
        { id: "Pengenalan Database Pada Java Menggunakan MySQL", en: "Introduction of Database on Java Using MySQL" },
        { id: "Operasi Database Dengan Java (Bagian 1)", en: "Database Operation on Java (1)" },
        { id: "Operasi Database Dengan Java (Bagian 2)", en: "Database Operation on Java (2)" },
        { id: "Java Applet", en: "Java Applet" },
        { id: "Multimedia Pada Java", en: "Multimedia on Java" },
        { id: "Pemrograman Internet Dan Jaringan Pada Java", en: "Internet and Network Programming on Java" },
        { id: "Mengenal Socket Menggunakan Bahasa Pemrograman Java", en: "Introduction of Socket Using Java Programming Language" },
      ],
    },
    {
      id: "cert-lan-cisco",
      number: "NO. 552302",
      titleId: "Pemrograman Jaringan Untuk Lokal Area Menggunakan Cisco Router",
      titleEn: "Local Area Network Using Cisco Router",
      date: "Agustus 2023",
      issueDateFormatted: "21 Agustus 2023",
      category: "networking",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_13.png'),
      backImage: getAsset('/assets/certificates/cert_page_14.png'),
      highlightTags: ["LAN Architecture", "Cisco Catalyst", "VLAN Segmentation", "Routing & Switching"],
      summaryId: "Implementasi jaringan lokal berskala enterprise, konfigurasi Cisco IOS Command Line, perancangan segmentasi VLAN, serta routing statis & dinamis pada Cisco Catalyst.",
      summaryEn: "Enterprise Local Area Network deployment, Cisco IOS CLI administration, VLAN segmentation architecture, and static & dynamic routing on Cisco switches and routers.",
      syllabus: [
        { id: "Arsitektur LAN", en: "Architecture LAN" },
        { id: "Konfigurasi Menggunakan Cisco IOS", en: "Configuration Using Cisco IOS" },
        { id: "Pengenalan Subnetting dan CIDR", en: "Introduction Subnetting and CIDR" },
        { id: "Teori Dasar Routing dan Switching", en: "Basic Concept Routing and Switching" },
        { id: "Konfigurasi Static Routing Menggunakan Cisco Router", en: "Config. Static Routing Using Cisco Router" },
        { id: "Konfigurasi Dynamic Routing Menggunakan Cisco Router", en: "Config. Dynamic Routing Using Cisco Router" },
        { id: "Pengenalan VLAN", en: "Introduction VLAN" },
        { id: "Konfigurasi VLAN Menggunakan Cisco Catalyst", en: "Configuration VLAN Using Cisco Catalyst" },
      ],
    },
    {
      id: "cert-java-beginner",
      number: "NO. 051713",
      titleId: "Pemrograman Java (J2SE) Untuk Tingkat Pemula",
      titleEn: "Java Programming for Beginner (J2SE)",
      date: "Februari 2023",
      issueDateFormatted: "20 Februari 2023",
      category: "programming",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_01.png'),
      backImage: getAsset('/assets/certificates/cert_page_02.png'),
      highlightTags: ["Core Java", "OOP Principles", "Multithreading", "Exception Handling"],
      summaryId: "Pemahaman fundamental bahasa pemrograman berorientasi objek Java, struktur class & object, pewarisan (inheritance), enkapsulasi, polimorfisme, dan multithreading.",
      summaryEn: "Core mastery of Object-Oriented Java syntax, classes, inheritance, polymorphism, encapsulation, exception handling, and multithreading processes.",
      syllabus: [
        { id: "Class, Object, Method pada JAVA", en: "Class, Object, Method on Java" },
        { id: "Overloading Method, Constructor Dan Access Modifier", en: "Overload Method, Constructor & Access Modifier" },
        { id: "Inheritance, Polimorfisme, Interface", en: "Inheritance, Polymorphism, Interface" },
        { id: "Penanganan Kesalahan (Exception Handling)", en: "Exception Handling" },
        { id: "Penggunaan Text Application", en: "Using Text Application" },
        { id: "Thread dan Multithreading", en: "Thread and Multithreading" },
        { id: "Pemrograman Windows 1", en: "Windows Programming 1" },
        { id: "Pemrograman Windows 2", en: "Windows Programming 2" },
      ],
    },
    {
      id: "cert-fundamental-networking",
      number: "NO. 800897",
      titleId: "Dasar Pemrograman Jaringan",
      titleEn: "Fundamental Networking",
      date: "Agustus 2022",
      issueDateFormatted: "22 Agustus 2022",
      category: "networking",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_05.png'),
      backImage: getAsset('/assets/certificates/cert_page_06.png'),
      highlightTags: ["OSI 7 Layers", "TCP/IP Stack", "Packet Tracer", "Multi-vendor Routers"],
      summaryId: "Prinsip fundamental arsitektur jaringan komputer, model referensi OSI 7 layer, protokol TCP/IP, simulasi Packet Tracer, serta pengenalan router Cisco, Mikrotik, dan Juniper.",
      summaryEn: "Foundational computer networking concepts, 7-layer OSI model, TCP/IP protocol suite, Cisco Packet Tracer simulation, and multi-vendor router administration (Cisco, Mikrotik, Juniper).",
      syllabus: [
        { id: "Pengenalan Jaringan Komputer", en: "Introduction of Computer Network" },
        { id: "Model Referensi OSI", en: "OSI References Model" },
        { id: "Model Referensi OSI Lanjut", en: "OSI References Advance Model" },
        { id: "Pengenalan TCP/IP", en: "Introduction of TCP/IP" },
        { id: "Pengenalan Packet Tracer dan LAN", en: "Introduction of Packet Tracer and LAN" },
        { id: "Pengenalan Router Cisco", en: "Introduction of Cisco Router" },
        { id: "Pengenalan Router Mikrotik", en: "Introduction of Mikrotik Router" },
        { id: "Pengenalan Router Juniper", en: "Introduction of Juniper Router" },
      ],
    },
    {
      id: "cert-erp-fundamentals",
      number: "NO. 828460",
      titleId: "Dasar Perencanaan Sumberdaya Perusahaan",
      titleEn: "Fundamental ERP (Enterprise Resource Planning)",
      date: "Februari 2022",
      issueDateFormatted: "21 Februari 2022",
      category: "systems",
      issuer: "Universitas Gunadarma",
      signatory: "Prof. Dr. E. S. Margianti, SE, MM (Rektor)",
      frontImage: getAsset('/assets/certificates/cert_page_11.png'),
      backImage: getAsset('/assets/certificates/cert_page_12.png'),
      highlightTags: ["ERP Systems", "SAP Overview", "ADempiere & NAV", "Supply Chain & BOM"],
      summaryId: "Studi komprehensif sistem ERP enterprise, siklus rantai pasok (supply chain), modul pengadaan (purchasing), pesanan penjualan (sales order), struktur BOM, serta pengenalan ekosistem SAP.",
      summaryEn: "In-depth study of enterprise resource planning architectures, supply chain workflows, purchasing pipelines, sales order processing, Bill of Materials (BOM), and SAP ecosystem.",
      syllabus: [
        { id: "Konsep Enterprise Resource Planning", en: "Enterprise Resource Planning Concept" },
        { id: "Konsep Dasar ADempiere", en: "The Basic Concept of ADempiere" },
        { id: "Purchasing dalam ADempiere", en: "Purchasing on ADempiere" },
        { id: "Gambaran Teknologi NAV", en: "Introduction of NAV Technology" },
        { id: "Purchasing dalam NAV", en: "Purchasing on NAV" },
        { id: "Sales Order dalam NAV", en: "Sales Order on NAV" },
        { id: "Bill of Material (BOM) dalam NAV", en: "Bill of Material (BOM) on NAV" },
        { id: "Pengenalan SAP (System Application and Product in Data Processing)", en: "Introduction of SAP" },
      ],
    },
  ] as CertificateItem[],

  projects: [
    {
      id: "proj-heavy-equipment-ecommerce",
      titleId: "Sistem E-Commerce Suku Cadang Alat Berat",
      titleEn: "Heavy Equipment Spare Parts E-Commerce System",
      category: "Fullstack Web & Systems Analysis",
      role: "Lead Fullstack Developer & Systems Analyst",
      techStack: ["TypeScript", "React.js", "SQLite", "Tailwind CSS", "UML Modeling", "Black-Box Testing"],
      descriptionId:
        "Proyek akademik komprehensif yang dirancang untuk memecahkan kendala proses rantai pasok dan penjualan suku cadang alat berat (heavy machinery). Menerapkan metodologi analisis sistem terstruktur (UML: Use Case, Sequence, Class Diagram) serta arsitektur basis data relasional SQLite dengan antarmuka modern berbasis TypeScript dan React.",
      descriptionEn:
        "Comprehensive academic project designed to streamline procurement and sales workflows for industrial heavy equipment spare parts. Developed with structured systems analysis (UML diagrams) and an optimized SQLite database schema paired with a high-performance TypeScript and React.js frontend.",
      highlightsId: [
        "Menganalisis alur bisnis procurement & supply chain alat berat menggunakan diagram UML lengkap.",
        "Merancang skema relasi database SQLite berkinerja tinggi untuk ribuan part number dan varian komponen.",
        "Membangun antarmuka e-commerce modern dengan TypeScript untuk type-safety dan pengalaman pengguna yang intuitif.",
        "Melakukan pengujian kualitas perangkat lunak secara menyeluruh menggunakan metodologi Black-Box Testing.",
      ],
      highlightsEn: [
        "Analyzed heavy equipment procurement and supply chain workflows utilizing comprehensive UML diagrams.",
        "Engineered an optimized SQLite relational database schema handling complex spare part taxonomies and orders.",
        "Built a responsive modern interface with TypeScript to eliminate runtime bugs and enhance UX.",
        "Conducted thorough quality verification using rigorous Black-Box Testing methodologies.",
      ],
      featured: true,
    },
    {
      id: "proj-cisco-topology",
      titleId: "Desain Arsitektur Jaringan WAN & VLAN Multi-Site Cisco",
      titleEn: "Multi-Site Cisco WAN & VLAN Enterprise Network Architecture",
      category: "Computer Networks & Security",
      role: "Network Architect & Administrator",
      techStack: ["Cisco IOS", "Packet Tracer", "OSPF", "EIGRP", "VLAN", "ACL Security", "NAT/DHCP"],
      descriptionId:
        "Simulasi dan perancangan infrastruktur jaringan multi-kantor enterprise yang menggabungkan pembagian segmen virtual LAN (VLAN), dynamic routing inter-area (OSPF & EIGRP), layanan DHCP/NAT, serta pengamanan jalur menggunakan Access Control List (ACL).",
      descriptionEn:
        "Design and deployment simulation of a resilient enterprise multi-branch network combining VLAN segmentation, multi-protocol dynamic routing (OSPF & EIGRP), DHCP/NAT translation, and packet filtering via ACL security rules.",
      highlightsId: [
        "Segmentasi departemen perusahaan menggunakan konfigurasi VLAN pada Cisco Catalyst Switch.",
        "Routing dinamis antar router pusat dan cabang menggunakan protokol OSPF dan EIGRP.",
        "Pemberian keamanan akses jaringan dan filtering lalu lintas menggunakan Access Control List (ACL).",
      ],
      highlightsEn: [
        "Departmental security segmentation with IEEE 802.1Q VLAN trunking on Cisco Catalyst switches.",
        "Automated dynamic route discovery and failover using OSPF and EIGRP protocols.",
        "Enforced granular access control policies and traffic filtering with extended ACLs.",
      ],
      featured: true,
    },
    {
      id: "proj-enterprise-erp-study",
      titleId: "Analisis Arsitektur Proses Bisnis & Integrasi ERP",
      titleEn: "Enterprise Business Process Architecture & ERP Case Study",
      category: "Enterprise Information Systems",
      role: "Business Process Analyst",
      techStack: ["ERP Architecture", "ADempiere", "SAP Ecosystem", "Microsoft NAV", "BOM Modeling"],
      descriptionId:
        "Kajian dan pemodelan alur kerja operasional enterprise mencakup integrasi pengadaan barang (procurement), penerbitan sales order, manajemen Bill of Material (BOM), dan otomatisasi pencatatan inventaris pada sistem ERP.",
      descriptionEn:
        "Case study modeling end-to-end enterprise operations including procurement pipelines, sales order lifecycles, Bill of Materials (BOM) tree dependencies, and inventory reconciliation within modern ERP systems.",
      highlightsId: [
        "Pemetaan integrasi fungsi purchasing, sales, dan inventory control pada platform ERP modern.",
        "Pemodelan struktur Bill of Material (BOM) untuk efisiensi perakitan dan persediaan suku cadang.",
      ],
      highlightsEn: [
        "End-to-end operational workflow mapping across purchasing, inventory, and sales order fulfillment.",
        "Hierarchical Bill of Material (BOM) modeling for supply chain efficiency and stock availability.",
      ],
      featured: false,
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      titleId: "Pengembangan Web & Aplikasi",
      titleEn: "Web & Software Engineering",
      iconName: "Code2",
      skills: [
        { name: "TypeScript", level: "Mahir / Proficient", descriptionId: "Type-safe modern web application architecture", descriptionEn: "Type-safe modern web application architecture" },
        { name: "React.js", level: "Mahir / Proficient", descriptionId: "Komponen interaktif, hooks, dan state management", descriptionEn: "Interactive components, hooks, and clean state management" },
        { name: "JavaScript (ES6+)", level: "Mahir / Proficient", descriptionId: "DOM, async programming, event-driven web apps", descriptionEn: "DOM manipulation, asynchronous workflows, event-driven architecture" },
        { name: "HTML5 & CSS3 / Tailwind", level: "Mahir / Proficient", descriptionId: "Layout responsif, utility-first CSS, modern styling", descriptionEn: "Responsive layouts, utility-first styling, polished interfaces" },
        { name: "Java (J2SE)", level: "Menengah / Intermediate", descriptionId: "OOP, GUI Swing, multithreading, socket programming", descriptionEn: "Object-oriented principles, GUI Swing, multithreading, socket APIs" },
      ],
    },
    {
      titleId: "Basis Data & Manajemen Data",
      titleEn: "Databases & Data Management",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Menengah / Intermediate", descriptionId: "Relational query, normalisasi data, integrasi Java/Web", descriptionEn: "Relational queries, schema normalization, application integration" },
        { name: "SQLite", level: "Mahir / Proficient", descriptionId: "Embedded relational DB, indexing, query optimization", descriptionEn: "Embedded database management, structured indexing, optimized transactions" },
        { name: "Database Design", level: "Mahir / Proficient", descriptionId: "ERD modeling, relasi foreign key, optimasi struktur", descriptionEn: "ERD modeling, referential integrity, relational schema design" },
      ],
    },
    {
      titleId: "Jaringan Komputer & Infrastruktur",
      titleEn: "Computer Networks & Cisco",
      iconName: "Network",
      skills: [
        { name: "Cisco Router & IOS", level: "Bersertifikat / Certified", descriptionId: "Konfigurasi CLI, routing table, switching", descriptionEn: "CLI configuration, routing tables, and interface administration" },
        { name: "WAN & LAN Architecture", level: "Bersertifikat / Certified", descriptionId: "Perancangan topologi lokal dan wide area", descriptionEn: "Local and wide-area multi-branch architectural design" },
        { name: "Routing Protocols (OSPF, EIGRP)", level: "Bersertifikat / Certified", descriptionId: "Protokol routing dinamis dan failover", descriptionEn: "Dynamic multi-area routing protocols and convergence" },
        { name: "VLAN & Subnetting (VLSM/CIDR)", level: "Bersertifikat / Certified", descriptionId: "Segmentasi trafik dan alokasi efisien IP address", descriptionEn: "Traffic segmentation and hierarchical IP address calculation" },
        { name: "Keamanan Jaringan (ACL)", level: "Bersertifikat / Certified", descriptionId: "Packet filtering dan Access Control List", descriptionEn: "Firewall rules and Access Control List traffic security" },
      ],
    },
    {
      titleId: "Analisis Sistem & Rekayasa Bisnis",
      titleEn: "System Analysis & Enterprise Systems",
      iconName: "Workflow",
      skills: [
        { name: "UML Modeling", level: "Mahir / Proficient", descriptionId: "Use Case, Activity, Class, and Sequence Diagrams", descriptionEn: "Use Case, Activity, Class, and Sequence Diagrams" },
        { name: "Enterprise Resource Planning (ERP)", level: "Bersertifikat / Certified", descriptionId: "Konsep ERP, ADempiere, Microsoft NAV, SAP", descriptionEn: "ERP workflow principles, ADempiere, NAV, and SAP fundamentals" },
        { name: "Software Testing (Black-Box)", level: "Menengah / Intermediate", descriptionId: "Validasi fungsional sistem dan boundary testing", descriptionEn: "Functional validation, test cases, and boundary scenario testing" },
        { name: "AI & AI Agents Exploration", level: "Aktif Mengeksplorasi", descriptionId: "Integrasi model AI, LLM prompting, dan otomasi alur kerja", descriptionEn: "AI model integration, generative workflows, and agentic tools" },
      ],
    },
    {
      titleId: "Alat Kerja & Kolaborasi",
      titleEn: "Tools & Professional Skills",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub", level: "Mahir / Proficient", descriptionId: "Version control, branching, repository management", descriptionEn: "Version control, branching, repository management" },
        { name: "Visual Studio Code", level: "Mahir / Proficient", descriptionId: "Primary IDE untuk web dan aplikasi", descriptionEn: "Primary IDE environment and debugging workflows" },
        { name: "Teamwork & Communication", level: "Sangat Baik / Strong", descriptionId: "Kolaborasi tim, presentasi teknis, adaptabilitas", descriptionEn: "Cross-functional collaboration, technical communication" },
      ],
    },
  ] as SkillCategory[],
};
