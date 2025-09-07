// Apple風格網站互動功能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const blogPostLinks = document.querySelectorAll('.blog-post-link');

    // 手機版選單切換
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 防止背景滾動
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // 點擊選單項目時關閉手機版選單
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Blog 文章連結處理 - 確保正常跳轉
    blogPostLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 不阻止默認行為，讓連結正常跳轉
            // 關閉手機版選單
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Back to Blog 連結處理
    const backToBlogLinks = document.querySelectorAll('.back-to-blog');
    backToBlogLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 不阻止默認行為，讓連結正常跳轉
            // 關閉手機版選單
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Blog 文章卡片點擊處理 - 整個卡片都可以點擊跳轉
    const blogPostCards = document.querySelectorAll('.blog-post');
    blogPostCards.forEach(post => {
        post.addEventListener('click', function(e) {
            // 如果點擊的是連結或按鈕，不處理
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // 找到文章中的 Read More 連結
            const readMoreLink = this.querySelector('.blog-post-link');
            if (readMoreLink) {
                // 關閉手機版選單
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // 獲取連結地址並跳轉
                const href = readMoreLink.getAttribute('href');
                console.log('跳轉到:', href); // 調試用
                
                // 使用 window.location 跳轉
                if (href) {
                    window.location.href = href;
                }
            }
        });
        
        // 添加懸停效果提示
        post.style.cursor = 'pointer';
    });

    // 平滑滾動到對應區域
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // 只對同頁面的錨點連結進行平滑滾動（以 # 開頭且不包含文件路徑）
            if (targetId.startsWith('#') && !targetId.includes('.')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 60; // 考慮固定導航欄高度
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // 對於跨頁面連結（包含 .html 或 .htm），讓瀏覽器正常處理
        });
    });

    // 導航欄滾動效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
        }

        // 隱藏/顯示導航欄（向下滾動隱藏，向上滾動顯示）
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // 初始化 EmailJS
    (function() {
        emailjs.init("i8l8teYmnKVHOV7gd"); // 您的 EmailJS Public Key
    })();

    // 聯絡表單處理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // 簡單的表單驗證
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            // 顯示發送中狀態
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // 使用 EmailJS 發送郵件
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'esterlohongfen@gmail.com' // 您的郵箱
            };

            emailjs.send('service_cljtjhb', 'template_ung9m7l', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                })
                .finally(function() {
                    // 恢復按鈕狀態
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // 留言表單處理
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = commentForm.querySelector('.comment-submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // 顯示載入狀態
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            
            try {
                // 收集表單數據
                const formData = new FormData(commentForm);
                const templateParams = {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    message: formData.get('message'),
                    article_title: document.querySelector('.article-title')?.textContent || 'Blog Article',
                    article_url: window.location.href,
                    to_email: 'esterlohongfen@gmail.com'
                };
                
                // 發送留言
                await emailjs.send('service_cljtjhb', 'template_ung9m7l', templateParams);
                
                // 成功提示
                showNotification('Thank you for your comment! I\'ll get back to you soon.', 'success');
                
                // 清空表單
                commentForm.reset();
                
            } catch (error) {
                console.error('Error sending comment:', error);
                showNotification('Sorry, there was an error sending your comment. Please try again.', 'error');
            } finally {
                // 恢復按鈕狀態
                submitBtn.disabled = false;
                btnText.style.display = 'block';
                btnLoading.style.display = 'none';
            }
        });
    }

    // 按讚功能
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        const articleId = likeBtn.getAttribute('data-article');
        const likeCount = likeBtn.querySelector('.like-count');
        const likeIcon = likeBtn.querySelector('i');
        
        // 從 localStorage 載入按讚狀態
        const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '{}');
        const likeCounts = JSON.parse(localStorage.getItem('likeCounts') || '{}');
        
        // 初始化按讚狀態
        if (likedArticles[articleId]) {
            likeBtn.classList.add('liked');
            likeIcon.className = 'fas fa-heart';
        }
        
        // 初始化按讚數量
        likeCount.textContent = likeCounts[articleId] || 0;
        
        // 按讚按鈕點擊事件
        likeBtn.addEventListener('click', function() {
            if (likedArticles[articleId]) {
                // 取消按讚
                likedArticles[articleId] = false;
                likeCounts[articleId] = Math.max(0, (likeCounts[articleId] || 0) - 1);
                likeBtn.classList.remove('liked');
                likeIcon.className = 'far fa-heart';
            } else {
                // 按讚
                likedArticles[articleId] = true;
                likeCounts[articleId] = (likeCounts[articleId] || 0) + 1;
                likeBtn.classList.add('liked');
                likeIcon.className = 'fas fa-heart';
            }
            
            // 更新顯示
            likeCount.textContent = likeCounts[articleId];
            
            // 儲存到 localStorage
            localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
            localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
        });
    }

    // 作品集項目點擊效果
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        // 移除點擊訊息，讓自定義的 onclick 處理點擊事件
    });

    // 滾動時顯示動畫
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 觀察需要動畫的元素
    const animateElements = document.querySelectorAll('.skill-item, .portfolio-item, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 返回頂部按鈕
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    document.body.appendChild(backToTopButton);

    // 顯示/隱藏返回頂部按鈕
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // 返回頂部功能
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 滑鼠懸停效果
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#0056CC';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'var(--primary-color)';
    });

    // 通知系統
    window.showNotification = function(message, type = 'info') {
        // 移除現有通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // 設定樣式
        const colors = {
            success: '#34C759',
            error: '#FF3B30',
            info: '#007AFF',
            warning: '#FF9500'
        };

        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-family: var(--font-text);
            font-size: 17px;
            font-weight: 500;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // 顯示動畫
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 自動隱藏
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    };

    // 頁面載入完成後的初始化
    window.addEventListener('load', function() {
        // 添加載入動畫
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // 鍵盤導航支援
    document.addEventListener('keydown', function(e) {
        // ESC鍵關閉手機版選單
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 點擊外部區域關閉手機版選單
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 優化滾動性能
    let ticking = false;
    function updateOnScroll() {
        // 這裡可以添加其他滾動相關的功能
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // 預載入圖片（如果有）
    function preloadImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // 初始化預載入
    preloadImages();

    // Blog 分類篩選功能
    const categoryBtns = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');

    if (categoryBtns.length > 0 && blogPosts.length > 0) {
        // 檢查 URL 參數並自動選擇分類
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            // 找到對應的分類按鈕並點擊
            const targetBtn = document.querySelector(`[data-category="${categoryParam}"]`);
            if (targetBtn) {
                // 直接執行分類篩選邏輯，而不是點擊按鈕
                categoryBtns.forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');
                
                // 篩選文章
                blogPosts.forEach(post => {
                    const postCategories = post.getAttribute('data-category');
                    
                    if (categoryParam === 'all' || postCategories.includes(categoryParam)) {
                        post.style.display = 'block';
                        post.style.animation = 'fadeInUp 0.6s ease forwards';
                    } else {
                        post.style.display = 'none';
                    }
                });
            }
        }

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // 更新按鈕狀態
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // 篩選文章
                blogPosts.forEach(post => {
                    const postCategories = post.getAttribute('data-category');
                    
                    if (category === 'all' || postCategories.includes(category)) {
                        post.style.display = 'block';
                        post.style.animation = 'fadeInUp 0.6s ease forwards';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }

    // 郵箱複製功能
    const emailCopy = document.querySelector('.email-copy');
    if (emailCopy) {
        emailCopy.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            
            // 使用 Clipboard API 複製郵箱
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(function() {
                    showNotification('Email copied to clipboard!', 'success');
                }).catch(function(err) {
                    console.error('Failed to copy: ', err);
                    fallbackCopyTextToClipboard(email);
                });
            } else {
                // 降級方案：使用舊的複製方法
                fallbackCopyTextToClipboard(email);
            }
        });
    }

    // 降級複製方案
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // 避免滾動到底部
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showNotification('Email copied to clipboard!', 'success');
            } else {
                showNotification('Failed to copy email', 'error');
            }
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            showNotification('Failed to copy email', 'error');
        }
        
        document.body.removeChild(textArea);
    }
});