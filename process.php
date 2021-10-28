<?php
$host = "localhost";
$db_name = "tada";
$username = "root";
$password = "";

$conn = null;
try {
  $conn = new PDO(
    "mysql:host=" . $host . ";dbname=" . $db_name,
    $username,
    $password
  );
} catch (PDOException $exception) {
  echo "Connection error: " . $exception->getMessage();
}

if (isset($_POST["newsletter"])) {
  $n_email = $_POST["newsletter"];
  if (empty($n_email)) {
    echo "Please enter an email address.";
  } elseif (!filter_var($n_email, FILTER_VALIDATE_EMAIL)) {
    echo $n_email . " is an invalid email format.";
  } else {
    $sql = "SELECT * FROM newsletter WHERE email = ? LIMIT 0,1";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $n_email);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!empty($result["email"])) {
      echo "Email already subscribed to our newsletter.";
    } else {
      $query = "INSERT INTO newsletter SET email = :email";

      $stmt = $conn->prepare($query);
      $n_email = htmlspecialchars(strip_tags($n_email));

      $stmt->bindParam(":email", $n_email);

      if ($stmt->execute()) {
        echo "Thank you for subscribing to our newsletter. We promise never to spam your mail box.";

        $to = "";
        $subject = "TadaInc Newsletter Subscription.";

        $message = "<h1>Hello Dave,</h1>";
        $message .=
          "<p>" .
          $n_email .
          " just subscribed to your newsletter on justtada.com</p>";

        $header = "From: " . $n_email . " \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";

        mail($to, $subject, $message, $header);
      } else {
        echo "Unable to Subscribe you to our newsletter. Please try again.";
      }
    }
  }
}

if (isset($_POST["contact"])) {
  $fullname = $_POST["fullname"];
  $email = $_POST["email"];
  $company = $_POST["company"];
  $telephone = $_POST["telephone"];
  $message = $_POST["message"];

  if (
    empty($fullname) ||
    empty($email) ||
    empty($telephone) ||
    empty($message)
  ) {
    echo "The following fields are compulsory; Fullname, Email, Telephone and Message.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo $email . " is an invalid email format.";
  } else {
    $query =
      "INSERT INTO contact SET fullname = :fullname, email = :email, company = :company, telephone = :telephone, message = :message";

    $stmt = $conn->prepare($query);
    $fullname = ucwords(htmlspecialchars(strip_tags($fullname)));
    $email = htmlspecialchars(strip_tags($email));
    $company = ucwords(htmlspecialchars(strip_tags($company)));
    $telephone = htmlspecialchars(strip_tags($telephone));
    $message = htmlspecialchars(strip_tags($message));

    $stmt->bindParam(":fullname", $fullname);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":company", $company);
    $stmt->bindParam(":telephone", $telephone);
    $stmt->bindParam(":message", $message);

    if ($stmt->execute()) {
      echo "Your consultation request has been successfully logged. A representative will be in touch with you shortly.";

      $to = "";
      $subject = "TadaInc Free Consultation Request.";

      $messages = "<h1>Hello Dave,</h1>";
      $messages .=
        "<p>" .
        $fullname .
        " just requested for a free consultation on justtada.com</p>";
      $messages .=
        "<table>
      <thead>
        <th>Fullname</th>
        <th>Email</th>
        <th>Company</th>
        <th>Telephone</th>
        <th>Message</th>
      </thead>
      <tbody>
        <tr>
          <td>" .
        $fullname .
        "</td>
          <td>" .
        $email .
        "</td>
          <td>" .
        $company .
        "</td>
          <td>" .
        $telephone .
        "</td>
          <td>" .
        $message .
        "</td>
        </tr>
      </tbody>
    </table>";

      $header = "From: " . $email . " \r\n";
      $header .= "MIME-Version: 1.0\r\n";
      $header .= "Content-type: text/html\r\n";

      mail($to, $subject, $messages, $header);
    } else {
      echo "Unable to submit your request. Please try again.";
    }
  }
}

?>
