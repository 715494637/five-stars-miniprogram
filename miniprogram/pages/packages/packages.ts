/**
 * 孵化档位页面
 */

import { PACKAGE_DATA } from '../../utils/constants';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 'tier2',
    currentPackage: PACKAGE_DATA.tier2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('孵化档位页面加载');
  },

  /**
   * 处理底部导航切换
   */
  handleTabChange(e: any) {
    const { pagePath } = e.detail;
    console.log('切换到页面', pagePath);
    // 页面跳转由组件内部处理
  },

  /**
   * 处理档位 Tab 切换
   */
  handlePackageTabChange(e: any) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
      currentPackage: PACKAGE_DATA[tab],
    });
  },

  /**
   * 处理档位选择
   */
  handlePackageSelect(e: any) {
    const { id, title, price } = e.detail;
    console.log('选择档位', id, title, price);
    // 可以在这里添加其他逻辑，比如跳转到联系页面
  },
});