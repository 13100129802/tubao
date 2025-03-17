declare module tubao.base {
    /**
     * 面板基础类，提供面板窗口实现逻辑
     */
    class panel extends eui.Component {
        /**面板存放的层 */
        uiLayer: tubao.layer.layer | egret.DisplayObjectContainer;
        /**面板已经打开了 */
        onOpen: boolean;
        /**是否打开过面板 */
        private openPanelState;
        /**
         * 面板基础类，提供面板窗口的实现逻辑，其中包括面板窗宽一直与窗口大小保持一致，接收层存放位置和添加关闭面板的功能
         * @param {tubao.baseScene.BaseEuiLayer} layer 层位置指定，面板显示对象的添加存在显示的位置
         */
        constructor(layer: tubao.layer.layer | egret.DisplayObjectContainer);
        /**
         * 初始化面板
         */
        initPanel(): void;
        /**
         * 添加面板到显示列表
         */
        open(...param: any[]): void;
        /**
         * 关闭面板
         */
        close(...param: any[]): void;
    }
}
/**
 * 兔宝玩家编辑器
 */
declare namespace tubao.editor {
    /**
     * 兔宝玩家显示对象编辑组件基础底层
     */
    class tubaoDisplayObjectEditorBase extends tubao.base.panel {
        /**内容组 */
        gro: eui.Group;
        /**面板 */
        private panel;
        /**关闭按钮 */
        private closeBtn;
        /**坐标x文本 */
        private zuoBiaoX;
        /**坐标y文本 */
        private zuoBiaoY;
        /**透明度滑动条 */
        private alphaHslider;
        /**旋转滑动条 */
        private rotationHslider;
        /**缩放滑动条 */
        private scaleHslider;
        /**显示状态单选 */
        private visibleSelect;
        /**锚点x */
        private maoDianX;
        /**锚点y */
        private maoDianY;
        /**要被操作的显示对象 */
        display: egret.DisplayObject;
        /**锚点定位点 */
        private maodian;
        /**
         * 兔宝玩家显示对象编辑组件
         */
        constructor();
        /**
         * 解析显示对象
         */
        analyDisplay(): void;
        /**
         * 还原函数
         */
        huanYuanFun(): void;
        /**
         * 显示对象移动了
         */
        private maodianMove(e);
        /**
         * 显示对象移动了
         */
        private displayMove(e);
        private visibleSelectClick();
        /**
         * 监听滑动条状态改变透明度滑动条
         */
        private alphaHsliderChange(e);
        /**
         * 监听滑动条状态改变旋转滑动条
         */
        private rotationHsliderChange(e);
        /**
         * 监听滑动条状态改变缩放滑动条
         */
        private scaleHsliderChange(e);
        /**
         * 锚点x失去焦点的时候
         */
        private maoDianXfocusOut();
        /**
         * 锚点y失去焦点的时候
         */
        private maoDianYfocusOut();
        /**
         * 坐标x失去焦点的时候
         */
        private zuoBiaoXfocusOut();
        /**
         * 坐标y失去焦点的时候
         */
        private zuoBiaoYfocusOut();
        /**
         * 验证显示对象
         * @return {boolean} 没问题true，有问题false
         */
        verDisplay(): boolean;
    }
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 15-1-14.
     * Sound基类
     */
    class BaseSound {
        _cache: any;
        _loadingCache: Array<string>;
        /**
         * 构造函数
         */
        constructor();
        /**
         * 处理音乐文件的清理
         */
        private dealSoundTimer();
        /**
         * 获取Sound
         * @param key
         * @returns {egret.Sound}
         */
        getSound(key: string): egret.Sound;
        /**
         * 资源加载完成
         * @param event
         */
        private onResourceLoadComplete(data, key);
        /**
         * 资源加载完成后处理播放，子类重写
         * @param key
         */
        loadedPlay(key: string): void;
        /**
         * 检测一个文件是否要清除，子类重写
         * @param key
         * @returns {boolean}
         */
        checkCanClear(key: string): boolean;
    }
}
declare namespace tubao.layer {
    /**
     * EUI层
     */
    class layer extends eui.UILayer {
        constructor();
    }
}
declare namespace tubao.fields {
    /**
     * 兔宝富文本包装器
     */
    class richTextFiledBase extends egret.DisplayObjectContainer {
        /**文本 */
        _textfiled: egret.TextField;
        /**
         * 兔宝富文本基础
         * @param {EmojiPlugin} emogi 文本管理插件
         */
        constructor();
        readonly text: string;
        twidth: number;
        theight: number;
        readonly textWidth: number;
        readonly textHeight: number;
        readonly textFlow: egret.ITextElement[];
        textAlign: string;
        size: number;
        textColor: number;
        stroke: number;
        strokeColor: number;
        lineSpacing: number;
        bold: boolean;
        italic: boolean;
        fontFamily: string;
    }
}
declare namespace tubao.paint {
    /**
     * 绘画工具箱
     */
    class paint extends eui.Component {
        /**容器1：存放笔刷绘画内容显示列表 */
        vessel1: eui.Group;
        /**容器2：存放位图1，2，3内容结果 */
        vessel2: eui.Group;
        /**位图1：塌缩容器1绘画内容 */
        bitmap1: eui.Image;
        /**位图2：指定遮罩位图数据 */
        bitmap2: eui.Image;
        /**位图3：全部绘画结果叠加 */
        bitmap3: eui.Image;
        vessel0: eui.Group;
        /**是否按下 */
        private isDown;
        /**老的点位置 */
        private oldX;
        /**老的点位置 */
        private oldY;
        /**模糊滤镜 */
        private blurFliter;
        /**画笔基础配置 */
        arg: argBaseBuild;
        /**
         * 绘画
         * @param {egret.Bitmap} bmp 要写到像素的位图
         * @param
         */
        constructor();
        /**
         * 按下
         */
        onTouchBegin(e: egret.TouchEvent): void;
        /**
         * 按下
         */
        beginTouch(stageX: number, stageY: number): void;
        /**
         * 抬起
         */
        private onTouchEend(e);
        /**
         * 抬起画笔
         */
        touchEnd(): void;
        /**
         * 移动
         */
        onTouchMove(e: egret.TouchEvent): void;
        /**
         * 移动
         */
        moveTouch(stageX: number, stageY: number): void;
        /**
         * 移动画笔
         * @param {number} x 位置x
         * @param {number} y 位置y
         * @param {any} type 构建的画笔类型
         */
        move(x: number, y: number, type: brush): any;
        /**
         * 删除清理绘画的点
         * @param {egret.DisplayObjectContainer} display 显示列表容器
         * @return {gret.DisplayObjectContainer} 返回容器
         */
        clearmc(display: egret.DisplayObjectContainer): egret.DisplayObjectContainer;
        /**
         * 制作获得纹理
         * @param {number} bitmapX 位图的位置x
         * @param {number} bitmapY 位图的位置y
         * @param {number} width 位图的宽度
         * @param {number} height 位图的高度
         * @param {egret.DisplayObject} display 截图的显示对象
         * @return {egret.RenderTexture} 返回显示纹理
         */
        getTexture(bitmapX: number, bitmapY: number, width: number, height: number, display: egret.DisplayObject): egret.RenderTexture;
    }
}
declare namespace tubao.DB {
    /**
     * 龙骨功能基类-提供底层支持功能
     * 提供骨架，骨节，插槽的显示对象获取，活动状态的设置，操作对象的获取
     */
    class DBbasice extends eui.Component {
        /**创建一个龙骨工厂 */
        private dbFactory;
        /**龙骨数据解析，骨架数据 */
        private dbBonesData;
        /**解析图集数据，图片纹理切图数据，图片纹理像素数据 */
        private dbtexureData;
        /**龙骨项目所有骨架 */
        skeleton: {};
        /**资源名字 */
        dbName: string;
        showSkeleton: any;
        activitySkeleton: any;
        /**初始化完成 */
        initYes: boolean;
        /**龙骨数据列表 */
        dbDataList: {};
        /**
         * 初始化龙骨工厂
         * @param {string} name 龙骨项目名字
         * @param {boolean} lodinYes 是否加载
         */
        constructor(name: string, lodinYes?: boolean);
        /**
         * 替换当前项目插槽内容用外部项目的指定插槽
         * @param {string} dragonBonesName 外部项目名字，DragonBonesData 实例的缓存名称
         * @param {string} armatureName 骨架数据名称。
         * @param {string} slotName 插槽数据名称。
         * @param {string} displayName 显示对象数据名称。
         * @param {dragonBones.Slot} slot 指定的插槽
         * @param {number} displayIndex 被替换的显示对象数据的索引。 （如果未设置，则替换当前的显示对象数据）
         */
        thisDBSlotReplaceOutsideDBSlot(dragonBonesName: string, armatureName: string, slotName: string, displayName: string, slot: dragonBones.Slot, displayIndex?: number): void;
        /**
         * 资源加载
         * @param {string} name 龙骨项目名字
         */
        lodin(name: string): void;
        _flip: boolean;
        /**
         * 设置当前骨架是否翻转
         */
        flipSkeleton(skeletonName: string, type: boolean): void;
        /**
         * 全部骨架翻转设置
         * @param {boolean} type 是否翻转
         */
        /**
         * 全部骨架翻转设置
         * @param {boolean} type 是否翻转
         */
        flip: boolean;
        /**
         * 设置当前骨骼的动画播放速度
         * @param skeletonName 骨架名字
         * @param speed 速度
         */
        speedSkeleton(skeletonName: string, speed: number): void;
        /**
         * 设置全部骨骼播放速度
         * @param speed 速度
         */
        speed: number;
        _scale: number;
        /**
         * 全体骨架缩放
         * @param num 缩放倍数
         */
        /**
         * 全体骨架缩放
         * @param num 缩放倍数
         */
        scale: number;
        /**
         * 根据名字进行骨架缩放
         * @param skeletonName 骨架名字
         */
        scaleSetSkeletonName(skeletonName: string, num: number): void;
        /**
         * 骨架显示隐藏
         * @param skeletonName 骨架名字
         * @param type 显示隐藏
         */
        skeletonVisible(skeletonName: string, type: boolean): void;
        /**
         * 根据名字获取到骨架显示对象
         * @param skeletonName 骨架名字
         */
        displaySkeleton(skeletonName: string): egret.DisplayObject;
        /**
         * 根据名字获取到插槽显示对象
         * @param skeletonName 骨架名字
         * @param slotName 插槽名字
         */
        displaySlot(skeletonName: string, slotName: string): egret.Bitmap;
        /**
         * 根据名字获取到骨节坐标系偏移变换
         * @param skeletonName 骨架名字
         * @param slotName 骨节名字
         */
        displayBone(skeletonName: string, boneName: string): dragonBones.Transform;
        /**
         * 根据名字获取插槽对象
         * @param skeletonName 骨架名字
         * @param slotName 插槽名字
         */
        nameGetSlot(skeletonName: string, slotName: string): dragonBones.Slot;
        /**
         * 根据名字获取骨节对象
         * @param skeletonName 骨架名字
         * @param boneName 骨骼节点名字
         */
        nameGetBone(skeletonName: string, boneName: string): dragonBones.Bone;
        /**
         * 根据名字获取骨架对象
         * @param skeletonName 骨架名字
         */
        nameGetSkeleton(skeletonName: string): dragonBones.Armature;
    }
}
declare module tubao.utils {
    /**
     * 让显示对象可以拖动
     * @param {egret.DisplayObject} display 显示对象
     * @param {egret.DisplayObject} arr 显示对象连带扩展
     */
    function dragDisplauy(display: egret.DisplayObject, ...arr: any[]): void;
    /**
     * 继承后显示对象可拖动
     */
    class drag extends eui.Component {
        private _touchStatus;
        private _distance;
        constructor();
        /**
         * 卸载时清除
         */
        private removed();
        /**
         * 按下手指
         */
        private mouseDown(evt);
        /**
         * 滑动屏幕
         */
        private mouseMove(evt);
        /**
         * 抬起手指
         */
        private mouseUp(evt);
    }
}
declare module tubao.Appli {
    /**条状提示模块 */
    var hint: tubao.base.hint;
}
/**
 * 闪光效果工具模块
 */
