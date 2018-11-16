<?php
    require 'connect.php';
    $servername = "localhost";
    $username = "root";
    $password = "";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=dbweb", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
        $sql="CREATE TABLE userinfo(
        name VARCHAR(30) NOT NULL,
        grpname VARCHAR(30) NOT NULL ,
        email NVARCHAR(30) NOT NULL,
        mobile int(11) NOT NULL,
        insti VARCHAR(30) NOT NULL,
        size int(8) NOT NULL,
        city VARCHAR(20) NOT NULL,
        url VARCHAR(1000) NOT NULL,
        member2 VARCHAR(30),
        mobile2 int(11),
        member3 VARCHAR(30),
        mobile3 int(11),
        member4 VARCHAR(30),
        mobile4 int(11),
        member5 VARCHAR(30),
        mobile5 int(11),
        member6 VARCHAR(30),
        mobile6 int(11),
        member7 VARCHAR(30),
        mobile7 int(11)      
        )";
        $conn->exec($sql);
        }
    catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }
?>
