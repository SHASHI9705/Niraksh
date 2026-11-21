import {
	DEFAULT_LANGUAGE,
	type SupportedLanguage,
	isSupportedLanguage,
} from "@/lib/languages";

export type TranslationKey =
	| "common.appName"
	| "common.medicalDisclaimer"
	| "common.emergencyAlert"
	| "common.consultDoctor"
	| "common.save"
	| "common.cancel"
	| "common.close"
	| "common.loading"
	| "common.search"
	| "common.clear"
	| "common.retry"
	| "common.send"
	| "common.stop"
	| "common.voiceInput"
	| "common.attachImage"
	| "chat.inputPlaceholder"
	| "chat.selectLanguage"
	| "chat.newChat"
	| "chat.findDoctors"
	| "chat.voiceListening"
	| "chat.voiceNotSupported"
	| "chat.voiceLanguageFallback"
	| "symptoms.title"
	| "symptoms.describePlaceholder"
	| "symptoms.analyzeButton"
	| "symptoms.possibleConditions"
	| "symptoms.severity"
	| "symptoms.urgency"
	| "symptoms.recommendedSpecialist"
	| "symptoms.homeRemedies"
	| "symptoms.disclaimer"
	| "disease.title"
	| "disease.searchPlaceholder"
	| "disease.overview"
	| "disease.symptoms"
	| "disease.causes"
	| "disease.prevention"
	| "disease.treatment"
	| "disease.whenToSeeDoctor"
	| "profile.languagePreference"
	| "profile.languagePreferenceDesc";

