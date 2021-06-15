<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Luke Page</title>

    <link rel="stylesheet" href="gameCSS.css">
</head>
<body>
<header>
    <h1>Admin</h1>
</header>

<main>
    <div class="page" id="home">
        <div id="leaderBoard">
            <table>
                <tr>
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
            </table>
        </div>
    </div>

    <?php
    $ttName = strip_tags(isset($_POST["ttName"]) ? $_POST["ttName"] : "");
    $ttPostcode = strip_tags(isset($_POST["ttPostcode"]) ? $_POST["ttPostcode"] : "");
    $ttAddress = strip_tags(isset($_POST["ttAddress"]) ? $_POST["ttAddress"] : "");
    $ttPhone = strip_tags(isset($_POST["ttPhone"]) ? $_POST["ttPhone"] : "");
    $ttDate = strip_tags(isset($_POST["ttDate"]) ? $_POST["ttDate"] : "");
    $ttTime = strip_tags(isset($_POST["time"]) ? $_POST["time"] : "");

    $foo = false;
    $errorMsg = "";

    if (($ttName==="") || ($ttPostcode==="") || ($ttAddress==="") || ($ttPhone==="") || ($ttDate==="") || ($ttTime==="") ){
        $foo = true;
        $errorMsg = "Fill in all fields.";
    }elseif ((!is_numeric($ttPhone))) {
        $foo = true;
        $errorMsg = "Phone number must be number.";
    }
    ?>
</main>
</body>
</html>