import styles from "./styles.module.css";
import { User, withStatusUser } from "@/types/types";
import { statusAssigner } from "@/lib/statusAssigner";
import { Button } from "@/features/ui/Button";
import { FadeNotification } from "../FadeNotification";
import { UserObject } from "@/features/qr-scanner/Users/userObject";

type Props = {
  users: User[];
  isLoading: boolean;
  setModalConfig: React.Dispatch<
    React.SetStateAction<{ title: string; text: string; isModalOpen: boolean }>
  >;
  status: { error: boolean; message: string };
};

export const Users = ({ users, isLoading, setModalConfig, status }: Props) => {
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
        <FadeNotification message={status.message} />
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
                  isModalOpen: true,
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