declare namespace tubao.Effect.flash {
    /**
     * 开始发光闪烁
     * @param obj
     */
    function startFlash(obj: egret.DisplayObject, flashColor: number, flashTime: number): void;
    /**
     * 停止发光闪烁
     * @param obj
     */
    function stopFlash(obj: egret.DisplayObject): void;
    /**
     * 发光闪烁1次
     * @param obj
     */
    function startFlashOne(obj: egret.DisplayObject, flashColor: number, flashTime: number): void;
}
declare namespace tubao.model {
    /**
     * 缩放模式设置
     * @param {number} val 值
      */
    function suoFang(val: number): void;
    /**
     * 旋转模式设置
     * @param {number} val 值
      */
    function xuanZuan(val: number): void;
}
declare module tubao {
    /**
     * 带红点的按钮
     */
    class RedPioxyImg extends eui.Button {
        Red: eui.Image;
        glowFilter: egret.GlowFilter;
        constructor();
        /**
         * 红点开关
         */
        onOffRed(type: boolean): void;
    }
}
declare namespace tubao {
    /**
     * 资源加载与管理
     */
    class res {
        /**配置 */
        private static _configs;
        /**配置完成时运行的函数 */
        private static _onConfigComplete;
        /**关于配置完成目标 */
        private static _onConfigCompleteTarget;
        /**很多组 */
        private static _groups;
        /**组的索引 */
        private static _groupIndex;
        /**项目加载错误时候运行的函数 */
        private static _itemLoadErrorFunction;
        /**
         * 构造函数
         */
        static init(): void;
        /**
         * 添加一个配置文件
         * @param {string} jsonPath resource.json路径
         * @param {string} filePath 访问资源路径
         */
        static addConfig(jsonPath: string, filePath: string): void;
        /**
         * 开始加载配置文件
         * @param {Function} onConfigComplete 加载完成执行函数
         * @param {any} onConfigCompleteTarget 加载完成执行函数作用域
         */
        static loadConfig(onConfigComplete: Function, onConfigCompleteTarget: any): void;
        /**
         * 加载
         */
        private static loadNextConfig();
        /**
         * 加载完成
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        private static onConfigCompleteHandle(event);
        /**
         * 加载资源组
         * @param {string} groupName 资源组名称
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数作用域
         */
        static loadGroup(groupName: string, onResourceLoadComplete: Function, onResourceLoadProgress: Function, onResourceLoadTarget: any): void;
        /**
         * 同时加载多个组
         * @param {string} groupName 自定义的组名称
         * @param {any[]} subGroups 所包含的组名称或者key名称数组
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数所属对象
         */
        static loadGroups(groupName: string, subGroups: any[], onResourceLoadComplete: Function, onResourceLoadProgress: Function, onResourceLoadTarget: any): void;
        /**
         * 静默加载
         * @param {string} groupName 资源组名称
         * @param {any[]} groupName 所包含的组名称或者key名称数组,默认null
         */
        static pilfererLoadGroup(groupName: string, subGroups?: any[]): void;
        /**
         * 资源组加载完成
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        private static onResourceLoadComplete(event);
        /**
         * 资源组加载进度
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        private static onResourceLoadProgress(event);
        /**
         * 资源组加载失败
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        private static onResourceLoadError(event);
        /**
         * 资源加载失败
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        private static onResourceItemLoadError(event);
        /**
         * 混合加载资源组
         * @param {string[]} resources 资源数组
         * @param {string[]} groups 资源组数组
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数所属对象
         */
        static loadResource(resources?: string[], groups?: string[], onResourceLoadComplete?: Function, onResourceLoadProgress?: Function, onResourceLoadTarget?: any): void;
        /**
         * 动态创建加载组
         * @param {string} groupName 组名字
         * @param {string[]} resKeys 组加载内容列表
         */
        static createGroup(groupName: string, resKeys: string[]): void;
        /**
         * 动态创建Resource资源配置信息
         * @param {string} resKey 资源名字
         * @param {string} resType 资源类型
         * @param {string} resUrl 资源地址
         */
        static createResource(resKey: string, resType: string, resUrl: string): void;
        /**
         * 获取文件的真实路径
         * @param {string} key 资源路径也可能是资源名字
         */
        static getFileRealPath(key: string): string;
    }
}
/**
 * 敏感词过滤检测
 */
declare namespace tubao.sensitive {
    /**
     * 敏感词过滤检测工具
     */
    class sensitive {
        /**字系节点地图文档 */
        private charMapDoc;
        /**检测到了的替换值 */
        private replace;
        /**
         * 敏感词过滤检测工具
         * @param {string} replace 检测到替换单个字的内容
         * @param {any} thisObject 检测到回调处理作用域
         * @param {Function} dispose 检测到回调处理函数
         */
        constructor(replace: string);
        /**
        * 敏感词地图字系节点构造
        * @param {string[]} data 敏感词数组
        * @return {Map<any, any>} 返回地图
        */
        private buildMap(data);
        /**
         * 从单个字开始检查是否触发敏感词
         * @param {string} txt 整体文本长度
         * @param {number} index 当前索引
         * @return {charPlayVerResultInter} 检查结果
         */
        private charPlayVer(txt, index);
        /**
         * 判断文本中是否存在敏感词英语
         * @param {string} txt 检测的文本
         * @param {string} userId 用户id
         * @return {string} 处理结果
         */
        disposeEn(txtLab: eui.Label): boolean;
        /**
         * 判断文本中是否存在敏感词
         * @param {string} txt 检测的文本
         * @param {string} userId 用户id
         * @return {string} 处理结果
         */
        dispose(txtLab: eui.Label): boolean;
        /**
         * 文本数据标记
         */
        private labJson;
        /**
         * 添加事件监听字符集合
         */
        addEventDoNoChar(lab: eui.Label): void;
    }
}
declare module tubao {
    /**
     * 系统时间核心类，手动每秒时间添加一秒
     */
    class sysTimer {
        time: Date;
        tim: egret.Timer;
        constructor();
        SetTimer(time: any): void;
        /**
         * 定时器调用添加秒
         */
        timerAddS(): void;
        /**
         * 钟表工具传入一个带有text属性的对象后每秒都会给这个对象的text属性更新数据。
         * @param {string} qian 前置时间控制符
         * @param {any} clock 钟表对象这里传入一个带有text属性的对象
         * @param {string} hou 后置时间控制符
         */
        clock(qian: string, clock: any, hou: string): void;
    }
}
declare namespace tubao {
    /**
     * 兔宝单项选择器
     */
    class toggleTubao extends eui.ToggleSwitch {
        /**
         * 兔宝单项选择器
         */
        constructor();
        /**
         * 修改了选项
         */
        private changeHandler(evt);
    }
}
declare namespace tubao {
    /**舞台对象 */
    var stage: egret.Stage;
    /**视窗宽度 */
    var width: number;
    /**视窗高度 */
    var height: number;
    /**当前运行时间毫秒 */
    var runTime: number;
    /**
     * 兔宝初始化，最终通往Main函数
     */
    class tubaoInit extends egret.DisplayObjectContainer {
        constructor();
        /**
         * 迷你游戏运行时，基础层面内容处理
         */
        miniGamePlay(): void;
        /**
         * 设置兔宝的舞台宽高
         * @param {egret.Event} 事件
         */
        setTubaoReat(event: egret.Event): void;
    }
    /**
     * 在新页面打开一个链接地址
     * @param {string} url 链接地址
     */
    function open(url: string, target?: string, features?: string): void;
    /**
     * 刷新页面
     */
    function reload(): void;
    /**
     * 安全
     */
    function security(): void;
}
declare namespace tubao {
    /**
     * 兔宝文本框增强
     */
    class tubaoLabel extends eui.Label {
        /**输入状态 */
        private shurutai;
        /**默认文本 */
        defaultText: string;
        /**默认颜色 */
        defaultColor: number;
        /**常规颜色 */
        convenColor: number;
        constructor();
        /**
         * 输入内容
         */
        private change();
        /**
         * 点击以后
         */
        private touchTap();
        /**
         * 获得焦点
         */
        private focusIn();
        /**
         * 失去焦点
         */
        private focusOut();
        /**
         * 初始化完成后调用功能处理
         */
        nono(): void;
        /**
         * 修改内容验证器
         */
        verValTool(): void;
        /**
         * 修改颜色验证器
         */
        verValColorTool(): void;
    }
}
/**
 * 布局资源解析
 */
