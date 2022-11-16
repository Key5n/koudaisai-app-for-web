import styles from "./styles.module.css";
import { UserObject } from "../userObject";
import { User } from "types/types";
import { Button } from "components/atoms/Button";
import { useEntry } from "components/hooks/useEntry";

type Props = {
  users: User[];
};

type withStatusUser = User & { status: 0 | 1 | 2 };

export const ManageAdmission = ({ users }: Props) => {
  const { isLoading, handleButtonClick, error } = useEntry();
  // 0 => able to enter
  // 1 => already entered
  // 2 => no reserved
  const statusAssigner = (user: User): 0 | 1 | 2 => {
    const firstDate: 16 = 16;
    const secondDate: number = firstDate + 1;

    const dayXVisited =
      new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoVisited";
    const dayXSelected =
      new Date().getDate() === firstDate ? "dayOneSelected" : "dayTwoSelected";

    const hasEnteredToday: boolean = user[dayXVisited];

    if (hasEnteredToday) {
      console.log("already entry error");
      return 1;
    }
    if (!dayXSelected) {
      console.log("no reserve error");
      return 2;
    }
    return 0;
  };

  const withStatusUsers: withStatusUser[] = users.map((user) => {
    return { ...user, status: statusAssigner(user) };
  });
  const admittedMembers = withStatusUsers.filter((user) => {
    return user.status === 0;
  });
  const alreadyEnteredMembers = withStatusUsers.filter((user) => {
    return user.status === 1;
  });
  const noReservedMembers = withStatusUsers.filter((user) => {
    return user.status === 2;
  });
  return (
    <div className={styles.module}>
      <div className={styles.admitted}>
        <span>入場可能</span>
        {admittedMembers.map((user) => {
          return <UserObject user={user} key={user.uid} />;
        })}
        <Button
          className={styles.button}
          disabled={isLoading}
          onClick={handleButtonClick}
        >
          まとめて入場
        </Button>
        <p className={styles.error}>{error}</p>
      </div>
      <div className={styles.alreadyEntered}>
        <span>入場処理済み</span>
        {alreadyEnteredMembers.length !== 0 ? (
          <>
            <span className={styles.error}>入場処理済みのアカウントです。</span>
            {alreadyEnteredMembers.map((user) => {
              return <UserObject user={user} key={user.uid} />;
            })}
          </>
        ) : (
          <p>なし</p>
        )}
      </div>
      <div className={styles.noReserved}>
        <span>予約なし</span>
        {noReservedMembers.length !== 0 ? (
          <>
            <span className={styles.error}>本日の予約をされていません。</span>
            {noReservedMembers.map((user) => {
              return <UserObject user={user} key={user.uid} />;
            })}
          </>
        ) : (
          <p>なし</p>
        )}
      </div>
    </div>
  );
};
