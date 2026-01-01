/**
 * 商业变现页面
 */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    growthData: [
      { label: '签约', value: '10', height: 10 },
      { label: '6月', value: '25', height: 25 },
      { label: '12月', value: '45', height: 45 },
      { label: '18月', value: '80', height: 80 },
      { label: '24月', value: '150', height: 100 },
      { label: '30月', value: '280', height: 100 },
      { label: '36月', value: '450', height: 100 },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('商业变现页面加载');
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