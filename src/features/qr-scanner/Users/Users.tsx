import styles from "./styles.module.css";
import { User, withStatusUser } from "@/types/types";
import { statusAssigner } from "@/lib/statusAssigner";
import { Button } from "@/features/ui/Button";
import { UserObject } from "@/features/qr-scanner/Users/userObject";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { addNotification } from "@/features/ui/Notification/notificationSlice";
import { openModal } from "@/features/ui/ModalWindow/modalWindowSlice";

type Props = {
  users: User[];
};

export const Users = ({ users }: Props) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
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
                dispatch(
                  openModal({
                    title: "入場確認",
                    description: `${admittedMembers
                      .map((user) => {
                        return user.name;
                      })
                      .join("様,")}様を入場させます。`,
                  })
                );
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
