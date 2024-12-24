<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شمارنده بازدیدکننده</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>

<h1>خوش آمدید به وب‌سایت ما!</h1>

<?php
// اطلاعات اتصال به پایگاه داده
$servername = "localhost"; // یا آدرس سرور پایگاه داده
$username = "your_username"; // نام کاربری پایگاه داده
$password = "your_password"; // رمز عبور پایگاه داده
$dbname = "my_database"; // نام پایگاه داده

// اتصال به پایگاه داده
$conn = new mysqli($servername, $username, $password, $dbname);

// بررسی اتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// تاریخ امروز
$today = date('Y-m-d');

// بررسی وجود رکورد برای امروز
$sql = "SELECT * FROM page_views WHERE visit_date = '$today'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // اگر رکورد وجود دارد، تعداد بازدید را افزایش دهید
    $row = $result->fetch_assoc();
    $new_count = $row['count'] + 1;
    $sql = "UPDATE page_views SET count = $new_count WHERE visit_date = '$today'";
} else {
    // اگر رکورد وجود ندارد، یک رکورد جدید ایجاد کنید
    $new_count = 1;
    $sql = "INSERT INTO page_views (visit_date, count) VALUES ('$today', 1)";
}

// اجرای کوئری
if ($conn->query($sql) === TRUE) {
    echo "<h2>تعداد بازدیدهای امروز: " . $new_count . "</h2>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// بستن اتصال
$conn->close();
?>

</body>
</html>
