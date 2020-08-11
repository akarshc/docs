const $ = (id) => {
  return document.querySelector(id)
}


const config = {
  BASE_URL: "https://akarshc.github.io"
}

// HEAD SECTION

const getHead = () => {
  return (`
      <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="${config.BASE_URL}/assets/style.css" />
    `)
}

$('head').innerHTML += getHead()
