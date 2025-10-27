"use client";
import React, { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";

const BlogPage = () => {
  const [currentView, setCurrentView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  type Blog = {
    id: number;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
  };

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs = [
    {
      id: 1,
      title:
        "Born from a vision of weaving wellness, adventure, and purpose into everyday living",
      author: "Prabhat Srivastava",
      date: "29 August 2024",
      image: "/blogs/1.jpg",
      excerpt:
        "Born from a vision of weaving wellness, adventure, and purpose into everyday liv...",
      content: `We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.

This increase in investor demand was reflected in the median valuations of startups that raised on AngelList in 3Q23, which increased across most stages after several quarters of decline. Our data also revealed an unprecedented level of demand for AI/ ML startups in 3Q23. Investments into these startups are likely responsible for many of the positive performance trends we observed in 3Q23.

While 3Q23 was a step in the right direction for the early-stage startup ecosystem, it's worth noting that 3Q23 was by no means a "good" quarter. In aggregate, this past quarter's performance was roughly on par with 3Q22 (which, at the time, we referred to as a "downbeat quarter") and the pandemic memo of 2Q20. However, coming on the heels of a quarter we dubbed the "worst quarter for early-stage startups, this positive development deserved the quarter title: reason for cautious optimism amid tumultuous.

This quarter, for the first time ever, we partnered with the finance automation platform Ramp to share their proprietary data on startups spending activity. Taken together, our combined datasets offer unprecedented and timely across into how capital flowed into and out of startups in 3Q23. Key takeaways in this quarter's report include.`,
    },
    {
      id: 2,
      title: "Discovering the sacred waters of the Ganges",
      author: "Ananya Sharma",
      date: "25 August 2024",
      image: "/blogs/2.jpg",
      excerpt:
        "Exploring the spiritual significance and healing properties of the holy river...",
      content: `The Ganges, known as Ganga in India, is not just a river but a symbol of spirituality, purity, and life itself. For centuries, millions have flocked to its banks seeking spiritual cleansing and divine blessings.

The river originates from the Gangotri Glacier in the Himalayas and flows through the plains of northern India, eventually merging with the Bay of Bengal. Throughout its journey, the Ganges sustains millions of lives and supports diverse ecosystems.

According to Hindu mythology, the Ganges descended from heaven to earth, brought down by the penance of King Bhagiratha. The river is personified as Goddess Ganga, and her waters are believed to wash away sins and provide moksha (liberation).

Scientific studies have shown that the Ganges water contains unique properties, including bacteriophages that give it self-purifying characteristics. Pilgrims believe that bathing in the Ganges during auspicious occasions can cure ailments and bring spiritual merit.

Major pilgrimage sites along the Ganges include Haridwar, Rishikesh, Varanasi, and Allahabad. Each location offers unique spiritual experiences, from the evening Ganga Aarti ceremonies to meditation retreats along peaceful ghats.`,
    },
    {
      id: 3,
      title: "Yoga and mindfulness in the Himalayan foothills",
      author: "Vikram Singh",
      date: "22 August 2024",
      image: "/blogs/3.jpg",
      excerpt:
        "Finding inner peace through ancient practices in the serene mountain landscapes...",
      content: `The Himalayan foothills have long been recognized as sacred grounds for spiritual practice and self-discovery. The pristine environment, clean mountain air, and powerful energy of these ancient mountains create the perfect setting for deep yoga and meditation practice.

Rishikesh, often called the Yoga Capital of the World, sits nestled in the foothills where the Ganges flows down from the mountains. Here, ashrams and yoga schools have flourished for decades, attracting seekers from around the globe.

Traditional Hatha Yoga, as taught in these regions, goes beyond physical postures. It encompasses pranayama (breath control), meditation, and philosophical teachings that guide practitioners toward self-realization. The morning practice, performed as the sun rises over the mountains, offers a transcendent experience.

Many retreats in this region offer immersive programs that combine yoga with Ayurvedic treatments, vegetarian cuisine, and nature walks. The slower pace of life in these mountain communities naturally supports mindfulness and present-moment awareness.

Teachers in the Himalayas often emphasize the connection between personal practice and service to others. This karma yoga philosophy encourages practitioners to apply their inner development toward making positive contributions to the world.`,
    },
    {
      id: 4,
      title: "Ayurvedic healing traditions and modern wellness",
      author: "Dr. Meera Patel",
      date: "18 August 2024",
      image: "/blogs/4.jpg",
      excerpt:
        "Bridging ancient wisdom with contemporary health science for holistic healing...",
      content: `Ayurveda, the 5,000-year-old system of natural healing from India, continues to gain recognition worldwide for its holistic approach to health and wellness. This ancient science views each person as unique, with their own constitution and path to balance.

The foundation of Ayurveda rests on the concept of three doshas: Vata, Pitta, and Kapha. These biological energies govern all physical and mental processes, and understanding one's dominant dosha helps guide personalized treatment approaches.

Modern research increasingly validates many Ayurvedic principles. Studies on turmeric, ashwagandha, and other traditional herbs have demonstrated significant anti-inflammatory, adaptogenic, and immune-supporting properties that align with ancient Ayurvedic texts.

Panchakarma, Ayurveda's signature detoxification process, combines massage, herbal treatments, and cleansing procedures to remove accumulated toxins from the body. Many wellness retreats now offer authentic Panchakarma programs under the guidance of qualified Ayurvedic physicians.

The integration of Ayurveda with modern lifestyle management addresses contemporary health challenges like stress, sleep disorders, and chronic disease. By focusing on prevention through proper diet, daily routines, and seasonal adjustments, Ayurveda offers sustainable wellness solutions.`,
    },
    {
      id: 5,
      title: "Sustainable travel and eco-conscious adventures",
      author: "Rohan Malhotra",
      date: "15 August 2024",
      image: "/blogs/5.jpg",
      excerpt:
        "Exploring the world responsibly while preserving natural beauty for future generations...",
      content: `Sustainable travel has evolved from a niche concept to a necessary approach for conscious explorers. As tourism impacts fragile ecosystems and local communities, travelers increasingly seek ways to minimize their footprint while maximizing positive contributions.

Eco-conscious adventures prioritize experiences that support local economies, protect wildlife, and preserve cultural heritage. This might include staying at eco-lodges that employ local staff, participating in community-led tours, or choosing activities that don't disturb natural habitats.

In India, several regions have embraced sustainable tourism models. The Himalayan villages promote homestays that provide authentic cultural exchanges while generating income for local families. Wildlife sanctuaries implement strict visitor guidelines to protect endangered species.

Responsible travelers can make a difference through simple choices: using refillable water bottles, supporting local artisans, traveling during off-peak seasons, and educating themselves about local customs and environmental challenges. Carbon offset programs help mitigate the impact of air travel.

The future of travel lies in regenerative tourism, which aims not just to minimize harm but to leave destinations better than found. This includes participating in conservation projects, supporting restoration efforts, and advocating for policies that protect natural and cultural resources.`,
    },
    {
      id: 6,
      title: "Mountain trekking and spiritual journeys",
      author: "Kavita Negi",
      date: "12 August 2024",
      image: "/blogs/6.jpg",
      excerpt:
        "Discovering inner strength and clarity through challenging Himalayan trails...",
      content: `Trekking in the Himalayas offers more than physical challenge—it provides a pathway to self-discovery and spiritual awakening. The journey through ancient mountain passes, remote villages, and sacred peaks tests endurance while opening doors to profound inner experiences.

Popular treks like the Valley of Flowers, Kedarnath, and Roopkund attract thousands annually, each offering unique landscapes and spiritual significance. These trails have been walked by pilgrims and sages for millennia, creating a palpable sense of sacred history.

The physical demands of high-altitude trekking—thin air, steep climbs, and unpredictable weather—strip away superficial concerns and bring focus to the present moment. Many trekkers describe entering meditative states during long walking days, finding clarity unavailable in daily life.

Local guides and porters share not just route knowledge but also stories, legends, and traditional wisdom passed through generations. These cultural exchanges enrich the journey, providing context for the sacred geography traversed.

Preparation for Himalayan treks involves physical conditioning, but also mental and spiritual readiness. Understanding the cultural significance of the regions, practicing respectful behavior, and approaching the journey with humility enhances the transformative potential of these mountain pilgrimages.`,
    },
    {
      id: 7,
      title: "Meditation retreats and silent contemplation",
      author: "Swami Anand",
      date: "08 August 2024",
      image: "/blogs/7.jpg",
      excerpt:
        "Exploring the profound peace found in silent meditation practices...",
      content: `Silence, in our noise-saturated world, has become a precious commodity. Meditation retreats offering silent contemplation provide sanctuary for those seeking to quiet the mind and reconnect with inner peace.

Vipassana meditation, an ancient technique rediscovered by Buddha, involves observing bodily sensations and mental patterns without reaction. Ten-day silent retreats teaching this method have spread globally, offering deep psychological and spiritual benefits.

The practice of noble silence—abstaining from speech, eye contact, and other forms of communication—allows practitioners to turn attention inward. Without external distractions, habitual thought patterns become visible, creating opportunities for transformation.

Research on meditation retreat participants shows measurable changes in brain structure, stress hormone levels, and emotional regulation. Long-term practitioners report enhanced clarity, improved relationships, and greater life satisfaction.

Modern retreat centers blend traditional practices with comfortable accommodations and proper guidance. Whether in monastery settings or nature-based centers, these environments support the intensive inner work required for genuine spiritual development.`,
    },
    {
      id: 8,
      title: "Sacred temples and architectural marvels",
      author: "Priya Desai",
      date: "05 August 2024",
      image: "/blogs/8.jpg",
      excerpt:
        "Exploring India's magnificent temples and their spiritual significance...",
      content: `India's temples stand as testaments to devotion, architectural genius, and spiritual aspiration. From the intricately carved structures of South India to the serene Buddhist monasteries of the Himalayas, these sacred spaces embody centuries of religious tradition.

The ancient Dravidian temples of Tamil Nadu showcase remarkable engineering, with towering gopurams (gateway towers) covered in thousands of sculpted deities. These temples function not just as worship spaces but as centers of art, music, and community life.

Varanasi's countless temples along the Ganges create a living spiritual ecosystem where rituals performed today mirror those conducted thousands of years ago. The Kashi Vishwanath Temple, one of twelve Jyotirlingas, draws millions seeking Shiva's blessings.

Buddhist monasteries in Ladakh and Sikkim preserve Tibetan traditions, housing ancient texts, thangka paintings, and meditation halls where monks maintain continuous practice. These high-altitude sanctuaries offer glimpses into contemplative traditions spanning centuries.

Temple architecture follows Vastu Shastra principles, aligning structures with cosmic energies and natural elements. The positioning, proportions, and decorative elements all serve spiritual purposes, creating spaces that naturally induce devotional states.`,
    },
    {
      id: 9,
      title: "Organic farming and farm-to-table experiences",
      author: "Ravi Kumar",
      date: "01 August 2024",
      image: "/blogs/9.jpg",
      excerpt:
        "Connecting with nature through sustainable agriculture and wholesome food...",
      content: `The farm-to-table movement reconnects people with food sources, emphasizing fresh, locally-grown, organic produce. This approach supports small farmers, reduces environmental impact, and provides superior nutrition compared to industrial agriculture.

Organic farming in India has ancient roots in traditional agricultural practices that worked with nature rather than against it. These methods avoid synthetic pesticides and fertilizers, instead building soil health through composting, crop rotation, and natural pest management.

Farm stays and agro-tourism experiences allow visitors to participate in planting, harvesting, and food preparation. These hands-on activities foster appreciation for the labor and skill required to produce food sustainably.

The nutritional benefits of organic produce extend beyond absence of chemicals. Studies show organic fruits and vegetables contain higher levels of antioxidants, vitamins, and beneficial compounds. The superior taste reflects quality of soil and traditional growing methods.

Supporting local organic farmers strengthens rural economies and preserves agricultural knowledge. As industrial farming faces sustainability challenges, small-scale organic agriculture offers a viable path forward for feeding populations while protecting ecosystems.`,
    },
    {
      id: 10,
      title: "Wellness through traditional Indian dance",
      author: "Nandini Iyer",
      date: "28 July 2024",
      image: "/blogs/10.jpg",
      excerpt:
        "Discovering healing and joy through classical and folk dance traditions...",
      content: `Indian classical dance forms—Bharatanatyam, Kathak, Odissi, and others—offer pathways to wellness through movement, expression, and spiritual connection. These ancient art forms integrate physical conditioning, emotional release, and devotional practice.

Bharatanatyam, originating in Tamil Nadu temples, combines intricate footwork, expressive hand gestures (mudras), and facial expressions to tell stories from Hindu mythology. The practice develops grace, strength, flexibility, and mental focus.

Beyond physical benefits, dance provides emotional and spiritual nourishment. The meditative quality of repetitive movements, the joy of musical expression, and the sense of connection to tradition all contribute to psychological wellbeing.

Folk dances from various regions celebrate harvest, seasons, and community bonds. Garba from Gujarat, Bhangra from Punjab, and Bihu from Assam express cultural identity while providing cardiovascular exercise and social connection.

Modern wellness programs increasingly incorporate dance therapy, recognizing its power for healing trauma, managing stress, and building self-confidence. The non-verbal expression through movement allows processing of emotions that words cannot reach.`,
    },
    {
      id: 11,
      title: "Breathwork and pranayama practices",
      author: "Yogi Arun",
      date: "25 July 2024",
      image: "/blogs/11.jpg",
      excerpt:
        "Harnessing the power of breath for health, clarity, and spiritual awakening...",
      content: `Pranayama, the yogic science of breath control, has been practiced for thousands of years as a method for enhancing physical health, mental clarity, and spiritual development. Modern science now validates many benefits ancient yogis understood intuitively.

The breath serves as a bridge between conscious and unconscious processes. Through deliberate breathing techniques, practitioners can influence heart rate, nervous system balance, and emotional states. This makes pranayama a powerful tool for managing stress and anxiety.

Key pranayama techniques include Nadi Shodhana (alternate nostril breathing) for balancing energy channels, Kapalabhati (skull shining breath) for cleansing and energizing, and Ujjayi (victorious breath) for calming the mind during yoga practice.

Research demonstrates that regular pranayama practice reduces blood pressure, improves lung function, and enhances cognitive performance. Athletes use specific breathing techniques to optimize oxygen delivery and recovery.

Advanced practitioners use pranayama to prepare for deep meditation, reporting that proper breath control quiets mental chatter and facilitates higher states of consciousness. The breath becomes both the object of meditation and the vehicle for transcendence.`,
    },
    {
      id: 12,
      title: "Sound healing and mantra meditation",
      author: "Sarita Menon",
      date: "22 July 2024",
      image: "/blogs/12.jpg",
      excerpt:
        "Exploring the therapeutic power of sacred sounds and vibrational healing...",
      content: `Sound has been used for healing across cultures since ancient times. In India, the science of Nada Yoga explores how specific sounds and vibrations affect consciousness, promoting physical healing and spiritual evolution.

Mantras—sacred syllables or phrases—carry vibrational frequencies believed to impact body and mind. The repetition of mantras like "Om" or "Om Namah Shivaya" during meditation creates resonance that calms neural activity and induces meditative states.

Singing bowls, particularly Tibetan and crystal varieties, produce pure tones that penetrate deeply into body tissues. Sound healing practitioners use these instruments to address energy blockages, reduce pain, and facilitate emotional release.

Scientific research into sound therapy shows promising results for conditions including anxiety, depression, chronic pain, and sleep disorders. The mechanism involves entrainment—where brainwave patterns synchronize with external rhythmic stimuli.

Group chanting creates powerful collective experiences. Kirtan, the devotional call-and-response singing common in yoga communities, builds connection while providing stress relief and emotional upliftment. The communal aspect enhances individual benefits through shared energy.`,
    },
  ];

  const featuredBlogs = blogs.slice(0, 3);

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBlogClick = (blog: Blog) => {
    if (!blog) return;
    const blogUrl = blog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    setSelectedBlog(blog);
    setCurrentView("blog");
    window.history.pushState({}, "", `/blogs/${blogUrl}`);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedBlog(null);
    window.history.pushState({}, "", "/blogs");
  };

  if (currentView === "blog" && selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 py-6 px-6 bg-gradient-to-r from-green-50 to-green-100">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blogs</span>
          </button>
        </div>

        {/* Blog Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <h1 className="text-4xl font-semibold mb-6 leading-tight text-gray-900">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 border-l-4 border-green-500 pl-4 py-2">
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wide">
                    Date Published
                  </span>
                  <span className="font-medium">{selectedBlog.date}</span>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wide">
                    Written By
                  </span>
                  <span className="font-medium">{selectedBlog.author}</span>
                </div>
              </div>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-96 object-cover mb-8 rounded-lg shadow-md"
              />

              <div className="prose prose-lg max-w-none">
                {selectedBlog.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-gray-700 leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Featured Blogs Sidebar */}
            <div className="lg:w-80">
              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-lg shadow-md">
                {" "}
                {/* Remove sticky class */}
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b-2 border-green-500 pb-3">
                  Featured <span className="text-green-600">Blogs</span>
                </h2>
                <div className="space-y-5">
                  {featuredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      onClick={() => handleBlogClick(blog)}
                      className="flex gap-3 cursor-pointer group bg-white p-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-24 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-xs font-medium mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-gray-500">{blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Blogs Section */}
        <div className="mb-16">
          <h2 className="text-5xl mb-10 font-semibold">
            Featured <span className="italic text-green-600">Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
                className="bg-white rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-5">
                  <h3 className="text-sm font-medium mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {blog.excerpt}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Published on: {blog.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-5xl font-semibold">
              Recent <span className="italic text-green-600">Blogs</span>
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-5 py-3 pr-12 text-sm focus:outline-none focus:border-green-500 w-64 shadow-sm"
              />
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                No blogs found
              </h3>
              <p className="text-gray-400">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => handleBlogClick(blog)}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-5">
                    <h3 className="text-sm font-medium mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {blog.excerpt}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Published on: {blog.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
