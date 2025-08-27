document.addEventListener('DOMContentLoaded', function() {
    // 检查是否存在footerLinks元素
    const footerLinks = document.getElementById('footerLinks');
    if (footerLinks) {
        // 检查footerLinks是否已经有内容，避免重复添加
        if (footerLinks.innerHTML.trim() === '') {
            // 加载manifest.json获取友链数据
            fetch('../manifest.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.friendLinks && data.friendLinks.length > 0) {
                        // 创建友链容器
                        const linksContainer = document.createElement('div');
                        linksContainer.className = 'friend-links';
                        
                        // 创建标题
                        const title = document.createElement('h3');
                        title.textContent = '友情链接';
                        linksContainer.appendChild(title);
                        
                        // 创建友链列表
                        const linksList = document.createElement('div');
                        linksList.className = 'links-list';
                        
                        // 添加每个友链
                        data.friendLinks.forEach(link => {
                            const linkItem = document.createElement('a');
                            linkItem.href = link.url;
                            linkItem.target = '_blank';
                            linkItem.rel = 'noopener noreferrer';
                            linkItem.textContent = link.name;
                            linkItem.className = 'friend-link';
                            linksList.appendChild(linkItem);
                        });
                        
                        linksContainer.appendChild(linksList);
                        footerLinks.appendChild(linksContainer);
                    }
                })
                .catch(error => {
                    console.error('Error loading friend links:', error);
                });
        }
    }
});