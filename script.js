/* =================================================================
   ⚙️  ضبط الإعدادات الأساسية — عدّلي القيم دي بسهولة من هنا
   ================================================================= */
const CONFIG = {
  // رقم واتساب الأخصائية بصيغة دولية بدون + أو 00 أو مسافات
  // مثال مصر: 201234567890
  whatsappNumber: "201060555033",

  // رسالة الترحيب الافتراضية لو ضغط حد على زرار الواتساب العائم مباشرة
  defaultWhatsappMessage: "أهلاً أ/شروق، أنا حابب/ة أعرف ازاي احجز  جلسة معاكي.",
};


/* =================================================================
   📍 بيانات اختبار الوعي — 5 مجالات × 5 أسئلة لكل مجال
   ================================================================= */
const TOPICS = [
  {
    id: "anxiety",
    icon: "🌪️",
    title: "القلق والتوتر",
    desc: "أفكار متسارعة، توتر مستمر، صعوبة في الاسترخاء",
    questions: [
      {
        q: "في آخر أسبوعين، حسيتي إن قلبك بيدق بسرعة أو إنك متوترة بدون سبب واضح؟",
        options: [
          { text: "نادراً جداً أو مش حاسة بده", score: 0 },
          { text: "بيحصل من وقت للتاني", score: 1 },
          { text: "بشكل متكرر خلال الأسبوع", score: 2 },
          { text: "تقريباً كل يوم", score: 3 },
        ],
      },
      {
        q: "هل بتلاقي نفسك بتفكري في أسوأ سيناريو ممكن يحصل في أي موضوع؟",
        options: [
          { text: "لا، بفكر بشكل واقعي عادةً", score: 0 },
          { text: "بيحصل بس في مواضيع مهمة", score: 1 },
          { text: "بيحصل في حاجات كتير حتى البسيطة", score: 2 },
          { text: "ده شكل تفكيري الأساسي دلوقتي", score: 3 },
        ],
      },
      {
        q: "نومك بيتأثر بالتفكير الزايد أو القلق؟",
        options: [
          { text: "لا، بنام بسهولة", score: 0 },
          { text: "بياخد وقت أطول من الطبيعي", score: 1 },
          { text: "بصحى بالليل وعقلي شغال", score: 2 },
          { text: "نومي مضطرب بشكل واضح", score: 3 },
        ],
      },
      {
        q: "هل في أعراض جسدية بتظهر عليكِ زي شد في الرقبة، صداع، أو ضيق في التنفس؟",
        options: [
          { text: "نادراً", score: 0 },
          { text: "بسيطة وعابرة", score: 1 },
          { text: "موجودة بشكل ملحوظ", score: 2 },
          { text: "بتأثر على يومي", score: 3 },
        ],
      },
      {
        q: "بتلاقي نفسك بتتجنبي مواقف معينة بسبب التوتر المتوقع منها؟",
        options: [
          { text: "لا أبداً", score: 0 },
          { text: "في حالات قليلة جداً", score: 1 },
          { text: "بدأت ألاحظ ده مؤخراً", score: 2 },
          { text: "بقيت بتجنب كتير من المواقف", score: 3 },
        ],
      },
    ],
  },
  {
    id: "social",
    icon: "👥",
    title: "القلق الاجتماعي",
    desc: "خوف من التقييم، تجنّب التفاعل، خوف من الحكم",
    questions: [
      {
        q: "قبل أي تفاعل اجتماعي (اجتماع، تجمع، حتى مكالمة)، بتحسي بتوتر زائد؟",
        options: [
          { text: "لا، طبيعي", score: 0 },
          { text: "بس في المواقف الجديدة", score: 1 },
          { text: "غالباً قبل أي تفاعل", score: 2 },
          { text: "دايماً، حتى مع المعارف", score: 3 },
        ],
      },
      {
        q: "بتراجعي كلامك أو تصرفاتك بعد أي موقف اجتماعي بشكل مبالغ فيه؟",
        options: [
          { text: "لا", score: 0 },
          { text: "بسيط وبينتهي بسرعة", score: 1 },
          { text: "بفضل أفكر فيه لساعات", score: 2 },
          { text: "بفضل أفكر فيه لأيام", score: 3 },
        ],
      },
      {
        q: "بتتجنبي المواقف اللي محتاجة تكوني فيها مركز الانتباه؟",
        options: [
          { text: "لا، مرتاحة فيها", score: 0 },
          { text: "مش مفضلة بس بقدر أتعامل", score: 1 },
          { text: "بتجنبها لو قدرت", score: 2 },
          { text: "بعمل أي حاجة عشان أتجنبها", score: 3 },
        ],
      },
      {
        q: "هل خايفة إن الناس بتلاحظ توترك أو بتقيّمك سلباً؟",
        options: [
          { text: "لا", score: 0 },
          { text: "بفكر فيها بس مش مسيطرة عليّ", score: 1 },
          { text: "موجودة في معظم المواقف", score: 2 },
          { text: "فكرة مسيطرة عليّ باستمرار", score: 3 },
        ],
      },
      {
        q: "بتلاقي صعوبة في بدء أو استمرار محادثة مع أشخاص جدد؟",
        options: [
          { text: "لا", score: 0 },
          { text: "صعوبة بسيطة بس بتعدي", score: 1 },
          { text: "صعوبة واضحة", score: 2 },
          { text: "بتجنب الموضوع كله غالباً", score: 3 },
        ],
      },
    ],
  },
  {
    id: "mood",
    icon: "🌧️",
    title: "المزاج المنخفض",
    desc: "فقدان الحافز، إحساس بالفراغ، طاقة منخفضة",
    questions: [
      {
        q: "في آخر أسبوعين، حسيتي إن طاقتك أو حافزك أقل من العادي بشكل واضح؟",
        options: [
          { text: "لا، طاقتي طبيعية", score: 0 },
          { text: "تقلبات بسيطة", score: 1 },
          { text: "أقل بشكل ملحوظ", score: 2 },
          { text: "بالكاد بقدر أتحرك من الفراغ", score: 3 },
        ],
      },
      {
        q: "حاسة بمتعة أو اهتمام بحاجات كانت بتفرحك قبل كده؟",
        options: [
          { text: "نعم، طبيعي", score: 0 },
          { text: "أقل شوية عن العادي", score: 1 },
          { text: "بصعوبة بحس بمتعة", score: 2 },
          { text: "مش حاسة بحاجة تقريباً", score: 3 },
        ],
      },
      {
        q: "بتلاقي نفسك بتنامي أكتر أو أقل من العادي بشكل ملحوظ؟",
        options: [
          { text: "نومي ثابت طبيعي", score: 0 },
          { text: "تغيير بسيط", score: 1 },
          { text: "تغيير واضح في النوم", score: 2 },
          { text: "نومي مقلوب تماماً", score: 3 },
        ],
      },
      {
        q: "هل بتحاسبي نفسك بشكل قاسي أو حاسة إنك «فاشلة» في حاجات كتير؟",
        options: [
          { text: "لا", score: 0 },
          { text: "أحياناً", score: 1 },
          { text: "بشكل متكرر", score: 2 },
          { text: "ده شكل تفكيري في نفسي دلوقتي", score: 3 },
        ],
      },
      {
        q: "بتلاقي صعوبة في التركيز أو اتخاذ قرارات بسيطة؟",
        options: [
          { text: "لا", score: 0 },
          { text: "بسيطة", score: 1 },
          { text: "واضحة وبتأثر على شغلي", score: 2 },
          { text: "صعوبة كبيرة في أبسط القرارات", score: 3 },
        ],
      },
    ],
  },
  {
    id: "burnout",
    icon: "🔥",
    title: "الاحتراق الوظيفي",
    desc: "استنزاف من العمل، فقدان الإحساس بالمعنى، إرهاق دائم",
    questions: [
      {
        q: "بتحسي بإرهاق دائم حتى بعد الراحة أو يوم العطلة؟",
        options: [
          { text: "لا، بترتاح فعلاً", score: 0 },
          { text: "أحياناً", score: 1 },
          { text: "غالباً", score: 2 },
          { text: "الإرهاق دايماً موجود", score: 3 },
        ],
      },
      {
        q: "هل بقيتي حاسة بلا مبالاة تجاه شغلك أو حاسة إنه مالوش معنى؟",
        options: [
          { text: "لا، لسه حاسة بالمعنى", score: 0 },
          { text: "بدأت ألاحظ شوية", score: 1 },
          { text: "حاسة كتير بالمؤخرة", score: 2 },
          { text: "فقدت الإحساس بالمعنى تماماً", score: 3 },
        ],
      },
      {
        q: "بتلاقي صعوبة في فصل شغلك عن وقتك الشخصي حتى لما تكوني مش في الشغل؟",
        options: [
          { text: "لا، بفصل بسهولة", score: 0 },
          { text: "صعوبة بسيطة", score: 1 },
          { text: "شغلي بياخد جزء من راحتي دايماً", score: 2 },
          { text: "مفيش فاصل خالص", score: 3 },
        ],
      },
      {
        q: "بتحسي بانفعال أو نرفزة سريعة من حاجات كانت ماشية معاكِ قبل كده في الشغل؟",
        options: [
          { text: "لا", score: 0 },
          { text: "أحياناً", score: 1 },
          { text: "بشكل متكرر", score: 2 },
          { text: "أقرب حاجة تضايقني بتفجرني", score: 3 },
        ],
      },
      {
        q: "هل بتشككي في قيمتك أو كفاءتك في الشغل أكتر من العادي؟",
        options: [
          { text: "لا", score: 0 },
          { text: "بسيط", score: 1 },
          { text: "واضح", score: 2 },
          { text: "بشكل دائم ومؤثر", score: 3 },
        ],
      },
    ],
  },
  {
    id: "relationships",
    icon: "💬",
    title: "العلاقات والتواصل",
    desc: "صعوبة في التواصل، ثقة، أو فهم الحدود في العلاقة",
    questions: [
      {
        q: "بتلاقي صعوبة في التعبير عن احتياجاتك أو مشاعرك للطرف التاني؟",
        options: [
          { text: "لا، بعبّر بسهولة", score: 0 },
          { text: "صعوبة بسيطة بعض الأوقات", score: 1 },
          { text: "صعوبة واضحة", score: 2 },
          { text: "بفضل أكتم كل حاجة جوايا", score: 3 },
        ],
      },
      {
        q: "هل في خلافات متكررة بترجع لنفس الأسباب بدون حل فعلي؟",
        options: [
          { text: "لا", score: 0 },
          { text: "نادراً", score: 1 },
          { text: "بشكل متكرر", score: 2 },
          { text: "بشكل دائم تقريباً", score: 3 },
        ],
      },
      {
        q: "بتحسي بصعوبة في وضع حدود صحية مع الناس القريبين منك؟",
        options: [
          { text: "لا، بقدر أوضح حدودي", score: 0 },
          { text: "صعوبة بسيطة", score: 1 },
          { text: "صعوبة واضحة", score: 2 },
          { text: "تقريباً مستحيل أوضح حدودي", score: 3 },
        ],
      },
      {
        q: "بتحسي بالشك أو عدم الثقة بشكل متكرر في علاقتك الحالية؟",
        options: [
          { text: "لا", score: 0 },
          { text: "أحياناً وبسبب منطقي", score: 1 },
          { text: "بشكل متكرر بدون سبب واضح", score: 2 },
          { text: "الشك مسيطر على العلاقة", score: 3 },
        ],
      },
      {
        q: "هل بتلاقي نفسك بتكرري أنماط علاقات مش صحية من قبل كده؟",
        options: [
          { text: "لا", score: 0 },
          { text: "ممكن أحياناً", score: 1 },
          { text: "لاحظت ده فعلاً", score: 2 },
          { text: "نفس النمط بيتكرر باستمرار", score: 3 },
        ],
      },
    ],
  },
];


