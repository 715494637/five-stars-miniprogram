/**
 * 常量定义 - 五星国际唱片小程序
 */

// 颜色常量
export const COLORS = {
  gold: '#B49B67',          // 主金色
  goldLight: '#F59E0B',     // 亮金色
  bgWarm: '#FDFBF7',        // 暖色背景
  bgGray: '#F3F4F6',        // 灰色背景
  bgWhite: '#FFFFFF',       // 白色背景
  textPrimary: '#1F2937',   // 主文字
  textSecondary: '#6B7280', // 次要文字
  textLight: '#9CA3AF',     // 浅色文字
  borderColor: '#E5E7EB',   // 边框颜色
  green: '#10B981',         // 绿色
  blue: '#3B82F6',          // 蓝色
  purple: '#A855F7',        // 紫色
  red: '#EF4444',           // 红色
} as const;

// 公司门店数据
export const LOCATIONS = [
  {
    id: '1',
    type: 'HEADQUARTERS',
    name: '顺城店（总部）',
    desc: '核心资源调度中心，顶级录音棚配置。',
  },
  {
    id: '2',
    type: 'BRANCH',
    name: '大理店',
    desc: '文旅音乐结合前沿，独立音乐人孵化基地。',
  },
  {
    id: '3',
    type: 'BRANCH',
    name: '南亚店',
    desc: '主要覆盖年轻潮流商圈，挖掘潜力新星。',
  },
  {
    id: '4',
    type: 'BRANCH',
    name: '楚雄店',
    desc: '深耕民族特色音乐，拓展州地市场。',
  },
] as const;

// 服务团队数据
export const TEAM_MEMBERS = [
  {
    id: '1',
    icon: '⚖️',
    name: '专业法务',
    desc: '合约审核 / 版权保护',
  },
  {
    id: '2',
    icon: '🤝',
    name: '经纪人',
    desc: '通告对接 / 形象管理',
  },
  {
    id: '3',
    icon: '🎹',
    name: '制作/编曲',
    desc: '风格定位 / 全案制作',
  },
  {
    id: '4',
    icon: '🎧',
    name: '录音/后期',
    desc: '混音母带 / 工业标准',
  },
] as const;

// 孵化档位数据
export const PACKAGE_DATA = {
  tier1: {
    id: 'tier1',
    price: '¥40,000',
    title: '基础孵化版',
    desc: '适合初入行，需要基础作品积淀与版权保护的艺人。',
    features: [
      '3年全约经纪服务',
      '基础单曲制作 (1-2首/年)',
      '全网音乐平台发行',
      '法务版权保护',
      '基础形象指导',
    ],
    highlight: false,
  },
  tier2: {
    id: 'tier2',
    price: '¥60,000',
    title: '进阶成长版',
    desc: '适合有一定基础，希望快速积累作品并尝试商演变现的艺人。',
    features: [
      '3年全约经纪服务',
      '进阶单曲制作 (3-4首/年)',
      '全网发行 + 重点歌单推荐',
      '专属经纪人对接商演',
      'MV拍摄支持 (1支)',
      '灵感导师1对1辅导',
    ],
    highlight: true,
  },
  tier3: {
    id: 'tier3',
    price: '¥80,000',
    title: '专业全案版',
    desc: '全资源倾斜，打造具备市场竞争力的成熟艺人IP。',
    features: [
      '3年全约经纪服务',
      '专辑级制作规划 (5首+/年)',
      '全平台S级资源推广',
      '音乐总监亲自监制',
      '优先安排大型音乐节/Livehouse',
      '直播带货团队全案运营',
    ],
    highlight: false,
  },
  tier4: {
    id: 'tier4',
    price: '价格面议',
    title: '私人订制版',
    desc: '针对特殊风格或高净值艺人的顶级资源配置。',
    features: [
      '不设上限的资源投入',
      '国内一线制作人合作机会',
      '全国巡演策划',
      '跨界品牌代言运作',
      '个人厂牌孵化权',
      '公司合伙人级待遇',
    ],
    highlight: false,
  },
} as const;

// 收入构成数据
export const REVENUE_DATA = {
  labels: ['版税分成', '商业演出', '直播打赏', '广告推广', '其他'],
  data: [35, 25, 30, 8, 2],
  colors: [COLORS.goldLight, COLORS.purple, COLORS.blue, COLORS.green, COLORS.textLight],
} as const;

// 成长路径数据
export const GROWTH_DATA = {
  labels: ['签约起步', '第6个月', '第12个月', '第18个月', '第24个月', '第30个月', '第36个月'],
  data: [10, 25, 45, 80, 150, 280, 450],
} as const;

// 联系方式
export const CONTACT_INFO = {
  phone: '15559910115',
  wechat: 'FiveStars_Music',
  address: '云南省昆明市顺城店',
  workHours: '9:00 - 21:00',
} as const;

// 页面标题
export const PAGE_TITLES = {
  index: '首页',
  packages: '孵化档位',
  monetization: '商业变现',
  students: '学员',
  contact: '联系我们',
} as const;