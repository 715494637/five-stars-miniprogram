/**
 * 自定义优雅底部导航组件
 * 设计理念：纯文字 + 金色渐变滑动指示器
 * 适用场景：高端品牌，简洁大气
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前激活的页面路径
    activePage: {
      type: String,
      value: 'pages/index/index',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        active: false,
      },
      {
        pagePath: 'pages/packages/packages',
        text: '档位',
        active: false,
      },
      {
        pagePath: 'pages/monetization/monetization',
        text: '变现',
        active: false,
      },
      {
        pagePath: 'pages/students/students',
        text: '学员',
        active: false,
      },
      {
        pagePath: 'pages/contact/contact',
        text: '联系',
        active: false,
      },
    ],
    indicatorLeft: 0,
    indicatorWidth: 20,
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached() {
      this.updateActiveTab(this.properties.activePage);
    },
  },

  observers: {
    'activePage': function(activePage) {
      this.updateActiveTab(activePage);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新激活的标签
     */
    updateActiveTab(pagePath: string) {
      const tabList = this.data.tabList.map((item, index) => {
        return {
          ...item,
          active: item.pagePath === pagePath,
        };
      });

      const activeIndex = tabList.findIndex((item) => item.active);

      this.setData({
        tabList,
        indicatorLeft: (activeIndex * 20) - 10,
      });
    },

    /**
     * 处理标签点击
     */
    handleTabTap(e: any) {
      const dataset = (e.currentTarget && e.currentTarget.dataset) || {};
      // 注意：微信小程序会自动将 data-* 属性名转换为小写
      const pagePath = dataset.pagepath;
      const index = dataset.index;

      // 如果 pagePath 不存在，直接返回
      if (!pagePath) {
        return;
      }

      // 如果点击的是当前页面，不做处理
      if (pagePath === this.properties.activePage) {
        return;
      }

      // 更新激活状态
      this.updateActiveTab(pagePath);

      // 触发切换事件
      this.triggerEvent('change', {
        pagePath,
        index,
      });

      // 跳转页面 - 使用 reLaunch 清除页面栈，避免堆叠
      wx.reLaunch({
        url: `/${pagePath}`,
      });
    },
  },
});