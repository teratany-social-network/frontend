import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.teratany.org',
  appName: 'Teratany',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF"
    }
  },
  android: {
    iconPath: 'src/assets/icon/android/ic_launcher.png', // Update to the path of your new icon file
  },
};

export default config;
