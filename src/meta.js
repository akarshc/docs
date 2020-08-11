const $ = (id) => {
  return document.querySelector(id)
}

// HEAD SECTION

const getHead = () => {
  return (`
      <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="file:///C:/work/test/assets/style.css" />
    `)
}

$('head').innerHTML += getHead()
