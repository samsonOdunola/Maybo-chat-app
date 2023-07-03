import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  type: "service_account",
  project_id: "maybo-chat-app",
  private_key_id: "12d26548d84f0e6e6eb11092c5acf5a5c37e22d1",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYcv+8g7nJeNyA\nw+hpZg70z5aSc/qKhI0w4h5niUfK0rG58riKof+uJ7XT+uWccxneC+RdKS8vTrsD\nL0C6R22HRa75vGYMR6md4bGO2M8wVwMyyEjc2uSav4ueqB0zUEtppmh8VPtSlfGo\nbqawflSr/AupqwjoyO8CiVxoAGlXgZPq35XlFV6WU/V9KnBXisIe08XWUJ4Idqo4\nYsJ0844K8FsijwFa24JHO2lK9WSZBGUWnwDlTorNiIPVy82SezsPfwuj2HySQBLb\n0s11kxSWM2p6U9yyYQ4vCO3iNyYLxOgG/fsQSY1hwKs/X/EPnCbVs9YkTbhWemYa\nv6GtB3tRAgMBAAECggEAAMjUtpJh9h60WchITaSMDqfz0SieITDZ7ia3u9Ypw6ou\nZnPQjcwUHgAP0DmyDUpNV4ZtpCoWV1K7JSLM3TiJYIEUC65zwvvqbEjRSlgkxs2n\n007TCynoM8CpFgWs8srmvHIyBvPEAFKLtg9ttapMwr7PC445A0OncTamPlXENQJQ\naKkQVke6MvTCsidXRZKD1XGLSHmG88KNclE2hV5VNv1WEYLz09YkR/fpdPdLO8m2\nLUthfo77vyEvpj1iPvCZ2zlzxrTi+OA5nEpdtb5FVi433COxCwVcksyYbaB+/6es\nVSeP8p3Zo0m3LrGIB3YbRkEaO2q8BbaF89/Zw4smTQKBgQDPjbDiNeS1Oox250l8\ny9WLrSx7Qe8Iv+nbyEkkwIbBSyBiV3qlD2+f2MEYLKw8R504UIfq9puxjZnez7So\nz3mKwnAJtMVmf4K3czyILXaEGkbrgu22d8ChofjWayjIX9rJehDVgjmoffg9DKxS\n7wdoY3Fs7UO65xy9afZYM2pcBQKBgQC8CJDQpdes0yzn+Rm/zejmxZ/odEOnqbVz\nQd1kVRTfe0RBx9ZtiL2WD3I2pKR5qtOPcx3jT0781zrpBIwNjcwjbyw7UE2W6u2R\nq8iPNYdYKMNI/W69gRqQfDwirrdbFwEXR71vzx3vCFSA3VUiBekDP68o3kCACWy3\nAEJx+fbP3QKBgQDKOgVBsz8fMWfRJrOci8KKsHWptulfPhZvFavmykvCJB/ukcum\n7e5V8czacBR1O1W9nAGCdzvl+NEWnowo+tYy1BZz7pVztAO6GOa+zIUwW6YELHLP\nGckv83BQAuMesP6s1ml2jsb9G5f2a9WvjMRL+rB2cItQnYSMLaVf9ODJvQKBgDjf\n4mWp9B2LVobn+tjgQHUlC6Q1Ho2lMIQnRP7nGUQrtc6r0nkZJjcwftx2WmWOvSUj\nrcOmpn6l32TCAlbLMBb7toZOWNmwP6GTMzvV9hU9Zyw5s/hQB6fyXAIllMJRp/vR\nsEQUgrpda6n6yJhc70kTRzj2WM4hi6eixXZSJExlAoGAVgyatl2/AzpBpluZTSP3\nnIvwwBFAW8lj1O8eq2246LDoP0/QnhnSSaMTMET8rGlcVzfhTyufvrXqwoirCwBA\njL8hDJRhOo8tKSEvoJbCwgxnblLLiop1oCdH0QLlQmxXBp/10h16UOLD8WeWVA1J\nfXZsxYxY3kY3U3QSLcku5aI=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-3bxh8@maybo-chat-app.iam.gserviceaccount.com",
  client_id: "100865151506402471199",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3bxh8%40maybo-chat-app.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
  databaseURL: "https://maybo-chat-app-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
