import { LocalNotifications } from '@capacitor/local-notifications';

export const notifiate = async (title: string, body: string, largeBody: string) => {
    try {
        // Options de la notification
        (async () => {
            const notificationOptions = {
                notifications: [
                    {
                        title: title,
                        body: body,
                        largeBody: largeBody,
                        id: Math.floor(Math.random() * 1000) + 1,
                    },
                ],
            };

            // Planifier la notification
            const scheduleResult = await LocalNotifications.schedule(notificationOptions);

            // Vérifier le résultat de la planification
            if (scheduleResult.notifications) {
                console.log('Notification planifiée avec succès:', scheduleResult.notifications);
            } else {
                console.error('Erreur lors de la planification de la notification.');
            }
        })()
    } catch (error) {
        console.error('Erreur lors de la planification de la notification:', error);
    }
}