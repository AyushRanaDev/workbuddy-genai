export type SupportTopic = "earnings" | "safety" | "rights" | "documents" | "grievance" | "general";
export type DemoLanguage = "en" | "hi" | "bn" | "ta";

export const topicLabels: Record<SupportTopic, string> = {
  earnings: "My earnings",
  safety: "Safety on the road",
  rights: "Rights & schemes",
  documents: "Documents",
  grievance: "Raise a concern",
  general: "Other questions",
};

const replies: Record<DemoLanguage, Record<SupportTopic, string>> = {
  en: {
    earnings:
      "Let’s work it out together. Add today’s payouts, cash tips, and work expenses separately, then subtract expenses from your earnings. For example only: ₹1,200 in payouts − ₹180 in fuel = ₹1,020 before any other costs. Save a screenshot of each payout. This is a demo calculation, not a tax statement.",
    safety:
      "Your safety comes first. If you feel in danger, move to a busy, well-lit place and call your local emergency number (112 in India). Share your live location with someone you trust. You can note the time, place, and what happened when it’s safe. Only contact the platform if doing so feels safe.",
    rights:
      "Worker benefits and eligibility depend on your location and situation, and rules can change. In India, you can check official government portals such as e-Shram or your state labour department. Keep your own copies of work and payment records. This demo can’t confirm eligibility or give legal advice.",
    documents:
      "I can help prepare a checklist. For a work-related issue, gather your worker or booking ID, payout record, date, and any relevant messages. Share only what’s needed, and hide account numbers or identity details when they aren’t required. This demo can’t inspect uploaded documents.",
    grievance:
      "Here’s a simple draft you can edit:\n\nSubject: Request to review my work issue\n\nHello, I’m requesting a review of [brief issue]. It happened on [date] and is connected to [order or trip ID, if safe to share]. I have attached [relevant record]. Please confirm the next steps.\n\nRegards,\n[Your name]\n\nOnly include details you’re comfortable sharing.",
    general:
      "I can help you organize your earnings, think through a safety concern, find official places to check worker support, prepare a document checklist, or draft a message about a work issue. Tell me a little about what you need. Please leave out passwords, bank details, and identity numbers.",
  },
  hi: {
    earnings:
      "आइए हिसाब लगाएँ। आज की कमाई, नकद टिप और काम के खर्च अलग-अलग लिखें। खर्च घटाने के बाद बची रकम आपकी कमाई है। सिर्फ उदाहरण: ₹1,200 कमाई − ₹180 ईंधन = ₹1,020, दूसरे खर्चों से पहले। हर भुगतान का स्क्रीनशॉट रखें। यह केवल डेमो हिसाब है, टैक्स सलाह नहीं।",
    safety:
      "आपकी सुरक्षा सबसे पहले है। खतरा लगे तो रोशनी और लोगों वाली जगह पर जाएँ और स्थानीय आपातकालीन नंबर पर कॉल करें (भारत में 112)। किसी भरोसेमंद व्यक्ति के साथ अपनी लाइव लोकेशन साझा करें। सुरक्षित होने पर समय, जगह और घटना लिख लें।",
    rights:
      "लाभ और पात्रता आपकी जगह और परिस्थिति पर निर्भर करते हैं और नियम बदल सकते हैं। भारत में e-Shram और राज्य के श्रम विभाग की आधिकारिक वेबसाइट देखें। काम और भुगतान का रिकॉर्ड अपने पास रखें। यह डेमो पात्रता या कानूनी सलाह नहीं देता।",
    documents:
      "काम की समस्या के लिए कर्मचारी या बुकिंग आईडी, भुगतान का रिकॉर्ड, तारीख और संबंधित संदेश जुटाएँ। केवल ज़रूरी जानकारी साझा करें। ज़रूरत न हो तो खाता नंबर और पहचान की जानकारी छिपाएँ। यह डेमो दस्तावेज़ अपलोड जाँच नहीं सकता।",
    grievance:
      "यह संदेश अपनी ज़रूरत के अनुसार बदलें:\n\nविषय: काम से जुड़ी समस्या की जाँच का अनुरोध\n\nनमस्ते, मैं [समस्या] की जाँच का अनुरोध करता/करती हूँ। यह [तारीख] को हुआ था। संबंधित रिकॉर्ड: [रिकॉर्ड]। कृपया अगले कदम बताएँ।\n\nधन्यवाद,\n[आपका नाम]\n\nसिर्फ वही जानकारी दें जिसे साझा करना आपको ठीक लगे।",
    general:
      "मैं कमाई का हिसाब लगाने, सुरक्षा, कामगार सहायता की आधिकारिक जानकारी खोजने, दस्तावेज़ों की सूची बनाने या काम से जुड़ी शिकायत का संदेश लिखने में मदद कर सकता/सकती हूँ। बताइए आपको किस बात में मदद चाहिए। पासवर्ड, बैंक विवरण या पहचान नंबर न भेजें।",
  },
  bn: {
    earnings:
      "চলুন হিসাব করি। আজকের পেমেন্ট, নগদ টিপস ও কাজের খরচ আলাদা লিখুন। মোট আয় থেকে খরচ বাদ দিন। শুধু উদাহরণ: ₹১,২০০ আয় − ₹১৮০ জ্বালানি = অন্যান্য খরচের আগে ₹১,০২০। প্রতিটি পেমেন্টের স্ক্রিনশট রাখুন। এটি শুধু ডেমো হিসাব, কর-পরামর্শ নয়।",
    safety:
      "আপনার নিরাপত্তাই আগে। বিপদ মনে হলে আলো ও লোকজন আছে এমন জায়গায় যান এবং স্থানীয় জরুরি নম্বরে ফোন করুন (ভারতে ১১২)। বিশ্বস্ত কারও সঙ্গে লাইভ লোকেশন শেয়ার করুন। নিরাপদ হলে সময়, জায়গা ও ঘটনা লিখে রাখুন।",
    rights:
      "সুবিধা ও যোগ্যতা আপনার জায়গা ও পরিস্থিতির ওপর নির্ভর করে; নিয়ম বদলাতে পারে। ভারতে সরকারি e-Shram বা রাজ্যের শ্রম দপ্তরের ওয়েবসাইট দেখুন। কাজ ও পেমেন্টের রেকর্ড নিজের কাছে রাখুন। এই ডেমো যোগ্যতা নিশ্চিত করে না বা আইনি পরামর্শ দেয় না।",
    documents:
      "কাজের সমস্যার জন্য কর্মী বা বুকিং আইডি, পেমেন্ট রেকর্ড, তারিখ ও প্রাসঙ্গিক বার্তা গুছিয়ে রাখুন। শুধু প্রয়োজনীয় তথ্য দিন। দরকার না হলে অ্যাকাউন্ট নম্বর ও পরিচয়ের তথ্য ঢেকে দিন। এই ডেমো নথি আপলোড পরীক্ষা করতে পারে না।",
    grievance:
      "এই খসড়াটি নিজের মতো বদলে নিন:\n\nবিষয়: কাজের সমস্যা পর্যালোচনার অনুরোধ\n\nনমস্কার, আমি [সমস্যা]-টি পর্যালোচনার অনুরোধ করছি। এটি [তারিখ]-এ ঘটেছে। প্রাসঙ্গিক নথি: [নথি]। পরবর্তী পদক্ষেপ জানাবেন।\n\nধন্যবাদ,\n[আপনার নাম]\n\nশুধু যে তথ্য দিতে স্বচ্ছন্দ, সেটিই দিন।",
    general:
      "আমি আয়ের হিসাব, নিরাপত্তা, শ্রমিক সহায়তার সরকারি তথ্য খোঁজা, নথির তালিকা বা কাজের সমস্যা জানিয়ে একটি বার্তা লিখতে সাহায্য করতে পারি। কী জানতে চান বলুন। পাসওয়ার্ড, ব্যাঙ্কের তথ্য বা পরিচয় নম্বর পাঠাবেন না।",
  },
  ta: {
    earnings:
      "கணக்குப் பார்ப்போம். இன்றைய வரவு, பண உதவித்தொகை, வேலைச் செலவு ஆகியவற்றைத் தனித்தனியாக எழுதுங்கள். மொத்த வரவிலிருந்து செலவைக் கழியுங்கள். உதாரணம் மட்டும்: ₹1,200 வரவு − ₹180 எரிபொருள் = மற்ற செலவுகளுக்கு முன் ₹1,020. ஒவ்வொரு வரவின் திரைப்பிடிப்பையும் வைத்திருங்கள். இது மாதிரி கணக்கு மட்டுமே.",
    safety:
      "உங்கள் பாதுகாப்பு முதலில். ஆபத்து எனத் தோன்றினால் மக்கள் மற்றும் வெளிச்சம் உள்ள இடத்திற்குச் சென்று உள்ளூர் அவசர எண்ணை அழைக்கவும் (இந்தியாவில் 112). நம்பும் ஒருவருடன் உங்கள் நேரலை இருப்பிடத்தைப் பகிரவும். பாதுகாப்பாக இருந்தால் நேரம், இடம், நடந்ததைப் பதிவு செய்யவும்.",
    rights:
      "உதவிகளும் தகுதியும் உங்கள் இடம் மற்றும் சூழ்நிலையைப் பொறுத்து மாறும்; விதிகளும் மாறலாம். இந்தியாவில் அதிகாரப்பூர்வ e-Shram அல்லது மாநில தொழிலாளர் தளத்தைப் பார்க்கவும். வேலை மற்றும் பணப் பதிவுகளைச் சேமியுங்கள். இந்த மாதிரி தகுதியை உறுதிப்படுத்தாது; சட்ட ஆலோசனையும் அல்ல.",
    documents:
      "வேலை தொடர்பான சிக்கலுக்கு பணியாளர் அல்லது முன்பதிவு எண், பணப் பதிவு, தேதி, தொடர்புடைய செய்திகளைத் திரட்டுங்கள். தேவையானதை மட்டும் பகிருங்கள். தேவையில்லையெனில் கணக்கு மற்றும் அடையாள எண்களை மறையுங்கள். இந்த மாதிரி பதிவேற்றிய ஆவணத்தைச் சரிபார்க்காது.",
    grievance:
      "இந்த வரைவை உங்கள் தேவைக்கேற்ப மாற்றுங்கள்:\n\nதலைப்பு: வேலைச் சிக்கலை மறுபரிசீலனை செய்யக் கோரிக்கை\n\nவணக்கம், [சிக்கலை] மறுபரிசீலனை செய்யக் கோருகிறேன். இது [தேதி] அன்று நடந்தது. தொடர்புடைய பதிவு: [பதிவு]. அடுத்த படிகளைத் தெரிவிக்கவும்.\n\nநன்றி,\n[உங்கள் பெயர்]\n\nபகிரத் தயாராக இருக்கும் தகவலை மட்டும் சேர்க்கவும்.",
    general:
      "வரவு செலவைக் கணக்கிட, பாதுகாப்பு குறித்துப் பேச, அதிகாரப்பூர்வ தொழிலாளர் உதவித் தகவலைக் கண்டறிய, ஆவணப் பட்டியல் தயாரிக்க அல்லது வேலைச் சிக்கல் குறித்த செய்தி எழுத உதவலாம். என்ன தேவை என்று சொல்லுங்கள். கடவுச்சொல், வங்கி விவரம் அல்லது அடையாள எண்ணைப் பகிராதீர்கள்.",
  },
};

