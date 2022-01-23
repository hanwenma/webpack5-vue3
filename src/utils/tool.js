// 下载
export const createALink = (url, container) => {
    if(!url) return;
    let link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    link.target = '_blank';
    document.querySelector(container).appendChild(link);
  }