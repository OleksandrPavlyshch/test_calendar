module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: true,
	template: {
    head: {
      scripts: [
        {
          src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
        },
        {
          src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
        }
      ],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href:
            'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
        }
      ]
    }
  }
}
