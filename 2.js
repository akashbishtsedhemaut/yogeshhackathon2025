

  // Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const selectedRole = document.getElementById('role').value;
  
    // Sign in with email and password
    // auth.signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
  
    //     // Fetch user role from Firestore
    //     db.collection('users').doc(user.uid).get()
    //       .then((doc) => {
    //         if (doc.exists) {
    //           const userRole = doc.data().role;
  
    //           // Check if the selected role matches the user's role
    //           if (selectedRole === userRole) {
    //             // Redirect based on role
    //             switch (userRole) {
    //               case 'customer':
    //                 window.location.href = 'user.html';
    //                 break;
    //               case 'kitchen_staff':
    //                 window.location.href = 'kitchen.html';
    //                 break;
    //               case 'admin':
    //                 window.location.href = 'admin-dashboard.html';
    //                 break;
    //               default:
    //                 showError('Invalid role.');
    //             }
    //           } else {
    //             showError('Selected role does not match your account role.');
    //           }
    //         } else {
    //           showError('User role not found.');
    //         }
    //       })
    //       .catch((error) => {
    //         showError('Error fetching user data: ' + error.message);
    //       });
    //   })
    //   .catch((error) => {
    //     showError('Login failed: ' + error.message);
    //   });
    window.location.href="user.html"
  });

  
  // Display error message
  function showError(message) {
    document.getElementById('error-message').textContent = message;
  }
  async function addUser(email, role) {
    await db.collection('users').add({
      email: email,
      role: role
    });
  }
  async function getMenu() {
    const querySnapshot = await db.collection('menu').get();
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  async function updateOrderStatus(orderId, status) {
    await db.collection('orders').doc(orderId).update({
      status: status
    });
  }
  async function deleteUser(userId) {
    await db.collection('users').doc(userId).delete();
  }