/* =================================================================
   حالة التطبيق
   ================================================================= */
const state = {
  currentStep: "topics", // topics | questions | result
  selectedTopic: null,
  currentQuestionIndex: 0,
  answers: [],
  totalScore: 0,
};


/* =================================================================
   تهيئة عند تحميل الصفحة
   ================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setupWhatsappLinks();
  setupNav();
  renderTopics();
  setupAssessmentNav();
  setupFaq();
  setupScrollAnimations();
});


/* =================================================================
   روابط واتساب الديناميكية
   ================================================================= */
function buildWhatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

function setupWhatsappLinks() {
  const defaultLink = buildWhatsappLink(CONFIG.defaultWhatsappMessage);

  const floatBtn = document.getElementById("floatWhatsapp");
  const footerBtn = document.getElementById("footerWhatsapp");
  const bookingBtn = document.getElementById("bookingWhatsappBtn");

  if (floatBtn) floatBtn.href = defaultLink;
  if (footerBtn) footerBtn.href = defaultLink;
  if (bookingBtn) bookingBtn.href = defaultLink;
}


/* =================================================================
   النافيجيشن (الشريط العلوي)
   ================================================================= */
function setupNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  });

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // إغلاق المنيو عند الضغط على لينك
  document.querySelectorAll(".nav__links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}


/* =================================================================
   اختبار الوعي — منطق العرض
   ================================================================= */
function renderTopics() {
  const grid = document.getElementById("topicsGrid");
  grid.innerHTML = "";

  TOPICS.forEach((topic) => {
    const btn = document.createElement("button");
    btn.className = "topic-btn";
    btn.type = "button";
    btn.innerHTML = `
      <span class="topic-btn__icon">${topic.icon}</span>
      <span class="topic-btn__title">${topic.title}</span>
      <span class="topic-btn__desc">${topic.desc}</span>
    `;
    btn.addEventListener("click", () => startAssessment(topic));
    grid.appendChild(btn);
  });
}

function startAssessment(topic) {
  state.selectedTopic = topic;
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.totalScore = 0;

  goToStep("questions");
  renderQuestion();
}

function renderQuestion() {
  const topic = state.selectedTopic;
  const index = state.currentQuestionIndex;
  const question = topic.questions[index];

  document.getElementById("qCounter").textContent = `سؤال ${index + 1} من ${topic.questions.length}`;
  document.getElementById("questionText").textContent = question.q;

  const progressPct = ((index) / topic.questions.length) * 100;
  document.getElementById("progressBar").style.width = `${progressPct}%`;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectAnswer(opt));
    optionsContainer.appendChild(btn);
  });

  // إظهار زرار الرجوع لو مش أول سؤال
  const backBtn = document.getElementById("assessBack");
  if (index > 0) {
    backBtn.classList.add("is-visible");
  } else {
    backBtn.classList.remove("is-visible");
  }
}

