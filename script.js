const music = document.getElementById("music");

const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");

const introScreen = document.getElementById("introScreen");

const letterScreen = document.getElementById("letterScreen");

const typedText = document.getElementById("typedText");

const petalsContainer = document.getElementById("petals");

/* ورود متساقطة */

for(let i = 0; i < 40; i++){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    petal.style.animationDelay =
        Math.random() * 8 + "s";

    petalsContainer.appendChild(petal);
}

/* نص الرسالة */

const message = `

متى تعودين إلى مكانك بين ضلوعي؟

متى يعود صوتكِ ليطمئن بالي بأنني ما زلت حيّاً؟

لماذا لم أولد وأنتِ معي منذ البداية؟

نعم، ولدتُ معيوباً من دون قلب...

هذا أنا.

كيف استطعت أن أعيش كل هذه المدة وأنتِ بعيدة عني ولستِ في مكانك الطبيعي؟

لو أن الدنيا أعطتني يوماً أمنية واحدة فقط،

واحدة فقط لا غير،

لاخترت أن أعيش معكِ منذ البداية وحتى النهاية.

قد يختار الناس المال أو السعادة أو أشياء كثيرة...

أما أنا،

فسأختاركِ أنتِ.

كيف لي أن أتحمل بعدك أكثر؟

لقد أصبح فراغ صدري ينادي:

أين ساكني؟

وأصبحت عيناي تفضحانني وهما تترقبان عودتكِ.

يوم عودتكِ سيكون يوم ميلادي الحقيقي،

لأنني لم أكن أعيش حقاً،

ولم أولد حقاً،

إلا وأنتِ بداخلي.

أتدرين لماذا وجودكِ مهم في حياتي؟

لأن الله أحبني،

فوضع في قلبي مودةً وحباً واهتماماً كنت دائماً أتساءل:

من يستحقها؟

فاختاركِ قلبي واختاركِ عقلي.

لأن حبكِ كان وما زال يشبه الطمأنينة التي يرسلها الله في الأوقات التي أحتاج فيها إلى السند.

اللهم اجعل حبنا خالصاً لوجهك الكريم،

ولا تفسده الدنيا،

ولا تباعد بين قلوبنا،

واجعلنا عوناً لبعضنا على طاعتك،

واجمعنا بالحلال ويسّر أمرنا.

هل سمعتِ يوماً عن لغات الحب؟

أنا أحببتكِ بكل لغة من لغاتها.

أحبكِ حين أشارككِ تفاصيل يومي الصغيرة والكبيرة.

أحبكِ حين أخبركِ أنني أتناول طعامي.

أحبكِ حين أشرب القهوة التي لم أكن أحبها يوماً.

أحبكِ حين أقرأ كتاباً.

أحبكِ حين أشاهد مسلسلاً كورياً أو تركياً.

أحبكِ وأنا أكتب لكِ ما في قلبي.

أحبكِ لأنني أريد أن أشارككِ تفاصيل أيامي كلها.

فالحب بالنسبة لي هو المشاركة.

مشاركة الأشياء الجميلة والمؤلمة،

الصغيرة والكبيرة،

السهلة والصعبة.

حبيبتي...

الحب الذي في قلبي لكِ أصبح أكبر مما تتصورين،

ويكبر كل يوم أكثر.

أحب أن أراكِ سعيدة.

أحب أن تشاركيني تفاصيل يومكِ،

لأنني حينها أشعر وكأنني أعيش معكِ.

أنتِ مصدر السعادة والفرح وراحة البال.

أنتِ العافية والصحة والرزق.

أنتِ الدواء لكل ما يؤلمني.

ولماذا أذهب إلى طبيبٍ وأنتِ موجودة؟

فبكلمةٍ منكِ،

بل بحرفٍ واحد فقط،

أعود طفلاً صغيراً تلمع عيناه وهو ينظر إليكِ.

واليوم الذي نصبح فيه لبعضنا ويعود قلبي إلى مكانه،

لأنكِ أنتِ قلبي،

سيكون عيد ميلادي الحقيقي.

وأعدكِ أن أبقى أحبكِ،

وأحب تفاصيلكِ كلها،

وأحب كل نسخة منكِ،

وكل شخصية فيكِ،

وأحبكِ أنتِ كما أنتِ...

إلى آخر نبضة في قلبي ❤️

`;

/* منع التكرار */

let started = false;

/* الضغط على الختم */

envelope.addEventListener("click", () => {

    if(started) return;

    started = true;

    /* تشغيل الموسيقى */

    music.play().catch(()=>{});

    /* تشقق الختم */

    seal.classList.add("crack");

    /* اختفاء الختم */

    setTimeout(() => {

        seal.style.display = "none";

    }, 500);

    /* فتح الظرف */

    setTimeout(() => {

        envelope.classList.add("open");

    }, 900);

    /* إخفاء شاشة الظرف */

    setTimeout(() => {

        introScreen.style.opacity = "0";

    }, 2500);

    /* إظهار الرسالة */

    setTimeout(() => {

        introScreen.style.display = "none";

        letterScreen.classList.add("show");

    }, 3300);

    /* كتابة تدريجية */

    setTimeout(() => {

        let i = 0;

        function typeWriter(){

            if(i < message.length){

                typedText.innerHTML += message.charAt(i);

                i++;

                const paper =
                    document.querySelector(".letter-paper");

                paper.scrollTop =
                    paper.scrollHeight;

                setTimeout(typeWriter, 28);

            }

        }

        typeWriter();

    }, 4200);

});