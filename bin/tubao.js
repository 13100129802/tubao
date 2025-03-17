var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 面板基础类，提供面板窗口实现逻辑
         */
        var panel = (function (_super) {
            __extends(panel, _super);
            /**
             * 面板基础类，提供面板窗口的实现逻辑，其中包括面板窗宽一直与窗口大小保持一致，接收层存放位置和添加关闭面板的功能
             * @param {tubao.baseScene.BaseEuiLayer} layer 层位置指定，面板显示对象的添加存在显示的位置
             */
            function panel(layer) {
                var _this = _super.call(this) || this;
                /**面板存放的层 */
                _this.uiLayer = undefined;
                /**面板已经打开了 */
                _this.onOpen = false;
                /**是否打开过面板 */
                _this.openPanelState = false;
                _this.percentHeight = 100;
                _this.percentWidth = 100;
                _this.uiLayer = layer;
                return _this;
                //设置ui层
            }
            /**
             * 初始化面板
             */
            panel.prototype.initPanel = function () {
            };
            /**
             * 添加面板到显示列表
             */
            panel.prototype.open = function () {
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i] = arguments[_i];
                }
                if (this.uiLayer) {
                    egret.Tween.removeTweens(this);
                    //清空全部tween动画对象
                    this.alpha = 1;
                    this.scaleX = 1;
                    this.scaleY = 1;
                    this.uiLayer.addChild(this);
                    //添加到显示列表
                    tubao.Effect.Popup.Resuit(this, 1);
                    this.onOpen = true;
                    if (!this.openPanelState) {
                        this.initPanel();
                    }
                    this.openPanelState = true;
                }
            };
            /**
             * 关闭面板
             */
            panel.prototype.close = function () {
                var _this = this;
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i] = arguments[_i];
                }
                if (this.uiLayer && this.onOpen) {
                    egret.Tween.removeTweens(this);
                    //清空全部tween动画对象
                    this.onOpen = false;
                    //修改状态为关闭
                    egret.Tween.get(this).to({ alpha: 0, scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.backOut)
                        .call(function () {
                        _this.uiLayer.removeChild(_this);
                        //将自己在显示列表移除
                    }, this);
                }
            };
            return panel;
        }(eui.Component));
        base.panel = panel;
        __reflect(panel.prototype, "tubao.base.panel");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
/**
 * 兔宝玩家编辑器
 */
