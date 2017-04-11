$(document).ready(function() {
  $.ajax({
    url: "https://api.github.com/users/surazzarus",
    data: {
      client_id: 'ab19231bccb6be4b93dc',
      client_secret: 'dd53efdf341c7f65e723bb894a3f270dcaa50976'
    }
  }).done(function(user) {
    $.ajax({
      url: "https://api.github.com/users/surazzarus/repos",
      data: {
        client_id: 'ab19231bccb6be4b93dc',
        client_secret: 'dd53efdf341c7f65e723bb894a3f270dcaa50976',
        sort: 'created: asc'
      }
    }).done(function(repos) {
      $.each(repos, function(index, repo) {
        $('.repos').append(`
          <p>
              <a target="_blank" href="${repo.html_url}">${repo.name}</a>
          </p>
        `)
      })
    })
  })
})
