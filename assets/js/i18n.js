(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var AR = {
  "Home": "الرئيسية",
  "About": "من نحن",
  "About us": "من نحن",
  "About Us": "من نحن",
  "Services": "الخدمات",
  "Contact": "اتصل بنا",
  "Contact Us": "اتصل بنا",
  "Explore More": "اكتشف المزيد",
  "Our Services": "خدماتنا",
  "Our Reach": "نطاق تغطيتنا",
  "Useful Links": "روابط مفيدة",
  "Our Branches": "فروعنا",
  "Testimonials": "آراء العملاء",
  "Connect With Us": "تواصل معنا",
  "Happy Clients": "عملاء سعداء",
  "Delivered Packages": "طرود تم توصيلها",
  "Countries Covered": "دول نغطيها",
  "Tons of Goods": "أطنان من البضائع",
  ". All Rights Reserved": ". جميع الحقوق محفوظة",
  "© Copyright": "© حقوق النشر",
  "Send Message": "إرسال الرسالة",
  "Your Name": "اسمك",
  "Your Email": "بريدك الإلكتروني",
  "Subject": "الموضوع",
  "Message": "الرسالة",
  "Location:": "الموقع:",
  "Email:": "البريد الإلكتروني:",
  "Mobile:": "الجوال:",
  "WhatsApp:": "واتساب:",
  "India": "الهند",
  "INDIA": "الهند",
  "Pakistan": "باكستان",
  "PAKISTAN": "باكستان",
  "UAE": "الإمارات",
  "China": "الصين",
  "Oman": "عُمان",
  "Sea Freight": "الشحن البحري",
  "Air Freight": "الشحن الجوي",
  "NVOCC SERVICE": "خدمة NVOCC",
  "NVOCC Service": "خدمة NVOCC",
  "Storage Facility": "منشأة التخزين",
  "Transportation Services": "خدمات النقل",
  "Land Transportation": "النقل البري",
  "Customs Clearance and Approvals": "التخليص الجمركي والموافقات",
  "Customs Clearance": "التخليص الجمركي",
  "Vehicle Loading and Documentations": "تحميل المركبات والتوثيق",
  "Vehicle Loading": "تحميل المركبات",
  "Dangerous Goods Handling Services": "خدمات مناولة البضائع الخطرة",
  "Dangerous Goods Handling": "مناولة البضائع الخطرة",
  "Discover Our Services": "اكتشف خدماتنا",
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "SEAL OF TRUST": "ختم الثقة",
  "All-in-One Logistics Partner": "شريك لوجستي متكامل",
  "Safety Assured": "السلامة مضمونة",
  "Efficiency and Peace of Mind": "الكفاءة وراحة البال",
  "Customer-Centric Approach": "نهج يركز على العميل",
  "AJMAN, UNITED ARAB EMIRATES": "عجمان، الإمارات العربية المتحدة",
  "SHARJAH, UNITED ARAB EMIRATES": "الشارقة، الإمارات العربية المتحدة",
  "DUBAI, UNITED ARAB EMIRATES": "دبي، الإمارات العربية المتحدة",
  "England, United Kingdom": "إنجلترا، المملكة المتحدة",
  "HAIFA, ISRAEL": "حيفا، إسرائيل",
  "Office F1-0485,": "مكتب F1-0485،",
  "Dubai Investment Park First, Dubai, 12345, Dubai": "مجمع دبي للاستثمار الأول، دبي، 12345، دبي",
  "Office F1-0485, PROPERTY INVESTMENT OFFICE 4 - F1, Dubai Investment Park First, Dubai, 12345, Dubai": "مكتب F1-0485، PROPERTY INVESTMENT OFFICE 4 - F1، مجمع دبي للاستثمار الأول، دبي، 12345، دبي",
  "Flexible Ocean Freight Solutions": "حلول شحن بحري مرنة",
  "Comprehensive Customs Expertise": "خبرة جمركية شاملة",
  "Local Knowledge and Connections": "معرفة محلية وعلاقات قوية",
  "Competitive Freight Solutions": "حلول شحن تنافسية",
  "End-to-End Vehicle Management": "إدارة المركبات من البداية إلى النهاية",
  "Efficient Regional Transport": "نقل إقليمي فعّال",
  "Precise Freight Calculations": "حسابات شحن دقيقة",
  "Reliable and Swift Transport": "نقل موثوق وسريع",
  "End-to-End Cargo Management": "إدارة الشحنات من البداية إلى النهاية",
  "Tailored Shipping Solutions": "حلول شحن مخصصة",
  "Border Clearance Expertise": "خبرة في التخليص الحدودي",
  "Dubai Municipality Liaison": "التنسيق مع بلدية دبي",
  "State-of-the-Art Amenities": "مرافق حديثة ومتطورة",
  "Commitment to Excellence": "التزام بالتميز",
  "Extensive Global Network": "شبكة عالمية واسعة",
  "Flexible Storage Options": "خيارات تخزين مرنة",
  "Comprehensive Logistics": "خدمات لوجستية شاملة",
  "Global Shipping Network": "شبكة شحن عالمية",
  "Reliability and Quality": "الموثوقية والجودة",
  "Claim Deposit Handling": "إدارة ودائع المطالبات",
  "Comprehensive Handling": "مناولة شاملة",
  "Global Carrier Network": "شبكة ناقلين عالمية",
  "Regulatory Compliance": "الامتثال للوائح",
  "Specialized Equipment": "معدات متخصصة",
  "Organized and Secure": "منظم وآمن",
  "Thorough Inspections": "فحوصات دقيقة",
  "Competitive Pricing": "أسعار تنافسية",
  "Expert Packaging": "تغليف احترافي",
  "Precise Labeling": "ملصقات دقيقة",
  "Claims Handling": "معالجة المطالبات",
  "Dedicated Team": "فريق متخصص",
  "VAT Compliance": "الامتثال لضريبة القيمة المضافة",
  "Claim Refunds": "استرداد المطالبات",
  "Diverse Fleet": "أسطول متنوع",
  "Peace of Mind": "راحة البال",
  "Tailored Solutions": "حلول مخصصة",
  "Blue Max Shipping is a leading UAE-based logistics company and licensed Non-Vessel Operating Common Carrier (NVOCC), providing comprehensive freight forwarding and supply chain solutions across the globe. We specialize in sea, air, and land freight, customs clearance, warehousing, and project logistics, delivering reliable and cost-effective services tailored to our customers' needs.": "بلو ماكس للشحن شركة لوجستية رائدة مقرها الإمارات وناقل مشترك مرخص لا يشغّل سفناً (NVOCC)، نقدّم حلول شحن وإمداد شاملة حول العالم. نتخصص في الشحن البحري والجوي والبري، والتخليص الجمركي، والتخزين، ولوجستيات المشاريع، بخدمات موثوقة وفعّالة من حيث التكلفة مصممة حسب احتياجات عملائنا.",
  "Supported by our own container fleet, modern warehousing facilities in Jebel Ali, and a trusted global network of partners and agents, Blue Max Shipping serves key trade routes across the Middle East, Far East, South Asia, Europe, North America, Africa, and other major international markets. We specialize in handling FCL, LCL, project cargo, hazardous cargo (DG), out-of-gauge (OOG) shipments, and specialized logistics solutions with the highest standards of safety and operational excellence.": "بدعم من أسطول حاوياتنا الخاص، ومستودعات حديثة في جبل علي، وشبكة عالمية موثوقة من الشركاء والوكلاء، تخدم بلو ماكس للشحن أبرز المسارات التجارية في الشرق الأوسط والشرق الأقصى وجنوب آسيا وأوروبا وأمريكا الشمالية وأفريقيا وغيرها من الأسواق الدولية. نتخصص في مناولة شحنات الحاوية الكاملة والجزئية، وبضائع المشاريع، والبضائع الخطرة، والشحنات خارجة المقاييس، والحلول اللوجستية المتخصصة بأعلى معايير السلامة والتميز التشغيلي.",
  "Our commitment goes beyond transportation. We focus on building long-term partnerships by delivering transparent communication, competitive pricing, reliable transit solutions, and exceptional customer service. Every shipment is handled with precision, professionalism, and a dedication to exceeding customer expectations. At Blue Max Shipping, we are committed to simplifying global trade through innovative logistics solutions that help businesses grow and succeed in an ever-evolving marketplace.": "التزامنا يتجاوز النقل. نركز على بناء شراكات طويلة الأمد عبر تواصل شفاف وأسعار تنافسية وحلول عبور موثوقة وخدمة عملاء متميزة. تُدار كل شحنة بدقة واحتراف والتزام بتجاوز توقعات العملاء. في بلو ماكس للشحن نسعى لتبسيط التجارة العالمية بحلول لوجستية مبتكرة تساعد الشركات على النمو والنجاح في سوق دائم التغير.",
  "Blue Max Shipping – Delivering Trust. Connecting the World.": "بلو ماكس للشحن – نوصل الثقة. نربط العالم.",
  "Reliable global sea freight solutions for secure and timely cargo delivery, spanning Africa, Asia, Europe, America, and beyond.": "حلول شحن بحري عالمية موثوقة لتوصيل آمن وفي الوقت المحدد، تغطي أفريقيا وآسيا وأوروبا وأمريكا وما بعدها.",
  "As a trusted NVOCC, we provide reliable ocean freight solutions with flexible shipping options, competitive rates, and efficient cargo management. Our global network ensures secure, timely, and cost-effective transportation for businesses worldwide.": "بصفتنا NVOCC موثوقاً، نقدّم حلول شحن بحري موثوقة بخيارات مرنة وأسعار تنافسية وإدارة فعّالة للبضائع. تضمن شبكتنا العالمية نقلاً آمناً وفي الوقت المحدد وفعال التكلفة للشركات حول العالم.",
  "Secure and organized storage solutions for your goods in our advanced warehouse facility, your logistics partner.": "حلول تخزين آمنة ومنظمة لبضائعكم في منشأتنا المتطورة، شريككم اللوجستي.",
  "Unlock cost-effective and swift air cargo solutions with our special rates sourced from global carriers. Your goods, our priority.": "احصلوا على حلول شحن جوي سريعة وفعّالة التكلفة عبر أسعارنا الخاصة من ناقلين عالميين. بضائعكم أولويتنا.",
  "Comprehensive transportation solutions with our versatile fleet of trucks and trailers, ensuring smooth cargo delivery and your peace of mind.": "حلول نقل شاملة بأسطول متنوع من الشاحنات والمقطورات لضمان توصيل سلس وراحة بالكم.",
  "Efficient land transportation solutions in the UAE and GCC, including border clearance and claims handling for seamless cargo movement.": "حلول نقل بري فعّالة في الإمارات ودول الخليج، تشمل التخليص الحدودي ومعالجة المطالبات لحركة بضائع سلسة.",
  "Simplify international trade with our expert customs clearance and approvals services, ensuring compliance and saving you time and effort.": "بسّطوا التجارة الدولية مع خدماتنا المتخصصة في التخليص الجمركي والموافقات، لضمان الامتثال وتوفير الوقت والجهد.",
  "Effortless vehicle loading and precise documentation – our expertise ensures meticulous care and accuracy.": "تحميل مركبات بسلاسة وتوثيق دقيق – خبرتنا تضمن العناية والدقة في كل تفصيل.",
  "Ensuring safety at every step – our specialized services handle, label, and document dangerous goods with full compliance.": "نضمن السلامة في كل خطوة – خدماتنا المتخصصة تتولى مناولة البضائع الخطرة ووضع الملصقات والتوثيق مع الامتثال الكامل.",
  "We streamline your supply chain with a comprehensive range of services, including sea and air freight, land transportation, customs clearance, and specialized cargo handling. Our integrated approach simplifies your logistics management, reducing complexity and optimizing efficiency.": "نسهّل سلسلة الإمداد لديكم بمجموعة شاملة من الخدمات تشمل الشحن البحري والجوي والنقل البري والتخليص الجمركي ومناولة البضائع المتخصصة. نهجنا المتكامل يبسّط إدارة اللوجستيات ويقلل التعقيد ويرفع الكفاءة.",
  "At BLUE MAX SHIPPING, the safety and security of your cargo are paramount. We take pride in our rigorous safety standards and strict compliance with regulations. No matter what you're shipping, be it hazardous materials, vehicles, or everyday goods, you can trust us to handle each shipment with the utmost care. Our dedicated teams ensure that your cargo reaches its destination securely and in perfect condition.": "في BLUE MAX SHIPPING، سلامة شحناتكم وأمنها أولويتنا القصوى. نفتخر بمعايير السلامة الصارمة والامتثال التام للوائح. أياً كان ما تشحنونه، مواد خطرة أو مركبات أو بضائع يومية، يمكنكم الوثوق بنا للتعامل مع كل شحنة بأقصى عناية. تضمن فرقنا وصول بضائعكم بأمان وفي حالة ممتازة.",
  "Our commitment to efficiency means your cargo moves swiftly and reliably. We leverage our global network to provide cost-effective solutions that meet your deadlines. You can trust us to manage your logistics, so you can focus on your core business, knowing your shipments are in capable hands.": "التزامنا بالكفاءة يعني أن بضائعكم تتحرك بسرعة وموثوقية. نستفيد من شبكتنا العالمية لتقديم حلول فعّالة التكلفة تلتزم بمواعيدكم. ثقوا بنا لإدارة لوجستياتكم حتى تركزوا على أعمالكم الأساسية وأنتم مطمئنون أن شحناتكم في أيدٍ أمينة.",
  "We understand that every business is unique. Our customer-centric approach means we work closely with you to understand your specific needs and tailor our services accordingly. Your success is our success, and we're dedicated to providing solutions that align with your goals.": "ندرك أن كل عمل فريد. نهجنا المرتكز على العميل يعني أننا نعمل معكم عن قرب لفهم احتياجاتكم وتخصيص خدماتنا وفقاً لها. نجاحكم نجاحنا، ونحن ملتزمون بتقديم حلول تتوافق مع أهدافكم.",
  "Leading logistics firm specializing in sea freight exports to Africa and beyond. Our comprehensive services include container loading, air and land transportation, and secure warehousing, ensuring efficient cargo movement with dedication and expertise.": "شركة لوجستية رائدة متخصصة في صادرات الشحن البحري إلى أفريقيا وما بعدها. تشمل خدماتنا الشاملة تحميل الحاويات والنقل الجوي والبري والتخزين الآمن، لضمان حركة بضائع فعّالة بتفانٍ وخبرة.",
  "With our own container fleet, strategic warehousing facilities in Jebel Ali, and a strong global network of partners and agents, we connect businesses across the Middle East, Far East, South Asia, Europe, North America, and other major international trade markets.": "بأسطول حاوياتنا الخاص ومستودعات استراتيجية في جبل علي وشبكة عالمية قوية من الشركاء والوكلاء، نربط الشركات عبر الشرق الأوسط والشرق الأقصى وجنوب آسيا وأوروبا وأمريكا الشمالية وغيرها من أسواق التجارة الدولية الكبرى.",
  "Driven by professionalism, innovation, and customer satisfaction, Blue Max Shipping is committed to delivering seamless logistics solutions with efficiency, transparency, and excellence—making us your trusted partner for global trade.": "بدافع الاحتراف والابتكار ورضا العملاء، تلتزم بلو ماكس للشحن بتقديم حلول لوجستية سلسة بكفاءة وشفافية وتميز—لنكون شريككم الموثوق في التجارة العالمية.",
  "At BLUE MAX SHIPPING, we offer a comprehensive suite of logistics solutions designed to meet your every need. From precise container loading and secure warehousing to competitive air cargo rates and expert customs clearance, our dedicated team ensures the safe, timely, and efficient movement of your cargo by land, sea, or air. Explore our specialized services and experience the difference of working with a trusted logistics partner.": "نقدّم في BLUE MAX SHIPPING مجموعة شاملة من الحلول اللوجستية لتلبية كل احتياجاتكم. من تحميل الحاويات بدقة والتخزين الآمن إلى أسعار الشحن الجوي التنافسية والتخليص الجمركي المتخصص، يضمن فريقنا حركة آمنة وفي الوقت المحدد وفعّالة لبضائعكم براً وبحراً وجواً. اكتشفوا خدماتنا المتخصصة واختبروا الفرق مع شريك لوجستي موثوق.",
  "BLUE MAX SHIPPING, Dubai, offers a full spectrum of logistics solutions, specializing in sea freight to Africa and beyond. We ensure secure and efficient cargo movement by land, sea, and air.": "تقدّم BLUE MAX SHIPPING في دبي مجموعة كاملة من الحلول اللوجستية، مع تخصص في الشحن البحري إلى أفريقيا وما بعدها. نضمن حركة بضائع آمنة وفعّالة براً وبحراً وجواً.",
  "What makes BLUE MAX SHIPPING stand out in the logistics industry?": "ما الذي يميز BLUE MAX SHIPPING في قطاع الخدمات اللوجستية؟",
  "BLUE MAX SHIPPING excels in providing tailored container loading solutions, backed by a global network for sea freight services. We offer competitive air cargo rates, secure warehousing, and comprehensive customs clearance, ensuring efficient, safe, and reliable cargo transportation.": "تتميز BLUE MAX SHIPPING بتقديم حلول تحميل حاويات مخصصة، مدعومة بشبكة عالمية لخدمات الشحن البحري. نقدّم أسعاراً تنافسية للشحن الجوي وتخزيناً آمناً وتخليصاً جمركياً شاملاً لضمان نقل فعّال وآمن وموثوق.",
  "How does BLUE MAX SHIPPING ensure the safety of cargo, especially for specialized shipments like dangerous goods?": "كيف تضمن BLUE MAX SHIPPING سلامة البضائع، خاصة الشحنات المتخصصة مثل البضائع الخطرة؟",
  "Safety is our top priority. BLUE MAX SHIPPING offers specialized handling, packaging, labeling, and documentation for dangerous goods, ensuring full compliance with safety standards and regulations. We have the expertise to safeguard your shipments.": "السلامة أولويتنا القصوى. تقدّم BLUE MAX SHIPPING مناولة وتغليفاً وملصقات وتوثيقاً متخصصاً للبضائع الخطرة مع الامتثال الكامل لمعايير ولوائح السلامة. لدينا الخبرة لحماية شحناتكم.",
  "Can BLUE MAX SHIPPING handle complex customs clearance processes efficiently?": "هل تستطيع BLUE MAX SHIPPING إدارة إجراءات التخليص الجمركي المعقدة بكفاءة؟",
  "Absolutely. We specialize in all types of customs clearances for import and export shipments. Our services include managing customs documentation, conducting inspections for VAT compliance, liaising with authorities, and adhering to regulations. We save you time and effort while ensuring compliance.": "بالتأكيد. نتخصص في جميع أنواع التخليص الجمركي لشحنات الاستيراد والتصدير. تشمل خدماتنا إدارة المستندات الجمركية وإجراء فحوصات الامتثال لضريبة القيمة المضافة والتنسيق مع الجهات والالتزام باللوائح. نوفر لكم الوقت والجهد مع ضمان الامتثال.",
  "What geographical areas does BLUE MAX SHIPPING primarily serve?": "ما المناطق الجغرافية التي تخدمها BLUE MAX SHIPPING بشكل أساسي؟",
  "BLUE MAX SHIPPING specializes in sea freight exports to African destinations, including DR. Congo, Uganda, Tanzania, Abidjan, and Rwanda. However, our global network extends to Asia, Europe, America, and worldwide locations, making us your ideal logistics partner for diverse international shipments.": "تتخصص BLUE MAX SHIPPING في صادرات الشحن البحري إلى وجهات أفريقية تشمل جمهورية الكونغو الديمقراطية وأوغندا وتنزانيا وأبيدجان ورواندا. وتمتد شبكتنا العالمية إلى آسيا وأوروبا وأمريكا ومواقع حول العالم، لنكون شريككم اللوجستي المثالي للشحنات الدولية المتنوعة.",
  "We have worked with Blue Max Shipping for our international cargo requirements and have always received prompt support, competitive rates, and professional service. Highly recommended.": "عملنا مع بلو ماكس للشحن في متطلبات شحننا الدولي وتلقينا دائماً دعماً سريعاً وأسعاراً تنافسية وخدمة احترافية. نوصي بهم بشدة.",
  "From freight forwarding and container arrangements to customs coordination, Blue Max Shipping offers a complete logistics solution. Their team understands the shipping industry and provides practical solutions when challenges arise.": "من الشحن الدولي وترتيب الحاويات إلى التنسيق الجمركي، تقدّم بلو ماكس للشحن حلاً لوجستياً متكاملاً. فريقهم يفهم قطاع الشحن ويقدّم حلولاً عملية عند ظهور التحديات.",
  "What sets Blue Max Shipping apart is their communication. We always receive timely responses and clear information about our shipments. Their team takes responsibility and works closely with us until the shipment is completed": "ما يميز بلو ماكس للشحن هو تواصلهم. نتلقى دائماً ردوداً في الوقت المناسب ومعلومات واضحة عن شحناتنا. يتحمل فريقهم المسؤولية ويعمل معنا عن قرب حتى اكتمال الشحنة.",
  "Blue Max Shipping has proven to be a dependable partner for our international cargo requirements. Their professional approach, competitive solutions, and commitment to customer satisfaction have made them one of our preferred logistics partners.": "أثبتت بلو ماكس للشحن أنها شريك يعتمد عليه في شحناتنا الدولية. نهجهم الاحترافي وحلولهم التنافسية والتزامهم برضا العملاء جعلهم من شركائنا اللوجستيين المفضلين.",
  "Excellent service and competitive pricing. Blue Max Shipping has helped us manage our shipments efficiently, even when there are unexpected changes in vessel schedules": "خدمة ممتازة وأسعار تنافسية. ساعدتنا بلو ماكس للشحن على إدارة شحناتنا بكفاءة حتى عند حدوث تغييرات غير متوقعة في جداول السفن.",
  "Blue Max Shipping has been an excellent logistics partner for our import operations. Their team is responsive, transparent, and always keeps us updated on shipment progress. Their competitive rates and professional coordination make them our preferred shipping partner": "كانت بلو ماكس للشحن شريكاً لوجستياً ممتازاً لعمليات الاستيراد لدينا. فريقهم سريع الاستجابة وشفاف ويبقيَنا على اطلاع دائم بتقدم الشحنة. أسعارهم التنافسية وتنسيقهم الاحترافي يجعلانهم شريك الشحن المفضل لدينا.",
  "We have handled multiple shipments with Blue Max Shipping, and their service has been consistently reliable. From container booking to documentation and final delivery coordination, their team manages everything professionally": "تعاملنا مع بلو ماكس للشحن في شحنات متعددة، وكانت خدمتهم موثوقة باستمرار. من حجز الحاوية إلى التوثيق وتنسيق التسليم النهائي، يدير فريقهم كل شيء باحتراف.",
  "Blue Max Shipping provides exactly what a business needs from a logistics partner—competitive pricing, quick communication, and dependable service. They understand the importance of timely cargo movement and always work hard to find solutions": "تقدّم بلو ماكس للشحن بالضبط ما تحتاجه الشركات من شريك لوجستي: أسعاراً تنافسية وتواصلاً سريعاً وخدمة يمكن الاعتماد عليها. يدركون أهمية حركة البضائع في الوقت المحدد ويعملون بجد لإيجاد الحلول.",
  "Blue Max Shipping has made our international shipping operations much easier. Their coordination with shipping lines, documentation support, and customer service have been outstanding. We are happy to have them as our logistics partner": "سهّلت بلو ماكس للشحن عمليات شحننا الدولي كثيراً. تنسيقهم مع خطوط الشحن ودعم التوثيق وخدمة العملاء كان متميزاً. يسعدنا أن يكونوا شريكنا اللوجستي.",
  "We value reliability when moving our cargo internationally, and Blue Max Shipping has consistently delivered on that expectation. Their team is professional, proactive, and focused on finding the right shipping solution their communication, coordination, and customer service have been outstanding": "نقدّر الموثوقية عند نقل بضائعنا دولياً، وقد أوفت بلو ماكس للشحن بهذا التوقع باستمرار. فريقهم محترف واستباقي ويركز على إيجاد الحل المناسب، وتواصلهم وتنسيقهم وخدمة العملاء كانت متميزة.",
  "Our sea freight services offer a vast network connecting Africa, Asia, Europe, America, and beyond. Count on us for reliable, quality-driven solutions ensuring the secure and timely delivery of your cargo.": "تقدّم خدمات الشحن البحري لدينا شبكة واسعة تربط أفريقيا وآسيا وأوروبا وأمريكا وما بعدها. اعتمدوا علينا لحلول موثوقة قائمة على الجودة تضمن تسليم بضائعكم بأمان وفي الوقت المحدد.",
  "At BLUE MAX SHIPPING, Dubai, our sea freight services are the cornerstone of our global logistics network. We take pride in our ability to seamlessly connect various destinations, with a primary focus on serving African countries such as DR. Congo, Uganda, Rwanda, Tanzania, and many others. However, our reach extends far beyond the African continent, encompassing Asia, Europe, America, and destinations worldwide.": "في BLUE MAX SHIPPING بدبي، تشكّل خدمات الشحن البحري حجر الأساس لشبكتنا اللوجستية العالمية. نفتخر بقدرتنا على ربط الوجهات بسلاسة، مع تركيز أساسي على خدمة دول أفريقية مثل جمهورية الكونغو الديمقراطية وأوغندا ورواندا وتنزانيا وغيرها. ويمتد نطاقنا إلى ما هو أبعد من القارة الأفريقية ليشمل آسيا وأوروبا وأمريكا ووجهات حول العالم.",
  "With an extensive presence in key regions, our sea freight services are strategically designed to provide efficient connections to a multitude of destinations. We ensure that your cargo reaches its endpoint, whether it's in Africa, Asia, Europe, America, or anywhere else on the globe.": "بحضور واسع في مناطق رئيسية، صُممت خدمات الشحن البحري لدينا استراتيجياً لتوفير ربط فعّال بعدد كبير من الوجهات. نضمن وصول بضائعكم إلى وجهتها سواء في أفريقيا أو آسيا أو أوروبا أو أمريكا أو في أي مكان آخر في العالم.",
  "We are committed to delivering reliable sea freight solutions that prioritize the safety and punctuality of your shipments. Regardless of the destination, our team handles your cargo with utmost care and professionalism.": "نلتزم بتقديم حلول شحن بحري موثوقة تعطي الأولوية لسلامة شحناتكم ودقتها الزمنية. أياً كانت الوجهة، يتعامل فريقنا مع بضائعكم بأقصى عناية واحتراف.",
  "Every cargo is unique, and so are its requirements. We offer tailored sea freight solutions that cater to the specific needs of your shipment, whether it's large-scale, time-sensitive, or requires special handling.": "كل شحنة فريدة وكذلك متطلباتها. نقدّم حلول شحن بحري مخصصة تلبي احتياجات شحنتكم سواء كانت كبيرة الحجم أو حساسة للوقت أو تتطلب مناولة خاصة.",
  "Our dedication to quality and excellence is unwavering. We ensure that your cargo is not just transported but also handled with the highest standards of care, providing you with peace of mind throughout the shipping process.": "تفانينا في الجودة والتميز لا يتزعزع. نضمن ألا تُنقل بضائعكم فحسب بل تُعامل بأعلى معايير العناية، لنمنحكم راحة البال طوال عملية الشحن.",
  "With BLUE MAX SHIPPING, you can trust that your sea freight needs are in capable hands, ensuring secure and timely cargo delivery to destinations across the globe.": "مع BLUE MAX SHIPPING يمكنكم الوثوق بأن احتياجات الشحن البحري لديكم في أيدٍ قديرة، لضمان تسليم آمن وفي الوقت المحدد إلى وجهات حول العالم.",
  "Our air freight services feature special rates negotiated with a global network of carriers. Enjoy cost-effective and dependable transportation for your goods, ensuring swift and secure delivery to your destination.": "تتميز خدمات الشحن الجوي لدينا بأسعار خاصة تم التفاوض عليها مع شبكة عالمية من الناقلين. استمتعوا بنقل فعّال التكلفة وموثوق لبضائعكم مع تسليم سريع وآمن إلى وجهتكم.",
  "At BLUE MAX SHIPPING, Dubai, we recognize the significance of efficient air cargo solutions for businesses worldwide. Our Air Freight service offers a unique advantage – special rates obtained through partnerships with an extensive network of global carriers. This advantage translates into cost-effective and reliable air transportation tailored to meet your cargo needs.": "ندرك في BLUE MAX SHIPPING بدبي أهمية حلول الشحن الجوي الفعّالة للشركات حول العالم. تقدّم خدمة الشحن الجوي لدينا ميزة فريدة: أسعاراً خاصة عبر شراكات مع شبكة واسعة من الناقلين العالميين. تتحول هذه الميزة إلى نقل جوي موثوق وفعّال التكلفة مصمم حسب احتياجات بضائعكم.",
  "We leverage our strong industry connections to secure competitive rates with a wide range of global carriers. This ensures that your air cargo requirements are met with cost-effective solutions, helping you optimize your logistics expenses.": "نستفيد من علاقاتنا القوية في القطاع لتأمين أسعار تنافسية مع مجموعة واسعة من الناقلين العالميين. هذا يضمن تلبية متطلبات الشحن الجوي لديكم بحلول فعّالة التكلفة ويساعدكم على تحسين نفقاتكم اللوجستية.",
  "Our expansive network of carriers spans the globe, allowing us to source the best rates available. This network provides the flexibility to choose carriers that align with your specific shipment requirements, ensuring efficient and timely delivery.": "تمتد شبكة ناقلينا الواسعة حول العالم، مما يتيح لنا الحصول على أفضل الأسعار المتاحة. تمنحكم هذه الشبكة مرونة اختيار الناقلين الذين يتوافقون مع متطلبات شحنتكم لضمان تسليم فعّال وفي الوقت المحدد.",
  "When you choose our Air Freight service, you can count on the reliability and speed of our transportation. We prioritize the swift and secure delivery of your goods, minimizing transit times and ensuring your cargo reaches its destination intact.": "عند اختيار خدمة الشحن الجوي لدينا، يمكنكم الاعتماد على موثوقية نقلنا وسرعته. نعطي الأولوية لتسليم بضائعكم بسرعة وأمان مع تقليل أوقات العبور وضمان وصولها سليمة.",
  "Whether your cargo is time-sensitive, high-value, or requires special handling, we offer tailored air cargo solutions to accommodate your unique needs. Our team works closely with you to ensure your cargo is transported efficiently and safely.": "سواء كانت بضائعكم حساسة للوقت أو عالية القيمة أو تتطلب مناولة خاصة، نقدّم حلول شحن جوي مخصصة لتلبية احتياجاتكم. يعمل فريقنا معكم عن قرب لضمان نقل بضائعكم بكفاءة وأمان.",
  "With BLUE MAX SHIPPING, you gain access to a comprehensive air freight service that not only saves you costs but also provides peace of mind, knowing your goods are in capable hands during their journey to their final destination.": "مع BLUE MAX SHIPPING تحصلون على خدمة شحن جوي شاملة لا توفر التكاليف فحسب بل تمنحكم راحة البال، لمعرفتكم أن بضائعكم في أيدٍ قديرة خلال رحلتها إلى الوجهة النهائية.",
  "Our comprehensive NVOCC services provide reliable and cost-effective ocean freight solutions, offering flexible shipping options, efficient cargo management, and seamless global transportation tailored to your business needs.": "تقدّم خدمات NVOCC الشاملة لدينا حلول شحن بحري موثوقة وفعّالة التكلفة، مع خيارات شحن مرنة وإدارة فعّالة للبضائع ونقل عالمي سلس مصمم حسب احتياجات أعمالكم.",
  "At BLUE MAX SHIPPING, Dubai, we provide reliable and efficient Non-Vessel Operating Common Carrier (NVOCC) services, delivering seamless ocean freight solutions for businesses worldwide. Through our extensive global network and strategic partnerships with leading shipping lines, we ensure your cargo reaches its destination safely, on schedule, and at competitive rates.": "نقدّم في BLUE MAX SHIPPING بدبي خدمات ناقل مشترك لا يشغّل سفناً (NVOCC) موثوقة وفعّالة، مع حلول شحن بحري سلسة للشركات حول العالم. عبر شبكتنا العالمية الواسعة وشراكاتنا الاستراتيجية مع أبرز خطوط الشحن، نضمن وصول بضائعكم بأمان وفي الموعد وبأسعار تنافسية.",
  "Our NVOCC services are designed to accommodate shipments of all sizes, whether you require Full Container Load (FCL) or Less than Container Load (LCL). We offer flexible shipping options tailored to your cargo requirements while maintaining reliability and cost efficiency.": "صُممت خدمات NVOCC لدينا لاستيعاب الشحنات بجميع أحجامها، سواء كنتم تحتاجون حاوية كاملة أو شحنة أقل من حاوية. نقدّم خيارات شحن مرنة مصممة حسب متطلبات بضائعكم مع الحفاظ على الموثوقية وكفاءة التكلفة.",
  "With a strong international network of carriers and logistics partners, we provide dependable shipping services connecting major ports across Asia, Europe, Africa, the Middle East, and the Americas. Our experienced team coordinates every shipment with precision and professionalism.": "بشبكة دولية قوية من الناقلين والشركاء اللوجستيين، نقدّم خدمات شحن يمكن الاعتماد عليها تربط الموانئ الرئيسية في آسيا وأوروبا وأفريقيا والشرق الأوسط والأمريكتين. ينسّق فريقنا ذو الخبرة كل شحنة بدقة واحتراف.",
  "From booking and documentation to cargo tracking and final delivery, we manage every stage of the shipping process. Our comprehensive approach ensures smooth operations, transparent communication, and hassle-free logistics for every customer.": "من الحجز والتوثيق إلى تتبع البضائع والتسليم النهائي، ندير كل مرحلة من عملية الشحن. يضمن نهجنا الشامل عمليات سلسة وتواصلاً شفافاً ولوجستيات بلا عناء لكل عميل.",
  "We leverage long-standing partnerships with global shipping lines to offer competitive freight rates without compromising service quality. Our solutions are designed to help businesses optimize transportation costs while ensuring timely and secure cargo movement.": "نستفيد من شراكات طويلة الأمد مع خطوط شحن عالمية لتقديم أسعار تنافسية دون المساس بجودة الخدمة. صُممت حلولنا لمساعدة الشركات على تحسين تكاليف النقل مع ضمان حركة بضائع آمنة وفي الوقت المحدد.",
  "By choosing BLUE MAX SHIPPING for your NVOCC requirements, you gain a trusted logistics partner committed to delivering reliable, efficient, and customer-focused ocean freight solutions. Our dedication to quality service ensures your cargo is handled with professionalism from origin to destination.": "باختيار BLUE MAX SHIPPING لمتطلبات NVOCC تحصلون على شريك لوجستي موثوق ملتزم بتقديم حلول شحن بحري موثوقة وفعّالة وتركز على العميل. تفانينا في جودة الخدمة يضمن التعامل مع بضائعكم باحتراف من المنشأ إلى الوجهة.",
  "Our warehouse facility serves as the heart of our logistics operations, equipped with state-of-the-art amenities for loading, offloading, and storage. Whether you need short-term or long-term storage, we provide a secure and organized environment for your cargo.": "تشكّل منشأة المستودع لدينا قلب عملياتنا اللوجستية، وهي مجهّزة بمرافق حديثة للتحميل والتفريغ والتخزين. سواء احتجتم تخزيناً قصير أو طويل الأجل، نوفر بيئة آمنة ومنظمة لبضائعكم.",
  "At BLUE MAX SHIPPING, Dubai, our Warehouse Facility is the cornerstone of our logistics infrastructure. It's more than just a storage space; it's the central hub where the safekeeping and management of your goods come to life. Our facility boasts cutting-edge equipment, including advanced loading and offloading capabilities, forklifts, and crane services, ensuring the utmost security and efficiency for your cargo.": "في BLUE MAX SHIPPING بدبي، تشكّل منشأة المستودع حجر الأساس في بنيتنا اللوجستية. إنها أكثر من مساحة تخزين؛ إنها المركز الذي تتحقق فيه حماية بضائعكم وإدارتها. تتميز منشأتنا بمعدات متطورة تشمل قدرات تحميل وتفريغ متقدمة ورافعات شوكية وخدمات رافعات، لضمان أقصى درجات الأمن والكفاءة.",
  "Our warehouse facility is equipped with the latest technology and machinery, providing a secure and efficient environment for the handling, storage, and management of your cargo.": "منشأة المستودع لدينا مجهّزة بأحدث التقنيات والآلات، لتوفير بيئة آمنة وفعّالة لمناولة بضائعكم وتخزينها وإدارتها.",
  "Whether your cargo requires short-term or long-term storage, our facility offers flexible solutions to accommodate your needs. You can trust us to safeguard your goods until they are ready for their next journey.": "سواء احتاجت بضائعكم تخزيناً قصير أو طويل الأجل، تقدّم منشأتنا حلولاً مرنة تناسب احتياجاتكم. يمكنكم الوثوق بنا لحماية بضائعكم حتى تكون جاهزة لرحلتها التالية.",
  "We maintain a meticulous approach to organization and security within our warehouse. Your cargo is stored in an organized manner, and stringent security measures are in place to ensure its safety.": "نحافظ على نهج دقيق في التنظيم والأمن داخل مستودعنا. تُخزَّن بضائعكم بشكل منظم، وتُطبَّق إجراءات أمنية صارمة لضمان سلامتها.",
  "Our warehouse is not just a storage space; it plays a crucial role in our broader logistics operations. It serves as the backbone of our supply chain, ensuring the seamless flow of goods from storage to transportation and delivery.": "مستودعنا ليس مجرد مساحة تخزين؛ بل يؤدي دوراً أساسياً في عملياتنا اللوجستية الأوسع. إنه عمود سلسلة الإمداد لدينا، ويضمن تدفق البضائع بسلاسة من التخزين إلى النقل والتسليم.",
  "Choosing BLUE MAX SHIPPING means entrusting your cargo to a secure and organized warehouse facility that forms the bedrock of our logistics capabilities. Your goods are in safe hands, whether they require temporary shelter or extended storage.": "اختيار BLUE MAX SHIPPING يعني إسناد بضائعكم إلى منشأة تخزين آمنة ومنظمة تشكّل أساس قدراتنا اللوجستية. بضائعكم في أيدٍ أمينة سواء احتاجت إيواءً مؤقتاً أو تخزيناً ممتداً.",
  "Our comprehensive transportation services, powered by a diverse fleet of trucks and trailers, offer tailored options to suit your specific requirements. From heavy cargo side-loading to meticulous logistics, we ensure the seamless transportation of your goods for a worry-free shipping experience.": "تقدّم خدمات النقل الشاملة لدينا، المدعومة بأسطول متنوع من الشاحنات والمقطورات، خيارات مخصصة تناسب متطلباتكم. من التحميل الجانبي للبضائع الثقيلة إلى اللوجستيات الدقيقة، نضمن نقلاً سلساً لبضائعكم وتجربة شحن بلا قلق.",
  "At BLUE MAX SHIPPING, Dubai, we take pride in delivering end-to-end logistics solutions, and our Transportation Services form a vital link in this chain. With a versatile fleet of trucks and trailers at our disposal, we offer a spectrum of transportation options customized to match your cargo's unique characteristics. From the efficiency of side-loading automatic trailers for heavy cargo to our unwavering commitment to ensuring smooth transportation, we prioritize every aspect of your shipping process.": "نفتخر في BLUE MAX SHIPPING بدبي بتقديم حلول لوجستية متكاملة، وتشكّل خدمات النقل حلقة أساسية في هذه السلسلة. بأسطول متعدد الاستخدامات من الشاحنات والمقطورات، نقدّم خيارات نقل مخصصة لتناسب خصائص بضائعكم. من كفاءة المقطورات الآلية ذات التحميل الجانبي للبضائع الثقيلة إلى التزامنا الراسخ بنقل سلس، نعطي الأولوية لكل جانب من عملية الشحن.",
  "Our comprehensive fleet of trucks and trailers caters to a wide range of cargo needs. Whether you have standard shipments or heavy, oversized cargo, we have the vehicles and expertise to transport them safely and efficiently.": "يلبي أسطولنا الشامل من الشاحنات والمقطورات نطاقاً واسعاً من احتياجات البضائع. سواء كانت شحنات قياسية أو بضائع ثقيلة وكبيرة الحجم، لدينا المركبات والخبرة لنقلها بأمان وكفاءة.",
  "For heavy cargo, our side-loading automatic trailers provide a specialized solution. These trailers are equipped to handle large, challenging loads with precision, ensuring secure transportation.": "للبضائع الثقيلة، تقدّم مقطوراتنا الآلية ذات التحميل الجانبي حلاً متخصصاً. هذه المقطورات مجهّزة للتعامل مع الأحمال الكبيرة والصعبة بدقة لضمان نقل آمن.",
  "Our team is dedicated to ensuring that your goods are transported smoothly from origin to destination. We prioritize careful handling, timely deliveries, and clear communication throughout the shipping process.": "فريقنا مكرّس لضمان نقل بضائعكم بسلاسة من المنشأ إلى الوجهة. نعطي الأولوية للمناولة الدقيقة والتسليم في الوقت المحدد والتواصل الواضح طوال عملية الشحن.",
  "With BLUE MAX SHIPPING, you can have peace of mind knowing that your cargo is in the hands of experienced professionals who are committed to delivering it securely and on time.": "مع BLUE MAX SHIPPING يمكنكم الاطمئنان إلى أن بضائعكم في أيدي محترفين ذوي خبرة ملتزمين بتسليمها بأمان وفي الوقت المحدد.",
  "Our Transportation Services are designed to make your shipping experience worry-free and efficient. Trust us to handle your cargo with the utmost care, regardless of its size or complexity, and to provide you with tailored transportation solutions that meet your specific needs.": "صُممت خدمات النقل لدينا لجعل تجربة الشحن لديكم بلا قلق وفعّالة. ثقوا بنا للتعامل مع بضائعكم بأقصى عناية مهما كان حجمها أو تعقيدها، ولتقديم حلول نقل مخصصة تلبي احتياجاتكم.",
  "Our efficient land transportation services, coupled with border clearance and claims handling expertise, facilitate smooth cargo movement across regional borders. Rely on our local knowledge and connections to ensure your goods reach their destination without delays or complications.": "تسهّل خدمات النقل البري الفعّالة لدينا، مع خبرة التخليص الحدودي ومعالجة المطالبات، حركة البضائع بسلاسة عبر الحدود الإقليمية. اعتمدوا على معرفتنا المحلية وعلاقاتنا لضمان وصول بضائعكم دون تأخير أو تعقيدات.",
  "At BLUE MAX SHIPPING, Dubai, our Land Transportation services are a testament to our commitment to providing comprehensive logistics solutions. Specifically tailored to the UAE and GCC countries, our services extend beyond mere transportation. We excel in border clearance and claims handling, offering a holistic approach to moving your cargo seamlessly across regional borders. With a deep understanding of the local landscape and strong connections, we are equipped to navigate the intricacies of land transport, ensuring your goods arrive at their destination without disruptions.": "في BLUE MAX SHIPPING بدبي، تشهد خدمات النقل البري على التزامنا بتقديم حلول لوجستية شاملة. صُممت خصيصاً للإمارات ودول الخليج وتمتد إلى ما هو أبعد من النقل فقط. نتميز في التخليص الحدودي ومعالجة المطالبات بنهج متكامل لنقل بضائعكم بسلاسة عبر الحدود الإقليمية. بفهم عميق للواقع المحلي وعلاقات قوية، نحن مجهزون للتعامل مع تعقيدات النقل البري وضمان وصول بضائعكم دون انقطاع.",
  "Our land transportation services are optimized for the UAE and GCC region, allowing for swift and efficient cargo movement within this specific area.": "خدمات النقل البري لدينا محسّنة لمنطقة الإمارات ودول الخليج، مما يتيح حركة بضائع سريعة وفعّالة ضمن هذه المنطقة.",
  "We specialize in border clearance procedures, ensuring that your cargo transitions smoothly across regional borders without delays or complications.": "نتخصص في إجراءات التخليص الحدودي لضمان عبور بضائعكم الحدود الإقليمية بسلاسة دون تأخير أو تعقيدات.",
  "In the event of unforeseen issues, our claims handling expertise comes into play. We have the knowledge and experience to address and resolve any challenges that may arise during the land transportation process.": "في حال حدوث مشكلات غير متوقعة، تتدخل خبرتنا في معالجة المطالبات. لدينا المعرفة والتجربة لمعالجة أي تحديات قد تظهر أثناء النقل البري وحلها.",
  "Our deep understanding of the local landscape, regulations, and connections within the UAE and GCC countries enables us to provide you with a competitive edge in navigating the intricacies of land transport.": "فهمنا العميق للواقع المحلي واللوائح والعلاقات داخل الإمارات ودول الخليج يمكّننا من منحكم ميزة تنافسية في التعامل مع تعقيدات النقل البري.",
  "By choosing BLUE MAX SHIPPING for your land transportation needs in the UAE and GCC, you gain a trusted partner dedicated to ensuring the hassle-free and efficient movement of your goods across regional borders. Count on us to deliver your cargo without delays or issues, leveraging our local expertise and connections.": "باختيار BLUE MAX SHIPPING لاحتياجات النقل البري في الإمارات والخليج تحصلون على شريك موثوق ملتزم بضمان حركة بضائعكم عبر الحدود الإقليمية بكفاءة ودون عناء. اعتمدوا علينا لتسليم بضائعكم دون تأخير أو مشكلات مستفيدين من خبرتنا المحلية وعلاقاتنا.",
  "We specialize in simplifying complex customs procedures for your import and export shipments. Our services cover customs documentation management, VAT compliance inspections, claim refunds, Dubai Municipality liaison, and strict adherence to FIRS regulations. Trust us to streamline customs processes, saving you time and ensuring full compliance.": "نتخصص في تبسيط الإجراءات الجمركية المعقدة لشحنات الاستيراد والتصدير. تغطي خدماتنا إدارة المستندات الجمركية وفحوصات الامتثال لضريبة القيمة المضافة واسترداد المطالبات والتنسيق مع بلدية دبي والالتزام الصارم بلوائح FIRS. ثقوا بنا لتبسيط العمليات الجمركية وتوفير وقتكم وضمان الامتثال الكامل.",
  "Customs procedures can often be intricate and time-consuming, but with BLUE MAX SHIPPING, Dubai, you can leave the complexities to us. Our Customs Clearance and Approvals service is designed to simplify the entire customs process for your import and export shipments. We excel in managing all aspects of customs, including documentation, VAT compliance, claim refunds, communication with Dubai Municipality, and strict adherence to FIRS regulations. Our comprehensive customs services are geared toward not only saving you valuable time but also ensuring that your cargo meets all necessary regulations without any hitches.": "قد تكون الإجراءات الجمركية معقدة وتستغرق وقتاً، لكن مع BLUE MAX SHIPPING في دبي يمكنكم ترك التعقيدات لنا. صُممت خدمة التخليص الجمركي والموافقات لتبسيط العملية الجمركية بالكامل لشحنات الاستيراد والتصدير. نتميز في إدارة جميع جوانب الجمارك بما في ذلك المستندات والامتثال لضريبة القيمة المضافة واسترداد المطالبات والتواصل مع بلدية دبي والالتزام الصارم بلوائح FIRS. تهدف خدماتنا الجمركية الشاملة إلى توفير وقتكم الثمين وضمان استيفاء بضائعكم لجميع اللوائح دون عقبات.",
  "Our team specializes in handling a wide range of customs requirements, ensuring that your cargo smoothly transitions through import and export processes.": "يتخصص فريقنا في التعامل مع مجموعة واسعة من المتطلبات الجمركية لضمان عبور بضائعكم عمليات الاستيراد والتصدير بسلاسة.",
  "We conduct thorough customs inspections to verify VAT compliance, facilitating the successful movement of your goods while adhering to tax regulations.": "نجري فحوصات جمركية دقيقة للتحقق من الامتثال لضريبة القيمة المضافة، لتسهيل حركة بضائعكم بنجاح مع الالتزام باللوائح الضريبية.",
  "In the event of eligible claims, we manage the refund process efficiently, minimizing delays and ensuring you receive the refunds you are entitled to.": "في حال وجود مطالبات مستحقة، ندير عملية الاسترداد بكفاءة لتقليل التأخير وضمان حصولكم على المبالغ المستحقة.",
  "Our close coordination with Dubai Municipality authorities ensures that your cargo complies with local regulations, further streamlining the customs process.": "يضمن تنسيقنا الوثيق مع سلطات بلدية دبي امتثال بضائعكم للوائح المحلية، مما يزيد من سلاسة العملية الجمركية.",
  "When you choose BLUE MAX SHIPPING for your customs clearance and approvals, you gain a partner dedicated to simplifying the customs journey, saving you time and effort while ensuring that your cargo adheres to all necessary regulations.": "عند اختيار BLUE MAX SHIPPING للتخليص الجمركي والموافقات تحصلون على شريك ملتزم بتبسيط الرحلة الجمركية وتوفير الوقت والجهد مع ضمان التزام بضائعكم بجميع اللوائح اللازمة.",
  "Our service encompasses the meticulous management of the entire vehicle handling process, from loading to freight calculations, inspections, and claim deposit handling. Our keen attention to detail ensures that your vehicles are handled with precision, and all documentation is accurately completed.": "تشمل خدمتنا الإدارة الدقيقة لعملية مناولة المركبات بالكامل، من التحميل إلى حسابات الشحن والفحوصات وإدارة ودائع المطالبات. اهتمامنا بالتفاصيل يضمن التعامل مع مركباتكم بدقة واستكمال جميع المستندات بشكل صحيح.",
  "At BLUE MAX SHIPPING, Dubai, we understand that handling vehicle loading and documentation is a critical aspect of our service. We take pride in managing the entire process with precision and care, leaving no room for error. Our commitment to excellence extends to every aspect of vehicle handling, including loading, freight calculations, inspections, and the meticulous management of claim deposit amounts. With our keen attention to detail, you can trust that your vehicles will be handled meticulously, and all required documentation will be completed accurately.": "ندرك في BLUE MAX SHIPPING بدبي أن تحميل المركبات والتوثيق جانب أساسي من خدمتنا. نفتخر بإدارة العملية بالكامل بدقة وعناية دون مجال للخطأ. يمتد التزامنا بالتميز إلى كل جانب من مناولة المركبات بما في ذلك التحميل وحسابات الشحن والفحوصات والإدارة الدقيقة لمبالغ ودائع المطالبات. باهتمامنا بالتفاصيل يمكنكم الوثوق بأن مركباتكم ستُعامل بعناية وأن جميع المستندات المطلوبة ستُستكمل بدقة.",
  "We offer comprehensive vehicle handling solutions, managing every step of the process, from loading your vehicles onto transport to handling the necessary documentation.": "نقدّم حلول مناولة مركبات شاملة، وندير كل خطوة من العملية من تحميل مركباتكم على وسيلة النقل إلى التعامل مع المستندات اللازمة.",
  "Our expertise ensures accurate freight calculations, optimizing costs while ensuring the secure transportation of your vehicles.": "تضمن خبرتنا حسابات شحن دقيقة تحسّن التكاليف مع ضمان نقل آمن لمركباتكم.",
  "We conduct thorough inspections to ensure the condition of your vehicles is well-documented before and after transportation, providing transparency and peace of mind.": "نجري فحوصات دقيقة لضمان توثيق حالة مركباتكم جيداً قبل النقل وبعده، لتوفير الشفافية وراحة البال.",
  "In the event of claims, we manage deposit amounts with meticulous care, ensuring a smooth process for resolution.": "في حال وجود مطالبات، ندير مبالغ الودائع بعناية فائقة لضمان عملية حل سلسة.",
  "Choosing BLUE MAX SHIPPING for your vehicle handling needs means entrusting your vehicles to a partner dedicated to precision and attention to detail. Our comprehensive service guarantees the meticulous management of your vehicles, from loading to documentation, ensuring a seamless experience.": "اختيار BLUE MAX SHIPPING لاحتياجات مناولة المركبات يعني إسناد مركباتكم إلى شريك ملتزم بالدقة والاهتمام بالتفاصيل. تضمن خدمتنا الشاملة الإدارة الدقيقة لمركباتكم من التحميل إلى التوثيق لتجربة سلسة.",
  "Safe Handling of Hazardous Materials: Our specialized dangerous goods handling services cover every aspect, from secure handling and expert packaging to precise labeling and documentation. We're well-versed in the unique requirements and regulations surrounding hazardous materials, ensuring full compliance with safety standards.": "المناولة الآمنة للمواد الخطرة: تغطي خدماتنا المتخصصة لمناولة البضائع الخطرة كل جانب، من المناولة الآمنة والتغليف الاحترافي إلى الملصقات الدقيقة والتوثيق. نحن ملمون بالمتطلبات واللوائح الخاصة بالمواد الخطرة لضمان الامتثال الكامل لمعايير السلامة.",
  "At BLUE MAX SHIPPING, Dubai, safety is paramount when it comes to handling dangerous goods. Our specialized Dangerous Goods Handling Services are designed to provide a comprehensive solution that prioritizes the secure transport of hazardous materials. We leave no room for compromise, encompassing everything from meticulous handling and expert packaging to precise labeling and documentation. With a deep understanding of the unique requirements and regulations governing dangerous goods, we ensure that your shipments not only meet but exceed all safety standards and regulations.": "في BLUE MAX SHIPPING بدبي، السلامة أولوية قصوى عند مناولة البضائع الخطرة. صُممت خدماتنا المتخصصة لتقديم حل شامل يعطي الأولوية للنقل الآمن للمواد الخطرة. لا نترك مجالاً للتنازل، ونغطي كل شيء من المناولة الدقيقة والتغليف الاحترافي إلى الملصقات والتوثيق الدقيق. بفهم عميق للمتطلبات واللوائح المنظمة للبضائع الخطرة، نضمن أن شحناتكم لا تستوفي معايير السلامة فحسب بل تتجاوزها.",
  "Our services cover every aspect of handling dangerous goods, guaranteeing the safety and security of your shipments from start to finish.": "تغطي خدماتنا كل جانب من مناولة البضائع الخطرة، لضمان سلامة شحناتكم وأمنها من البداية إلى النهاية.",
  "We employ expert packaging techniques that are specifically tailored to the nature of hazardous materials, ensuring their integrity throughout transportation.": "نستخدم تقنيات تغليف احترافية مصممة خصيصاً لطبيعة المواد الخطرة، لضمان سلامتها طوال النقل.",
  "Accurate and compliant labeling is a cornerstone of our service, providing clear information about the nature of the goods and necessary safety precautions.": "الملصقات الدقيقة والمتوافقة حجر أساس في خدمتنا، وتوفر معلومات واضحة عن طبيعة البضائع واحتياطات السلامة اللازمة.",
  "We maintain a deep understanding of the complex regulations surrounding dangerous goods, guaranteeing that your shipments not only comply with standards but also adhere to best practices for safety.": "نحافظ على فهم عميق للوائح المعقدة المتعلقة بالبضائع الخطرة، لضمان امتثال شحناتكم للمعايير واتباع أفضل ممارسات السلامة.",
  "Choosing BLUE MAX SHIPPING for your dangerous goods handling needs means choosing a partner dedicated to the utmost safety and regulatory compliance. Our specialized services ensure that your hazardous materials are handled, packaged, labeled, and documented with the highest level of expertise and care. Your cargo's safety is our top priority.": "اختيار BLUE MAX SHIPPING لمناولة البضائع الخطرة يعني اختيار شريك ملتزم بأعلى درجات السلامة والامتثال التنظيمي. تضمن خدماتنا المتخصصة مناولة موادكم الخطرة وتغليفها ووضع الملصقات عليها وتوثيقها بأعلى مستوى من الخبرة والعناية. سلامة بضائعكم أولويتنا القصوى."
};
  var MESSAGES = {
  "nameRequired": {
    "en": "Name is required",
    "ar": "الاسم مطلوب"
  },
  "nameMin": {
    "en": "Minimum of 3 characters required",
    "ar": "يلزم 3 أحرف على الأقل"
  },
  "emailRequired": {
    "en": "Email is required",
    "ar": "البريد الإلكتروني مطلوب"
  },
  "emailInvalid": {
    "en": "Invalid email format",
    "ar": "صيغة البريد الإلكتروني غير صحيحة"
  },
  "subjectRequired": {
    "en": "Subject is required",
    "ar": "الموضوع مطلوب"
  },
  "subjectMin": {
    "en": "Minimum of 5 characters required",
    "ar": "يلزم 5 أحرف على الأقل"
  },
  "messageRequired": {
    "en": "Message is required",
    "ar": "الرسالة مطلوبة"
  },
  "messageMin": {
    "en": "Minimum of 8 characters required",
    "ar": "يلزم 8 أحرف على الأقل"
  },
  "fillAll": {
    "en": "please fill all fields",
    "ar": "يرجى تعبئة جميع الحقول"
  },
  "emailSent": {
    "en": "Your Email Sent Successfully",
    "ar": "تم إرسال بريدك الإلكتروني بنجاح"
  },
  "emailFail": {
    "en": "Something went wrong! Email is not sentt",
    "ar": "حدث خطأ! لم يتم إرسال البريد الإلكتروني"
  }
};

  function normalize(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
    } catch (e) {
      return "en";
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function t(key) {
    var pack = MESSAGES[key];
    if (!pack) return key;
    return pack[getLang()] || pack.en;
  }

  function applyDirection(lang) {
    var isAr = lang === "ar";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.classList.toggle("lang-ar", isAr);
  }

  function translateNode(node, lang) {
    if (!node.i18nOriginal) {
      node.i18nOriginal = node.nodeValue;
    }
    var original = node.i18nOriginal;
    if (lang === "en") {
      node.nodeValue = original;
      return;
    }
    var key = normalize(original);
    if (AR[key]) {
      var lead = original.match(/^\s*/)[0];
      var trail = original.match(/\s*$/)[0];
      node.nodeValue = lead + AR[key] + trail;
    }
  }

  function translatePlaceholders(lang) {
    document.querySelectorAll("[placeholder]").forEach(function (el) {
      if (!el.dataset.i18nPh) {
        el.dataset.i18nPh = el.getAttribute("placeholder") || "";
      }
      var key = normalize(el.dataset.i18nPh);
      el.setAttribute(
        "placeholder",
        lang === "ar" && AR[key] ? AR[key] : el.dataset.i18nPh
      );
    });
  }

  function updateToggleButtons(lang) {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.textContent = lang === "ar" ? "English" : "العربية";
      btn.setAttribute(
        "aria-label",
        lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
    });
  }

  function applyLanguage(lang) {
    lang = lang === "ar" ? "ar" : "en";
    applyDirection(lang);
    setLang(lang);

    if (!document.body) return;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, noscript, code, pre")) {
          return NodeFilter.FILTER_REJECT;
        }
        var tag = parent.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEXTAREA") {
          return NodeFilter.FILTER_REJECT;
        }
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    var nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach(function (node) {
      translateNode(node, lang);
    });

    translatePlaceholders(lang);
    updateToggleButtons(lang);
    document.documentElement.classList.add("i18n-ready");
  }

  function ensureLangButton() {
    var navUl = document.querySelector("#navbar ul");
    if (!navUl || navUl.querySelector("[data-lang-toggle]")) return;

    var li = document.createElement("li");
    li.className = "lang-toggle-item";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-toggle";
    btn.setAttribute("data-lang-toggle", "");
    btn.textContent = getLang() === "ar" ? "English" : "العربية";
    li.appendChild(btn);
    navUl.appendChild(li);
  }

  function bindToggles() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      if (btn.dataset.i18nBound) return;
      btn.dataset.i18nBound = "1";
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        applyLanguage(getLang() === "ar" ? "en" : "ar");
      });
    });
  }

  function init() {
    ensureLangButton();
    applyLanguage(getLang());
    bindToggles();
  }

  window.BlueMaxI18n = {
    t: t,
    getLang: getLang,
    applyLanguage: applyLanguage,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
