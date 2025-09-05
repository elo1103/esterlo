# 個人作品集網站

這是一個現代化、響應式的個人作品集網站，適合設計師、開發者或創意專業人士使用。網站採用純HTML、CSS和JavaScript開發，易於自訂和擴展。

## 🌟 特色功能

- **響應式設計** - 完美支援桌面、平板和手機設備
- **現代化UI** - 簡潔美觀的設計風格
- **平滑動畫** - 流暢的滾動和互動效果
- **作品集展示** - 可篩選的作品展示區域
- **聯絡表單** - 內建聯絡表單功能
- **SEO友好** - 優化的HTML結構
- **易於自訂** - 清晰的代碼結構，方便修改

## 📁 文件結構

```
WEB/
├── index.html          # 主頁面
├── styles.css          # 樣式文件
├── script.js           # JavaScript功能
└── README.md           # 說明文件
```

## 🚀 快速開始

1. **下載文件**
   - 將所有文件下載到同一個資料夾中

2. **開啟網站**
   - 雙擊 `index.html` 文件
   - 或使用瀏覽器開啟 `index.html`

3. **自訂內容**
   - 編輯 `index.html` 修改文字內容
   - 編輯 `styles.css` 調整顏色和樣式
   - 編輯 `script.js` 添加新功能

## 🎨 自訂指南

### 修改個人資訊

在 `index.html` 中找到以下部分並替換：

```html
<!-- 替換你的名字 -->
<h1 class="hero-title">你好，我是 <span class="highlight">你的名字</span></h1>

<!-- 替換職業描述 -->
<p class="hero-subtitle">創意設計師 / 網頁開發者 / 品牌顧問</p>

<!-- 替換聯絡資訊 -->
<span>your.email@example.com</span>
<span>+886 912 345 678</span>
<span>台北市，台灣</span>
```

### 修改作品集

在 `index.html` 中找到 `.portfolio-grid` 部分，複製並修改作品項目：

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="portfolio-content">
        <h3>你的作品標題</h3>
        <p>作品描述</p>
        <div class="portfolio-tags">
            <span class="tag">標籤1</span>
            <span class="tag">標籤2</span>
        </div>
    </div>
</div>
```

### 修改顏色主題

在 `styles.css` 中修改CSS變數：

```css
/* 主要顏色 */
--primary-color: #3498db;
--secondary-color: #f39c12;
--accent-color: #2c3e50;
```

### 添加你的照片

1. 將照片命名為 `profile.jpg` 並放在同一資料夾
2. 在 `index.html` 中替換：

```html
<div class="profile-image">
    <img src="profile.jpg" alt="你的照片" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## 📱 響應式設計

網站已針對以下設備優化：
- **桌面** (1200px+)
- **平板** (768px - 1199px)
- **手機** (320px - 767px)

## 🔧 技術規格

- **HTML5** - 語義化標記
- **CSS3** - Flexbox, Grid, 動畫
- **JavaScript ES6+** - 現代JavaScript功能
- **Font Awesome** - 圖標庫
- **Google Fonts** - 中文字體

## 🌐 部署到網路

### 方法1：GitHub Pages（免費）

1. 在GitHub建立新儲存庫
2. 上傳所有文件
3. 在設定中啟用GitHub Pages
4. 你的網站將在 `https://你的用戶名.github.io/儲存庫名稱` 上線

### 方法2：Netlify（免費）

1. 前往 [netlify.com](https://netlify.com)
2. 拖拽整個資料夾到部署區域
3. 獲得免費的網址

### 方法3：Vercel（免費）

1. 前往 [vercel.com](https://vercel.com)
2. 連接GitHub儲存庫
3. 自動部署

## 📈 SEO優化建議

1. **修改頁面標題和描述**
```html
<title>你的名字 - 個人作品集</title>
<meta name="description" content="你的職業和專長描述">
```

2. **添加Open Graph標籤**
```html
<meta property="og:title" content="你的名字 - 個人作品集">
<meta property="og:description" content="你的職業和專長描述">
<meta property="og:image" content="你的照片網址">
```

3. **添加Google Analytics**
在 `</head>` 前添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=你的追蹤ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '你的追蹤ID');
</script>
```

## 🚀 未來擴展建議

當你準備將個人網站轉為公司網站時，可以考慮：

1. **添加更多頁面**
   - 服務頁面
   - 團隊介紹
   - 案例研究
   - 部落格

2. **整合後端功能**
   - 聯絡表單處理
   - 內容管理系統
   - 用戶管理

3. **添加新功能**
   - 多語言支援
   - 線上預約系統
   - 客戶登入區域

## 📞 支援

如果你在使用過程中遇到問題，可以：

1. 檢查瀏覽器控制台是否有錯誤訊息
2. 確認所有文件都在同一資料夾中
3. 嘗試使用不同的瀏覽器

## 📄 授權

此專案採用 MIT 授權，你可以自由使用、修改和分發。

---

**祝你使用愉快！** 🎉

如果這個網站對你有幫助，歡迎分享給其他需要的朋友。
