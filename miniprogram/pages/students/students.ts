/**
 * 学员页面（占位）
 */

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('学员页面加载');
  },

  /**
   * 处理底部导航切换
   */
  handleTabChange(e: any) {
    const { pagePath } = e.detail;
    console.log('切换到页面', pagePath);
    // 页面跳转由组件内部处理
  },
});