export type TranslationDictionary = Partial<Record<TranslationKey, string>>;

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
	en: {
		"common.appName": "Niraksh AI",
		"common.medicalDisclaimer":
			"Niraksh AI provides health information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for personal health concerns.",
		"common.emergencyAlert":
			"Emergency Warning: If you are experiencing a medical emergency, severe chest pain, or difficulty breathing, call 112 or visit the nearest emergency room immediately.",
		"common.consultDoctor": "Always consult a doctor",
		"common.save": "Save",
		"common.cancel": "Cancel",
		"common.close": "Close",
		"common.loading": "Loading...",
		"common.search": "Search",
		"common.clear": "Clear",
		"common.retry": "Retry",
		"common.send": "Send message",
		"common.stop": "Stop generation",
		"common.voiceInput": "Voice input",
		"common.attachImage": "Attach image",
		"chat.inputPlaceholder": "Describe your symptoms or ask a health question...",
		"chat.selectLanguage": "Language",
		"chat.newChat": "New Chat",
		"chat.findDoctors": "Find Doctors",
		"chat.voiceListening": "Listening... Speak now",
		"chat.voiceNotSupported": "Voice speech recognition is not supported in this browser.",
		"chat.voiceLanguageFallback":
			"Voice recognition for this language is not supported by your browser. Falling back to English.",
		"symptoms.title": "Symptom Analysis",
		"symptoms.describePlaceholder": "E.g., headache for 3 days, mild fever, body aches...",
		"symptoms.analyzeButton": "Analyze Symptoms",
		"symptoms.possibleConditions": "Possible Conditions",
		"symptoms.severity": "Severity",
		"symptoms.urgency": "Urgency",
		"symptoms.recommendedSpecialist": "Recommended Specialist",
		"symptoms.homeRemedies": "Home Remedies",
		"symptoms.disclaimer":
			"This preliminary analysis is AI-generated and not a clinical diagnosis. Please consult a doctor.",
		"disease.title": "Disease & Condition Library",
		"disease.searchPlaceholder": "Search a disease or condition...",
		"disease.overview": "Overview",
		"disease.symptoms": "Symptoms",
		"disease.causes": "Causes",
		"disease.prevention": "Prevention & Care",
		"disease.treatment": "Treatment",
		"disease.whenToSeeDoctor": "When to See a Doctor",
		"profile.languagePreference": "Language Preference",
		"profile.languagePreferenceDesc": "Your preferred language for AI responses and interface guidance.",
	},
	hi: {
		"common.appName": "निरक्ष एआई",
		"common.medicalDisclaimer":
			"निरक्ष एआई केवल शैक्षणिक उद्देश्यों के लिए स्वास्थ्य जानकारी प्रदान करता है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। व्यक्तिगत स्वास्थ्य संबंधी चिंताओं के लिए हमेशा किसी योग्य चिकित्सक से परामर्श लें।",
		"common.emergencyAlert":
			"आपातकालीन चेतावनी: यदि आप किसी चिकित्सीय आपात स्थिति, सीने में तेज दर्द, या सांस लेने में कठिनाई का अनुभव कर रहे हैं, तो तुरंत 112 पर कॉल करें या नजदीकी आपातकालीन कक्ष में जाएं।",
		"common.consultDoctor": "हमेशा डॉक्टर से सलाह लें",
		"common.save": "सुरक्षित करें",
		"common.cancel": "रद्द करें",
		"common.close": "बंद करें",
		"common.loading": "लोड हो रहा है...",
		"common.search": "खोजें",
		"common.clear": "साफ़ करें",
		"common.retry": "पुनः प्रयास करें",
		"common.send": "संदेश भेजें",
		"common.stop": "रोकें",
		"common.voiceInput": "ध्वनि इनपुट",
		"common.attachImage": "छवि जोड़ें",
		"chat.inputPlaceholder": "अपने लक्षणों का वर्णन करें या स्वास्थ्य संबंधी प्रश्न पूछें...",
		"chat.selectLanguage": "भाषा",
		"chat.newChat": "नई बातचीत",
		"chat.findDoctors": "डॉक्टर खोजें",
		"chat.voiceListening": "सुन रहा है... अब बोलें",
		"chat.voiceNotSupported": "इस ब्राउज़र में ध्वनि पहचान समर्थित नहीं है।",
		"chat.voiceLanguageFallback":
			"इस भाषा के लिए ध्वनि पहचान समर्थित नहीं है। अंग्रेज़ी में परिवर्तित किया जा रहा है।",
		"symptoms.title": "लक्षण विश्लेषण",
		"symptoms.describePlaceholder": "उदा. 3 दिनों से सिरदर्द, हल्का बुखार, शरीर में दर्द...",
		"symptoms.analyzeButton": "लक्षणों का विश्लेषण करें",
		"symptoms.possibleConditions": "संभावित स्थितियां",
		"symptoms.severity": "गंभीरता",
		"symptoms.urgency": "तात्कालिकता",
		"symptoms.recommendedSpecialist": "अनुशंसित विशेषज्ञ",
		"symptoms.homeRemedies": "घरेलू उपचार",
		"symptoms.disclaimer":
			"यह प्रारंभिक विश्लेषण एआई द्वारा तैयार किया गया है और यह चिकित्सीय निदान नहीं है। कृपया डॉक्टर से परामर्श लें।",
		"disease.title": "रोग और स्वास्थ्य पुस्तकालय",
		"disease.searchPlaceholder": "रोग या स्थिति खोजें...",
		"disease.overview": "अवलोकन",
		"disease.symptoms": "लक्षण",
		"disease.causes": "कारण",
		"disease.prevention": "रोकथाम और देखभाल",
		"disease.treatment": "उपचार",
		"disease.whenToSeeDoctor": "डॉक्टर को कब दिखाएं",
		"profile.languagePreference": "भाषा प्राथमिकता",
		"profile.languagePreferenceDesc": "एआई प्रतिक्रियाओं और इंटरफ़ेस के लिए आपकी पसंदीदा भाषा।",
	},
	bn: {
		"common.appName": "নিরক্ষ এআই",
		"common.medicalDisclaimer":
			"নিরক্ষ এআই শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে স্বাস্থ্য তথ্য সরবরাহ করে। এটি পেশাদার চিকিৎসা পরামর্শ, নির্ণয় বা চিকিৎসার বিকল্প নয়। ব্যক্তিগত স্বাস্থ্য সংক্রান্ত যেকোনো প্রয়োজনে সর্বদা চিকিৎসকের পরামর্শ নিন।",
		"common.emergencyAlert":
			"জরুরি সতর্কতা: আপনি যদি কোনো জরুরি চিকিৎসা পরিস্থিতি, তীব্র বুকে ব্যথা বা শ্বাসকষ্ট অনুভব করেন, তবে অবিলম্বে 112 নম্বরে কল করুন বা নিকটস্থ হাসপাতালে যোগাযোগ করুন।",
		"common.consultDoctor": "সর্বদা ডাক্তারের পরামর্শ নিন",
		"common.save": "সংরক্ষণ করুন",
		"common.cancel": "বাতিল",
		"common.close": "বন্ধ করুন",
		"common.loading": "লোড হচ্ছে...",
		"common.search": "অনুসন্ধান",
		"common.clear": "মুছে ফেলুন",
		"common.retry": "পুনরায় চেষ্টা করুন",
		"common.send": "বার্তা পাঠান",
		"common.stop": "থামান",
		"common.voiceInput": "ভয়েস ইনপুট",
		"common.attachImage": "ছবি যুক্ত করুন",
		"chat.inputPlaceholder": "আপনার লক্ষণগুলি বর্ণনা করুন বা স্বাস্থ্য সম্পর্কিত প্রশ্ন জিজ্ঞাসা করুন...",
		"chat.selectLanguage": "ভাষা",
		"chat.newChat": "নতুন চ্যাট",
		"chat.findDoctors": "ডাক্তার খুঁজুন",
		"chat.voiceListening": "শুনছি... এখন কথা বলুন",
		"chat.voiceNotSupported": "এই ব্রাউজারে ভয়েস সনাক্তকরণ সমর্থিত নয়।",
		"chat.voiceLanguageFallback":
			"এই ভাষার জন্য ভয়েস সমর্থন অনুপলব্ধ। ইংরেজিতে স্থানান্তর করা হচ্ছে।",
		"symptoms.title": "লক্ষণ বিশ্লেষণ",
		"symptoms.describePlaceholder": "যেমন: ৩ দিন ধরে মাথাব্যথা, হালকা জ্বর, শরীর ব্যথা...",
		"symptoms.analyzeButton": "লক্ষণ বিশ্লেষণ করুন",
		"symptoms.possibleConditions": "সম্ভাব্য স্বাস্থ্য পরিস্থিতি",
		"symptoms.severity": "তীব্রতা",
		"symptoms.urgency": "জরুরিতা",
		"symptoms.recommendedSpecialist": "সুপারিশকৃত বিশেষজ্ঞ",
		"symptoms.homeRemedies": "ঘরোয়া প্রতিকার",
		"symptoms.disclaimer":
			"এই বিশ্লেষণটি এআই দ্বারা প্রস্তুত এবং এটি ক্লিনিকাল ডায়াগনোসিস নয়। অনুগ্রহ করে ডাক্তারের সাথে পরামর্শ করুন।",
		"disease.title": "রোগ ও স্বাস্থ্য তথ্যভান্ডার",
		"disease.searchPlaceholder": "রোগ বা অবস্থা খুঁজুন...",
		"disease.overview": "সংক্ষিপ্ত বিবরণ",
		"disease.symptoms": "লক্ষণসমূহ",
		"disease.causes": "কারণসমূহ",
		"disease.prevention": "প্রতিরোধ ও যত্ন",
		"disease.treatment": "চিকিৎসা",
		"disease.whenToSeeDoctor": "কখন ডাক্তার দেখাবেন",
		"profile.languagePreference": "পছন্দের ভাষা",
		"profile.languagePreferenceDesc": "এআই উত্তর এবং নির্দেশনার জন্য আপনার পছন্দের ভাষা।",
	},
	te: {
		"common.appName": "నిరక్ష ఏఐ",
		"common.medicalDisclaimer":
			"నిరక్ష ఏఐ కేవలం అవగాహన కొరకు మాత్రమే ఆరోగ్య సమాచారాన్ని అందిస్తుంది. ఇది వృత్తిపరమైన వైద్య సలహా లేదా రోగనిర్ధారణకు ప్రత్యామ్నాయం కాదు. ఆరోగ్య సమస్యల కోసం ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి.",
		"common.emergencyAlert":
			"అత్యవసర హెచ్చరిక: మీకు తీవ్రమైన గుండెనొప్పి లేదా శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంటే, వెంటనే 112కి కాల్ చేయండి లేదా సమీపంలోని అత్యవసర విభాగాన్ని సంప్రదించండి.",
		"common.consultDoctor": "ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి",
		"common.save": "భద్రపరచు",
		"common.cancel": "రద్దు చేయి",
		"common.close": "మూసివేయి",
		"common.loading": "లోడ్ అవుతోంది...",
		"common.search": "వెతకండి",
		"common.clear": "తుడిచివేయి",
		"common.retry": "మళ్ళీ ప్రయత్నించండి",
		"common.send": "సందేశం పంపండి",
		"common.stop": "ఆపండి",
		"common.voiceInput": "వాయిస్ ఇన్‌పుట్",
		"common.attachImage": "చిత్రాన్ని జోడించండి",
		"chat.inputPlaceholder": "మీ లక్షణాలను వివరించండి లేదా ఆరోగ్య ప్రశ్న అడగండి...",
		"chat.selectLanguage": "భాష",
		"chat.newChat": "కొత్త చాట్",
		"chat.findDoctors": "వైద్యులను కనుగొనండి",
		"chat.voiceListening": "వింటోంది... ఇప్పుడు మాట్లాడండి",
		"chat.voiceNotSupported": "ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ సపోర్ట్ లేదు.",
		"chat.voiceLanguageFallback": "ఈ భాషకు వాయిస్ అందుబాటులో లేదు. ఇంగ్లీషుకు మారుతోంది.",
		"symptoms.title": "లక్షణాల విశ్లేషణ",
		"symptoms.describePlaceholder": "ఉదా. 3 రోజుల నుండి తలనొప్పి, స్వల్ప జ్వరం, ఒళ్లు నొప్పులు...",
		"symptoms.analyzeButton": "లక్షణాలను విశ్లేషించండి",
		"symptoms.possibleConditions": "సాధ్యమయ్యే పరిస్థితులు",
		"symptoms.severity": "తీవ్రత",
		"symptoms.urgency": "అత్యవసరత",
		"symptoms.recommendedSpecialist": "సిఫార్సు చేసిన నిపుణుడు",
		"symptoms.homeRemedies": "ఇంటి చిట్కాలు",
		"symptoms.disclaimer":
			"ఈ ప్రాథమిక విశ్లేషణ ఏఐ ద్వారా రూపొందించబడింది. ఇది తుది రోగ నిర్ధారణ కాదు. దయచేసి వైద్యుడిని సంప్రదించండి.",
		"disease.title": "వ్యాధి & ఆరోగ్య గ్రంథాలయం",
		"disease.searchPlaceholder": "వ్యాధి లేదా స్థితిని శోధించండి...",
		"disease.overview": "అవలోకనం",
		"disease.symptoms": "లక్షణాలు",
		"disease.causes": "కారణాలు",
		"disease.prevention": "నివారణ & సంరక్షణ",
		"disease.treatment": "చికిత్స",
		"disease.whenToSeeDoctor": "వైద్యుడిని ఎప్పుడు సంప్రదించాలి",
		"profile.languagePreference": "భాష ప్రాధాన్యత",
		"profile.languagePreferenceDesc": "ఏఐ సమాధానాలు మరియు ఇంటర్‌ఫేస్ కొరకు మీకు నచ్చిన భాష.",
	},
	mr: {
		"common.appName": "निरक्ष एआय",
		"common.medicalDisclaimer":
			"निरक्ष एआय केवळ शैक्षणिक उद्देशांसाठी आरोग्य माहिती प्रदान करते. हा व्यावसायिक वैद्यकीय सल्ला, निदान किंवा उपचारांचा पर्याय नाही. वैयक्तिक आरोग्यासाठी नेहमी पात्र डॉक्टरांचा सल्ला घ्या.",
		"common.emergencyAlert":
			"तातडीची सूचना: तुम्हाला वैद्यकीय आणीबाणी, छातीत तीव्र वेदना किंवा श्वास घेण्यास त्रास होत असल्यास, त्वरित 112 वर कॉल करा किंवा जवळच्या रुग्णालयात जा.",
		"common.consultDoctor": "नेहमी डॉक्टरांचा सल्ला घ्या",
		"common.save": "जतन करा",
		"common.cancel": "रद्द करा",
		"common.close": "बंद करा",
		"common.loading": "लोड होत आहे...",
		"common.search": "शोधा",
		"common.clear": "साफ करा",
		"common.retry": "पुन्हा प्रयत्न करा",
		"common.send": "संदेश पाठवा",
		"common.stop": "थांबवा",
		"common.voiceInput": "व्हॉइस इनपुट",
		"common.attachImage": "फोटो जोडा",
		"chat.inputPlaceholder": "तुमच्या लक्षणांचे वर्णन करा किंवा आरोग्याबाबत प्रश्न विचारा...",
		"chat.selectLanguage": "भाषा",
		"chat.newChat": "नवीन चॅट",
		"chat.findDoctors": "डॉक्टर शोधा",
		"chat.voiceListening": "ऐकत आहे... आता बोला",
		"chat.voiceNotSupported": "या ब्राउझरमध्ये व्हॉइस ओळख समर्थित नाही.",
		"chat.voiceLanguageFallback": "या भाषेसाठी व्हॉइस समर्थन उपलब्ध नाही. इंग्रजीत बदलले जात आहे.",
		"symptoms.title": "लक्षण विश्लेषण",
		"symptoms.describePlaceholder": "उदा. ३ दिवसांपासून डोकेदुखी, सौम्य ताप, अंगदुखी...",
		"symptoms.analyzeButton": "लक्षणांचे विश्लेषण करा",
		"symptoms.possibleConditions": "संभाव्य आजार",
		"symptoms.severity": "तीव्रता",
		"symptoms.urgency": "तातडी",
		"symptoms.recommendedSpecialist": "शिफारस केलेले तज्ज्ञ",
		"symptoms.homeRemedies": "घरगुती उपाय",
		"symptoms.disclaimer":
			"हे प्राथमिक विश्लेषण एआयद्वारे तयार केलेले असून ते वैद्यकीय निदान नाही. कृपया डॉक्टरांचा सल्ला घ्या.",
		"disease.title": "आजार आणि आरोग्य माहिती",
		"disease.searchPlaceholder": "आजार किंवा लक्षण शोधा...",
		"disease.overview": "आढावा",
		"disease.symptoms": "लक्षणे",
		"disease.causes": "कारणे",
		"disease.prevention": "प्रतिबंध आणि काळजी",
		"disease.treatment": "उपचार",
		"disease.whenToSeeDoctor": "डॉक्टरांना कधी भेटावे",
		"profile.languagePreference": "भाषा प्राधान्य",
		"profile.languagePreferenceDesc": "एआय प्रतिसाद आणि मार्गदर्शनासाठी तुमची पसंतीची भाषा.",
	},
	ta: {
		"common.appName": "நிரக்ஷ் ஏஐ",
		"common.medicalDisclaimer":
			"நிரக்ஷ் ஏஐ கல்வி நோக்கங்களுக்காக மட்டுமே சுகாதார தகவல்களை வழங்குகிறது. இது தொழில்முறை மருத்துவ ஆலோசனை, நோயறிதல் அல்லது சிகிச்சைக்கு மாற்றாகாது. தனிப்பட்ட சுகாதார பிரச்சனைகளுக்கு எப்போதும் மருத்துவரை அணுகவும்.",
		"common.emergencyAlert":
			"அவசர எச்சரிக்கை: உங்களுக்கு கடுமையான மார்பு வலி அல்லது மூச்சுத் திணறல் ஏற்பட்டால், உடனே 112 ஐ அழைக்கவும் அல்லது அருகிலுள்ள அவசர சிகிச்சைப் பிரிவை அணுகவும்.",
		"common.consultDoctor": "எப்போதும் மருத்துவரை அணுகவும்",
		"common.save": "சேமி",
		"common.cancel": "ரத்துசெய்",
		"common.close": "மூடு",
		"common.loading": "ஏற்றுகிறது...",
		"common.search": "தேடு",
		"common.clear": "அழி",
		"common.retry": "மீண்டும் முயற்சி செய்",
		"common.send": "செய்தி அனுப்பு",
		"common.stop": "நிறுத்து",
		"common.voiceInput": "குரல் உள்ளீடு",
		"common.attachImage": "படம் இணைக்க",
		"chat.inputPlaceholder": "உங்கள் அறிகுறிகளை விவரிக்கவும் அல்லது கேள்விகளைக் கேட்கவும்...",
		"chat.selectLanguage": "மொழி",
		"chat.newChat": "புதிய உரையாடல்",
		"chat.findDoctors": "மருத்துவர்களைக் கண்டறியவும்",
		"chat.voiceListening": "கேட்கிறது... இப்போது பேசுங்கள்",
		"chat.voiceNotSupported": "இந்த உலாவியில் குரல் அறிதல் ஆதரிக்கப்படவில்லை.",
		"chat.voiceLanguageFallback":
			"இந்த மொழிக்கான குரல் அறிதல் ஆதரிக்கப்படவில்லை. ஆங்கிலத்திற்கு மாற்றப்படுகிறது.",
		"symptoms.title": "அறிகுறி பகுப்பாய்வு",
		"symptoms.describePlaceholder": "எ.கா. 3 நாட்களாக தலைவலி, லேசான காய்ச்சல், உடல் வலி...",
		"symptoms.analyzeButton": "அறிகுறிகளை பகுப்பாய்வு செய்",
		"symptoms.possibleConditions": "சாத்தியமான நிலைகள்",
		"symptoms.severity": "தீவிரம்",
		"symptoms.urgency": "அவசரம்",
		"symptoms.recommendedSpecialist": "பரிந்துரைக்கப்படும் நிபுணர்",
		"symptoms.homeRemedies": "வீட்டு வைத்தியம்",
		"symptoms.disclaimer":
			"இந்த பகுப்பாய்வு ஏஐ ஆல் உருவாக்கப்பட்டது மற்றும் மருத்துவ நோயறிதல் அல்ல. தயவுசெய்து மருத்துவரை அணுகவும்.",
		"disease.title": "நோய் & சுகாதார நூலகம்",
		"disease.searchPlaceholder": "நோய் அல்லது நிலையைத் தேடவும்...",
		"disease.overview": "கண்ணோட்டம்",
		"disease.symptoms": "அறிகுறிகள்",
		"disease.causes": "காரணங்கள்",
		"disease.prevention": "தடுப்பு & பராமரிப்பு",
		"disease.treatment": "சிகிச்சை",
		"disease.whenToSeeDoctor": "எப்போது மருத்துவரை அணுக வேண்டும்",
		"profile.languagePreference": "மொழி விருப்பம்",
		"profile.languagePreferenceDesc": "ஏஐ பதில்கள் மற்றும் வழிகாட்டலுக்கான உங்கள் விருப்ப மொழி.",
	},
	ur: {
		"common.appName": "نرکش اے آئی",
		"common.medicalDisclaimer":
			"نرکش اے آئی صرف تعلیمی اور آگاہی مقاصد کے لیے صحت سے متعلق معلومات فراہم کرتا ہے۔ یہ پیشہ ورانہ طبی مشورے یا تشخیص کا متبادل نہیں ہے۔ ہمیشہ مستند ڈاکٹر سے رجوع کریں۔",
		"common.emergencyAlert":
			"ہنگامی انتباہ: اگر آپ کو شدید سینے میں درد یا سانس لینے میں دشواری ہو رہی ہے تو فوری طور پر 112 پر کال کریں یا قریبی ہسپتال تشریف لے جائیں۔",
		"common.consultDoctor": "ہمیشہ ڈاکٹر سے رجوع کریں",
		"common.save": "محفوظ کریں",
		"common.cancel": "منسوخ کریں",
		"common.close": "بند کریں",
		"common.loading": "لوڈ ہو رہا ہے...",
		"common.search": "تلاش کریں",
		"common.clear": "صاف کریں",
		"common.retry": "دوبارہ کوشش کریں",
		"common.send": "پیغام بھیجیں",
		"common.stop": "روکیں",
		"common.voiceInput": "آواز سے ان پٹ",
		"common.attachImage": "تصویر منسلک کریں",
		"chat.inputPlaceholder": "اپنی علامات بیان کریں یا صحت سے متعلق سوال پوچھیں...",
		"chat.selectLanguage": "زبان",
		"chat.newChat": "نئی بات چیت",
		"chat.findDoctors": "ڈاکٹرز تلاش کریں",
		"chat.voiceListening": "سن رہا ہے... اب بولیں",
		"chat.voiceNotSupported": "اس براؤزر میں آواز کی شناخت کی سہولت دستیاب نہیں ہے۔",
		"chat.voiceLanguageFallback":
			"اس زبان کے لیے صوتی شناخت دستیاب نہیں ہے۔ انگریزی میں تبدیل کیا جا رہا ہے۔",
		"symptoms.title": "علامات کا تجزیہ",
		"symptoms.describePlaceholder": "مثال کے طور پر: ۳ دن سے سر درد، ہلکا بخار، جسم میں درد...",
		"symptoms.analyzeButton": "علامات کا تجزیہ کریں",
		"symptoms.possibleConditions": "ممکنہ طبی حالات",
		"symptoms.severity": "شدت",
		"symptoms.urgency": "فوری ضرورت",
		"symptoms.recommendedSpecialist": "تجویز کردہ ماہر ڈاکٹر",
		"symptoms.homeRemedies": "گھریلو علاج",
		"symptoms.disclaimer":
			"یہ تجزیہ اے آئی کے ذریعے تیار کیا گیا ہے اور حتمی تشخیص نہیں ہے۔ براہ کرم ڈاکٹر سے مشورہ کریں۔",
		"disease.title": "امراض اور صحت کی معلومات",
		"disease.searchPlaceholder": "بیماری یا علامت تلاش کریں...",
		"disease.overview": "جائزہ",
		"disease.symptoms": "علامات",
		"disease.causes": "وجوہات",
		"disease.prevention": "احتیاط اور دیکھ بھال",
		"disease.treatment": "علاج",
		"disease.whenToSeeDoctor": "ڈاکٹر سے کب رجوع کریں",
		"profile.languagePreference": "ترجیحی زبان",
		"profile.languagePreferenceDesc": "اے آئی کے جوابات اور رہنمائی کے لیے آپ کی پسندیدہ زبان۔",
	},
	gu: {
		"common.appName": "નિરક્ષ એઆઈ",
		"common.medicalDisclaimer":
			"નિરક્ષ એઆઈ માત્ર શૈક્ષણિક હેતુઓ માટે આરોગ્ય માહિતી પૂરી પાડે છે. તે વ્યાવસાયિક તબીબી સલાહ, નિદાન કે સારવારનો વિકલ્પ નથી. હંમેશા લાયક ડૉક્ટરની સલાહ લો.",
		"common.emergencyAlert":
			"કટોકટી ચેતવણી: જો તમને તીવ્ર છાતીમાં દુખાવો અથવા શ્વાસ લેવામાં તકલીફ હોય, તો તરત જ 112 પર કૉલ કરો અથવા નજીકની હોસ્પિટલનો સંપર્ક કરો.",
		"common.consultDoctor": "હંમેશા ડૉક્ટરની સલાહ લો",
		"common.save": "સાચવો",
		"common.cancel": "રદ કરો",
		"common.close": "બંધ કરો",
		"common.loading": "લોડ થઈ રહ્યું છે...",
		"common.search": "શોધો",
		"common.clear": "સાફ કરો",
		"common.retry": "ફરી પ્રયાસ કરો",
		"common.send": "સંદેશ મોકલો",
		"common.stop": "રોકો",
		"common.voiceInput": "વોઇસ ઇનપુટ",
		"common.attachImage": "છબી જોડો",
		"chat.inputPlaceholder": "તમારા લક્ષણોનું વર્ણન કરો અથવા આરોગ્ય પ્રશ્ન પૂછો...",
		"chat.selectLanguage": "ભાષા",
		"chat.newChat": "નવી ચેટ",
		"chat.findDoctors": "ડૉક્ટર્સ શોધો",
		"chat.voiceListening": "સાંભળી રહ્યું છે... હવે બોલો",
		"chat.voiceNotSupported": "આ બ્રાઉઝરમાં વોઇસ રેકગ્નિશન સપોર્ટેડ નથી.",
		"chat.voiceLanguageFallback":
			"આ ભાષા માટે વૉઇસ સપોર્ટ નથી. અંગ્રેજીમાં ફેરવવામાં આવી રહ્યું છે.",
		"symptoms.title": "લક્ષણ વિશ્લેષણ",
		"symptoms.describePlaceholder": "દા.ત. ૩ દિવસથી માથાનો દુખાવો, હળવો તાવ, શરીરનો દુખાવો...",
		"symptoms.analyzeButton": "લક્ષણોનું વિશ્લેષણ કરો",
		"symptoms.possibleConditions": "સંભવિત પરિસ્થિતિઓ",
		"symptoms.severity": "તીવ્રતા",
		"symptoms.urgency": "તાકીદ",
		"symptoms.recommendedSpecialist": "ભલામણ કરેલ નિષ્ણાત",
		"symptoms.homeRemedies": "ઘરેલું ઉપચાર",
		"symptoms.disclaimer":
			"આ પ્રાથમિક વિશ્લેષણ એઆઈ દ્વારા તૈયાર કરાયેલ છે અને તે તબીબી નિદાન નથી. કૃપા કરીને ડૉક્ટરની સલાહ લો.",
		"disease.title": "રોગ અને આરોગ્ય પુસ્તકાલય",
		"disease.searchPlaceholder": "રોગ અથવા સ્થિતિ શોધો...",
		"disease.overview": "ઝાંખી",
		"disease.symptoms": "લક્ષણો",
		"disease.causes": "કારણો",
		"disease.prevention": "નિવારણ અને સંભાળ",
		"disease.treatment": "સારવાર",
		"disease.whenToSeeDoctor": "ડૉક્ટરને ક્યારે મળવું",
		"profile.languagePreference": "ભાષા પ્રાધાન્યતા",
		"profile.languagePreferenceDesc": "એઆઈ જવાબો અને માર્ગદર્શન માટે તમારી પસંદગીની ભાષા.",
	},
	kn: {
		"common.appName": "ನಿರಕ್ಷ ಎಐ",
		"common.medicalDisclaimer":
			"ನಿರಕ್ಷ ಎಐ ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆ, ರೋಗನಿರ್ಣಯ ಅಥವಾ ಚಿಕಿತ್ಸೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ಯಾವಾಗಲೂ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
		"common.emergencyAlert":
			"ತುರ್ತು ಎಚ್ಚರಿಕೆ: ನೀವು ತೀವ್ರವಾದ ಎದೆನೋವು ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆಯನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೆ, ತಕ್ಷಣ 112 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ತುರ್ತು ಚಿಕಿತ್ಸಾ ವಿಭಾಗಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
		"common.consultDoctor": "ಯಾವಾಗಲೂ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ",
		"common.save": "ಉಳಿಸಿ",
		"common.cancel": "ರದ್ದುಮಾಡಿ",
		"common.close": "ಮುಚ್ಚಿ",
		"common.loading": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
		"common.search": "ಹುಡುಕಿ",
		"common.clear": "ತೆರವುಗೊಳಿಸಿ",
		"common.retry": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
		"common.send": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
		"common.stop": "ನಿಲ್ಲಿಸಿ",
		"common.voiceInput": "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
		"common.attachImage": "ಚಿತ್ರ ಲಗತ್ತಿಸಿ",
		"chat.inputPlaceholder": "ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ ಅಥವಾ ಆರೋಗ್ಯ ಪ್ರಶ್ನೆ ಕೇಳಿ...",
		"chat.selectLanguage": "ಭಾಷೆ",
		"chat.newChat": "ಹೊಸ ಚಾಟ್",
		"chat.findDoctors": "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
		"chat.voiceListening": "ಆಲಿಸುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ",
		"chat.voiceNotSupported": "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಲಭ್ಯವಿಲ್ಲ.",
		"chat.voiceLanguageFallback": "ಈ ಭಾಷೆಗೆ ಧ್ವನಿ ಬೆಂಬಲವಿಲ್ಲ. ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಾಯಿಸಲಾಗುತ್ತಿದೆ.",
		"symptoms.title": "ರೋಗಲಕ್ಷಣ ವಿಶ್ಲೇಷಣೆ",
		"symptoms.describePlaceholder": "ಉದಾ. 3 ದಿನಗಳಿಂದ ತಲೆನೋವು, ಸೌಮ್ಯ ಜ್ವರ, ಮೈಕೈ ನೋವು...",
		"symptoms.analyzeButton": "ಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
		"symptoms.possibleConditions": "ಸಾಧ್ಯವಿರುವ ಪರಿಸ್ಥಿತಿಗಳು",
		"symptoms.severity": "ತೀವ್ರತೆ",
		"symptoms.urgency": "ತುರ್ತುಸ್ಥಿತಿ",
		"symptoms.recommendedSpecialist": "ಶಿಫಾರಸು ಮಾಡಿದ ತಜ್ಞರು",
		"symptoms.homeRemedies": "ಮನೆಮದ್ದುಗಳು",
		"symptoms.disclaimer":
			"ಈ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಎಐ ಮೂಲಕ ರಚಿಸಲಾಗಿದೆ ಮತ್ತು ಇದು ಕ್ಲಿನಿಕಲ್ ರೋಗನಿರ್ಣಯವಲ್ಲ. ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
		"disease.title": "ರೋಗ ಮತ್ತು ಆರೋಗ್ಯ ಗ್ರಂಥಾಲಯ",
		"disease.searchPlaceholder": "ರೋಗ ಅಥವಾ ಸ್ಥಿತಿಯನ್ನು ಹುಡುಕಿ...",
		"disease.overview": "ಅವಲೋಕನ",
		"disease.symptoms": "ಲಕ್ಷಣಗಳು",
		"disease.causes": "ಕಾರಣಗಳು",
		"disease.prevention": "ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಕಾಳಜಿ",
		"disease.treatment": "ಚಿಕಿತ್ಸೆ",
		"disease.whenToSeeDoctor": "ವೈದ್ಯರನ್ನು ಯಾವಾಗ ಭೇಟಿ ಮಾಡಬೇಕು",
		"profile.languagePreference": "ಭಾಷಾ ಆದ್ಯತೆ",
		"profile.languagePreferenceDesc": "ಎಐ ಉತ್ತರಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆ.",
	},
	ml: {
		"common.appName": "നിരക്ഷ് എഐ",
		"common.medicalDisclaimer":
			"നിരക്ഷ് എഐ വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രമായി ആരോഗ്യ വിവരങ്ങൾ നൽകുന്നു. ഇത് പ്രൊഫഷണൽ മെഡിക്കൽ ഉപദേശത്തിനോ രോഗനിർണയത്തിനോ പകരമല്ല. ആരോഗ്യ സംശയങ്ങൾക്ക് എല്ലായ്പ്പോഴും ഡോക്ടറെ സമീപിക്കുക.",
		"common.emergencyAlert":
			"അടിയന്തിര മുന്നറിയിപ്പ്: നിങ്ങൾക്ക് കഠിനമായ നെഞ്ചുവേദനയോ ശ്വാസതടസ്സമോ ഉണ്ടായാൽ, ഉടൻ 112 എന്ന നമ്പറിൽ വിളിക്കുകയോ അടുത്തുള്ള അത്യാഹിത വിഭാഗത്തിൽ എത്തുകയോ ചെയ്യുക.",
		"common.consultDoctor": "എല്ലായ്പ്പോഴും ഡോക്ടറെ സമീപിക്കുക",
		"common.save": "സംരക്ഷിക്കുക",
		"common.cancel": "റദ്ദാക്കുക",
		"common.close": "അടയ്ക്കുക",
		"common.loading": "ലോഡുചെയ്യുന്നു...",
		"common.search": "തിരയുക",
		"common.clear": "മായ്ക്കുക",
		"common.retry": "വീണ്ടും ശ്രമിക്കുക",
		"common.send": "സന്ദേശം അയയ്ക്കുക",
		"common.stop": "നിർത്തുക",
		"common.voiceInput": "വോയ്‌സ് ഇൻപുട്ട്",
		"common.attachImage": "ചിത്രം ചേർക്കുക",
		"chat.inputPlaceholder": "നിങ്ങളുടെ ലക്ഷണങ്ങൾ വിവരിക്കുക അല്ലെങ്കിൽ ആരോഗ്യപരമായ ചോദ്യങ്ങൾ ചോദിക്കുക...",
		"chat.selectLanguage": "ഭാഷ",
		"chat.newChat": "പുതിയ ചാറ്റ്",
		"chat.findDoctors": "ഡോക്ടർമാരെ കണ്ടെത്തുക",
		"chat.voiceListening": "ശ്രദ്ധിക്കുന്നു... ഇപ്പോൾ സംസാരിക്കുക",
		"chat.voiceNotSupported": "ഈ ബ്രൗസറിൽ വോയ്‌സ് തിരിച്ചറിയൽ ലഭ്യമല്ല.",
		"chat.voiceLanguageFallback":
			"ഈ ഭാഷയ്ക്ക് വോയ്‌സ് പിന്തുണ ലഭ്യമല്ല. ഇംഗ്ലീഷിലേക്ക് മാറുന്നു.",
		"symptoms.title": "ലക്ഷണ വിശകലനം",
		"symptoms.describePlaceholder": "ഉദാ: 3 ദിവസമായി തലവേദന, നേരിയ പനി, ശരീരവേദന...",
		"symptoms.analyzeButton": "ലക്ഷണങ്ങൾ വിശകലനം ചെയ്യുക",
		"symptoms.possibleConditions": "സാധ്യമായ അവസ്ഥകൾ",
		"symptoms.severity": "തീവ്രത",
		"symptoms.urgency": "അടിയന്തിരത",
		"symptoms.recommendedSpecialist": "നിർദ്ദേശിക്കുന്ന വിദഗ്ദ്ധൻ",
		"symptoms.homeRemedies": "വീട്ടു വൈദ്യങ്ങൾ",
		"symptoms.disclaimer":
			"ഈ വിശകലനം എഐ നിർമ്മിതമാണ്, ഇത് മെഡിക്കൽ രോഗനിർണയമല്ല. ദയവായി ഡോക്ടറെ കാണുക.",
		"disease.title": "രോഗ & ആരോഗ്യ വിവരശേഖരം",
		"disease.searchPlaceholder": "രോഗം അല്ലെങ്കിൽ അവസ്ഥ തിരയുക...",
		"disease.overview": "അവലോകനം",
		"disease.symptoms": "ലക്ഷണങ്ങൾ",
		"disease.causes": "കാരണങ്ങൾ",
		"disease.prevention": "പ്രതിരോധവും പരിചരണവും",
		"disease.treatment": "ചികിത്സ",
		"disease.whenToSeeDoctor": "എപ്പോഴാണ് ഡോക്ടറെ കാണേണ്ടത്",
		"profile.languagePreference": "ഭാഷ മുൻഗണന",
		"profile.languagePreferenceDesc": "എഐ മറുപടികൾക്കും നിർദ്ദേശങ്ങൾക്കുമുള്ള നിങ്ങളുടെ ഇഷ്ടപ്പെട്ട ഭാഷ.",
	},
	pa: {
		"common.appName": "ਨਿਰਕਸ਼ ਏਆਈ",
		"common.medicalDisclaimer":
			"ਨਿਰਕਸ਼ ਏਆਈ ਸਿਰਫ ਵਿੱਦਿਅਕ ਅਤੇ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਸਿਹਤ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਇਹ ਪੇਸ਼ੇਵਰ ਡਾਕਟਰੀ ਸਲਾਹ, ਨਿਦਾਨ ਜਾਂ ਇਲਾਜ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ। ਹਮੇਸ਼ਾ ਯੋਗ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਵੋ।",
		"common.emergencyAlert":
			"ਐਮਰਜੈਂਸੀ ਚੇਤਾਵਨੀ: ਜੇਕਰ ਤੁਹਾਨੂੰ ਛਾਤੀ ਵਿੱਚ ਗੰਭੀਰ ਦਰਦ ਜਾਂ ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ ਹੋ ਰਹੀ ਹੈ, ਤਾਂ ਤੁਰੰਤ 112 'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਨਜ਼ਦੀਕੀ ਐਮਰਜੈਂਸੀ ਵਾਰਡ ਵਿੱਚ ਜਾਓ।",
		"common.consultDoctor": "ਹਮੇਸ਼ਾ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਵੋ",
		"common.save": "ਸੰਭਾਲੋ",
		"common.cancel": "ਰੱਦ ਕਰੋ",
		"common.close": "ਬੰਦ ਕਰੋ",
		"common.loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
		"common.search": "ਖੋਜੋ",
		"common.clear": "ਸਾਫ਼ ਕਰੋ",
		"common.retry": "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
		"common.send": "ਸੁਨੇਹਾ ਭੇਜੋ",
		"common.stop": "ਰੋਕੋ",
		"common.voiceInput": "ਆਵਾਜ਼ ਇਨਪੁੱਟ",
		"common.attachImage": "ਤਸਵੀਰ ਜੋੜੋ",
		"chat.inputPlaceholder": "ਆਪਣੇ ਲੱਛਣ ਦੱਸੋ ਜਾਂ ਸਿਹਤ ਸਬੰਧੀ ਸਵਾਲ ਪੁੱਛੋ...",
		"chat.selectLanguage": "ਭਾਸ਼ਾ",
		"chat.newChat": "ਨਵੀਂ ਗੱਲਬਾਤ",
		"chat.findDoctors": "ਡਾਕਟਰ ਲੱਭੋ",
		"chat.voiceListening": "ਸੁਣ ਰਿਹਾ ਹੈ... ਹੁਣ ਬੋਲੋ",
		"chat.voiceNotSupported": "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਪਛਾਣ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।",
		"chat.voiceLanguageFallback": "ਇਸ ਭਾਸ਼ਾ ਲਈ ਵੌਇਸ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਬਦਲਿਆ ਜਾ ਰਿਹਾ ਹੈ।",
		"symptoms.title": "ਲੱਛਣ ਵਿਸ਼ਲੇਸ਼ਣ",
		"symptoms.describePlaceholder": "ਉਦਾਹਰਣ: 3 ਦਿਨਾਂ ਤੋਂ ਸਿਰ ਦਰਦ, ਹਲਕਾ ਬੁਖ਼ਾਰ, ਸਰੀਰ ਦਰਦ...",
		"symptoms.analyzeButton": "ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
		"symptoms.possibleConditions": "ਸੰਭਾਵਿਤ ਸਥਿਤੀਆਂ",
		"symptoms.severity": "ਗੰਭੀਰਤਾ",
		"symptoms.urgency": "ਜ਼ਰੂਰੀਤਾ",
		"symptoms.recommendedSpecialist": "ਸਿਫਾਰਸ਼ੀ ਮਾਹਰ ਡਾਕਟਰ",
		"symptoms.homeRemedies": "ਘਰੇਲੂ ਉਪਚਾਰ",
		"symptoms.disclaimer":
			"ਇਹ ਵਿਸ਼ਲੇਸ਼ਣ ਏਆਈ ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ ਅਤੇ ਇਹ ਡਾਕਟਰੀ ਜਾਂਚ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਵੋ।",
		"disease.title": "ਬਿਮਾਰੀ ਅਤੇ ਸਿਹਤ ਲਾਇਬ੍ਰੇਰੀ",
		"disease.searchPlaceholder": "ਬਿਮਾਰੀ ਜਾਂ ਸਥਿਤੀ ਖੋਜੋ...",
		"disease.overview": "ਸੰਖੇਪ ਜਾਣਕਾਰੀ",
		"disease.symptoms": "ਲੱਛਣ",
		"disease.causes": "ਕਾਰਨ",
		"disease.prevention": "ਰੋਕਥਾਮ ਅਤੇ ਸੰਭਾਲ",
		"disease.treatment": "ਇਲਾਜ",
		"disease.whenToSeeDoctor": "ਡਾਕਟਰ ਨੂੰ ਕਦੋਂ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ",
		"profile.languagePreference": "ਭਾਸ਼ਾ ਤਰਜੀਹ",
		"profile.languagePreferenceDesc": "ਏਆਈ ਜਵਾਬਾਂ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਤੁਹਾਡੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ।",
	},
};

/**
 * Type-safe translation lookup with safe fallback to English.
 * Supports token interpolation: e.g. t('welcome', 'hi', { name: 'Rahul' }) replaces {name}.
 */
export function t(
	key: TranslationKey,
	language?: string | null,
	params?: Record<string, string | number>,
): string {
	const lang = language && isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;

	// Lookup in target language, then fallback to English, then return key
	const targetTranslation = TRANSLATIONS[lang]?.[key];
	const fallbackTranslation = TRANSLATIONS.en[key];
	let text = targetTranslation || fallbackTranslation || key;

	if (params) {
		for (const [paramKey, paramVal] of Object.entries(params)) {
			text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(paramVal));
		}
	}

	return text;
}