function selectAnswer(option) {
  state.answers.push(option);
  state.totalScore += option.score;

  const topic = state.selectedTopic;
  const isLastQuestion = state.currentQuestionIndex === topic.questions.length - 1;

  if (isLastQuestion) {
    document.getElementById("progressBar").style.width = "100%";
    setTimeout(() => showResult(), 300);
  } else {
    state.currentQuestionIndex++;
    renderQuestion();
  }
}

function goBackQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    state.answers.pop();
    state.totalScore -= state.answers[state.currentQuestionIndex]
      ? 0
      : 0; // الأمان لو حصل أي تعديل مستقبلي
    renderQuestion();
  }
}

function getResultTier(score, maxScore) {
  const pct = (score / maxScore) * 100;

  if (pct <= 25) {
    return {
      level: "مستوى منخفض",
      text: "إجاباتك بتدل على إنك بتتعاملي مع الموضوع ده بشكل متوازن نسبياً دلوقتي. ده لا يعني إن مساحة الدعم النفسي غير مفيدة — أحياناً جلسة أو اتنين بس عشان تتأكدي إنك على المسار الصحيح بتفرق كتير في منع تراكم أي ضغط مستقبلي.",
    };
  } else if (pct <= 50) {
    return {
      level: "مستوى متوسط",
      text: "إجاباتك بتوضح إن في علامات واضحة محتاجة اهتمام، بس لسه في مساحة كبيرة للتحسن بخطوات عملية وموجهة. جلسة استكشافية مع أ/شروق ممكن تساعدك تفهمي السبب الجذري وتبدأي تتعاملي معاه بدل ما يتراكم.",
    };
  } else if (pct <= 75) {
    return {
      level: "مستوى مرتفع",
      text: "النتيجة دي بتوضح إن الموضوع ده بيأثر عليكِ بشكل ملموس في حياتك اليومية. ده وقت مناسب جداً لحجز جلسة مع متخصصة — مش لازم تنتظري الأمور تتفاقم أكتر، خصوصاً إن في أدوات فعّالة ممكن تساعدك تستعيدي توازنك.",
    };
  } else {
    return {
      level: "مستوى مرتفع جداً",
      text: "إجاباتك بتشير إلى إن الموضوع ده بيأخد مساحة كبيرة جداً من طاقتك وحياتك اليومية. أنصحك بشدة إنك تحجزي جلسة مع أ/شروق في أقرب وقت ممكن — التعامل المبكر مع المستوى ده بيفرق فرق كبير في سرعة ومدى التحسن.",
    };
  }
}

