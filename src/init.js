(() => {
  const robotoFont = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
  Promise.all([
    fetch(robotoFont)
      .then((response) => {
        if ( response.status === 200 ) {
          return response.text();
        }
      })
      .then((stylesheet) => {
        const style = document.createElement('style');
        style.innerHTML = stylesheet;
        document.head.appendChild(style);
        return stylesheet;
      })
  ]);
})();
