const User = () => {
  return (
    <div className="flex gap-3 bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300 items-center">
      <img
        src="https://cdn.create.vista.com/api/media/small/593003402/stock-photo-hispanic-man-beard-wearing-business-shirt-happy-face-smiling-crossed"
        alt="user image"
        className="w-14 h-14  rounded-full "
      />
      <div>
        <h3 className="font-semibold text-2xl">John Doe</h3>
        <p>Developer</p>
      </div>
    </div>
  );
};

export default User;