function showResult() {
  const topic = state.selectedTopic;
  const maxScore = topic.questions.length * 3;
  const tier = getResultTier(state.totalScore, maxScore);

  document.getElementById("resultTitle").textContent = `${tier.level} — ${topic.title}`;
  document.getElementById("resultText").textContent = tier.text;

  document.getElementById("assessBack").classList.remove("is-visible");
  document.getElementById("assessRestart").classList.add("is-visible");

  goToStep("result");
}

function goToStep(stepName) {
  state.currentStep = stepName;
  document.querySelectorAll(".assess__step").forEach((stepEl) => {
    stepEl.classList.toggle("assess__step--active", stepEl.dataset.step === stepName);
  });

  if (stepName === "topics") {
    document.getElementById("assessBack").classList.remove("is-visible");
    document.getElementById("assessRestart").classList.remove("is-visible");
  }
}

function setupAssessmentNav() {
  document.getElementById("assessBack").addEventListener("click", goBackQuestion);

  document.getElementById("assessRestart").addEventListener("click", () => {
    state.selectedTopic = null;
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.totalScore = 0;
    goToStep("topics");
  });

  // إرسال نتيجة الاختبار
  document.getElementById("assessForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();

    if (!name || !phone) return;

    const topic = state.selectedTopic;
    const maxScore = topic.questions.length * 3;
    const tier = getResultTier(state.totalScore, maxScore);

    // -----------------------------------------------------------------
    // 📝 ملاحظة هامة: إرسال البيانات لـ Google Form
    // عند توفر رابط الفورم الفعلي، استبدلي GOOGLE_FORM_ACTION_URL
    // وأسماء الحقول (entry.XXXXXXX) من إعدادات الفورم نفسه.
    // الكود التالي مُجهّز وجاهز، فقط معطّل مؤقتاً (placeholder).
    // -----------------------------------------------------------------
    submitToGoogleForm({
      name,
      phone,
      topic: topic.title,
      level: tier.level,
    });

    // بناء رسالة واتساب مخصصة بنتيجة الاختبار وبيانات العميل
    const whatsappMessage =
      `أهلاً أ/شروق 🌿\n` +
      `الاسم: ${name}\n` +
      `رقم الموبايل: ${phone}\n` +
      `نتيجة اختبار الوعي السريع:\n` +
      `– المجال: ${topic.title}\n` +
      `– المستوى: ${tier.level}\n\n` +
      `حابب/ة أحجز جلسة وأتواصل بخصوص النتيجة دي.`;

    const link = buildWhatsappLink(whatsappMessage);
    window.open(link, "_blank");
  });
}

