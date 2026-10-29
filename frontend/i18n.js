(() => {
  const locales = {
    tr: { label: "Dil", title: "Dil seçin", options: { tr: "🇹🇷 Türkçe", en: "🇬🇧 English", ar: "🇸🇦 العربية" } },
    en: { label: "Language", title: "Choose language", options: { tr: "🇹🇷 Türkçe", en: "🇬🇧 English", ar: "🇸🇦 العربية" } },
    ar: { label: "اللغة", title: "اختر اللغة", options: { tr: "🇹🇷 Türkçe", en: "🇬🇧 English", ar: "🇸🇦 العربية" } },
  };
  const strings = {
    "MODA ana sayfa": ["MODA home page", "الصفحة الرئيسية لمودا"], "Ana menü": ["Main menu", "القائمة الرئيسية"], "Ana Sayfa": ["Home", "الرئيسية"],
    "Yeni Gelenler": ["New Arrivals", "وصل حديثاً"], "Kız Çocuk": ["Girls", "ملابس البنات"], "Erkek Çocuk": ["Boys", "ملابس الأولاد"], "İndirim": ["Sale", "التخفيضات"],
    "Giriş Yap": ["Sign In", "تسجيل الدخول"], "Giriş yap": ["Sign in", "تسجيل الدخول"], "Giriş Yap | MODA": ["Sign In | MODA", "تسجيل الدخول | MODA"], "Merhaba,": ["Hello,", "مرحباً،"],
    "Kayıt Ol": ["Create Account", "إنشاء حساب"], "Kayıt Ol | MODA": ["Create Account | MODA", "إنشاء حساب | مودا"], "Kayıt ol": ["Sign up", "إنشاء حساب"],
    "Sepetim": ["My Cart", "سلتي"], "Sepetteki ürün sayısı": ["Items in cart", "عدد المنتجات في السلة"], "Sepetin henüz boş.": ["Your cart is empty.", "سلتك فارغة حالياً."], "Toplam:": ["Total:", "الإجمالي:"],
    "Beden (yaş)": ["Size (age)", "المقاس (العمر)"], "Beden seçin": ["Choose a size", "اختر المقاس"], "Beden seçin: 2-3, 4-5, 6-7 veya 8-9 yaş": ["Choose a size: ages 2–3, 4–5, 6–7 or 8–9", "اختر المقاس: الأعمار ٢–٣ أو ٤–٥ أو ٦–٧ أو ٨–٩"],
    "Sepete Ekle": ["Add to Cart", "أضف إلى السلة"], "Ürün Detayları": ["Product Details", "تفاصيل المنتج"], "Pencereyi kapat": ["Close dialog", "إغلاق النافذة"], "Ürün": ["Product", "المنتج"], "Favorilerim": ["My Favorites", "مفضلتي"], "Favori sayısı": ["Favorites count", "عدد المفضلة"], "Henüz favori ürünün yok.": ["You don't have any favorites yet.", "ليس لديك منتجات مفضلة بعد."],
    "Hakkımızda": ["About Us", "من نحن"], "İletişim": ["Contact", "اتصل بنا"], "Alt menü": ["Footer menu", "قائمة التذييل"], "© 2026 MODA · Tüm hakları saklıdır.": ["© 2026 MODA · All rights reserved.", "© ٢٠٢٦ مودا · جميع الحقوق محفوظة."],
    "Yeni Sezon": ["New Season", "الموسم الجديد"], "Sezon Fırsatı": ["Seasonal Offer", "عرض الموسم"], "Günlük Rahat Kombin": ["Everyday Comfort Set", "طقم يومي مريح"], "Minik Kaşif Takımı": ["Little Explorer Set", "طقم المستكشف الصغير"], "Neşeli Hafta Sonu": ["Cheerful Weekend", "عطلة نهاية أسبوع مرحة"], "Renkli Sonbahar Stili": ["Colorful Autumn Style", "إطلالة خريفية ملوّنة"], "Hafta Sonu Rahatlığı": ["Weekend Comfort", "راحة نهاية الأسبوع"], "Doğa Kaşifi Kombini": ["Nature Explorer Outfit", "إطلالة مستكشف الطبيعة"], "Rahat Oyun Saati": ["Comfy Playtime", "وقت لعب مريح"], "Renkli Günler Kombini": ["Colorful Days Outfit", "إطلالة الأيام الملوّنة"], "Sonbahar Rahatlığı": ["Autumn Comfort", "راحة الخريف"],
    "Yeni Sezon": ["New Season", "الموسم الجديد"], "Yeni sezon": ["New Season", "الموسم الجديد"], "Yeni sezon çocuk giyim koleksiyonu": ["New-season children's clothing collection", "مجموعة ملابس الأطفال للموسم الجديد"],
    "Çocuklar renkli kıyafetleriyle açık havada": ["Children outdoors in colorful outfits", "أطفال في الهواء الطلق بملابس ملوّنة"], "Şapka ve renkli kazaklar giyen iki çocuk": ["Two children wearing hats and colorful sweaters", "طفلان يرتديان قبعتين وكنزتين ملوّنتين"], "Açık havada oturan çocuk": ["Child sitting outdoors", "طفل يجلس في الهواء الطلق"],
    "Renkli tişört ve şort giyen çocuk": ["Child wearing a colorful T-shirt and shorts", "طفل يرتدي قميصاً ملوناً وسروالاً قصيراً"], "Örgü üst ve pantolon giyen çocuk": ["Child wearing a knitted top and trousers", "طفل يرتدي كنزة محبوكة وسروالاً"], "Düğmeli gömlek ve pantolon giyen çocuk": ["Child wearing a button-up shirt and trousers", "طفل يرتدي قميصاً بأزرار وسروالاً"], "Pantolon ve denim kıyafet giyen çocuk": ["Child wearing trousers and denim clothing", "طفل يرتدي سروالاً وملابس جينز"], "Kot ceket ve kot pantolon giyen çocuk": ["Child wearing a denim jacket and jeans", "طفل يرتدي سترة جينز وبنطال جينز"], "Eşofman takımı giyen iki çocuk": ["Two children wearing tracksuits", "طفلان يرتديان بدلتين رياضيتين"], "Ceket ve rahat kıyafetler giyen çocuk": ["Child wearing a jacket and comfortable clothes", "طفل يرتدي سترة وملابس مريحة"], "Rahat desenli çocuk kıyafetleri": ["Comfortable patterned children's clothes", "ملابس أطفال مريحة بنقوش"], "Günlük çocuk kıyafetleri": ["Everyday children's clothes", "ملابس أطفال يومية"], "Çocuk parti elbisesi giyen kız çocuk": ["Girl wearing a children's party dress", "طفلة ترتدي فستان حفلات للأطفال"],
    "Yeni Sezon": ["New Season", "الموسم الجديد"], "Yeni sezon": ["New Season", "الموسم الجديد"], "Miniklere kocaman tarzlar": ["Big style for little ones", "أناقة كبيرة للصغار"], "Renkli ve rahat stiller": ["Colorful, comfortable styles", "إطلالات مريحة وملوّنة"], "Küçük maceracılara": ["For little adventurers", "للمغامرين الصغار"], "Kaçırılmayacak fırsatlar": ["Offers not to be missed", "عروض لا تُفوّت"],
    "Koleksiyonu Keşfet": ["Explore the Collection", "اكتشف المجموعة"], "Yeni Sezon": ["New Season", "الموسم الجديد"], "Biz kimiz?": ["Who are we?", "من نحن؟"], "MODA, çocukların oyun oynarken rahat edebileceği ve kendi tarzlarını yansıtabileceği neşeli giyim fikirleri sunar.": ["MODA offers cheerful clothing that keeps children comfortable at play and lets them express their own style.", "تقدم مودا ملابس مرحة تمنح الأطفال الراحة أثناء اللعب وتساعدهم على التعبير عن أسلوبهم."], "Bize ulaşın": ["Get in touch", "تواصل معنا"], "Aşağıdaki iletişim ve sosyal medya bilgileri örnektir.": ["The contact and social media details below are examples.", "بيانات التواصل ومواقع التواصل أدناه تجريبية."], "E-posta": ["Email", "البريد الإلكتروني"], "Telefon": ["Phone", "الهاتف"], "Instagram": ["Instagram", "إنستغرام"], "TikTok": ["TikTok", "تيك توك"],
    "Mağazaya dön": ["Back to Store", "العودة إلى المتجر"], "← Mağazaya dön": ["← Back to Store", "← العودة إلى المتجر"], "MODA çocuk giyim koleksiyonu": ["MODA children's collection", "مجموعة ملابس الأطفال من مودا"], "Yeni sezon çocuk giyim koleksiyonundan dört çocuk": ["Four children from the new-season collection", "أربعة أطفال من مجموعة الموسم الجديد"], "Renkli uyumlu kıyafetler giyen iki çocuk": ["Two children in coordinating colorful outfits", "طفلان يرتديان ملابس ملوّنة متناسقة"],
    "KÜÇÜK MUTLULUKLAR İÇİN": ["FOR LITTLE MOMENTS OF JOY", "للحظات الصغيرة السعيدة"], "Güzel günler,": ["Lovely days,", "أيام جميلة،"], "güzel kombinlerle.": ["beautifully styled.", "بإطلالات جميلة."], "Sevdiğin parçaları keşfetmeye kaldığın yerden devam et.": ["Pick up where you left off and discover your favorite pieces.", "تابع اكتشاف القطع التي تحبها من حيث توقفت."], "MODA · Çocuk giyim koleksiyonu": ["MODA · Children's collection", "مودا · مجموعة ملابس الأطفال"], "TEKRAR HOŞ GELDİN": ["WELCOME BACK", "مرحباً بعودتك"], "Hesabına giriş yap": ["Sign in to your account", "سجّل الدخول إلى حسابك"], "Koleksiyonuna ve favorilerine kaldığın yerden devam et.": ["Continue exploring your collection and favorites.", "تابع تصفح مجموعتك ومفضلتك."], "Hesap işlemleri": ["Account actions", "إجراءات الحساب"], "E-posta adresi": ["Email address", "البريد الإلكتروني"], "Şifre": ["Password", "كلمة المرور"], "Şifreni gir": ["Enter your password", "أدخل كلمة المرور"], "♡ Giriş yap": ["♡ Sign in", "♡ تسجيل الدخول"], "Hesabın güvenli oturum çereziyle korunur.": ["Your account is protected by a secure session cookie.", "حسابك محمي بملف تعريف ارتباط آمن للجلسة."], "Miniklere kocaman tarzlar": ["Big style for little ones", "أناقة كبيرة للصغار"],
    "MODA AİLESİNE KATIL": ["JOIN THE MODA FAMILY", "انضم إلى عائلة مودا"], "Her güne": ["Start every day", "ابدأ كل يوم"], "neşeli bir başlangıç.": ["with a little joy.", "ببداية مليئة بالبهجة."], "Miniklerin tarzına eşlik edecek favori parçaları birlikte bulalım.": ["Let's find favorite pieces to match your little one's style.", "لنكتشف معاً القطع المفضلة التي تناسب أناقة طفلك."], "MODA · Yeni sezon seçkisi": ["MODA · New-season edit", "مودا · مختارات الموسم الجديد"], "YENİ HESAP": ["NEW ACCOUNT", "حساب جديد"], "MODA’ya hoş geldin": ["Welcome to MODA", "مرحباً بك في مودا"], "Hesabını oluştur, koleksiyonunu keşfetmeye başla.": ["Create an account and start exploring the collection.", "أنشئ حساباً وابدأ باكتشاف المجموعة."], "Ad": ["First name", "الاسم الأول"], "Soyad": ["Last name", "اسم العائلة"], "Adın": ["Your first name", "اسمك الأول"], "Soyadın": ["Your last name", "اسم العائلة"], "En az 8 karakter kullan.": ["Use at least 8 characters.", "استخدم ٨ أحرف على الأقل."], "En az 8 karakter": ["At least 8 characters", "٨ أحرف على الأقل"], "Şifreni tekrar yaz": ["Re-enter your password", "أعد إدخال كلمة المرور"], "Şifreyi tekrar gir": ["Confirm password", "أعد إدخال كلمة المرور"], "♡ Hesap oluştur": ["♡ Create account", "♡ إنشاء حساب"], "Bilgilerin güvenli oturumla korunur.": ["Your information is protected by a secure session.", "معلوماتك محمية بجلسة آمنة."],
    "İşlem tamamlanamadı. Lütfen tekrar dene.": ["Couldn't complete the request. Please try again.", "تعذّر إكمال العملية. يرجى المحاولة مرة أخرى."], "Şifre alanları birbiriyle aynı olmalı.": ["The passwords must match.", "يجب أن تتطابق كلمتا المرور."], "Hesabın oluşturuluyor…": ["Creating your account…", "جارٍ إنشاء حسابك…"], "Giriş yapılıyor…": ["Signing in…", "جارٍ تسجيل الدخول…"], "Başarılı! Mağazaya yönlendiriliyorsun…": ["Success! Taking you to the store…", "تم بنجاح! جارٍ تحويلك إلى المتجر…"], "Mağazaya yönlendiriliyorsun…": ["Taking you to the store…", "جارٍ تحويلك إلى المتجر…"], "Sunucuya ulaşılamadı. Biraz sonra tekrar dene.": ["Couldn't reach the server. Please try again shortly.", "تعذّر الاتصال بالخادم. يرجى المحاولة بعد قليل."], "Çıkış": ["Sign out", "تسجيل الخروج"],
    "Favorilerden çıkar": ["Remove from favorites", "إزالة من المفضلة"], "Favorilere ekle": ["Add to favorites", "أضف إلى المفضلة"], "Favorilere eklemek için ürün kataloğunun yüklenmesi gerekiyor.": ["The product catalog must load before adding favorites.", "يجب تحميل قائمة المنتجات قبل الإضافة إلى المفضلة."], "Favorilere eklendi ♥": ["Added to favorites ♥", "أُضيف إلى المفضلة ♥"], "Favorilerden çıkarıldı.": ["Removed from favorites.", "أُزيل من المفضلة."], "Önce bir beden seçmelisin.": ["Please choose a size first.", "يرجى اختيار المقاس أولاً."], "Bu ürün için stok bilgisi bulunamadı.": ["Stock information is unavailable for this product.", "معلومات المخزون لهذا المنتج غير متاحة."], "Ürün sepetine eklendi ♥": ["Added to your cart ♥", "أُضيف المنتج إلى سلتك ♥"], "Ürün sepetten kaldırıldı.": ["Item removed from cart.", "أُزيل المنتج من السلة."], "Sepet miktarı güncellendi.": ["Cart quantity updated.", "تم تحديث كمية السلة."], "Sepet sunucusuna ulaşılamadı.": ["Couldn't reach the cart server.", "تعذّر الاتصال بخادم السلة."], "Sepet işlemi tamamlanamadı.": ["Couldn't update the cart.", "تعذّر تحديث السلة."], "Favori işlemi tamamlanamadı.": ["Couldn't update favorites.", "تعذّر تحديث المفضلة."], "Favoriler yüklenemedi.": ["Couldn't load favorites.", "تعذّر تحميل المفضلة."], "Sepet yüklenemedi.": ["Couldn't load the cart.", "تعذّر تحميل السلة."], "Ürün": ["Product", "المنتج"], "Kaldır": ["Remove", "إزالة"], "Ürün Detayları": ["Product Details", "تفاصيل المنتج"], "Stokta yok": ["Out of stock", "نفد المخزون"], "Yükleniyor…": ["Loading…", "جارٍ التحميل…"],
    "Dil": ["Language", "اللغة"], "Yönetim Paneli | MODA": ["Admin Panel | MODA", "لوحة الإدارة | مودا"], "Yönetici girişi": ["Administrator Sign In", "تسجيل دخول المسؤول"], "Ürün kataloğunu ve stokları hesabınla güvenli şekilde yönet.": ["Securely manage the product catalog and inventory.", "أدر كتالوج المنتجات والمخزون بأمان."], "Panele giriş yap": ["Sign in to dashboard", "تسجيل الدخول إلى لوحة التحكم"], "KONTROL PANELİ": ["DASHBOARD", "لوحة التحكم"], "Ürün yönetimi": ["Product Management", "إدارة المنتجات"], "Çıkış yap": ["Sign out", "تسجيل الخروج"], "KATALOĞA EKLE": ["ADD TO CATALOG", "أضف إلى الكتالوج"], "Yeni ürün": ["New Product", "منتج جديد"], "Ürün adı": ["Product name", "اسم المنتج"], "Örn. Minik Kaşif Takımı": ["e.g. Little Explorer Set", "مثال: طقم المستكشف الصغير"], "Ürün bağlantı adı (slug)": ["Product URL slug", "معرّف رابط المنتج"], "Türkçe karakter kullanmadan, kelimeleri tireyle ayır.": ["Use lowercase letters and hyphens; avoid accented characters.", "استخدم أحرفاً صغيرة وشرطات، وتجنب الأحرف المشكّلة."], "Kategori": ["Category", "الفئة"], "Kategori seç": ["Choose a category", "اختر فئة"], "Açıklama": ["Description", "الوصف"], "Ürünü kısaca tanıt.": ["Briefly describe the product.", "اكتب وصفاً موجزاً للمنتج."], "Varyantlar": ["Variants", "الخيارات"], "(beden, renk ve stok)": ["(size, color and stock)", "(المقاس واللون والمخزون)"], "＋ Varyant ekle": ["＋ Add variant", "＋ أضف خياراً"], "Varyant 1": ["Variant 1", "الخيار ١"], "Beden": ["Size", "المقاس"], "Renk": ["Color", "اللون"], "Fiyat (₺)": ["Price (₺)", "السعر (₺)"], "Stok": ["Stock", "المخزون"], "Bu varyantı kaldır": ["Remove this variant", "إزالة هذا الخيار"], "Ürün görseli bağlantısı": ["Product image URL", "رابط صورة المنتج"], "(isteğe bağlı)": ["(optional)", "(اختياري)"], "Görsel açıklaması": ["Image description", "وصف الصورة"], "Ürünün kısa görsel açıklaması": ["Brief product image description", "وصف موجز لصورة المنتج"], "Ürün mağazada yayında": ["Product is live in store", "المنتج منشور في المتجر"], "Ürünü kaydet": ["Save Product", "حفظ المنتج"], "Düzenlemeyi iptal et": ["Cancel editing", "إلغاء التعديل"], "KATALOG": ["CATALOG", "الكتالوج"], "Ürün listesini yenile": ["Refresh product list", "تحديث قائمة المنتجات"], "Ürün bilgilerini ve varyantlarını düzenleyebilir, ürünü silebilirsin.": ["Edit product details and variants, or delete a product.", "يمكنك تعديل تفاصيل المنتجات وخياراتها أو حذف المنتج."], "Ürünler yükleniyor…": ["Loading products…", "جارٍ تحميل المنتجات…"], "Henüz ürün yok. Soldaki formdan ilk ürünü ekleyebilirsin.": ["No products yet. Add your first product using the form.", "لا توجد منتجات بعد. أضف أول منتج باستخدام النموذج."], "Değişiklikleri kaydet": ["Save changes", "حفظ التغييرات"], "Yayında": ["Published", "منشور"], "Pasif": ["Inactive", "غير نشط"], "Ürünü düzenle": ["Edit product", "تعديل المنتج"], "Ürünü sil": ["Delete product", "حذف المنتج"], "Bu hesap yönetici yetkisine sahip değil.": ["This account does not have administrator access.", "هذا الحساب لا يملك صلاحية المسؤول."], "Ürün güncelleniyor…": ["Updating product…", "جارٍ تحديث المنتج…"], "Ürün ve varyantları kaydediliyor…": ["Saving product and variants…", "جارٍ حفظ المنتج وخياراته…"], "Ürün bilgileri güncellendi.": ["Product details updated.", "تم تحديث تفاصيل المنتج."], "Ürün mağaza kataloğuna eklendi.": ["Product added to the store catalog.", "تمت إضافة المنتج إلى كتالوج المتجر."]
  };
  Object.assign(strings, {
    "Çocuk Basic Tişört": ["Kids' Basic T-Shirt", "تيشيرت أساسي للأطفال"], "Dinazor Baskılı Tişört": ["Dinosaur Print T-Shirt", "تيشيرت بطبعة الديناصور"], "Çizgili Tişört": ["Striped T-Shirt", "تيشيرت مخطط"], "Polo Yaka Tişört": ["Polo Shirt", "تيشيرت بياقة بولو"], "Kapüşonlu Sweatshirt": ["Hooded Sweatshirt", "كنزة بغطاء رأس"], "Fermuarlı Hoodie": ["Zip-Up Hoodie", "هودي بسحاب"], "Bisiklet Yaka Sweatshirt": ["Crew-Neck Sweatshirt", "كنزة بياقة دائرية"], "Pamuklu Gömlek": ["Cotton Shirt", "قميص قطني"], "Ekose Gömlek": ["Checked Shirt", "قميص كاروهات"], "Jogger Pantolon": ["Jogger Trousers", "بنطال رياضي"], "Denim Pantolon": ["Denim Trousers", "بنطال دنيم"], "Kargo Pantolon": ["Cargo Trousers", "بنطال بجيوب جانبية"], "Rahat Kesim Şort": ["Relaxed-Fit Shorts", "شورت بقصة مريحة"], "Deniz Şortu": ["Swim Shorts", "شورت سباحة"], "Eşofman Takımı": ["Tracksuit Set", "طقم رياضي"], "Fermuarlı Eşofman Üstü": ["Zip-Up Track Top", "سترة رياضية بسحاب"], "Kapüşonlu Yağmurluk": ["Hooded Raincoat", "معطف مطر بغطاء رأس"], "Şişme Mont": ["Puffer Jacket", "سترة مبطنة"], "Kot Ceket": ["Denim Jacket", "سترة دنيم"], "Desenli Pijama Takımı": ["Printed Pajama Set", "طقم بيجامة مطبوع"], "Bisiklet Yaka Kazak": ["Crew-Neck Sweater", "كنزة بياقة دائرية"], "Polar Üst": ["Fleece Top", "بلوزة صوفية"], "Baskılı Uzun Kollu Tişört": ["Long-Sleeve Graphic T-Shirt", "تيشيرت مطبوع بأكمام طويلة"], "Pamuklu Atlet": ["Cotton Tank Top", "قميص قطني بلا أكمام"], "Kanvas Salopet": ["Canvas Dungarees", "أفرول قماشي"], "Kalp Baskılı Tişört": ["Heart Print T-Shirt", "تيشيرت بطبعة قلب"], "Unicorn Baskılı Tişört": ["Unicorn Print T-Shirt", "تيشيرت بطبعة وحيد القرن"], "Basic Pamuklu Tişört": ["Basic Cotton T-Shirt", "تيشيرت قطني أساسي"], "Fırfırlı Bluz": ["Ruffle Blouse", "بلوزة بكشكش"], "Çiçek Desenli Bluz": ["Floral Blouse", "بلوزة بنقشة زهور"], "Kalp Baskılı Hoodie": ["Heart Print Hoodie", "هودي بطبعة قلب"], "Fermuarlı Hırka": ["Zip-Up Cardigan", "كارديغان بسحاب"], "Tayt": ["Leggings", "بنطال ضيق"], "Bol Paça Pantolon": ["Wide-Leg Trousers", "بنطال واسع الساقين"], "Pileli Etek": ["Pleated Skirt", "تنورة بكسرات"], "Tül Etek": ["Tulle Skirt", "تنورة تول"], "Çiçek Desenli Elbise": ["Floral Dress", "فستان بنقشة زهور"], "Parti Elbisesi": ["Party Dress", "فستان حفلات"], "Kot Salopet Elbise": ["Denim Pinafore Dress", "فستان دنيم بحمالات"], "Keten Şort": ["Linen Shorts", "شورت كتان"], "Desenli Şort": ["Printed Shorts", "شورت مطبوع"], "Baskılı Pijama Takımı": ["Printed Pajama Set", "طقم بيجامة مطبوع"], "Yağmurluk": ["Raincoat", "معطف مطر"], "Kapitone Mont": ["Quilted Jacket", "سترة مبطنة"], "Denim Ceket": ["Denim Jacket", "سترة دنيم"], "Örgü Kazak": ["Knitted Sweater", "كنزة محبوكة"], "Kurdele Detaylı Tulum": ["Ruffle-Trim Romper", "أفرول بتفاصيل فيونكة"]
  });
  Object.assign(strings, {
    "Sunucu hatası": ["Server error", "خطأ في الخادم"], "Oturum açmalısınız.": ["Please sign in.", "يرجى تسجيل الدخول."], "Oturum süresi dolmuş. Tekrar giriş yapın.": ["Your session expired. Please sign in again.", "انتهت صلاحية جلستك. يرجى تسجيل الدخول مجدداً."], "Bu işlem için yönetici yetkisi gerekli.": ["Administrator access is required for this action.", "يلزم توفر صلاحية المسؤول لهذا الإجراء."], "Geçerli e-posta, 8-128 karakterli parola, ad ve soyad gerekli.": ["A valid email, password (8–128 characters), first name and last name are required.", "يلزم إدخال بريد إلكتروني صالح وكلمة مرور من ٨ إلى ١٢٨ حرفاً والاسم الأول واسم العائلة."], "E-posta ve parola gerekli.": ["Email and password are required.", "البريد الإلكتروني وكلمة المرور مطلوبان."], "E-posta veya parola hatalı.": ["Incorrect email or password.", "البريد الإلكتروني أو كلمة المرور غير صحيحة."], "Bu e-posta adresi zaten kayıtlı.": ["This email address is already registered.", "هذا البريد الإلكتروني مسجل بالفعل."], "Bulunamadı": ["Not found", "غير موجود"], "Ürün bulunamadı.": ["Product not found.", "المنتج غير موجود."], "Belirtilen kategori bulunamadı.": ["The selected category was not found.", "الفئة المحددة غير موجودة."], "Bu slug zaten kullanılıyor.": ["This URL slug is already in use.", "معرّف الرابط هذا مستخدم بالفعل."], "Geçersiz ürün bilgileri.": ["Invalid product details.", "تفاصيل المنتج غير صالحة."], "Stok miktarı yetersiz.": ["Insufficient stock.", "المخزون غير كافٍ."]
  });
  Object.assign(strings, {
    "Şifremi Unuttum | MODA": ["Forgot Password | MODA", "نسيت كلمة المرور | مودا"], "Yeni Şifre | MODA": ["New Password | MODA", "كلمة مرور جديدة | مودا"],
    "Hesabınız varsa, şifre yenileme bağlantısı e-posta adresinize gönderildi.": ["If an account exists, a password reset link has been sent to its email address.", "إذا كان لديك حساب، فقد أُرسل رابط إعادة تعيين كلمة المرور إلى بريده الإلكتروني."], "Geçerli bir e-posta adresi girin.": ["Enter a valid email address.", "أدخل عنوان بريد إلكتروني صالحاً."], "Şifre yenileme e-postası şu anda kullanılamıyor.": ["Password reset email is currently unavailable.", "خدمة إعادة تعيين كلمة المرور غير متاحة حالياً."], "Şifre yenileme e-postası gönderilemedi. Lütfen daha sonra tekrar deneyin.": ["Couldn't send the reset email. Please try again later.", "تعذّر إرسال رسالة إعادة التعيين. يرجى المحاولة لاحقاً."], "Şifre yenileme bağlantısı geçersiz veya süresi dolmuş.": ["This password reset link is invalid or has expired.", "رابط إعادة تعيين كلمة المرور غير صالح أو انتهت صلاحيته."], "Şifre 8-128 karakter arasında olmalıdır.": ["Password must be 8–128 characters long.", "يجب أن تتراوح كلمة المرور بين ٨ و١٢٨ حرفاً."], "İşlem tamamlanamadı. Lütfen daha sonra tekrar deneyin.": ["Couldn't complete the request. Please try again later.", "تعذّر إكمال الطلب. يرجى المحاولة لاحقاً."],
    "Şifremi unuttum": ["Forgot password?", "نسيت كلمة المرور؟"], "Şifreni yenile": ["Reset your password", "أعد تعيين كلمة المرور"], "Yeni şifreni belirle": ["Choose a new password", "اختر كلمة مرور جديدة"], "Yeni şifre": ["New password", "كلمة مرور جديدة"], "Yeni şifreyi tekrar yaz": ["Confirm new password", "أعد كتابة كلمة المرور الجديدة"], "Şifremi güncelle": ["Update password", "حدّث كلمة المرور"], "Hesap güvenliği": ["ACCOUNT SECURITY", "أمان الحساب"], "YENİ BAŞLANGIÇ": ["A FRESH START", "بداية جديدة"],
    "E-posta doğrulama bağlantısını yeniden gönder": ["Resend email verification link", "أعد إرسال رابط تأكيد البريد الإلكتروني"], "Doğrulama e-postası gelmedi mi? Yeni bağlantı iste.": ["Didn't receive the verification email? Request a new link.", "لم يصلك بريد التحقق؟ اطلب رابطاً جديداً."], "HESAP DOĞRULAMA": ["ACCOUNT VERIFICATION", "تأكيد الحساب"], "Doğrulama bağlantısı gönder": ["Send verification link", "أرسل رابط التحقق"], "E-posta adresini doğrula": ["Verify your email address", "أكد عنوان بريدك الإلكتروني"], "Bağlantı kontrol ediliyor. Biraz bekle.": ["Checking the link. Please wait.", "جارٍ التحقق من الرابط. يرجى الانتظار."], "Kayıt olurken kullandığın e-posta adresini yazalım; yeni bir doğrulama bağlantısı gönderelim.": ["Enter the email address you used to sign up, and we'll send a new verification link.", "أدخل البريد الإلكتروني الذي استخدمته للتسجيل وسنرسل رابط تحقق جديداً."], "Doğrulama bağlantısı eksik. Yeni bağlantı isteyebilirsin.": ["The verification link is missing. You can request a new one.", "رابط التحقق مفقود. يمكنك طلب رابط جديد."], "E-posta adresin doğrulanıyor…": ["Verifying your email address…", "جارٍ تأكيد بريدك الإلكتروني…"], "E-posta adresin doğrulandı. Mağazaya yönlendiriliyorsun…": ["Your email is verified. Taking you to the store…", "تم تأكيد بريدك الإلكتروني. جارٍ تحويلك إلى المتجر…"], "Doğrulama bağlantısı geçersiz veya süresi dolmuş.": ["The verification link is invalid or expired.", "رابط التحقق غير صالح أو انتهت صلاحيته."], "Hesabın oluşturuldu. Giriş yapmadan önce e-posta adresini doğrulamalısın.": ["Your account is ready. Verify your email before signing in.", "تم إنشاء حسابك. أكد بريدك الإلكتروني قبل تسجيل الدخول."], "Hesabın oluşturuldu. E-posta ve şifrenle giriş yapabilirsin. Sipariş vermek ve şifreni sıfırlamak için e-posta doğrulaması gerekir.": ["Your account is ready. You can sign in with your email and password. Verify your email before placing an order or resetting your password.", "تم إنشاء حسابك. يمكنك تسجيل الدخول ببريدك الإلكتروني وكلمة المرور. أكد بريدك الإلكتروني قبل تقديم طلب أو إعادة تعيين كلمة المرور."], "Hesabın oluşturuldu. E-posta ve şifrenle giriş yapabilirsin.": ["Your account is ready. You can sign in with your email and password.", "تم إنشاء حسابك. يمكنك تسجيل الدخول ببريدك الإلكتروني وكلمة المرور."], "E-posta doğrulama servisi henüz yapılandırılmadı.": ["Email verification is not configured yet.", "لم يتم إعداد خدمة التحقق من البريد الإلكتروني بعد."], "Giriş yapmadan önce e-posta adresini doğrula. Yeni bağlantı isteyebilirsin.": ["Verify your email address before signing in. You can request a new link.", "أكد بريدك الإلكتروني قبل تسجيل الدخول. يمكنك طلب رابط جديد."], "Bağlantı gönderiliyor…": ["Sending link…", "جارٍ إرسال الرابط…"], "Hesabın varsa yeni doğrulama bağlantısı gönderildi. Gelen kutunu kontrol et.": ["If an account exists, a new verification link was sent. Check your inbox.", "إذا كان الحساب موجوداً، فقد أُرسل رابط تحقق جديد. تحقق من صندوق الوارد."], "Doğrulama bağlantısı gönderilemedi.": ["Couldn't send the verification link.", "تعذر إرسال رابط التحقق."],
    "Hesabına bağlı e-posta adresini yaz. Sana güvenli bir yenileme bağlantısı gönderelim.": ["Enter the email address linked to your account and we'll send you a secure reset link.", "أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل إليك رابطاً آمناً لإعادة التعيين."], "Bağlantı gönder": ["Send reset link", "أرسل رابط إعادة التعيين"], "Giriş sayfasına dön": ["Back to sign in", "العودة إلى تسجيل الدخول"], "Eğer bu e-posta bir hesaba kayıtlıysa, yenileme bağlantısı gönderildi.": ["If an account exists for this email, a reset link has been sent.", "إذا كان هذا البريد الإلكتروني مرتبطاً بحساب، فقد أرسلنا رابط إعادة التعيين."], "Bağlantı hazırlanıyor…": ["Preparing your link…", "جارٍ تجهيز الرابط…"], "Şifren güncelleniyor…": ["Updating your password…", "جارٍ تحديث كلمة المرور…"], "Şifren güncellendi. Giriş sayfasına yönlendiriliyorsun…": ["Your password has been updated. Redirecting to sign in…", "تم تحديث كلمة المرور. جارٍ تحويلك لتسجيل الدخول…"], "Şifre yenileme bağlantısı eksik veya geçersiz.": ["The password reset link is missing or invalid.", "رابط إعادة تعيين كلمة المرور مفقود أو غير صالح."], "Şifre güncellenemedi.": ["Couldn't update the password.", "تعذّر تحديث كلمة المرور."], "Şifre yenileme isteği gönderilemedi.": ["Couldn't send the password reset request.", "تعذّر إرسال طلب إعادة تعيين كلمة المرور."], "Şifre alanları birbiriyle aynı olmalı.": ["The passwords must match.", "يجب أن تتطابق كلمتا المرور."],
    "Ürünleri keşfet": ["Explore products", "اكتشف المنتجات"], "Ürünlerde ara…": ["Search products…", "ابحث عن المنتجات…"], "Fiyat aralığı": ["Price range", "نطاق السعر"], "Tüm fiyatlar": ["All prices", "كل الأسعار"], "500 ₺ altı": ["Under ₺500", "أقل من ٥٠٠ ₺"], "500–700 ₺": ["₺500–₺700", "٥٠٠–٧٠٠ ₺"], "700 ₺ ve üzeri": ["₺700 and up", "٧٠٠ ₺ فأكثر"], "Sırala": ["Sort by", "ترتيب حسب"], "Önerilen": ["Recommended", "مقترح"], "Fiyat: düşükten yükseğe": ["Price: low to high", "السعر: من الأقل إلى الأعلى"], "Fiyat: yüksekten düşüğe": ["Price: high to low", "السعر: من الأعلى إلى الأقل"], "Ada göre": ["Name", "الاسم"], "Stokta olanlar": ["In stock only", "المتوفر فقط"], "Filtreleri temizle": ["Clear filters", "مسح عوامل التصفية"], "Sonuç": ["Results", "النتائج"], "Bu filtrelerle ürün bulamadık. Seçimleri değiştirmeyi dene.": ["No products match these filters. Try changing your selections.", "لم نجد منتجات بهذه التصفية. جرّب تغيير الخيارات."], "✉️ Bağlantı gönder": ["✉️ Send reset link", "✉️ أرسل رابط إعادة التعيين"], "💖 Şifremi güncelle": ["💖 Update my password", "💖 حدّث كلمة مروري"]
  });
  Object.assign(strings, {
    "Teslimat Adresi | MODA": ["Delivery Address | MODA", "عنوان التوصيل | مودا"], "Mağazaya dön": ["Back to the store", "العودة إلى المتجر"],
    "♡ SİPARİŞİNİ TAMAMLA": ["♡ COMPLETE YOUR ORDER", "♡ أكمِل طلبك"], "Teslimat adresin": ["Delivery address", "عنوان التوصيل"], "Miniklerin yeni favorileri doğru adrese ulaşsın.": ["Let your little one's new favorites reach the right address.", "لتصل اختيارات أطفالك الجديدة إلى العنوان الصحيح."],
    "Sipariş adımları": ["Order steps", "خطوات الطلب"], "Adres": ["Address", "العنوان"], "Ödeme": ["Payment", "الدفع"], "Onay": ["Confirmation", "التأكيد"], "Yeni adres ekle": ["Add a new address", "أضف عنواناً جديداً"], "Alanları doldur, adresini hesabına kaydedelim.": ["Fill in the details to save this address to your account.", "املأ البيانات لحفظ العنوان في حسابك."],
    "E-posta doğrulaması gerekli": ["Email verification required", "تأكيد البريد الإلكتروني مطلوب"], "Sipariş verebilmek için önce e-posta adresini doğrulaman gerekiyor.": ["You need to verify your email address before placing an order.", "يجب تأكيد بريدك الإلكتروني قبل تقديم الطلب."], "Yeni doğrulama bağlantısı iste": ["Request a new verification link", "اطلب رابط تأكيد جديداً"],
    "Kaydedilmiş adreslerin": ["Your saved addresses", "عناوينك المحفوظة"], "Adres başlığı": ["Address label", "اسم العنوان"], "Ev, İş gibi": ["Home, Work, etc.", "المنزل، العمل، إلخ"], "Ad soyad": ["Full name", "الاسم الكامل"], "Teslim alacak kişinin adı": ["Name of the recipient", "اسم مستلم الطلب"], "Telefon": ["Phone", "الهاتف"], "İl": ["City / Province", "المدينة / المحافظة"], "İlçe": ["District", "المنطقة"], "İlçenizi yazın": ["Enter your district", "أدخل منطقتك"], "Posta kodu": ["Postal code", "الرمز البريدي"], "(isteğe bağlı)": ["(optional)", "(اختياري)"], "Açık adres": ["Street address", "العنوان بالتفصيل"], "Mahalle, sokak, bina ve daire bilgisi": ["Neighborhood, street, building and apartment details", "الحي والشارع ورقم المبنى والشقة"], "Varsayılan teslimat adresim olsun": ["Set as my default delivery address", "اجعله عنوان التوصيل الافتراضي"], "♡ Adresi kaydet": ["♡ Save address", "♡ احفظ العنوان"], "Adresi kaydet": ["Save address", "احفظ العنوان"],
    "Sepet özeti ": ["Order summary ", "ملخص السلة "], "Sepet özeti": ["Order summary", "ملخص السلة"], "Sepet yükleniyor…": ["Loading cart…", "جارٍ تحميل السلة…"], "Ürünler toplamı": ["Items subtotal", "إجمالي المنتجات"], "Kargo ücreti sipariş aşamasında hesaplanır.": ["Shipping is calculated during checkout.", "يُحسب الشحن أثناء إتمام الطلب."], "Alışverişe devam et": ["Continue shopping", "متابعة التسوق"], "Teslimat adresi ekle →": ["Add delivery address →", "أضف عنوان التوصيل →"],
    "Sepetinde henüz ürün yok.": ["Your cart is empty.", "سلتك فارغة حالياً."], "Sepet özeti şu anda yüklenemedi.": ["The order summary couldn't be loaded right now.", "تعذّر تحميل ملخص السلة حالياً."], "Adres kaydediliyor…": ["Saving address…", "جارٍ حفظ العنوان…"], "Adresin hesabına kaydedildi ♥": ["Address saved to your account ♥", "تم حفظ العنوان في حسابك ♥"], "Adres bilgileri yüklenemedi.": ["Couldn't load address details.", "تعذّر تحميل بيانات العنوان."], "Adres kaydedilemedi. Lütfen tekrar dene.": ["Couldn't save the address. Please try again.", "تعذّر حفظ العنوان. حاول مرة أخرى."], "Varsayılan": ["Default", "افتراضي"], "İşlem tamamlanamadı.": ["Couldn't complete the request.", "تعذّر إكمال الطلب."], "Lütfen zorunlu alanları doğru şekilde doldurun.": ["Please complete the required fields correctly.", "يرجى تعبئة الحقول المطلوبة بشكل صحيح."], "Geçerli bir telefon numarası girin.": ["Enter a valid phone number.", "أدخل رقم هاتف صالحاً."], "Adresler yüklenemedi.": ["Couldn't load addresses.", "تعذّر تحميل العناوين."], "Adres kaydedilemedi.": ["Couldn't save the address.", "تعذّر حفظ العنوان."]
  });
  Object.assign(strings, {
    "Adresi silmek istiyor musun?": ["Would you like to delete this address?", "هل تريد حذف هذا العنوان؟"],
    "Bu adresi silmek istediğinden emin misin?": ["Are you sure you want to remove this address?", "هل أنت متأكد من رغبتك في حذف هذا العنوان؟"],
    "Vazgeç": ["Keep address", "الاحتفاظ بالعنوان"], "Evet, sil": ["Yes, delete", "نعم، احذف"],
    "Adres silindi.": ["Address deleted.", "تم حذف العنوان."],
    "Düzenle": ["Edit", "تعديل"], "Varsayılanı kaldır": ["Remove default", "إزالة الافتراضي"], "Varsayılan yap": ["Set as default", "تعيين كافتراضي"], "Varsayılan adresin güncellendi.": ["Default address updated.", "تم تحديث العنوان الافتراضي."], "Adres artık varsayılan değil.": ["This address is no longer the default.", "لم يعد هذا العنوان افتراضياً."], "Sil": ["Delete", "حذف"], "Adresi düzenle": ["Edit address", "تعديل العنوان"], "Düzenlemeyi iptal et": ["Cancel editing", "إلغاء التعديل"], "Ödemeye geç →": ["Continue to payment →", "تابع إلى الدفع →"], "Ödemeye geçmek için önce bir adres eklemelisin.": ["Add an address before continuing to payment.", "أضف عنواناً قبل متابعة الدفع."],
    "Sepete git →": ["Go to cart →", "اذهب إلى السلة →"], "yaş": ["years", "سنوات"], "adet": ["items", "قطع"], "Miktarı azalt": ["Decrease quantity", "تقليل الكمية"], "Miktarı artır": ["Increase quantity", "زيادة الكمية"],
    "Antrasit": ["Charcoal", "فحمي"], "Bej": ["Beige", "بيج"], "Beyaz": ["White", "أبيض"], "Bordo": ["Burgundy", "عنابي"], "Çok Renkli": ["Multicolor", "متعدد الألوان"], "Çok renkli": ["Multicolor", "متعدد الألوان"], "Ekru": ["Ecru", "عاجي"], "Gri": ["Gray", "رمادي"], "Haki": ["Khaki", "كاكي"], "Kırmızı": ["Red", "أحمر"], "Krem": ["Cream", "كريمي"], "Lacivert": ["Navy", "كحلي"], "Lila": ["Lilac", "ليلكي"], "Mavi": ["Blue", "أزرق"], "Pembe": ["Pink", "وردي"], "Pudra": ["Powder pink", "وردي فاتح"], "Sarı": ["Yellow", "أصفر"], "Siyah": ["Black", "أسود"], "Turuncu": ["Orange", "برتقالي"], "Yeşil": ["Green", "أخضر"],
    "Stokta yok": ["Out of stock", "غير متوفر"],
    "Stok bilgisi yüklenemedi": ["Stock information could not be loaded", "تعذر تحميل معلومات المخزون"],
    "Ülke": ["Country", "البلد"], "Şehir": ["City", "المدينة"], "Ülke seçin": ["Choose a country", "اختر بلداً"], "Şehir seçin": ["Choose a city", "اختر مدينة"], "Önce ülke seçin": ["Choose a country first", "اختر بلداً أولاً"],
    "Türkiye": ["Türkiye", "تركيا"], "Suriye": ["Syria", "سوريا"], "Almanya": ["Germany", "ألمانيا"],
    "Şam": ["Damascus", "دمشق"], "Halep": ["Aleppo", "حلب"], "Şam Kırsalı": ["Rif Dimashq", "ريف دمشق"], "Humus": ["Homs", "حمص"], "Hama": ["Hama", "حماة"], "Lazkiye": ["Latakia", "اللاذقية"], "İdlib": ["Idlib", "إدلب"], "Tartus": ["Tartus", "طرطوس"], "Rakka": ["Raqqa", "الرقة"], "Deyrizor": ["Deir ez-Zor", "دير الزور"], "Haseke": ["Al-Hasakah", "الحسكة"], "Dera": ["Daraa", "درعا"], "Süveyda": ["As-Suwayda", "السويداء"], "Kuneytra": ["Quneitra", "القنيطرة"],
    "Birleşik Krallık": ["United Kingdom", "المملكة المتحدة"],
    "Amerika Birleşik Devletleri": ["United States", "الولايات المتحدة"],
    "Hollanda": ["Netherlands", "هولندا"], "Fransa": ["France", "فرنسا"],
    "Kız Çocuk · Yeni Gelenler": ["Girls · New Arrivals", "البنات · وصل حديثاً"],
    "Erkek Çocuk · Yeni Gelenler": ["Boys · New Arrivals", "الأولاد · وصل حديثاً"],
    "Kız Çocuk · İndirim": ["Girls · Sale", "البنات · تخفيضات"],
    "Erkek Çocuk · İndirim": ["Boys · Sale", "الأولاد · تخفيضات"]
  });
  const originals = new WeakMap();
  const rendered = new WeakMap();
  const current = () => document.documentElement.lang?.slice(0, 2) || "tr";
  const translate = (value, lang = current()) => {
    const entry = strings[value.trim()];
    if (!entry || lang === "tr") return value;
    return entry[lang === "ar" ? 1 : 0] || value;
  };
  const applyNode = (node) => {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) return;
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    else if (rendered.has(node) && node.nodeValue !== rendered.get(node)) originals.set(node, node.nodeValue);
    const source = originals.get(node);
    const footerHomeLink = node.parentElement?.closest(".footer-links a[href*='#ana-sayfa']");
    const translated = current() === "ar" && footerHomeLink && source.trim() === "Ana Sayfa"
      ? "الصفحة الرئيسية"
      : translate(source);
    rendered.set(node, translated);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  };
  const applyTree = (root = document.body) => {
    if (root.nodeType === Node.TEXT_NODE) return applyNode(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) applyNode(walker.currentNode);
    const elements = root.nodeType === Node.ELEMENT_NODE
      ? [root, ...root.querySelectorAll("[placeholder], [aria-label], [title], [alt]")]
      : [];
    elements.forEach((element) => {
      for (const attribute of ["placeholder", "aria-label", "title", "alt"]) {
        if (!element.hasAttribute(attribute)) continue;
        const key = `data-i18n-${attribute}`;
        if (!element.hasAttribute(key)) element.setAttribute(key, element.getAttribute(attribute));
        const translatedAttribute = translate(element.getAttribute(key));
        if (element.getAttribute(attribute) !== translatedAttribute) {
          element.setAttribute(attribute, translatedAttribute);
        }
      }
    });
    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.i18nSource) title.dataset.i18nSource = title.textContent;
      const nextTitle = translate(title.dataset.i18nSource);
      if (title.textContent !== nextTitle) title.textContent = nextTitle;
    }
  };
  const selectedLanguage = () => {
    let saved = null;
    try { saved = localStorage.getItem("moda-language"); } catch { /* Storage can be disabled in private or file contexts. */ }
    if (Object.hasOwn(locales, saved)) return saved;
    const browser = navigator.language?.slice(0, 2).toLowerCase();
    return Object.hasOwn(locales, browser) ? browser : "tr";
  };
  let language = selectedLanguage();
  const update = (next, persist = true) => {
    language = Object.hasOwn(locales, next) ? next : "tr";
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body?.classList.toggle("is-rtl", language === "ar");
    if (persist) {
      try { localStorage.setItem("moda-language", language); } catch { /* Keep the language for this page session. */ }
    }
    const trigger = document.querySelector(".language-trigger");
    if (trigger) trigger.querySelector(".language-code").textContent = language.toUpperCase();
    document.querySelectorAll(".language-option").forEach((option) => {
      option.setAttribute("aria-selected", String(option.dataset.language === language));
      option.classList.toggle("is-selected", option.dataset.language === language);
    });
    applyTree();
    document.dispatchEvent(new CustomEvent("modachange", { detail: { language } }));
  };
  const addSelector = () => {
    const host = document.querySelector(".site-header, .auth-header, .admin-header");
    if (!host || host.querySelector(".language-picker")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "language-picker";
    const label = document.createElement("span");
    label.className = "visually-hidden";
    label.textContent = locales[language].title;
    label.dataset.i18nSource = "Dil seçin";
    const trigger = document.createElement("button");
    trigger.className = "language-trigger";
    trigger.type = "button";
    trigger.innerHTML = '<span class="language-icon" aria-hidden="true">🌐</span><span class="language-code"></span><span class="language-chevron" aria-hidden="true">⌄</span>';
    trigger.querySelector(".language-code").textContent = language.toUpperCase();
    trigger.setAttribute("aria-label", locales[language].title);
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", "language-options");
    const menu = document.createElement("div");
    menu.className = "language-menu";
    menu.id = "language-options";
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", locales[language].title);
    menu.hidden = true;
    for (const code of ["tr", "en", "ar"]) {
      const choice = document.createElement("button");
      choice.className = "language-option";
      choice.type = "button";
      choice.dataset.language = code;
      choice.setAttribute("role", "option");
      choice.setAttribute("aria-selected", String(code === language));
      choice.textContent = locales[language].options[code];
      choice.addEventListener("click", () => {
        update(code);
        menu.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      });
      menu.append(choice);
    }
    const toggleMenu = (open) => {
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", String(open));
      if (open) menu.querySelector(`[data-language="${language}"]`)?.focus();
    };
    trigger.addEventListener("click", () => toggleMenu(menu.hidden));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu(true);
      }
    });
    menu.addEventListener("keydown", (event) => {
      const choices = [...menu.querySelectorAll(".language-option")];
      const index = choices.indexOf(document.activeElement);
      if (event.key === "Escape") { event.preventDefault(); toggleMenu(false); trigger.focus(); }
      else if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Home" || event.key === "End") {
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? choices.length - 1 : (index + (event.key === "ArrowDown" ? 1 : choices.length - 1)) % choices.length;
        choices[next]?.focus();
      }
    });
    document.addEventListener("click", (event) => { if (!wrapper.contains(event.target)) toggleMenu(false); });
    wrapper.append(label, trigger, menu);
    host.append(wrapper);
  };
  window.MODA_I18N = { get language() { return language; }, t: translate, setLanguage: update, money(value) { return new Intl.NumberFormat(language === "ar" ? "ar-SA" : language === "en" ? "en-GB" : "tr-TR", { style: "currency", currency: "TRY" }).format(Number(value) || 0); } };
  update(language, false);
  addSelector();
  applyTree();
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") mutation.addedNodes.forEach((node) => applyTree(node));
      else if (mutation.type === "characterData") applyNode(mutation.target);
      else if (mutation.type === "attributes") applyTree(mutation.target);
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "aria-label", "title", "alt"] });
  document.addEventListener("modachange", () => {
    const label = document.querySelector(".language-picker .visually-hidden");
    if (label) label.textContent = locales[language].title;
    const trigger = document.querySelector(".language-trigger");
    if (trigger) trigger.setAttribute("aria-label", locales[language].title);
    const menu = document.querySelector(".language-menu");
    if (menu) menu.setAttribute("aria-label", locales[language].title);
    menu?.querySelectorAll(".language-option").forEach((option) => {
      option.textContent = locales[language].options[option.dataset.language];
    });
  });
})();
