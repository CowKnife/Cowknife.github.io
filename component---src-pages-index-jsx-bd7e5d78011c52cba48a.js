webpackJsonp([0xc23565d713b7],{41:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),u=n(s),i=a(3),c=n(i),f=a(18),d=n(f),p=a(69),m=n(p);a(48);var y=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t={title:e.node.frontmatter.title,slug:e.node.fields.slug,description:e.node.frontmatter.description,date:e.node.frontmatter.date,category:e.node.frontmatter.category,categorySlug:e.node.fields.categorySlug};return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,m.default)(t.date).format("MMMM D, YYYY")},(0,m.default)(t.date).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:t.categorySlug},u.default.createElement(d.default,{to:t.categorySlug,className:"post__meta-category-link"},t.category))),u.default.createElement("h2",{className:"post__title"},u.default.createElement(d.default,{className:"post__title-link",to:t.slug},t.title)),u.default.createElement("p",{className:"post__description"},t.description),u.default.createElement(d.default,{className:"post__readmore",to:t.slug},"Read"))},t}(u.default.Component);y.propTypes={data:c.default.object.isRequired},t.default=y,e.exports=t.default},48:function(e,t){},218:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),u=n(s),i=a(3),c=n(i),f=a(23),d=n(f),p=a(41),m=n(p),y=a(24),_=n(y),h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle,r=this.props.data.allMarkdownRemark.edges;return r.forEach(function(t){e.push(u.default.createElement(m.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",null,u.default.createElement(d.default,null,u.default.createElement("title",null,a),u.default.createElement("meta",{name:"description",content:n})),u.default.createElement(_.default,this.props),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},e)))},t}(u.default.Component);h.propTypes={data:c.default.shape({site:c.default.shape({siteMetadata:c.default.shape({title:c.default.string.isRequired,subtitle:c.default.string.isRequired})}),allMarkdownRemark:c.default.shape({edges:c.default.array.isRequired})})},t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-bd7e5d78011c52cba48a.js.map