var tubao;
(function (tubao) {
    var editor;
    (function (editor) {
        /**
         * 兔宝玩家显示对象编辑组件基础底层
         */
        var tubaoDisplayObjectEditorBase = (function (_super) {
            __extends(tubaoDisplayObjectEditorBase, _super);
            /**
             * 兔宝玩家显示对象编辑组件
             */
            function tubaoDisplayObjectEditorBase() {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                _this.skinName = "tubaoDisplayObjectEditorSkin";
                //皮肤
                tubao.utils.dragDisplauy(_this.panel, _this.gro, _this.closeBtn);
                //拖动功能
                _this.zuoBiaoX.type = egret.TextFieldType.INPUT;
                _this.zuoBiaoY.type = egret.TextFieldType.INPUT;
                //设置为输入文本
                _this.zuoBiaoX.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.zuoBiaoXfocusOut, _this);
                _this.zuoBiaoY.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.zuoBiaoYfocusOut, _this);
                //监听文本失去焦点
                _this.maoDianX.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.maoDianXfocusOut, _this);
                _this.maoDianY.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.maoDianYfocusOut, _this);
                //监听锚点文本失去焦点
                _this.alphaHslider.addEventListener(egret.Event.CHANGE, _this.alphaHsliderChange, _this);
                //监听滑动条状态改变透明度滑动条
                _this.rotationHslider.addEventListener(egret.Event.CHANGE, _this.rotationHsliderChange, _this);
                //监听滑动条状态改变旋转滑动条
                _this.scaleHslider.addEventListener(egret.Event.CHANGE, _this.scaleHsliderChange, _this);
                //监听滑动条状态改变缩放滑动条
                _this.visibleSelect.addEventListener(egret.Event.CHANGE, _this.visibleSelectClick, _this);
                //是否显示选择器
                _this.maodian = new eui.Image();
                _this.maodian.source = "tubaoDisplayObjectEditorPanel_13_png";
                _this.maodian.anchorOffsetX = 9;
                _this.maodian.anchorOffsetY = 9;
                tubao.utils.dragDisplauy(_this.maodian);
                _this.maodian.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.maodianMove, _this);
                return _this;
                //初始化锚点定位点和监听移动
            }
            /**
             * 解析显示对象
             */
            tubaoDisplayObjectEditorBase.prototype.analyDisplay = function () {
                if (this.verDisplay())
                    return;
                this.zuoBiaoX.text = String(this.display.x);
                this.zuoBiaoY.text = String(this.display.y);
                //坐标定位
                this.maoDianX.text = String(this.display.anchorOffsetX);
                this.maoDianY.text = String(this.display.anchorOffsetY);
                //锚点定位
                this.display.parent.addChild(this.maodian);
                this.maodian.x = this.display.x;
                this.maodian.y = this.display.y;
                //锚点图形坐标定位,添加显示列表
                this.alphaHslider.value = editor.tran.alphaH(this.display.alpha);
                //透明度
                this.rotationHslider.value = editor.tran.rotationH(this.display.rotation);
                //旋转角度
                this.scaleHslider.value = editor.tran.scaleH(this.display.scaleX);
                //缩放
                this.visibleSelect.selected = editor.tran.visible(this.display, this.display.visible);
                //是否显示
                tubao.utils.dragDisplauy(this.display);
                //拖动功能
                this.display.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.displayMove, this);
                //监听移动
            };
            /**
             * 还原函数
             */
            tubaoDisplayObjectEditorBase.prototype.huanYuanFun = function () {
                this.alphaHslider.value = editor.tran.alphaH(1);
                //透明度
                this.rotationHslider.value = editor.tran.rotationH(0);
                //旋转角度
                this.scaleHslider.value = editor.tran.scaleH(1);
                //缩放
                this.visibleSelect.selected = editor.tran.visible(this.display, true);
                //是否显示
            };
            /**
             * 显示对象移动了
             */
            tubaoDisplayObjectEditorBase.prototype.maodianMove = function (e) {
                this.maoDianX.text = String(this.display.anchorOffsetX);
                this.maoDianY.text = String(this.display.anchorOffsetY);
                this.display.anchorOffsetX = this.maodian.x - this.display.x;
                this.display.anchorOffsetY = this.maodian.y - this.display.y;
                //            this.display.anchorOffsetX = this.maodian.x - this.display.x
                //this.display.anchorOffsetY = this.maodian.y - this.display.y
            };
            /**
             * 显示对象移动了
             */
            tubaoDisplayObjectEditorBase.prototype.displayMove = function (e) {
                this.zuoBiaoX.text = String(this.display.x);
                this.zuoBiaoY.text = String(this.display.y);
                this.maodian.x = this.display.x;
                this.maodian.y = this.display.y;
                //锚点图形坐标定位,添加显示列表
            };
            tubaoDisplayObjectEditorBase.prototype.visibleSelectClick = function () {
                if (this.verDisplay())
                    return;
                this.display.visible = editor.tran.visible(this.display, this.visibleSelect.selected);
            };
            /**
             * 监听滑动条状态改变透明度滑动条
             */
            tubaoDisplayObjectEditorBase.prototype.alphaHsliderChange = function (e) {
                if (this.verDisplay())
                    return;
                this.display.alpha = editor.tran.alphaP(this.alphaHslider.value);
            };
            /**
             * 监听滑动条状态改变旋转滑动条
             */
            tubaoDisplayObjectEditorBase.prototype.rotationHsliderChange = function (e) {
                if (this.verDisplay())
                    return;
                this.display.rotation = editor.tran.rotationP(this.rotationHslider.value);
            };
            /**
             * 监听滑动条状态改变缩放滑动条
             */
            tubaoDisplayObjectEditorBase.prototype.scaleHsliderChange = function (e) {
                if (this.verDisplay())
                    return;
                this.display.scaleX = editor.tran.scaleP(this.scaleHslider.value);
                this.display.scaleY = editor.tran.scaleP(this.scaleHslider.value);
            };
            /**
             * 锚点x失去焦点的时候
             */
            tubaoDisplayObjectEditorBase.prototype.maoDianXfocusOut = function () {
                if (this.verDisplay())
                    return;
                this.display.anchorOffsetX = Number(this.maoDianX.text) != NaN ? Number(this.maoDianX.text) : 0;
            };
            /**
             * 锚点y失去焦点的时候
             */
            tubaoDisplayObjectEditorBase.prototype.maoDianYfocusOut = function () {
                if (this.verDisplay())
                    return;
                this.display.anchorOffsetY = Number(this.maoDianY.text) != NaN ? Number(this.maoDianY.text) : 0;
            };
            /**
             * 坐标x失去焦点的时候
             */
            tubaoDisplayObjectEditorBase.prototype.zuoBiaoXfocusOut = function () {
                if (this.verDisplay())
                    return;
                this.display.x = Number(this.zuoBiaoX.text) != NaN ? Number(this.zuoBiaoX.text) : 0;
            };
            /**
             * 坐标y失去焦点的时候
             */
            tubaoDisplayObjectEditorBase.prototype.zuoBiaoYfocusOut = function () {
                if (this.verDisplay())
                    return;
                this.display.y = Number(this.zuoBiaoY.text) != NaN ? Number(this.zuoBiaoY.text) : 0;
            };
            /**
             * 验证显示对象
             * @return {boolean} 没问题true，有问题false
             */
            tubaoDisplayObjectEditorBase.prototype.verDisplay = function () {
                if (!this.display) {
                    new tubao.base.popup("basics01_png", "并没有足够指定要被解析的显示对象~");
                    return true;
                }
                return false;
            };
            return tubaoDisplayObjectEditorBase;
        }(tubao.base.panel));
        editor.tubaoDisplayObjectEditorBase = tubaoDisplayObjectEditorBase;
        __reflect(tubaoDisplayObjectEditorBase.prototype, "tubao.editor.tubaoDisplayObjectEditorBase");
    })(editor = tubao.editor || (tubao.editor = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound_1) {
        /**
         * Created by yangsong on 15-1-14.
         * Sound基类
         */
        var BaseSound = (function () {
            /**
             * 构造函数
             */
            function BaseSound() {
                var _this = this;
                this._cache = {};
                this._loadingCache = new Array();
                setInterval(function () { _this.dealSoundTimer(); }, 1 * 60 * 1000);
            }
            /**
             * 处理音乐文件的清理
             */
            BaseSound.prototype.dealSoundTimer = function () {
                var currTime = egret.getTimer();
                var keys = Object.keys(this._cache);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    if (!this.checkCanClear(key))
                        continue;
                    if (currTime - this._cache[key] >= sound_1.manager.CLEAR_TIME) {
                        //console.log(key + "已clear")
                        delete this._cache[key];
                        RES.destroyRes(key);
                    }
                }
            };
            /**
             * 获取Sound
             * @param key
             * @returns {egret.Sound}
             */
            BaseSound.prototype.getSound = function (key) {
                var sound = RES.getRes(key);
                if (sound) {
                    if (this._cache[key]) {
                        this._cache[key] = egret.getTimer();
                    }
                }
                else {
                    if (this._loadingCache.indexOf(key) != -1) {
                        return null;
                    }
                    this._loadingCache.push(key);
                    RES.getResAsync(key, this.onResourceLoadComplete, this);
                }
                return sound;
            };
            /**
             * 资源加载完成
             * @param event
             */
            BaseSound.prototype.onResourceLoadComplete = function (data, key) {
                var index = this._loadingCache.indexOf(key);
                if (index != -1) {
                    this._loadingCache.splice(index, 1);
                    this._cache[key] = egret.getTimer();
                    this.loadedPlay(key);
                }
            };
            /**
             * 资源加载完成后处理播放，子类重写
             * @param key
             */
            BaseSound.prototype.loadedPlay = function (key) {
            };
            /**
             * 检测一个文件是否要清除，子类重写
             * @param key
             * @returns {boolean}
             */
            BaseSound.prototype.checkCanClear = function (key) {
                return true;
            };
            return BaseSound;
        }());
        sound_1.BaseSound = BaseSound;
        __reflect(BaseSound.prototype, "tubao.sound.BaseSound");
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var layer;
    (function (layer_1) {
        /**
         * EUI层
         */
        var layer = (function (_super) {
            __extends(layer, _super);
            //UILayer 是 Group 的子类，它除了具有容器的所有标准功能，还能够自动保持自身尺寸始终与舞台尺寸相同
            function layer() {
                var _this = _super.call(this) || this;
                _this.percentWidth = 100;
                //相对父级容器宽度的百分比
                _this.percentHeight = 100;
                //相对父级容器高度的百分比
                _this.touchEnabled = true;
                //接收用户操作，比如触屏点击等等
                _this.touchThrough = true;
                return _this;
                //允许点击穿透
            }
            return layer;
        }(eui.UILayer));
        layer_1.layer = layer;
        __reflect(layer.prototype, "tubao.layer.layer");
    })(layer = tubao.layer || (tubao.layer = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var fields;
    (function (fields) {
        /**
         * 兔宝富文本包装器
         */
        var richTextFiledBase = (function (_super) {
            __extends(richTextFiledBase, _super);
            /**
             * 兔宝富文本基础
             * @param {EmojiPlugin} emogi 文本管理插件
             */
            function richTextFiledBase() {
                var _this = _super.call(this) || this;
                /**文本 */
                _this._textfiled = new egret.TextField();
                _this.addChild(_this._textfiled);
                return _this;
                //添加文本到显示列表
            }
            Object.defineProperty(richTextFiledBase.prototype, "text", {
                get: function () {
                    return this._textfiled.text;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "twidth", {
                get: function () {
                    return this._textfiled.width;
                },
                set: function (value) {
                    this._textfiled.width = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "theight", {
                get: function () {
                    return this._textfiled.height;
                },
                set: function (value) {
                    this._textfiled.height = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "textWidth", {
                get: function () {
                    return this._textfiled.textWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "textHeight", {
                get: function () {
                    return this._textfiled.textHeight;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "textFlow", {
                get: function () {
                    return this._textfiled.textFlow;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "textAlign", {
                get: function () {
                    return this._textfiled.textAlign;
                },
                set: function (value) {
                    this._textfiled.textAlign = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "size", {
                get: function () {
                    return this._textfiled.size;
                },
                set: function (value) {
                    this._textfiled.size = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "textColor", {
                get: function () {
                    return this._textfiled.textColor;
                },
                set: function (value) {
                    this._textfiled.textColor = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "stroke", {
                get: function () {
                    return this._textfiled.stroke;
                },
                set: function (value) {
                    this._textfiled.stroke = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "strokeColor", {
                get: function () {
                    return this._textfiled.strokeColor;
                },
                set: function (value) {
                    this._textfiled.strokeColor = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "lineSpacing", {
                get: function () {
                    return this._textfiled.lineSpacing;
                },
                set: function (value) {
                    this._textfiled.lineSpacing = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "bold", {
                get: function () {
                    return this._textfiled.bold;
                },
                set: function (value) {
                    this._textfiled.bold = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "italic", {
                get: function () {
                    return this._textfiled.italic;
                },
                set: function (value) {
                    this._textfiled.italic = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(richTextFiledBase.prototype, "fontFamily", {
                get: function () {
                    return this._textfiled.fontFamily;
                },
                set: function (value) {
                    this._textfiled.fontFamily = value;
                },
                enumerable: true,
                configurable: true
            });
            return richTextFiledBase;
        }(egret.DisplayObjectContainer));
        fields.richTextFiledBase = richTextFiledBase;
        __reflect(richTextFiledBase.prototype, "tubao.fields.richTextFiledBase");
    })(fields = tubao.fields || (tubao.fields = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var paint;
    (function (paint_1) {
        /**
         * 绘画工具箱
         */
        var paint = (function (_super) {
            __extends(paint, _super);
            /**
             * 绘画
             * @param {egret.Bitmap} bmp 要写到像素的位图
             * @param
             */
            function paint() {
                var _this = _super.call(this) || this;
                /**容器1：存放笔刷绘画内容显示列表 */
                _this.vessel1 = new eui.Group();
                /**容器2：存放位图1，2，3内容结果 */
                _this.vessel2 = new eui.Group();
                /**位图1：塌缩容器1绘画内容 */
                _this.bitmap1 = new eui.Image();
                /**位图2：指定遮罩位图数据 */
                _this.bitmap2 = new eui.Image();
                /**位图3：全部绘画结果叠加 */
                _this.bitmap3 = new eui.Image();
                /**是否按下 */
                _this.isDown = false;
                _this.skinName = 'paintSkin';
                //皮肤
                //初始化画笔配置
                _this.arg = {
                    brushAlpha: 0.6,
                    color: 0xff0000,
                    size: 30,
                    blurX: 0.3,
                    blurY: 0.3,
                    bitmap: null,
                    brush: paint_1.brush.sprite,
                    brushArg: { cmd: 1, width: 1, height: 2, bitmap: 'head_png' }
                };
                _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegin, _this);
                //按下
                _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEend, _this);
                return _this;
                //抬起
            }
            /**
             * 按下
             */
            paint.prototype.onTouchBegin = function (e) {
                this.beginTouch(e.stageX, e.stageY);
            };
            /**
             * 按下
             */
            paint.prototype.beginTouch = function (stageX, stageY) {
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                //移动
                this.isDown = true;
                this.oldX = stageX;
                this.oldY = stageY;
                //设置结束点
                this.blurFliter = new egret.BlurFilter(this.arg.blurX * this.arg.size, this.arg.blurY * this.arg.size);
                //设置模糊量
                this.vessel0.filters = [this.blurFliter];
                //设置滤镜
                if (this.arg.bitmap) {
                    //启用的bitmap纹理
                    this.bitmap2.source = this.arg.bitmap;
                    //设置皮肤纹理资源
                    this.bitmap2.mask = this.bitmap1;
                    //设置遮罩
                    this.bitmap2.visible = true;
                    //显示遮罩图片
                }
                else {
                    //关闭bitmap纹理
                    this.bitmap2.mask = null;
                    //设置遮罩
                    this.bitmap2.visible = false;
                    //隐藏遮罩图片
                }
            };
            /**
             * 抬起
             */
            paint.prototype.onTouchEend = function (e) {
                this.touchEnd();
            };
            /**
             * 抬起画笔
             */
            paint.prototype.touchEnd = function () {
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this.bitmap2);
                this.isDown = false;
                this.oldX = null;
            };
            /**
             * 移动
             */
            paint.prototype.onTouchMove = function (e) {
                this.moveTouch(e.stageX, e.stageY);
            };
            /**
             * 移动
             */
            paint.prototype.moveTouch = function (stageX, stageY) {
                //if (!this.isDown) return;
                //没有按下
                //if (this.oldX == null) return;
                //没有初始化结束点
                var disX = stageX - this.oldX;
                //舞台宽度-结束点宽度位置=路程x
                var disY = stageY - this.oldY;
                //舞台高度-结束点高度位置=路程y
                var dis = Math.sqrt(disX * disX + disY * disY);
                //勾股定理求长度
                var count = dis * this.arg.brushAlpha;
                //长度*比例点为定义多少个点，细节度
                for (var i = 0; i < count; i++) {
                    var x = (disX / count) * (i + 1) + this.oldX;
                    var y = (disY / count) * (i + 1) + this.oldY;
                    //定位
                    this.vessel0.addChild(this.move(x, y, this.arg.brush));
                    //添加到显示列表
                }
                this.oldX = stageX;
                //设置结束点位置x
                this.oldY = stageY;
                //设置结束点位置y
                var texture1 = this.getTexture(0, 0, this.width, this.height, this.vessel1);
                //创建纹理：笔刷绘画列表纹理
                this.bitmap1.texture = texture1;
                //更新塌缩笔刷纹理
                var texture3 = this.getTexture(0, 0, this.width, this.height, this.vessel2);
                //创建纹理：整体绘画内容纹理
                this.bitmap3.texture = texture3;
                //更新绘画叠加
                this.clearmc(this.vessel0);
                //删除绘画的所有笔刷点
            };
            /**
             * 移动画笔
             * @param {number} x 位置x
             * @param {number} y 位置y
             * @param {any} type 构建的画笔类型
             */
            paint.prototype.move = function (x, y, type) {
                var brush = paint_1.getBrush(type);
                //创建实例
                brush.init(this.arg);
                //初始化
                brush.x = x;
                brush.y = y;
                brush.x -= brush.width / 2;
                brush.y -= brush.height / 2;
                //定位
                return brush;
            };
            /**
             * 删除清理绘画的点
             * @param {egret.DisplayObjectContainer} display 显示列表容器
             * @return {gret.DisplayObjectContainer} 返回容器
             */
            paint.prototype.clearmc = function (display) {
                while (display.numChildren > 0) {
                    display.removeChildAt(0);
                }
                return display;
            };
            /**
             * 制作获得纹理
             * @param {number} bitmapX 位图的位置x
             * @param {number} bitmapY 位图的位置y
             * @param {number} width 位图的宽度
             * @param {number} height 位图的高度
             * @param {egret.DisplayObject} display 截图的显示对象
             * @return {egret.RenderTexture} 返回显示纹理
             */
            paint.prototype.getTexture = function (bitmapX, bitmapY, width, height, display) {
                var texture = new egret.RenderTexture;
                var rec = new egret.Rectangle(bitmapX, bitmapY, width, height);
                texture.drawToTexture(display, rec);
                return texture;
            };
            return paint;
        }(eui.Component));
        paint_1.paint = paint;
        __reflect(paint.prototype, "tubao.paint.paint");
    })(paint = tubao.paint || (tubao.paint = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var DB;
    (function (DB) {
        /**
         * 龙骨功能基类-提供底层支持功能
         * 提供骨架，骨节，插槽的显示对象获取，活动状态的设置，操作对象的获取
         */
        var DBbasice = (function (_super) {
            __extends(DBbasice, _super);
            /**
             * 初始化龙骨工厂
             * @param {string} name 龙骨项目名字
             * @param {boolean} lodinYes 是否加载
             */
            function DBbasice(name, lodinYes) {
                if (lodinYes === void 0) { lodinYes = true; }
                var _this = _super.call(this) || this;
                /**龙骨项目所有骨架 */
                _this.skeleton = {};
                /**初始化完成 */
                _this.initYes = false;
                /**龙骨数据列表 */
                _this.dbDataList = {};
                //——————————————————————————————————————————————————————————翻转和播放速度操作————————————————————————————————————————————————————————————————————————————
                _this._flip = false;
                //——————————————————————————————————————————————————————————缩放和隐藏操作————————————————————————————————————————————————————————————————————————————
                _this._scale = undefined;
                _this.dbFactory = new dragonBones.EgretFactory();
                _this.dbFactory.clock.timeScale = 0.7;
                if (name && lodinYes)
                    _this.lodin(name);
                return _this;
            }
            /**
             * 替换当前项目插槽内容用外部项目的指定插槽
             * @param {string} dragonBonesName 外部项目名字，DragonBonesData 实例的缓存名称
             * @param {string} armatureName 骨架数据名称。
             * @param {string} slotName 插槽数据名称。
             * @param {string} displayName 显示对象数据名称。
             * @param {dragonBones.Slot} slot 指定的插槽
             * @param {number} displayIndex 被替换的显示对象数据的索引。 （如果未设置，则替换当前的显示对象数据）
             */
            DBbasice.prototype.thisDBSlotReplaceOutsideDBSlot = function (dragonBonesName, armatureName, slotName, displayName, slot, displayIndex) {
                var _this = this;
                if (slot) {
                    //插槽存在
                    if (slot.display) {
                        //显示对象存在
                        if (slot.display.texture) {
                            //纹理存在
                            slot.display.visible = false;
                            //隐藏图片，防止闪出几秒之前纹理
                        }
                    }
                }
                RES.getResAsync(dragonBonesName + "_ske_json", function (skeJson) {
                    //龙骨原始数据
                    RES.getResAsync(dragonBonesName + "_tex_json", function (texJson) {
                        //贴图数据
                        RES.getResAsync(dragonBonesName + "_tex_png", function (texPng) {
                            //贴图纹理
                            if (!_this.dbDataList[skeJson.name]) {
                                //没有加载完成的时候才需要写入缓存工厂中。
                                _this.dbDataList[skeJson.name] = true;
                                //记录为加载完成写入记录
                                _this.dbFactory.parseDragonBonesData(skeJson);
                                //将原始数据解析为 DragonBonesData 实例，并缓存到工厂中。
                                _this.dbFactory.parseTextureAtlasData(texJson, texPng);
                                //将原始贴图集数据和贴图集对象解析为 TextureAtlasData 实例，并缓存到工厂中。
                            }
                            _this.dbFactory.replaceSlotDisplay(dragonBonesName, armatureName, slotName, displayName, slot, displayIndex);
                            //用特定的显示对象数据替换特定插槽当前的显示对象数据。
                            slot['clothId'] = displayName;
                            //写入替换id
                            slot.display.name = slotName;
                            //设置显示对象名字，用于未来标记
                            _this.initYes = true;
                            //记录初始化完成
                            slot.display.visible = true;
                            //显示图片
                        }, _this);
                    }, _this);
                }, this);
            };
            /**
             * 资源加载
             * @param {string} name 龙骨项目名字
             */
            DBbasice.prototype.lodin = function (name) {
                var _this = this;
                RES.getResAsync(name + "_ske_json", function (skeJson) {
                    //龙骨原始数据
                    RES.getResAsync(name + "_tex_json", function (texJson) {
                        //贴图数据
                        RES.getResAsync(name + "_tex_png", function (texPng) {
                            //贴图纹理
                            _this.dbBonesData = _this.dbFactory.parseDragonBonesData(skeJson);
                            //龙骨数据解析，骨架数据
                            _this.dbtexureData = _this.dbFactory.parseTextureAtlasData(texJson, texPng);
                            //解析图集数据，图片纹理切图数据，图片纹理像素数据
                            _this.dbFactory.addDragonBonesData(_this.dbBonesData);
                            //添加龙骨数据到工厂
                            _this.dbFactory.addTextureAtlasData(_this.dbtexureData);
                            //解析的图集数据添加到工厂
                            //循环遍历全部骨骼
                            for (var a in _this.dbBonesData.armatureNames) {
                                var skeletonName = _this.dbBonesData.armatureNames[a];
                                //骨骼名字
                                _this.skeleton[skeletonName] = _this.dbFactory.buildArmature(skeletonName);
                                //创建骨架
                                _this.dbFactory.clock.add(_this.skeleton[skeletonName]);
                                //龙骨时间控制
                            }
                            _this.initYes = true;
                            //记录初始化完成
                            var daterEvent = new DB.dbEvent(DB.dbEvent.lodingOver);
                            _this.dispatchEvent(daterEvent);
                            //发送完成事件
                        }, _this);
                    }, _this);
                }, this);
            };
            //骨架缩放状态
            /**
             * 设置当前骨架是否翻转
             */
            DBbasice.prototype.flipSkeleton = function (skeletonName, type) {
                var skeleton = this.nameGetSkeleton(skeletonName).display;
                if (type) {
                    skeleton.scaleX = -Math.abs(skeleton.scaleX);
                }
                else {
                    skeleton.scaleX = Math.abs(skeleton.scaleX);
                }
            };
            Object.defineProperty(DBbasice.prototype, "flip", {
                /**
                 * 全部骨架翻转设置
                 * @param {boolean} type 是否翻转
                 */
                get: function () {
                    return this._flip;
                },
                /**
                 * 全部骨架翻转设置
                 * @param {boolean} type 是否翻转
                 */
                set: function (type) {
                    if (type) {
                        for (var a in this.skeleton) {
                            this.skeleton[a].display.scaleX = -Math.abs(this.skeleton[a].display.scaleX);
                        }
                    }
                    else {
                        for (var a in this.skeleton) {
                            this.skeleton[a].display.scaleX = Math.abs(this.skeleton[a].display.scaleX);
                        }
                    }
                    this._flip = type;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 设置当前骨骼的动画播放速度
             * @param skeletonName 骨架名字
             * @param speed 速度
             */
            DBbasice.prototype.speedSkeleton = function (skeletonName, speed) {
                var skeleton = this.nameGetSkeleton(skeletonName).animation;
                skeleton.timeScale = speed;
            };
            Object.defineProperty(DBbasice.prototype, "speed", {
                /**
                 * 设置全部骨骼播放速度
                 * @param speed 速度
                 */
                set: function (speed) {
                    for (var a in this.skeleton) {
                        this.skeleton[a].animation.timeScale = speed;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DBbasice.prototype, "scale", {
                //骨架缩放状态
                /**
                 * 全体骨架缩放
                 * @param num 缩放倍数
                 */
                get: function () {
                    return this._scale;
                },
                /**
                 * 全体骨架缩放
                 * @param num 缩放倍数
                 */
                set: function (num) {
                    for (var a in this.skeleton) {
                        this._scale = num;
                        this.scaleSetSkeletonName(a, num);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 根据名字进行骨架缩放
             * @param skeletonName 骨架名字
             */
            DBbasice.prototype.scaleSetSkeletonName = function (skeletonName, num) {
                var skeleton = this.nameGetSkeleton(skeletonName).display;
                if (skeleton.scaleX) {
                    skeleton.scaleX = num;
                }
                else {
                    skeleton.scaleX = -num;
                }
                if (skeleton.scaleY) {
                    skeleton.scaleY = num;
                }
                else {
                    skeleton.scaleY = -num;
                }
            };
            /**
             * 骨架显示隐藏
             * @param skeletonName 骨架名字
             * @param type 显示隐藏
             */
            DBbasice.prototype.skeletonVisible = function (skeletonName, type) {
                this.nameGetSkeleton(skeletonName).display.visible = type;
            };
            //——————————————————————————————————————————————————————————底层操作显示对象获取————————————————————————————————————————————————————————————————————————————
            /**
             * 根据名字获取到骨架显示对象
             * @param skeletonName 骨架名字
             */
            DBbasice.prototype.displaySkeleton = function (skeletonName) {
                var skeleton = this.nameGetSkeleton(skeletonName).display;
                //骨架显示对象
                return skeleton;
            };
            /**
             * 根据名字获取到插槽显示对象
             * @param skeletonName 骨架名字
             * @param slotName 插槽名字
             */
            DBbasice.prototype.displaySlot = function (skeletonName, slotName) {
                return this.nameGetSlot(skeletonName, slotName).display;
            };
            /**
             * 根据名字获取到骨节坐标系偏移变换
             * @param skeletonName 骨架名字
             * @param slotName 骨节名字
             */
            DBbasice.prototype.displayBone = function (skeletonName, boneName) {
                return this.nameGetBone(skeletonName, boneName).offset;
            };
            //——————————————————————————————————————————————————————————底层操作对象获取————————————————————————————————————————————————————————————————————————————
            /**
             * 根据名字获取插槽对象
             * @param skeletonName 骨架名字
             * @param slotName 插槽名字
             */
            DBbasice.prototype.nameGetSlot = function (skeletonName, slotName) {
                var skeleton = this.nameGetSkeleton(skeletonName);
                //获取到骨骼
                var slot = skeleton.getSlot(slotName);
                //获取到骨节
                if (!slot) {
                    //console.error(`${slotName}-插槽不存在于-${skeleton.name}-骨架上`);
                }
                return slot;
            };
            /**
             * 根据名字获取骨节对象
             * @param skeletonName 骨架名字
             * @param boneName 骨骼节点名字
             */
            DBbasice.prototype.nameGetBone = function (skeletonName, boneName) {
                var skeleton = this.nameGetSkeleton(skeletonName);
                //获取到骨骼
                var bone = skeleton.getBone(boneName);
                //获取到骨节
                if (!bone) {
                    console.log(boneName + "-\u9AA8\u8282\u4E0D\u5B58\u5728\u4E8E-" + skeleton.name + "-\u9AA8\u67B6\u4E0A");
                }
                return bone;
            };
            /**
             * 根据名字获取骨架对象
             * @param skeletonName 骨架名字
             */
            DBbasice.prototype.nameGetSkeleton = function (skeletonName) {
                if (this.skeleton[skeletonName] == undefined) {
                    if (this.dbBonesData) {
                        console.error(skeletonName + "-\u9AA8\u67B6\u4E0D\u5B58\u5728\u4E8E-" + this.dbBonesData.name + "-\u6570\u636E\u8282\u70B9\u4E0A");
                    }
                    else {
                        console.error(skeletonName + "-\u9AA8\u67B6\u4E0D\u5B58\u5728\u4E8E\u6570\u636E\u8282\u70B9\u4E0A");
                    }
                }
                return this.skeleton[skeletonName];
            };
            return DBbasice;
        }(eui.Component));
        DB.DBbasice = DBbasice;
        __reflect(DBbasice.prototype, "tubao.DB.DBbasice");
    })(DB = tubao.DB || (tubao.DB = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var utils;
    (function (utils) {
        /**
         * 让显示对象可以拖动
         * @param {egret.DisplayObject} display 显示对象
         * @param {egret.DisplayObject} arr 显示对象连带扩展
         */
        function dragDisplauy(display) {
            var arr = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                arr[_i - 1] = arguments[_i];
            }
            var _touchStatus = false;
            //当前触摸状态，按下时，值为true
            var _distance = new egret.Point();
            //鼠标点击时，鼠标全局坐标与_bird的位置差
            var disArr = [];
            var disArrX = []; //相对距离x
            var disArrY = []; //相对距离y
            //显示对象连带扩展
            disArr = arr;
            for (var a in arr) {
                disArr[a] = arr[a];
                //相对对象
                disArrX[a] = arr[a].x - display.x;
                //相对对象x,两个对象做差
                disArrY[a] = arr[a].y - display.y;
                //相对对象y,两个对象做差
            }
            display.addEventListener(egret.TouchEvent.TOUCH_BEGIN, mouseDown, this);
            //按下手指
            display.addEventListener(egret.TouchEvent.TOUCH_END, mouseUp, this);
            //抬起手指
            display.addEventListener(egret.Event.REMOVED, removed, this);
            //卸载在显示列表
            /**
             * 卸载时清除
             */
            function removed() {
                display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, mouseDown, this);
                //按下手指
                display.removeEventListener(egret.TouchEvent.TOUCH_END, mouseUp, this);
                //抬起手指
                display.removeEventListener(egret.Event.REMOVED, removed, this);
                //卸载在显示列表
            }
            /**
             * 按下手指
             */
            function mouseDown(evt) {
                _touchStatus = true;
                _distance.x = evt.stageX - display.x;
                _distance.y = evt.stageY - display.y;
                display.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, mouseMove, this);
            }
            /**
             * 滑动屏幕
             */
            function mouseMove(evt) {
                if (_touchStatus) {
                    display.x = evt.stageX - _distance.x;
                    display.y = evt.stageY - _distance.y;
                    for (var a in disArr) {
                        disArr[a].x = evt.stageX - _distance.x + disArrX[a];
                        disArr[a].y = evt.stageY - _distance.y + disArrY[a];
                    }
                }
            }
            /**
             * 抬起手指
             */
            function mouseUp(evt) {
                _touchStatus = false;
                display.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, mouseMove, this);
            }
        }
        utils.dragDisplauy = dragDisplauy;
        /**
         * 继承后显示对象可拖动
         */
        var drag = (function (_super) {
            __extends(drag, _super);
            //鼠标点击时，鼠标全局坐标与_bird的位置差
            function drag() {
                var _this = _super.call(this) || this;
                _this._touchStatus = false;
                //当前触摸状态，按下时，值为true
                _this._distance = new egret.Point();
                _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
                //按下手指
                _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.mouseUp, _this);
                //抬起手指
                _this.addEventListener(egret.Event.REMOVED, _this.removed, _this);
                return _this;
                //卸载在显示列表
            }
            /**
             * 卸载时清除
             */
            drag.prototype.removed = function () {
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                //按下手指
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                //抬起手指
                this.removeEventListener(egret.Event.REMOVED, this.removed, this);
                //卸载在显示列表
            };
            /**
             * 按下手指
             */
            drag.prototype.mouseDown = function (evt) {
                this._touchStatus = true;
                this._distance.x = evt.stageX - this.x;
                this._distance.y = evt.stageY - this.y;
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            };
            /**
             * 滑动屏幕
             */
            drag.prototype.mouseMove = function (evt) {
                if (this._touchStatus) {
                    this.x = evt.stageX - this._distance.x;
                    this.y = evt.stageY - this._distance.y;
                }
            };
            /**
             * 抬起手指
             */
            drag.prototype.mouseUp = function (evt) {
                this._touchStatus = false;
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            };
            return drag;
        }(eui.Component));
        utils.drag = drag;
        __reflect(drag.prototype, "tubao.utils.drag");
    })(utils = tubao.utils || (tubao.utils = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var Appli;
    (function (Appli) {
    })(Appli = tubao.Appli || (tubao.Appli = {}));
})(tubao || (tubao = {}));
/**
 * 闪光效果工具模块
 */
var tubao;
(function (tubao) {
    var Effect;
    (function (Effect) {
        var flash;
        (function (flash) {
            /**
             * 开始发光闪烁
             * @param obj
             */
            function startFlash(obj, flashColor, flashTime) {
                var glowFilter = obj["flashFilter"];
                if (!glowFilter) {
                    var color = flashColor; /// 光晕的颜色，十六进制，不包含透明度
                    var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
                    var blurX = 35; /// 水平模糊量。有效值为 0 到 255.0（浮点）
                    var blurY = 35; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
                    var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
                    var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
                    glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality);
                    obj.filters = [glowFilter];
                    obj["flashFilter"] = glowFilter;
                }
                egret.Tween.get(glowFilter)
                    .to({ "alpha": 0 }, flashTime)
                    .to({ "alpha": 1 }, flashTime)
                    .call(this.startFlash, this, [obj, flashColor, flashTime]);
            }
            flash.startFlash = startFlash;
            /**
             * 停止发光闪烁
             * @param obj
             */
            function stopFlash(obj) {
                var glowFilter = obj["flashFilter"];
                if (glowFilter) {
                    egret.Tween.removeTweens(glowFilter);
                    obj.filters = null;
                    delete obj["flashFilter"];
                }
            }
            flash.stopFlash = stopFlash;
            /**
             * 发光闪烁1次
             * @param obj
             */
            function startFlashOne(obj, flashColor, flashTime) {
                var glowFilter;
                var color = flashColor; /// 光晕的颜色，十六进制，不包含透明度
                var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
                var blurX = 35; /// 水平模糊量。有效值为 0 到 255.0（浮点）
                var blurY = 35; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
                var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
                var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
                glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality);
                obj.filters = [glowFilter];
                egret.Tween.get(glowFilter)
                    .to({ "alpha": 0 }, flashTime)
                    .to({ "alpha": 1 }, flashTime)
                    .to({ "alpha": 0 }, flashTime).call(function () {
                    egret.Tween.removeTweens(obj);
                });
            }
            flash.startFlashOne = startFlashOne;
        })(flash = Effect.flash || (Effect.flash = {}));
    })(Effect = tubao.Effect || (tubao.Effect = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var model;
    (function (model) {
        /**
         * 缩放模式设置
         * @param {number} val 值
          */
        function suoFang(val) {
            var stage = tubao.stage;
            //舞台
            switch (val) {
                case 1:
                    stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
                    break;
                case 2:
                    stage.scaleMode = egret.StageScaleMode.FIXED_NARROW;
                    break;
                case 3:
                    stage.scaleMode = egret.StageScaleMode.FIXED_WIDE;
                    break;
                case 4:
                    stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
                    break;
                case 5:
                    stage.scaleMode = egret.StageScaleMode.NO_BORDER;
                    break;
                case 6:
                    stage.scaleMode = egret.StageScaleMode.NO_SCALE;
                    break;
                case 7:
                    stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
                    break;
                case 8:
                    stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
                    break;
            }
        }
        model.suoFang = suoFang;
        /**
         * 旋转模式设置
         * @param {number} val 值
          */
        function xuanZuan(val) {
            var stage = tubao.stage;
            //舞台
            switch (val) {
                case 1:
                    stage.orientation = egret.OrientationMode.LANDSCAPE;
                    break;
                case 2:
                    stage.orientation = egret.OrientationMode.LANDSCAPE_FLIPPED;
                    break;
                case 3:
                    stage.orientation = egret.OrientationMode.PORTRAIT;
                    break;
                case 4:
                    stage.orientation = egret.OrientationMode.AUTO;
                    break;
            }
        }
        model.xuanZuan = xuanZuan;
    })(model = tubao.model || (tubao.model = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 带红点的按钮
     */
    var RedPioxyImg = (function (_super) {
        __extends(RedPioxyImg, _super);
        function RedPioxyImg() {
            var _this = _super.call(this) || this;
            var color = 0xFFFF00; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.5; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 20; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 20; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            _this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
            _this.Red = new eui.Image();
            _this.Red.source = "ltian_6_png";
            _this.addChild(_this.Red);
            _this.onOffRed(false);
            return _this;
        }
        /**
         * 红点开关
         */
        RedPioxyImg.prototype.onOffRed = function (type) {
            this.Red.visible = type;
            if (type) {
                this.glowFilter.alpha = 1;
                this.filters = [this.glowFilter];
            }
            else {
                this.glowFilter.alpha = 0;
                this.filters = [];
            }
        };
        return RedPioxyImg;
    }(eui.Button));
    tubao.RedPioxyImg = RedPioxyImg;
    __reflect(RedPioxyImg.prototype, "tubao.RedPioxyImg");
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 资源加载与管理
     */
    var res = (function () {
        function res() {
        }
        /**
         * 构造函数
         */
        res.init = function () {
            this._configs = new Array();
            this._groups = {};
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            //监听资源加载成功
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
            //监听延迟加载组资源时进度调度
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            //监听延迟加载组资源失败时调度
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
            //一个加载项目加载失败时候调度
        };
        /**
         * 添加一个配置文件
         * @param {string} jsonPath resource.json路径
         * @param {string} filePath 访问资源路径
         */
        res.addConfig = function (jsonPath, filePath) {
            this._configs.push([jsonPath, filePath]);
        };
        /**
         * 开始加载配置文件
         * @param {Function} onConfigComplete 加载完成执行函数
         * @param {any} onConfigCompleteTarget 加载完成执行函数作用域
         */
        res.loadConfig = function (onConfigComplete, onConfigCompleteTarget) {
            this._onConfigComplete = onConfigComplete;
            this._onConfigCompleteTarget = onConfigCompleteTarget;
            this.loadNextConfig();
        };
        /**
         * 加载
         */
        res.loadNextConfig = function () {
            //加载完成
            if (this._configs.length == 0) {
                this._onConfigComplete.call(this._onConfigCompleteTarget);
                this._onConfigComplete = null;
                this._onConfigCompleteTarget = null;
                return;
            }
            var arr = this._configs.shift();
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
            RES.loadConfig(arr[0], arr[1]);
        };
        /**
         * 加载完成
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        res.onConfigCompleteHandle = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
            this.loadNextConfig();
        };
        /**
         * 加载资源组
         * @param {string} groupName 资源组名称
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数作用域
         */
        res.loadGroup = function (groupName, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            this._groups[groupName] = [onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget];
            RES.loadGroup(groupName);
        };
        /**
         * 同时加载多个组
         * @param {string} groupName 自定义的组名称
         * @param {any[]} subGroups 所包含的组名称或者key名称数组
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数所属对象
         */
        res.loadGroups = function (groupName, subGroups, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            RES.createGroup(groupName, subGroups, true);
            this.loadGroup(groupName, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget);
        };
        /**
         * 静默加载
         * @param {string} groupName 资源组名称
         * @param {any[]} groupName 所包含的组名称或者key名称数组,默认null
         */
        res.pilfererLoadGroup = function (groupName, subGroups) {
            if (subGroups === void 0) { subGroups = null; }
            //添加前缀，防止与正常加载组名重复
            var useGroupName = "pilferer_" + groupName;
            if (!subGroups) {
                subGroups = [groupName];
            }
            RES.createGroup(useGroupName, subGroups, true);
            RES.loadGroup(useGroupName, -1);
        };
        /**
         * 资源组加载完成
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        res.onResourceLoadComplete = function (event) {
            var groupName = event.groupName;
            //资源组名赋值
            if (this._groups[groupName]) {
                //判断是否有这个资源
                var loadComplete = this._groups[groupName][0];
                var loadCompleteTarget = this._groups[groupName][2];
                if (loadComplete != null) {
                    //在函数存在的时候
                    loadComplete.apply(loadCompleteTarget, [groupName]);
                }
                this._groups[groupName] = null;
                delete this._groups[groupName];
            }
        };
        /**
         * 资源组加载进度
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        res.onResourceLoadProgress = function (event) {
            var groupName = event.groupName;
            if (this._groups[groupName]) {
                var loadProgress = this._groups[groupName][1];
                var loadProgressTarget = this._groups[groupName][2];
                if (loadProgress != null) {
                    loadProgress.call(loadProgressTarget, event.itemsLoaded, event.itemsTotal);
                }
            }
        };
        /**
         * 资源组加载失败
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        res.onResourceLoadError = function (event) {
            console.warn(event.groupName + "资源组有资源加载失败");
            this.onResourceLoadComplete(event);
        };
        /**
         * 资源加载失败
         * @param {RES.ResourceEvent} event 加载完成返回事件
         */
        res.onResourceItemLoadError = function (event) {
            console.warn(event.resItem.url + "资源加载失败");
            if (this._itemLoadErrorFunction) {
                this._itemLoadErrorFunction(event);
            }
        };
        /**
         * 混合加载资源组
         * @param {string[]} resources 资源数组
         * @param {string[]} groups 资源组数组
         * @param {Function} onResourceLoadComplete 资源加载完成执行函数
         * @param {Function} onResourceLoadProgress 资源加载进度监听函数
         * @param {any} onResourceLoadTarget 资源加载监听函数所属对象
         */
        res.loadResource = function (resources, groups, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            if (resources === void 0) { resources = []; }
            if (groups === void 0) { groups = []; }
            if (onResourceLoadComplete === void 0) { onResourceLoadComplete = null; }
            if (onResourceLoadProgress === void 0) { onResourceLoadProgress = null; }
            if (onResourceLoadTarget === void 0) { onResourceLoadTarget = null; }
            var needLoadArr = resources.concat(groups);
            var groupName = "loadGroup" + this._groupIndex++;
            RES.createGroup(groupName, needLoadArr, true);
            this._groups[groupName] = [onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget];
            RES.loadGroup(groupName);
        };
        /**
         * 动态创建加载组
         * @param {string} groupName 组名字
         * @param {string[]} resKeys 组加载内容列表
         */
        res.createGroup = function (groupName, resKeys) {
            RES.createGroup(groupName, resKeys, true);
        };
        /**
         * 动态创建Resource资源配置信息
         * @param {string} resKey 资源名字
         * @param {string} resType 资源类型
         * @param {string} resUrl 资源地址
         */
        res.createResource = function (resKey, resType, resUrl) {
            var res = {
                name: resKey,
                type: resType,
                url: resUrl
            };
            RES.$addResourceData(res);
        };
        /**
         * 获取文件的真实路径
         * @param {string} key 资源路径也可能是资源名字
         */
        res.getFileRealPath = function (key) {
            var fileInfo = RES.getResourceInfo(key);
            return fileInfo.root + fileInfo.url;
        };
        /**组的索引 */
        res._groupIndex = 0;
        return res;
    }());
    tubao.res = res;
    __reflect(res.prototype, "tubao.res");
})(tubao || (tubao = {}));
/**
 * 敏感词过滤检测
 */
var tubao;
(function (tubao) {
    var sensitive;
    (function (sensitive_1) {
        /**
         * 敏感词过滤检测工具
         */
        var sensitive = (function () {
            /**
             * 敏感词过滤检测工具
             * @param {string} replace 检测到替换单个字的内容
             * @param {any} thisObject 检测到回调处理作用域
             * @param {Function} dispose 检测到回调处理函数
             */
            function sensitive(replace) {
                var _this = this;
                /**检测到了的替换值 */
                this.replace = '*';
                /**
                 * 文本数据标记
                 */
                this.labJson = {};
                RES.getResAsync('vocabulary_json', function (json) {
                    _this.charMapDoc = _this.buildMap(json.data);
                    //字系节点地图文档
                    _this.replace = replace;
                    //设置替换值
                }, this);
            }
            /**
            * 敏感词地图字系节点构造
            * @param {string[]} data 敏感词数组
            * @return {Map<any, any>} 返回地图
            */
            sensitive.prototype.buildMap = function (data) {
                var result = new Map();
                //构造map根部节点
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var word = data_1[_i];
                    //遍历每个词语处理
                    var map = result;
                    //创建一个地图引用节点
                    for (var key = 0; key < word.length; key++) {
                        //遍历词语的每一个字
                        var char = word.charAt(key);
                        //拿到单个字
                        var mapGet = map.get(char);
                        //拿到指定键所映射的值
                        if (mapGet) {
                            //字存在于地图中
                            map = map.get(char);
                            //存在就把当前处理的map设置为这个字所在节点进行进一步构建处理
                            if (map.get('laster') === true) {
                                //如果这里一定是一个词尾，那么他必定跳过这个词
                                break;
                                //在结束节点就直接看下一个词语
                            }
                        }
                        else {
                            //字不存在于地图中，这里应该进行构建新的树节点但也要确定出来是否为词尾
                            //在这里长文字覆盖短文字是不允许的。
                            var item = new Map();
                            //建立一个地图节点
                            if (key == word.length - 1) {
                                //这里是当前词的词尾，因为上面补丁所以这里不可能是其他的词
                                item.set('laster', true);
                                //设置触发点
                            }
                            map.set(char, item);
                            //添加字符结束节点
                            map = map.get(char);
                            //获取节点值还原到map地图中以便于下一步操作
                        }
                    }
                }
                return result;
            };
            /**
             * 从单个字开始检查是否触发敏感词
             * @param {string} txt 整体文本长度
             * @param {number} index 当前索引
             * @return {charPlayVerResultInter} 检查结果
             */
            sensitive.prototype.charPlayVer = function (txt, index) {
                var currentMap = this.charMapDoc;
                //地图
                var flag = false;
                //表示是否检查到
                var wordNum = 0;
                //检查到内容
                var sensitiveWord = '';
                //记录过滤出来的敏感词
                for (var i = index; i < txt.length; i++) {
                    //从指定点开始遍历
                    var word = txt.charAt(i);
                    //获取到的字
                    currentMap = currentMap.get(word);
                    //返回当前字为根取出树枝
                    if (currentMap) {
                        //存在这段枝条
                        wordNum++;
                        //字数增加
                        sensitiveWord += word;
                        //记录加字
                        if (currentMap.get('laster') === true) {
                            // 表示已到词的结尾
                            flag = true;
                            //设置触发
                        }
                    }
                    else {
                        break;
                        //跳过
                    }
                }
                if (wordNum < 2) {
                    //找到一个词尾不触发
                    flag = false;
                }
                return { flag: flag, sensitiveWord: sensitiveWord };
            };
            /**
             * 判断文本中是否存在敏感词英语
             * @param {string} txt 检测的文本
             * @param {string} userId 用户id
             * @return {string} 处理结果
             */
            sensitive.prototype.disposeEn = function (txtLab) {
                var txtTrim = txtLab.text.replace(/[\u2000-\u2FFF \uFF00-\uFFFF]+/g, '');
                //删除掉符号字符
                for (var i = 0; i < txtTrim.length; i++) {
                    //遍历处理后字符
                    var result = this.charPlayVer(txtTrim, i);
                    //单字符开始检查结果
                    if (result.flag) {
                        //检测到了敏感词
                        var reg = new RegExp(result.sensitiveWord, "g");
                        txtLab.text = txtLab.text.replace(reg, '');
                        tubao.Appli.hint.send("\u53D1\u73B0\u8FDD\u89C4\u8BCD\u8BED\"" + result.sensitiveWord + "\"\u5DF2\u5220\u9664~", '#FF4040');
                        return false;
                    }
                }
                return true;
            };
            /**
             * 判断文本中是否存在敏感词
             * @param {string} txt 检测的文本
             * @param {string} userId 用户id
             * @return {string} 处理结果
             */
            sensitive.prototype.dispose = function (txtLab) {
                var txtTrim = txtLab.text.replace(/[0-9 A-Z a-z \u0000-\u0FFF \u2000-\u2FFF \uFF00-\uFFFF]+/g, '');
                //删除掉非中文、英文、数字之外的字符
                for (var i = 0; i < txtTrim.length; i++) {
                    //遍历处理后字符
                    var result = this.charPlayVer(txtTrim, i);
                    //单字符开始检查结果
                    if (result.flag) {
                        //检测到了敏感词
                        var reg = new RegExp(result.sensitiveWord, "g");
                        txtLab.text = txtLab.text.replace(reg, '');
                        tubao["Appli"].hint.send("\u53D1\u73B0\u8FDD\u89C4\u8BCD\u8BED\"" + result.sensitiveWord + "\"\u5DF2\u5220\u9664~", '#FF4040', true);
                        return false;
                    }
                }
                return true;
            };
            /**
             * 添加事件监听字符集合
             */
            sensitive.prototype.addEventDoNoChar = function (lab) {
                var _this = this;
                if (!this.labJson[lab.hashCode]) {
                    //表示没有标记监听
                    this.labJson[lab.hashCode] = true;
                    //设置标记了
                    lab.addEventListener(egret.Event.CHANGE, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.Event.FOCUS_IN, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.Event.FOCUS_OUT, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                    lab.addEventListener(egret.TouchEvent.TOUCH_END, function () {
                        //输入内容时候触发处理
                        _this.dispose(lab);
                        //中文处理
                        _this.disposeEn(lab);
                        //英文处理
                    }, this);
                }
            };
            return sensitive;
        }());
        sensitive_1.sensitive = sensitive;
        __reflect(sensitive.prototype, "tubao.sensitive.sensitive");
    })(sensitive = tubao.sensitive || (tubao.sensitive = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 系统时间核心类，手动每秒时间添加一秒
     */
    var sysTimer = (function () {
        //定时器
        function sysTimer() {
            this.time = new Date();
            this.tim = new egret.Timer(1000);
            this.tim.addEventListener(egret.TimerEvent.TIMER, this.timerAddS, this);
        }
        //设置时间
        sysTimer.prototype.SetTimer = function (time) {
            this.time = new Date(time);
            this.tim.start();
        };
        /**
         * 定时器调用添加秒
         */
        sysTimer.prototype.timerAddS = function () {
            this.time.setSeconds(this.time.getSeconds() + 1);
        };
        /**
         * 钟表工具传入一个带有text属性的对象后每秒都会给这个对象的text属性更新数据。
         * @param {string} qian 前置时间控制符
         * @param {any} clock 钟表对象这里传入一个带有text属性的对象
         * @param {string} hou 后置时间控制符
         */
        sysTimer.prototype.clock = function (qian, clock, hou) {
            var _this = this;
            setInterval(function () {
                //获取时间
                var date = _this.time;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second = date.getSeconds();
                //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
                if (hour < 10) {
                    hour = '0' + hour;
                }
                if (minute < 10) {
                    minute = '0' + minute;
                }
                if (second < 10) {
                    second = '0' + second;
                }
                clock.text = "" + qian + hour + ":" + minute + ":" + second + hou;
            }, 1000, this);
        };
        return sysTimer;
    }());
    tubao.sysTimer = sysTimer;
    __reflect(sysTimer.prototype, "tubao.sysTimer");
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 兔宝单项选择器
     */
    var toggleTubao = (function (_super) {
        __extends(toggleTubao, _super);
        /**
         * 兔宝单项选择器
         */
        function toggleTubao() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.CHANGE, _this.changeHandler, _this);
            return _this;
            //监听切换选项
        }
        /**
         * 修改了选项
         */
        toggleTubao.prototype.changeHandler = function (evt) {
            var state = evt.target.selected;
            //当前状态
            if (state) {
                //当前选中了
                this.alpha = 1;
            }
            else {
                //当前没选中
                this.alpha = 0.6;
            }
        };
        return toggleTubao;
    }(eui.ToggleSwitch));
    tubao.toggleTubao = toggleTubao;
    __reflect(toggleTubao.prototype, "tubao.toggleTubao");
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 兔宝初始化，最终通往Main函数
     */
    var tubaoInit = (function (_super) {
        __extends(tubaoInit, _super);
        function tubaoInit() {
            var _this = _super.call(this) || this;
            setInterval(function () {
                if (tubao.runTime) {
                    tubao.runTime += 1000;
                }
                else {
                    tubao.runTime = 1000;
                }
            }, 1000);
            //基础定时器更新(毫秒计算)
            tubao.stage = egret.MainContext.instance.stage;
            //舞台对象赋值给兔宝，方便以后使用。
            tubao.height = tubao.stage.stageHeight;
            //设置视窗高度记录
            tubao.width = tubao.stage.stageWidth;
            //设置视窗宽度记录
            tubao.stage.addEventListener(egret.Event.RESIZE, _this.setTubaoReat, _this);
            //监听舞台宽高改变
            tubao.res.init();
            //资源管理系统初始化
            tubao.sound.manager.init();
            //音乐系统初始化
            tubao.layer.sceneManager.register(100, new tubao.layer.scene());
            //注册场景
            tubao.layer.sceneManager.runScene(100);
            //进入场景
            //security()
            //安全
            _this.miniGamePlay();
            return _this;
        }
        /**
         * 迷你游戏运行时，基础层面内容处理
         */
        tubaoInit.prototype.miniGamePlay = function () {
            switch (egret.Capabilities.runtimeType) {
                case egret.RuntimeType.WEB: break; //浏览器环境
                case egret.RuntimeType.RUNTIME2: break; //Native
                case egret.RuntimeType.WXGAME: break; //微信
                case egret.RuntimeType.QQGAME://QQ
                    qq.showShareMenu({ showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'] });
                    //qq环境内，显示转发、分享到空间、微信好友、微信朋友圈
                    qq.updateShareMenu({ withShareTicket: true });
                    //更新转发属性，可能没什么用因为没有应用
                    break;
                case egret.RuntimeType.TTGAME: break; //字节跳动
                case egret.RuntimeType.KSGAME: break; //快手
                case egret.RuntimeType.QGAME: break; //小米快游戏
            }
        };
        /**
         * 设置兔宝的舞台宽高
         * @param {egret.Event} 事件
         */
        tubaoInit.prototype.setTubaoReat = function (event) {
            tubao.height = tubao.stage.stageHeight;
            //设置视窗高度记录
            tubao.width = tubao.stage.stageWidth;
            //设置视窗宽度记录
        };
        return tubaoInit;
    }(egret.DisplayObjectContainer));
    tubao.tubaoInit = tubaoInit;
    __reflect(tubaoInit.prototype, "tubao.tubaoInit");
    /**
     * 在新页面打开一个链接地址
     * @param {string} url 链接地址
     */
    function open(url, target, features) {
        if (tubao.device.isChannel) {
            //这些是小游戏渠道
            wx.setClipboardData({ data: url });
            //设置剪贴板内容
            new tubao.base.popup("basics01_png", "\u94FE\u63A5\u5730\u5740\u5DF2\u7ECF\u590D\u5236\u5230\u4E86\u526A\u8D34\u677F\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u7C98\u8D34\u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86\u3002");
            //提示内容
        }
        else {
            //其他处理
            window.open(url, target, features);
        }
    }
    tubao.open = open;
    /**
     * 刷新页面
     */
    function reload() {
        location.reload();
        //刷新
    }
    tubao.reload = reload;
    /**
     * 安全
     */
    function security() {
        if (tubao.device.DeviceOs == "windows" && egret.Capabilities.runtimeType == "web") {
            //
            var name = window.document.location.hostname;
            //网页名字
            if (name == 'localhost' || name == '127.0.0.1' || name.substring(0, 7) == '192.168') {
                window.close();
            }
        }
        else {
        }
    }
    tubao.security = security;
})(tubao || (tubao = {}));
window['tubao'] = tubao;
var tubao;
(function (tubao) {
    /**
     * 兔宝文本框增强
     */
    var tubaoLabel = (function (_super) {
        __extends(tubaoLabel, _super);
        function tubaoLabel() {
            var _this = _super.call(this) || this;
            /**输入状态 */
            _this.shurutai = false;
            /**默认文本 */
            _this.defaultText = "默认的文本内容";
            /**默认颜色 */
            _this.defaultColor = 13414817;
            /**常规颜色 */
            _this.convenColor = 2493952;
            _this.addEventListener(egret.FocusEvent.FOCUS_IN, _this.focusIn, _this);
            //获得焦点
            _this.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.focusOut, _this);
            //失去焦点
            _this.addEventListener(egret.Event.CHANGE, _this.change, _this);
            //输入中
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touchTap, _this);
            return _this;
            //点击
        }
        /**
         * 输入内容
         */
        tubaoLabel.prototype.change = function () {
            this.verValColorTool();
        };
        /**
         * 点击以后
         */
        tubaoLabel.prototype.touchTap = function () {
            if (this.text == this.defaultText) {
                //文本框内容是默认内容
                this.text = "";
                //置空
            }
            this.shurutai = true;
            //设置为输入状态
            this.setFocus();
        };
        /**
         * 获得焦点
         */
        tubaoLabel.prototype.focusIn = function () {
            this.verValTool();
            //修改默认内容
            this.verValColorTool();
            //修改颜色
        };
        /**
         * 失去焦点
         */
        tubaoLabel.prototype.focusOut = function () {
            this.shurutai = false;
            //设置为非状态
            this.verValTool();
            //修改默认内容
            this.verValColorTool();
            //修改颜色
        };
        /**
         * 初始化完成后调用功能处理
         */
        tubaoLabel.prototype.nono = function () {
            if (this.text == "") {
                //文本框为空
                this.text = this.defaultText;
                //设置内容为默认内容
            }
            this.verValTool();
            //修改默认内容
            this.verValColorTool();
            //修改颜色
        };
        /**
         * 修改内容验证器
         */
        tubaoLabel.prototype.verValTool = function () {
            if (this.text == "" && this.shurutai == false) {
                //文本框内容是空的，并且不在输入状态
                this.text = this.defaultText;
                //设置内容为默认内容
            }
        };
        /**
         * 修改颜色验证器
         */
        tubaoLabel.prototype.verValColorTool = function () {
            if (this.text == this.defaultText) {
                //当前文本是默认文本的时候
                this.textColor = this.defaultColor;
                //修改为默认内容颜色
            }
            else {
                this.textColor = this.convenColor;
                //修改为正常内容颜色
            }
        };
        return tubaoLabel;
    }(eui.Label));
    tubao.tubaoLabel = tubaoLabel;
    __reflect(tubaoLabel.prototype, "tubao.tubaoLabel");
})(tubao || (tubao = {}));
/**
 * 布局资源解析
 */
var tubao;
(function (tubao) {
    var adapter;
    (function (adapter) {
        /**
         * 素材解析器
         */
        var asset = (function () {
            function asset() {
            }
            /**
             * 解析素材
             * @param {string} source 待解析的新素材标识符
             * @param {Function} compFunc 解析完成回调函数
             * @param {any} thisObject callBack的作用域
             */
            asset.prototype.getAsset = function (source, compFunc, thisObject) {
                function onGetRes(data) {
                    compFunc.call(thisObject, data, source);
                }
                if (RES.hasRes(source)) {
                    var data = RES.getRes(source);
                    if (data) {
                        onGetRes(data);
                    }
                    else {
                        RES.getResAsync(source, onGetRes, this);
                    }
                }
                else {
                    RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
                }
            };
            return asset;
        }());
        adapter.asset = asset;
        __reflect(asset.prototype, "tubao.adapter.asset", ["eui.IAssetAdapter"]);
    })(adapter = tubao.adapter || (tubao.adapter = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var adapter;
    (function (adapter) {
        /**
         * eui主题解析器
         */
        var theme = (function () {
            function theme() {
            }
            /**
             * 解析主题
             * @param {string} url 待解析的主题url
             * @param {Function} onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
             * @param {Function} onError 解析失败回调函数，示例：errorFunc():void;
             * @param {any} thisObject 回调的this引用
             */
            theme.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
                var _this = this;
                function onResGet(e) {
                    onSuccess.call(thisObject, e);
                }
                function onResError(e) {
                    if (e.resItem.url == url) {
                        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                        onError.call(thisObject);
                    }
                }
                if (typeof generateEUI !== 'undefined') {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateEUI);
                    }, this);
                }
                else if (typeof generateEUI2 !== 'undefined') {
                    RES.getResByUrl("resource/gameEui.json", function (data, url) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateEUI2);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else if (typeof generateJSON !== 'undefined') {
                    if (url.indexOf(".exml") > -1) {
                        var dataPath = url.split("/");
                        dataPath.pop();
                        var dirPath = dataPath.join("/") + "_EUI.json";
                        if (!generateJSON.paths[url]) {
                            RES.getResByUrl(dirPath, function (data) {
                                window["JSONParseClass"]["setData"](data);
                                egret.callLater(function () {
                                    onSuccess.call(thisObject, generateJSON.paths[url]);
                                }, _this);
                            }, this, RES.ResourceItem.TYPE_JSON);
                        }
                        else {
                            egret.callLater(function () {
                                onSuccess.call(thisObject, generateJSON.paths[url]);
                            }, this);
                        }
                    }
                    else {
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON);
                        }, this);
                    }
                }
                else {
                    RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                    RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
                }
            };
            return theme;
        }());
        adapter.theme = theme;
        __reflect(theme.prototype, "tubao.adapter.theme", ["eui.IThemeAdapter"]);
    })(adapter = tubao.adapter || (tubao.adapter = {}));
})(tubao || (tubao = {}));
/**
 * 算法工具类
 */
var tubao;
(function (tubao) {
    var algo;
    (function (algo_1) {
        var algo;
        (function (algo) {
            /**
             * 字符串长度范围验证
             * @param {string} str 验证的字符串
             * @param {number} min 最小长度
             * @param {number} max 最大长度
             */
            function charLengthCheck(str, min, max) {
                if (str.length <= min || str.length >= max) {
                    return false;
                }
                return true;
            }
            algo.charLengthCheck = charLengthCheck;
            /**
             * 含有特殊字符验证
             * @param {string} str 文字内容
             */
            function onExpecialChar(str) {
                var patrn = /[`\'[\]·%&{}"|“”‘’]/im;
                if (patrn.test(str)) {
                    //如果包含特殊字符返回false
                    return false;
                }
                return true;
            }
            algo.onExpecialChar = onExpecialChar;
            /**
             * 中文字符验证
             * @param {string} str 文字内容
             */
            function onChinaStr(str) {
                if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
                    return false;
                }
                return true;
            }
            algo.onChinaStr = onChinaStr;
            /**
             * 显示对象物品位置互换
             */
            function DisLocationExchange(dis1, dis2) {
                var a = dis1.x;
                var b = dis1.y;
                dis1.x = dis2.x;
                dis1.y = dis2.y;
                dis2.x = a;
                dis2.y = b;
            }
            algo.DisLocationExchange = DisLocationExchange;
            /**
             * 兔宝游戏资源地址填充工具
             *
             * @param data 传入过来的number数据
             * @param num  填充位数
             */
            function fill(data, num) {
                //填充0
                var dataString = String(data);
                //转换为字符串
                var resuit = "";
                //返回结果
                var place = num - dataString.length;
                //取填充的位数
                for (var a = 0; a < place; a++) {
                    resuit += "0";
                }
                return resuit += dataString;
            }
            algo.fill = fill;
            /**
             * 判断是否是数字
             * @param data 传入过来的number数据
             */
            function isNumber(val) {
                var regPos = /^\d+(\.\d+)?$/; //非负浮点数
                var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
                if (regPos.test(val) || regNeg.test(val)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            algo.isNumber = isNumber;
            /**
             * 在一个数组中随机获取一个元素
             * @param arr 数组
             * @returns {any} 随机出来的结果
             */
            function randomArray(arr) {
                if (!arr) {
                    return null;
                }
                var index = Math.floor(Math.random() * arr.length);
                return arr[index];
            }
            algo.randomArray = randomArray;
            /**
             * 获取一个区间的随机数(整数)
             * @param $from 最小值
             * @param $end 最大值
             * @returns {number}
             */
            function limitInteger(from, end) {
                return Math.floor(limit(from, end + 1));
            }
            algo.limitInteger = limitInteger;
            /**
             * 获取一个区间的随机数
             * @param $from 最小值
             * @param $end 最大值
             * @returns {number}
             */
            function limit(from, end) {
                from = Math.min(from, end);
                end = Math.max(from, end);
                var range = end - from;
                return from + Math.random() * range;
            }
            algo.limit = limit;
            /**
             * 获取一个随机数
             */
            function randomFrom(lowerValue, upperValue) {
                return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
            }
            algo.randomFrom = randomFrom;
            /**
             * 获取到json的长度
             */
            function getJsonLength(jsonData) {
                var length = 0;
                for (var ever in jsonData) {
                    length++;
                }
                return length;
            }
            algo.getJsonLength = getJsonLength;
            /**
             * 返回数组从大到小排序结果
             * */
            function arrSortMaxToMin(arr) {
                var arrNew = [];
                var arrOld = arr.slice(0);
                for (var i = 0; i < arr.length; i++) {
                    arrNew.push(arrMaxNum(arrOld).maxNum);
                    arrOld.splice(arrMaxNum(arrOld).index, 1);
                }
                ;
                return (arrNew);
            }
            algo.arrSortMaxToMin = arrSortMaxToMin;
            /*
            *找数组中最大的值
            */
            function arrMaxNum(arr) {
                var maxNum = -Infinity, index = -1;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] > maxNum) {
                        maxNum = arr[i];
                        index = i;
                    }
                }
                ;
                return { "maxNum": maxNum, "index": index };
            }
            algo.arrMaxNum = arrMaxNum;
            /**
             * 返回数组从小到大排序结果
             * */
            function arrSortMinToMax(arr) {
                var arrNew = [];
                var arrOld = arr.concat();
                for (var i = 0; i < arr.length; i++) {
                    arrNew.push(arrMinNum(arrOld).minNum);
                    arrOld.splice(arrMinNum(arrOld).index, 1);
                }
                ;
                return (arrNew);
            }
            algo.arrSortMinToMax = arrSortMinToMax;
            /**
             * 找数组中最小的值
            */
            function arrMinNum(arr) {
                var minNum = Infinity, index = -1;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] < minNum) {
                        minNum = arr[i];
                        index = i;
                    }
                }
                ;
                return { "minNum": minNum, "index": index };
            }
            algo.arrMinNum = arrMinNum;
            /**
             * 获取纹理中一个点的颜色算法
             */
            function getColorRGB(x, y, tex) {
                var a = tex;
                var c = a.getPixels(x, y, 1, 1);
                var d = (65536 * c[0]) + (256 * c[1]) + c[2];
                return [c[0], c[1], c[2], d];
            }
            algo.getColorRGB = getColorRGB;
        })(algo = algo_1.algo || (algo_1.algo = {}));
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
/**
 * A星寻路
 */
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        var astar;
        (function (astar) {
            /**
             * 寻路系统事件类
             */
            var astarEvent = (function (_super) {
                __extends(astarEvent, _super);
                function astarEvent(type, bubbles, cancelable) {
                    if (bubbles === void 0) { bubbles = false; }
                    if (cancelable === void 0) { cancelable = false; }
                    return _super.call(this, type, bubbles, cancelable) || this;
                }
                /**点了一个无效位置 */
                astarEvent.clickNoGotoPix = "点了一个无效位置";
                return astarEvent;
            }(egret.Event));
            astar.astarEvent = astarEvent;
            __reflect(astarEvent.prototype, "tubao.algo.astar.astarEvent");
            /**
             * Node 节点
             * @author chenkai
             * @since 2017/11/3
             */
            var Node = (function () {
                function Node(x, y) {
                    this.walkable = true; //不能走的格子，就是障碍物
                    this.costMultiplier = 1.0; //成本倍增
                    this.x = x;
                    this.y = y;
                }
                return Node;
            }());
            astar.Node = Node;
            __reflect(Node.prototype, "tubao.algo.astar.Node");
            /**
             * 网格类
             * @author chenkai
             * @since 2017/11/3
             */
            var Grid = (function () {
                function Grid(numCols, numRows) {
                    this._numCols = numCols;
                    this._numRows = numRows;
                    this._nodes = [];
                    for (var i = 0; i < numCols; i++) {
                        this._nodes[i] = [];
                        for (var j = 0; j < numRows; j++) {
                            this._nodes[i][j] = new Node(i, j);
                        }
                    }
                }
                Grid.prototype.getNode = function (x, y) {
                    return this._nodes[x][y];
                };
                Grid.prototype.setEndNode = function (x, y) {
                    this._endNode = this._nodes[x][y];
                };
                Grid.prototype.setStartNode = function (x, y) {
                    this._startNode = this._nodes[x][y];
                };
                Grid.prototype.setWalkable = function (x, y, value) {
                    this._nodes[x][y].walkable = value;
                };
                Object.defineProperty(Grid.prototype, "endNode", {
                    get: function () {
                        return this._endNode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Grid.prototype, "numCols", {
                    get: function () {
                        return this._numCols;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Grid.prototype, "numRows", {
                    get: function () {
                        return this._numRows;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Grid.prototype, "startNode", {
                    get: function () {
                        return this._startNode;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Grid;
            }());
            astar.Grid = Grid;
            __reflect(Grid.prototype, "tubao.algo.astar.Grid");
            var AStar = (function (_super) {
                __extends(AStar, _super);
                function AStar() {
                    var _this = _super.call(this) || this;
                    _this._straightCost = 1.0; //上下左右走的代价
                    _this._diagCost = Math.SQRT2; //斜着走的代价 
                    //this._heuristic = this.manhattan;  
                    //this._heuristic = this.euclidian;
                    _this._heuristic = _this.diagonal;
                    return _this;
                }
                //寻路
                AStar.prototype.findPath = function (grid) {
                    this._grid = grid;
                    this._open = [];
                    this._closed = [];
                    this._startNode = this._grid.startNode;
                    this._endNode = this._grid.endNode;
                    this._startNode.g = 0;
                    this._startNode.h = this._heuristic(this._startNode);
                    this._startNode.f = this._startNode.g + this._startNode.h;
                    return this.search();
                };
                //查找路径
                AStar.prototype.search = function () {
                    var node = this._startNode;
                    while (node != this._endNode) {
                        var startX = Math.max(0, node.x - 1);
                        var endX = Math.min(this._grid.numCols - 1, node.x + 1);
                        var startY = Math.max(0, node.y - 1);
                        var endY = Math.min(this._grid.numRows - 1, node.y + 1);
                        for (var i = startX; i <= endX; i++) {
                            for (var j = startY; j <= endY; j++) {
                                //不让斜着走
                                /*if(i != node.x && j != node.y){
                                    continue;
                                }*/
                                var test = this._grid.getNode(i, j);
                                if (test == node ||
                                    !test.walkable ||
                                    !this._grid.getNode(node.x, test.y).walkable ||
                                    !this._grid.getNode(test.x, node.y).walkable) {
                                    continue;
                                }
                                var cost = this._straightCost;
                                if (!((node.x == test.x) || (node.y == test.y))) {
                                    cost = this._diagCost;
                                }
                                var g = node.g + cost * test.costMultiplier;
                                var h = this._heuristic(test);
                                var f = g + h;
                                if (this.isOpen(test) || this.isClosed(test)) {
                                    if (test.f > f) {
                                        test.f = f;
                                        test.g = g;
                                        test.h = h;
                                        test.parent = node;
                                    }
                                }
                                else {
                                    test.f = f;
                                    test.g = g;
                                    test.h = h;
                                    test.parent = node;
                                    this._open.push(test);
                                }
                            }
                        }
                        for (var o = 0; o < this._open.length; o++) {
                        }
                        this._closed.push(node);
                        if (this._open.length == 0) {
                            console.log("AStar >> no path found");
                            var daterEvent = new astarEvent(astarEvent.clickNoGotoPix);
                            //发送点了一个无效位置
                            this.dispatchEvent(daterEvent);
                            //发送
                            return false;
                        }
                        var openLen = this._open.length;
                        for (var m = 0; m < openLen; m++) {
                            for (var n = m + 1; n < openLen; n++) {
                                if (this._open[m].f > this._open[n].f) {
                                    var temp = this._open[m];
                                    this._open[m] = this._open[n];
                                    this._open[n] = temp;
                                }
                            }
                        }
                        node = this._open.shift();
                    }
                    this.buildPath();
                    return true;
                };
                //获取路径
                AStar.prototype.buildPath = function () {
                    this._path = new Array();
                    var node = this._endNode;
                    this._path.push(node);
                    while (node != this._startNode) {
                        node = node.parent;
                        this._path.unshift(node);
                    }
                };
                Object.defineProperty(AStar.prototype, "path", {
                    get: function () {
                        return this._path;
                    },
                    enumerable: true,
                    configurable: true
                });
                //是否待检查
                AStar.prototype.isOpen = function (node) {
                    for (var i = 0; i < this._open.length; i++) {
                        if (this._open[i] == node) {
                            return true;
                        }
                    }
                    return false;
                };
                //是否已检查
                AStar.prototype.isClosed = function (node) {
                    for (var i = 0; i < this._closed.length; i++) {
                        if (this._closed[i] == node) {
                            return true;
                        }
                    }
                    return false;
                };
                //曼哈顿算法
                AStar.prototype.manhattan = function (node) {
                    return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
                };
                AStar.prototype.euclidian = function (node) {
                    var dx = node.x - this._endNode.x;
                    var dy = node.y - this._endNode.y;
                    return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
                };
                AStar.prototype.diagonal = function (node) {
                    var dx = Math.abs(node.x - this._endNode.x);
                    var dy = Math.abs(node.y - this._endNode.y);
                    var diag = Math.min(dx, dy);
                    var straight = dx + dy;
                    return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
                };
                Object.defineProperty(AStar.prototype, "visited", {
                    get: function () {
                        return this._closed.concat(this._open);
                    },
                    enumerable: true,
                    configurable: true
                });
                return AStar;
            }(egret.EventDispatcher));
            astar.AStar = AStar;
            __reflect(AStar.prototype, "tubao.algo.astar.AStar");
        })(astar = algo.astar || (algo.astar = {}));
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        /**
         * 比特处理字节数组
         */
        var bit = (function () {
            function bit() {
            }
            /**
             * ArrayBuffer转为字符串
             */
            bit.ab2str = function (buf) {
                return String.fromCharCode.apply(null, new Uint16Array(buf));
            };
            /**
             * 字符串转为ArrayBuffer对象
             */
            bit.str2ab = function (str) {
                var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
                var bufView = new Uint16Array(buf);
                for (var i = 0, strLen = str.length; i < strLen; i++) {
                    bufView[i] = str.charCodeAt(i);
                }
                return buf;
            };
            return bit;
        }());
        algo.bit = bit;
        __reflect(bit.prototype, "tubao.algo.bit");
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        /**
         * 色彩工具
         */
        var color = (function () {
            function color() {
            }
            /**
             * hls颜色模型转换为rgb
             * @param {number} h 色相
             * @param {number} s 深度
             * @param {number} l 亮度
             */
            color.hsl = function (h, s, l) {
                var rgb = this.hslToRgb(h, s, l);
                //转换为了rgb分值
                var int = rgb.red * 65536 + rgb.green * 256 + rgb.blue;
                //rgb十进制数
                return int;
            };
            /**
             * hls颜色模型转换为rgb
             * @param {number} h 色相
             * @param {number} s 深度
             * @param {number} l 亮度
             */
            color.hslToRgb = function (h, s, l) {
                var r;
                var g;
                var b;
                //三种rgb颜色
                if (s == 0) {
                    r = g = b = l; //消色差的；非染色质的；非彩色的
                }
                else {
                    var q;
                    var p;
                    if (l < 0.5) {
                        q = l * (1 + s);
                    }
                    else {
                        q = l + s - l * s;
                    }
                    p = 2 * l - q;
                    r = this.hue2rgb(p, q, h + 1 / 3);
                    g = this.hue2rgb(p, q, h);
                    b = this.hue2rgb(p, q, h - 1 / 3);
                }
                return {
                    red: Math.round(r * 255),
                    green: Math.round(g * 255),
                    blue: Math.round(b * 255)
                };
            };
            color.hue2rgb = function (p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            color.hsv = function (h, s, v) {
                var rgb = this.hsvtorgb(h, s, v);
                //console.log(rgb)
                var int = rgb[0] * 65536 + rgb[1] * 256 + rgb[2];
                //console.log(int)
                //console.log(int.toString(16).toUpperCase())
                //rgb十进制数
                return int;
            };
            //输入的h范围为[0,360],s,l为百分比形式的数值,范围是[0,100] 
            //输出r,g,b范围为[0,255],可根据需求做相应调整
            color.hsvtorgb = function (h, s, v) {
                s = s / 100;
                v = v / 100;
                var h1 = Math.floor(h / 60) % 6;
                var f = h / 60 - h1;
                var p = v * (1 - s);
                var q = v * (1 - f * s);
                var t = v * (1 - (1 - f) * s);
                var r, g, b;
                switch (h1) {
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                }
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            };
            color.hexTorgb = function (val) {
                val = val.replace("#", "");
                val = val.trim();
                return (parseInt(val.substring(0, 2), 16) + "," + parseInt(val.substring(2, 4), 16) + "," + parseInt(val.substring(4, 6), 16));
            };
            color.rgbToHex = function (R, G, B) {
                return this.toHex(R) + this.toHex(G) + this.toHex(B);
            };
            color.toHex = function (n) {
                n = parseInt(n, 10);
                if (isNaN(n))
                    return "00";
                n = Math.max(0, Math.min(n, 255));
                return "0123456789ABCDEF".charAt((n - n % 16) / 16)
                    + "0123456789ABCDEF".charAt(n % 16);
            };
            color.RgbToCmyk = function (R, G, B) {
                if ((R == 0) && (G == 0) && (B == 0)) {
                    return [0, 0, 0, 1];
                }
                else {
                    var calcR = 1 - (R / 255), calcG = 1 - (G / 255), calcB = 1 - (B / 255);
                    var K = Math.min(calcR, Math.min(calcG, calcB)), C = (calcR - K) / (1 - K), M = (calcG - K) / (1 - K), Y = (calcB - K) / (1 - K);
                    return (C.toFixed(4) + "," + M.toFixed(4) + "," + Y.toFixed(4) + "," + K.toFixed(4));
                }
            };
            color.cmyk2rgb = function (c, m, y, k) {
                var cmyk_c = Number(c);
                var cmyk_m = Number(m);
                var cmyk_y = Number(y);
                var cmyk_k = Number(k);
                if (cmyk_c > 0) {
                    cmyk_c = cmyk_c;
                }
                else if (cmyk_m > 0) {
                    cmyk_m = cmyk_m;
                }
                else if (cmyk_y > 0) {
                    cmyk_y = cmyk_y;
                }
                else if (cmyk_k > 0) {
                    cmyk_k = cmyk_k;
                }
                var rgb_r = 1 - Math.min(1, cmyk_c * (1 - cmyk_k) + cmyk_k);
                var rgb_g = 1 - Math.min(1, cmyk_m * (1 - cmyk_k) + cmyk_k);
                var rgb_b = 1 - Math.min(1, cmyk_y * (1 - cmyk_k) + cmyk_k);
                rgb_r = Math.round(rgb_r * 255);
                rgb_g = Math.round(rgb_g * 255);
                rgb_b = Math.round(rgb_b * 255);
                return (rgb_r + "," + rgb_g + "," + rgb_b);
            };
            color.hsv2rgb = function (h, s, v) {
                var hsv_h = Number(h);
                var hsv_s = Number(s);
                var hsv_v = Number(v);
                var i = Math.floor(hsv_h * 6);
                var f = hsv_h * 6 - i;
                var p = hsv_v * (1 - hsv_s);
                var q = hsv_v * (1 - f * hsv_s);
                var t = hsv_v * (1 - (1 - f) * hsv_s);
                var rgb_r = 0, rgb_g = 0, rgb_b = 0;
                switch (i % 6) {
                    case 0:
                        rgb_r = hsv_v;
                        rgb_g = t;
                        rgb_b = p;
                        break;
                    case 1:
                        rgb_r = q;
                        rgb_g = hsv_v;
                        rgb_b = p;
                        break;
                    case 2:
                        rgb_r = p;
                        rgb_g = hsv_v;
                        rgb_b = t;
                        break;
                    case 3:
                        rgb_r = p;
                        rgb_g = q;
                        rgb_b = hsv_v;
                        break;
                    case 4:
                        rgb_r = t;
                        rgb_g = p;
                        rgb_b = hsv_v;
                        break;
                    case 5:
                        rgb_r = hsv_v, rgb_g = p, rgb_b = q;
                        break;
                }
                return (Math.floor(rgb_r * 255) + "," + Math.floor(rgb_g * 255) + "," + Math.floor(rgb_b * 255));
            };
            color.rgb2hsv = function (r, g, b) {
                var hsv_red = Number(r) / 255;
                var hsv_green = Number(g) / 255;
                var hsv_blue = Number(b) / 255;
                var hsv_max = Math.max(hsv_red, hsv_green, hsv_blue);
                var hsv_min = Math.min(hsv_red, hsv_green, hsv_blue);
                var hsv_h;
                var hsv_s;
                var hsv_v = hsv_max;
                var hsv_d = hsv_max - hsv_min;
                hsv_s = hsv_max == 0 ? 0 : hsv_d / hsv_max;
                if (hsv_max == hsv_min)
                    hsv_h = 0;
                else {
                    switch (hsv_max) {
                        case hsv_red:
                            hsv_h = (hsv_green - hsv_blue) / hsv_d + (hsv_green < hsv_blue ? 6 : 0);
                            break;
                        case hsv_green:
                            hsv_h = (hsv_blue - hsv_red) / hsv_d + 2;
                            break;
                        case hsv_blue:
                            hsv_h = (hsv_red - hsv_green) / hsv_d + 4;
                            break;
                    }
                    hsv_h /= 6;
                }
                return (hsv_h.toFixed(4) + "," + hsv_s.toFixed(4) + "," + hsv_v.toFixed(4));
            };
            return color;
        }());
        algo.color = color;
        __reflect(color.prototype, "tubao.algo.color");
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        /**
         * 场景排序算法，传入一个显示列表自动进行层级排序
         * @param {egret.DisplayObjectContainer} display 显示对象列表
         */
        function disSort(display) {
            if (!display) {
                return;
            }
            if (display.numChildren <= 1) {
                //一个对象无需排序
                return;
            }
            var valueYList = [];
            //y值列表
            for (var indexVal = 0; indexVal < display.numChildren; indexVal++) {
                valueYList[indexVal] = display.getChildAt(indexVal).y;
                //遍历获取显示对象y值记录下来
            }
            var newY = tubao.algo.algo.arrSortMinToMax(valueYList);
            //新排序出来的y值
            for (var e = 0; e < newY.length; e++) {
                //循环新排序
                for (var c = 0; c < display.numChildren; c++) {
                    //遍历显示列表
                    if (display.getChildAt(c).y == newY[e]) {
                        display.setChildIndex(display.getChildAt(c), e);
                    }
                }
            }
        }
        algo.disSort = disSort;
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        var moveMath;
        (function (moveMath) {
            /**
             * 方向
             */
            var direction;
            (function (direction) {
                /**前 */
                direction[direction["front"] = 0] = "front";
                /**前左 */
                direction[direction["frontLeft"] = 1] = "frontLeft";
                /**前右 */
                direction[direction["frontRight"] = 2] = "frontRight";
                /**后 */
                direction[direction["rear"] = 3] = "rear";
                /**后左 */
                direction[direction["rearLeft"] = 4] = "rearLeft";
                /**后右 */
                direction[direction["rearRight"] = 5] = "rearRight";
                /**左 */
                direction[direction["left"] = 6] = "left";
                /**右 */
                direction[direction["right"] = 7] = "right";
            })(direction = moveMath.direction || (moveMath.direction = {}));
            /**
             * 方向类型
             */
            var vrType;
            (function (vrType) {
                /**四方向 */
                vrType[vrType["four"] = 0] = "four";
                /**八方向 */
                vrType[vrType["eight"] = 1] = "eight";
            })(vrType = moveMath.vrType || (moveMath.vrType = {}));
            /**
             * 移动位置计算工具
             * @param {number} x 移动去的位置x
             * @param {number} y 移动去的位置y
             * @param {boolean} vr 方向类型true：4方向行走，false：8方向行走
             */
            function movePoint(thisX, thisY, gotoX, gotoY, vrState) {
                if (vrState === void 0) { vrState = vrType.eight; }
                var downX = Math.abs(gotoX - thisX / 2);
                //长度宽
                var downY = Math.abs(gotoY - thisY / 2);
                //长度高
                var c = thisX > gotoX ? thisX - gotoX : gotoX - thisX;
                var d = thisY > gotoY ? thisY - gotoY : gotoY - thisY;
                var distance = Math.sqrt((c * c) + (d * d));
                //勾股定理计算标准速度值
                var angleSpeed = Math.atan2(gotoY - thisY, gotoX - thisX);
                //0,0点到位置的弧度
                var vr = angleSpeed * 180 / Math.PI;
                //角度
                var dire = getDirection(vr, vrState);
                //方向
                return { dire: dire, vr: vr, angleSpeed: angleSpeed, distance: distance, gapWidth: c, gapHeight: d };
            }
            moveMath.movePoint = movePoint;
            /**
             * 根据角度获取方向工具
             * @param {number} vr 角度
             * @param {vrType} type 方向类型
             * @return {direction} 返回一个方向
             */
            function getDirection(vr, type) {
                switch (type) {
                    case vrType.four:
                        //四方向
                        return getDirectionFor(vr);
                    case vrType.eight:
                        //八方向
                        return getDirectionEight(vr);
                }
            }
            moveMath.getDirection = getDirection;
            /**
             * 根据角度获取四方向工具
             * @param {number} vr 角度
             * @return {direction} 返回一个方向
             */
            function getDirectionFor(vr) {
                if (vr <= 45 && vr >= -45) {
                    return direction.right;
                }
                else if (vr <= 135 && vr >= 46) {
                    return direction.front;
                }
                else if (vr <= -45 && vr >= -135) {
                    return direction.rear;
                }
                else if (vr <= -135 || vr >= 135) {
                    return direction.left;
                }
            }
            moveMath.getDirectionFor = getDirectionFor;
            /**
             * 根据角度获取八方向工具
             * @param {number} vr 角度
             * @return {direction} 返回一个方向
             */
            function getDirectionEight(vr) {
                if (vr <= 20 && vr >= -20) {
                    return direction.right;
                }
                else if (vr <= 110 && vr >= 70) {
                    return direction.front;
                }
                else if (vr <= -170 || vr >= 170) {
                    return direction.left;
                }
                else if (vr <= -70 && vr >= -110) {
                    return direction.rear;
                }
                else if (vr < 70 && vr > 20) {
                    return direction.frontRight;
                }
                else if (vr < 170 && vr > 110) {
                    return direction.frontLeft;
                }
                else if (vr < -110 && vr > -170) {
                    return direction.rearLeft;
                }
                else if (vr < -20 && vr > -70) {
                    return direction.rearRight;
                }
            }
            moveMath.getDirectionEight = getDirectionEight;
        })(moveMath = algo.moveMath || (algo.moveMath = {}));
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        /**
         * 工具箱
         */
        var tool = (function () {
            function tool() {
            }
            /**
             * 获取一个随机字符串
             * @param {number} len 随机长度
             * @returns {string} 随机字符串
             */
            tool.randomString = function (len) {
                var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                var maxPos = chars.length;
                var pwd = '';
                for (var i = 0; i < len; i++) {
                    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            };
            /**
             * 获取一个随机字符串
             * @param {number} len 随机长度
             * @returns {string} 随机字符串
             */
            tool.randomStringu = function (len) {
                var chars = '㐀㐁㐂㐃㐄㐅㐆㐇㐈㐉㐐㐑㐒㐓㐔㐕㐖㐗㐘㐙㐠㐡㐢㐣㐤㐥㐦㐧㐨㐩㐰㐱㐲㐳㐴㐵㐶㐷㐸㐹㑀㑁㑂㑃㑄㑅㑆㑇㑈㑉㑐㑑㑒㑓㑔㑕㑖㑗㑘㑙㑠㑡㑢㑣㑤㑥㑦㑧㑨㑩㑰㑱㑲㑳㑴㑵㑶㑷㑸㑹㒀㒁㒂㒃㒄㒅㒆㒇㒈㒉㒐㒑㒒㒓㒔㒕㒖㒗㒘㒙㔀㔁㔂㔃㔄㔅㔆㔇㔈㔉㔐㔑㔒㔓㔔㔕㔖㔗㔘㔙㔠㔡㔢㔣㔤㔥㔦㔧㔨㔩㔰㔱㔲㔳㔴㔵㔶㔷㔸㔹㕀㕁㕂㕃㕄㕅㕆㕇㕈㕉㕐㕑㕒㕓㕔㕕㕖㕗㕘㕙㕠㕡㕢㕣㕤㕥㕦㕧㕨㕩㕰㕱㕲㕳㕴㕵㕶㕷㕸㕹㖀㖁㖂㖃㖄㖅㖆㖇㖈㖉㖐㖑㖒㖓㖔㖕㖖㖗㖘㖙㘀㘁㘂㘃㘄㘅㘆㘇㘈㘉㘐㘑㘒㘓㘔㘕㘖㘗㘘㘙㘠㘡㘢㘣㘤㘥㘦㘧㘨㘩㘰㘱㘲㘳㘴㘵㘶㘷㘸㘹㙀㙁㙂㙃㙄㙅㙆㙇㙈㙉㙐㙑㙒㙓㙔㙕㙖㙗㙘㙙㙠㙡㙢㙣㙤㙥㙦㙧㙨㙩㙰㙱㙲㙳㙴㙵㙶㙷㙸㙹㚀㚁㚂㚃㚄㚅㚆㚇㚈㚉㚐㚑㚒㚓㚔㚕㚖㚗㚘㚙㜀㜁㜂㜃㜄㜅㜆㜇㜈㜉㜐㜑㜒㜓㜔㜕㜖㜗㜘㜙㜠㜡㜢㜣㜤㜥㜦㜧㜨㜩㜰㜱㜲㜳㜴㜵㜶㜷㜸㜹㝀㝁㝂㝃㝄㝅㝆㝇㝈㝉㝐㝑㝒㝓㝔㝕㝖㝗㝘㝙㝠㝡㝢㝣㝤㝥㝦㝧㝨㝩㝰㝱㝲㝳㝴㝵㝶㝷㝸㝹㞀㞁㞂㞃㞄㞅㞆㞇㞈㞉㞐㞑㞒㞓㞔㞕㞖㞗㞘㞙㠀㠁㠂㠃㠄㠅㠆㠇㠈㠉㠐㠑㠒㠓㠔㠕㠖㠗㠘㠙㠠㠡㠢㠣㠤㠥㠦㠧㠨㠩㠰㠱㠲㠳㠴㠵㠶㠷㠸㠹㡀㡁㡂㡃㡄㡅㡆㡇㡈㡉㡐㡑㡒㡓㡔㡕㡖㡗㡘㡙㡠㡡㡢㡣㡤㡥㡦㡧㡨㡩㡰㡱㡲㡳㡴㡵㡶㡷㡸㡹㢀㢁㢂㢃㢄㢅㢆㢇㢈㢉㢐㢑㢒㢓㢔㢕㢖㢗㢘㢙㤀㤁㤂㤃㤄㤅㤆㤇㤈㤉㤐㤑㤒㤓㤔㤕㤖㤗㤘㤙㤠㤡㤢㤣㤤㤥㤦㤧㤨㤩㤰㤱㤲㤳㤴㤵㤶㤷㤸㤹㥀㥁㥂㥃㥄㥅㥆㥇㥈㥉㥐㥑㥒㥓㥔㥕㥖㥗㥘㥙㥠㥡㥢㥣㥤㥥㥦㥧㥨㥩㥰㥱㥲㥳㥴㥵㥶㥷㥸㥹㦀㦁㦂㦃㦄㦅㦆㦇㦈㦉㦐㦑㦒㦓㦔㦕㦖㦗㦘㦙䀀䀁䀂䀃䀄䀅䀆䀇䀈䀉䀐䀑䀒䀓䀔䀕䀖䀗䀘䀙䀠䀡䀢䀣䀤䀥䀦䀧䀨䀩䀰䀱䀲䀳䀴䀵䀶䀷䀸䀹䁀䁁䁂䁃䁄䁅䁆䁇䁈䁉䁐䁑䁒䁓䁔䁕䁖䁗䁘䁙䁠䁡䁢䁣䁤䁥䁦䁧䁨䁩䁰䁱䁲䁳䁴䁵䁶䁷䁸䁹䂀䂁䂂䂃䂄䂅䂆䂇䂈䂉䂐䂑䂒䂓䂔䂕䂖䂗䂘䂙䄀䄁䄂䄃䄄䄅䄆䄇䄈䄉䄐䄑䄒䄓䄔䄕䄖䄗䄘䄙䄠䄡䄢䄣䄤䄥䄦䄧䄨䄩䄰䄱䄲䄳䄴䄵䄶䄷䄸䄹䅀䅁䅂䅃䅄䅅䅆䅇䅈䅉䅐䅑䅒䅓䅔䅕䅖䅗䅘䅙䅠䅡䅢䅣䅤䅥䅦䅧䅨䅩䅰䅱䅲䅳䅴䅵䅶䅷䅸䅹䆀䆁䆂䆃䆄䆅䆆䆇䆈䆉䆐䆑䆒䆓䆔䆕䆖䆗䆘䆙䈀䈁䈂䈃䈄䈅䈆䈇䈈䈉䈐䈑䈒䈓䈔䈕䈖䈗䈘䈙䈠䈡䈢䈣䈤䈥䈦䈧䈨䈩䈰䈱䈲䈳䈴䈵䈶䈷䈸䈹䉀䉁䉂䉃䉄䉅䉆䉇䉈䉉䉐䉑䉒䉓䉔䉕䉖䉗䉘䉙䉠䉡䉢䉣䉤䉥䉦䉧䉨䉩䉰䉱䉲䉳䉴䉵䉶䉷䉸䉹䊀䊁䊂䊃䊄䊅䊆䊇䊈䊉䊐䊑䊒䊓䊔䊕䊖䊗䊘䊙䌀䌁䌂䌃䌄䌅䌆䌇䌈䌉䌐䌑䌒䌓䌔䌕䌖䌗䌘䌙䌠䌡䌢䌣䌤䌥䌦䌧䌨䌩䌰䌱䌲䌳䌴䌵䌶䌷䌸䌹䍀䍁䍂䍃䍄䍅䍆䍇䍈䍉䍐䍑䍒䍓䍔䍕䍖䍗䍘䍙䍠䍡䍢䍣䍤䍥䍦䍧䍨䍩䍰䍱䍲䍳䍴䍵䍶䍷䍸䍹䎀䎁䎂䎃䎄䎅䎆䎇䎈䎉䎐䎑䎒䎓䎔䎕䎖䎗䎘䎙䐀䐁䐂䐃䐄䐅䐆䐇䐈䐉䐐䐑䐒䐓䐔䐕䐖䐗䐘䐙䐠䐡䐢䐣䐤䐥䐦䐧䐨䐩䐰䐱䐲䐳䐴䐵䐶䐷䐸䐹䑀䑁䑂䑃䑄䑅䑆䑇䑈䑉䑐䑑䑒䑓䑔䑕䑖䑗䑘䑙䑠䑡䑢䑣䑤䑥䑦䑧䑨䑩䑰䑱䑲䑳䑴䑵䑶䑷䑸䑹䒀䒁䒂䒃䒄䒅䒆䒇䒈䒉䒐䒑䒒䒓䒔䒕䒖䒗䒘䒙䔀䔁䔂䔃䔄䔅䔆䔇䔈䔉䔐䔑䔒䔓䔔䔕䔖䔗䔘䔙䔠䔡䔢䔣䔤䔥䔦䔧䔨䔩䔰䔱䔲䔳䔴䔵䔶䔷䔸䔹䕀䕁䕂䕃䕄䕅䕆䕇䕈䕉䕐䕑䕒䕓䕔䕕䕖䕗䕘䕙䕠䕡䕢䕣䕤䕥䕦䕧䕨䕩䕰䕱䕲䕳䕴䕵䕶䕷䕸䕹䖀䖁䖂䖃䖄䖅䖆䖇䖈䖉䖐䖑䖒䖓䖔䖕䖖䖗䖘䖙䘀䘁䘂䘃䘄䘅䘆䘇䘈䘉䘐䘑䘒䘓䘔䘕䘖䘗䘘䘙䘠䘡䘢䘣䘤䘥䘦䘧䘨䘩䘰䘱䘲䘳䘴䘵䘶䘷䘸䘹䙀䙁䙂䙃䙄䙅䙆䙇䙈䙉䙐䙑䙒䙓䙔䙕䙖䙗䙘䙙䙠䙡䙢䙣䙤䙥䙦䙧䙨䙩䙰䙱䙲䙳䙴䙵䙶䙷䙸䙹䚀䚁䚂䚃䚄䚅䚆䚇䚈䚉䚐䚑䚒䚓䚔䚕䚖䚗䚘䚙䜀䜁䜂䜃䜄䜅䜆䜇䜈䜉䜐䜑䜒䜓䜔䜕䜖䜗䜘䜙䜠䜡䜢䜣䜤䜥䜦䜧䜨䜩䜰䜱䜲䜳䜴䜵䜶䜷䜸䜹䝀䝁䝂䝃䝄䝅䝆䝇䝈䝉䝐䝑䝒䝓䝔䝕䝖䝗䝘䝙䝠䝡䝢䝣䝤䝥䝦䝧䝨䝩䝰䝱䝲䝳䝴䝵䝶䝷䝸䝹䞀䞁䞂䞃䞄䞅䞆䞇䞈䞉䞐䞑䞒䞓䞔䞕䞖䞗䞘䞙䠀䠁䠂䠃䠄䠅䠆䠇䠈䠉䠐䠑䠒䠓䠔䠕䠖䠗䠘䠙䠠䠡䠢䠣䠤䠥䠦䠧䠨䠩䠰䠱䠲䠳䠴䠵䠶䠷䠸䠹䡀䡁䡂䡃䡄䡅䡆䡇䡈䡉䡐䡑䡒䡓䡔䡕䡖䡗䡘䡙䡠䡡䡢䡣䡤䡥䡦䡧䡨䡩䡰䡱䡲䡳䡴䡵䡶䡷䡸䡹䢀䢁䢂䢃䢄䢅䢆䢇䢈䢉䢐䢑䢒䢓䢔䢕䢖䢗䢘䢙䤀䤁䤂䤃䤄䤅䤆䤇䤈䤉䤐䤑䤒䤓䤔䤕䤖䤗䤘䤙䤠䤡䤢䤣䤤䤥䤦䤧䤨䤩䤰䤱䤲䤳䤴䤵䤶䤷䤸䤹䥀䥁䥂䥃䥄䥅䥆䥇䥈䥉䥐䥑䥒䥓䥔䥕䥖䥗䥘䥙䥠䥡䥢䥣䥤䥥䥦䥧䥨䥩䥰䥱䥲䥳䥴䥵䥶䥷䥸䥹䦀䦁䦂䦃䦄䦅䦆䦇䦈䦉䦐䦑䦒䦓䦔䦕䦖䦗䦘䦙倀倁倂倃倄倅倆倇倈倉倐們倒倓倔倕倖倗倘候倠倡倢倣値倥倦倧倨倩倰倱倲倳倴倵倶倷倸倹偀偁偂偃偄偅偆假偈偉偐偑偒偓偔偕偖偗偘偙偠偡偢偣偤健偦偧偨偩偰偱偲偳側偵偶偷偸偹傀傁傂傃傄傅傆傇傈傉傐傑傒傓傔傕傖傗傘備儀儁儂儃億儅儆儇儈儉儐儑儒儓儔儕儖儗儘儙儠儡儢儣儤儥儦儧儨儩儰儱儲儳儴儵儶儷儸儹兀允兂元兄充兆兇先光児兑兒兓兔兕兖兗兘兙兠兡兢兣兤入兦內全兩兰共兲关兴兵其具典兹冀冁冂冃冄内円冇冈冉冐冑冒冓冔冕冖冗冘写刀刁刂刃刄刅分切刈刉刐刑划刓刔刕刖列刘则删刡刢刣判別刦刧刨利到刱刲刳刴刵制刷券刹剀剁剂剃剄剅剆則剈剉剐剑剒剓剔剕剖剗剘剙剠剡剢剣剤剥剦剧剨剩剰剱割剳剴創剶剷剸剹劀劁劂劃劄劅劆劇劈劉劐劑劒劓劔劕劖劗劘劙匀匁匂匃匄包匆匇匈匉匐匑匒匓匔匕化北匘匙匠匡匢匣匤匥匦匧匨匩匰匱匲匳匴匵匶匷匸匹區十卂千卄卅卆升午卉卐卑卒卓協单卖南単卙占卡卢卣卤卥卦卧卨卩印危卲即却卵卶卷卸卹厀厁厂厃厄厅历厇厈厉厐厑厒厓厔厕厖厗厘厙吀吁吂吃各吅吆吇合吉吐向吒吓吔吕吖吗吘吙吠吡吢吣吤吥否吧吨吩吰吱吲吳吴吵吶吷吸吹呀呁呂呃呄呅呆呇呈呉呐呑呒呓呔呕呖呗员呙呠呡呢呣呤呥呦呧周呩呰呱呲味呴呵呶呷呸呹咀咁咂咃咄咅咆咇咈咉咐咑咒咓咔咕咖咗咘咙唀唁唂唃唄唅唆唇唈唉唐唑唒唓唔唕唖唗唘唙唠唡唢唣唤唥唦唧唨唩唰唱唲唳唴唵唶唷唸唹啀啁啂啃啄啅商啇啈啉啐啑啒啓啔啕啖啗啘啙啠啡啢啣啤啥啦啧啨啩啰啱啲啳啴啵啶啷啸啹喀喁喂喃善喅喆喇喈喉喐喑喒喓喔喕喖喗喘喙嘀嘁嘂嘃嘄嘅嘆嘇嘈嘉嘐嘑嘒嘓嘔嘕嘖嘗嘘嘙嘠嘡嘢嘣嘤嘥嘦嘧嘨嘩嘰嘱嘲嘳嘴嘵嘶嘷嘸嘹噀噁噂噃噄噅噆噇噈噉噐噑噒噓噔噕噖噗噘噙噠噡噢噣噤噥噦噧器噩噰噱噲噳噴噵噶噷噸噹嚀嚁嚂嚃嚄嚅嚆嚇嚈嚉嚐嚑嚒嚓嚔嚕嚖嚗嚘嚙圀圁圂圃圄圅圆圇圈圉圐圑園圓圔圕圖圗團圙圠圡圢圣圤圥圦圧在圩地圱圲圳圴圵圶圷圸圹址坁坂坃坄坅坆均坈坉坐坑坒坓坔坕坖块坘坙坠坡坢坣坤坥坦坧坨坩坰坱坲坳坴坵坶坷坸坹垀垁垂垃垄垅垆垇垈垉垐垑垒垓垔垕垖垗垘垙堀堁堂堃堄堅堆堇堈堉堐堑堒堓堔堕堖堗堘堙堠堡堢堣堤堥堦堧堨堩堰報堲堳場堵堶堷堸堹塀塁塂塃塄塅塆塇塈塉塐塑塒塓塔塕塖塗塘塙塠塡塢塣塤塥塦塧塨塩塰塱塲塳塴塵塶塷塸塹墀墁墂境墄墅墆墇墈墉墐墑墒墓墔墕墖増墘墙夀夁夂夃处夅夆备夈変夐夑夒夓夔夕外夗夘夙夠夡夢夣夤夥夦大夨天夰失夲夳头夵夶夷夸夹奀奁奂奃奄奅奆奇奈奉奐契奒奓奔奕奖套奘奙奠奡奢奣奤奥奦奧奨奩奰奱奲女奴奵奶奷奸她妀妁如妃妄妅妆妇妈妉妐妑妒妓妔妕妖妗妘妙怀态怂怃怄怅怆怇怈怉怐怑怒怓怔怕怖怗怘怙怠怡怢怣怤急怦性怨怩怰怱怲怳怴怵怶怷怸怹恀恁恂恃恄恅恆恇恈恉恐恑恒恓恔恕恖恗恘恙恠恡恢恣恤恥恦恧恨恩恰恱恲恳恴恵恶恷恸恹悀悁悂悃悄悅悆悇悈悉悐悑悒悓悔悕悖悗悘悙愀愁愂愃愄愅愆愇愈愉愐愑愒愓愔愕愖愗愘愙愠愡愢愣愤愥愦愧愨愩愰愱愲愳愴愵愶愷愸愹慀慁慂慃慄慅慆慇慈慉慐慑慒慓慔慕慖慗慘慙慠慡慢慣慤慥慦慧慨慩慰慱慲慳慴慵慶慷慸慹憀憁憂憃憄憅憆憇憈憉憐憑憒憓憔憕憖憗憘憙戀戁戂戃戄戅戆戇戈戉成我戒戓戔戕或戗战戙戠戡戢戣戤戥戦戧戨戩戰戱戲戳戴戵戶户戸戹所扁扂扃扄扅扆扇扈扉扐扑扒打扔払扖扗托扙扠扡扢扣扤扥扦执扨扩扰扱扲扳扴扵扶扷扸批技抁抂抃抄抅抆抇抈抉抐抑抒抓抔投抖抗折抙挀持挂挃挄挅挆指挈按挐挑挒挓挔挕挖挗挘挙挠挡挢挣挤挥挦挧挨挩挰挱挲挳挴挵挶挷挸挹捀捁捂捃捄捅捆捇捈捉捐捑捒捓捔捕捖捗捘捙捠捡换捣捤捥捦捧捨捩捰捱捲捳捴捵捶捷捸捹掀掁掂掃掄掅掆掇授掉掐掑排掓掔掕掖掗掘掙搀搁搂搃搄搅搆搇搈搉搐搑搒搓搔搕搖搗搘搙搠搡搢搣搤搥搦搧搨搩搰搱搲搳搴搵搶搷搸搹摀摁摂摃摄摅摆摇摈摉摐摑摒摓摔摕摖摗摘摙摠摡摢摣摤摥摦摧摨摩摰摱摲摳摴摵摶摷摸摹撀撁撂撃撄撅撆撇撈撉撐撑撒撓撔撕撖撗撘撙攀攁攂攃攄攅攆攇攈攉攐攑攒攓攔攕攖攗攘攙攠攡攢攣攤攥攦攧攨攩攰攱攲攳攴攵收攷攸改敀敁敂敃敄故敆敇效敉敐救敒敓敔敕敖敗敘教敠敡敢散敤敥敦敧敨敩数敱敲敳整敵敶敷數敹斀斁斂斃斄斅斆文斈斉斐斑斒斓斔斕斖斗斘料昀昁昂昃昄昅昆昇昈昉昐昑昒易昔昕昖昗昘昙映昡昢昣昤春昦昧昨昩昰昱昲昳昴昵昶昷昸昹晀晁時晃晄晅晆晇晈晉晐晑晒晓晔晕晖晗晘晙晠晡晢晣晤晥晦晧晨晩晰晱晲晳晴晵晶晷晸晹暀暁暂暃暄暅暆暇暈暉暐暑暒暓暔暕暖暗暘暙最朁朂會朄朅朆朇月有朐朑朒朓朔朕朖朗朘朙朠朡朢朣朤朥朦朧木朩朰朱朲朳朴朵朶朷朸朹杀杁杂权杄杅杆杇杈杉材村杒杓杔杕杖杗杘杙杠条杢杣杤来杦杧杨杩杰東杲杳杴杵杶杷杸杹枀极枂枃构枅枆枇枈枉析枑枒枓枔枕枖林枘枙栀栁栂栃栄栅栆标栈栉栐树栒栓栔栕栖栗栘栙栠校栢栣栤栥栦栧栨栩栰栱栲栳栴栵栶样核根桀桁桂桃桄桅框桇案桉桐桑桒桓桔桕桖桗桘桙桠桡桢档桤桥桦桧桨桩桰桱桲桳桴桵桶桷桸桹梀梁梂梃梄梅梆梇梈梉梐梑梒梓梔梕梖梗梘梙椀椁椂';
                var maxPos = chars.length;
                var pwd = '';
                for (var i = 0; i < len; i++) {
                    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            };
            /**
             * 设置一个时间
             * @param {number} day 添加的天数
             */
            tool.TimerSet = function (day) {
                if (day === void 0) { day = 0; }
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate() + day;
                return year + "-" + month + "-" + day;
            };
            /**
             * 当前精确时间
             */
            tool.timerPricise = function () {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var xss = date.getHours(); //获取当前小时数(0-23)  
                var fzs = date.getMinutes(); //获取当前分钟数(0-59)  
                var miaosu = date.getSeconds(); //获取当前秒数(0-59)  
                return year + "-" + month + "-" + day + " " + xss + ":" + fzs + ":" + miaosu;
            };
            /**
             * 当前精确时间，日时分
             */
            tool.timerPricisehmg = function (dateStr) {
                var date = new Date(dateStr);
                var day = date.getDate();
                var xss = date.getHours(); //获取当前小时数(0-23)  
                var fzs = date.getMinutes(); //获取当前分钟数(0-59)  
                return day + "-" + xss + ":" + fzs;
            };
            /**
             * 当前粗糙的数据
             */
            tool.timerRough = function () {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate() + day;
                return year + "-" + month + "-" + day;
            };
            /**
             * 验证字符串
             * @param {string} str 字符串
             */
            tool.ver = function (str) {
                if (str == null) {
                    //密码验证非null
                    return false;
                }
                if (str == "") {
                    //没有输入密码
                    return false;
                }
                if (this.patrn.test(str)) {
                    //如果包含特殊字符返回false
                    return false;
                }
                return true;
            };
            /**
             * 随机打乱数组顺序
             * @param {any[]} arr 想打乱的数组
             * @return {any[]} 乱序数组
             */
            tool.chaosArr = function (arr) {
                return arr.sort(this.randomNumber);
            };
            tool.randomNumber = function () {
                return 0.5 - Math.random();
            };
            /**
             * 范围随机数
             * @param {number} start 开始数
             * @param {number} end 结束数
             * @return {number} 随机获得的数字
             */
            tool.scoueRandom = function (start, end) {
                return Math.floor(Math.random() * (start - end - 1) + end + 1);
            };
            /**
             * 获取几率
             * @param {number} odds 确定一个几率
             * @return {boolean} 几率成功失败
             */
            tool.odds = function (odds) {
                return (this.scoueRandom(1, 100) <= odds) ? true : false;
            };
            /**
             * 检查是否是一个数字
             * @param {number} num 检查的数字
             */
            tool.IsNumber = function (num) {
                if (isNaN(num)) {
                    return false;
                }
                else {
                    return true;
                }
            };
            /**
             * 检查是否是其中一个
             * @param {any} num 值
             * @param {any} muiti 组数据
             */
            tool.IsMuiti = function (num, muiti) {
                var bool = false;
                for (var a = 0; a < muiti.length; a++) {
                    if (muiti[a] == num) {
                        bool = true;
                    }
                }
                return bool;
            };
            /**
             * 检查数字是否是其中一个
             * @param {number} num 数值
             * @param {number[]} muiti 数值数组
             */
            tool.InNumber = function (num, muiti) {
                if (this.IsNumber(num)) {
                    return this.IsMuiti(num, muiti);
                }
                else {
                    return false;
                }
            };
            /**
             * 检查数字的范围是否在指定之内
             * @param {number} num 要检测的值
             * @param {number} min 最大值
             * @param {number} max 最小值
             */
            tool.NumberScope = function (num, min, max) {
                if (num >= min) {
                    if (num <= max) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            };
            /**
             * 检查一个数组是否在指定之内
             * @param {number[]} num 要检测的值数组
             * @param {number} min 最大值
             * @param {number} max 最小值
             */
            tool.ArrayAccord = function (arr, min, max) {
                for (var a = 0; a < arr.length; a++) {
                    if (!this.NumberScope(arr[a], min, max)) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * 检查一个字符串长度是否在指定之内
             * @param {string} str 要检测的字符串
             * @param {number} min 最大值
             * @param {number} max 最小值
             */
            tool.StringAccord = function (str, min, max) {
                if (this.isString(str)) {
                    if (str.length > min) {
                        if (str.length < max) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            };
            /**
             * 检查是否为字符串
             * @param {string} str 待验证字符串
             */
            tool.isString = function (str) {
                if (typeof (str) == "string") {
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             * 量空间交换算法
             * @param {any} val1 值1
             * @param {any} val2 值2
             */
            tool.swap = function (val1, val2) {
                var middle = val1;
                //中间变量，1倒m
                val1 = val2;
                //2倒1
                val2 = middle;
                //m倒2
            };
            /**
             * 枚举返回枚举列表数组，且排除指定值
             * @param {any} enumData 枚举数组
             * @param {any} ticu 剔除数据
             * @return {any[]} 返回枚举的数组列表
             */
            tool.enumGetArrExclude = function (enumData, exclude) {
                var dotTypeArr = [];
                //点类型数组
                for (var a in enumData) {
                    if (isNaN(Number(a)))
                        continue;
                    if (a == exclude)
                        continue;
                    dotTypeArr.push(Number(a));
                    //添加到数组里面
                }
                return dotTypeArr;
            };
            /**
             * 枚举返回枚举列表数组key
             * @param {any} enumData 枚举数组
             * @return {string[]} 返回枚举的数组列表
             */
            tool.enumGetArrKey = function (enumData) {
                var dotTypeArr = [];
                //点类型数组
                for (var a in enumData) {
                    if (!isNaN(Number(a)))
                        continue;
                    dotTypeArr.push(a);
                    //添加到数组里面
                }
                return dotTypeArr;
            };
            /**
             * 枚举返回枚举列表数组Value
             * @param {any} enumData 枚举数组
             * @return {number[]} 返回枚举的数组列表
             */
            tool.enumGetArrValue = function (enumData) {
                var dotTypeArr = [];
                //点类型数组
                for (var a in enumData) {
                    if (isNaN(Number(a)))
                        continue;
                    dotTypeArr.push(Number(a));
                    //添加到数组里面
                }
                return dotTypeArr;
            };
            /**
             * 返回枚举随机一项Value
             * @param {any} enumData 枚举数组
             * @return {number} 返回枚举的数组列表
             */
            tool.enumGetOneValue = function (enumData) {
                if (!enumData) {
                    console.log("\u8FD4\u56DE\u968F\u673A\u679A\u4E3E\u662F\u7A7A\u7684" + enumData);
                }
                var dotTypeArr = this.enumGetArrValue(enumData);
                //点类型数组
                var val = this.returnArrOneVal(dotTypeArr);
                return val;
            };
            /**
             * 随机返回数组里面的一个值
             * @param {any[]} arr 数组
             * @return {any} 返回的值
             */
            tool.returnArrOneVal = function (arr) {
                var dotTypeIndex = this.scoueRandom(0, arr.length - 1);
                //获取到的随机数
                return arr[dotTypeIndex];
            };
            /**密码匹配正则表达式 */
            tool.patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
            return tool;
        }());
        algo.tool = tool;
        __reflect(tool.prototype, "tubao.algo.tool");
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var algo;
    (function (algo) {
        /**
         * xxtea加密过程
         */
        var xxtea = (function () {
            function xxtea() {
                this.delta = 0x9E3779B9;
            }
            xxtea.getInstance = function () {
                if (!xxtea.instance) {
                    xxtea.instance = new xxtea();
                }
                return this.instance;
            };
            xxtea.prototype.toUint8Array = function (v, includeLength) {
                var length = v.length;
                var n = length << 2;
                if (includeLength) {
                    var m = v[length - 1];
                    n -= 4;
                    if ((m < n - 3) || (m > n)) {
                        return null;
                    }
                    n = m;
                }
                var bytes = new Uint8Array(n);
                for (var i = 0; i < n; ++i) {
                    bytes[i] = v[i >> 2] >> ((i & 3) << 3);
                }
                return bytes;
            };
            xxtea.prototype.toUint32Array = function (bytes, includeLength) {
                var length = bytes.length;
                var n = length >> 2;
                if ((length & 3) !== 0) {
                    ++n;
                }
                var v;
                if (includeLength) {
                    v = new Uint32Array(n + 1);
                    v[n] = length;
                }
                else {
                    v = new Uint32Array(n);
                }
                for (var i = 0; i < length; ++i) {
                    v[i >> 2] |= bytes[i] << ((i & 3) << 3);
                }
                return v;
            };
            xxtea.prototype.mx = function (sum, y, z, p, e, k) {
                return ((z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4)) ^ ((sum ^ y) + (k[p & 3 ^ e] ^ z));
            };
            xxtea.prototype.fixk = function (k) {
                if (k.length < 16) {
                    var key = new Uint8Array(16);
                    key.set(k);
                    k = key;
                }
                return k;
            };
            xxtea.prototype.encryptUint32Array = function (v, k) {
                var length = v.length;
                var n = length - 1;
                var y, z, sum, e, p, q;
                z = v[n];
                sum = 0;
                for (q = Math.floor(6 + 52 / length) | 0; q > 0; --q) {
                    sum += this.delta;
                    e = sum >>> 2 & 3;
                    for (p = 0; p < n; ++p) {
                        y = v[p + 1];
                        z = v[p] += this.mx(sum, y, z, p, e, k);
                    }
                    y = v[0];
                    z = v[n] += this.mx(sum, y, z, p, e, k);
                }
                return v;
            };
            xxtea.prototype.decryptUint32Array = function (v, k) {
                var length = v.length;
                var n = length - 1;
                var y, z, sum, e, p, q;
                y = v[0];
                q = Math.floor(6 + 52 / length);
                for (sum = q * this.delta; sum !== 0; sum -= this.delta) {
                    e = sum >>> 2 & 3;
                    for (p = n; p > 0; --p) {
                        z = v[p - 1];
                        y = v[p] -= this.mx(sum, y, z, p, e, k);
                    }
                    z = v[n];
                    y = v[0] -= this.mx(sum, y, z, p, e, k);
                }
                return v;
            };
            xxtea.prototype.toBytes = function (str) {
                var n = str.length;
                // A single code unit uses at most 3 bytes.
                // Two code units at most 4.
                var bytes = new Uint8Array(n * 3);
                var length = 0;
                for (var i = 0; i < n; i++) {
                    var codeUnit = str.charCodeAt(i);
                    if (codeUnit < 0x80) {
                        bytes[length++] = codeUnit;
                    }
                    else if (codeUnit < 0x800) {
                        bytes[length++] = 0xC0 | (codeUnit >> 6);
                        bytes[length++] = 0x80 | (codeUnit & 0x3F);
                    }
                    else if (codeUnit < 0xD800 || codeUnit > 0xDFFF) {
                        bytes[length++] = 0xE0 | (codeUnit >> 12);
                        bytes[length++] = 0x80 | ((codeUnit >> 6) & 0x3F);
                        bytes[length++] = 0x80 | (codeUnit & 0x3F);
                    }
                    else {
                        if (i + 1 < n) {
                            var nextCodeUnit = str.charCodeAt(i + 1);
                            if (codeUnit < 0xDC00 && 0xDC00 <= nextCodeUnit && nextCodeUnit <= 0xDFFF) {
                                var rune = (((codeUnit & 0x03FF) << 10) | (nextCodeUnit & 0x03FF)) + 0x010000;
                                bytes[length++] = 0xF0 | (rune >> 18);
                                bytes[length++] = 0x80 | ((rune >> 12) & 0x3F);
                                bytes[length++] = 0x80 | ((rune >> 6) & 0x3F);
                                bytes[length++] = 0x80 | (rune & 0x3F);
                                i++;
                                continue;
                            }
                        }
                        throw new Error('Malformed string');
                    }
                }
                return bytes.subarray(0, length);
            };
            xxtea.prototype.toShortString = function (bytes, n) {
                var charCodes = new Uint16Array(n);
                var i = 0, off = 0;
                for (var len = bytes.length; i < n && off < len; i++) {
                    var unit = bytes[off++];
                    switch (unit >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            charCodes[i] = unit;
                            break;
                        case 12:
                        case 13:
                            if (off < len) {
                                charCodes[i] = ((unit & 0x1F) << 6) |
                                    (bytes[off++] & 0x3F);
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        case 14:
                            if (off + 1 < len) {
                                charCodes[i] = ((unit & 0x0F) << 12) |
                                    ((bytes[off++] & 0x3F) << 6) |
                                    (bytes[off++] & 0x3F);
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        case 15:
                            if (off + 2 < len) {
                                var rune = (((unit & 0x07) << 18) |
                                    ((bytes[off++] & 0x3F) << 12) |
                                    ((bytes[off++] & 0x3F) << 6) |
                                    (bytes[off++] & 0x3F)) - 0x10000;
                                if (0 <= rune && rune <= 0xFFFFF) {
                                    charCodes[i++] = (((rune >> 10) & 0x03FF) | 0xD800);
                                    charCodes[i] = ((rune & 0x03FF) | 0xDC00);
                                }
                                else {
                                    throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
                                }
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        default:
                            throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
                    }
                }
                if (i < n) {
                    charCodes = charCodes.subarray(0, i);
                }
                return String.fromCharCode.apply(String, charCodes);
            };
            xxtea.prototype.toLongString = function (bytes, n) {
                var buf = [];
                var charCodes = new Uint16Array(0xFFFF);
                var i = 0, off = 0;
                for (var len = bytes.length; i < n && off < len; i++) {
                    var unit = bytes[off++];
                    switch (unit >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            charCodes[i] = unit;
                            break;
                        case 12:
                        case 13:
                            if (off < len) {
                                charCodes[i] = ((unit & 0x1F) << 6) |
                                    (bytes[off++] & 0x3F);
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        case 14:
                            if (off + 1 < len) {
                                charCodes[i] = ((unit & 0x0F) << 12) |
                                    ((bytes[off++] & 0x3F) << 6) |
                                    (bytes[off++] & 0x3F);
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        case 15:
                            if (off + 2 < len) {
                                var rune = (((unit & 0x07) << 18) |
                                    ((bytes[off++] & 0x3F) << 12) |
                                    ((bytes[off++] & 0x3F) << 6) |
                                    (bytes[off++] & 0x3F)) - 0x10000;
                                if (0 <= rune && rune <= 0xFFFFF) {
                                    charCodes[i++] = (((rune >> 10) & 0x03FF) | 0xD800);
                                    charCodes[i] = ((rune & 0x03FF) | 0xDC00);
                                }
                                else {
                                    throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
                                }
                            }
                            else {
                                throw new Error('Unfinished UTF-8 octet sequence');
                            }
                            break;
                        default:
                            throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
                    }
                    if (i >= 65534) {
                        var size = i + 1;
                        buf.push(String.fromCharCode.apply(String, charCodes.subarray(0, size)));
                        n -= size;
                        i = -1;
                    }
                }
                if (i > 0) {
                    buf.push(String.fromCharCode.apply(String, charCodes.subarray(0, i)));
                }
                return buf.join('');
            };
            xxtea.prototype.toString = function (bytes) {
                var n = bytes.length;
                if (n === 0)
                    return '';
                return ((n < 100000) ?
                    this.toShortString(bytes, n) :
                    this.toLongString(bytes, n));
            };
            xxtea.prototype.encrypt = function (data, key) {
                if (typeof data === 'string')
                    data = this.toBytes(data);
                if (typeof key === 'string')
                    key = this.toBytes(key);
                if (data === undefined || data === null || data.length === 0) {
                    return data;
                }
                return this.toUint8Array(this.encryptUint32Array(this.toUint32Array(data, true), this.toUint32Array(this.fixk(key), false)), false);
            };
            xxtea.prototype.encryptToString = function (data, key) {
                return this.encrypt(data, key).toString('base64');
            };
            xxtea.prototype.decrypt = function (data, key) {
                if (typeof data === 'string')
                    data = data.toString();
                if (typeof key === 'string')
                    key = this.toBytes(key);
                if (data === undefined || data === null || data.length === 0) {
                    return data;
                }
                return this.toUint8Array(this.decryptUint32Array(this.toUint32Array(data, false), this.toUint32Array(this.fixk(key), false)), true);
            };
            xxtea.prototype.decryptToString = function (data, key) {
                return this.toString(this.decrypt(data, key));
            };
            return xxtea;
        }());
        algo.xxtea = xxtea;
        __reflect(xxtea.prototype, "tubao.algo.xxtea");
    })(algo = tubao.algo || (tubao.algo = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 按钮基类点击按钮时产生点击效果
         */
        var buttonCore = (function (_super) {
            __extends(buttonCore, _super);
            function buttonCore() {
                var _this = _super.call(this) || this;
                _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.buttonResult, _this);
                return _this;
            }
            buttonCore.prototype.buttonResult = function (event) {
                tubao.Effect.button.button(this, 1);
            };
            return buttonCore;
        }(eui.Component));
        base.buttonCore = buttonCore;
        __reflect(buttonCore.prototype, "tubao.base.buttonCore");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
/**
 * 遥感
 */
var tubao;
(function (tubao) {
    var joyStick;
    (function (joyStick_1) {
        var joyStickEvent = (function () {
            function joyStickEvent() {
            }
            /** 摇杆按下开始接受事件时候派发 */
            joyStickEvent.EVENT_JOY_START = "event_joy_start";
            /** 触摸抬起后出发摇杆本次摇杆事件结束 */
            joyStickEvent.EVENT_JOY_END = "event_joy_end";
            /** 摇杆角度改变时候派发 */
            joyStickEvent.EVENT_JOY_CHANGE = "event_joy_change";
            /** 初始化摇杆完成后触发 */
            joyStickEvent.EVENT_INIT_COMPLETE = "event_init_complete";
            return joyStickEvent;
        }());
        joyStick_1.joyStickEvent = joyStickEvent;
        __reflect(joyStickEvent.prototype, "tubao.joyStick.joyStickEvent");
        var joyStickType = (function () {
            function joyStickType() {
            }
            /** 四方位 */
            joyStickType.TYPE_FOUR = 4;
            /** 八方为 */
            joyStickType.TYPE_EIGHT = 8;
            return joyStickType;
        }());
        joyStick_1.joyStickType = joyStickType;
        __reflect(joyStickType.prototype, "tubao.joyStick.joyStickType");
        var JoyStickComponent = (function (_super) {
            __extends(JoyStickComponent, _super);
            /**
             * 初始化摇杆参数
             * @param type 方向为定义在 joyStickType类下 目前仅实现八方为
             * @param joyBg 摇杆背景纹理(可选)
             * @param joyStick 摇杆纹理(可选)
             * @param skin //皮肤文件(可选)如果用exml必须满足 有_joybg和_joyStick两个eui.image控件
             */
            function JoyStickComponent(type, joyBg, joyStick, skin) {
                var _this = _super.call(this) || this;
                _this._minAlpha = 0.2;
                _this._maxAlpha = 0.5;
                _this._angle = 0; //当前角度
                _this._bgRadius = 0; //背景半径
                _this._joyRadius = 0; //摇杆的半径
                _this._touchID = 0;
                _this._isSkinFlag = false;
                _this._type = type;
                if (skin) {
                    _this._isSkinFlag = true;
                    _this.once(egret.Event.COMPLETE, function () {
                        _this._isSkinFlag = false;
                        _this.childrenCreated();
                    }, _this);
                }
                else {
                    if (joyBg && joyStick) {
                        _this._joybg = new eui.Image(joyBg);
                        _this._joyStick = new eui.Image(joyStick);
                    }
                }
                return _this;
            }
            JoyStickComponent.prototype.childrenCreated = function () {
                _super.prototype.childrenCreated.call(this);
                if (this._isSkinFlag)
                    return;
                //初始化设置一些数据
                if (!this._joybg.parent)
                    this.addChild(this._joybg);
                if (!this._joyStick.parent)
                    this.addChild(this._joyStick);
                this.width = this._joybg.width;
                this.height = this._joybg.height;
                //初始化半径
                this._bgRadius = this._joybg.texture.textureWidth / 2;
                this._joyRadius = this._joyStick.texture.textureWidth / 2;
                this._joyStick.anchorOffsetX = this._joyStick.texture.textureWidth / 2;
                this._joyStick.anchorOffsetY = this._joyStick.texture.textureHeight / 2;
                this._initJoyPoint = new egret.Point(this.width / 2, this.height / 2);
                this._joyStick.x = this._initJoyPoint.x;
                this._joyStick.y = this._initJoyPoint.y;
                this.alpha = this._minAlpha;
                this.touchEnabled = true;
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_INIT_COMPLETE));
            };
            JoyStickComponent.prototype.onTouchBegin = function (e) {
                var _this = this;
                this.showJoy(function () {
                    _this._mouseX = e.stageX;
                    _this._mouseY = e.stageY;
                    _this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
                    _this.stage.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
                    _this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_JOY_START));
                });
            };
            JoyStickComponent.prototype.onTouchMove = function (e) {
                if (this._touchID == 0) {
                    this._touchID = e.touchPointID;
                }
                if (e.touchPointID != this._touchID)
                    return;
                var moveX = e.stageX - this._mouseX;
                var moveY = e.stageY - this._mouseY;
                //本次移动亮
                var cx = this._joyStick.x;
                var cy = this._joyStick.y;
                moveX = cx + moveX;
                moveY = cy + moveY;
                //计算当前位置的点的角度要减去初始位置
                var rx = moveX - this._initJoyPoint.x;
                var ry = this._initJoyPoint.y - moveY;
                var atan = rx == 0 ? 0 : ry / rx;
                var radian = Math.atan(atan);
                var quadrant;
                //计算象限
                if (rx < 0) {
                    if (ry >= 0) {
                        this._angle = radian / Math.PI * 180 + 180;
                        quadrant = 2;
                    }
                    else {
                        this._angle = radian / Math.PI * 180 + 180;
                        quadrant = 3;
                    }
                }
                else {
                    //x有半轴
                    if (ry >= 0) {
                        this._angle = radian / Math.PI * 180;
                        quadrant = 1;
                    }
                    else {
                        this._angle = radian / Math.PI * 180 + 360;
                        quadrant = 4;
                    }
                }
                //这里区分方向类别
                if (this._type == joyStickType.TYPE_FOUR) {
                    //四方向
                    if (this._angle >= 0 && this._angle < 45) {
                        this._angle = 0;
                    }
                    else if (this._angle >= 45 && this._angle < 90) {
                        this._angle = 90;
                    }
                    else if (this._angle >= 90 && this._angle < 135) {
                        this._angle = 90;
                    }
                    else if (this._angle >= 135 && this._angle < 180) {
                        this._angle = 180;
                    }
                    else if (this._angle >= 180 && this._angle < 225) {
                        this._angle = 180;
                    }
                    else if (this._angle >= 225 && this._angle < 270) {
                        this._angle = 270;
                    }
                    else if (this._angle >= 270 && this._angle < 315) {
                        this._angle = 270;
                    }
                    else if (this._angle >= 315 && this._angle < 360) {
                        this._angle = 0;
                    }
                    //根据角度重新赋值
                }
                var disance = Math.sqrt(rx * rx + ry * ry) + this._joyRadius;
                if (disance > this._bgRadius) {
                    disance = this._bgRadius - this._joyRadius;
                    moveX = Math.abs(Math.cos(radian) * disance);
                    moveY = Math.abs(Math.sin(radian) * disance);
                    switch (quadrant) {
                        case 1:
                            moveX += this._initJoyPoint.x;
                            moveY = this._initJoyPoint.y - moveY;
                            break;
                        case 2:
                            moveX = this._initJoyPoint.x - moveX;
                            moveY = this._initJoyPoint.y - moveY;
                            break;
                        case 3:
                            moveX = this._initJoyPoint.x - moveX;
                            moveY += this._initJoyPoint.y;
                            break;
                        case 4:
                            moveX += this._initJoyPoint.x;
                            moveY += this._initJoyPoint.y;
                            break;
                    }
                }
                this._joyStick.x = moveX;
                this._joyStick.y = moveY;
                this._mouseX = e.stageX;
                this._mouseY = e.stageY;
                this.dispatchEventWith(joyStickEvent.EVENT_JOY_CHANGE, false, { angle: this._angle });
            };
            JoyStickComponent.prototype.onTouchEnd = function (e) {
                var _this = this;
                this._touchID = 0;
                this.endJoy(function () {
                    _this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
                    _this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
                    _this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_JOY_END));
                });
            };
            JoyStickComponent.prototype.showJoy = function (callBack) {
                egret.Tween.get(this).to({ alpha: this._maxAlpha }, 100).call(function () {
                    callBack();
                }, this);
            };
            JoyStickComponent.prototype.endJoy = function (callBack) {
                var _this = this;
                egret.Tween.get(this._joyStick).to({ x: this._initJoyPoint.x, y: this._initJoyPoint.y }, 100).call(function () {
                    egret.Tween.get(_this).to({ alpha: _this._minAlpha }, 100).call(function () {
                        callBack();
                    }, _this);
                }, this);
            };
            /**
             * 获取当前角度信息
             */
            JoyStickComponent.prototype.getAngle = function () {
                return this._angle;
            };
            JoyStickComponent.prototype.destroy = function () {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                egret.Tween.removeTweens(this);
                egret.Tween.removeTweens(this._joyStick);
            };
            return JoyStickComponent;
        }(eui.Component));
        joyStick_1.JoyStickComponent = JoyStickComponent;
        __reflect(JoyStickComponent.prototype, "tubao.joyStick.JoyStickComponent");
    })(joyStick = tubao.joyStick || (tubao.joyStick = {}));
})(tubao || (tubao = {}));
/// <reference path="panel.ts" />
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 条状提示单条
         */
        var hintBox = (function (_super) {
            __extends(hintBox, _super);
            //加载父类用于引用
            /**
             * 条状提示单条
             * @param {string} word 提示文字内容十五字
             * @param {hint} view 加载父类
             * @param {any} color 提示文字内容的颜色
             */
            function hintBox(word, view, Color) {
                var _this = _super.call(this) || this;
                _this.skinName = "tubao.base.hintBoxSkin";
                _this.View = view;
                _this.word.text = word;
                _this.word.textColor = Color;
                _this.timer = new egret.Timer(4000);
                _this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
                    _this.timer.stop();
                    egret.Tween.get(_this).to({ alpha: 0 }, 2000).call(function () {
                        _this.View.ClearAll();
                    }, _this);
                }, _this);
                _this.timer.start();
                _this.horizontalCenter = 0;
                return _this;
            }
            return hintBox;
        }(eui.Component));
        __reflect(hintBox.prototype, "hintBox");
        /**
         * 条状消息提示
         */
        var hint = (function (_super) {
            __extends(hint, _super);
            //条状池，用来存放构建的提示条
            /**
             * 条状消息提示
             */
            function hint() {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                _this.timer = new egret.Timer(4000);
                //每一条的显示时间
                _this.pool = [];
                _this.skinName = "tubao.base.hintSkin";
                _this.touchEnabled = false;
                //不允许点击
                _this.zhu.visible = false;
                //组默认隐藏
                _this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
                    _this.timer.stop();
                    egret.Tween.get(_this.zhu).to({ alpha: 0 }, 2000).call(function () {
                        _this.close();
                    });
                }, _this);
                return _this;
            }
            /**
             * 发送一个提示条
             * @param {string} word 提示文字内容十五字
             * @param {any} color 提示文字内容的颜色
             * @param {boolean} type 提示文字类型，默认不叠加，true = 叠加，fasle=不叠加
             */
            hint.prototype.send = function (word, color, type) {
                if (color === void 0) { color = "#502007"; }
                if (type === void 0) { type = false; }
                this.open();
                tubao.Effect.Popup.Resuit(this, 1);
                if (type) {
                    //叠加
                    this.word.text = word;
                    this.word.textColor = color;
                    this.timer.start();
                    this.zhu.visible = true;
                    this.zhu.alpha = 1;
                }
                else {
                    //不叠加
                    var a = new hintBox(word, this, color);
                    this.addChild(a);
                    if (this.pool.length == 0) {
                        a.y = 57;
                    }
                    else {
                        a.y = 5 + this.pool[this.pool.length - 1].y + this.pool[this.pool.length - 1].height;
                    }
                    this.pool.push(a);
                }
                this.open();
            };
            /**
             * 清理提示列表
             */
            hint.prototype.ClearAll = function () {
                var b = true;
                for (var a = 0; a < this.pool.length; a++) {
                    if (this.pool[a].alpha != 0) {
                        b = false;
                    }
                }
                if (b) {
                    for (var a = 0; a < this.pool.length; a++) {
                        this.removeChild(this.pool[a]);
                        this.pool[a].timer.removeEventListener(egret.TimerEvent.TIMER, function () { }, this);
                        this.pool[a] = null;
                    }
                    this.pool = [];
                    this.close();
                }
            };
            return hint;
        }(base.panel));
        base.hint = hint;
        __reflect(hint.prototype, "tubao.base.hint");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
/// <reference path="panel.ts" />
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 公告面板
         */
        var notice = (function (_super) {
            __extends(notice, _super);
            /**
             * 公告面板可以显示给用户文字内容
             * @param {string} 公告内的文字内容
             */
            function notice(word) {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                _this.skinName = "tubao.base.noticeSkin";
                if (word.length < 0) {
                    return _this;
                }
                _this.Word.text = word;
                //文字内容
                _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.close, _this);
                //关闭面板
                _this.open();
                return _this;
            }
            /**
             * 面板关闭
             */
            notice.prototype.close = function () {
                _super.prototype.close.call(this);
                this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
                //关闭面板
            };
            return notice;
        }(base.panel));
        base.notice = notice;
        __reflect(notice.prototype, "tubao.base.notice");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 图片面板，只包含一张图片的面板
         */
        var paper = (function (_super) {
            __extends(paper, _super);
            /**
             * 图片面板，里面会显示一张图片展示到玩家面前，点击关闭
             * @param {string} img 图片资源名字
             * @param {boolean} closePanel 关闭面板
             */
            function paper(img, closePanel) {
                if (closePanel === void 0) { closePanel = true; }
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Popup) || this;
                _this.skinName = "tubao.base.paperSkin";
                //皮肤
                _this.closePanel = closePanel;
                //是否允许关闭面板
                _this.img.source = img;
                //设置资源
                if (closePanel)
                    _this.img.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.close, _this);
                //监听点击
                tubao.utils.dragDisplauy(_this.img);
                //可以拖动
                _this.open();
                return _this;
                //打开
            }
            /**
             * 关闭面板
             */
            paper.prototype.close = function () {
                _super.prototype.close.call(this);
                if (this.closePanel)
                    this.img.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            };
            return paper;
        }(base.panel));
        base.paper = paper;
        __reflect(paper.prototype, "tubao.base.paper");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 消息情节记录面板
         */
        var plot = (function (_super) {
            __extends(plot, _super);
            //回调函数
            /**
             * 消息情节记录面板，这里可以写长篇一些的文字内容且必须包含一个图片
             * @param {string} img 图片资源名字
             * @param {number} sele 缩放XY比例
             * @param {string} word 希望显示的情节消息文字内容
             * @param {Function} fun 回调函数
             */
            function plot(img, sele, word, fun) {
                if (fun === void 0) { fun = undefined; }
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                _this.skinName = "tubao.base.plotSkin";
                _this.word.text = word;
                _this.fun = fun;
                _this.img.source = img;
                _this.img.scaleX = sele;
                _this.img.scaleY = sele;
                _this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.close, _this);
                _this.open();
                return _this;
            }
            /**
             * 关闭面板
             */
            plot.prototype.close = function () {
                _super.prototype.close.call(this);
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
                if (this.fun) {
                    this.fun();
                }
            };
            return plot;
        }(base.panel));
        base.plot = plot;
        __reflect(plot.prototype, "tubao.base.plot");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 灰度图片类
     */
    var grayImg = (function (_super) {
        __extends(grayImg, _super);
        function grayImg() {
            var _this = _super.call(this) || this;
            _this.colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            _this.colorFlilter = new egret.ColorMatrixFilter(_this.colorMatrix);
            return _this;
            //颜色矩阵数组
        }
        Object.defineProperty(grayImg.prototype, "gray", {
            /**
             * 灰度
             */
            set: function (type) {
                if (type) {
                    //取消灰度
                    this.filters = null;
                    this.touchEnabled = true;
                    this.alpha = 1;
                }
                else {
                    //灰度了
                    this.filters = [this.colorFlilter];
                    this.touchEnabled = false;
                    this.alpha = 0.5;
                }
            },
            enumerable: true,
            configurable: true
        });
        return grayImg;
    }(eui.Image));
    tubao.grayImg = grayImg;
    __reflect(grayImg.prototype, "tubao.grayImg");
    /**
     * 显示对象灰度工具
     */
    function gray(dis) {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        //灰色矩阵
        var colorFlilter;
        //滤镜
        dis.filters = [new egret.ColorMatrixFilter(colorMatrix)];
        //设置灰度
    }
    tubao.gray = gray;
})(tubao || (tubao = {}));
/// <reference path = "../utils/drag.ts" />
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 弹窗提示
         */
        var popup = (function (_super) {
            __extends(popup, _super);
            /**
             * 创建一个提示弹窗显示给玩家，可以给玩家提示信息内容，且包含一个确定按钮。
             * @param {string} ico 图标，指定资源名
             * @param {string} word 想要展现给玩家的话，尽量保持在15字
             * @param {Function} fun 回调函数，点击确定后执行的函数默认不写不执行
             */
            function popup(ico, word, fun) {
                if (fun === void 0) { fun = undefined; }
                var _this = _super.call(this) || this;
                _this.skinName = "tubao.base.popupSkin";
                _this.word.text = word;
                if (RES.getRes(ico) == null) {
                    _this.ico.source = ico;
                }
                else {
                    _this.ico.source = ico;
                    RES.getResAsync(ico, function (data) {
                        _this.ico.source = data;
                    }, _this);
                }
                _this.percentHeight = 100;
                _this.percentWidth = 100;
                //相对父级容器高度的百分比。
                tubao.Effect.Popup.Resuit(_this, 2);
                //弹窗特效
                tubao.layer.LayerManager.UI_Message.addChild(_this);
                //添加到显示列表
                _this.fun = fun;
                _this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.close, _this);
                return _this;
                //点击按钮监听
            }
            /**
             * 关闭面板
             */
            popup.prototype.close = function () {
                if (this.fun) {
                    this.fun();
                }
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
                tubao.layer.LayerManager.UI_Message.removeChild(this);
                //将自己在显示列表移除
                tubao.sound.manager.playEffect("A8_mp3");
                //播放音效
            };
            return popup;
        }(tubao.utils.drag));
        base.popup = popup;
        __reflect(popup.prototype, "tubao.base.popup");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 场景提示工具
         */
        var sceneHint = (function (_super) {
            __extends(sceneHint, _super);
            /**
             * 场景提示工具
             */
            function sceneHint() {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_MainUp) || this;
                _this.skinName = "tubao.base.sceneHintSkin";
                return _this;
            }
            /**
             * 发送场景文字内容
             * @param {string} word 显示文字内容
             */
            sceneHint.prototype.send = function (word) {
                var _this = this;
                if (word == "no") {
                    return;
                }
                this.open();
                this.sceneName.visible = true;
                this.sceneName.text = "-" + word + "-";
                this.sceneName.alpha = 0.5;
                this.sceneName.y = 160;
                egret.Tween.get(this.sceneName)
                    .to({ alpha: 1, y: 190 }, 300)
                    .to({ alpha: 1 }, 3000)
                    .to({ alpha: 0, y: 160 }, 2000).call(function () {
                    _this.close();
                });
            };
            return sceneHint;
        }(base.panel));
        base.sceneHint = sceneHint;
        __reflect(sceneHint.prototype, "tubao.base.sceneHint");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 双项选择器
         */
        var select = (function (_super) {
            __extends(select, _super);
            /**
             * 双向选择器，显示一个图片，提示一段话可以点击确定取消按钮，按下不同按钮运行不同的逻辑过程。
             * @param {string} ico 图片资源名字
             * @param {string} word 提示内容十五字文字内容
             * @param {Function} fun0 确定回调函数，必须设置
             * @param {Function} fun1 取消回调函数，必须设置
             */
            function select(ico, word, thisObject, fun0, fun1) {
                if (fun1 === void 0) { fun1 = null; }
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                //回调函数们
                _this.qingdingjiemianannweizhihuhuan = true;
                _this.skinName = "tubao.base.selectSkin";
                //皮肤
                tubao.Effect.Popup.Resuit(_this, 1);
                //打开特效
                _this.word.text = word;
                RES.getResAsync(ico, function (data) {
                    _this.ico.source = data;
                }, _this);
                _this.fun0 = fun0;
                _this.fun1 = fun1;
                _this.thisObject = thisObject;
                if (_this.qingdingjiemianannweizhihuhuan) {
                    tubao.algo.algo.DisLocationExchange(_this.closeBtn0, _this.closeBtn1);
                }
                _this.closeBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closePage0, _this);
                _this.closeBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closePage1, _this);
                tubao.utils.dragDisplauy(_this);
                //添加可拖动功能
                _this.open();
                return _this;
            }
            select.prototype.closePage0 = function () {
                this.close();
                this.fun0.call(this.thisObject);
            };
            select.prototype.closePage1 = function () {
                this.close();
                if (this.fun1) {
                    this.fun1.call(this.thisObject);
                }
            };
            return select;
        }(base.panel));
        base.select = select;
        __reflect(select.prototype, "tubao.base.select");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var base;
    (function (base) {
        /**
         * 三项选择器
         */
        var selectS = (function (_super) {
            __extends(selectS, _super);
            //回调函数们
            /**
             * 三项选择器，提供三个按钮确定，取消，返回按下不同按钮触发不同回调函数
             * @param {string} ico 选择器图标资源名字
             * @param {string} word 显示的文字提示十五字
             * @param {any} thisObject 回调函数作用域
             * @param {Function} fun0 回调函数确定
             * @param {Function} fun1 回调函数取消
             * @param {Function} fun2 回调函数返回
             */
            function selectS(ico, word, thisObject, fun0, fun1, fun2) {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Message) || this;
                _this.skinName = "tubao.base.selectSSkin";
                tubao.Effect.Popup.Resuit(_this, 1);
                _this.word.text = word;
                _this.ico.source = ico;
                _this.thisObject = thisObject;
                _this.fun0 = fun0;
                _this.fun1 = fun1;
                _this.fun2 = fun2;
                _this.closeBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closePage0, _this);
                _this.closeBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closePage1, _this);
                _this.closeBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closePage2, _this);
                _this.open();
                return _this;
            }
            selectS.prototype.closePage0 = function () {
                this.close();
                this.fun0.call(this.thisObject);
            };
            selectS.prototype.closePage1 = function () {
                this.close();
                this.fun1.call(this.thisObject);
            };
            selectS.prototype.closePage2 = function () {
                this.close();
                this.fun2.call(this.thisObject);
            };
            return selectS;
        }(base.panel));
        base.selectS = selectS;
        __reflect(selectS.prototype, "tubao.base.selectS");
    })(base = tubao.base || (tubao.base = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 一个点
     */
    var dot = (function (_super) {
        __extends(dot, _super);
        /**
         * 一个点
         * @param {number} x 定位x坐标
         * @param {number} y 定位y坐标
         * @param {number} color 颜色
         */
        function dot(x, y, color) {
            var _this = _super.call(this) || this;
            _this.size = 5;
            _this.bgColor = color;
            _this.borderColor = 0x666666;
            _this.borderSize = 0;
            _this.cornerRadius = 9;
            _this.halfSize = Math.round(_this.size / 2);
            _this.graphics.beginFill(_this.bgColor);
            _this.graphics.lineStyle(_this.borderSize, _this.borderColor);
            _this.graphics.drawCircle(_this.halfSize, _this.halfSize, _this.halfSize);
            _this.graphics.endFill();
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return dot;
    }(egret.Shape));
    tubao.dot = dot;
    __reflect(dot.prototype, "tubao.dot");
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var DB;
    (function (DB) {
        /**
         * 龙骨事件类
         */
        var dbEvent = (function (_super) {
            __extends(dbEvent, _super);
            function dbEvent(type, bubbles, cancelable) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                return _super.call(this, type, bubbles, cancelable) || this;
            }
            /**加载完成且初始化完成 */
            dbEvent.lodingOver = "加载完成";
            return dbEvent;
        }(egret.Event));
        DB.dbEvent = dbEvent;
        __reflect(dbEvent.prototype, "tubao.DB.dbEvent");
    })(DB = tubao.DB || (tubao.DB = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var DB;
    (function (DB) {
        /**
         * 龙骨应用类提供上层应用功能
         */
        var DBuse = (function (_super) {
            __extends(DBuse, _super);
            function DBuse() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.AnGroup = {};
                //动画组json列表
                _this.bqStatic = true;
                return _this;
            }
            //表示当前表情状态，避免粘连，true表示可以进行做表情，false表示不能做表情
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
            DBuse.prototype.setSlotImgInTime = function (skeletonName, slotName, time, imgResName, imgResX, imgResY, imgResRotation, imgResVisible, lodingType) {
                var _this = this;
                if (time === void 0) { time = 0; }
                if (lodingType === void 0) { lodingType = true; }
                if (!this.nameGetSlot(skeletonName, slotName)) {
                    return;
                }
                //显示服装
                if (time) {
                    var slotData = this.nameGetSlot(skeletonName, slotName);
                    //插槽数据
                    var bmp = new egret.Bitmap(slotData.display.texture);
                    //位图资源
                    var data = slotData.offset;
                    //相对于骨架或父骨骼坐标系的偏移变换
                    this.setSlotImg(skeletonName, slotName, imgResName, imgResX, imgResY, imgResRotation, imgResVisible, lodingType);
                    this.bqStatic = false;
                    setTimeout(function () {
                        _this.setSlotImg(skeletonName, slotName, bmp.texture, data.x, data.y, data.rotation, imgResVisible, lodingType);
                        _this.bqStatic = true;
                    }, time, this);
                }
                else {
                    this.setSlotImg(skeletonName, slotName, imgResName, imgResX, imgResY, imgResRotation, imgResVisible, lodingType);
                }
            };
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
            DBuse.prototype.setSlotImg = function (skeletonName, slotName, imgResName, imgResX, imgResY, imgResRotation, imgResVisible, lodingType) {
                if (lodingType === void 0) { lodingType = true; }
                return __awaiter(this, void 0, void 0, function () {
                    var slot, Bitmap;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                slot = this.nameGetSlot(skeletonName, slotName);
                                if (!slot) {
                                    return [2 /*return*/];
                                }
                                Bitmap = new egret.Bitmap();
                                if (!(typeof imgResName == "string")) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.reqData(imgResName, lodingType)];
                            case 1:
                                _a.sent();
                                //等待加载完成
                                Bitmap.texture = RES.getRes(imgResName);
                                return [3 /*break*/, 3];
                            case 2:
                                Bitmap.texture = imgResName;
                                _a.label = 3;
                            case 3:
                                Bitmap.anchorOffsetX = Bitmap.width / 2;
                                Bitmap.anchorOffsetY = Bitmap.height / 2;
                                //设置资源定位
                                Bitmap.visible = imgResVisible;
                                //显示隐藏
                                slot.offset.x = imgResX;
                                slot.offset.y = imgResY;
                                //定位
                                slot.offset.rotation = imgResRotation;
                                //旋转
                                slot.display = Bitmap;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            /**
             * 请求数据
             * @param {string} str 资源名字
             * @param {boolean} lodingType 资源加载类型 true：res管理内置资源，false：外部url方式加载
             */
            DBuse.prototype.reqData = function (str, lodingType) {
                var _this = this;
                if (lodingType === void 0) { lodingType = true; }
                return new Promise(function (resolve) {
                    if (lodingType) {
                        RES.getResAsync(str, function () {
                            resolve(true);
                        }, _this);
                    }
                    else {
                        RES.getResByUrl(str, function () {
                            resolve(true);
                        }, _this);
                    }
                });
            };
            /**
             * 动画组序列播放
             * @param skeletonName 骨架名字
             * @param anGroup 动画组要添加的数据[[动画名字，循环次数]，动画名字，[动画名字，循环次数]]
             * @param fun 函数回调
             */
            DBuse.prototype.anGropuPlay = function (skeletonName, anGroup, fun) {
                var _this = this;
                if (fun === void 0) { fun = null; }
                if (!this.AnGroup[skeletonName]) {
                    this.AnGroup[skeletonName] = [];
                    //没有动画就初始化一个空，使其不至于undefined报错
                }
                this.AnGroup[skeletonName] = this.AnGroup[skeletonName].concat(anGroup);
                //添加动画组序列表结合
                var skeleton = this.nameGetSkeleton(skeletonName);
                //骨骼数据
                this.anPlay(skeletonName, fun);
                //播放运行组动画
                skeleton.eventDispatcher.addDBEventListener(dragonBones.EventObject.COMPLETE, function () {
                    console.log("动画播放完成。");
                    _this.anPlay(skeletonName, fun);
                }, this);
            };
            /**
             * 动画开始播放且可回调
             * @param skeletonName 骨架组名字
             * @param fun 回调方法
             */
            DBuse.prototype.anPlay = function (skeletonName, fun) {
                if (fun === void 0) { fun = null; }
                var skeleton = this.nameGetSkeleton(skeletonName);
                //骨骼数据
                var anName = this.AnGroup[skeletonName].shift();
                //返回一个动画名字，且每次删除一个元素
                if (anName) {
                    //有可用序列
                    if (typeof (anName) == "string") {
                        //单个就播放一次
                        skeleton.animation.gotoAndPlayByFrame(anName, 1, 1);
                    }
                    else if (typeof (anName) == "object") {
                        //播放制定次数
                        skeleton.animation.gotoAndPlayByFrame(anName[0], 1, anName[1]);
                    }
                }
                else {
                    skeleton.eventDispatcher.addDBEventListener(dragonBones.EventObject.COMPLETE, function () { }, this);
                    //卸载监听
                    if (fun) {
                        fun(); //执行回调函数
                    }
                }
            };
            /**
             * 动画控制
             * @param skeletonName 骨架名字
             * @param anName 动画名字
             * @param Control 动画的控制 boolean-true：一直播放，boolean-false：停止，number：指定帧开始播放动画
             * @param anSize 动画设置  播放次数。 [-1: 使用动画数据默认值, 0: 无限循环播放, [1~N]: 循环播放 N 次]
             */
            DBuse.prototype.anControl = function (skeletonName, anName, Control, anSize) {
                if (anSize === void 0) { anSize = null; }
                if (!anName) {
                    console.error("未定义动画名不能播放动画。anControl");
                    return;
                }
                var skeleton = this.nameGetSkeleton(skeletonName);
                //骨骼数据
                var dataType = typeof (Control);
                //数据类型
                if (dataType == "boolean") {
                    if (Control) {
                        skeleton.animation.play(anName);
                        //播放骨架上的动画
                    }
                    else {
                        skeleton.animation.stop(anName);
                        //停止播放骨架上的动画
                    }
                }
                else if (dataType == "number") {
                    if (anSize == null) {
                        skeleton.animation.stop(anName);
                    }
                    else {
                        skeleton.animation.gotoAndPlayByFrame(anName, Control, anSize);
                        //播放骨架上的动画
                    }
                }
            };
            /**
             * 混合动画播放
             * @param {string} skeletonName 骨骼名字
             * @param {mixanPlayInter} anGroup 动画组
             * @param {Function} fun 回调函数
             * @return {dragonBones.AnimationState} 动画状态由播放动画数据时产生
             */
            DBuse.prototype.mixAnPlay = function (skeletonName, anGroup, fun) {
                if (fun === void 0) { fun = null; }
                var skeleton = this.nameGetSkeleton(skeletonName);
                //骨骼数据
                var animationState = skeleton.animation.fadeIn(anGroup.anName, anGroup.fadeInTime, anGroup.playTimes, 0, anGroup.group);
                //混合动画
                if (anGroup.mask) {
                    for (var mk in anGroup.mask) {
                        animationState.addBoneMask(anGroup.mask[mk]);
                        //进行骨骼遮罩
                    }
                }
                return animationState;
            };
            /**
             * 混合动画组播放
             * @param {string} skeletonName 骨骼名字
             * @param {mixanPlayInter[]} anGroup 动画组
             * @param {Function} fun 回调函数
             */
            DBuse.prototype.mixAnPlayArr = function (skeletonName, anGroup, fun) {
                if (fun === void 0) { fun = null; }
                var skeleton = this.nameGetSkeleton(skeletonName);
                //骨骼数据
                for (var a in anGroup) {
                    this.mixAnPlay(skeletonName, anGroup[a], fun);
                    //混合动画播放
                }
            };
            /**
             * 设置插槽到特定位置显示不同插槽里面内容
             * @param {dragonBones.Slot} slot 插槽
             * @param {number} index 位置
             * @return {number} 返回当前索引位置
             */
            DBuse.prototype.setDBSlotIndex = function (skeletonName, slotName, index) {
                var slot = this.nameGetSlot(skeletonName, slotName);
                //插槽对象
                if (slot.displayList.length < index) {
                    console.log("\u63D2\u69FD" + slot.name + "\u7684\u7D22\u5F15index\u4F4D\u7F6E" + index + "\u8BBE\u7F6E\u8D8A\u754C\u4E86,\u9ED8\u8BA4\u7D22\u5F15\u5230\u7B2C\u4E00\u4E2A\uFF01");
                    index = 0;
                }
                return slot.displayIndex = index;
            };
            return DBuse;
        }(DB.DBbasice));
        DB.DBuse = DBuse;
        __reflect(DBuse.prototype, "tubao.DB.DBuse");
    })(DB = tubao.DB || (tubao.DB = {}));
})(tubao || (tubao = {}));
/**
 * 下拉列表组件
 */
var tubao;
(function (tubao) {
    var list;
    (function (list) {
        /**
         * 下拉列表类
         */
        var downList = (function (_super) {
            __extends(downList, _super);
            function downList() {
                var _this = _super.call(this) || this;
                _this.pool = [];
                _this.skinName = "tubao.list.downListSkin";
                _this.img_cf.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    //触发
                    _this.switch();
                }, _this);
                _this.switch();
                _this.init();
                return _this;
            }
            /**
             * 添加一个项
             * Nur:基础id消息
             * Name:跟的名字
             */
            downList.prototype.AddBox = function (Nur, Name) {
                var _this = this;
                var box = new list.downListNape(Nur, Name);
                box.y = this.pool.length * 26;
                box.width = this.width;
                this.btn_Pool.addChild(box);
                this.pool.push(box);
                box.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    _this.present = box.nur;
                    _this.lab_dq.text = box.lab_nr.text;
                    _this.switch();
                    _this.chufa(box);
                }, this);
            };
            /**
             * 清理全部
             */
            downList.prototype.ClearAll = function () {
                for (var a = 0; a < this.pool.length; a++) {
                    this.pool[a].removeEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
                    this.btn_Pool.removeChild(this.pool[a]);
                    this.pool[a] = null;
                }
                this.pool = [];
            };
            /**
             * 删除一个指定项
             * @param {number} nur 删除的nur
             */
            downList.prototype.delList = function (nur) {
                for (var a in this.pool) {
                    if (this.pool[a].nur == nur) {
                        this.btn_Pool.removeChild(this.pool[a]);
                        this.pool[a].removeEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
                        this.pool.splice(Number(a), 1);
                    }
                }
                for (var a in this.pool) {
                    this.pool[a].y = 26 * Number(a);
                }
            };
            /**
             * 触发开启关闭
             */
            downList.prototype.switch = function () {
                if (this.gdst.visible) {
                    this.gdst.visible = false;
                    this.gdst.height = 0;
                }
                else {
                    this.gdst.visible = true;
                    this.gdst.height = 300;
                }
            };
            /**
             * 选择第一项
             */
            downList.prototype.selectOne = function () {
                if (this.pool.length <= 0) {
                    return;
                }
                this.present = this.pool[0].nur;
                this.lab_dq.text = this.pool[0].lab_nr.text;
            };
            /**
             * 根据id选择项
             */
            downList.prototype.lineIDSelect = function (id, Name) {
                this.present = id;
                this.lab_dq.text = id + "(" + Name + ")";
            };
            /**
             * 触发
             */
            downList.prototype.chufa = function (obj) {
            };
            /**
             * 初始化
             */
            downList.prototype.init = function () {
            };
            return downList;
        }(eui.Component));
        list.downList = downList;
        __reflect(downList.prototype, "tubao.list.downList");
    })(list = tubao.list || (tubao.list = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var list;
    (function (list) {
        /**
         * 下拉列表的单个项
         */
        var downListNape = (function (_super) {
            __extends(downListNape, _super);
            function downListNape(Nur, Name) {
                var _this = _super.call(this) || this;
                _this.nur = null;
                _this.Name = null;
                _this.skinName = "tubao.list.downListNapeSkin";
                _this.nur = Nur;
                _this.Name = Name;
                _this.lab_nr.text = Name + "(" + Nur + ")";
                return _this;
            }
            return downListNape;
        }(eui.Component));
        list.downListNape = downListNape;
        __reflect(downListNape.prototype, "tubao.list.downListNape");
    })(list = tubao.list || (tubao.list = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var editor;
    (function (editor) {
        /**
         * 数值转换
         */
        var translation = (function () {
            function translation() {
            }
            /**
             * 透明度p->h
             */
            translation.prototype.alphaH = function (val) {
                return val != undefined ? val * 10 : 1;
            };
            /**
             * 透明度h->p
             */
            translation.prototype.alphaP = function (val) {
                return val != undefined ? val / 10 : 1;
            };
            /**
             * 旋转p->h
             */
            translation.prototype.rotationH = function (val) {
                return val != undefined ? val : 0;
            };
            /**
             * 旋转h->p
             */
            translation.prototype.rotationP = function (val) {
                return val != undefined ? val : 0;
            };
            /**
             * 缩放p->h
             */
            translation.prototype.scaleH = function (val) {
                return val != undefined ? val * 10 : 1;
            };
            /**
             * 缩放h->p
             */
            translation.prototype.scaleP = function (val) {
                return val != undefined ? val / 10 : 1;
            };
            /**
             * 显示处理过程
             * @param {egret.DisplayObject} display 控制的显示对象
             * @param {boolean} val 是否显示
             */
            translation.prototype.visible = function (display, val) {
                if (val) {
                    //显示
                    display.blendMode = egret.BlendMode.NORMAL;
                    display['visibleTu'] = true;
                }
                else {
                    //隐藏
                    display.blendMode = egret.BlendMode.ERASE;
                    display['visibleTu'] = false;
                }
                return true;
            };
            return translation;
        }());
        editor.translation = translation;
        __reflect(translation.prototype, "tubao.editor.translation");
        /**转换数值p：原本，h：转换 */
        editor.tran = new translation();
    })(editor = tubao.editor || (tubao.editor = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 文字逐步显示
     */
    var charStep = (function (_super) {
        __extends(charStep, _super);
        //显示全部的文本内容
        function charStep() {
            var _this = _super.call(this) || this;
            _this.instantly = 0;
            //当下文字逐步显示的位置
            _this.timer = new egret.Timer(100);
            _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.timerStep, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touchTap, _this);
            return _this;
            //点击后
        }
        /**
         * 时间调度
         */
        charStep.prototype.timerStep = function () {
            if (this._allWord.length > this.instantly - 1) {
                this.text = this._allWord.substring(0, this.instantly);
                this.instantly++;
            }
            else {
                this.timer.stop();
            }
        };
        /**
         * 点击后显示全部
         */
        charStep.prototype.touchTap = function () {
            this.timer.stop();
            this.text = this._allWord;
        };
        Object.defineProperty(charStep.prototype, "allWord", {
            /**
             * 获取说话的全部内容
             */
            get: function () {
                return this._allWord;
            },
            /**
             * 设置说话的全部内容
             * @param {string} word
             */
            set: function (word) {
                this._allWord = word;
                //全部的文本内容
                this.instantly = 0;
                //重置
                this.timer.start();
                //开始
            },
            enumerable: true,
            configurable: true
        });
        return charStep;
    }(eui.Label));
    tubao.charStep = charStep;
    __reflect(charStep.prototype, "tubao.charStep");
})(tubao || (tubao = {}));
/// <reference path = "tubaoDisplayObjectEditorBase.ts" />
/**
 * 兔宝玩家编辑器
 */
var tubao;
(function (tubao) {
    var editor;
    (function (editor) {
        /**
         * 兔宝玩家显示对象编辑组件
         */
        var tubaoDisplayObjectEditor = (function (_super) {
            __extends(tubaoDisplayObjectEditor, _super);
            /**
             * 兔宝玩家显示对象编辑组件
             */
            function tubaoDisplayObjectEditor() {
                var _this = _super.call(this) || this;
                _this.huanYuanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.huanYuanFun, _this);
                //还原按钮
                _this.shanCuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.shanCuFun, _this);
                return _this;
                //删除按钮
            }
            /**
             * 删除函数
             */
            tubaoDisplayObjectEditor.prototype.shanCuFun = function () {
                this.display.parent.removeChild(this.display);
                //卸载显示对象
            };
            /**
             * 还原函数
             */
            tubaoDisplayObjectEditor.prototype.huanYuanFun = function () {
                _super.prototype.huanYuanFun.call(this);
                this.display.visible = true;
                this.display.alpha = 1;
                this.display.rotation = 0;
                this.display.scaleX = 1;
                this.display.scaleY = 1;
                this.display.anchorOffsetX = 0;
                this.display.anchorOffsetY = 0;
            };
            /**
             * 打开要被控制的显示对象
             * @param {egret.DisplayObject} display 要操作的显示对象
             */
            tubaoDisplayObjectEditor.prototype.openDisplay = function (display) {
                this.display = display;
                //设置要被操作的显示对象
                this.analyDisplay();
                //解析显示对象
            };
            /**
             * 打开的时候
             * @param {egret.DisplayObject} display 要操作的显示对象
             */
            tubaoDisplayObjectEditor.prototype.open = function (display) {
                _super.prototype.open.call(this);
                this.display = display;
                //设置要被操作的显示对象
                this.analyDisplay();
                //解析显示对象
            };
            return tubaoDisplayObjectEditor;
        }(editor.tubaoDisplayObjectEditorBase));
        editor.tubaoDisplayObjectEditor = tubaoDisplayObjectEditor;
        __reflect(tubaoDisplayObjectEditor.prototype, "tubao.editor.tubaoDisplayObjectEditor");
    })(editor = tubao.editor || (tubao.editor = {}));
})(tubao || (tubao = {}));
/**
 * 兔宝特效按钮效果类，用于实现点击效果
 */
var tubao;
(function (tubao) {
    var Effect;
    (function (Effect) {
        var button;
        (function (button_1) {
            /**
             * 按钮触发
             * @param {egret.DisplayObject} panel 面板
             * @param {number} effectType 特效类型
             * @param {string} soundName 音乐名字
             * @param {Function} fun 回调函数
             * @param {Function} yu 回调函数作用域
             * @param {boolean} chufaNo 触发参与控制
             */
            function button(panel, effectType, soundName, fun, yu, chufaNo) {
                if (effectType === void 0) { effectType = 1; }
                if (soundName === void 0) { soundName = "A7_mp3"; }
                if (fun === void 0) { fun = function () { }; }
                if (yu === void 0) { yu = null; }
                if (chufaNo === void 0) { chufaNo = true; }
                if (!panel) {
                    return;
                }
                if (chufaNo) {
                    panel.touchEnabled = false;
                }
                switch (effectType) {
                    case 1:
                        panel.anchorOffsetX = panel.width / 2;
                        panel.anchorOffsetY = panel.height / 2;
                        panel.x += panel.width / 2;
                        panel.y += panel.height / 2;
                        panel.scaleX = 0.5;
                        panel.scaleY = 0.5;
                        egret.Tween.get(panel).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut).call(function () {
                            panel.anchorOffsetX = 0;
                            panel.anchorOffsetY = 0;
                            panel.x -= panel.width / 2;
                            panel.y -= panel.height / 2;
                            if (chufaNo) {
                                panel.touchEnabled = true;
                            }
                        }).call(fun, yu);
                        break;
                    case 2:
                        panel.alpha = 0;
                        panel.scaleX = 0.5;
                        panel.scaleY = 0.5;
                        egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut).call(function () { panel.touchEnabled = true; });
                        break;
                    case 3:
                        panel.scaleX = 0.5;
                        panel.scaleY = 0.5;
                        egret.Tween.get(panel).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut).call(function () { panel.touchEnabled = true; });
                        ;
                        break;
                    case 4:
                        //显示出来
                        egret.Tween.get(panel).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.elasticOut).call(function () { panel.touchEnabled = true; });
                        ;
                        break;
                    case 5:
                        //隐藏起来
                        egret.Tween.get(panel).to({ alpha: 0 }, 2000, egret.Ease.elasticOut).call(function () { panel.touchEnabled = true; });
                        ;
                        break;
                    case 6:
                        panel.scaleX = 0.8;
                        panel.scaleY = 0.8;
                        egret.Tween.get(panel).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut).call(function () { panel.touchEnabled = true; });
                        ;
                        break;
                    default:
                        break;
                }
                tubao.sound.manager.playEffect(soundName);
                //播放音效
            }
            button_1.button = button;
        })(button = Effect.button || (Effect.button = {}));
    })(Effect = tubao.Effect || (tubao.Effect = {}));
})(tubao || (tubao = {}));
/**
 * 动画效果工具模块
 */
var tubao;
(function (tubao) {
    var Effect;
    (function (Effect) {
        /**
         * 给显示对象设置颜色
         */
        function getColor(image) {
            // 将16进制颜色分割成rgb值
            if (!image.filters) {
                return 16777215;
            }
            if (image.filters.length == 0) {
                return 16777215;
            }
            var color = image.filters[0];
            //颜色滤镜
            var red = color.matrix[0] * 255;
            //红色
            var green = color.matrix[6] * 255;
            //绿色
            var blue = color.matrix[12] * 255;
            //蓝色
            var rgb = (red << 16 | green << 8 | blue);
            //实际rgb颜色
            return rgb;
        }
        Effect.getColor = getColor;
        /**
         * 给显示对象设置颜色
         */
        function setColor(image, color) {
            if (color === void 0) { color = null; }
            // 将16进制颜色分割成rgb值
            if (!color) {
                image.filters = [];
                return;
            }
            var result = spliceColor(color);
            //获取颜色
            separateSetColor(image, result.red, result.green, result.blue);
            //设置颜色
        }
        Effect.setColor = setColor;
        /**
         * 使用rgb分色为显示对象上色
         * @param {number} red 红色
         * @param {number} green 绿色
         * @param {number} blue 蓝色
         */
        function separateSetColor(disPlay, red, green, blue) {
            var colorMatrix = [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0
            ];
            colorMatrix[0] = red / 255;
            colorMatrix[6] = green / 255;
            colorMatrix[12] = blue / 255;
            //设置颜色矩阵颜色
            disPlay.filters = [new egret.ColorMatrixFilter(colorMatrix)];
            //设置颜色滤镜
        }
        Effect.separateSetColor = separateSetColor;
        /**
         * 拆解rgb颜色整体为rgb分值
         * @param {number} color 颜色整体数值
         */
        function spliceColor(color) {
            var result = { red: -1, green: -1, blue: -1 };
            //存放
            result.blue = color % 256;
            //蓝色
            result.green = Math.floor((color / 256)) % 256;
            //绿色
            result.red = Math.floor((color / 256) / 256);
            //红色
            return result;
        }
        Effect.spliceColor = spliceColor;
        /**
         * 根据改变值调用去设置颜色
         * @param {number} disPlay 显示对象
         * @param {number} color 颜色
         * @param {number} control 控制值
         */
        function controlColorSetColor(disPlay, color, control) {
            var a = spliceColor(color);
            //获得分值
            a.red += control;
            if (a.red < 0) {
                a.red = 0;
            }
            if (a.red > 255) {
                a.red = 255;
            }
            a.green += control;
            if (a.green < 0) {
                a.green = 0;
            }
            if (a.green > 255) {
                a.green = 255;
            }
            a.blue += control;
            if (a.blue < 0) {
                a.blue = 0;
            }
            if (a.blue > 255) {
                a.blue = 255;
            }
            //获得控制后值
            tubao.Effect.separateSetColor(disPlay, a.red, a.green, a.blue);
            //给显示对象设置颜色
        }
        Effect.controlColorSetColor = controlColorSetColor;
    })(Effect = tubao.Effect || (tubao.Effect = {}));
})(tubao || (tubao = {}));
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.setStorage = function (key, value) {
        return '';
    };
    DebugPlatform.prototype.getStorage = function (key) {
        return key;
    };
    DebugPlatform.prototype.lodinFont = function () {
    };
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
/**
 * 兔宝弹窗效果类，用于放置弹窗面板的效果
 */
var tubao;
(function (tubao) {
    var Effect;
    (function (Effect) {
        var Popup;
        (function (Popup) {
            /**
            * 添加面板方法
            * @param {egret.DisplayObject} panel 面板显示对象实例
            * @param {number} effectType 动画类型1:从中间轻微弹出 2：从中间猛烈弹出
            */
            function Resuit(panel, effectType) {
                if (effectType === void 0) { effectType = 1; }
                if (!panel)
                    return;
                panel.visible = true;
                //隐藏
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                //默认设定
                switch (effectType) {
                    case 1:
                        egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut);
                        break;
                    case 2:
                        egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                        break;
                    default:
                        break;
                }
                tubao.sound.manager.playEffect("A7_mp3");
                //播放音效
            }
            Popup.Resuit = Resuit;
            /**
            * 关闭面板方法
            * @param {egret.DisplayObject} panel 面板显示对象实例
            * @param {number} effectType 动画类型1:从中间轻微回收 2：从中间猛烈回收
            */
            function Close(panel, effectType) {
                if (effectType === void 0) { effectType = 1; }
                if (!panel)
                    return;
                switch (effectType) {
                    case 1:
                        egret.Tween.get(panel).to({ alpha: 0, scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.backOut).call(Close, this);
                        break;
                    case 2:
                        egret.Tween.get(panel).to({ alpha: 0.8, scaleX: 0.8, scaleY: 0.8 }, 150, egret.Ease.backIn).call(Close, this);
                        break;
                }
                function Close() {
                    egret.Tween.removeTweens(panel);
                    //删除全部动画
                    panel.visible = false;
                    //隐藏起来
                    tubao.sound.manager.playEffect("A8_mp3");
                    //播放音效
                }
            }
            Popup.Close = Close;
        })(Popup = Effect.Popup || (Effect.Popup = {}));
    })(Effect = tubao.Effect || (tubao.Effect = {}));
})(tubao || (tubao = {}));
/**
* 场景切换特效类
*/
var tubao;
(function (tubao) {
    var Effect;
    (function (Effect) {
        var Scene;
        (function (Scene) {
            /**
            * 场景切换特效类
            *1.卷帘特效
            *2.左右切换移动
            *3.直接翻
            *4.旋转掉落
            *5.随机一种
            */
            function MovieStart(_txnums) {
                //创建一个截图Bitmap
                var taget = tubao.stage;
                var w = tubao.width;
                var h = tubao.height;
                //新建一个group
                var loadTxGrp = new eui.Group();
                loadTxGrp.width = w;
                loadTxGrp.height = h;
                taget.addChild(loadTxGrp);
                //循环创建多个截图bitmap 这里num自由设置
                var tx1Number = 40;
                //每个横着的数量
                var Xnumber = 5;
                //高数量自动计算
                var Ynumber = tx1Number / Xnumber;
                for (var i = 0; i < tx1Number; i++) {
                    //计算每个的XY及宽高
                    var _mcW = w / Xnumber;
                    var _mcH = h / Ynumber;
                    var _mcX = i % Xnumber * _mcW;
                    var _mcY = Math.floor(i / Xnumber) * _mcH;
                    var renderTexture = new egret.RenderTexture();
                    var mypic = renderTexture.drawToTexture(taget, new egret.Rectangle(_mcX, _mcY, _mcW, _mcH));
                    var bmp = new egret.Bitmap;
                    bmp.texture = renderTexture;
                    bmp.anchorOffsetX = _mcW / 2;
                    bmp.anchorOffsetY = _mcH / 2;
                    bmp.x = _mcX + _mcW / 2;
                    bmp.y = _mcY + _mcH / 2;
                    loadTxGrp.addChild(bmp);
                    if (_txnums == 5) {
                        _txnums = Math.ceil(Math.random() * 4);
                    }
                    //开始特效
                    switch (_txnums) {
                        case 1:
                            var tw = egret.Tween.get(bmp);
                            tw.to({ scaleX: 0, scaleY: 0, alpha: 0, rotation: 359 }, 800, egret.Ease.circIn).call(onComplete, this);
                            break;
                        case 2:
                            var my_x = -w;
                            if (!(i % 2)) {
                                my_x = w * 2;
                            }
                            var tw = egret.Tween.get(bmp);
                            tw.to({ x: my_x, alpha: 0 }, 800, egret.Ease.circIn).call(onComplete, this);
                            break;
                        case 3:
                            var tw = egret.Tween.get(bmp);
                            tw.to({ scaleX: 0.2, scaleY: 1, alpha: 0, blurFliter: 0 }, 800, egret.Ease.backInOut).call(onComplete, this);
                            break;
                        case 4:
                            var tw = egret.Tween.get(bmp);
                            tw.to({ alpha: 0 }, 900, egret.Ease.circIn).call(onComplete, this);
                            break;
                        default:
                            var tw = egret.Tween.get(bmp);
                            tw.to({ scaleX: 1, scaleY: 0, alpha: 0 }, 800, egret.Ease.circIn).call(onComplete, this);
                    }
                }
                var upNumber = 0;
                function onComplete(evt) {
                    upNumber++;
                    if (upNumber == tx1Number) {
                        taget.removeChild(loadTxGrp);
                    }
                }
            }
            Scene.MovieStart = MovieStart;
        })(Scene = Effect.Scene || (Effect.Scene = {}));
    })(Effect = tubao.Effect || (tubao.Effect = {}));
})(tubao || (tubao = {}));
/**
 * Controller基类
 */
var BaseController = (function (_super) {
    __extends(BaseController, _super);
    /**
     * 构造函数
     */
    function BaseController() {
        var _this = _super.call(this) || this;
        _this._messages = {};
        return _this;
    }
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseController.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._messages[key] = [callbackFunc, callbackObj];
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var listen = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1], param);
        }
        else {
            console.warn("消息" + key + "不存在侦听");
            return null;
        }
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return tubao.mvc.manager.controller.applyFunc.apply(tubao.mvc.manager.controller, arguments);
    };
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    BaseController.prototype.setModel = function (model) {
        this._model = model;
    };
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    BaseController.prototype.getModel = function () {
        return this._model;
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    BaseController.prototype.getControllerModel = function (controllerD) {
        return tubao.mvc.manager.controller.getControllerModel(controllerD);
    };
    /**
     * View注册
     * @param viewClassZ View的类
     * @param viewId View的ID
     * @param viewParent View的父级
     * @returns {IBaseView}
     */
    BaseController.prototype.registerView = function (viewClass, viewId, viewParent) {
        var view = new viewClass(this, viewParent);
        tubao.mvc.manager.view.register(viewId, view);
        return view;
    };
    /**
     * View打开
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.openView = function (viewId) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = tubao.mvc.manager.view).open.apply(_a, [viewId].concat(param));
        var _a;
    };
    /**
     * View关闭
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.closeView = function (viewId) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = tubao.mvc.manager.view).close.apply(_a, [viewId].concat(param));
        var _a;
    };
    return BaseController;
}(egret.EventDispatcher));
__reflect(BaseController.prototype, "BaseController");
window['BaseController'] = BaseController;
/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
var BaseModel = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseModel($controller) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
    return BaseModel;
}());
__reflect(BaseModel.prototype, "BaseModel");
window["BaseModel"] = BaseModel;
/**
 * Created by yangsong on 2014/11/22.
 * Proxy基类
 */
var BaseProxy = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseProxy($controller) {
        this._controller = $controller;
    }
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseProxy.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseProxy.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    return BaseProxy;
}());
__reflect(BaseProxy.prototype, "BaseProxy");
/**
 * 兔宝MVC框架
 */
var tubao;
(function (tubao) {
    var mvc;
    (function (mvc) {
        var manager;
        (function (manager_1) {
            /**
             * Controller管理类
             */
            var controller = (function () {
                function controller() {
                }
                /**
                 * 清空处理
                 */
                controller.clear = function () {
                    this._modules = {};
                };
                /**
                 * 动态添加的Controller
                 * @param key 唯一标识
                 * @param manager Manager
                 *
                 */
                controller.register = function (key, control) {
                    if (this.isExists(key))
                        return;
                    this._modules[key] = control;
                };
                /**
                 * 动态移除Controller
                 * @param key 唯一标识
                 *
                 */
                controller.unregister = function (key) {
                    if (!this.isExists(key))
                        return;
                    this._modules[key] = null;
                    delete this._modules[key];
                };
                /**
                 * 是否已经存在Controller
                 * @param key 唯一标识
                 * @return Boolean
                 *
                 */
                controller.isExists = function (key) {
                    return this._modules[key] != null;
                };
                /**
                 * 跨模块消息传递
                 * @param controllerD Controller唯一标识
                 * @param key 消息唯一标识
                 *
                 */
                controller.applyFunc = function (controllerD, key) {
                    var param = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        param[_i - 2] = arguments[_i];
                    }
                    var manager = this._modules[controllerD];
                    if (manager) {
                        var params = [];
                        for (var i = 1; i < arguments.length; i++) {
                            params[i - 1] = arguments[i];
                        }
                        return manager.applyFunc.apply(manager, params);
                    }
                    else {
                        console.warn("模块" + controllerD + "不存在");
                        return null;
                    }
                };
                /**
                 * 获取指定Controller的Model对象
                 * @param controllerD Controller唯一标识
                 * @returns {BaseModel}
                 */
                controller.getControllerModel = function (controllerD) {
                    var manager = this._modules[controllerD];
                    if (manager) {
                        return manager.getModel();
                    }
                    return null;
                };
                controller._modules = {};
                return controller;
            }());
            manager_1.controller = controller;
            __reflect(controller.prototype, "tubao.mvc.manager.controller");
        })(manager = mvc.manager || (mvc.manager = {}));
    })(mvc = tubao.mvc || (tubao.mvc = {}));
})(tubao || (tubao = {}));
/**
 * 框架管理类
 */
var tubao;
(function (tubao) {
    var mvc;
    (function (mvc) {
        var manager;
        (function (manager) {
            /**
             * 视图管理类
             */
            var view = (function () {
                function view() {
                }
                /**
                 * 清空处理
                 */
                view.clear = function () {
                    this.closeAll();
                    this._views = {};
                };
                /**
                 * 面板注册
                 * @param key 面板唯一标识
                 * @param view 面板
                 */
                view.register = function (key, view) {
                    if (view == null) {
                        return;
                    }
                    if (this._views[key]) {
                        return;
                    }
                    this._views[key] = view;
                };
                /**
                 * 面板解除注册
                 * @param key
                 */
                view.unregister = function (key) {
                    if (!this._views[key]) {
                        return;
                    }
                    this._views[key] = null;
                    delete this._views[key];
                };
                /**
                 * 销毁一个面板
                 * @param key 唯一标识
                 * @param newView 新面板
                 */
                view.destroy = function (key, newView) {
                    if (newView === void 0) { newView = null; }
                    var oldView = this.getView(key);
                    if (oldView) {
                        this.unregister(key);
                        oldView.destroy();
                        oldView = null;
                    }
                    this.register(key, newView);
                };
                /**
                 * 开启面板
                 * @param key 面板唯一标识
                 * @param param 参数
                 *
                 */
                view.open = function (key) {
                    var param = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        param[_i - 1] = arguments[_i];
                    }
                    var view = this.getView(key);
                    if (view == null) {
                        console.warn("UI_" + key + "不存在");
                        return;
                    }
                    if (view.isShow()) {
                        view.open.apply(view, param);
                        return view;
                    }
                    if (view.isInit()) {
                        view.addToParent();
                        view.open.apply(view, param);
                    }
                    else {
                        view.loadResource(function () {
                            view.setVisible(false);
                            view.addToParent();
                        }.bind(this), function () {
                            view.initUI();
                            view.initData();
                            view.open.apply(view, param);
                            view.setVisible(true);
                        }.bind(this));
                    }
                    this._opens.push(key);
                    return view;
                };
                /**
                 * 关闭面板
                 * @param key 面板唯一标识
                 * @param param 参数
                 *
                 */
                view.close = function (key) {
                    var param = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        param[_i - 1] = arguments[_i];
                    }
                    if (!this.isShow(key)) {
                        return;
                    }
                    var view = this.getView(key);
                    if (view == null) {
                        return;
                    }
                    var viewIndex = this._opens.indexOf(key);
                    if (viewIndex >= 0) {
                        this._opens.splice(viewIndex, 1);
                    }
                    view.removeFromParent();
                    view.close.apply(view, param);
                };
                /**
                 * 关闭面板
                 * @param view
                 * @param param
                 */
                view.closeView = function (view) {
                    var param = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        param[_i - 1] = arguments[_i];
                    }
                    var keys = Object.keys(this._views);
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = parseInt(keys[i]);
                        if (this._views[key] == view) {
                            this.close(key, param);
                            return;
                        }
                    }
                };
                /**
                 * 根据唯一标识获取一个UI对象
                 * @param key
                 * @returns {any}
                 */
                view.getView = function (key) {
                    return this._views[key];
                };
                /**
                 * 关闭所有开启中的UI
                 */
                view.closeAll = function () {
                    while (this._opens.length) {
                        this.close(this._opens[0]);
                    }
                };
                /**
                 * 当前ui打开数量
                 * @returns {number}
                 */
                view.currOpenNum = function () {
                    return this._opens.length;
                };
                /**
                 * 检测一个UI是否开启中
                 * @param key
                 * @returns {boolean}
                 */
                view.isShow = function (key) {
                    return this._opens.indexOf(key) != -1;
                };
                /**
                 * 已注册的UI
                 */
                view._views = {};
                /**
                 * 开启中UI
                 */
                view._opens = [];
                return view;
            }());
            manager.view = view;
            __reflect(view.prototype, "tubao.mvc.manager.view");
        })(manager = mvc.manager || (mvc.manager = {}));
    })(mvc = tubao.mvc || (tubao.mvc = {}));
})(tubao || (tubao = {}));
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自eui.Component
 */
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseEuiView($controller, $parent) {
        var _this = _super.call(this) || this;
        _this._resources = null; //资源
        _this._controller = $controller;
        _this._myParent = $parent;
        _this._isInit = false;
        //对内部变量进行初始化传值
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
        //相对父级容器高度的百分比。
    }
    Object.defineProperty(BaseEuiView.prototype, "myParent", {
        /**
         * 获取我的父级
         * @returns {egret.DisplayObjectContainer}
         */
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseEuiView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseEuiView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseEuiView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseEuiView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseEuiView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseEuiView.prototype.removeFromParent = function () {
        if (this.parent == null) {
            this.parent.removeChild(this);
        }
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initData = function () {
    };
    /**
     * 销毁
     */
    BaseEuiView.prototype.destroy = function () {
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     /**
     * 加载面板所需资源
     */
    BaseEuiView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            tubao.res.loadResource(this._resources, [], loadComplete, null, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseEuiView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    return BaseEuiView;
}(eui.Component));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
window["BaseEuiView"] = BaseEuiView;
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自egret.Sprite
 */
var BaseSpriteView = (function (_super) {
    __extends(BaseSpriteView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseSpriteView($controller, $parent) {
        var _this = _super.call(this) || this;
        _this._resources = null;
        _this._controller = $controller;
        _this._myParent = $parent;
        _this._isInit = false;
        tubao.stage.addEventListener(egret.Event.RESIZE, _this.onResize, _this);
        return _this;
    }
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseSpriteView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    Object.defineProperty(BaseSpriteView.prototype, "myParent", {
        /**
         * 获取我的父级
         * @returns {egret.DisplayObjectContainer}
         */
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseSpriteView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseSpriteView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseSpriteView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseSpriteView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseSpriteView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseSpriteView.prototype.removeFromParent = function () {
        if (this.parent == null) {
            this.parent.removeChild(this);
        }
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initData = function () {
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 销毁
     */
    BaseSpriteView.prototype.destroy = function () {
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 屏幕尺寸变化时调用
     */
    BaseSpriteView.prototype.onResize = function () {
    };
    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    BaseSpriteView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            tubao.res.loadResource(this._resources, [], function () {
                loadComplete();
                initComplete();
            }, null, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseSpriteView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    return BaseSpriteView;
}(egret.DisplayObjectContainer));
__reflect(BaseSpriteView.prototype, "BaseSpriteView", ["IBaseView"]);
window["BaseSpriteView"] = BaseSpriteView;
/**
 * 设备信息
 */
var tubao;
(function (tubao) {
    var device = (function () {
        function device() {
        }
        Object.defineProperty(device, "isHtml5", {
            /**
             * 当前是否Html5版本
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.WEB;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isNative", {
            /**
             * 当前是否是Native版本
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isChannel", {
            /**
             * 当前是否渠道版本,微信，QQ,字节跳动，小米轻游戏
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                if (this.isWxGame || this.isQQGame || this.isTTGame || this.isQGame || this.isKSGame) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isWxGame", {
            /**
             * 当前是否是微信小游戏平台
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isQQGame", {
            /**
             * 当前是否是qq小游戏平台
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.QQGAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isTTGame", {
            /**
             * 当前是否是字节跳动头条小游戏平台
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.TTGAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isKSGame", {
            /**
             * 当前是否是快手小游戏平台
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.KSGAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isQGame", {
            /**
             * 当前是否是小米轻游戏平台
             */
            get: function () {
                return egret.Capabilities.runtimeType == egret.RuntimeType.QGAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isMobile", {
            /**
             * 是否是在手机上
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return egret.Capabilities.isMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isPC", {
            /**
             * 是否是在PC上
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return !egret.Capabilities.isMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isQQBrowser", {
            /**
             * 是否是QQ浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf('MQQBrowser') != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isIEBrowser", {
            /**
             * 是否是IE浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf("MSIE") != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isFirefoxBrowser", {
            /**
             * 是否是Firefox浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf("Firefox") != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isChromeBrowser", {
            /**
             * 是否是Chrome浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf("Chrome") != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isSafariBrowser", {
            /**
             * 是否是Safari浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf("Safari") != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "isOperaBrowser", {
            /**
             * 是否是Opera浏览器
             * @returns {boolean}
             * @constructor
             */
            get: function () {
                return this.isHtml5 && navigator.userAgent.indexOf("Opera") != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(device, "DeviceOs", {
            /**
             * 得到设备系统 如：iOS/Android/WP7
             */
            get: function () {
                var os = "";
                var ua;
                ua = this.isHtml5 ? navigator.userAgent.toLowerCase() : egret.Capabilities.os.toLowerCase();
                if (ua.indexOf("ipod") != -1 || ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1 || ua.indexOf("macintosh") != -1 || ua.indexOf("ios") != -1) {
                    os = "ios";
                }
                else if (ua.indexOf("windows") != -1) {
                    os = "windows";
                }
                else if (ua.indexOf("android") != -1) {
                    os = "android";
                }
                else if (ua.indexOf("symbian") != -1) {
                    os = "symbian";
                }
                else if (ua.indexOf("linux") != -1) {
                    os = "linux";
                }
                return os;
            },
            enumerable: true,
            configurable: true
        });
        return device;
    }());
    tubao.device = device;
    __reflect(device.prototype, "tubao.device");
})(tubao || (tubao = {}));
/// <reference path="./paint.ts" />
var tubao;
(function (tubao) {
    var paint;
    (function (paint) {
        /**
         * 绘画工具箱,历史记录功能
         */
        var history = (function (_super) {
            __extends(history, _super);
            function history() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**画的每一笔记录 */
                _this.paintData = [];
                /**当前是第几笔 */
                _this.paintIndex = -1;
                /**存储的每一步纹理数据 */
                _this.texturePool = [];
                return _this;
            }
            /**
             * 按下
             */
            history.prototype.onTouchBegin = function (e) {
                _super.prototype.onTouchBegin.call(this, e);
                this.paintIndex++;
                this.paintData.push({
                    date: Number(new Date()),
                    list: [[e.stageX, e.stageY]],
                    arg: this.arg
                });
                //console.log(JSON.stringify(this.paintData))
                //console.log(JSON.stringify(this.arg));
                console.log(this.paintIndex);
            };
            /**
             * 移动
             */
            history.prototype.onTouchMove = function (e) {
                _super.prototype.onTouchMove.call(this, e);
                this.paintData[this.paintIndex].list.push([e.stageX, e.stageY]);
                //添加记录
            };
            /**
             * 解析数据条
             */
            history.prototype.verData = function (data) {
                for (var a in data) {
                    //遍历提供数据描述，获得每一笔画的数据
                    this.arg = data[a].arg;
                    //获得当前画笔总配置文件
                    this.beginTouch(data[a].list[0][0], data[a].list[0][1]);
                    //当前按下触发
                    for (var c in data[a].list) {
                        this.moveTouch(data[a].list[c][0], data[a].list[c][1]);
                        //移动每一点
                    }
                    this.touchEnd();
                    //抬起触发
                }
                this.paintData = data;
            };
            /**
             * 抬起画笔
             */
            history.prototype.touchEnd = function () {
                _super.prototype.touchEnd.call(this);
                this.texturePool[this.paintIndex] = this.bitmap3.texture;
                //存储每一笔纹理数据
            };
            /**
             * 撤销
             */
            history.prototype.revocation = function () {
                if (this.paintIndex - 1 < 0) {
                    //没有可重做步骤了
                    console.log('没有可撤销步骤了');
                    return;
                }
                this.paintIndex--;
                //减去绘画当前笔数位置地方
                this.bitmap3.texture = this.texturePool[this.paintIndex];
                //写入纹理
                console.log(this.paintIndex, this.texturePool.length);
            };
            /**
             * 重做
             */
            history.prototype.reform = function () {
                if (!(this.texturePool.length > this.paintIndex + 1)) {
                    //没有可重做步骤了
                    console.log('没有可重做步骤了');
                    return;
                }
                this.paintIndex++;
                //减去绘画当前笔数位置地方
                this.bitmap3.texture = this.texturePool[this.paintIndex];
                //写入纹理
                console.log(this.paintIndex, this.texturePool.length);
            };
            return history;
        }(paint.paint));
        paint.history = history;
        __reflect(history.prototype, "tubao.paint.history");
    })(paint = tubao.paint || (tubao.paint = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var paint;
    (function (paint) {
        /**
         * 笔刷枚举
         */
        var brush;
        (function (brush) {
            /**矢量图笔刷 */
            brush[brush["sprite"] = 1] = "sprite";
            /**图片笔刷 */
            brush[brush["img"] = 2] = "img";
        })(brush = paint.brush || (paint.brush = {}));
        /**
         * 获得笔刷
         * @param {brush} type 指定笔刷类型
         */
        function getBrush(type) {
            switch (type) {
                case brush.sprite://矢量图笔刷
                    return new paint.sprite();
                case brush.img://位图笔刷
                    return new paint.img();
            }
        }
        paint.getBrush = getBrush;
    })(paint = tubao.paint || (tubao.paint = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var paint;
    (function (paint) {
        /**
         * 矢量图圆形画笔
         */
        var sprite = (function (_super) {
            __extends(sprite, _super);
            function sprite() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 矢量图圆形画笔
             * @param {number} color 颜色
             * @param {number} sicz 画笔大小
             */
            sprite.prototype.init = function (arg) {
                this.arg = arg;
                //传入基础配置
                this.graphics.beginFill(this.arg.color);
                //设置背景颜色
                switch (this.arg.brushArg.cmd) {
                    case 1://画一个圆
                        this.graphics.drawCircle(0, 0, this.arg.size);
                        break;
                    case 2://椭圆
                        this.graphics.drawEllipse(0, 0, this.arg.brushArg.width * this.arg.size, this.arg.brushArg.height * this.arg.size);
                        break;
                    case 3://矩形
                        this.graphics.drawRect(0, 0, this.arg.brushArg.width * this.arg.size, this.arg.brushArg.height * this.arg.size);
                        break;
                    case 4://圆角矩形
                        this.graphics.drawRoundRect(0, 0, this.arg.brushArg.width * this.arg.size, this.arg.brushArg.height * this.arg.size, this.arg.size * 0.2, this.arg.size * 0.2);
                        break;
                }
                this.graphics.endFill();
                //结束绘制
            };
            return sprite;
        }(egret.Sprite));
        paint.sprite = sprite;
        __reflect(sprite.prototype, "tubao.paint.sprite");
        /**
         * 矢量图圆形画笔
         */
        var img = (function (_super) {
            __extends(img, _super);
            function img() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 矢量图圆形画笔
             * @param {number} color 颜色
             * @param {number} sicz 画笔大小
             */
            img.prototype.init = function (arg) {
                this.arg = arg;
                //传入基础配置
                this.source = RES.getRes(this.arg.brushArg.bitmap);
                //设置指定的位图            
                this.width = this.arg.brushArg.width;
                this.height = this.arg.brushArg.height;
            };
            return img;
        }(eui.Image));
        paint.img = img;
        __reflect(img.prototype, "tubao.paint.img");
    })(paint = tubao.paint || (tubao.paint = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var fields;
    (function (fields) {
        /**
         * 表情位图
         */
        var EmojiBitmap = (function (_super) {
            __extends(EmojiBitmap, _super);
            function EmojiBitmap(res) {
                var _this = _super.call(this) || this;
                RES.getResAsync(res, function (e) {
                    _this.texture = e;
                }, _this);
                return _this;
            }
            /**
             * 初始化
             * @param {string} res 资源名字
             */
            EmojiBitmap.prototype.initialize = function (res) {
                return this;
            };
            /**
             * 重置
             */
            EmojiBitmap.prototype.reset = function () {
                this.texture = null;
                return this;
            };
            return EmojiBitmap;
        }(egret.Bitmap));
        fields.EmojiBitmap = EmojiBitmap;
        __reflect(EmojiBitmap.prototype, "tubao.fields.EmojiBitmap");
    })(fields = tubao.fields || (tubao.fields = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var fields;
    (function (fields) {
        /**
         * 表情配置类底层
         */
        var EmojiConfig = (function () {
            /**
             * 表情配置类底层
             * @param {IEmojiConfig[]} value 表情配置数组
             * @param {number} offx 定位x
             * @param {number} offy 定位y
             */
            function EmojiConfig(value, offx, offy) {
                this.value = value;
                //表情配置数组
                this.offx = offx;
                //定位x
                this.offy = offy;
                //定位y
            }
            return EmojiConfig;
        }());
        fields.EmojiConfig = EmojiConfig;
        __reflect(EmojiConfig.prototype, "tubao.fields.EmojiConfig");
    })(fields = tubao.fields || (tubao.fields = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var fields;
    (function (fields) {
        /**
         * 表情管理插件
         */
        var EmojiPlugin = (function () {
            /**
             * 表情管理插件 当前类需要以单例形式处理
             * @param {EmojiConfig} config 表情配置 key:唯一数字标识 res:表情资源
             * @param {number} match 占位符 通常情况可设置为2个空格 具体视表情资源尺寸而定
             */
            function EmojiPlugin(config, matchtotal) {
                if (matchtotal === void 0) { matchtotal = -1; }
                /**符号开始 */
                this._symbolBegin = '[';
                /**符号结束 */
                this._symbolEnd = ']';
                this._config = config;
                //写入表情配置
                this._match = this.getMatchChar(matchtotal);
                //匹配内容
                this._pool = [];
                //表情缓存默认情况为空
                for (var _i = 0, _a = this._config.value; _i < _a.length; _i++) {
                    var v = _a[_i];
                    v.symbol = "" + this._symbolBegin + v.key + this._symbolEnd;
                }
            }
            /**
             * 获取占位符的字符内容
             * @param {number} total 长度
             */
            EmojiPlugin.prototype.getMatchChar = function (total) {
                var result = '';
                while (total) {
                    total--;
                    result += ' ';
                }
                return result;
            };
            Object.defineProperty(EmojiPlugin.prototype, "offX", {
                /**
                 * 获取定位x
                 */
                get: function () {
                    return this._config.offx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EmojiPlugin.prototype, "offY", {
                /**
                 * 获取定位y
                 */
                get: function () {
                    return this._config.offy;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EmojiPlugin.prototype, "match", {
                /**
                 * 获取匹配符
                 */
                get: function () {
                    return this._match;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 获取标志
             * @param {number} key 标志值
             */
            EmojiPlugin.prototype.getSymbol = function (key) {
                for (var _i = 0, _a = this._config.value; _i < _a.length; _i++) {
                    var object = _a[_i];
                    if (object.key == key)
                        return object.symbol;
                }
            };
            /**
             * 查询
             * @param {string} text 查询的文本
             */
            EmojiPlugin.prototype.search = function (text) {
                var index = -1;
                for (var _i = 0, _a = this._config.value; _i < _a.length; _i++) {
                    var object = _a[_i];
                    var i = text.indexOf(object.symbol);
                    if (i >= 0) {
                        if (index == -1) {
                            index = i;
                        }
                        else {
                            index = Math.min(i, index);
                        }
                    }
                }
                return index;
            };
            /**
             * 解析文本
             * @param {string} text 解析的内容
             */
            EmojiPlugin.prototype.parser = function (text) {
                var emojis = [];
                while (true) {
                    var index = this.search(text);
                    //查询文本的开始点
                    if (index == -1) {
                        //没查到跳出
                        break;
                    }
                    //查到了
                    var end = text.indexOf(this._symbolEnd, index);
                    //结束位置
                    var symbol = text.substring(index, end + 1);
                    //截取文本内容，查询到的位置，尾部字符位置
                    var key = symbol.substring(1, symbol.length - 1);
                    //截取字符串
                    text = text.replace(symbol, this._match);
                    //替换字符，右替换左
                    emojis.push({
                        key: parseInt(key),
                        symbol: symbol,
                        index: index
                    });
                }
                return {
                    result: text,
                    emojis: emojis
                };
            };
            /**
             * 获取配置
             * @param {number} key 配置的键
             */
            EmojiPlugin.prototype.getConfig = function (key) {
                for (var _i = 0, _a = this._config.value; _i < _a.length; _i++) {
                    var object = _a[_i];
                    if (object.key == key) {
                        return object;
                    }
                }
                console.log("\u6839\u636Ekey\uFF1A" + key + "\u83B7\u53D6\u914D\u7F6E\u5931\u8D25\uFF0C\u56E0\u4E3Akey\u4E0D\u5B58\u5728");
                return null;
            };
            /**
             * 表情缓存出池
             * @param {number} key 表情的键
             */
            EmojiPlugin.prototype.fromEmoji = function (key) {
                var config = this.getConfig(key);
                //表情的配置
                if (this._pool.length) {
                    //缓存有内容
                    return this._pool.pop().initialize(config.res);
                }
                else {
                    //缓存没内容
                    var res = new fields.EmojiBitmap(config.res);
                    return res;
                }
            };
            /**
             * 表情缓存入池
             */
            EmojiPlugin.prototype.toEmoji = function (emoji) {
                emoji.reset();
                //重置表情
                if (emoji.parent) {
                    emoji.parent.removeChild(emoji);
                    //移除显示列表
                }
                this._pool.push(emoji);
                //表情缓存中假如这个表情
            };
            return EmojiPlugin;
        }());
        fields.EmojiPlugin = EmojiPlugin;
        __reflect(EmojiPlugin.prototype, "tubao.fields.EmojiPlugin");
    })(fields = tubao.fields || (tubao.fields = {}));
})(tubao || (tubao = {}));
/**
 * 调试工具类
 * new tubao.deBug.huanDong();
 * new tubao.deBug.secondNewObject()
 */
var tubao;
(function (tubao) {
    var deBug;
    (function (deBug) {
        /**
         * 每秒创建的对象数量
         */
        var secondNewObject = (function () {
            //显示对象数量
            function secondNewObject() {
                var _this = this;
                this.objectNum = [];
                var panel = new egret.TextField();
                tubao.layer.LayerManager.UI_Message.addChild(panel);
                panel.y = 150;
                panel.height = 300;
                panel.size = 15;
                panel.textColor = 0xfff;
                panel.touchEnabled = false;
                panel.bold = true;
                panel.background = true;
                panel.backgroundColor = 0xffffff;
                var count = egret.$hashCount;
                setInterval(function () {
                    var newCount = egret.$hashCount;
                    var diff = newCount - count;
                    count = newCount;
                    console.log(diff);
                    panel.text += "\n" + diff;
                    _this.objectNum.push(diff);
                }, 1000);
                setInterval(function () {
                    panel.text = "对象创建数量：";
                }, 10000);
            }
            return secondNewObject;
        }());
        deBug.secondNewObject = secondNewObject;
        __reflect(secondNewObject.prototype, "tubao.deBug.secondNewObject");
        var huanDong = (function () {
            //显示对象数量
            function huanDong() {
                this.huan = [egret.Ease.arguments];
                this.huanString = [egret.Ease.arguments];
                var a = 0;
                for (var k in egret.Ease) {
                    var panel = new egret.TextField();
                    tubao.layer.LayerManager.UI_Message.addChild(panel);
                    panel.x = 20;
                    panel.y = a * 20;
                    panel.size = 15;
                    panel.textColor = 0xfff;
                    panel.touchEnabled = false;
                    panel.bold = true;
                    panel.background = true;
                    panel.backgroundColor = 0xffffff;
                    panel.text = k + "-------------------------------------------";
                    var kk = new eui.Image(RES.getRes("basics01_png"));
                    kk.x = 100;
                    kk.width = 20;
                    kk.height = 20;
                    kk.y = a * 20;
                    tubao.layer.LayerManager.UI_Message.addChild(kk);
                    egret.Tween.get(kk, { loop: true }).to({ x: 500 }, 1000, egret.Ease[k]).to({ alpha: 0 }, 1000, egret.Ease[k]);
                    a++;
                }
            }
            return huanDong;
        }());
        deBug.huanDong = huanDong;
        __reflect(huanDong.prototype, "tubao.deBug.huanDong");
    })(deBug = tubao.deBug || (tubao.deBug = {}));
})(tubao || (tubao = {}));
/// <reference path = "richTextFiledBase.ts" />
/**
 * 兔宝富文本
 */
var tubao;
(function (tubao) {
    var fields;
    (function (fields) {
        /**
         * 兔宝富文本
         */
        var RichTextField = (function (_super) {
            __extends(RichTextField, _super);
            /**
             * 兔宝富文本
             * @param {EmojiPlugin} emogi 文本管理插件
             */
            function RichTextField(emoji) {
                var _this = _super.call(this) || this;
                /** */
                _this._emojisMcs = [];
                _this._emojiplugin = emoji;
                return _this;
                //表情管理系统
            }
            Object.defineProperty(RichTextField.prototype, "text", {
                set: function (value) {
                    this._matchWidth = egret.sys.measureText(this._emojiplugin.match, this.fontFamily, this.size, this.bold, this.italic);
                    //修改测量宽度
                    this._richText = this._emojiplugin.parser(value);
                    //解析后文本值
                    this._textfiled.text = this._richText.result;
                    //设置文本内容
                    egret.callLater(this.updateEmojis, this);
                    //延迟绘制执行
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RichTextField.prototype, "textFlow", {
                set: function (v) {
                    this._matchWidth = egret.sys.measureText(this._emojiplugin.match, this.fontFamily, this.size, this.bold, this.italic);
                    //测量宽度值
                    this._richText = { result: '', emojis: [] };
                    //
                    var length = 0;
                    for (var _i = 0, v_1 = v; _i < v_1.length; _i++) {
                        var element = v_1[_i];
                        var object = this._emojiplugin.parser(element.text);
                        element.text = object.result;
                        this._richText.result += object.result;
                        for (var _a = 0, _b = object.emojis; _a < _b.length; _a++) {
                            var emoji = _b[_a];
                            emoji.index += length;
                            this._richText.emojis.push(emoji);
                        }
                        length += element.text.length;
                    }
                    this._textfiled.textFlow = v;
                    egret.callLater(this.updateEmojis, this);
                    //延迟绘制执行
                },
                enumerable: true,
                configurable: true
            });
            RichTextField.prototype.clearEmojis = function () {
                while (this._emojisMcs.length) {
                    var object = this._emojisMcs.pop();
                    this._emojiplugin.toEmoji(object.emoji);
                }
            };
            RichTextField.prototype.updateEmojis = function () {
                var that = this;
                var textfiled = that._textfiled;
                var plugin = that._emojiplugin;
                var mcs = that._emojisMcs;
                var fontFamily = that.fontFamily;
                var size = that.size;
                var bold = that.bold;
                var italic = that.italic;
                that.clearEmojis();
                var lines = textfiled.$getLinesArr();
                var matchLength = (plugin.match.length / 2) >> 0;
                var lineHeight = (textfiled.textHeight + textfiled.lineSpacing) / textfiled.numLines;
                for (var _i = 0, _a = that._richText.emojis; _i < _a.length; _i++) {
                    var data = _a[_i];
                    var emoji = plugin.fromEmoji(data.key);
                    that.addChild(emoji);
                    var frontText = that._richText.result.substring(0, data.index + matchLength);
                    var lineIndex = 0;
                    var charNum = 0;
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].elements[0]) {
                            var charLength = lines[i].elements[0].text.length;
                        }
                        else {
                            var charLength = 0;
                        }
                        if (frontText.length < (charNum + charLength)) {
                            lineIndex = i;
                            break;
                        }
                        charNum += charLength;
                    }
                    emoji.y = Math.round(lineIndex * lineHeight + plugin.offY);
                    frontText = frontText.substring(charNum, frontText.length);
                    emoji.x = Math.round(egret.sys.measureText(frontText, fontFamily, size, bold, italic) + plugin.offX - that._matchWidth / 2);
                    mcs.push({
                        key: data.key,
                        emoji: emoji
                    });
                }
            };
            return RichTextField;
        }(fields.richTextFiledBase));
        fields.RichTextField = RichTextField;
        __reflect(RichTextField.prototype, "tubao.fields.RichTextField");
    })(fields = tubao.fields || (tubao.fields = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    /**
     * 时间日期工具
     */
    var date = (function () {
        function date() {
        }
        /**
         * 根据秒数格式化字符串
         * @param second 秒数
         * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00(分:秒)   4:xx天前，xx小时前，xx分钟前    6:00:00(时:分)
         * @return
         *
         */
        date.getFormatBySecond = function (second, type) {
            if (type === void 0) { type = 1; }
            var str = "";
            switch (type) {
                case 1:
                    str = this.getFormatBySecond1(second);
                    break;
                case 2:
                    str = this.getFormatBySecond2(second);
                    break;
                case 3:
                    str = this.getFormatBySecond3(second);
                    break;
                case 4:
                    str = this.getFormatBySecond4(second);
                    break;
                case 5:
                    str = this.getFormatBySecond5(second);
                    break;
                case 6:
                    str = this.getFormatBySecond6(second);
                    break;
            }
            return str;
        };
        //1: 00:00:00
        date.getFormatBySecond1 = function (t) {
            if (t === void 0) { t = 0; }
            var hourst = Math.floor(t / 3600);
            var hours;
            if (hourst == 0) {
                hours = "00";
            }
            else {
                if (hourst < 10)
                    hours = "0" + hourst;
                else
                    hours = "" + hourst;
            }
            var minst = Math.floor((t - hourst * 3600) / 60);
            var secondt = Math.floor((t - hourst * 3600) % 60);
            var mins;
            var sens;
            if (minst == 0) {
                mins = "00";
            }
            else if (minst < 10) {
                mins = "0" + minst;
            }
            else {
                mins = "" + minst;
            }
            if (secondt == 0) {
                sens = "00";
            }
            else if (secondt < 10) {
                sens = "0" + secondt;
            }
            else {
                sens = "" + secondt;
            }
            return hours + ":" + mins + ":" + sens;
        };
        //3:00:00(分:秒)
        date.getFormatBySecond3 = function (t) {
            if (t === void 0) { t = 0; }
            var hourst = Math.floor(t / 3600);
            var minst = Math.floor((t - hourst * 3600) / 60);
            var secondt = Math.floor((t - hourst * 3600) % 60);
            var mins;
            var sens;
            if (minst == 0) {
                mins = "00";
            }
            else if (minst < 10) {
                mins = "0" + minst;
            }
            else {
                mins = "" + minst;
            }
            if (secondt == 0) {
                sens = "00";
            }
            else if (secondt < 10) {
                sens = "0" + secondt;
            }
            else {
                sens = "" + secondt;
            }
            return mins + ":" + sens;
        };
        //2:yyyy-mm-dd h:m:s
        date.getFormatBySecond2 = function (time) {
            var date = new Date(time);
            var year = date.getFullYear();
            var month = date.getMonth() + 1; //返回的月份从0-11；
            var day = date.getDate();
            var hours = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            return year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second;
        };
        //4:xx天前，xx小时前，xx分钟前
        date.getFormatBySecond4 = function (time) {
            var t = Math.floor(time / 3600);
            if (t > 0) {
                if (t > 24) {
                    return Math.floor(t / 24) + "天前";
                }
                else {
                    return t + "小时前";
                }
            }
            else {
                return Math.floor(time / 60) + "分钟前";
            }
        };
        date.getFormatBySecond5 = function (time) {
            //每个时间单位所对应的秒数
            var oneDay = 3600 * 24;
            var oneHourst = 3600;
            var oneMinst = 60;
            var days = Math.floor(time / oneDay);
            var hourst = Math.floor(time % oneDay / oneHourst);
            var minst = Math.floor((time - hourst * oneHourst) / oneMinst); //Math.floor(time % oneDay % oneHourst / oneMinst);
            var secondt = Math.floor((time - hourst * oneHourst) % oneMinst); //time;
            var dayss = "";
            var hourss = "";
            var minss = "";
            var secss = "";
            if (time > 0) {
                //天
                if (days == 0) {
                    dayss = "";
                    //小时
                    if (hourst == 0) {
                        hourss = "";
                        //分
                        if (minst == 0) {
                            minss = "";
                            if (secondt == 0) {
                                secss = "";
                            }
                            else if (secondt < 10) {
                                secss = "0" + secondt + "秒";
                            }
                            else {
                                secss = "" + secondt + "秒";
                            }
                            return secss;
                        }
                        else {
                            minss = "" + minst + "分";
                            if (secondt == 0) {
                                secss = "";
                            }
                            else if (secondt < 10) {
                                secss = "0" + secondt + "秒";
                            }
                            else {
                                secss = "" + secondt + "秒";
                            }
                        }
                        return minss + secss;
                    }
                    else {
                        hourss = hourst + "小时";
                        if (minst == 0) {
                            minss = "";
                            if (secondt == 0) {
                                secss = "";
                            }
                            else if (secondt < 10) {
                                secss = "0" + secondt + "秒";
                            }
                            else {
                                secss = "" + secondt + "秒";
                            }
                            return secss;
                        }
                        else if (minst < 10) {
                            minss = "0" + minst + "分";
                        }
                        else {
                            minss = "" + minst + "分";
                        }
                        return hourss + minss;
                    }
                }
                else {
                    dayss = days + "天";
                    if (hourst == 0) {
                        hourss = "";
                    }
                    else {
                        if (hourst < 10)
                            hourss = "0" + hourst + "小时";
                        else
                            hourss = "" + hourst + "小时";
                        ;
                    }
                    return dayss + hourss;
                }
            }
            return "";
        };
        //6:00:00(时:分) 
        date.getFormatBySecond6 = function (t) {
            if (t === void 0) { t = 0; }
            var hourst = Math.floor(t / 3600);
            var minst = Math.floor((t - hourst * 3600) / 60);
            var houers;
            var mins;
            if (hourst == 0) {
                houers = "00";
            }
            else if (hourst < 10) {
                houers = "0" + hourst;
            }
            else {
                houers = "" + hourst;
            }
            if (minst == 0) {
                mins = "00";
            }
            else if (minst < 10) {
                mins = "0" + minst;
            }
            else {
                mins = "" + minst;
            }
            return houers + ":" + mins;
        };
        /**
         * 获取当前是周几
         * ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
         */
        date.getDay = function (timestamp) {
            var date = new Date(timestamp);
            return date.getDay();
        };
        /**
         * 判定两个时间是否是同一天
         */
        date.isSameDate = function (timestamp1, timestamp2) {
            var date1 = new Date(timestamp1);
            var date2 = new Date(timestamp2);
            return date1.getFullYear() == date2.getFullYear()
                && date1.getMonth() == date2.getMonth()
                && date1.getDate() == date2.getDate();
        };
        /**
         * 日期格式化
         */
        date.format = function (d, fmt) {
            if (fmt === void 0) { fmt = "yyyy-MM-dd hh:mm:ss"; }
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                "S": d.getMilliseconds() //millisecond
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
            return fmt;
        };
        /**
         * 计算两个时间相差天数
         */
        date.dateDifference = function (timestamp1, timestamp2) {
            var d_value = Math.abs(timestamp2 - timestamp1);
            return Math.ceil(d_value / (24 * 60 * 60 * 1000));
        };
        return date;
    }());
    tubao.date = date;
    __reflect(date.prototype, "tubao.date");
})(tubao || (tubao = {}));
/// <reference path = "layer.ts" />
var tubao;
(function (tubao) {
    var layer;
    (function (layer) {
        /**
         * 游戏层级类
         */
        var LayerManager = (function () {
            function LayerManager() {
            }
            /**
             * 游戏背景层
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.Game_Bg = new layer.layer();
            /**
             * 主游戏层
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.Game_Main = new layer.layer();
            /**
             * UI主界面上
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_MainUp = new layer.layer();
            /**
             * UI主界面下
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_MainDown = new layer.layer();
            /**
             * UI主界面右
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_MainReght = new layer.layer();
            /**
             * 功能面板弹出框层
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_Popup = new layer.layer();
            /**
             * UI提示弹出层
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_Message = new layer.layer();
            /**
             * UI提示，获得物品展示消息
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_GetMessage = new layer.layer();
            /**
             * 任务流程面板
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_Talk = new layer.layer();
            /**
             * 游戏主加载界面
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_Loading = new layer.layer();
            /**
             * 游戏主开始界面层
             * @type {tubao.baseScene.BaseEuiLayer}
             */
            LayerManager.UI_playGame = new layer.layer();
            return LayerManager;
        }());
        layer.LayerManager = LayerManager;
        __reflect(LayerManager.prototype, "tubao.layer.LayerManager");
    })(layer = tubao.layer || (tubao.layer = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var layer;
    (function (layer_2) {
        /**
         * 层级场景基类
         */
        var scene = (function () {
            function scene() {
                /**当前所有Layer，显示列表数组 */
                this._layers = [];
            }
            /**
             * 进入Scene调用
             */
            scene.prototype.onEnter = function () {
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i] = arguments[_i];
                }
                //添加该Scene使用的Layer
                this.addLayer(layer_2.LayerManager.Game_Bg);
                //背景
                this.addLayer(layer_2.LayerManager.Game_Main);
                //主游戏内容
                this.addLayer(layer_2.LayerManager.UI_MainUp);
                //ui界面上
                this.addLayer(layer_2.LayerManager.UI_MainReght);
                //ui界面中
                this.addLayer(layer_2.LayerManager.UI_MainDown);
                //ui界面下
                this.addLayer(layer_2.LayerManager.UI_Popup);
                //弹窗内容
                this.addLayer(layer_2.LayerManager.UI_Talk);
                //任务流程
                this.addLayer(layer_2.LayerManager.UI_playGame);
                //游戏开始层
                this.addLayer(layer_2.LayerManager.UI_Loading);
                //加载界面
                this.addLayer(layer_2.LayerManager.UI_Message);
                //弹窗消息
                this.addLayer(layer_2.LayerManager.UI_GetMessage);
                //获得物品提示
            };
            /**
             * 退出Scene调用
             */
            scene.prototype.onExit = function () {
                tubao.mvc.manager.view.closeAll();
                //关闭所有窗口界面
                this.removeAllLayer();
                //移除全部显示层次列表
            };
            /**
             * 添加一个Layer到舞台
             * @param {egret.DisplayObjectContainer} layer 显示对象
             */
            scene.prototype.addLayer = function (layer) {
                tubao.stage.addChild(layer);
                //添加到舞台
                this._layers.push(layer);
                //记录到数组
            };
            /**
             * 添加一个Layer到舞台特定位置
             * @param {egret.DisplayObjectContainer} layer 显示对象
             * @param {number} index 位置
             */
            scene.prototype.addLayerAt = function (layer, index) {
                tubao.stage.addChildAt(layer, index);
                //添加到舞台特定层级位置
                this._layers.push(layer);
                //记录到数组
            };
            /**
             * 在舞台移除一个Layer
             * @param {egret.DisplayObjectContainer} layer 显示对象
             */
            scene.prototype.removeLayer = function (layer) {
                tubao.stage.removeChild(layer);
                //移除显示列表
                this._layers.splice(this._layers.indexOf(layer), 1);
                //移除记录数组中当前对象
            };
            /**
             * Layer中移除所有
             * @param {egret.DisplayObjectContainer} layer 显示对象
             */
            scene.prototype.layerRemoveAllChild = function (layer) {
                layer.removeChildren();
                //删除层当中所有显示对象
            };
            /**
             * 移除所有Layer
             */
            scene.prototype.removeAllLayer = function () {
                while (this._layers.length) {
                    var layer = this._layers[0];
                    //拿到layer
                    this.layerRemoveAllChild(layer);
                    //清理显示对象
                    this.removeLayer(layer);
                    //移除记录层
                }
            };
            return scene;
        }());
        layer_2.scene = scene;
        __reflect(scene.prototype, "tubao.layer.scene");
    })(layer = tubao.layer || (tubao.layer = {}));
})(tubao || (tubao = {}));
/**
 * 层级系统 layer->scene->manager
 */
var tubao;
(function (tubao) {
    var layer;
    (function (layer) {
        /**
         * 场景管理类
         */
        var sceneManager = (function () {
            function sceneManager() {
            }
            /**
             * 清空处理
             */
            sceneManager.clear = function () {
                var nowScene = this._scenes[this._currScene];
                if (nowScene) {
                    nowScene.onExit();
                    this._currScene = undefined;
                }
                this._scenes = {};
            };
            /**
             * 注册场景
             * @param {number} key 场景唯一标识
             * @param {BaseScene} scene 场景对象
             */
            sceneManager.register = function (key, scene) {
                this._scenes[key] = scene;
                //设置id对应场景
            };
            /**
             * 切换场景
             * @param {number} key 场景id
             */
            sceneManager.runScene = function (key) {
                var param = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    param[_i - 1] = arguments[_i];
                }
                var nowScene = this._scenes[key];
                if (!nowScene) {
                    console.log("\u573A\u666F" + key + "\u4E0D\u5B58\u5728");
                    return;
                }
                var oldScene = this._scenes[this._currScene];
                //获取当前场景
                if (oldScene) {
                    oldScene.onExit();
                    //当前场景没问题就退出
                }
                nowScene.onEnter.apply(nowScene, param);
                //运行进入功能并且传参，作用域是他自己
                this._currScene = key;
                //设置场景id
            };
            /**
             * 获取当前场景id
             * @returns {number}
             */
            sceneManager.getCurrScene = function () {
                return this._currScene;
            };
            /**场景列表 */
            sceneManager._scenes = {};
            return sceneManager;
        }());
        layer.sceneManager = sceneManager;
        __reflect(sceneManager.prototype, "tubao.layer.sceneManager");
    })(layer = tubao.layer || (tubao.layer = {}));
})(tubao || (tubao = {}));
/**
 * cookie操作类
 */
var tubao;
(function (tubao) {
    var cookie;
    (function (cookie) {
        /**游戏的数据库标记 */
        cookie.label = "Rabbit";
        /**
         * 特殊数据值操作存入前端数字数据，如果第二个参数存在就写入，不存在就查询
         * @param value 查询的数据列表索引
         * @param Str 写入的数据
         *
         */
        function LocalStorageNum(Str0, Str1) {
            if (Str1 === void 0) { Str1 = null; }
            if (Str1) {
                if (Str1) {
                    return Number(egret.localStorage.setItem(String("Rabbit_" + cookie.label + "_" + Str0), String(Str1)));
                    //第二个参数存在就写入
                }
                else {
                    console.error("\u7F13\u5B58\u6570\u636E\u5199\u5165\u9519\u8BEF\uFF0Ckey\uFF1A" + Str0 + ",Str:" + Str1);
                    return Number(egret.localStorage.setItem(String("Rabbit_" + cookie.label + "_" + Str0), String(0)));
                }
            }
            else {
                if (egret.localStorage.getItem(String("Rabbit_" + cookie.label + "_" + Str0))) {
                    return Number(egret.localStorage.getItem(String("Rabbit_" + cookie.label + "_" + Str0)));
                    //第二个参数不存在就查询
                }
                else {
                    return 0;
                }
            }
        }
        cookie.LocalStorageNum = LocalStorageNum;
        /**
         * 获取localStorage缓存数据
         * @param {string} key 值对
         * @return {string} 这个key对应的值
         */
        function getLocal(key) {
            var data = egret.localStorage.getItem(key);
            if (data) {
                return data;
            }
            return "";
        }
        cookie.getLocal = getLocal;
        /**
         * 设置localStorage缓存数据
         * @param {string} key 值对
         * @return {string} 这个key对应的值
         */
        function setLocal(key, value) {
            return egret.localStorage.setItem(key, value);
        }
        cookie.setLocal = setLocal;
        /**
         * cookie操作，设置一个cookie
         * @param cname 设置cookie的id
         * @param cvalue 设置cookie的值
         * @param exdays 设置cookie在几分钟后失效
         */
        function setCookie(cname, cvalue, exdays) {
            if (tubao.device.isChannel) {
                //渠道处理
                platform.setStorage(cname, cvalue);
            }
            else {
                //浏览器平台
                var d = new Date();
                d.setUTCMinutes(d.getUTCMinutes() + exdays);
                document.cookie = cname + "=" + cvalue + "; expires=" + d.toUTCString();
            }
        }
        cookie.setCookie = setCookie;
        /**
         * cookie操作，删除一个cookie
         * @param cname 设置cookie的id
         * @param cvalue 设置cookie的值
         * @param exdays 设置cookie在几分钟后失效
         */
        function delCookie(cname) {
            if (tubao.device.isChannel) {
                //渠道处理
                platform.setStorage(cname, '');
            }
            else {
                //浏览器平台
                document.cookie = cname + "=" + "true" + "; expires=Sat, 27 Nov 2010 10:39:38 GMT";
            }
        }
        cookie.delCookie = delCookie;
        /**
         * 查询一个cookie的值，不存在返回false
         * @param {string} cname cookie名
        */
        function getCookie(cname) {
            //查询cookie
            if (tubao.device.isChannel) {
                //渠道处理
                if (platform.getStorage(cname) == '') {
                    return false;
                }
                return platform.getStorage(cname);
            }
            else {
                //不是微信平台
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0)
                        return c.substring(name.length, c.length);
                }
                return false;
            }
        }
        cookie.getCookie = getCookie;
        /**
         * 查询一个cookie的值，不存在返回false
         * @param {string} cname cookie名
        */
        function getCookieNum(cname) {
            var a = getCookie(cname);
            if (a) {
                return a;
            }
            else {
                return 0;
            }
        }
        cookie.getCookieNum = getCookieNum;
    })(cookie = tubao.cookie || (tubao.cookie = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound_2) {
        /**
         * Created by yangsong on 15-1-14.
         * 背景音乐类
         */
        var bg = (function (_super) {
            __extends(bg, _super);
            /**
             * 构造函数
             */
            function bg() {
                var _this = _super.call(this) || this;
                _this._currBg = "";
                return _this;
            }
            /**
             * 停止当前音乐
             */
            bg.prototype.stop = function () {
                if (this._currSoundChannel) {
                    this._currSoundChannel.stop();
                }
                this._currSoundChannel = null;
                this._currSound = null;
                this._currBg = "";
                this._pausePosition = null;
            };
            /**
             * 播放某个音乐
             * @param effectName
             */
            bg.prototype.play = function (effectName) {
                if (this._currBg == effectName)
                    return;
                this.stop();
                this._currBg = effectName;
                var sound = this.getSound(effectName);
                if (sound) {
                    this.playSound(sound);
                }
            };
            /**
             * 暂停
             * 请尽量避免使用，不可和其他api能力混用，且在运行时仅可运行一次
             */
            bg.prototype.pause = function () {
                if (!this._currSoundChannel) {
                    return;
                }
                this._pausePosition = this._currSoundChannel.position;
                this._currSoundChannel.stop();
            };
            /**
             * 恢复
             * 请尽量避免使用，不可和其他api能力混用，且在运行时仅可运行一次
             */
            bg.prototype.resume = function () {
                if (!this._currSoundChannel) {
                    return;
                }
                if (!this._pausePosition) {
                    return;
                }
                this._currSound.play(this._pausePosition);
                this._pausePosition = null;
            };
            /**
             * 播放
             * @param sound
             */
            bg.prototype.playSound = function (sound) {
                this._currSound = sound;
                this._currSoundChannel = this._currSound.play();
                this._currSoundChannel.volume = this._volume;
            };
            /**
             * 设置音量
             * @param volume
             */
            bg.prototype.setVolume = function (volume) {
                this._volume = volume;
                if (this._currSoundChannel) {
                    this._currSoundChannel.volume = this._volume;
                }
            };
            /**
             * 资源加载完成后处理播放
             * @param key
             */
            bg.prototype.loadedPlay = function (key) {
                if (this._currBg == key) {
                    this.playSound(RES.getRes(key));
                }
            };
            /**
             * 检测一个文件是否要清除
             * @param key
             * @returns {boolean}
             */
            bg.prototype.checkCanClear = function (key) {
                return this._currBg != key;
            };
            return bg;
        }(sound_2.BaseSound));
        sound_2.bg = bg;
        __reflect(bg.prototype, "tubao.sound.bg", ["tubao.sound.ISoundBg"]);
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound) {
        /**
         * Created by yangsong on 18-12-26.
         * 音效类(微信小游戏专用)
         */
        var bgWx = (function () {
            /**
             * 构造函数
             */
            function bgWx() {
                this._audio = window["wx"].createInnerAudioContext();
                this._currBg = "";
            }
            /**
             * 停止当前音乐
             */
            bgWx.prototype.stop = function () {
                this._audio.stop();
                this._currBg = "";
            };
            /**
             * 播放某个音乐
             * @param bgName
             */
            bgWx.prototype.play = function (bgName) {
                if (this._currBg == bgName) {
                    return;
                }
                this.stop();
                this._currBg = bgName;
                this._audio.src = tubao.res.getFileRealPath(this._currBg);
                this._audio.loop = true;
                this._audio.volume = this._volume;
                this._audio.startTime = 0;
                this._audio.play();
            };
            /**
             * 暂停
             */
            bgWx.prototype.pause = function () {
                if (this._currBg.length == 0) {
                    return;
                }
                this._audio.pause();
            };
            /**
             * 恢复
             */
            bgWx.prototype.resume = function () {
                if (this._currBg.length == 0) {
                    return;
                }
                this._audio.play();
            };
            /**
             * 设置音量
             * @param volume
             */
            bgWx.prototype.setVolume = function (volume) {
                this._volume = volume;
                if (this._audio) {
                    this._audio.volume = this._volume;
                }
            };
            return bgWx;
        }());
        sound.bgWx = bgWx;
        __reflect(bgWx.prototype, "tubao.sound.bgWx", ["tubao.sound.ISoundBg"]);
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound_3) {
        /**
         * Created by yangsong on 15-1-14.
         * 音效类
         */
        var effect = (function (_super) {
            __extends(effect, _super);
            /**
             * 构造函数
             */
            function effect() {
                var _this = _super.call(this) || this;
                _this._soundLoops = {};
                _this._soundChannels = {};
                return _this;
            }
            /**
             * 播放一个音效
             * @param effectName
             */
            effect.prototype.play = function (effectName, loops) {
                var sound = this.getSound(effectName);
                if (sound) {
                    this.playSound(effectName, sound, loops);
                }
                else {
                    this._soundLoops[effectName] = loops;
                }
            };
            /**
             * 播放
             * @param sound
             */
            effect.prototype.playSound = function (effectName, sound, loops) {
                var channel = sound.play(0, loops);
                channel.volume = this._volume;
                channel["name"] = effectName;
                channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
                this._soundChannels[channel["name"]] = channel;
            };
            /**
             * 播放完成
             */
            effect.prototype.onPlayComplete = function (e) {
                var channel = e.currentTarget;
                this.destroyChannel(channel);
            };
            /**
             * 销毁channel
             */
            effect.prototype.destroyChannel = function (channel) {
                channel.stop();
                channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
                delete this._soundChannels[channel["name"]];
            };
            /**
             * 播放一个音效
             * @param effectName
             */
            effect.prototype.stop = function (effectName) {
                var channel = this._soundChannels[effectName];
                if (channel) {
                    this.destroyChannel(channel);
                }
            };
            /**
             * 设置音量
             * @param volume
             */
            effect.prototype.setVolume = function (volume) {
                this._volume = volume;
            };
            /**
             * 资源加载完成后处理播放
             * @param key
             */
            effect.prototype.loadedPlay = function (key) {
                this.playSound(key, RES.getRes(key), this._soundLoops[key]);
                delete this._soundLoops[key];
            };
            return effect;
        }(sound_3.BaseSound));
        sound_3.effect = effect;
        __reflect(effect.prototype, "tubao.sound.effect", ["tubao.sound.ISoundEffect"]);
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound) {
        /**
         * Created by yangsong on 18-11-21.
         * 音效类(微信小游戏专用)
         */
        var effectWx = (function () {
            /**
             * 构造函数
             */
            function effectWx() {
                var _this = this;
                this._wx = window["wx"];
                this._cache = {};
                setInterval(function () {
                    _this.dealSoundTimer();
                }, 1 * 60 * 1000);
            }
            /**
             * 处理音乐文件的清理
             */
            effectWx.prototype.dealSoundTimer = function () {
                var currTime = egret.getTimer();
                var keys = Object.keys(this._cache);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    if (!this.checkCanClear(key)) {
                        continue;
                    }
                    var audio = this._cache[key];
                    if (currTime - audio.useTime >= sound.manager.CLEAR_TIME) {
                        // console.log(key + "已clear");
                        audio.destroy();
                        delete this._cache[key];
                    }
                }
            };
            /**
             * 检测一个文件是否要清除
             * @param key
             * @returns {boolean}
             */
            effectWx.prototype.checkCanClear = function (key) {
                return true;
            };
            /**
             * 获取Sound
             * @param effectName
             * @returns {InnerAudioContext}
             */
            effectWx.prototype.getAudio = function (effectName) {
                var audio = this._cache[effectName];
                if (!audio) {
                    audio = this._wx.createInnerAudioContext();
                    audio.src = tubao.res.getFileRealPath(effectName);
                    this._cache[effectName] = audio;
                }
                audio.useTime = egret.getTimer();
                return audio;
            };
            /**
             * 播放一个音效
             * @param effectName
             */
            effectWx.prototype.play = function (effectName, loops) {
                var audio = this.getAudio(effectName);
                audio.loop = loops == 0 ? true : false;
                audio.volume = this._volume;
                audio.startTime = 0;
                audio.play();
            };
            /**
             * 播放一个音效
             * @param effectName
             */
            effectWx.prototype.stop = function (effectName) {
                var audio = this._cache[effectName];
                if (audio) {
                    audio.stop();
                }
            };
            /**
             * 设置音量
             * @param volume
             */
            effectWx.prototype.setVolume = function (volume) {
                this._volume = volume;
            };
            return effectWx;
        }());
        sound.effectWx = effectWx;
        __reflect(effectWx.prototype, "tubao.sound.effectWx", ["tubao.sound.ISoundEffect"]);
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var sound;
    (function (sound) {
        /**
         * Created by yangsong on 15-1-14.
         * Sound管理类
         */
        var manager = (function () {
            function manager() {
            }
            /**
             * 构造函数
             */
            manager.init = function () {
                if (tubao.device.isWxGame) {
                    this.bg = new sound.bgWx();
                    this.effect = new sound.effectWx();
                }
                else {
                    this.bg = new sound.bg();
                    this.effect = new sound.effect();
                }
                this.bg.setVolume(this.bgVolume);
                this.effect.setVolume(this.effectVolume);
                this.setDefaultSwitchState();
            };
            /**
             * 设置背景音乐和音效的默认开关状态
             */
            manager.setDefaultSwitchState = function () {
                var bgMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Bg);
                if (!bgMusicFlag) {
                    this.bgOn = true;
                }
                else {
                    this.bgOn = bgMusicFlag == "1";
                }
                var effectMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Effect);
                if (!effectMusicFlag) {
                    this.effectOn = true;
                }
                else {
                    this.effectOn = effectMusicFlag == "1";
                }
                console.log("背景音乐：", this.bgOn);
                console.log("音效：", this.effectOn);
            };
            /**
             * 播放音效
             * @param effectName
             */
            manager.playEffect = function (effectName, loops) {
                if (loops === void 0) { loops = 1; }
                if (!this.effectOn)
                    return;
                this.effect.play(effectName, loops);
            };
            /**
             * 停止音效播放
             * @param effectName
             */
            manager.stopEffect = function (effectName) {
                this.effect.stop(effectName);
            };
            /**
             * 播放背景音乐
             * @param key
             */
            manager.playBg = function (bgName) {
                this.currBg = bgName;
                if (!this.bgOn)
                    return;
                this.bg.play(bgName);
            };
            /**
             * 停止背景音乐
             */
            manager.stopBg = function () {
                this.bg.stop();
            };
            /**
             * 暂停背景音乐
             */
            manager.pauseBg = function () {
                if (!this.bgOn)
                    return;
                this.bg.pause();
            };
            /**
             * 恢复背景音乐
             */
            manager.resumeBg = function () {
                if (!this.bgOn)
                    return;
                this.bg.resume();
            };
            /**
             * 设置音效是否开启
             * @param $isOn
             */
            manager.setEffectOn = function ($isOn) {
                this.effectOn = $isOn;
                egret.localStorage.setItem(this.LocalStorageKey_Effect, $isOn ? "1" : "0");
            };
            /**
             * 设置背景音乐是否开启
             * @param $isOn
             */
            manager.setBgOn = function ($isOn) {
                this.bgOn = $isOn;
                egret.localStorage.setItem(this.LocalStorageKey_Bg, $isOn ? "1" : "0");
                if (!this.bgOn) {
                    this.stopBg();
                }
                else {
                    if (this.currBg) {
                        this.playBg(this.currBg);
                    }
                }
            };
            /**
             * 设置背景音乐音量
             * @param volume
             */
            manager.setBgVolume = function (volume) {
                volume = Math.min(volume, 1);
                volume = Math.max(volume, 0);
                this.bgVolume = volume;
                this.bg.setVolume(this.bgVolume);
            };
            /**
             * 获取背景音乐音量
             * @returns {number}
             */
            manager.getBgVolume = function () {
                return this.bgVolume;
            };
            /**
             * 设置音效音量
             * @param volume
             */
            manager.setEffectVolume = function (volume) {
                volume = Math.min(volume, 1);
                volume = Math.max(volume, 0);
                this.effectVolume = volume;
                this.effect.setVolume(this.effectVolume);
            };
            /**
             * 获取音效音量
             * @returns {number}
             */
            manager.getEffectVolume = function () {
                return this.effectVolume;
            };
            Object.defineProperty(manager, "bgIsOn", {
                /**
                 * 背景音乐是否已开启
                 * @returns {boolean}
                 */
                get: function () {
                    return this.bgOn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(manager, "effectIsOn", {
                /**
                 * 音效是否已开启
                 * @returns {boolean}
                 */
                get: function () {
                    return this.effectOn;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 音乐文件清理时间
             * @type {number}
             */
            manager.CLEAR_TIME = 3 * 60 * 1000;
            //LocalStorage使用的key值
            manager.LocalStorageKey_Bg = "bgMusicFlag";
            manager.LocalStorageKey_Effect = "effectMusicFlag";
            manager.bgVolume = 0.5;
            manager.effectVolume = 0.5;
            return manager;
        }());
        sound.manager = manager;
        __reflect(manager.prototype, "tubao.sound.manager");
    })(sound = tubao.sound || (tubao.sound = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var utils;
    (function (utils) {
        /**
         * 注册后点击就可以移动面板到最上层
         * @param {egret.DisplayObject} dis 想要移动位置的显示对象
         */
        function disPlayUpTop(dis) {
            dis.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                upTop(dis);
            }, this);
            //监听点击事件
        }
        utils.disPlayUpTop = disPlayUpTop;
        /**
         * 移动到顶层
         * @param {egret.DisplayObject} dis 想要移动位置的显示对象
         */
        function upTop(dis) {
            dis.parent.setChildIndex(dis, dis.parent.numChildren - 1);
            //查找父母级嵌套，指定显示对象移动显示顺序到最大数量减一的位置
        }
        /**
         * 显示对象临时定位
         * @param {egret.DisplayObject} dis 显示对象
         */
        function displayMomentPoix(dis) {
            var a = tubao.layer.LayerManager.UI_Popup.height / 2;
            //视口高度的一半315
            var b = tubao.layer.LayerManager.UI_Popup.width / 2;
            //视口宽度的一半522
            var c = dis.height / 2;
            //对象高度的一半177
            var e = dis.width / 2;
            //对象宽度的一半191
            dis.x = Math.round(b - e);
            dis.y = Math.round(a - c);
        }
        utils.displayMomentPoix = displayMomentPoix;
    })(utils = tubao.utils || (tubao.utils = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var utils;
    (function (utils) {
        /**
         * 播放tween动画，支持了循环播放tween
         * @param {egret.tween.TweenGroup} target 动画组
         * @param {boolean} isLoop 是否循环
         */
        function playAnimation(target, isLoop) {
            if (isLoop) {
                for (var key in target.items) {
                    target.items[key].props = { loop: true };
                }
            }
            target.play();
        }
        utils.playAnimation = playAnimation;
    })(utils = tubao.utils || (tubao.utils = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var utils;
    (function (utils) {
        /**
         * 验证式触发，验证按下点是否是抬起点
         * @param {any} thisObject 对象和应用作用域
         * @param {egret.disPlayObject} click 点击物品
         * @param {any} triggerFun 触发函数
         */
        function verTrigger(thisObject, click, triggerFun) {
            var anx = 0;
            var any = 0;
            var tix = 0;
            var tiy = 0;
            click.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                anx = e.stageX;
                any = e.stageY;
            }, this);
            //按下手指
            click.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                tix = e.stageX;
                tiy = e.stageY;
            }, this);
            //抬起手指
            click.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (anx == tix && any == tiy) {
                    triggerFun.call(thisObject);
                }
            }, this);
            //面板开关
        }
        utils.verTrigger = verTrigger;
    })(utils = tubao.utils || (tubao.utils = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var utils;
    (function (utils) {
        /**
         * 指定对象为真运行函数否则一直等待功能块
         * @param {any} detection 检测对象
         * @param {any} thisObject 作用域
         * @param {Function} Fun 运行函数
         */
        function wait(detection, thisObject, Fun) {
            var a = setInterval(function () {
                if (detection) {
                    Fun.call(thisObject);
                    clearInterval(a);
                }
            }, 30);
        }
        utils.wait = wait;
    })(utils = tubao.utils || (tubao.utils = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var video;
    (function (video_1) {
        /**
         * 兔宝世界视频播放
         */
        var video = (function (_super) {
            __extends(video, _super);
            function video() {
                var _this = _super.call(this, tubao.layer.LayerManager.UI_Popup) || this;
                /**是否显示特效 */
                _this.videoBuffer = true;
                //视频名字
                _this.video = new egret.Video();
                //视频
                _this.inPlay = false;
                _this.skinName = "tubao.module.videoSkin";
                _this.video.fullscreen = false;
                //禁止全屏
                _this.videoGroup.addChild(_this.video);
                //将视频添加到舞台
                _this.tiaoguo.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.videoPlayOver, _this);
                _this.video.addEventListener(egret.Event.COMPLETE, _this.lodingEnd, _this);
                //视频加载完成
                _this.video.addEventListener(egret.Event.ENDED, _this.videoPlayOver, _this);
                //视频播放完成
                _this.visible = false;
                _this.alpha = 0;
                return _this;
            }
            /**
             * 视频加载完成
             */
            video.prototype.lodingEnd = function () {
                var height = Math.round((tubao.height / 4) * 3);
                var width = Math.round((height / this.video.height) * this.video.width);
                this.videoGroup.width = this.video.width = width;
                this.videoGroup.height = this.video.height = height;
                if (this.videoBuffer) {
                    //带有打开特效的播放开始
                    egret.Tween.get(this).to({ alpha: 1 }, 2000).call(this.bofangKaiShi, this);
                }
                else {
                    this.bofangKaiShi();
                }
                var daterEvent = new video_1.videoEvent(video_1.videoEvent.videoPlay);
                //发送事件视频开始播放
                daterEvent.name = this.name;
                this.dispatchEvent(daterEvent);
                this.inPlay = true;
            };
            /**
             * 视频播放完成
             */
            video.prototype.videoPlayOver = function () {
                if (this.videoBuffer) {
                    //带特效的播放完成
                    egret.Tween.get(this).to({ alpha: 0 }, 2000).call(this.bofangWanCheng, this);
                }
                else {
                    this.bofangWanCheng();
                }
            };
            /**
             * 添加一个视频
             * @param {string} name 视频名字文字
             */
            video.prototype.addOneVideo = function (name) {
                this.open();
                if (tubao.device.isChannel) {
                    //小游戏环境
                    new tubao.base.popup("basics01_png", "小程序环境没有播放视频能力~");
                    this.bofangWanCheng();
                    //自动播放完成
                    return;
                }
                this.visible = true;
                this.alpha = 0;
                this.vname = name;
                this.video.load("resource/chief/senior/video/" + name + ".mp4");
                this.video.poster = "resource/chief/senior/video/" + name + ".jpg";
            };
            /**
             * 播放开始
             */
            video.prototype.bofangKaiShi = function () {
                this.alpha = 1;
                this.visible = true;
                this.video.play(1);
                //背景音乐是打开的那么就打开视频音乐
                this.video.volume = tubao.sound.manager.getBgVolume();
                tubao.sound.manager.setBgVolume(0);
            };
            /**
             * 播放完成
             */
            video.prototype.bofangWanCheng = function () {
                this.alpha = 0;
                this.visible = false;
                //播放时视频音乐是打开的背景音乐是关闭的那么就打开背景音乐
                this.video.pause();
                tubao.sound.manager.setBgVolume(1);
                var daterEvent = new video_1.videoEvent(video_1.videoEvent.videoEnd);
                //发送事件视频播放完成
                daterEvent.name = this.name;
                this.dispatchEvent(daterEvent);
                this.inPlay = false;
                this.close();
            };
            return video;
        }(tubao.base.panel));
        video_1.video = video;
        __reflect(video.prototype, "tubao.video.video");
    })(video = tubao.video || (tubao.video = {}));
})(tubao || (tubao = {}));
var tubao;
(function (tubao) {
    var video;
    (function (video) {
        /**
         * 视频事件类
         */
        var videoEvent = (function (_super) {
            __extends(videoEvent, _super);
            //视频名字
            function videoEvent(type, bubbles, cancelable) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                return _super.call(this, type, bubbles, cancelable) || this;
            }
            /**视频播放开始 */
            videoEvent.videoPlay = "播放开始";
            /**视频播放结束 */
            videoEvent.videoEnd = "播放结束";
            return videoEvent;
        }(egret.Event));
        video.videoEvent = videoEvent;
        __reflect(videoEvent.prototype, "tubao.video.videoEvent");
    })(video = tubao.video || (tubao.video = {}));
})(tubao || (tubao = {}));
