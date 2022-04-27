export default function ProfileIcon({ user, color }) {
  return (
    <div
      className={`${color} rounded-full h-8 w-8 text-center font-medium pt-1 text-dark`}
    >
      {user[0]}
    </div>
  );
}
