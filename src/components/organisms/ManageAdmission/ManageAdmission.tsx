import styles from "./styles.module.css";
import { UserObject } from "../userObject";
import { User } from "types/types";
import { Button } from "components/atoms/Button";
import clsx from "clsx";

type Props = {
  users: User[];
  isLoading: boolean;
  setModalConfig: React.Dispatch<
    React.SetStateAction<{ title: string; text: string; isOpen: boolean }>
  >;
  status: { error: boolean; message: string };
};

type withStatusUser = User & { status: 0 | 1 | 2 };

export const ManageAdmission = ({
  users,
  isLoading,
  setModalConfig,
  status,
}: Props) => {
  // 0 => able to enter
  // 1 => already entered
  // 2 => no reserved
  const statusAssigner = (user: User): 0 | 1 | 2 => {
    const firstDate: 17 = 17;
    const secondDate: number = firstDate + 1;

    const dayXVisited =
      new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoVisited";
    const dayXSelected =
      new Date().getDate() === firstDate ? "dayOneSelected" : "dayTwoSelected";

    const hasEnteredToday: boolean = user[dayXVisited];
    const reservedToday: boolean = user[dayXSelected];

    if (hasEnteredToday) {
      return 1;
    }
    if (!reservedToday) {
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
        <p className={clsx(status.error && styles.error)}>{status.message}</p>
        {admittedMembers.length !== 0 && (
          <>
            <span>入場可能</span>
            {admittedMembers.map((user) => {
              return <UserObject user={user} key={user.uid} />;
            })}
            <Button
              className={styles.button}
              disabled={isLoading}
              onClick={() => {
                setModalConfig({
                  title: "入場確認",
                  text: `${admittedMembers
                    .map((user) => {
                      return user.name;
                    })
                    .join("様,")}様を入場させます。`,
                  isOpen: true,
                });
              }}
            >
              まとめて入場
            </Button>
          </>
        )}
      </div>
      <div className={styles.alreadyEntered}>
        {alreadyEnteredMembers.length !== 0 && (
          <>
            <span>入場処理済み</span>
            <span className={styles.error}>入場処理済みのアカウントです。</span>
            {alreadyEnteredMembers.map((user) => {
              return <UserObject user={user} key={user.uid} />;
            })}
          </>
        )}
      </div>
      <div className={styles.noReserved}>
        {noReservedMembers.length !== 0 && (
          <>
            <span>予約なし</span>
            <span className={styles.error}>本日の予約をされていません。</span>
            {noReservedMembers.map((user) => {
              return <UserObject user={user} key={user.uid} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