const fallbackReplies: Record<DemoLanguage, string> = {
  en: "Demo fallback: the simulated assistant service is unavailable. No live AI was contacted. Your message is still here; switch off “Simulate service issue” to get its canned demo response.",
  hi: "डेमो विकल्प: नकली सहायक सेवा उपलब्ध नहीं है। किसी लाइव AI से संपर्क नहीं हुआ। संदेश यहीं है; डेमो जवाब पाने के लिए “सेवा समस्या दिखाएँ” बंद करें।",
  bn: "ডেমো বিকল্প: নকল সহায়ক পরিষেবা এখন নেই। কোনও লাইভ AI-কে ডাকা হয়নি। ডেমো উত্তর পেতে “পরিষেবার সমস্যা দেখান” বন্ধ করুন।",
  ta: "மாதிரி மாற்று: போலி உதவிச் சேவை இப்போது கிடைக்கவில்லை. நேரடி AI அழைக்கப்படவில்லை. மாதிரி பதிலைப் பெற “சேவைச் சிக்கலைக் காட்டு” என்பதை அணைக்கவும்.",
};

export function detectTopic(text: string): SupportTopic {
  const value = text.toLocaleLowerCase();
  if (/earn|income|payout|pay|tip|wage|fuel|कमाई|भुगतान|आय|উপার্জন|মজুরি|வரவு|ஊதியம்/.test(value)) return "earnings";
  if (/safe|danger|accident|harass|safety|सुरक्षा|खतरा|दুর্ঘটনা|নিরাপ|ஆபத்து|பாதுகாப்பு/.test(value)) return "safety";
  if (/right|scheme|benefit|welfare|eligible|e-shram|अधिकार|योजना|अधिकार|सहायता|অধিকার|প্রকল্প|உரிமை|திட்டம்/.test(value)) return "rights";
  if (/document|paper|id card|upload|दस्तावेज़|कागज़|কাগজ|নথি|ஆவணம்|ஆவண/.test(value)) return "documents";
  if (/complain|grievance|dispute|draft|message|issue|शिकायत|विवाद|संदेश|অভিযোগ|সমস্যা|புகார்|சிக்கல்/.test(value)) return "grievance";
  return "general";
}

export function getMockReply(topic: SupportTopic, language: DemoLanguage, simulateFailure: boolean): string {
  return simulateFailure ? fallbackReplies[language] : replies[language][topic];
}