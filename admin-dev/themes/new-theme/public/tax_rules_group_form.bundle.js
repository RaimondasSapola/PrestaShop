window.tax_rules_group_form=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=348)}({10:function(e,t){!function(){e.exports=window.jQuery}()},12:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=window.$,i=function(){function e(){a(this,e)}return r(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-submit-row-action",function(e){e.preventDefault();var t=o(e.currentTarget),n=t.data("confirm-message");if(!n.length||confirm(n)){var a=t.data("method"),r=["GET","POST"].includes(a),i=o("<form>",{action:t.data("url"),method:r?a:"POST"}).appendTo("body");r||i.append(o("<input>",{type:"_hidden",name:"_method",value:a})),i.submit()}})}}]),e}();t.default=i},18:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=window.$,i=function(){function e(t){var n=this;return a(this,e),this.$container=o(t),this.$container.on("click",".js-input-wrapper",function(e){var t=o(e.currentTarget);n._toggleChildTree(t)}),this.$container.on("click",".js-toggle-choice-tree-action",function(e){var t=o(e.currentTarget);n._toggleTree(t)}),{enableAutoCheckChildren:function(){return n.enableAutoCheckChildren()},enableAllInputs:function(){return n.enableAllInputs()},disableAllInputs:function(){return n.disableAllInputs()}}}return r(e,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',function(e){var t=o(e.currentTarget);t.closest("li").find('ul input[type="checkbox"]').prop("checked",t.is(":checked"))})}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"_toggleChildTree",value:function(e){var t=e.closest("li");if(t.hasClass("expanded"))return void t.removeClass("expanded").addClass("collapsed");t.hasClass("collapsed")&&t.removeClass("collapsed").addClass("expanded")}},{key:"_toggleTree",value:function(e){var t=e.closest(".js-choice-tree-container"),n=e.data("action"),a={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};t.find("li").each(function(e,t){var r=o(t);r.hasClass(a.removeClass[n])&&r.removeClass(a.removeClass[n]).addClass(a.addClass[n])}),e.data("action",a.nextAction[n]),e.find(".material-icons").text(e.data(a.icon[n])),e.find(".js-toggle-text").text(e.data(a.text[n]))}}]),e}();t.default=i},2:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=window.$,i=function(){function e(t){a(this,e),this.id=t,this.$container=o("#"+this.id+"_grid")}return r(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=i},267:function(e,t,n){"use strict";(function(e){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(349),i=function(e){return e&&e.__esModule?e:{default:e}}(o),l=function(){function t(){return a(this,t),this.taxRulesFormAction=e(i.default.taxRuleForm).attr("action"),this._initEvents(),{}}return r(t,[{key:"_initEvents",value:function(){var t=this;this._initTaxRuleForm(),e(i.default.countrySelect).on("change",function(){return t._handleCountryChange()}),e(i.default.editTaxRuleLink).on("click",function(e){return t._handleEditTaxRuleClick(e)}),e(i.default.addTaxRuleBtn).on("click",function(e){return t._handleAddTaxRuleClick(e)})}},{key:"_initTaxRuleForm",value:function(){if(this.taxRulesFormAction.trim())return void this._showTaxRulesForm(this.taxRulesFormAction,!1,!1);e(i.default.taxRulesGrid).find(".grid-table-empty").length&&this._showTaxRulesForm(e(i.default.addLink).attr("href"))}},{key:"_handleCountryChange",value:function(){var t=this,n=e(i.default.countrySelect),a=n.data("states-url"),r=n.val();r>0?e.ajax({url:a,method:"GET",dataType:"json",data:{id_country:r}}).then(function(e){t._resolveStateSelectVisibility(e.states)}).catch(function(e){void 0!==e.responseJSON&&showErrorMessage(e.responseJSON.message)}):e(i.default.stateFormRow).is(":visible")&&this._resolveStateSelectVisibility([])}},{key:"_handleEditTaxRuleClick",value:function(t){t.preventDefault();var n=e(t.target).closest("a").attr("href");if(n===this.taxRulesFormAction)return void this._hideTaxRulesForm();this._showTaxRulesForm(n,!0)}},{key:"_handleAddTaxRuleClick",value:function(t){t.preventDefault();var n=e(i.default.addLink).attr("href");if(n===this.taxRulesFormAction)return void this._hideTaxRulesForm();this._showTaxRulesForm(n)}},{key:"_hideTaxRulesForm",value:function(){var t=e(i.default.taxRuleForm);t.is(":visible")&&t.fadeOut(),t.attr("action",""),this.taxRulesFormAction=""}},{key:"_showTaxRulesForm",value:function(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e(i.default.taxRuleForm),l=e(i.default.taxRulesHiddenContent);if(l.hide(),this._enableSpinner(),o.hasClass("hidden-element")&&o.removeClass("hidden-element"),o.fadeIn(),this.taxRulesFormAction=t,o.attr("action",t),a)return void e.ajax({url:t,method:"GET",dataType:"json"}).then(function(e){n._setTaxRuleInformation(e),n._disableSpinner(),l.show()}).catch(function(e){void 0!==e.responseJSON&&(showErrorMessage(e.responseJSON.message),n._disableSpinner(),n._hideTaxRulesForm())});r&&this._setTaxRuleInformation(null),this._disableSpinner()}},{key:"_resolveStateSelectVisibility",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,a=e(i.default.stateFormSelect),r=e(i.default.stateFormRow);if(0===t.length)return r.fadeOut(n),void a.attr("disabled","disabled");a.empty(),a.append(e("<option></option>").attr("value",0).text(a.data("all-translation"))),e.each(t,function(t,n){a.append(e("<option></option>").attr("value",n).text(t))}),r.hasClass("hidden-element")&&r.removeClass("hidden-element"),a.removeAttr("disabled"),r.fadeIn(n)}},{key:"_removeTaxRuleFormErrors",value:function(){e(i.default.taxRuleForm).find(i.default.taxRuleFormErrorAlert).length&&e(i.default.taxRuleForm).find(i.default.taxRuleFormErrorAlert).remove(),e(i.default.taxRuleInvalidFeedbackContainer).remove(),e(i.default.taxRuleErrorPopoverContent).remove(),e.each(i.default.taxRuleFormPopoverErrorContainers,function(t,n){e(n).remove()})}},{key:"_setTaxRuleInformation",value:function(t){var n=e(i.default.countrySelect),a=null,r=[],o=0,l=0,u=0,c=0,s=0,d="";this._removeTaxRuleFormErrors(),null!==t&&(a=t[0],r=t[1],c=a.behavior_id.value,o=a.country_id.value,u=a.zip_code,l=null===a.state_id?0:a.state_id.value,s=null===a.tax_id?0:a.tax_id.value,d=null===a.description?0:a.description),n.val(o),this._resolveStateSelectVisibility(r,0),e(i.default.stateFormSelect).val(l),e(i.default.zipCodeInput).val(u),e(i.default.behaviorSelect).val(c),e(i.default.taxSelect).val(s),e(i.default.descriptionInput).val(d)}},{key:"_enableSpinner",value:function(){if(!e("#spinner-block").length){var t=e(i.default.taxRuleForm);e(i.default.taxRulesHiddenContent).hide(),t.find(".card").append(this._getSpinnerBlock())}}},{key:"_disableSpinner",value:function(){e("#spinner-block").length&&(e("#spinner-block").remove(),e(i.default.taxRulesHiddenContent).fadeIn())}},{key:"_getSpinnerBlock",value:function(){return'<div id="spinner-block" class="card-block row justify-content-center align-self-center">\n        <span class="spinner"></span>\n    </div>'}}]),t}();t.default=l}).call(t,n(10))},348:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(18),o=a(r),i=n(267),l=a(i),u=n(2),c=a(u),s=n(4),d=a(s),f=n(12),p=a(f),h=n(8),v=a(h);(0,window.$)(function(){var e=new c.default("tax_rule_grid");new o.default("#tax_rules_group_shop_association").enableAutoCheckChildren(),e.addExtension(new d.default),e.addExtension(new v.default),e.addExtension(new p.default),new l.default})},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
t.default={countrySelect:"#tax_rule_country",stateFormRow:".js-state-form-row",stateFormSelect:"#tax_rule_state",editTaxRuleLink:"a.js-link-row-action",addTaxRuleBtn:"#page-header-desc-configuration-add",submitTaxRuleBtn:"#tax-rule-submit-btn",taxRuleForm:"#tax-rule-form",zipCodeInput:"#tax_rule_zipCode",behaviorSelect:"#tax_rule_behavior",taxSelect:"#tax_rule_tax",descriptionInput:"#tax_rule_description",spinnerContainer:"#spinner-container",addLink:"#page-header-desc-configuration-add",taxRulesHiddenContent:".js-hidden-content",taxRuleErrorPopoverContent:".js-popover-error-content",taxRuleInvalidFeedbackContainer:".invalid-feedback-container",taxRuleFormPopoverErrorContainers:[".popover-error-container-tax_rule_description",".popover-error-container-tax_rule_tax",".popover-error-container-tax_rule_behavior",".popover-error-container-tax_rule_state",".popover-error-container-tax_rule_country"],taxRuleFormErrorAlert:".alert.alert-danger",taxRulesGrid:'form[name="tax_rule_grid"]'}},4:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=window.$,i=function(){function e(){a(this,e)}return r(e,[{key:"extend",value:function(e){this._handleBulkActionCheckboxSelect(e),this._handleBulkActionSelectAllCheckbox(e)}},{key:"_handleBulkActionSelectAllCheckbox",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-select-all",function(n){var a=o(n.currentTarget),r=a.is(":checked");r?t._enableBulkActionsBtn(e):t._disableBulkActionsBtn(e),e.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)})}},{key:"_handleBulkActionCheckboxSelect",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-checkbox",function(){e.getContainer().find(".js-bulk-action-checkbox:checked").length>0?t._enableBulkActionsBtn(e):t._disableBulkActionsBtn(e)})}},{key:"_enableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"_disableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),e}();t.default=i},8:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=window.$,i=function(){function e(){var t=this;return a(this,e),{extend:function(e){return t.extend(e)}}}return r(e,[{key:"extend",value:function(e){var t=this;e.getContainer().on("click",".js-bulk-action-submit-btn",function(n){t.submit(n,e)})}},{key:"submit",value:function(e,t){var n=o(e.currentTarget),a=n.data("confirm-message");if(!(void 0!==a&&0<a.length)||confirm(a)){var r=o("#"+t.getId()+"_filter_form");r.attr("action",n.data("form-url")),r.attr("method",n.data("form-method")),r.submit()}}}]),e}();t.default=i}});