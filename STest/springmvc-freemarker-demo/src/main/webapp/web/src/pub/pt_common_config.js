if("undefined"==typeof I$)I$=function(){var e={},t=function(){return!1},n={};var r=function(t,n){return e.toString.call(t)==="[object "+n+"]"};return function(e,i){var a=n[e],o=r(i,"Function");if(null!=i&&!o)a=i;if(o){var s=[];for(var u=2,f=arguments.length;u<f;u++)s.push(arguments.callee(arguments[u]));var c={};s.push.call(s,c,{},t,[]);var l=i.apply(null,s)||c;if(!a||!r(l,"Object"))a=l;else if(Object.keys)for(var h=Object.keys(l),u=0,f=h.length,_;u<f;u++){_=h[u];a[_]=l[_]}else for(var _ in l)a[_]=l[_]}if(null==a)a={};n[e]=a;return a}}();