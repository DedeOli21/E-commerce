<template>
<q-page >

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Ecommerce</title>
    <link rel="stylesheet" href="bootstrap.min.css" />
    <link rel="stylesheet" href="Registration-Form-with-Photo.css" />
    <link rel="stylesheet" href="styles.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

</head>

<body>
    <div class="register-photo">
        <div class="form-container" style="width: 689px;">
            <form method="post" style="width: 486px;height: 440px;margin: 1px;padding: 77px;">
                <h2 class="text-center"><strong>Criar uma conta</strong></h2>
                <div class="form-group"><input type="email" class="form-control" name="email" placeholder="Email" /></div>
                <div class="form-group"><input type="password" class="form-control" name="password" placeholder="Password" /></div>
                <div class="form-group"><input type="password" class="form-control" name="password-repeat" placeholder="Password (repeat)" /></div>
                <div class="form-group">
                    <div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" />Eu aceito os termo de compromisso</label></div>
                </div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit" style="background-color: rgb(6,5,5);">Cadastrar</button></div><a class="already" href="#">Você ja possui conta ? Faça login aqui</a></form>
        </div>
    </div>
</body>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  }

}
</script>

<style>
.register-photo {
  background: #f1f7fc;
  padding: 80px 0;
}

body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}




</style>