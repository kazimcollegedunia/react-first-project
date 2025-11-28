
import Card from "./component/userCard";

const users = [
  {
    name: "John Doe",
    rating: 4.8,
    performance: "Excellent",
    location: "Mumbai, India",
    status: "active",
    profile_image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
  },
  {
    name: "Sara Khan",
    rating: 4.2,
    performance: "Good",
    location: "Delhi, India",
    status: "inactive",
    profile_image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
  },
  {
    name: "Amit Verma",
    rating: 4.9,
    performance: "Outstanding",
    location: "Bangalore, India",
    status: "active",
    profile_image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
  },
  {
    name: "Priya Sharma",
    rating: 3.7,
    performance: "Average",
    location: "Hyderabad, India",
    status: "active",
    profile_image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
  }
];


function helleo() {

  return <>
    {users.map(function(user, index){
      return <Card key={index} data={user} />
    } )}
  </>
}

export default helleo;