declare namespace tubao.adapter {
    /**
     * 素材解析器
     */
    class asset implements eui.IAssetAdapter {
        /**
         * 解析素材
         * @param {string} source 待解析的新素材标识符
         * @param {Function} compFunc 解析完成回调函数
         * @param {any} thisObject callBack的作用域
         */
        getAsset(source: string, compFunc: Function, thisObject: any): void;
    }
}
declare namespace tubao.adapter {
    /**
     * eui主题解析器
     */
    class theme implements eui.IThemeAdapter {
        /**
         * 解析主题
         * @param {string} url 待解析的主题url
         * @param {Function} onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param {Function} onError 解析失败回调函数，示例：errorFunc():void;
         * @param {any} thisObject 回调的this引用
         */
        getTheme(url: string, onSuccess: Function, onError: Function, thisObject: any): void;
    }
}
/**
 * 算法工具类
 */
declare namespace tubao.algo.algo {
    /**
     * 字符串长度范围验证
     * @param {string} str 验证的字符串
     * @param {number} min 最小长度
     * @param {number} max 最大长度
     */
    function charLengthCheck(str: string, min: number, max: number): boolean;
    /**
     * 含有特殊字符验证
     * @param {string} str 文字内容
     */
    function onExpecialChar(str: string): boolean;
    /**
     * 中文字符验证
     * @param {string} str 文字内容
     */
    function onChinaStr(str: string): boolean;
    /**
     * 显示对象物品位置互换
     */
    function DisLocationExchange(dis1: egret.DisplayObject, dis2: egret.DisplayObject): void;
    /**
     * 兔宝游戏资源地址填充工具
     *
     * @param data 传入过来的number数据
     * @param num  填充位数
     */
    function fill(data: number, num: number): string;
    /**
     * 判断是否是数字
     * @param data 传入过来的number数据
     */
    function isNumber(val: any): boolean;
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    function randomArray(arr: any[]): any;
    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    function limitInteger(from: number, end: number): number;
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    function limit(from: number, end: number): number;
    /**
     * 获取一个随机数
     */
    function randomFrom(lowerValue: number, upperValue: number): number;
    /**
     * 获取到json的长度
     */
    function getJsonLength(jsonData: any): number;
    /**
     * 返回数组从大到小排序结果
     * */
    function arrSortMaxToMin(arr: any): any[];
    function arrMaxNum(arr: any): {
        "maxNum": number;
        "index": number;
    };
    /**
     * 返回数组从小到大排序结果
     * */
    function arrSortMinToMax(arr: any): any[];
    /**
     * 找数组中最小的值
    */
    function arrMinNum(arr: any): {
        "minNum": number;
        "index": number;
    };
    /**
     * 获取纹理中一个点的颜色算法
     */
    function getColorRGB(x: number, y: number, tex: egret.Texture): number[];
}
/**
 * A星寻路
 */
