import UserHeader from "components/molecules/userHeader";
import styles from "styles/components.module.css";

const UserObject: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.userObject}>
      <UserHeader name={name} />
    </div>
  );
};

export default UserObject;
