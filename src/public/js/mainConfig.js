function getDataFromMockAPI() {
  $("#read-more").on("click", () => {
    $(".lds-read-more").css("display", "inline-block");
    $("#read-more").css("display", "none");

    setTimeout(() => {
      $.get("http://192.168.1.18:3000/post/2", cards => {

        let numberOfCardCurrent = $(".card-api").length;
        let numberOfCardNeedTaken = numberOfCardCurrent + 4

        if (numberOfCardCurrent == cards.length) {
          $(".lds-read-more").css("display", "none");
          $("#read-more").css("display", "inline-block");
          alertify.notify("Đã hết dữ liệu", "success", 6);
          return;
        }
        cards.slice(numberOfCardCurrent, numberOfCardNeedTaken).forEach(card => {
          $(".lds-read-more").css("display", "none");
          $("#read-more").css("display", "inline-block");
          let cardTempale = `
            <div class="col-md-3">
              <div class="card card-api shadow-lg m-2">
                <img src="${card.image}" class="card-img-top img-thumbnail " alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="/download/image" class="btn btn-info">Download</a>
                </div>
              </div>
            </div>
          `;
          $(".my-cards").append(cardTempale);
        });

      })
    }, 500)
  });
}

$(document).ready(() => {
  getDataFromMockAPI();
});