declare namespace tubao.algo.astar {
    /**
     * 寻路系统事件类
     */
    class astarEvent extends egret.Event {
        /**点了一个无效位置 */
        static clickNoGotoPix: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
    /**
     * Node 节点
     * @author chenkai
     * @since 2017/11/3
     */
    class Node {
        x: number;
        y: number;
        f: number;
        g: number;
        h: number;
        walkable: boolean;
        parent: Node;
        costMultiplier: number;
        constructor(x: number, y: number);
    }
    /**
     * 网格类
     * @author chenkai
     * @since 2017/11/3
     */
    class Grid {
        private _startNode;
        private _endNode;
        private _nodes;
        private _numCols;
        private _numRows;
        constructor(numCols: number, numRows: number);
        getNode(x: number, y: number): Node;
        setEndNode(x: number, y: number): void;
        setStartNode(x: number, y: number): void;
        setWalkable(x: number, y: number, value: boolean): void;
        readonly endNode: Node;
        readonly numCols: number;
        readonly numRows: number;
        readonly startNode: Node;
    }
    class AStar extends egret.EventDispatcher {
        private _open;
        private _closed;
        private _grid;
        private _endNode;
        private _startNode;
        private _path;
        private _heuristic;
        private _straightCost;
        private _diagCost;
        constructor();
        findPath(grid: Grid): boolean;
        search(): boolean;
        private buildPath();
        readonly path: any[];
        private isOpen(node);
        private isClosed(node);
        private manhattan(node);
        private euclidian(node);
        private diagonal(node);
        readonly visited: any[];
    }
}
declare namespace tubao.algo {
    /**
     * 比特处理字节数组
     */
    class bit {
        /**
         * ArrayBuffer转为字符串
         */
        static ab2str(buf: ArrayBuffer): string;
        /**
         * 字符串转为ArrayBuffer对象
         */
        static str2ab(str: string): ArrayBuffer;
    }
}
declare namespace tubao.algo {
    /**
     * 色彩工具
     */
    class color {
        /**
         * hls颜色模型转换为rgb
         * @param {number} h 色相
         * @param {number} s 深度
         * @param {number} l 亮度
         */
        static hsl(h: number, s: number, l: number): number;
        /**
         * hls颜色模型转换为rgb
         * @param {number} h 色相
         * @param {number} s 深度
         * @param {number} l 亮度
         */
        static hslToRgb(h: number, s: number, l: number): {
            red: number;
            green: number;
            blue: number;
        };
        static hue2rgb(p: any, q: any, t: any): any;
        static hsv(h: any, s: any, v: any): number;
        static hsvtorgb(h: any, s: any, v: any): number[];
        static hexTorgb(val: any): string;
        static rgbToHex(R: any, G: any, B: any): string;
        static toHex(n: any): string;
        static RgbToCmyk(R: any, G: any, B: any): string | number[];
        static cmyk2rgb(c: any, m: any, y: any, k: any): string;
        static hsv2rgb(h: any, s: any, v: any): string;
        static rgb2hsv(r: any, g: any, b: any): string;
    }
}
declare module tubao.algo {
    /**
     * 场景排序算法，传入一个显示列表自动进行层级排序
     * @param {egret.DisplayObjectContainer} display 显示对象列表
     */
    function disSort(display: egret.DisplayObjectContainer): void;
}
declare module tubao.algo.moveMath {
    /**
     * 方向
     */
    enum direction {
        /**前 */
        front = 0,
        /**前左 */
        frontLeft = 1,
        /**前右 */
        frontRight = 2,
        /**后 */
        rear = 3,
        /**后左 */
        rearLeft = 4,
        /**后右 */
        rearRight = 5,
        /**左 */
        left = 6,
        /**右 */
        right = 7,
    }
    /**
     * 方向类型
     */
    enum vrType {
        /**四方向 */
        four = 0,
        /**八方向 */
        eight = 1,
    }
    /**
     * 数学运算返回结果接口
     */
    interface MathPlayOver {
        /**方向类型 */
        dire: direction;
        /**角度 */
        vr: number;
        /**弧度 */
        angleSpeed: number;
        /**同比速度值 */
        distance: number;
        /**两点差距宽度 */
        gapWidth: number;
        /**两点差距高度 */
        gapHeight: number;
    }
    /**
     * 移动位置计算工具
     * @param {number} x 移动去的位置x
     * @param {number} y 移动去的位置y
     * @param {boolean} vr 方向类型true：4方向行走，false：8方向行走
     */
    function movePoint(thisX: number, thisY: number, gotoX: number, gotoY: number, vrState?: vrType): MathPlayOver;
    /**
     * 根据角度获取方向工具
     * @param {number} vr 角度
     * @param {vrType} type 方向类型
     * @return {direction} 返回一个方向
     */
    function getDirection(vr: number, type: vrType): direction;
    /**
     * 根据角度获取四方向工具
     * @param {number} vr 角度
     * @return {direction} 返回一个方向
     */
    function getDirectionFor(vr: number): direction;
    /**
     * 根据角度获取八方向工具
     * @param {number} vr 角度
     * @return {direction} 返回一个方向
     */
    function getDirectionEight(vr: number): direction;
}
declare namespace tubao.algo {
    /**
     * 工具箱
     */
    class tool {
        /**密码匹配正则表达式 */
        static patrn: RegExp;
        /**
         * 获取一个随机字符串
         * @param {number} len 随机长度
         * @returns {string} 随机字符串
         */
        static randomString(len: number): string;
        /**
         * 获取一个随机字符串
         * @param {number} len 随机长度
         * @returns {string} 随机字符串
         */
        static randomStringu(len: number): string;
        /**
         * 设置一个时间
         * @param {number} day 添加的天数
         */
        static TimerSet(day?: number): string;
        /**
         * 当前精确时间
         */
        static timerPricise(): string;
        /**
         * 当前精确时间，日时分
         */
        static timerPricisehmg(dateStr: string): string;
        /**
         * 当前粗糙的数据
         */
        static timerRough(): string;
        /**
         * 验证字符串
         * @param {string} str 字符串
         */
        static ver(str: string): boolean;
        /**
         * 随机打乱数组顺序
         * @param {any[]} arr 想打乱的数组
         * @return {any[]} 乱序数组
         */
        static chaosArr(arr: any[]): any[];
        static randomNumber(): number;
        /**
         * 范围随机数
         * @param {number} start 开始数
         * @param {number} end 结束数
         * @return {number} 随机获得的数字
         */
        static scoueRandom(start: number, end: number): number;
        /**
         * 获取几率
         * @param {number} odds 确定一个几率
         * @return {boolean} 几率成功失败
         */
        static odds(odds: number): boolean;
        /**
         * 检查是否是一个数字
         * @param {number} num 检查的数字
         */
        static IsNumber(num: number): boolean;
        /**
         * 检查是否是其中一个
         * @param {any} num 值
         * @param {any} muiti 组数据
         */
        static IsMuiti(num: any, muiti: any): boolean;
        /**
         * 检查数字是否是其中一个
         * @param {number} num 数值
         * @param {number[]} muiti 数值数组
         */
        static InNumber(num: number, muiti: number[]): boolean;
        /**
         * 检查数字的范围是否在指定之内
         * @param {number} num 要检测的值
         * @param {number} min 最大值
         * @param {number} max 最小值
         */
        static NumberScope(num: number, min: number, max: number): boolean;
        /**
         * 检查一个数组是否在指定之内
         * @param {number[]} num 要检测的值数组
         * @param {number} min 最大值
         * @param {number} max 最小值
         */
        static ArrayAccord(arr: number[], min: number, max: number): boolean;
        /**
         * 检查一个字符串长度是否在指定之内
         * @param {string} str 要检测的字符串
         * @param {number} min 最大值
         * @param {number} max 最小值
         */
        static StringAccord(str: string, min: number, max: number): boolean;
        /**
         * 检查是否为字符串
         * @param {string} str 待验证字符串
         */
        static isString(str: string): boolean;
        /**
         * 量空间交换算法
         * @param {any} val1 值1
         * @param {any} val2 值2
         */
        static swap(val1: any, val2: any): void;
        /**
         * 枚举返回枚举列表数组，且排除指定值
         * @param {any} enumData 枚举数组
         * @param {any} ticu 剔除数据
         * @return {any[]} 返回枚举的数组列表
         */
        static enumGetArrExclude(enumData: any, exclude: any): any[];
        /**
         * 枚举返回枚举列表数组key
         * @param {any} enumData 枚举数组
         * @return {string[]} 返回枚举的数组列表
         */
        static enumGetArrKey(enumData: any): string[];
        /**
         * 枚举返回枚举列表数组Value
         * @param {any} enumData 枚举数组
         * @return {number[]} 返回枚举的数组列表
         */
        static enumGetArrValue(enumData: any): number[];
        /**
         * 返回枚举随机一项Value
         * @param {any} enumData 枚举数组
         * @return {number} 返回枚举的数组列表
         */
        static enumGetOneValue(enumData: any): number;
        /**
         * 随机返回数组里面的一个值
         * @param {any[]} arr 数组
         * @return {any} 返回的值
         */
        static returnArrOneVal(arr: any[]): any;
    }
}
declare namespace tubao.algo {
    /**
     * xxtea加密过程
     */
    class xxtea {
        private static instance;
        private _protoBufRoot;
        static getInstance(): xxtea;
        private delta;
        toUint8Array(v: any, includeLength: any): Uint8Array;
        toUint32Array(bytes: any, includeLength: any): any;
        mx(sum: any, y: any, z: any, p: any, e: any, k: any): number;
        fixk(k: any): any;
        encryptUint32Array(v: any, k: any): any;
        decryptUint32Array(v: any, k: any): any;
        toBytes(str: any): Uint8Array;
        toShortString(bytes: any, n: any): any;
        toLongString(bytes: any, n: any): string;
        toString(bytes: any): any;
        encrypt(data: any, key: any): any;
        encryptToString(data: any, key: any): any;
        decrypt(data: any, key: any): any;
        decryptToString(data: any, key: any): any;
    }
}
declare module tubao.base {
    /**
     * 按钮基类点击按钮时产生点击效果
     */
    class buttonCore extends eui.Component {
        constructor();
        buttonResult(event: any): void;
    }
}
/**
 * 遥感
 */
declare namespace tubao.joyStick {
    class joyStickEvent {
        /** 摇杆按下开始接受事件时候派发 */
        static EVENT_JOY_START: string;
        /** 触摸抬起后出发摇杆本次摇杆事件结束 */
        static EVENT_JOY_END: string;
        /** 摇杆角度改变时候派发 */
        static EVENT_JOY_CHANGE: string;
        /** 初始化摇杆完成后触发 */
        static EVENT_INIT_COMPLETE: string;
    }
    class joyStickType {
        /** 四方位 */
        static TYPE_FOUR: number;
        /** 八方为 */
        static TYPE_EIGHT: number;
    }
    class JoyStickComponent extends eui.Component {
        private _joybg;
        private _joyStick;
        private _minAlpha;
        private _maxAlpha;
        private _angle;
        private _bgRadius;
        private _joyRadius;
        private _mouseX;
        private _mouseY;
        private _initJoyPoint;
        private _type;
        private _touchID;
        private _isSkinFlag;
        /**
         * 初始化摇杆参数
         * @param type 方向为定义在 joyStickType类下 目前仅实现八方为
         * @param joyBg 摇杆背景纹理(可选)
         * @param joyStick 摇杆纹理(可选)
         * @param skin //皮肤文件(可选)如果用exml必须满足 有_joybg和_joyStick两个eui.image控件
         */
        constructor(type: number, joyBg?: egret.Texture, joyStick?: egret.Texture, skin?: any);
        childrenCreated(): void;
        private onTouchBegin(e);
        private onTouchMove(e);
        private onTouchEnd(e);
        showJoy(callBack: () => void): void;
        endJoy(callBack: () => void): void;
        /**
         * 获取当前角度信息
         */
        getAngle(): number;
        destroy(): void;
    }
}
declare module tubao.base {
    /**
     * 条状消息提示
     */
    class hint extends panel {
        private word;
        private zhu;
        private timer;
        private pool;
        /**
         * 条状消息提示
         */
        constructor();
        /**
         * 发送一个提示条
         * @param {string} word 提示文字内容十五字
         * @param {any} color 提示文字内容的颜色
         * @param {boolean} type 提示文字类型，默认不叠加，true = 叠加，fasle=不叠加
         */
        send(word: string, color?: any, type?: boolean): void;
        /**
         * 清理提示列表
         */
        ClearAll(): void;
    }
}
declare module tubao.base {
    /**
     * 公告面板
     */
    class notice extends panel {
        Word: eui.Label;
        btn: eui.Button;
        /**
         * 公告面板可以显示给用户文字内容
         * @param {string} 公告内的文字内容
         */
        constructor(word: string);
        /**
         * 面板关闭
         */
        close(): void;
    }
}
declare module tubao.base {
    /**
     * 图片面板，只包含一张图片的面板
     */
    class paper extends panel {
        /**展示图片本身 */
        img: eui.Image;
        /**是否允许关闭面板 */
        private closePanel;
        /**
         * 图片面板，里面会显示一张图片展示到玩家面前，点击关闭
         * @param {string} img 图片资源名字
         * @param {boolean} closePanel 关闭面板
         */
        constructor(img: string, closePanel?: boolean);
        /**
         * 关闭面板
         */
        close(): void;
    }
}
declare module tubao.base {
    /**
     * 消息情节记录面板
     */
    class plot extends panel {
        private closeBtn;
        private word;
        private img;
        private fun;
        /**
         * 消息情节记录面板，这里可以写长篇一些的文字内容且必须包含一个图片
         * @param {string} img 图片资源名字
         * @param {number} sele 缩放XY比例
         * @param {string} word 希望显示的情节消息文字内容
         * @param {Function} fun 回调函数
         */
        constructor(img: string, sele: number, word: string, fun?: Function);
        /**
         * 关闭面板
         */
        close(): void;
    }
}
declare module tubao {
    /**
     * 灰度图片类
     */
    class grayImg extends eui.Image {
        colorMatrix: number[];
        colorFlilter: egret.ColorMatrixFilter;
        constructor();
        /**
         * 灰度
         */
        gray: boolean;
    }
    /**
     * 显示对象灰度工具
     */
    function gray(dis: egret.DisplayObject): void;
}
declare module tubao.base {
    /**
     * 弹窗提示
     */
    class popup extends tubao.utils.drag {
        private closeBtn;
        private word;
        ico: eui.Image;
        private fun;
        /**
         * 创建一个提示弹窗显示给玩家，可以给玩家提示信息内容，且包含一个确定按钮。
         * @param {string} ico 图标，指定资源名
         * @param {string} word 想要展现给玩家的话，尽量保持在15字
         * @param {Function} fun 回调函数，点击确定后执行的函数默认不写不执行
         */
        constructor(ico: string, word: string, fun?: Function);
        /**
         * 关闭面板
         */
        private close();
    }
}
declare module tubao.base {
    /**
     * 场景提示工具
     */
    class sceneHint extends panel {
        sceneName: eui.Label;
        /**
         * 场景提示工具
         */
        constructor();
        /**
         * 发送场景文字内容
         * @param {string} word 显示文字内容
         */
        send(word: string): void;
    }
}
declare module tubao.base {
    /**
     * 双项选择器
     */
    class select extends panel {
        closeBtn0: eui.Button;
        closeBtn1: eui.Button;
        word: eui.Label;
        ico: eui.Image;
        zhu: eui.Group;
        thisObject: any;
        fun0: Function;
        fun1: Function;
        qingdingjiemianannweizhihuhuan: boolean;
        /**
         * 双向选择器，显示一个图片，提示一段话可以点击确定取消按钮，按下不同按钮运行不同的逻辑过程。
         * @param {string} ico 图片资源名字
         * @param {string} word 提示内容十五字文字内容
         * @param {Function} fun0 确定回调函数，必须设置
         * @param {Function} fun1 取消回调函数，必须设置
         */
        constructor(ico: string, word: string, thisObject: any, fun0: Function, fun1?: Function);
        closePage0(): void;
        closePage1(): void;
    }
}
declare module tubao.base {
    /**
     * 三项选择器
     */
    class selectS extends panel {
        closeBtn0: eui.Button;
        closeBtn1: eui.Button;
        closeBtn2: eui.Button;
        word: eui.Label;
        ico: eui.Image;
        zhu: eui.Group;
        thisObject: any;
        fun0: Function;
        fun1: Function;
        fun2: Function;
        /**
         * 三项选择器，提供三个按钮确定，取消，返回按下不同按钮触发不同回调函数
         * @param {string} ico 选择器图标资源名字
         * @param {string} word 显示的文字提示十五字
         * @param {any} thisObject 回调函数作用域
         * @param {Function} fun0 回调函数确定
         * @param {Function} fun1 回调函数取消
         * @param {Function} fun2 回调函数返回
         */
        constructor(ico: string, word: string, thisObject: any, fun0: Function, fun1: Function, fun2: Function);
        closePage0(): void;
        closePage1(): void;
        closePage2(): void;
    }
}
declare module tubao {
    /**
     * 一个点
     */
    class dot extends egret.Shape {
        size: number;
        bgColor: number;
        borderColor: number;
        borderSize: number;
        cornerRadius: number;
        halfSize: number;
        /**
         * 一个点
         * @param {number} x 定位x坐标
         * @param {number} y 定位y坐标
         * @param {number} color 颜色
         */
        constructor(x: number, y: number, color: number);
    }
}
declare namespace tubao.DB {
    /**
     * 龙骨事件类
     */
    class dbEvent extends egret.Event {
        /**加载完成且初始化完成 */
        static lodingOver: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare namespace tubao.DB {
    /**
     * 龙骨应用类提供上层应用功能
     */
    class DBuse extends DBbasice {
        AnGroup: {};
        bqStatic: boolean;
        /**
         * 改变插槽显示对象,并且在规定的时间后还原
         * @param {string} skeletonName 骨架名字
         * @param {string} Skeleton 插槽名字
         * @param {number} time 时间，默认为null，不进行time后变回来，假如传入值则在这个时间后变回来
         * @param {string} imgResName 图片资源名字
         * @param {number} imgResX 图片资源位置x
         * @param {number} imgResY 图片资源位置y
         * @param {number} imgResRotation 图片资源旋转角度
         * @param {boolean} imgResVisible 图片资源显示隐藏
         * @param {boolean} lodingType 资源加载类型 true：res管理内置资源，false：外部url方式加载
         */
        setSlotImgInTime(skeletonName: string, slotName: string, time: number, imgResName: string, imgResX: number, imgResY: number, imgResRotation: number, imgResVisible: boolean, lodingType?: boolean): void;
        /**
         * 设置插槽图片内容
         * @param {string} skeletonName 骨架名字
         * @param {string} Skeleton 插槽名字
         * @param {string} imgResName 图片资源名字
         * @param {number} imgResX 图片资源位置x
         * @param {number} imgResY 图片资源位置y
         * @param {number} imgResRotation 图片资源旋转角度
         * @param {boolean} imgResVisible 图片资源显示隐藏
         * @param {boolean} lodingType 资源加载类型 true：res管理内置资源，false：外部url方式加载
         */
        setSlotImg(skeletonName: string, slotName: string, imgResName: string | egret.Texture, imgResX: number, imgResY: number, imgResRotation: number, imgResVisible: boolean, lodingType?: boolean): Promise<void>;
        /**
         * 请求数据
         * @param {string} str 资源名字
         * @param {boolean} lodingType 资源加载类型 true：res管理内置资源，false：外部url方式加载
         */
        reqData(str: string, lodingType?: boolean): Promise<{}>;
        /**
         * 动画组序列播放
         * @param skeletonName 骨架名字
         * @param anGroup 动画组要添加的数据[[动画名字，循环次数]，动画名字，[动画名字，循环次数]]
         * @param fun 函数回调
         */
        anGropuPlay(skeletonName: string, anGroup: any[], fun?: Function): void;
        /**
         * 动画开始播放且可回调
         * @param skeletonName 骨架组名字
         * @param fun 回调方法
         */
        private anPlay(skeletonName, fun?);
        /**
         * 动画控制
         * @param skeletonName 骨架名字
         * @param anName 动画名字
         * @param Control 动画的控制 boolean-true：一直播放，boolean-false：停止，number：指定帧开始播放动画
         * @param anSize 动画设置  播放次数。 [-1: 使用动画数据默认值, 0: 无限循环播放, [1~N]: 循环播放 N 次]
         */
        anControl(skeletonName: string, anName: string, Control: any, anSize?: number): void;
        /**
         * 混合动画播放
         * @param {string} skeletonName 骨骼名字
         * @param {mixanPlayInter} anGroup 动画组
         * @param {Function} fun 回调函数
         * @return {dragonBones.AnimationState} 动画状态由播放动画数据时产生
         */
        mixAnPlay(skeletonName: string, anGroup: mixanPlayInter, fun?: Function): dragonBones.AnimationState;
        /**
         * 混合动画组播放
         * @param {string} skeletonName 骨骼名字
         * @param {mixanPlayInter[]} anGroup 动画组
         * @param {Function} fun 回调函数
         */
        mixAnPlayArr(skeletonName: string, anGroup: mixanPlayInter[], fun?: Function): void;
        /**
         * 设置插槽到特定位置显示不同插槽里面内容
         * @param {dragonBones.Slot} slot 插槽
         * @param {number} index 位置
         * @return {number} 返回当前索引位置
         */
        setDBSlotIndex(skeletonName: string, slotName: string, index: number): number;
    }
    /**
     * 混合动画播放
     */
    interface mixanPlayInter {
        /**动画组名字 */
        anName: string;
        /**动画组重合名字 */
        group: string;
        /**淡入时间。 [-1: 使用动画数据默认值, [0~N]: 淡入时间 (以秒为单位)] （默认: -1） */
        fadeInTime: number;
        /**播放次数。 [-1: 使用动画数据默认值, 0: 无限循环播放, [1~N]: 循环播放 N 次] （默认: -1） */
        playTimes: number;
        /**表示当前这个动画遮罩的骨骼节点 */
        mask: string[];
    }
}
/**
 * 下拉列表组件
 */
declare namespace tubao.list {
    /**
     * 下拉列表类
     */
    class downList extends eui.Component {
        lab_dq: eui.Label;
        img_cf: eui.Image;
        btn_Pool: eui.Group;
        gdst: eui.Scroller;
        pool: downListNape[];
        /**当前的选择 */
        present: any;
        constructor();
        /**
         * 添加一个项
         * Nur:基础id消息
         * Name:跟的名字
         */
        AddBox(Nur: any, Name: any): void;
        /**
         * 清理全部
         */
        ClearAll(): void;
        /**
         * 删除一个指定项
         * @param {number} nur 删除的nur
         */
        delList(nur: number): void;
        /**
         * 触发开启关闭
         */
        switch(): void;
        /**
         * 选择第一项
         */
        selectOne(): void;
        /**
         * 根据id选择项
         */
        lineIDSelect(id: any, Name: any): void;
        /**
         * 触发
         */
        chufa(obj: downListNape): void;
        /**
         * 初始化
         */
        init(): void;
    }
}
declare namespace tubao.list {
    /**
     * 下拉列表的单个项
     */
    class downListNape extends eui.Component {
        lab_nr: eui.Label;
        nur: any;
        Name: any;
        constructor(Nur: any, Name: any);
    }
}
declare namespace tubao.editor {
    /**
     * 数值转换
     */
    class translation {
        /**
         * 透明度p->h
         */
        alphaH(val: number): number;
        /**
         * 透明度h->p
         */
        alphaP(val: number): number;
        /**
         * 旋转p->h
         */
        rotationH(val: number): number;
        /**
         * 旋转h->p
         */
        rotationP(val: number): number;
        /**
         * 缩放p->h
         */
        scaleH(val: number): number;
        /**
         * 缩放h->p
         */
        scaleP(val: number): number;
        /**
         * 显示处理过程
         * @param {egret.DisplayObject} display 控制的显示对象
         * @param {boolean} val 是否显示
         */
        visible(display: egret.DisplayObject, val: boolean): boolean;
    }
    /**转换数值p：原本，h：转换 */
    var tran: translation;
}
declare namespace tubao {
    /**
     * 文字逐步显示
     */
    class charStep extends eui.Label {
        private instantly;
        timer: egret.Timer;
        private _allWord;
        constructor();
        /**
         * 时间调度
         */
        private timerStep();
        /**
         * 点击后显示全部
         */
        touchTap(): void;
        /**
         * 获取说话的全部内容
         */
        /**
         * 设置说话的全部内容
         * @param {string} word
         */
        allWord: string;
    }
}
/**
 * 兔宝玩家编辑器
 */
declare namespace tubao.editor {
    /**
     * 兔宝玩家显示对象编辑组件
     */
    class tubaoDisplayObjectEditor extends tubaoDisplayObjectEditorBase {
        /**复制按钮 */
        private fuZiBtn;
        /**删除按钮 */
        private shanCuBtn;
        /**还原按钮 */
        private huanYuanBtn;
        /**
         * 兔宝玩家显示对象编辑组件
         */
        constructor();
        /**
         * 删除函数
         */
        shanCuFun(): void;
        /**
         * 还原函数
         */
        huanYuanFun(): void;
        /**
         * 打开要被控制的显示对象
         * @param {egret.DisplayObject} display 要操作的显示对象
         */
        openDisplay(display: egret.DisplayObject): void;
        /**
         * 打开的时候
         * @param {egret.DisplayObject} display 要操作的显示对象
         */
        open(display: egret.DisplayObject): void;
    }
}
/**
 * 兔宝特效按钮效果类，用于实现点击效果
 */
declare namespace tubao.Effect.button {
    /**
     * 按钮触发
     * @param {egret.DisplayObject} panel 面板
     * @param {number} effectType 特效类型
     * @param {string} soundName 音乐名字
     * @param {Function} fun 回调函数
     * @param {Function} yu 回调函数作用域
     * @param {boolean} chufaNo 触发参与控制
     */
    function button(panel: egret.DisplayObject, effectType?: number, soundName?: string, fun?: Function, yu?: any, chufaNo?: boolean): void;
}
/**
 * 动画效果工具模块
 */
declare namespace tubao.Effect {
    /**
     * 给显示对象设置颜色
     */
    function getColor(image: egret.DisplayObject): number;
    /**
     * 给显示对象设置颜色
     */
    function setColor(image: egret.DisplayObject, color?: number): void;
    /**
     * 使用rgb分色为显示对象上色
     * @param {number} red 红色
     * @param {number} green 绿色
     * @param {number} blue 蓝色
     */
    function separateSetColor(disPlay: egret.DisplayObject, red: number, green: number, blue: number): void;
    /**
     * 拆解rgb颜色整体为rgb分值
     * @param {number} color 颜色整体数值
     */
    function spliceColor(color: number): {
        red: number;
        green: number;
        blue: number;
    };
    /**
     * 根据改变值调用去设置颜色
     * @param {number} disPlay 显示对象
     * @param {number} color 颜色
     * @param {number} control 控制值
     */
    function controlColorSetColor(disPlay: egret.DisplayObject, color: number, control: number): void;
}
/**
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
interface Platform {
    /**设置cookie */
    setStorage(key: string, value: string): string;
    /**获得cookie */
    getStorage(key: string): string;
    /**加载字体 */
    lodinFont(): any;
    /**获得用户信息 */
    getUserInfo(): Promise<any>;
    /**登录 */
    login(): Promise<any>;
}
declare class DebugPlatform implements Platform {
    setStorage(key: any, value: any): string;
    getStorage(key: any): any;
    lodinFont(): void;
    getUserInfo(): Promise<{
        nickName: string;
    }>;
    login(): Promise<void>;
}
declare let platform: Platform;
interface Window {
    platform: Platform;
}
/**头条 */
declare const tt: any;
/**微信 */
declare const wx: any;
/**QQ */
declare const qq: any;
/**快手 */
declare const ks: any;
/**
 * 兔宝弹窗效果类，用于放置弹窗面板的效果
 */
declare namespace tubao.Effect.Popup {
    /**
    * 添加面板方法
    * @param {egret.DisplayObject} panel 面板显示对象实例
    * @param {number} effectType 动画类型1:从中间轻微弹出 2：从中间猛烈弹出
    */
    function Resuit(panel: egret.DisplayObject, effectType?: number): void;
    /**
    * 关闭面板方法
    * @param {egret.DisplayObject} panel 面板显示对象实例
    * @param {number} effectType 动画类型1:从中间轻微回收 2：从中间猛烈回收
    */
    function Close(panel: egret.DisplayObject, effectType?: number): void;
}
/**
* 场景切换特效类
*/
declare namespace tubao.Effect.Scene {
    /**
    * 场景切换特效类
    *1.卷帘特效
    *2.左右切换移动
    *3.直接翻
    *4.旋转掉落
    *5.随机一种
    */
    function MovieStart(_txnums: any): void;
}
/**
 * Controller基类
 */
declare class BaseController extends egret.EventDispatcher {
    /**
     * 消息列表
     */
    private _messages;
    /**
     * 该模块使用的实体类
     */
    private _model;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    registerFunc(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    setModel(model: BaseModel): void;
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    getModel(): BaseModel;
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    getControllerModel(controllerD: number): BaseModel;
    /**
     * View注册
     * @param viewClassZ View的类
     * @param viewId View的ID
     * @param viewParent View的父级
     * @returns {IBaseView}
     */
    registerView<T>(viewClass: {
        new (...args): T;
    }, viewId: number, viewParent: egret.DisplayObjectContainer): T;
    /**
     * View打开
     * @param viewId View的ID
     * @param param 参数
     */
    openView(viewId: number, ...param: any[]): void;
    /**
     * View关闭
     * @param viewId View的ID
     * @param param 参数
     */
    closeView(viewId: number, ...param: any[]): void;
}
/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
declare class BaseModel {
    private _controller;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    constructor($controller: BaseController);
}
/**
 * Created by yangsong on 2014/11/22.
 * Proxy基类
 */
declare class BaseProxy {
    private _controller;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    constructor($controller: BaseController);
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
}
/**
 * 兔宝MVC框架
 */
declare namespace tubao.mvc.manager {
    /**
     * Controller管理类
     */
    class controller {
        private static _modules;
        /**
         * 清空处理
         */
        static clear(): void;
        /**
         * 动态添加的Controller
         * @param key 唯一标识
         * @param manager Manager
         *
         */
        static register(key: number, control: BaseController): void;
        /**
         * 动态移除Controller
         * @param key 唯一标识
         *
         */
        static unregister(key: number): void;
        /**
         * 是否已经存在Controller
         * @param key 唯一标识
         * @return Boolean
         *
         */
        static isExists(key: number): boolean;
        /**
         * 跨模块消息传递
         * @param controllerD Controller唯一标识
         * @param key 消息唯一标识
         *
         */
        static applyFunc(controllerD: number, key: number, ...param: any[]): any;
        /**
         * 获取指定Controller的Model对象
         * @param controllerD Controller唯一标识
         * @returns {BaseModel}
         */
        static getControllerModel(controllerD: number): BaseModel;
    }
}
/**
 * 框架管理类
 */
declare namespace tubao.mvc.manager {
    /**
     * 视图管理类
     */
    class view {
        /**
         * 已注册的UI
         */
        private static _views;
        /**
         * 开启中UI
         */
        private static _opens;
        /**
         * 清空处理
         */
        static clear(): void;
        /**
         * 面板注册
         * @param key 面板唯一标识
         * @param view 面板
         */
        static register(key: number, view: IBaseView): void;
        /**
         * 面板解除注册
         * @param key
         */
        static unregister(key: number): void;
        /**
         * 销毁一个面板
         * @param key 唯一标识
         * @param newView 新面板
         */
        static destroy(key: number, newView?: IBaseView): void;
        /**
         * 开启面板
         * @param key 面板唯一标识
         * @param param 参数
         *
         */
        static open(key: number, ...param: any[]): IBaseView;
        /**
         * 关闭面板
         * @param key 面板唯一标识
         * @param param 参数
         *
         */
        static close(key: number, ...param: any[]): void;
        /**
         * 关闭面板
         * @param view
         * @param param
         */
        static closeView(view: IBaseView, ...param: any[]): void;
        /**
         * 根据唯一标识获取一个UI对象
         * @param key
         * @returns {any}
         */
        static getView(key: number): IBaseView;
        /**
         * 关闭所有开启中的UI
         */
        static closeAll(): void;
        /**
         * 当前ui打开数量
         * @returns {number}
         */
        static currOpenNum(): number;
        /**
         * 检测一个UI是否开启中
         * @param key
         * @returns {boolean}
         */
        static isShow(key: number): boolean;
    }
}
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自eui.Component
 */
declare class BaseEuiView extends eui.Component implements IBaseView {
    private _controller;
    private _myParent;
    private _isInit;
    private _resources;
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    constructor($controller: BaseController, $parent: egret.DisplayObjectContainer);
    /**
     * 获取我的父级
     * @returns {egret.DisplayObjectContainer}
     */
    readonly myParent: egret.DisplayObjectContainer;
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     /**
     * 加载面板所需资源
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
}
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自egret.Sprite
 */
declare class BaseSpriteView extends egret.DisplayObjectContainer implements IBaseView {
    private _controller;
    private _myParent;
    private _isInit;
    private _resources;
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    constructor($controller: BaseController, $parent: egret.DisplayObjectContainer);
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 获取我的父级
     * @returns {egret.DisplayObjectContainer}
     */
    readonly myParent: egret.DisplayObjectContainer;
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 屏幕尺寸变化时调用
     */
    protected onResize(): void;
    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
}
/**
 * Created by yangsong on 2014/11/24.
 * View基类接口
 */
interface IBaseView {
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 分模块加载资源
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
}
/**
 * 设备信息
 */
declare namespace tubao {
    class device {
        /**
         * 当前是否Html5版本
         * @returns {boolean}
         * @constructor
         */
        static readonly isHtml5: boolean;
        /**
         * 当前是否是Native版本
         * @returns {boolean}
         * @constructor
         */
        static readonly isNative: boolean;
        /**
         * 当前是否渠道版本,微信，QQ,字节跳动，小米轻游戏
         * @returns {boolean}
         * @constructor
         */
        static readonly isChannel: boolean;
        /**
         * 当前是否是微信小游戏平台
         */
        static readonly isWxGame: boolean;
        /**
         * 当前是否是qq小游戏平台
         */
        static readonly isQQGame: boolean;
        /**
         * 当前是否是字节跳动头条小游戏平台
         */
        static readonly isTTGame: boolean;
        /**
         * 当前是否是快手小游戏平台
         */
        static readonly isKSGame: boolean;
        /**
         * 当前是否是小米轻游戏平台
         */
        static readonly isQGame: boolean;
        /**
         * 是否是在手机上
         * @returns {boolean}
         * @constructor
         */
        static readonly isMobile: boolean;
        /**
         * 是否是在PC上
         * @returns {boolean}
         * @constructor
         */
        static readonly isPC: boolean;
        /**
         * 是否是QQ浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isQQBrowser: boolean;
        /**
         * 是否是IE浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isIEBrowser: boolean;
        /**
         * 是否是Firefox浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isFirefoxBrowser: boolean;
        /**
         * 是否是Chrome浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isChromeBrowser: boolean;
        /**
         * 是否是Safari浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isSafariBrowser: boolean;
        /**
         * 是否是Opera浏览器
         * @returns {boolean}
         * @constructor
         */
        static readonly isOperaBrowser: boolean;
        /**
         * 得到设备系统 如：iOS/Android/WP7
         */
        static readonly DeviceOs: string;
    }
}
declare namespace tubao.paint {
    /**
     * 绘画工具箱,历史记录功能
     */
    class history extends paint {
        /**画的每一笔记录 */
        paintData: paintData[];
        /**当前是第几笔 */
        paintIndex: number;
        /**存储的每一步纹理数据 */
        texturePool: egret.Texture[];
        /**
         * 按下
         */
        onTouchBegin(e: egret.TouchEvent): void;
        /**
         * 移动
         */
        onTouchMove(e: egret.TouchEvent): void;
        /**
         * 解析数据条
         */
        verData(data: any): void;
        /**
         * 抬起画笔
         */
        touchEnd(): void;
        /**
         * 撤销
         */
        revocation(): void;
        /**
         * 重做
         */
        reform(): void;
    }
}
declare namespace tubao.paint {
    /**
     * 笔刷枚举
     */
    enum brush {
        /**矢量图笔刷 */
        sprite = 1,
        /**图片笔刷 */
        img = 2,
    }
    /**
     * 获得笔刷
     * @param {brush} type 指定笔刷类型
     */
    function getBrush(type: brush): any;
}
declare namespace tubao.paint {
    /**
     * 矢量图圆形画笔
     */
    class sprite extends egret.Sprite {
        arg: argBaseBuild;
        /**
         * 矢量图圆形画笔
         * @param {number} color 颜色
         * @param {number} sicz 画笔大小
         */
        init(arg: argBaseBuild): void;
    }
    /**
     * 矢量图圆形画笔
     */
    class img extends eui.Image {
        arg: argBaseBuild;
        /**
         * 矢量图圆形画笔
         * @param {number} color 颜色
         * @param {number} sicz 画笔大小
         */
        init(arg: argBaseBuild): void;
    }
}
declare namespace tubao.paint {
    /**
     * 画笔基础配置构建接口
     */
    interface argBaseBuild {
        /**笔刷浓度，性能消耗/添加渲染质量 */
        brushAlpha: number;
        /**颜色 */
        color: number;
        /**大小 */
        size: number;
        /**锐利程度x 0-255 */
        blurX: number;
        /**锐利程度y 0-255 */
        blurY: number;
        /**是否启用bitmap Make */
        bitmap: string;
        /**画笔类 */
        brush: brush;
        /**画笔参数 */
        brushArg: {
            cmd: number;
            width: number;
            height: number;
            bitmap: string;
        };
    }
}
declare namespace tubao.paint {
    /**
     * 记录每一笔数据接口
     */
    interface paintData {
        /**画这一笔的时间 */
        date: number;
        /**点的列表 */
        list: number[][];
        /**笔刷基础配置 */
        arg: argBaseBuild;
    }
}
declare namespace tubao.fields {
    /**
     * 表情位图
     */
    class EmojiBitmap extends egret.Bitmap {
        constructor(res: string);
        /**
         * 初始化
         * @param {string} res 资源名字
         */
        initialize(res: string): this;
        /**
         * 重置
         */
        reset(): this;
    }
}
declare namespace tubao.fields {
    /**
     * 表情配置类底层
     */
    class EmojiConfig {
        /**定位x */
        offx: number;
        /**定位y */
        offy: number;
        /**值 */
        value: IEmojiConfig[];
        /**
         * 表情配置类底层
         * @param {IEmojiConfig[]} value 表情配置数组
         * @param {number} offx 定位x
         * @param {number} offy 定位y
         */
        constructor(value: IEmojiConfig[], offx?: number, offy?: number);
    }
}
declare namespace tubao.fields {
    /**
     * 表情管理插件
     */
    class EmojiPlugin {
        /** */
        private _emojiClazz;
        /**匹配符 */
        private _match;
        /**表情配置 */
        private _config;
        /**表情缓存 */
        private _pool;
        /**符号开始 */
        private _symbolBegin;
        /**符号结束 */
        private _symbolEnd;
        /**
         * 表情管理插件 当前类需要以单例形式处理
         * @param {EmojiConfig} config 表情配置 key:唯一数字标识 res:表情资源
         * @param {number} match 占位符 通常情况可设置为2个空格 具体视表情资源尺寸而定
         */
        constructor(config: EmojiConfig, matchtotal?: number);
        /**
         * 获取占位符的字符内容
         * @param {number} total 长度
         */
        private getMatchChar(total);
        /**
         * 获取定位x
         */
        readonly offX: number;
        /**
         * 获取定位y
         */
        readonly offY: number;
        /**
         * 获取匹配符
         */
        readonly match: string;
        /**
         * 获取标志
         * @param {number} key 标志值
         */
        getSymbol(key: number): string;
        /**
         * 查询
         * @param {string} text 查询的文本
         */
        private search(text);
        /**
         * 解析文本
         * @param {string} text 解析的内容
         */
        parser(text: string): {
            result: string;
            emojis: {
                key: number;
                symbol: string;
                index: number;
            }[];
        };
        /**
         * 获取配置
         * @param {number} key 配置的键
         */
        private getConfig(key);
        /**
         * 表情缓存出池
         * @param {number} key 表情的键
         */
        fromEmoji(key: number): EmojiBitmap;
        /**
         * 表情缓存入池
         */
        toEmoji(emoji: EmojiBitmap): void;
    }
}
declare namespace tubao.fields {
    /**
     * 表情配置接口
     */
    interface IEmojiConfig {
        /**表情的key值 */
        key: number;
        /**标志 */
        symbol?: string;
        /**资源名字 */
        res: string;
    }
}
/**
 * 调试工具类
 * new tubao.deBug.huanDong();
 * new tubao.deBug.secondNewObject()
 */
declare namespace tubao.deBug {
    /**
     * 每秒创建的对象数量
     */
    class secondNewObject {
        objectNum: number[];
        constructor();
    }
    class huanDong {
        huan: egret.Ease[];
        huanString: any[];
        constructor();
    }
}
/**
 * 兔宝富文本
 */
declare namespace tubao.fields {
    /**
     * 兔宝富文本
     */
    class RichTextField extends richTextFiledBase {
        /**表情管理 */
        private _emojiplugin;
        /** */
        private _emojisMcs;
        private _richText;
        private _matchWidth;
        /**
         * 兔宝富文本
         * @param {EmojiPlugin} emogi 文本管理插件
         */
        constructor(emoji: EmojiPlugin);
        text: string;
        textFlow: egret.ITextElement[];
        private clearEmojis();
        private updateEmojis();
    }
}
declare namespace tubao {
    /**
     * 时间日期工具
     */
    class date {
        /**
         * 根据秒数格式化字符串
         * @param second 秒数
         * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00(分:秒)   4:xx天前，xx小时前，xx分钟前    6:00:00(时:分)
         * @return
         *
         */
        static getFormatBySecond(second: number, type?: number): string;
        private static getFormatBySecond1(t?);
        private static getFormatBySecond3(t?);
        private static getFormatBySecond2(time);
        private static getFormatBySecond4(time);
        private static getFormatBySecond5(time);
        private static getFormatBySecond6(t?);
        /**
         * 获取当前是周几
         * ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
         */
        static getDay(timestamp: number): number;
        /**
         * 判定两个时间是否是同一天
         */
        static isSameDate(timestamp1: number, timestamp2: number): boolean;
        /**
         * 日期格式化
         */
        static format(d: Date, fmt?: string): string;
        /**
         * 计算两个时间相差天数
         */
        static dateDifference(timestamp1: number, timestamp2: number): number;
    }
}
declare namespace tubao.layer {
    /**
     * 游戏层级类
     */
    class LayerManager {
        /**
         * 游戏背景层
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static Game_Bg: layer;
        /**
         * 主游戏层
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static Game_Main: layer;
        /**
         * UI主界面上
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_MainUp: layer;
        /**
         * UI主界面下
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_MainDown: layer;
        /**
         * UI主界面右
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_MainReght: layer;
        /**
         * 功能面板弹出框层
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_Popup: layer;
        /**
         * UI提示弹出层
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_Message: layer;
        /**
         * UI提示，获得物品展示消息
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_GetMessage: layer;
        /**
         * 任务流程面板
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_Talk: layer;
        /**
         * 游戏主加载界面
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_Loading: layer;
        /**
         * 游戏主开始界面层
         * @type {tubao.baseScene.BaseEuiLayer}
         */
        static UI_playGame: layer;
    }
}
declare namespace tubao.layer {
    /**
     * 层级场景基类
     */
    class scene {
        /**当前所有Layer，显示列表数组 */
        private _layers;
        /**
         * 进入Scene调用
         */
        onEnter(...param: any[]): void;
        /**
         * 退出Scene调用
         */
        onExit(): void;
        /**
         * 添加一个Layer到舞台
         * @param {egret.DisplayObjectContainer} layer 显示对象
         */
        addLayer(layer: egret.DisplayObjectContainer): void;
        /**
         * 添加一个Layer到舞台特定位置
         * @param {egret.DisplayObjectContainer} layer 显示对象
         * @param {number} index 位置
         */
        addLayerAt(layer: egret.DisplayObjectContainer, index: number): void;
        /**
         * 在舞台移除一个Layer
         * @param {egret.DisplayObjectContainer} layer 显示对象
         */
        removeLayer(layer: egret.DisplayObjectContainer): void;
        /**
         * Layer中移除所有
         * @param {egret.DisplayObjectContainer} layer 显示对象
         */
        layerRemoveAllChild(layer: egret.DisplayObjectContainer): void;
        /**
         * 移除所有Layer
         */
        removeAllLayer(): void;
    }
}
/**
 * 层级系统 layer->scene->manager
 */
declare namespace tubao.layer {
    /**
     * 场景管理类
     */
    class sceneManager {
        /**场景列表 */
        private static _scenes;
        /**当前场景id */
        private static _currScene;
        /**
         * 清空处理
         */
        static clear(): void;
        /**
         * 注册场景
         * @param {number} key 场景唯一标识
         * @param {BaseScene} scene 场景对象
         */
        static register(key: number, scene: scene): void;
        /**
         * 切换场景
         * @param {number} key 场景id
         */
        static runScene(key: number, ...param: any[]): void;
        /**
         * 获取当前场景id
         * @returns {number}
         */
        static getCurrScene(): number;
    }
}
/**
 * cookie操作类
 */
declare namespace tubao.cookie {
    /**游戏的数据库标记 */
    var label: string;
    /**
     * 特殊数据值操作存入前端数字数据，如果第二个参数存在就写入，不存在就查询
     * @param value 查询的数据列表索引
     * @param Str 写入的数据
     *
     */
    function LocalStorageNum(Str0: string, Str1?: number): number;
    /**
     * 获取localStorage缓存数据
     * @param {string} key 值对
     * @return {string} 这个key对应的值
     */
    function getLocal(key: string): string;
    /**
     * 设置localStorage缓存数据
     * @param {string} key 值对
     * @return {string} 这个key对应的值
     */
    function setLocal(key: string, value: string): boolean;
    /**
     * cookie操作，设置一个cookie
     * @param cname 设置cookie的id
     * @param cvalue 设置cookie的值
     * @param exdays 设置cookie在几分钟后失效
     */
    function setCookie(cname: any, cvalue: any, exdays: number): void;
    /**
     * cookie操作，删除一个cookie
     * @param cname 设置cookie的id
     * @param cvalue 设置cookie的值
     * @param exdays 设置cookie在几分钟后失效
     */
    function delCookie(cname: any): void;
    /**
     * 查询一个cookie的值，不存在返回false
     * @param {string} cname cookie名
    */
    function getCookie(cname: string): string | false;
    /**
     * 查询一个cookie的值，不存在返回false
     * @param {string} cname cookie名
    */
    function getCookieNum(cname: string): string | number;
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 15-1-14.
     * 背景音乐类
     */
    class bg extends BaseSound implements ISoundBg {
        private _currBg;
        private _currSound;
        private _currSoundChannel;
        private _volume;
        private _pausePosition;
        /**
         * 构造函数
         */
        constructor();
        /**
         * 停止当前音乐
         */
        stop(): void;
        /**
         * 播放某个音乐
         * @param effectName
         */
        play(effectName: string): void;
        /**
         * 暂停
         * 请尽量避免使用，不可和其他api能力混用，且在运行时仅可运行一次
         */
        pause(): void;
        /**
         * 恢复
         * 请尽量避免使用，不可和其他api能力混用，且在运行时仅可运行一次
         */
        resume(): void;
        /**
         * 播放
         * @param sound
         */
        private playSound(sound);
        /**
         * 设置音量
         * @param volume
         */
        setVolume(volume: number): void;
        /**
         * 资源加载完成后处理播放
         * @param key
         */
        loadedPlay(key: string): void;
        /**
         * 检测一个文件是否要清除
         * @param key
         * @returns {boolean}
         */
        checkCanClear(key: string): boolean;
    }
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 18-12-26.
     * 音效类(微信小游戏专用)
     */
    class bgWx implements ISoundBg {
        private _currBg;
        private _volume;
        private _audio;
        /**
         * 构造函数
         */
        constructor();
        /**
         * 停止当前音乐
         */
        stop(): void;
        /**
         * 播放某个音乐
         * @param bgName
         */
        play(bgName: string): void;
        /**
         * 暂停
         */
        pause(): void;
        /**
         * 恢复
         */
        resume(): void;
        /**
         * 设置音量
         * @param volume
         */
        setVolume(volume: number): void;
    }
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 15-1-14.
     * 音效类
     */
    class effect extends BaseSound implements ISoundEffect {
        private _volume;
        private _soundLoops;
        private _soundChannels;
        /**
         * 构造函数
         */
        constructor();
        /**
         * 播放一个音效
         * @param effectName
         */
        play(effectName: string, loops: number): void;
        /**
         * 播放
         * @param sound
         */
        private playSound(effectName, sound, loops);
        /**
         * 播放完成
         */
        private onPlayComplete(e);
        /**
         * 销毁channel
         */
        private destroyChannel(channel);
        /**
         * 播放一个音效
         * @param effectName
         */
        stop(effectName: string): void;
        /**
         * 设置音量
         * @param volume
         */
        setVolume(volume: number): void;
        /**
         * 资源加载完成后处理播放
         * @param key
         */
        loadedPlay(key: string): void;
    }
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 18-11-21.
     * 音效类(微信小游戏专用)
     */
    class effectWx implements ISoundEffect {
        private _wx;
        private _volume;
        private _cache;
        /**
         * 构造函数
         */
        constructor();
        /**
         * 处理音乐文件的清理
         */
        private dealSoundTimer();
        /**
         * 检测一个文件是否要清除
         * @param key
         * @returns {boolean}
         */
        private checkCanClear(key);
        /**
         * 获取Sound
         * @param effectName
         * @returns {InnerAudioContext}
         */
        private getAudio(effectName);
        /**
         * 播放一个音效
         * @param effectName
         */
        play(effectName: string, loops: number): void;
        /**
         * 播放一个音效
         * @param effectName
         */
        stop(effectName: string): void;
        /**
         * 设置音量
         * @param volume
         */
        setVolume(volume: number): void;
    }
}
declare namespace tubao.sound {
    interface ISoundBg {
        play(bgName: string): void;
        stop(): void;
        setVolume(volume: number): void;
        pause(): any;
        resume(): any;
    }
}
declare namespace tubao.sound {
    interface ISoundEffect {
        play(effectName: string, loops: number): void;
        stop(effectName: string): void;
        setVolume(volume: number): void;
    }
}
declare namespace tubao.sound {
    /**
     * Created by yangsong on 15-1-14.
     * Sound管理类
     */
    class manager {
        /**
         * 音乐文件清理时间
         * @type {number}
         */
        static CLEAR_TIME: number;
        private static LocalStorageKey_Bg;
        private static LocalStorageKey_Effect;
        private static effect;
        private static bg;
        private static effectOn;
        private static bgOn;
        private static currBg;
        private static bgVolume;
        private static effectVolume;
        /**
         * 构造函数
         */
        static init(): void;
        /**
         * 设置背景音乐和音效的默认开关状态
         */
        private static setDefaultSwitchState();
        /**
         * 播放音效
         * @param effectName
         */
        static playEffect(effectName: string, loops?: number): void;
        /**
         * 停止音效播放
         * @param effectName
         */
        static stopEffect(effectName: string): void;
        /**
         * 播放背景音乐
         * @param key
         */
        static playBg(bgName: string): void;
        /**
         * 停止背景音乐
         */
        static stopBg(): void;
        /**
         * 暂停背景音乐
         */
        static pauseBg(): void;
        /**
         * 恢复背景音乐
         */
        static resumeBg(): void;
        /**
         * 设置音效是否开启
         * @param $isOn
         */
        static setEffectOn($isOn: boolean): void;
        /**
         * 设置背景音乐是否开启
         * @param $isOn
         */
        static setBgOn($isOn: boolean): void;
        /**
         * 设置背景音乐音量
         * @param volume
         */
        static setBgVolume(volume: number): void;
        /**
         * 获取背景音乐音量
         * @returns {number}
         */
        static getBgVolume(): number;
        /**
         * 设置音效音量
         * @param volume
         */
        static setEffectVolume(volume: number): void;
        /**
         * 获取音效音量
         * @returns {number}
         */
        static getEffectVolume(): number;
        /**
         * 背景音乐是否已开启
         * @returns {boolean}
         */
        static readonly bgIsOn: boolean;
        /**
         * 音效是否已开启
         * @returns {boolean}
         */
        static readonly effectIsOn: boolean;
    }
}
declare module tubao.utils {
    /**
     * 注册后点击就可以移动面板到最上层
     * @param {egret.DisplayObject} dis 想要移动位置的显示对象
     */
    function disPlayUpTop(dis: egret.DisplayObject): void;
    /**
     * 显示对象临时定位
     * @param {egret.DisplayObject} dis 显示对象
     */
    function displayMomentPoix(dis: egret.DisplayObject): void;
}
declare module tubao.utils {
    /**
     * 播放tween动画，支持了循环播放tween
     * @param {egret.tween.TweenGroup} target 动画组
     * @param {boolean} isLoop 是否循环
     */
    function playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void;
}
declare module tubao.utils {
    /**
     * 验证式触发，验证按下点是否是抬起点
     * @param {any} thisObject 对象和应用作用域
     * @param {egret.disPlayObject} click 点击物品
     * @param {any} triggerFun 触发函数
     */
    function verTrigger(thisObject: any, click: egret.DisplayObject, triggerFun: Function): void;
}
declare module tubao.utils {
    /**
     * 指定对象为真运行函数否则一直等待功能块
     * @param {any} detection 检测对象
     * @param {any} thisObject 作用域
     * @param {Function} Fun 运行函数
     */
    function wait(detection: any, thisObject: any, Fun: Function): void;
}
declare namespace tubao.video {
    /**
     * 兔宝世界视频播放
     */
    class video extends tubao.base.panel {
        /**是否显示特效 */
        videoBuffer: boolean;
        private videoGroup;
        private vname;
        private video;
        private inPlay;
        tiaoguo: eui.Image;
        constructor();
        /**
         * 视频加载完成
         */
        private lodingEnd();
        /**
         * 视频播放完成
         */
        private videoPlayOver();
        /**
         * 添加一个视频
         * @param {string} name 视频名字文字
         */
        addOneVideo(name: string): void;
        /**
         * 播放开始
         */
        bofangKaiShi(): void;
        /**
         * 播放完成
         */
        bofangWanCheng(): void;
    }
}
declare namespace tubao.video {
    /**
     * 视频事件类
     */
    class videoEvent extends egret.Event {
        /**视频播放开始 */
        static videoPlay: string;
        /**视频播放结束 */
        static videoEnd: string;
        name: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
