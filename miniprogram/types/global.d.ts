/**
 * 全局类型声明
 */

export interface IAppOption {
  globalData?: {
    [key: string]: any;
  };
  onLaunch?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  onError?: (error: string) => void;
}

export interface IPageOption {
  data?: {
    [key: string]: any;
  };
  onLoad?: (options?: any) => void;
  onReady?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  onUnload?: () => void;
  onPullDownRefresh?: () => void;
  onReachBottom?: () => void;
  onShareAppMessage?: () => any;
  onShareTimeline?: () => any;
  onAddToFavorites?: () => void;
  onPageScroll?: (options: any) => void;
  onResize?: (options: any) => void;
  onTabItemTap?: (options: any) => void;
}