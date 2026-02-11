<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJ/vanilla login</title>

  <link href="../styles/bear-style.css" rel="stylesheet">
</head>

<body>

  <!-- this is my vanilla html form -->
  <div class="login-container">
    <h2>Plain Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="put ur name" value="barry" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit" class="btn-login">Login</button>
      <div id="message" class="message"></div>
    </form>
  </div>


  <script src="../scripts/login-script.js">


  </script>

</body>

</html>
