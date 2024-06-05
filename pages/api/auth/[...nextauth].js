import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/api/auth/callback/google", // 이걸 꼭 넣어줘야하는 구나
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);

// 배포 시에 redirect_uri 를 해당 배포 사이트로 바꿔줘야하는 듯
