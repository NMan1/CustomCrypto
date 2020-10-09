<?php
require_once 'config.php';


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $emailToSend = $_REQUEST['email'];
    $usdCost = $_REQUEST['usd'];
    $btcCost = $_REQUEST['btc'];
    $addressToGen = $_REQUEST['address'];
    $caseSensitive = $_REQUEST['case'];

    $sql = "INSERT INTO orders (email, usd, btc, address, casesensitive) VALUES ('$emailToSend', '$usdCost', '$btcCost', '$addressToGen', '$caseSensitive')";

    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}


?>
