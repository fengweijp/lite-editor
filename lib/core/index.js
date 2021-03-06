'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aTemplate2 = require('a-template');

var _aTemplate3 = _interopRequireDefault(_aTemplate2);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _util = require('../lib/util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editorHtml = '<div class="\\{classNames.LiteEditor\\}" data-action-mouseup="onPutCaret" data-action-keydown="onKeyDown" data-selector="lite-editor" contenteditable data-action-input="onInput" data-action-paste="onPaste" style="<!-- BEGIN showSource:exist -->display:none;<!-- END showSource:exist --><!-- BEGIN hideEditor:exist -->display:none;"<!-- END hideEditor:exist --><!-- BEGIN minHeight:exist -->min-height: {minHeight}px;<!-- END minHeight:exist --><!-- BEGIN maxHeight:exist -->max-height:{maxHeight}px;<!-- END maxHeight:exist -->">{value}</div>\n<textarea class="\\{classNames.LiteEditorSource\\}" data-selector="lite-editor-source" style="<!-- BEGIN showSource:empty -->display:none;<!-- END showSource:empty --><!-- BEGIN minHeight:exist -->min-height: {minHeight}px;<!-- END minHeight:exist --><!-- BEGIN maxHeight:exist -->max-height:{maxHeight}px;<!-- END maxHeight:exist -->" {attr} data-bind-oneway="formatedValue" data-action-input="onDirectInput"></textarea>';
var btnHtml = '<div class="\\{classNames.LiteEditorToolBox\\}" data-selector="lite-editor-toolbox">\n\n    <!-- BEGIN source:exist -->\n    <div class="\\{classNames.LiteEditorBtnGroupWrapRight\\}">\n        <div class="\\{classNames.LiteEditorBtnGroup\\}">\n            <button class="\\{classNames.LiteEditorBtn\\}<!-- BEGIN showSource:empty --> \\{classNames.LiteEditorBtnActive\\}<!-- END showSource:empty -->" data-action-click="toggleSource" type="button" <!-- BEGIN showSource:empty --> disabled<!-- END showSource:empty --><!-- BEGIN disableEditorMode:exist --> disabled<!-- END disableEditorMode:exist -->>\n                <i class="\\{classNames.LiteEditorFontAbc\\}"></i>\n            </button>\n            <button class="\\{classNames.LiteEditorBtn\\}<!-- BEGIN showSource:exist --> \\{classNames.LiteEditorBtnActive\\}<!-- END showSource:exist -->" data-action-click="toggleSource" type="button" <!-- BEGIN showSource:exist --> disabled<!-- END showSource:exist -->>\n                <i class="\\{classNames.LiteEditorFontSource\\}"></i>\n            </button>\n        </div>\n    </div>\n    <!-- END source:exist -->\n\n    <!-- BEGIN selectOptions.0:exist -->\n    <div class="\\{classNames.LiteEditorSelectWrap\\}">\n        <select class="\\{classNames.LiteEditorSelect\\}"<!-- BEGIN selectName:exist --> name="{selectName}"<!-- END selectName:exist --> data-action-change="changeOption" data-bind="selectedOption">\n        <!-- BEGIN selectOptions:loop -->\n        <option value="{value}">{label}</option>\n        <!-- END selectOptions:loop -->\n        </select>\n        <!-- BEGIN extendLabel:exist -->\n        <label>{extendLabel}</label>\n        <input type="text" name="{selectName}[insertExtend]" class="\\{classNames.LiteEditorExtendInput\\}" data-bind="extendValue"/>\n        <!-- END extendLabel:exist -->\n    </div>\n    <!-- END selectOptions.0:exist -->\n\n    <div class="\\{classNames.LiteEditorBtnGroupWrap\\}" <!-- BEGIN hideBtns:exist --> style="display:none;"<!-- END hideBtns:exist -->>\n        \n        <!-- BEGIN groups:loop -->\n        <div class="\\\\{classNames.LiteEditorBtnGroup\\\\}">\n            <!-- \\BEGIN groups.{i}.items:loop -->\n\n            <!-- \\BEGIN action:touch#redo -->\n            <button class="\\\\\\{classNames.LiteEditorBtn\\\\\\}" data-action-click="redo"<!-- \\\\BEGIN canRedo:empty --> disabled<!-- \\\\END canRedo:empty --> type="button">\\{label\\}</button>\n            <!-- \\END action:touch#redo -->\n\n            <!-- \\BEGIN action:touch#undo -->\n            <button class="\\\\\\{classNames.LiteEditorBtn\\\\\\}" data-action-click="undo"<!-- \\\\BEGIN canUndo:empty --> disabled<!-- \\\\END canUndo:empty --> type="button">\\{label\\}</button>\n            <!-- \\END action:touch#undo -->\n\n            <!-- \\BEGIN action:touch#extra -->\n            <button class="\\\\\\{classNames.LiteEditorBtn\\\\\\}<!-- \\BEGIN selfClassName:exist --> \\{selfClassName\\}<!-- \\END selfClassName:exist -->" data-action-click="onClick(\\{index\\})" type="button">\\{label\\}</button>\n            <!-- \\END action:touch#extra -->\n\n            <!-- \\BEGIN action:empty -->\n            <button class="\\\\\\{classNames.LiteEditorBtn\\\\\\}<!-- \\BEGIN selfClassName:exist --> \\{selfClassName\\}<!-- \\END selfClassName:exist --><!-- \\BEGIN selected:exist --> \\\\\\{classNames.LiteEditorBtnActive\\\\\\}<!-- \\END selected:exist -->"\n            <!-- \\BEGIN tag:exist -->\n            <!-- \\BEGIN selected:empty --> data-action-click="insertTag(\\{tag\\},\\{className\\},\\{sampleText\\})"<!-- \\END selected:empty -->\n            <!-- \\BEGIN selected:exist --> data-action-click="unwrapTag(\\{tag\\},\\{className\\},\\{sampleText\\})"<!-- \\END selected:exist -->\n            <!-- \\END tag:exist -->\n            <!-- \\BEGIN tag:empty --> data-action-click="insertTag(span,\\{className\\},\\{sampleText\\})"<!-- \\END tag:empty -->\n            type="button">\\{label\\}</button>\n            <!-- \\END action:empty -->\n            <!-- \\END groups.{i}.items:loop -->\n        </div>\n        <!-- END groups:loop -->\n    </div>\n</div>';
var tooltipHtml = '<div data-selector="lite-editor-tooltip">\n<!-- BEGIN tooltipLabel:exist -->\n<div class="\\{classNames.LiteEditorTooltipWrap\\}">\n    <div class="\\{classNames.LiteEditorTooltipOuter\\}">\n        <div class="\\{classNames.LiteEditorTooltipInner\\}">\n            <div class="\\{classNames.LiteEditorTooltip\\}">\n                <span class="\\{classNames.LiteEditorBtnCloseWrap\\}">\n                    <span class="\\{classNames.LiteEditorBtnCloseLabel\\}">\\{message.closeLabel\\}</span>\n                    <button type="button" data-action-click="closeTooltip()" class="\\{classNames.LiteEditorBtn\\} \\{classNames.LiteEditorBtnClose\\}">\n                        <i class="\\{classNames.LiteEditorFontClose\\}"></i>\n                    </button>\n                </span>\n                <!-- BEGIN linkNew:exist -->\n                <h2 class="\\{classNames.LiteEditorTooltipTitle\\}"><i class="\\{classNames.LiteEditorFontLink\\}"></i>\\{message.addLinkTitle\\}</h2>\n                <!-- END linkNew:exist -->\n                <!-- BEGIN linkNew:empty -->\n                <h2 class="\\{classNames.LiteEditorTooltipTitle\\}"><i class="\\{classNames.LiteEditorFontLink\\}"></i>\\{message.updateLinkTitle\\}</h2>\n                <!-- END linkNew:empty -->\n                <div class="\\{classNames.LiteEditorTooltipBody\\}">\n                    <table class="\\{classNames.LiteEditorTooltipTable\\}">\n                        <tr>\n                            <th>\\{message.linkLabel\\}</th>\n                            <td><input type="text" data-bind="tooltipLabel" class="\\{classNames.LiteEditorTooltipInput\\}" data-action-keydown="preventSubmit()"></td>\n                        </tr>\n                        <tr>\n                            <th>\\{message.linkUrl\\}</th>\n                            <td><input type="text" data-bind="tooltipUrl" class="\\{classNames.LiteEditorTooltipInput\\}" data-action-keydown="preventSubmit()"></td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>\n                                <!-- BEGIN linkNew:exist -->\n                                <button type="button" data-action-click="insertAtag()" class="\\{classNames.LiteEditorBtn\\}">\n                                    <i class="\\{classNames.LiteEditorFontLink\\}"></i>\n                                    \\{message.addLink\\}\n                                </button> \n                                <!-- END linkNew:exist -->\n\n                                <!-- BEGIN linkNew:empty -->\n                                <button type="button" data-action-click="updateLink()" class="\\{classNames.LiteEditorBtn\\}">\n                                    <i class="\\{classNames.LiteEditorFontUpdate\\}"></i>\n                                    \\{message.updateLink\\}\n                                </button>\n                                <button type="button" data-action-click="removeLink()" class="\\{classNames.LiteEditorBtn\\}">\n                                    <i class="\\{classNames.LiteEditorFontRemove\\}"></i>\n                                    \\{message.removeLink\\}\n                                </button>\n                                <!-- END linkNew:empty -->\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- END tooltipLabel:exist -->\n</div>';


var Entities = require('html-entities').XmlEntities;
var Upndown = require('upndown');
var Showdown = require('showdown');

var entities = new Entities();
var converter = new Showdown.Converter();
var und = new Upndown({ decodeEntities: false });

var defaultbtnOptions = [{
  label: '<i class="lite-editor-font-back"></i>',
  action: 'undo',
  group: 'action'
}, {
  label: '<i class="lite-editor-font-go"></i>',
  action: 'redo',
  group: 'action'
}, {
  label: '<i class="lite-editor-font-link"></i>',
  tag: 'a',
  className: '',
  group: 'link',
  sampleText: 'link text'
}, {
  label: '<i class="lite-editor-font-bold"></i>',
  tag: 'strong',
  className: '',
  group: 'mark',
  sampleText: 'strong text'
}, {
  label: '<i class="lite-editor-font-italic"></i>',
  tag: 'i',
  className: '',
  group: 'mark',
  sampleText: 'italic text'
}, {
  label: '<i class="lite-editor-font-underline"></i>',
  tag: 'u',
  className: '',
  group: 'mark',
  sampleText: 'underline'
}];

var defaults = {
  mode: 'html',
  classNames: {
    LiteEditor: 'lite-editor',
    LiteEditorSource: 'lite-editor-source',
    LiteEditorBtn: 'lite-editor-btn',
    LiteEditorBtnClose: 'lite-editor-btn-close',
    LiteEditorBtnActive: 'lite-editor-btn-active',
    LiteEditorBtnGroup: 'lite-editor-btn-group',
    LiteEditorBtnGroupWrap: 'lite-editor-btn-group-wrap',
    LiteEditorBtnGroupWrapRight: 'lite-editor-btn-group-wrap-right',
    LiteEditorBtnCloseWrap: 'lite-editor-btn-close-wrap',
    LiteEditorBtnCloseLabel: 'lite-editor-btn-close-label',
    LiteEditorSelect: 'lite-editor-select',
    LiteEditorSelectWrap: 'lite-editor-select-wrap',
    LiteEditorToolBox: 'lite-editor-toolbox',
    LiteEditorTooltip: 'lite-editor-tooltip',
    LiteEditorTooltipWrap: 'lite-editor-tooltip-wrap',
    LiteEditorTooltipOuter: 'lite-editor-tooltip-outer',
    LiteEditorTooltipInner: 'lite-editor-tooltip-inner',
    LiteEditorTooltipTable: 'lite-editor-tooltip-table',
    LiteEditorTooltipTitle: 'lite-editor-tooltip-title',
    LiteEditorTooltipBody: 'lite-editor-tooltip-body',
    LiteEditorTooltipInput: 'lite-editor-tooltip-input',
    LiteEditorExtendInput: 'lite-editor-extend-input',
    LiteEditorFontLink: 'lite-editor-font-link',
    LiteEditorFontRemove: 'lite-editor-font-remove',
    LiteEditorFontUpdate: 'lite-editor-font-update',
    LiteEditorFontClose: 'lite-editor-font-close',
    LiteEditorFontSource: 'lite-editor-font-source',
    LiteEditorFontAbc: 'lite-editor-font-abc'
  },
  message: {
    addLinkTitle: 'link',
    updateLinkTitle: 'link',
    addLink: 'add',
    updateLink: 'update',
    removeLink: 'remove',
    linkUrl: 'URL',
    linkLabel: 'label',
    closeLabel: 'close'
  },
  minHeight: 50,
  maxHeight: 400,
  decodeSource: false,
  sourceFirst: false,
  escapeNotRegisteredTags: false,
  preserveSpace: false,
  nl2br: true,
  source: true,
  selectOptions: [],
  selectedOption: '',
  btnOptions: defaultbtnOptions,
  btnPosition: 'top'
};

var LiteEditor = function (_aTemplate) {
  _inherits(LiteEditor, _aTemplate);

  function LiteEditor(ele, settings) {
    _classCallCheck(this, LiteEditor);

    var _this = _possibleConstructorReturn(this, (LiteEditor.__proto__ || Object.getPrototypeOf(LiteEditor)).call(this));

    _this.id = _this._getUniqId();
    var selector = typeof ele === 'string' ? document.querySelector(ele) : ele;
    var html = '<div data-id=\'' + _this.id + '\'></div>';
    _this.data = (0, _deepExtend2.default)({}, defaults, settings);
    _this.data.showSource = _this.data.sourceFirst;
    _this.data.disableEditorMode = false;
    _this.data.hideEditor = false;
    _this.data.tooltipLabel = '';
    _this.data.tooltipUrl = '';
    _this.data.tooltipClassName = '';
    _this.data.attr = '';
    _this.data.linkNew = true;
    _this.data.groups = _this.makeBtnGroups();
    _this.stack = [];
    _this.stackPosition = 0;
    var template = '';
    var attrStr = '';

    _this.convert = {
      format: _this.format,
      insertExtend: _this.insertExtend
    };

    if (_this.data.btnPosition === 'bottom') {
      template = '' + editorHtml + btnHtml + tooltipHtml;
    } else {
      template = '' + btnHtml + editorHtml + tooltipHtml;
    }

    _this.addTemplate(_this.id, template);

    if (selector.value) {
      var value = selector.value;
      value = _this.makeEditableHtml(value);
      if (_this.data.escapeNotRegisteredTags) {
        value = _this.escapeNotRegisteredTags(value);
      }
      _this.data.firstValue = selector.value;
      _this.data.value = value;
    }

    if (selector.attributes) {
      [].forEach.call(selector.attributes, function (attr) {
        attrStr += ' ' + attr.nodeName + '="' + attr.nodeValue + '"';
      });
      _this.data.attr = attrStr;
    }

    if (!_this.data.selectedOption && _this.data.selectOptions && _this.data.selectOptions[0] && _this.data.selectOptions[0].value) {
      _this.data.selectedOption = _this.data.selectOptions[0].value;
    }

    util.before(selector, html);
    util.removeElement(selector);
    _this.update();
    _this.selector = _this._getElementByQuery('[data-selector="lite-editor-source"]');
    var item = _this.data.selectOptions.find(function (option) {
      return option.value === _this.data.selectedOption;
    });
    if (item) {
      _this.data.extendLabel = item.extendLabel;
      if (item.onSelect) {
        item.onSelect(_this);
      }
    }

    _this._fireEvent('init');
    return _this;
  }

  _createClass(LiteEditor, [{
    key: 'registerButton',
    value: function registerButton(btn) {
      this.data.btnOptions.push(btn);
      this.data.groups = this.makeBtnGroups();
      this.update('html', '[data-selector="lite-editor-toolbox"]');
    }
  }, {
    key: 'activateEditorMode',
    value: function activateEditorMode() {
      this.data.disableEditorMode = false;
      this.update('html', '[data-selector="lite-editor-toolbox"]');
    }
  }, {
    key: 'deactivateEditorMode',
    value: function deactivateEditorMode() {
      this.data.disableEditorMode = true;
      this.update('html', '[data-selector="lite-editor-toolbox"]');
    }
  }, {
    key: 'makeEditableHtml',
    value: function makeEditableHtml(value) {
      if (this.data.preserveSpace) {
        var dom = document.createElement('div');
        dom.innerHTML = value;
        util.replaceWhiteSpaceWithNbsp(dom);
        value = dom.innerHTML;
      }

      value = value.replace(/<br>(\r\n|\r|\n)/g, '<br>');
      value = value.replace(/\r\n|\r|\n/g, '<br>');

      return value;
    }
  }, {
    key: 'makeBtnGroups',
    value: function makeBtnGroups() {
      var btns = this.data.btnOptions;
      var groups = [];
      btns.forEach(function (btn, index) {
        btn.index = index;
        var flag = true;
        if (!btn.group) {
          btn.group = 'none';
        }
        groups.forEach(function (group) {
          if (group.name === btn.group) {
            group.items.push(btn);
            flag = false;
          }
        });
        if (flag) {
          var group = {
            name: btn.group,
            items: [btn]
          };
          groups.push(group);
        }
      });
      return groups;
    }
  }, {
    key: '_getSelf',
    value: function _getSelf() {
      return document.querySelector('[data-id=\'' + this.id + '\']');
    }
  }, {
    key: '_getUniqId',
    value: function _getUniqId() {
      return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    }
  }, {
    key: '_getElementByQuery',
    value: function _getElementByQuery(query) {
      return document.querySelector('[data-id=\'' + this.id + '\'] ' + query);
    }
  }, {
    key: '_fireEvent',
    value: function _fireEvent(eventName) {
      var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
      if (source) {
        util.triggerEvent(source, eventName);
      }
    }
  }, {
    key: 'on',
    value: function on(event, fn) {
      var _this2 = this;

      var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
      source.addEventListener(event, function (e) {
        fn.call(_this2, e);
      });
    }
  }, {
    key: 'escapeNotRegisteredTags',
    value: function escapeNotRegisteredTags(value) {
      var _this3 = this;

      var btns = this.data.btnOptions;
      value = value.replace(/<([a-zA-Z0-9._-]+)\s?(.*?)>(([\n\r\t]|.)*?)<\/\1>/g, function (component, tag, attr, content) {
        var className = (attr.match(/class=["|'](.*?)["|']/i) || [null, ''])[1];
        var flag = false;
        if (attr) {
          attr = ' ' + attr;
        }
        btns.forEach(function (btn) {
          if (btn.className === className && btn.tag === tag) {
            flag = true;
          }
        });
        if (flag) {
          return component;
        }
        if (/<([a-zA-Z0-9._-]+)\s?(.*?)>(([\n\r\t]|.)*?)<\/\1>/.exec(content)) {
          content = _this3.escapeNotRegisteredTags(content);
        }
        return '&lt;' + tag + attr + '&gt;' + content + '&lt;/' + tag + '&gt;';
      });
      return value.replace(/<([a-zA-Z0-9._-]+)\s?([^>]*?)\/?>/g, function (component, tag, attr) {
        var className = (attr.match(/class=["|'](.*?)["|']/i) || [null, ''])[1];
        var flag = false;
        if (attr) {
          attr = ' ' + attr;
        }
        btns.forEach(function (btn) {
          if (btn.className === className && btn.tag === tag) {
            flag = true;
          }
        });
        if (flag) {
          return component;
        }
        if (tag !== 'br') {
          return '&lt;' + tag + attr + '&gt';
        }
        return '<br>';
      });
    }
  }, {
    key: 'encodeValue',
    value: function encodeValue() {
      this.data.value = entities.encode(this.data.value);
      this.update();
    }
  }, {
    key: 'decodeValue',
    value: function decodeValue() {
      this.data.value = entities.decode(this.data.value);
      this.update();
    }
  }, {
    key: 'hideEditor',
    value: function hideEditor() {
      this.data.hideEditor = true;
      this.update();
    }
  }, {
    key: 'showEditor',
    value: function showEditor() {
      this.data.hideEditor = false;
      this.update();
    }
  }, {
    key: 'hideBtns',
    value: function hideBtns() {
      this.data.hideBtns = true;
      this.update();
    }
  }, {
    key: 'showBtns',
    value: function showBtns() {
      this.data.hideBtns = false;
      this.update();
    }
  }, {
    key: 'resetStyle',
    value: function resetStyle() {
      var selection = util.getSelection();
      var insertText = ('' + selection).replace(/<[^>]*>/g, '');
      if (this._isFocused()) {
        document.execCommand('insertText', false, insertText);
      }
    }
  }, {
    key: 'insertHtml',
    value: function insertHtml(html) {
      util.replaceSelectionWithHtml(html);
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      this.data.value = editor.innerHTML;
    }
  }, {
    key: 'saveSelection',
    value: function saveSelection() {
      this.selection = util.saveSelection();
    }
  }, {
    key: 'restoreSelection',
    value: function restoreSelection() {
      if (!this.selection) {
        return;
      }
      util.restoreSelection(this.selection);
    }
  }, {
    key: '_isFocused',
    value: function _isFocused() {
      var selector = this._getElementByQuery('[data-selector="lite-editor"]');
      return selector === document.activeElement;
    }
  }, {
    key: 'insertTag',
    value: function insertTag(tag, className, sampleText) {
      var _this4 = this;

      var selection = util.getSelection();
      if (!selection) {
        selection = sampleText;
      }
      if (tag === 'a') {
        this.saveSelection();
        this.showLinkDialog('' + selection, className);
        return;
      }

      var classAttr = '';
      if (className) {
        classAttr = ' class="' + className + '"';
      }
      var insertHtml = '<' + tag + classAttr + '>' + selection + '</' + tag + '>';
      if (this.data.showSource) {
        var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
        if (this.data.mode === 'markdown') {
          und.convert(insertHtml, function (err, markdown) {
            util.replaceSelectionWithText(source, markdown);
            _this4.data.value = _this4.makeEditableHtml(source.value);
          });
        } else {
          util.replaceSelectionWithText(source, insertHtml);
          this.data.value = this.makeEditableHtml(source.value);
        }
      } else {
        this.insertHtml(insertHtml.replace(/\r\n|\r|\n/g, '<br>'));
        this.updateToolBox();
      }
      this._fireEvent('insertTag');
    }
  }, {
    key: 'showLinkDialog',
    value: function showLinkDialog(text, className) {
      this.data.tooltipLabel = text;
      this.data.tooltipClassName = className;
      this.data.linkNew = true;
      this.update('html', '[data-selector="lite-editor-tooltip"]');
    }
  }, {
    key: 'insertAtag',
    value: function insertAtag() {
      var _this5 = this;

      this.restoreSelection();
      var label = this.data.tooltipLabel;
      var link = this.data.tooltipUrl;
      var className = this.data.tooltipClassName;
      var classAttr = '';
      if (className) {
        classAttr = ' class="' + className + '"';
      }
      var insertHtml = '<a href="' + link + '"' + classAttr + '>' + label + '</a>';
      if (this.data.showSource) {
        var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
        if (this.data.mode === 'markdown') {
          und.convert(insertHtml, function (err, markdown) {
            util.replaceSelectionWithText(source, markdown);
            _this5.data.value = _this5.makeEditableHtml(source.value);
          });
        } else {
          util.replaceSelectionWithText(source, insertHtml);
          this.data.value = this.makeEditableHtml(source.value);
        }
      } else {
        this.insertHtml(insertHtml.replace(/\r\n|\r|\n/g, '<br>'));
        this.updateToolBox();
      }
      this.closeTooltip();
    }
  }, {
    key: 'onClick',
    value: function onClick(i) {
      var number = parseInt(i, 10);
      if (this.data.btnOptions[number].onClick) {
        this.data.btnOptions[number].onClick(this);
      }
    }
  }, {
    key: 'beforeUpdated',
    value: function beforeUpdated() {
      var data = this.data;
      data.canUndo = this.canUndo();
      data.canRedo = this.canRedo();
      if (data.firstValue) {
        data.formatedValue = this.data.firstValue;
        data.firstValue = '';
      } else {
        data.formatedValue = this.format(data.value);
      }
      if (data.value) {
        data.value = data.value.replace(/{/g, '&lcub;').replace(/}/g, '&rcub;');
      }
      this._fireEvent('prerender');
    }
  }, {
    key: 'onUpdated',
    value: function onUpdated() {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
      if (this.data.showSource === true) {
        source.style.height = source.scrollHeight + 'px';
      } else {
        this.data.value = editor.innerHTML;
      }
      if (!editor) {
        return;
      }
      this.saveSelection();
      if (this.stopStack) {
        this.stopStack = false;
      } else if ('' + this.stack[this.stackPosition - 1] !== '' + this.data.value) {
        this.stack = this.stack.slice(0, this.stackPosition + 1);
        this.stack.push(this.data.value);
        this.stackPosition += 1;
        if (this.selector) {
          this.selector.value = this.format(this.data.value);
        }
      }
      this._fireEvent('render');
    }
  }, {
    key: 'redo',
    value: function redo() {
      if (!this.canRedo()) {
        return;
      }
      this.stackPosition += 1;
      this.data.value = this.stack[this.stackPosition];
      this.stopStack = true;
      this.update();
      this._fireEvent('redo');
    }
  }, {
    key: 'canRedo',
    value: function canRedo() {
      if (this.stackPosition < this.stack.length - 1) {
        return true;
      }
      return false;
    }
  }, {
    key: 'undo',
    value: function undo() {
      if (!this.canUndo()) {
        return;
      }
      this.stackPosition -= 1;
      this.data.value = this.stack[this.stackPosition];
      this.stopStack = true;
      this.update();
      this._fireEvent('undo');
    }
  }, {
    key: 'canUndo',
    value: function canUndo() {
      if (this.stackPosition > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: 'onInput',
    value: function onInput() {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var textarea = this._getElementByQuery('[data-selector="lite-editor-source"]');
      this.data.value = editor.innerHTML;
      this.data.formatedValue = this.format(this.data.value);
      textarea.value = this.data.formatedValue;
    }
  }, {
    key: 'onPaste',
    value: function onPaste() {
      var e = this.e;
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var textarea = this._getElementByQuery('[data-selector="lite-editor-source"]');
      e.preventDefault();
      var insertText = e.clipboardData.getData('text/plain');
      if (this._isFocused() && insertText) {
        this.insertHtml(insertText.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;'));
        this.data.value = editor.innerHTML;
        this.data.formatedValue = this.format(this.data.value);
        textarea.value = this.data.formatedValue;
      }
      this._fireEvent('paste');
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown() {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var textarea = this._getElementByQuery('[data-selector="lite-editor-source"]');
      var e = this.e;

      if (e.ctrlKey || e.metaKey) {
        if (e.which === 90 || e.keyCode === 90) {
          e.preventDefault();
          if (e.shiftKey) {
            this.redo();
          } else {
            this.undo();
          }
        }
        return;
      }

      if (e.keyCode !== 13) {
        this.data.value = editor.innerHTML;
        this.onPutCaret();
        return;
      }

      var pos = util.getCaretPos(editor);
      // on purpose
      this.insertHtml('<br> ');
      editor.innerHTML = editor.innerHTML.replace(/<br> <\/(.*?)>/g, '</$1><br> ');
      this.data.value = editor.innerHTML;
      this.data.formatedValue = this.format(this.data.value);
      editor.scrollTop = editor.scrollHeight;
      textarea.value = this.data.formatedValue;
      editor.focus();
      util.setCaretPos(editor, pos + 1);
      e.preventDefault();
    }
  }, {
    key: 'preventSubmit',
    value: function preventSubmit() {
      var e = this.e;
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    }
  }, {
    key: 'onPutCaret',
    value: function onPutCaret() {
      var _this6 = this;

      setTimeout(function () {
        var target = _this6.getSelectionNode();
        var tags = [];
        var editor = _this6._getElementByQuery('[data-selector="lite-editor"]');
        if (target && target !== editor) {
          tags.push({ tagName: target.tagName.toLowerCase(), className: target.getAttribute('class') || '' });
          var parent = target.parentElement;
          while (parent !== editor) {
            var tagName = parent.tagName.toLowerCase();
            tags.push({
              tagName: tagName,
              className: parent.getAttribute('class') || ''
            });
            parent = parent.parentElement;
          }
        }
        _this6.updateToolBox(tags);
      }, 1);
    }
  }, {
    key: 'onDirectInput',
    value: function onDirectInput() {
      var source = this._getElementByQuery('[data-selector="lite-editor-source"]');
      var value = this.e.target.value;
      this.data.value = this.makeEditableHtml(value);
      source.style.height = source.scrollHeight + 'px';
    }
  }, {
    key: 'updateToolBox',
    value: function updateToolBox() {
      var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var groups = this.data.groups;
      groups.forEach(function (group) {
        group.items.forEach(function (btn) {
          btn.selected = false;
          tags.forEach(function (tag) {
            if (btn.tag === tag.tagName && btn.className === tag.className) {
              btn.selected = true;
            }
          });
        });
      });
      this.saveSelection();
      this.update('html', '[data-selector="lite-editor-toolbox"]');
    }
  }, {
    key: 'updateTooltip',
    value: function updateTooltip(item) {
      if (item === null) {
        this.data.linkNew = true;
        this.data.tooltipLabel = '';
        this.data.tooltipUrl = '';
      } else {
        this.data.linkNew = false;
        this.data.tooltipLabel = item.innerHTML;
        this.data.tooltipUrl = item.getAttribute('href');
        this.savedLinkNode = item;
      }
      this.update('html', '[data-selector="lite-editor-tooltip"]');
    }
  }, {
    key: 'closeTooltip',
    value: function closeTooltip() {
      this.data.tooltipLabel = '';
      this.data.tooltipUrl = '';
      this.data.tooltipClassName = '';
      this.update('html', '[data-selector="lite-editor-tooltip"]');
    }
  }, {
    key: 'updateLink',
    value: function updateLink() {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var pos = util.getCaretPos(editor);
      var label = this.data.tooltipLabel;
      var url = this.data.tooltipUrl;
      var node = this.savedLinkNode;
      node.setAttribute('href', url);
      node.innerHTML = label;
      this.data.value = editor.innerHTML;
      editor.focus();
      util.setCaretPos(editor, pos);
      this.onPutCaret();
      this.closeTooltip();
    }
  }, {
    key: 'removeLink',
    value: function removeLink() {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var pos = util.getCaretPos(editor);
      var node = this.savedLinkNode;
      util.unwrapTag(node);
      editor.focus();
      util.setCaretPos(editor, pos);
      this.onPutCaret();
      this.closeTooltip();
    }
  }, {
    key: 'getSelectionNode',
    value: function getSelectionNode() {
      var node = document.getSelection().anchorNode;
      return node.nodeType === 3 ? node.parentNode : node;
    }
  }, {
    key: 'unwrapTag',
    value: function unwrapTag(tag, className) {
      var editor = this._getElementByQuery('[data-selector="lite-editor"]');
      var pos = util.getCaretPos(editor);
      var node = this.getSelectionNode();
      while (true) {
        var nodeClassName = node.getAttribute('class') || '';
        if (node.tagName.toLowerCase() === tag && nodeClassName === className) {
          if (tag === 'a') {
            this.updateTooltip(node);
          } else {
            util.unwrapTag(node);
          }
          break;
        }
        node = node.parentElement;
      }
      this.data.value = editor.innerHTML;
      editor.focus();
      util.setCaretPos(editor, pos);
      this.onPutCaret();
      this._fireEvent('unwrapTag');
    }
  }, {
    key: 'changeMode',
    value: function changeMode(mode) {
      this.data.mode = mode;
    }
  }, {
    key: 'toggleSource',
    value: function toggleSource() {
      var source = this.data.showSource;
      this.data.showSource = !source;
      this.update();
    }
  }, {
    key: 'insertExtend',
    value: function insertExtend(txt) {
      return txt.replace(/text_tag/g, 'text_extend_tag');
    }
  }, {
    key: 'format',
    value: function format(txt) {
      if (!txt) {
        return '';
      }
      var replaced = txt.replace(/<br>(\s*)/g, '\n').replace(/<br>/g, '\n').replace(/&nbsp;/g, ' ').replace(/( +)/g, function (a) {
        var length = a.length;
        var ret = '';
        for (var i = 0; i < length; i += 1) {
          if (i % 2 === 0) {
            ret += ' ';
          } else {
            ret += '&nbsp;';
          }
        }
        return ret;
      });
      if (replaced.slice(-1) === '\n') {
        replaced = replaced.slice(0, -1);
      }
      if (this.data.nl2br) {
        replaced = replaced.replace(/\n/g, '<br>\n');
      }
      if (this.data.decodeSource) {
        return entities.decode(replaced);
      }
      return replaced;
    }
  }, {
    key: 'toMarkdown',
    value: function toMarkdown() {
      var _this7 = this;

      this.data.mode = 'markdown';
      und.convert(this.data.value, function (err, markdown) {
        _this7.data.value = markdown;
        _this7.data.value = _this7.data.value.replace(/\n/g, '<br>');
        _this7.update();
      });
    }
  }, {
    key: 'toHtml',
    value: function toHtml() {
      this.data.mode = 'html';
      this.data.value = converter.makeHtml(this.data.value);
      this.data.value = this.data.value.replace(/^<p>|<\/p>$/g, '');
      this.update();
    }
  }, {
    key: 'changeOption',
    value: function changeOption() {
      var value = this.e.target.value;
      if (!value) {
        return;
      }
      var item = this.data.selectOptions.find(function (option) {
        return option.value === value;
      });
      if (item) {
        this.data.extendLabel = item.extendLabel;
        this.update('html', '[data-selector="lite-editor-toolbox"]');
        if (item.onSelect) {
          this.data.selectedOption = item.value;
          item.onSelect(this);
        }
      }
    }
  }]);

  return LiteEditor;
}(_aTemplate3.default);

exports.default = LiteEditor;
module.exports = exports['default'];