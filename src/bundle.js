// BODY SECTION

const getMain = () => {
  return (`
    <div class="container">
      <div class="row">
        <div class="col header">
          <div>
            <h1>My blog</h1>
          </div>
          <div class="menu">
            <ul>
              <li><a href="${config.BASE_URL}/index.html">Home</a></li>
              <li><a href="${config.BASE_URL}/about.html">About</a></li>
              <entries />
            </ul>
          </div>
        </div>
        <div class="col main">
          <article></article>
        </div>
      </div>
      <div class="row">
        <div class="col foot">
          <footer></footer>
        </div>
      </div>
    </div>
    `)
}

const article = (id, exp) => {
  if(exp == 'page')
    return (`
      <page id=${id}></page>
    `)
  else
    return(`
      <entry id=${id}></entry>
      `)
}

const data = (id, exp) => {
  $('article').innerHTML = article(id, exp)
  if($('entry'))
    $('entry').innerHTML = getData('post')
  if($('entries'))
    $('entries').innerHTML = entries()
  if($('page'))
    $('page').innerHTML = getData('page')
}

const entries = () => {
  let ent = []
  post.map(val => {
    let add = `<li><a href="${config.BASE_URL}/blog/${val.permalink}.html">${val.title}</a></li>`
    ent.push(add)
  })
  return (`
    <ul>${ent.join("")}</ul>
    `)
}

function getData(el) {
  let id = el === 'post' ? $('entry').id : $('page').id
  let art = []
  let content = ""
  if(el === 'post')
    post.map(val => {
      if(id == val.id)
        art.push(val)
    })
  else
    pages.map(val => {
      if(id == val.id)
        art.push(val)
    })

  if(art.length > 0 && el === 'post')
    content = (`
    <h2>${art[0].title}</h2>
    <content>${art[0].content}</content>
    `)
  else if(art.length > 0)
    content = (`
    <h2>${art[0].title}</h2>
    <content>${art[0].content}</content>
    `)
  else
    content = "Not found"
  $('head').innerHTML += `<title>${art[0].title}</title>`
  return content
}

if($('body'))
  $('body').innerHTML += getMain()


// FOOTER SECTION

const getFoot = () => {
  return (`
        <p>Just another blog site</p>
    `)
}

if($('footer'))
  $('footer').innerHTML += getFoot()
