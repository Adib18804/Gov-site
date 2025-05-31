const translations = {
            bn: {
                title: "নাগরিক সেবা পোর্টাল",
                welcome: "নাগরিক সেবা পোর্টালে স্বাগতম",
                "nav-home": "হোম",
                "nav-services": "সেবাসমূহ",
                "nav-about": "আমাদের সম্পর্কে",
                "nav-contact": "যোগাযোগ",
                "hero-title": "নাগরিক সেবা পোর্টাল",
                "hero-subtitle": "সকল সরকারি সেবার জন্য একটি প্ল্যাটফর্ম",
                "hero-button": "শুরু করুন",
                "services-title": "দ্রুত সেবা",
                "service-birth": "জন্ম নিবন্ধন",
                "service-death": "মৃত্যু নিবন্ধন",
                "service-passport": "পাসপোর্ট সেবা",
                "service-tax": "কর পরিশোধ",
                "service-utility": "ইউটিলিটি বিল",
                "news-title": "সর্বশেষ খবর",
                "news-1-title": "নতুন সেবা চালু",
                "news-1-text": "নতুন অনলাইন সেবা চালু করা হয়েছে।",
                "news-2-title": "পোর্টাল আপডেট",
                "news-2-text": "পোর্টালে নতুন ফিচার যুক্ত হয়েছে।",
                "news-3-title": "সেবা বন্ধের নোটিশ",
                "news-3-text": "৫ জুন ২০২৫ রক্ষণাবেক্ষণের জন্য।",
                "news-read-more": "বিস্তারিত",
                "footer-about-title": "নাগরিক সেবা সম্পর্কে",
                "footer-about-text": "সরকারি সেবার জন্য একটি সহজ প্ল্যাটফর্ম।",
                "footer-links-title": "লিঙ্ক",
                "footer-link-privacy": "গোপনীয়তা নীতি",
                "footer-link-terms": "শর্তাবলী",
                "footer-contact-title": "যোগাযোগ",
                "footer-contact-email": "ইমেল: support@nagoriksheba.gov.bd",
                "footer-contact-phone": "ফোন: +৮৮০-১২৩-৪৫৬-৭৮৯০",
                "footer-copyright": "© ২০২৫ নাগরিক সেবা পোর্টাল"
            },
            en: {
                title: "Citizen Service Portal",
                welcome: "Welcome to Citizen Service Portal",
                "nav-home": "Home",
                "nav-services": "Services",
                "nav-about": "About Us",
                "nav-contact": "Contact",
                "hero-title": "Citizen Service Portal",
                "hero-subtitle": "A platform for all government services",
                "hero-button": "Get Started",
                "services-title": "Quick Services",
                "service-birth": "Birth Registration",
                "service-death": "Death Registration",
                "service-passport": "Passport Services",
                "service-tax": "Tax Payment",
                "service-utility": "Utility Bill",
                "news-title": "Latest News",
                "news-1-title": "New Service Launched",
                "news-1-text": "A new online service has been launched.",
                "news-2-title": "Portal Update",
                "news-2-text": "New features added to the portal.",
                "news-3-title": "Service Downtime Notice",
                "news-3-text": "Scheduled maintenance on 5 June 2025.",
                "news-read-more": "Read More",
                "footer-about-title": "About Citizen Services",
                "footer-about-text": "A simple platform for government services.",
                "footer-links-title": "Links",
                "footer-link-privacy": "Privacy Policy",
                "footer-link-terms": "Terms & Conditions",
                "footer-contact-title": "Contact",
                "footer-contact-email": "Email: support@nagoriksheba.gov.bd",
                "footer-contact-phone": "Phone: +880-123-456-7890",
                "footer-copyright": "© 2025 Citizen Service Portal"
            }
        };

        // Function to switch language
        function switchLanguage(lang) {
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            document.documentElement.lang = lang;
            document.title = translations[lang].title;
        }

        // Event listener for language switcher
        document.getElementById('language-switcher').addEventListener('change', function() {
            switchLanguage(this.value);
        });

        // Set initial language to Bangla
        switchLanguage('bn');