

const UserInfo = ({ user }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h3>User Info</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserInfo;
