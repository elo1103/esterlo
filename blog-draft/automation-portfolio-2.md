## 中文版

**標題:** 將歷史估算轉化為組織知識

**副標題:** 將分散的估算資料轉化為可搜尋的企業智慧

---

### 挑戰

在客製化製造與專案型服務公司中，估價速度往往決定了接案速度。

估算完成得越快，企業就能越早評估專案可行性、預測成本結構，以及預期收益。

然而，估算資料往往分散在各處：Excel 檔案、電子郵件、共享資料夾，以及資深員工的記憶之中。

當新專案進來時，估算人員仍然重複相同的流程：

* 向資深主管請教
* 搜尋過往專案資料
* 從零開始重新計算

久而久之，估算能力逐漸集中在少數人身上。

當這些人離職時，知識也跟著離開組織。

### 洞察

在三間建築製造公司的工作經驗中，我注意到真正的問題並非缺乏資料，而是既有知識難以被有效取得。

過往專案其實已經包含估算所需的大部分資訊，包括工時、材料成本、實際執行結果，以及過去的經驗教訓。

然而，這些資訊無法被快速搜尋、比較，或在下一個專案到來時立即取得。

比起直接導入 AI 工具，我認為更重要的是先建立可信任的資料基礎。

估價是一個高度仰賴準確性的流程。如果底層資料缺乏一致性與可追溯性，AI 不會解決問題，而是放大既有問題。

### 解決方案

我建立了一套估算知識庫系統，讓估算人員能夠快速存取公司多年累積的實務經驗。

系統支援：

* 搜尋歷史估算紀錄，依專案類型、材料與規模快速篩選
* 並排比較過往專案的工時與成本結構，理解差異來源
* AI 輔助查詢，透過自然語言快速找到相關案例與參考依據
* 上傳新的估價資料，自動累積為未來可重複利用的組織知識

系統採用訊息平台作為使用者介面，使估算人員能夠直接在既有工作流程中存取資訊，而無需學習新的系統。

目前原型以 LINE 建置，以符合台灣市場常見的溝通習慣；系統架構則設計為可擴展至其他平台，例如 Microsoft Teams、Slack 或 Web Portal，以適應不同市場與組織需求。

技術架構：

* 訊息平台介面（目前原型為 LINE）
* C#
* SQL Database
* OpenAI / Claude（AI 查詢層）

### 概念展示

以下畫面展示系統的概念設計與使用流程，資料皆為示範用途，非真實公司資料。

為了呈現完整的使用者體驗，以下展示以 Web UI 呈現系統操作流程。實際原型目前以 LINE 建置，未來可依客戶需求部署於不同的訊息平台或 Web 應用程式。

![SearchHistoricalEstimates-zh](SearchHistoricalEstimates-zh.jpg)
![SimilarProjectComparison-zh](SimilarProjectComparison-zh.jpg)
![EstimateAssistant-zh](EstimateAssistant-zh.jpg)

### 目前進展

Prototype 已完成，目前正與建築製造業的潛在使用者討論實際應用場景與產品需求。

系統的長期目標並非取代估算人員，而是讓組織累積的知識能夠被更有效率地利用。

如果你的公司正在面臨估價效率、知識傳承或歷史資料管理相關的挑戰，歡迎與我交流討論。

### 核心理念

這套系統真正的價值不在於自動化估價，而在於建立組織記憶（Institutional Memory）。

當知識被儲存在可搜尋的系統中，而非少數人的記憶裡，新進人員能更快上手，估算能建立在可追溯的依據之上，而組織也能隨著每個完成的專案持續累積智慧。

每完成一個專案，企業不只是創造收入，也同時創造新的知識資產。

---

## 英文版

**Title:** Transforming Historical Estimates into Organizational Knowledge

**Subtitle:** Turning Scattered Estimating Data into Searchable Business Intelligence

---

### Challenge

In custom manufacturing and project-based businesses, estimating speed often influences how quickly opportunities can be evaluated and pursued.

The faster an estimate can be completed, the sooner a company can assess project feasibility, forecast costs, and understand potential profitability.

However, estimating knowledge is often scattered across multiple locations: Excel files, emails, shared folders, and the experience of senior employees.

When a new project arrives, estimators frequently repeat the same process:

* Ask experienced managers for guidance
* Search through past project files
* Rebuild estimates from scratch

Over time, estimating expertise becomes concentrated in a small number of individuals.

When those individuals leave, much of that knowledge leaves with them.

### Insight

After working in three architecture and manufacturing organizations, I noticed that the real problem was not a lack of data.

Most companies already possess the information needed to improve estimating: labor hours, material costs, project outcomes, and lessons learned from previous work.

The challenge is that this knowledge is difficult to access, compare, and reuse when it is needed.

Rather than starting with AI, I believed the first step was creating a reliable foundation for organizational knowledge.

Estimating is a process that depends on accuracy. If the underlying data is inconsistent or difficult to trace, AI does not solve the problem—it amplifies it.

### Solution

I developed an estimating knowledge system that allows estimators to quickly access and learn from historical project data.

The system supports:

* Searching historical estimates by project type, material, and project size
* Comparing labor hours and cost structures across similar projects
* Using AI-assisted queries to find relevant historical examples and supporting information
* Uploading new estimating data to continuously expand the organization's knowledge base

The system is designed around a messaging-based interface, allowing estimators to access information within their existing workflows without learning a new software platform.

The current prototype uses LINE, which is widely adopted in Taiwan. However, the architecture is designed to support additional platforms such as Microsoft Teams, Slack, or web-based applications depending on organizational needs.

Technology Stack:

* Messaging Interface (Current Prototype: LINE)
* C#
* SQL Database
* OpenAI / Claude (AI Query Layer)

### Concept Demonstration

The following screens demonstrate the product concept using sample data.

To better illustrate the user experience, the concept is presented as a web interface. The current prototype is built on LINE, with the architecture designed to support multiple front-end platforms.

![SearchHistoricalEstimates-en](SearchHistoricalEstimates-en.jpg)
![SimilarProjectComparison-en](SimilarProjectComparison-en.jpg)
![EstimateAssistant-en](EstimateAssistant-en.jpg)

### Current Status

The prototype has been completed and is currently being evaluated through discussions with potential users in the architecture and manufacturing industries.

The long-term goal is not to automate estimating decisions, but to make organizational knowledge easier to access, reuse, and continuously improve.

### Core Belief

The value of this system is not automated estimating.

Its value lies in building organizational memory.

When knowledge is stored in a searchable system rather than individual memory, new team members can ramp up more quickly, estimates can be based on historical evidence, and organizations can continuously learn from completed projects.

Every completed project generates more than revenue—it also creates a new knowledge asset for the organization.

---

頁面生成後，把這個專案加到 @automation.html 裡面的卡片 preview，排在 Decision-Centered-Capacity-Planning 的前面
確保用戶點入卡片 preview，頁面會跳轉到剛剛 created pages（based on it was English or Chinese version）
