(function(){
  function sendToGA({name, delta, id}){
    if(!window.gtag){return;}
    gtag('event', name, {
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_id: id,
      non_interaction: true
    });
  }
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/web-vitals@4/dist/web-vitals.iife.js';
  s.async = true;
  s.onload = function(){
    try{
      webVitals.onCLS(sendToGA);
      webVitals.onFID(sendToGA);
      webVitals.onLCP(sendToGA);
      webVitals.onINP(sendToGA);
      webVitals.onTTFB(sendToGA);
    }catch(e){}
  };
  document.head.appendChild(s);

  window.analyticsDonation = function(){
    if(window.gtag){ gtag('event', 'donation', {method:'kofi'}); }
  };
  window.analyticsLicense = function(){
    if(window.gtag){ gtag('event', 'license_purchase', {tier:'request'}); }
  };
  window.analyticsHardware = function(){
    if(window.gtag){ gtag('event', 'hardware_purchase', {sku:'SFET-DEV-KIT-V1'}); }
  };

  document.addEventListener('click', function(e){
    var a = e.target.closest('a');
    if(!a){return;}
    var sameHost = a.host === location.host;
    if(!sameHost && window.gtag){
      gtag('event', 'click', {
        event_category: 'outbound',
        event_label: a.href,
        transport_type: 'beacon'
      });
    }
  }, true);
})();