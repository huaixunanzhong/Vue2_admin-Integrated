const title = process.env.VUE_APP_BASE_NAME || 'Vue管理系统全家桶';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}-${title}`;
  }
  return title;
}
