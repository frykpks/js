function go_get_url(e){var n=document.createElement("a");return n.href=e,n}function go_get_host_name(e){return void 0===e||null===e||""===e||e.match(/^\#/)?"":-1===(e=go_get_url(e)).href.search(/^http[s]?:\/\//)?"":e.href.split("/")[2].split(":")[0].toLowerCase()}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof go_url&&"undefined"!=typeof api){var n=document.getElementsByTagName("a");if("undefined"==typeof shorten_includ)if("undefined"==typeof shorten_exclude);else for(o=0;o<n.length;o++){(t=go_get_host_name(n[o].getAttribute("href"))).length>0&&-1===shorten_exclude.indexOf(t)?n[o].href=go_url+"full/?api="+encodeURIComponent(api)+"&url="+encodeURIComponent(n[o].href)+"&type="+encodeURIComponent(2):"magnet:"===n[o].protocol&&(n[o].href=go_url+"full/?api="+encodeURIComponent(api)+"&url="+encodeURIComponent(n[o].href)+"&type="+encodeURIComponent(2))}else for(var o=0;o<n.length;o++){var t;(t=go_get_host_name(n[o].getAttribute("href"))).length>0&&shorten_includ.indexOf(t)>-1?n[o].href=go_url+"full/?api="+encodeURIComponent(api)+"&url="+encodeURIComponent(n[o].href)+"&type="+encodeURIComponent(2):"magnet:"===n[o].protocol&&(n[o].href=go_url+"full/?api="+encodeURIComponent(api)+"&url="+encodeURIComponent(n[o].href)+"&type="+encodeURIComponent(2))}}});
