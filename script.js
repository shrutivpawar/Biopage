function updateBio() {
    let name = prompt("Enter your name:");
    while (!name) {
        alert("Name cannot be empty!");
        name = prompt("Enter your name:");
    }

    let profession = prompt("Enter your profession:");
     while (!profession) {
        alert("profession cannot be empty!");
        profession = prompt("Enter your profession:");
    }

    let bio = prompt("Write a short bio about yourself:");
     while (!bio) {
        alert("bio cannot be empty!");
        bio = prompt("Enter your bio:");
    }

    let profilePic = prompt("Enter the URL of your profile picture:");
     while (!profilePic) {
        alert("profilePic cannot be empty!");
        profilePic = prompt("Enter the URL of your profile picture:");
    }

    
    if (!profilePic) {
        profilePic = "default.jpg"; 
    }

    
    alert(`Your bio has been updated!\nName: ${name}\nProfession: ${profession}\nBio: ${bio}`);
    console.log("User Bio Information:", { name, profession, bio, profilePic });

    
    document.getElementById("name").textContent = name;
    document.getElementById("profession").textContent = profession;
    document.getElementById("bio").textContent = bio;
    document.getElementById("profile-pic").src = profilePic;
}


updateBio();