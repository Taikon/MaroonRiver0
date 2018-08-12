<template>
  <div id='landing-page'>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light shadow" style="background-color: #d7ccc8;">
        <a id="" class="navbar-brand">Honeymask</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a id="navText" class="nav-item nav-link align-self-right" href="#">Features</a>
            <a id="navText" class="nav-item nav-link" href="#">About</a>
            <a id="navText" class="nav-item nav-link" href="#">Find Us</a>
          </div>
        </div>
      </nav>

      <div class="fullPage attachBackground">
        <div class="overlay d-flex justify-content-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="py-5"></div>
                <p class="pt-5">
                  Harvested from the praries of northern Alberta. <br/>
                  Lorem ipsum dolor sit amet, consectetur, <br/>
                  sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div class="row pt-2 pb-5 mb-5">
              <div class="col-md-1">
                <button class="btn btn-warning shadow snipcart-add-item"
                data-item-id="1"
                data-item-name="Honeymask"
                data-item-price="15.00"
                data-item-weight="350"
                data-item-url="/"
                data-item-description="Fresh honey face mask">
                Buy Now
                </button>
              </div>
              <div class="col-md-2">
              </div>
              <div class="col-md-8 py-5 mb-5">
              </div>
            </div>
            <div class="row pb-5">
              <a class="scroll-down shadow" address="true"></a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main></main>
    <footer></footer>
  </div>
</template>

<script>
  export default{
    name:'landing-page',
    data(){
      return{
      }
    }
  }

</script>

<style scoped>
    html,
    body,
    header,
    .fullPage{
      height:100%;
    }

    p{
      font-size:20px;
    }

  /*Navbar -> */
  #navText{ 
    text-decoration:none;
    color:#212529
  }
    #navText:hover{
      text-decoration:none;
      color:#212529;
    }
  /* <- Navbar*/

  /* Hero Image */
  .fullPage{
      background: url("../assets/honey_beige.jpg") no-repeat center center fixed;
      background-size:cover;
      -webkit-background-size:cover;
      -moz-background-size:cover;
    }
    .attachBackground{
      background-attachment:fixed;      
    }
</style>

<style>/*Global */
  
  /*Shadow*/
  .shadow{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9); 
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
    }

  /*Scroll */
  .scroll-down {
    opacity: 1;
    -webkit-transition: all .5s ease-in 3s;
    transition: all .5s ease-in 3s;
  }

  .scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -16px;
    display: block;
    width: 32px;
    height: 32px;
    border: 2px solid #4e342e;
    background-size: 14px auto;
    border-radius: 50%;
    z-index: 2;
    -webkit-animation: bounce 2.2s infinite 2.2s;
    animation: bounce 2.2s infinite 2.2s;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    transform: scale(1)
  }

  .scroll-down:before {
      position: absolute;
      top: calc(50% - 8px);
      left: calc(50% - 6px);
      transform: rotate(-45deg);
      display: block;
      width: 12px;
      height: 12px;
      content: "";
      border: 2px solid #4e342e;
      border-width: 0px 0 2px 2px;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    60% {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
    }
  }
</style>