function submitToGoogleForm(data) {
  // ===================================================================
  // 🔗 خطوات الربط بفورم جوجل (بسيطة جداً):
  // 1. افتحي Google Form الخاص بيكِ → اضغطي على ⋮ (الثلاث نقاط) → Get pre-filled link
  // 2. عبّي بيانات تجريبية في كل حقل واضغطي "Get Link"
  // 3. هتلاقي رابط شكله كده:
  //    https://docs.google.com/forms/d/e/XXXXXXX/viewform?usp=pp_url&entry.111=AAA&entry.222=BBB
  // 4. خدي قيمة "e/XXXXXXX" وضعيها في GOOGLE_FORM_ID تحت
  // 5. خدي أرقام entry.111 وentry.222... وضعيها في entry IDs تحت (كل اسم حقل بإنتري بتاعه)
  // ===================================================================

  const GOOGLE_FORM_ID = "1FAIpQLSdw4hEVs3d-hPskYoe2rfJCGJZcGc8exLlUgaxWpe-dRzmJAg" 
  // ضعي هنا الـ ID اللي بين /d/e/ و /viewform
  const ENTRY_IDS = {
    name: "entry.1626822271",   // غيّريها برقم entry الفعلي لحقل الاسم
    phone: "entry.38728362", // غيّريها برقم entry الفعلي لحقل الموبايل
    topic: "entry.1421679217", // غيّريها برقم entry الفعلي لحقل المجال
    level: "entry.1429286742", // غيّريها برقم entry الفعلي لحقل المستوى
  };

  // لو لسه الـ Form ID مش متغيّر (يعني لسه placeholder)، نتجاهل الإرسال بهدوء
  if (GOOGLE_FORM_ID === "PLACEHOLDER_FORM_ID") {
    console.info("⚠️ لسه لازم تربطي Google Form الحقيقي في submitToGoogleForm() داخل script.js");
    return;
  }

  const formAction = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  const formData = new FormData();
  formData.append(ENTRY_IDS.name, data.name);
  formData.append(ENTRY_IDS.phone, data.phone);
  formData.append(ENTRY_IDS.topic, data.topic);
  formData.append(ENTRY_IDS.level, data.level);

  // الإرسال بصيغة no-cors لأن جوجل فورمز ما بيرجّعش CORS headers
  fetch(formAction, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  }).catch(() => {
    // الإرسال بصيغة no-cors مش بيرجع نتيجة فعلية نقدر نتأكد منها، وده طبيعي ومتوقع
  });
}


/* =================================================================
   الأسئلة الشائعة (أكورديون)
   ================================================================= */
function setupFaq() {
  document.querySelectorAll(".faq__item").forEach((item) => {
    const btn = item.querySelector(".faq__q");
    const answer = item.querySelector(".faq__a");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // إغلاق كل العناصر التانية (اختياري: أكورديون منفرد)
      document.querySelectorAll(".faq__item").forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq__a").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}


/* =================================================================
   أنيميشن ظهور العناصر عند السكرول
   ================================================================= */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedSelectors = [
    ".service-card",
    ".testi-card",
    ".about__media",
    ".about__content",
    ".booking__panel",
    ".faq__item",
  ];

  document.querySelectorAll(animatedSelectors.join(",")).forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity .6s var(--ease) ${(i % 6) * 0.06}s, transform .6s var(--ease) ${(i % 6) * 0.06}s`;
    observer.observe(el);
  });
}
