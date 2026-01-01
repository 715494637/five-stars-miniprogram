/**
 * 档位卡片组件
 * 使用方法：传入档位数据，点击选择时触发 select 事件
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 档位ID
    id: {
      type: String,
      value: '',
    },
    // 标题
    title: {
      type: String,
      value: '',
    },
    // 价格
    price: {
      type: String,
      value: '',
    },
    // 描述
    desc: {
      type: String,
      value: '',
    },
    // 功能列表
    features: {
      type: Array,
      value: [],
    },
    // 是否高亮
    highlight: {
      type: Boolean,
      value: false,
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
     * 处理卡片点击
     */
    handleCardTap() {
      this.handleSelect();
    },

    /**
     * 处理选择按钮点击
     */
    handleSelect() {
      // 触发选择事件，传递档位信息
      this.triggerEvent('select', {
        id: this.properties.id,
        title: this.properties.title,
        price: this.properties.price,
      });
    },
  },
});