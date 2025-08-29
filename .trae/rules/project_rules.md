1. 生成文章时放在docs文件夹下面，同步修改docs.html 在列表添加该文件的卡片，样式逻辑参考 m3u8.html 和 m3u8-to-mp4.html，同步修改 sitemap文件中 https://m3u8play502.github.io/docs.html 的lastmod，文章的发布时间为当日，格式为yyyy-MM-dd ，同样的sitemap文件中docs.html 的lastmod 也为当日，格式为yyyy-MM-dd
2. 每个页面生成时 需要添加 <div class="footer"> 标签  标签的内容 参考 index.html
3. 每个页面生成时 需要添加    <link rel="stylesheet" href="./css/styles.css">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3530207113372131"
    crossorigin="anonymous"></script>  以便google的代码能被加载，css样式能通用