(() => {
  const FONT_CACHE_KEY = 'TRANSMISSION_UI_ROBOTO_FONT';
  const createStyle = (stylesheet) => {
    const style = document.createElement('style');
    style.innerHTML = stylesheet;
    document.head.appendChild(style);
    return stylesheet;
  };
  const cached = localStorage.getItem(FONT_CACHE_KEY);

  if ( cached ) {
    createStyle(JSON.parse(cached));
  } else {
    const robotoFont = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
    Promise.all([
      fetch(robotoFont)
        .then((response) => {
          if ( response.status === 200 ) {
            return response.text();
          }
        })
        .then((style) => {
          localStorage.setItem(FONT_CACHE_KEY, JSON.stringify(style));
          return style;
        })
        .then(createStyle)
    ]);
  }
})();
