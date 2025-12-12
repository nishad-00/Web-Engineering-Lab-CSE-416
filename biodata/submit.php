<?php
// 1. Database Configuration
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = "";     // Default XAMPP password is empty
$dbname = "biodata_db";

// 2. Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// 3. Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 4. Process Form Data
if (isset($_POST['submit'])) {
    // Sanitize and assign variables
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];

    // 5. Prepare SQL Statement (Prevents SQL Injection)
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, dob, gender, address) VALUES (?, ?, ?, ?, ?)");
    
    // "sssss" means 5 string parameters
    $stmt->bind_param("sssss", $full_name, $email, $dob, $gender, $address);

    // 6. Execute and Feedback
    if ($stmt->execute()) {
        echo "<h3 style='color:green; text-align:center;'>New record created successfully!</h3>";
        echo "<p style='text-align:center;'><a href='index.html'>Go Back</a></p>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>