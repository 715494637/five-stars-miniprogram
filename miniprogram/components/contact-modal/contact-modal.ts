/**
 * 联系方式底部动作面板组件
 * 使用方法：在页面中引入组件，通过 visible 控制显示/隐藏
 */

import { CONTACT_INFO } from '../../utils/constants';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否可见
    visible: {
      type: Boolean,
      value: false,
    },
    // 微信号（可选，默认使用常量）
    wechat: {
      type: String,
      value: CONTACT_INFO.wechat,
    },
    // 电话（可选，默认使用常量）
    phone: {
      type: String,
      value: CONTACT_INFO.phone,
    },
    // 工作时间（可选，默认使用常量）
    workHours: {
      type: String,
      value: CONTACT_INFO.workHours,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理遮罩点击（关闭）
     */
    handleMaskTap() {
      this.close();
    },

    /**
     * 阻止事件冒泡
     */
    stopPropagation() {
      // 阻止点击内容区域时关闭
    },

    /**
     * 处理关闭按钮点击
     */
    handleClose() {
      this.close();
    },

    /**
     * 关闭弹窗
     */
    close() {
      this.triggerEvent('close');
    },

    /**
     * 处理复制微信号
     */
    handleCopyWechat() {
      const wechat = this.data.wechat;
      wx.setClipboardData({
        data: wechat,
        success: () => {
          wx.showToast({
            title: '微信号已复制',
            icon: 'success',
            duration: 2000,
          });
        },
        fail: () => {
          wx.showToast({
            title: '复制失败',
            icon: 'none',
            duration: 2000,
          });
        },
      });
    },

    /**
     * 处理拨打电话
     */
    handleCallPhone() {
      const phone = this.data.phone;
      wx.makePhoneCall({
        phoneNumber: phone,
        success: () => {
          console.log('拨打电话成功');
        },
        fail: (err) => {
          console.error('拨打电话失败', err);
          wx.showToast({
            title: '拨打失败',
            icon: 'none',
            duration: 2000,
          });
        },
      });
    },
  },
});