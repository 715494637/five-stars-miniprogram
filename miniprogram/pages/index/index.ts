/**
 * 首页
 */

import { LOCATIONS, TEAM_MEMBERS } from '../../utils/constants';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    locations: LOCATIONS,
    services: [
      {
        id: 1,
        name: '权益保障体系',
        desc: '专业法务团队 + 专业经纪人团队。保障版权收益，规避合同陷阱，规划职业路径。',
      },
      {
        id: 2,
        name: '顶尖制作阵容',
        desc: '音乐总监 + 制作人 + 编曲师。量身定制属于你的爆款单曲。',
      },
      {
        id: 3,
        name: '技术与灵感支持',
        desc: '灵感导师 + 录音混音师 + 母带工程师。确保每一个音符都达到商业发行级标准。',
      },
    ],
    teamMembers: TEAM_MEMBERS,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('首页加载');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('首页显示');
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