(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{249:function(e,a,t){},288:function(e,a,t){"use strict";var r=t(249);t.n(r).a},312:function(e,a,t){"use strict";t.r(a);t(56),t(241);var r={components:{Workspace:t(254).a},props:{examplePage:{type:String,required:!0},showInputOutput:{type:[Boolean],default:!1},hidePreparationScript:{type:[Boolean],default:!1}},computed:{error:function(){return null==this.examplePageData?new Error('Page "'.concat(this.normalizedPath,'" not found')):this.examplePageData.frontmatter.errorWhileParsingExample},exampleData:function(){return this.examplePageData&&this.examplePageData.frontmatter.parsedExample},examplePageData:function(){var e=this;return this.$site.pages.find(function(a){return a.regularPath===e.normalizedPath})},normalizedPath:function(){return this.$props.examplePage.replace(/\.(html|md)$/,"")+".html"}}},n=(t(288),t(39)),i=Object(n.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.exampleData?t("div",{staticClass:"handlebars-example"},[t("router-link",{staticClass:"example-show-in-playground",attrs:{to:e.normalizedPath}},[e._v("\n    Open in interactive playground!\n  ")]),e._v(" "),t("workspace",{attrs:{"parsed-example":e.exampleData,"show-input-output":e.showInputOutput,"hide-preparation-script":e.hidePreparationScript}})],1):t("div",{staticClass:"handlebars-example error"},[t("header",[e._v('Error while parsing example "'+e._s(e.normalizedPath)+'":')]),e._v(" "),t("section",[e._v(e._s(e.error.stack))])])},[],!1,null,null,null);a.default=i.exports}}]);