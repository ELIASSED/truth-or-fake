import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { GameNotificationProps } from '../../types';

export const GameNotification = ({ notification }: GameNotificationProps) => {
  if (!notification.show) return null;

  return (
    <Notification
      icon={notification.type === 'success' ? <IconCheck size={18} /> : <IconX size={18} />}
      color={notification.type === 'success' ? 'green' : 'red'}
      title={notification.type === 'success' ? 'Bonne réponse !' : 'Mauvaise réponse !'}
      style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}
    >
      {notification.message}
    </Notification>
  );
};